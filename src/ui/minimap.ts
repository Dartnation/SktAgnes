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

export interface MiniState {
  rooms: MiniRoom[]
  floor: number
  px: number
  pz: number
  yaw: number
  visited: ReadonlySet<string>
  monster: { x: number; z: number; show: boolean } | null
  batteries: { x: number; z: number; floor: number }[]
}

/** Draw the current floor. Unvisited rooms stay as '?'. */
export function paintMinimap(ctx: CanvasRenderingContext2D, w: number, h: number, state: MiniState): void {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = 'rgba(8,7,8,0.72)'
  ctx.fillRect(0, 0, w, h)
  const mine = state.rooms.filter((r) => r.floor === state.floor && !r.id.startsWith('trappe') && r.id !== 'stilhed')
  if (!mine.length) return
  let minX = Infinity
  let minZ = Infinity
  let maxX = -Infinity
  let maxZ = -Infinity
  for (const r of mine) {
    minX = Math.min(minX, r.x)
    minZ = Math.min(minZ, r.z)
    maxX = Math.max(maxX, r.x + r.w)
    maxZ = Math.max(maxZ, r.z + r.d)
  }
  const pad = 16
  const sx = (w - pad * 2) / Math.max(1, maxX - minX)
  const sy = (h - 28) / Math.max(1, maxZ - minZ)
  const s = Math.min(sx, sy)
  const X = (x: number) => pad + (x - minX) * s
  const Z = (z: number) => 22 + (z - minZ) * s
  ctx.fillStyle = '#cbbba4'
  ctx.font = '11px Georgia, serif'
  ctx.fillText(`Etage ${state.floor + 1}`, 8, 14)
  const here = mine.find((r) => state.px >= r.x && state.px <= r.x + r.w && state.pz >= r.z && state.pz <= r.z + r.d)
  for (const r of mine) {
    const known = state.visited.has(r.id)
    ctx.fillStyle = r.id === here?.id ? 'rgba(120,40,36,0.85)' : known ? 'rgba(60,52,48,0.9)' : 'rgba(28,26,28,0.9)'
    ctx.fillRect(X(r.x), Z(r.z), r.w * s, r.d * s)
    ctx.strokeStyle = 'rgba(210,196,176,0.35)'
    ctx.strokeRect(X(r.x) + 0.5, Z(r.z) + 0.5, r.w * s - 1, r.d * s - 1)
    ctx.fillStyle = known ? '#e7dcc7' : '#8a8178'
    ctx.font = '10px Georgia, serif'
    ctx.fillText(known ? short(r.name) : '?', X(r.x) + 4, Z(r.z) + 14)
  }
  for (const b of state.batteries) {
    if (b.floor !== state.floor) continue
    ctx.fillStyle = '#d7c27a'
    ctx.fillRect(X(b.x) - 2, Z(b.z) - 2, 4, 4)
  }
  if (state.monster?.show) {
    ctx.fillStyle = '#ff3b32'
    ctx.beginPath()
    ctx.arc(X(state.monster.x), Z(state.monster.z), 4, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.save()
  ctx.translate(X(state.px), Z(state.pz))
  ctx.rotate(-state.yaw)
  ctx.fillStyle = '#f4efe6'
  ctx.beginPath()
  ctx.moveTo(0, 7)
  ctx.lineTo(4, -4)
  ctx.lineTo(-4, -4)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

function short(name: string): string {
  return name.length > 16 ? name.slice(0, 15) + '…' : name
}

export function roomsOf(rooms: RoomDef[]): MiniRoom[] {
  return rooms.map((r) => ({ id: r.id, name: r.name, floor: r.floor, x: r.x, z: r.z, w: r.w, d: r.d }))
}
