import type { RoomDef } from '../world/data'

export interface MiniRoom {
  id: string
  name: string
  floor: number
  x: number
  z: number
  w: number
  d: number
}

export interface MiniDoor {
  id: string
  floor: number
  axis: 'x' | 'z'
  coord: number
  center: number
  a: string
  b: string
  locked: boolean
}

export interface MiniGoal {
  id: string
  roomId: string
  x: number
  z: number
  floor: number
}

export interface MiniState {
  rooms: MiniRoom[]
  floor: number
  px: number
  pz: number
  yaw: number
  visited: ReadonlySet<string>
  monster: { x: number; z: number; floor: number; show: boolean } | null
  batteries: { x: number; z: number; floor: number }[]
  doors: MiniDoor[]
  goals: MiniGoal[]
}

/** Rooms that must stay off the map until the player has actually been there. */
export const HIDDEN_UNTIL_FOUND = new Set(['stilhed', 'secret'])

export interface MapRoom {
  id: string
  known: boolean
  here: boolean
  x: number
  y: number
  w: number
  h: number
  label: string
}

export interface MapLayout {
  rooms: MapRoom[]
  doors: { id: string; x: number; y: number; locked: boolean }[]
  goals: { id: string; x: number; y: number }[]
  batteries: { x: number; y: number }[]
  player: { x: number; y: number; yaw: number }
  monster: { x: number; y: number } | null
}

/** CSS pixels times the screen scale, capped so a huge display does not allocate a giant canvas. */
export function backingStore(cssWidth: number, cssHeight: number, dpr: number): { width: number; height: number } {
  const scale = Number.isFinite(dpr) && dpr > 0 ? Math.min(3, dpr) : 1
  return {
    width: Math.max(1, Math.round(Math.max(1, cssWidth) * scale)),
    height: Math.max(1, Math.round(Math.max(1, cssHeight) * scale)),
  }
}

/** Where the current objective lives, when it has a single room. */
export function objectiveRoom(missionId: string): string | null {
  if (missionId === 'm2_reception') return 'reception'
  if (missionId === 'm3_generator') return 'kaeldergang'
  if (missionId === 'm4_arkiv') return 'arkiv'
  if (missionId === 'm7_udgang') return 'kammer'
  return null
}

export function projectMinimap(state: MiniState): MapLayout {
  const onFloor = state.rooms.filter((room) => room.floor === state.floor)
  const visited = (id: string) => state.visited.has(id)
  const hidden = (id: string) => HIDDEN_UNTIL_FOUND.has(id) || id.startsWith('trappe')
  const revealed = new Set<string>()
  for (const room of onFloor) {
    if (visited(room.id)) revealed.add(room.id)
  }
  for (const door of state.doors) {
    if (door.floor !== state.floor) continue
    if (visited(door.a) && !hidden(door.b)) revealed.add(door.b)
    if (visited(door.b) && !hidden(door.a)) revealed.add(door.a)
  }
  const shown = onFloor.filter((room) => revealed.has(room.id))
  const bounds = shown.length ? shown : onFloor.filter((room) => room.id === 'reception')
  let minX = Infinity
  let minZ = Infinity
  let maxX = -Infinity
  let maxZ = -Infinity
  for (const room of bounds) {
    minX = Math.min(minX, room.x)
    minZ = Math.min(minZ, room.z)
    maxX = Math.max(maxX, room.x + room.w)
    maxZ = Math.max(maxZ, room.z + room.d)
  }
  if (!Number.isFinite(minX)) {
    minX = 0
    minZ = 0
    maxX = 1
    maxZ = 1
  }
  return layout(state, shown, minX, minZ, maxX, maxZ)
}

function layout(state: MiniState, shown: MiniRoom[], minX: number, minZ: number, maxX: number, maxZ: number): MapLayout {
  const width = 220
  const height = 150
  const pad = 16
  const s = Math.min((width - pad * 2) / Math.max(1, maxX - minX), (height - 28) / Math.max(1, maxZ - minZ))
  const X = (x: number) => pad + (x - minX) * s
  const Z = (z: number) => 22 + (z - minZ) * s
  const here = shown.find((room) => state.px >= room.x && state.px <= room.x + room.w && state.pz >= room.z && state.pz <= room.z + room.d)
  const rooms: MapRoom[] = shown.map((room) => {
    const known = state.visited.has(room.id)
    return {
      id: room.id,
      known,
      here: room.id === here?.id,
      x: X(room.x),
      y: Z(room.z),
      w: room.w * s,
      h: room.d * s,
      label: known ? short(room.name) : '?',
    }
  })
  const doors = state.doors
    .filter((door) => door.floor === state.floor && shown.some((room) => room.id === door.a) && shown.some((room) => room.id === door.b))
    .map((door) => ({
      id: door.id,
      x: X(door.axis === 'x' ? door.coord : door.center),
      y: Z(door.axis === 'z' ? door.coord : door.center),
      locked: door.locked,
    }))
  const goals = state.goals
    .filter((goal) => goal.floor === state.floor && state.visited.has(goal.roomId))
    .map((goal) => ({ id: goal.id, x: X(goal.x), y: Z(goal.z) }))
  const batteries = state.batteries
    .filter((cell) => cell.floor === state.floor)
    .map((cell) => ({ x: X(cell.x), y: Z(cell.z) }))
  const monster = state.monster?.show && state.monster.floor === state.floor
    ? { x: X(state.monster.x), y: Z(state.monster.z) }
    : null
  return {
    rooms,
    doors,
    goals,
    batteries,
    player: { x: X(state.px), y: Z(state.pz), yaw: state.yaw },
    monster,
  }
}

/** Draw the current floor. Secret rooms stay blank until they have been visited. */
export function paintMinimap(ctx: CanvasRenderingContext2D, w: number, h: number, state: MiniState): void {
  const projected = projectForSize(state, w, h)
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = 'rgba(8,7,8,0.72)'
  ctx.fillRect(0, 0, w, h)
  ctx.fillStyle = '#cbbba4'
  ctx.font = `${Math.max(11, Math.round(w / 20))}px Georgia, serif`
  ctx.fillText(`Etage ${state.floor + 1}`, 8, Math.max(14, Math.round(h / 11)))
  for (const room of projected.rooms) {
    ctx.fillStyle = room.here ? 'rgba(120,40,36,0.85)' : room.known ? 'rgba(60,52,48,0.9)' : 'rgba(28,26,28,0.9)'
    ctx.fillRect(room.x, room.y, room.w, room.h)
    ctx.strokeStyle = 'rgba(210,196,176,0.35)'
    ctx.strokeRect(room.x + 0.5, room.y + 0.5, room.w - 1, room.h - 1)
    ctx.fillStyle = room.known ? '#e7dcc7' : '#8a8178'
    ctx.font = `${Math.max(10, Math.round(w / 22))}px Georgia, serif`
    ctx.fillText(room.label, room.x + 4, room.y + Math.max(14, room.h * 0.28))
  }
  for (const door of projected.doors) {
    ctx.fillStyle = door.locked ? '#8d4a3a' : '#d7cbb6'
    ctx.fillRect(door.x - 3, door.y - 1.5, 6, 3)
  }
  for (const goal of projected.goals) {
    ctx.strokeStyle = '#e7dcc7'
    ctx.beginPath()
    ctx.arc(goal.x, goal.y, 5, 0, Math.PI * 2)
    ctx.stroke()
  }
  for (const cell of projected.batteries) {
    ctx.fillStyle = '#d7c27a'
    ctx.fillRect(cell.x - 2, cell.y - 2, 4, 4)
  }
  if (projected.monster) {
    ctx.fillStyle = '#ff3b32'
    ctx.beginPath()
    ctx.arc(projected.monster.x, projected.monster.y, 4, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.save()
  ctx.translate(projected.player.x, projected.player.y)
  ctx.rotate(-projected.player.yaw)
  ctx.fillStyle = '#f4efe6'
  ctx.beginPath()
  ctx.moveTo(0, 7)
  ctx.lineTo(4, -4)
  ctx.lineTo(-4, -4)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function projectForSize(state: MiniState, w: number, h: number): MapLayout {
  const base = projectMinimap(state)
  if (w === 220 && h === 150) return base
  const scaleX = w / 220
  const scaleY = h / 150
  const scale = Math.min(scaleX, scaleY)
  const map = <T extends { x: number; y: number }>(point: T): T => ({ ...point, x: point.x * scaleX, y: point.y * scaleY })
  return {
    rooms: base.rooms.map((room) => ({ ...room, x: room.x * scaleX, y: room.y * scaleY, w: room.w * scale, h: room.h * scale })),
    doors: base.doors.map(map),
    goals: base.goals.map(map),
    batteries: base.batteries.map(map),
    player: { ...map(base.player), yaw: base.player.yaw },
    monster: base.monster ? map(base.monster) : null,
  }
}

function short(name: string): string {
  return name.length > 16 ? name.slice(0, 15) + '…' : name
}

export function roomsOf(rooms: RoomDef[]): MiniRoom[] {
  return rooms.map((room) => ({ id: room.id, name: room.name, floor: room.floor, x: room.x, z: room.z, w: room.w, d: room.d }))
}
