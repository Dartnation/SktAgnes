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

/** Visual-only cartographic styling. Projection and fog-of-war stay unchanged. */
export function paintMinimap(ctx: CanvasRenderingContext2D, w: number, h: number, state: MiniState): void {
  const projected = projectForSize(state, w, h)
  ctx.clearRect(0, 0, w, h)
  const ink = '#d8c6ad'
  const inset = Math.max(3, w * 0.016)
  const grid = Math.max(13, Math.round(w / 15))
  const paper = ctx.createLinearGradient(0, 0, w, h)
  paper.addColorStop(0, '#1c2021')
  paper.addColorStop(0.55, '#121719')
  paper.addColorStop(1, '#0a0c0e')
  ctx.fillStyle = paper
  ctx.fillRect(0, 0, w, h)
  // The fine drafting grid provides orientation without changing disclosure.
  ctx.lineWidth = 0.5
  ctx.strokeStyle = 'rgba(182,163,135,0.075)'
  for (let x = grid; x < w; x += grid) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
  }
  for (let y = grid; y < h; y += grid) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
  }
  ctx.strokeStyle = 'rgba(202,184,155,0.33)'
  ctx.lineWidth = 1
  ctx.strokeRect(inset, inset, w - inset * 2, h - inset * 2)

  // Header is intentionally small and does not cover any room data.
  const font = Math.max(10, Math.min(14, Math.round(w / 21)))
  ctx.font = '600 ' + font + 'px Georgia, serif'
  ctx.textBaseline = 'top'
  ctx.fillStyle = '#d6c3a5'
  ctx.fillText('ETAGE ' + (state.floor + 1), 10, 7)
  ctx.fillStyle = '#a48161'
  ctx.fillRect(10, font + 10, Math.min(w - 20, 46), 1)

  for (const room of projected.rooms) {
    const x = room.x, y = room.y, rw = room.w, rh = room.h
    if (rw <= 0 || rh <= 0) continue
    const fill = room.here ? '#512d2c' : room.known ? '#373836' : '#202224'
    ctx.fillStyle = fill
    ctx.fillRect(x, y, rw, rh)
    ctx.strokeStyle = room.here ? '#d3a07d' : room.known ? '#8f8c81' : '#53534d'
    ctx.lineWidth = room.here ? 1.8 : 1.1
    ctx.strokeRect(x + 0.5, y + 0.5, Math.max(0, rw - 1), Math.max(0, rh - 1))
    if (room.here) {
      ctx.fillStyle = '#c9987b'
      ctx.fillRect(x + 2, y + 2, Math.min(rw - 4, 3), Math.max(0, rh - 4))
    }
    if (rw < 12 || rh < 13) continue
    ctx.save()
    // Never paint a room label over a neighbouring room.
    ctx.beginPath()
    ctx.rect(x + 2, y + 2, Math.max(0, rw - 4), Math.max(0, rh - 4))
    ctx.clip()
    const labelFont = Math.min(13, Math.max(9, Math.round(w / 25)))
    ctx.font = '500 ' + labelFont + 'px Georgia, serif'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillStyle = room.known ? (room.here ? '#f3e2cc' : ink) : '#9f9688'
    let label = room.label
    const maxWidth = Math.max(2, rw - 11)
    while (label.length > 2 && ctx.measureText(label).width > maxWidth) {
      label = label.slice(0, -2) + '…'
    }
    if (ctx.measureText(label).width <= maxWidth) {
      ctx.fillText(label, x + rw / 2, y + rh * 0.40)
    }
    ctx.restore()
  }

  for (const door of projected.doors) {
    ctx.fillStyle = door.locked ? '#bc7158' : '#c5bbab'
    ctx.fillRect(door.x - 2.6, door.y - 2.6, 5.2, 5.2)
    if (door.locked) {
      ctx.strokeStyle = '#321b18'
      ctx.strokeRect(door.x - 3.3, door.y - 3.3, 6.6, 6.6)
    }
  }
  for (const goal of projected.goals) {
    ctx.strokeStyle = '#e0c089'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.arc(goal.x, goal.y, 5, 0, Math.PI * 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(goal.x - 8, goal.y)
    ctx.lineTo(goal.x - 5, goal.y)
    ctx.moveTo(goal.x + 5, goal.y)
    ctx.lineTo(goal.x + 8, goal.y)
    ctx.stroke()
  }
  for (const cell of projected.batteries) {
    ctx.fillStyle = '#d5c27e'
    ctx.fillRect(cell.x - 2, cell.y - 3, 4, 6)
  }
  if (projected.monster) {
    ctx.fillStyle = '#d77465'
    ctx.beginPath()
    ctx.arc(projected.monster.x, projected.monster.y, 3.2, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#ffad93'
    ctx.beginPath()
    ctx.arc(projected.monster.x, projected.monster.y, 6.5, 0, Math.PI * 2)
    ctx.stroke()
  }
  // Crisp direction mark; orientation is driven by the unchanged player yaw.
  ctx.save()
  ctx.translate(projected.player.x, projected.player.y)
  ctx.rotate(-projected.player.yaw)
  ctx.fillStyle = '#f5e8d1'
  ctx.strokeStyle = '#141719'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(0, 8)
  ctx.lineTo(5.0, -5)
  ctx.lineTo(0, -2)
  ctx.lineTo(-5.0, -5)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
  ctx.restore()
}

function projectForSize(state: MiniState, w: number, h: number): MapLayout {
  const base = projectMinimap(state)
  if (w === 220 && h === 150) return base
  const scaleX = w / 220
  const scaleY = h / 150
    const map = <T extends { x: number; y: number }>(point: T): T => ({ ...point, x: point.x * scaleX, y: point.y * scaleY })
  return {
    rooms: base.rooms.map((room) => ({ ...room, x: room.x * scaleX, y: room.y * scaleY, w: room.w * scaleX, h: room.h * scaleY })),
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
