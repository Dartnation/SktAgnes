import { distXZ, type Vec3 } from '../core/math'
import type { NavGrid, NavNode } from '../ai/Pathfinding'
import { segmentHitsAABB, type AABB } from '../physics/Collision'
import {
  CELL,
  CONNECTIONS,
  DECALS,
  DEVICES,
  FLOOR_Y,
  HIDES,
  NAV_INSET,
  PICKUPS,
  PROPS,
  ROOMS,
  STAIRS,
  WALL_H,
  WAYPOINT_NUDGE,
  type ConnectionDef,
  type DecalDef,
  type DeviceDef,
  type HideDef,
  type PickupDef,
  type PropDef,
  type RoomDef,
  type StairDef,
} from './data'

export interface DoorInst {
  id: string
  kind: ConnectionDef['kind']
  floor: number
  axis: 'x' | 'z'
  coord: number
  spanMin: number
  spanMax: number
  center: number
  width: number
  locked: boolean
  keyId?: string
  needsPower?: boolean
  a: string
  b: string
  signA?: string
  signB?: string
}

export interface WallSeg {
  floor: number
  axis: 'x' | 'z'
  coord: number
  min: number
  max: number
  mat: RoomDef['wallMat']
  exterior: boolean
  roomId: string
}

export interface LightDef {
  id: string
  room: string
  x: number
  y: number
  z: number
  color: string
  intensity: number
  distance: number
  mode: 'always' | 'power' | 'secret'
  flicker: boolean
}

export interface World {
  rooms: RoomDef[]
  doors: DoorInst[]
  walls: WallSeg[]
  colliders: AABB[]
  props: PropDef[]
  pickups: PickupDef[]
  devices: DeviceDef[]
  hides: HideDef[]
  decals: DecalDef[]
  stairs: StairDef[]
  nav: NavGrid
  lights: LightDef[]
}

interface Edge {
  axis: 'x' | 'z'
  coord: number
  min: number
  max: number
}

export function buildWorld(): World {
  assertRooms()
  const doors = buildDoors()
  const walls = buildWalls(doors)
  const colliders = collidersFrom(walls)
  const nav = buildNav(doors, colliders)
  const lights = buildLights()
  return {
    rooms: ROOMS,
    doors,
    walls,
    colliders,
    props: PROPS,
    pickups: PICKUPS,
    devices: DEVICES,
    hides: HIDES,
    decals: DECALS,
    stairs: STAIRS,
    nav,
    lights,
  }
}

function assertRooms(): void {
  for (let i = 0; i < ROOMS.length; i++) {
    for (let j = i + 1; j < ROOMS.length; j++) {
      const a = ROOMS[i]
      const b = ROOMS[j]
      if (a.floor !== b.floor) continue
      const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x)
      const oz = Math.min(a.z + a.d, b.z + b.d) - Math.max(a.z, b.z)
      if (ox > 0.02 && oz > 0.02) {
        throw new Error(`Rum overlapper: ${a.id} og ${b.id}`)
      }
    }
  }
  const ids = new Set(ROOMS.map((r) => r.id))
  for (const c of CONNECTIONS) {
    if (!ids.has(c.a) || !ids.has(c.b)) throw new Error(`Forbindelse ${c.id} mangler rum`)
    const edge = sharedEdge(room(c.a), room(c.b))
    if (!edge) throw new Error(`Forbindelse ${c.id} rører ikke`)
  }
  for (const p of PROPS) {
    const r = room(p.room)
    if (!pointInRoom(r, p.x, p.z, 0.05)) throw new Error(`Prop ${p.id} er uden for ${p.room}`)
  }
  for (const p of PICKUPS) {
    const r = room(p.room)
    if (!pointInRoom(r, p.x, p.z, 0.02)) throw new Error(`Pickup ${p.id} er uden for ${p.room}`)
  }
}

export function room(id: string): RoomDef {
  const r = ROOMS.find((x) => x.id === id)
  if (!r) throw new Error(`Ukendt rum ${id}`)
  return r
}

function pointInRoom(r: RoomDef, x: number, z: number, pad = 0): boolean {
  return x >= r.x - pad && x <= r.x + r.w + pad && z >= r.z - pad && z <= r.z + r.d + pad
}

function sharedEdge(a: RoomDef, b: RoomDef): Edge | null {
  if (a.floor !== b.floor) return null
  const z0 = Math.max(a.z, b.z)
  const z1 = Math.min(a.z + a.d, b.z + b.d)
  const x0 = Math.max(a.x, b.x)
  const x1 = Math.min(a.x + a.w, b.x + b.w)
  const touchX = Math.abs(a.x + a.w - b.x) < 0.03 || Math.abs(b.x + b.w - a.x) < 0.03
  const touchZ = Math.abs(a.z + a.d - b.z) < 0.03 || Math.abs(b.z + b.d - a.z) < 0.03
  if (touchX && z1 - z0 > 0.4) {
    const coord = Math.abs(a.x + a.w - b.x) < 0.03 ? a.x + a.w : b.x + b.w
    return { axis: 'x', coord, min: z0, max: z1 }
  }
  if (touchZ && x1 - x0 > 0.4) {
    const coord = Math.abs(a.z + a.d - b.z) < 0.03 ? a.z + a.d : b.z + b.d
    return { axis: 'z', coord, min: x0, max: x1 }
  }
  return null
}

function buildDoors(): DoorInst[] {
  return CONNECTIONS.map((c) => {
    const a = room(c.a)
    const b = room(c.b)
    const edge = sharedEdge(a, b)
    if (!edge) throw new Error(`Dør ${c.id} uden kant`)
    const overlap = edge.max - edge.min
    const margin = 0.26
    let width = c.width ?? (c.kind === 'arch' ? Math.min(2.7, overlap - 0.8) : 1.15)
    width = Math.min(width, overlap - margin * 2)
    if (width < 0.82) throw new Error(`Dør ${c.id} er for smal (${width.toFixed(2)} / overlap ${overlap.toFixed(2)})`)
    const at = c.at ?? 0.5
    let center = edge.min + overlap * at
    const half = width / 2
    center = Math.max(edge.min + margin + half, Math.min(edge.max - margin - half, center))
    return {
      id: c.id,
      kind: c.kind,
      floor: a.floor,
      axis: edge.axis,
      coord: edge.coord,
      spanMin: center - half,
      spanMax: center + half,
      center,
      width,
      locked: !!c.locked,
      keyId: c.keyId,
      needsPower: c.needsPower,
      a: c.a,
      b: c.b,
      signA: c.signA,
      signB: c.signB,
    }
  })
}

function buildWalls(doors: DoorInst[]): WallSeg[] {
  const holes = doors.map((d) => ({
    floor: d.floor,
    axis: d.axis,
    coord: d.coord,
    min: d.spanMin,
    max: d.spanMax,
  }))
  const walls: WallSeg[] = []
  for (const r of ROOMS) {
    const sides: { axis: 'x' | 'z'; coord: number; min: number; max: number }[] = [
      { axis: 'z', coord: r.z, min: r.x, max: r.x + r.w },
      { axis: 'z', coord: r.z + r.d, min: r.x, max: r.x + r.w },
      { axis: 'x', coord: r.x, min: r.z, max: r.z + r.d },
      { axis: 'x', coord: r.x + r.w, min: r.z, max: r.z + r.d },
    ]
    for (const side of sides) {
      let intervals: [number, number][] = [[side.min, side.max]]
      let exterior = true
      for (const other of ROOMS) {
        if (other.id === r.id || other.floor !== r.floor) continue
        const shared = portionShared(side, other)
        if (!shared) continue
        exterior = false
        if (other.id < r.id) intervals = subtract(intervals, shared.min, shared.max)
      }
      for (const hole of holes) {
        if (hole.floor !== r.floor || hole.axis !== side.axis) continue
        if (Math.abs(hole.coord - side.coord) > 0.04) continue
        intervals = subtract(intervals, hole.min, hole.max)
      }
      for (const [a, b] of intervals) {
        if (b - a < 0.12) continue
        walls.push({
          floor: r.floor,
          axis: side.axis,
          coord: side.coord,
          min: a,
          max: b,
          mat: r.wallMat,
          exterior,
          roomId: r.id,
        })
      }
    }
  }
  return walls
}

function portionShared(
  side: { axis: 'x' | 'z'; coord: number; min: number; max: number },
  other: RoomDef,
): { min: number; max: number } | null {
  if (side.axis === 'x') {
    const north = other.x + other.w
    const south = other.x
    if (Math.abs(north - side.coord) > 0.03 && Math.abs(south - side.coord) > 0.03) return null
    const min = Math.max(side.min, other.z)
    const max = Math.min(side.max, other.z + other.d)
    if (max - min < 0.2) return null
    return { min, max }
  }
  const north = other.z + other.d
  const south = other.z
  if (Math.abs(north - side.coord) > 0.03 && Math.abs(south - side.coord) > 0.03) return null
  const min = Math.max(side.min, other.x)
  const max = Math.min(side.max, other.x + other.w)
  if (max - min < 0.2) return null
  return { min, max }
}

function subtract(intervals: [number, number][], cutA: number, cutB: number): [number, number][] {
  const out: [number, number][] = []
  for (const [a, b] of intervals) {
    if (cutB <= a || cutA >= b) {
      out.push([a, b])
      continue
    }
    if (cutA > a) out.push([a, Math.max(a, cutA)])
    if (cutB < b) out.push([Math.min(b, cutB), b])
  }
  return out
}

function collidersFrom(walls: WallSeg[]): AABB[] {
  const list: AABB[] = []
  const t = 0.22
  for (const w of walls) {
    const y0 = FLOOR_Y[w.floor]
    const y1 = y0 + WALL_H
    if (w.axis === 'x') {
      list.push({ minX: w.coord - t / 2, maxX: w.coord + t / 2, minY: y0, maxY: y1, minZ: w.min, maxZ: w.max, id: `wall` })
    } else {
      list.push({ minX: w.min, maxX: w.max, minY: y0, maxY: y1, minZ: w.coord - t / 2, maxZ: w.coord + t / 2, id: `wall` })
    }
  }
  for (const p of PROPS) {
    if (p.block === 'none') continue
    const r = room(p.room)
    const { bw, bd } = footprint(p.w, p.d, p.rot)
    const y0 = FLOOR_Y[r.floor] + (p.yOff ?? 0)
    list.push({
      minX: p.x - bw / 2,
      maxX: p.x + bw / 2,
      minY: y0,
      maxY: y0 + p.h,
      minZ: p.z - bd / 2,
      maxZ: p.z + bd / 2,
      id: p.id,
      standOnly: p.block === 'stand',
      blocksUntilUnlock: p.blocksUntilUnlock,
    })
  }
  return list
}

export function footprint(w: number, d: number, rot: number): { bw: number; bd: number } {
  const c = Math.abs(Math.cos(rot))
  const s = Math.abs(Math.sin(rot))
  return { bw: w * c + d * s, bd: w * s + d * c }
}

/** Fully shut leaf blocks the hole. Once it has swung clear, the collider is gone so it cannot shove the player. */
export function doorCollider(door: DoorInst, openAmount: number): AABB | null {
  if (door.kind !== 'door') return null
  if (openAmount > 0.28) return null
  const y0 = FLOOR_Y[door.floor]
  const thick = 0.16
  if (door.axis === 'x') {
    return {
      minX: door.coord - thick / 2,
      maxX: door.coord + thick / 2,
      minY: y0,
      maxY: y0 + 2.55,
      minZ: door.spanMin,
      maxZ: door.spanMax,
      id: door.id,
    }
  }
  return {
    minX: door.spanMin,
    maxX: door.spanMax,
    minY: y0,
    maxY: y0 + 2.55,
    minZ: door.coord - thick / 2,
    maxZ: door.coord + thick / 2,
    id: door.id,
  }
}

export function doorBlocksNav(door: DoorInst, unlocked: ReadonlySet<string>): boolean {
  if (door.kind === 'arch') return false
  if (door.locked && !unlocked.has(door.id)) return true
  return false
}

export function activeColliders(world: World, unlocked: ReadonlySet<string>, open: ReadonlyMap<string, number>): AABB[] {
  const list = world.colliders.filter((c) => !c.blocksUntilUnlock || !unlocked.has(c.blocksUntilUnlock))
  for (const door of world.doors) {
    const box = doorCollider(door, open.get(door.id) ?? 0)
    if (box) list.push(box)
  }
  return list
}

function buildNav(doors: DoorInst[], colliders: AABB[]): NavGrid {
  const nodes: NavNode[] = []
  const map = new Map<string, NavNode>()

  const add = (partial: Omit<NavNode, 'id' | 'links'>): NavNode => {
    const node: NavNode = { ...partial, id: nodes.length, links: [] }
    nodes.push(node)
    return node
  }

  const propBlocks = (x: number, z: number, floor: number): boolean => {
    for (const p of PROPS) {
      if (p.block === 'none' || p.blocksUntilUnlock) continue
      if (room(p.room).floor !== floor) continue
      const { bw, bd } = footprint(p.w, p.d, p.rot)
      const inf = 0.12
      if (Math.abs(x - p.x) <= bw / 2 + inf && Math.abs(z - p.z) <= bd / 2 + inf) return true
    }
    return false
  }

  const inStair = (x: number, z: number): boolean => {
    for (const s of STAIRS) {
      if (x >= s.x - 0.12 && x <= s.x + s.w + 0.12 && z >= s.z - 0.12 && z <= s.z + s.d + 0.12) return true
    }
    return false
  }

  for (const r of ROOMS) {
    const y = FLOOR_Y[r.floor]
    const minIx = Math.floor(r.x / CELL) - 1
    const maxIx = Math.floor((r.x + r.w) / CELL) + 1
    const minIz = Math.floor(r.z / CELL) - 1
    const maxIz = Math.floor((r.z + r.d) / CELL) + 1
    for (let ix = minIx; ix <= maxIx; ix++) {
      for (let iz = minIz; iz <= maxIz; iz++) {
        const x = (ix + 0.5) * CELL
        const z = (iz + 0.5) * CELL
        if (x < r.x + NAV_INSET || x > r.x + r.w - NAV_INSET) continue
        if (z < r.z + NAV_INSET || z > r.z + r.d - NAV_INSET) continue
        if (inStair(x, z)) continue
        if (propBlocks(x, z, r.floor)) continue
        const key = `${ix},${iz},${r.floor}`
        if (map.has(key)) continue
        const node = add({ ix, iz, x, y, z, floor: r.floor })
        map.set(key, node)
      }
    }
  }

  for (const door of doors) {
    const reach = 1.05
    const half = door.width * 0.4
    const minX = door.axis === 'x' ? door.coord - reach : door.center - half
    const maxX = door.axis === 'x' ? door.coord + reach : door.center + half
    const minZ = door.axis === 'z' ? door.coord - reach : door.center - half
    const maxZ = door.axis === 'z' ? door.coord + reach : door.center + half
    const minIx = Math.floor(minX / CELL) - 1
    const maxIx = Math.floor(maxX / CELL) + 1
    const minIz = Math.floor(minZ / CELL) - 1
    const maxIz = Math.floor(maxZ / CELL) + 1
    for (let ix = minIx; ix <= maxIx; ix++) {
      for (let iz = minIz; iz <= maxIz; iz++) {
        const x = (ix + 0.5) * CELL
        const z = (iz + 0.5) * CELL
        if (x < minX || x > maxX || z < minZ || z > maxZ) continue
        if (propBlocks(x, z, door.floor)) continue
        const key = `${ix},${iz},${door.floor}`
        if (map.has(key)) continue
        const node = add({
          ix,
          iz,
          x,
          y: FLOOR_Y[door.floor],
          z,
          floor: door.floor,
          doorId: door.kind === 'arch' ? undefined : door.id,
        })
        map.set(key, node)
      }
    }
  }

  const link = (a: NavNode, b: NavNode) => {
    if (a.id === b.id) return
    const cost = Math.hypot(a.x - b.x, a.z - b.z, (a.y - b.y) * 0.65) 
    if (!a.links.some((l) => l.to === b.id)) a.links.push({ to: b.id, cost })
    if (!b.links.some((l) => l.to === a.id)) b.links.push({ to: a.id, cost })
  }

  for (const node of nodes) {
    if (node.stair) continue
    for (let ox = -1; ox <= 1; ox++) {
      for (let oz = -1; oz <= 1; oz++) {
        if (ox === 0 && oz === 0) continue
        const other = map.get(`${node.ix + ox},${node.iz + oz},${node.floor}`)
        if (!other || other.stair || other.id < node.id) continue
        if (Math.abs(ox) === 1 && Math.abs(oz) === 1) {
          const o1 = map.get(`${node.ix + ox},${node.iz},${node.floor}`)
          const o2 = map.get(`${node.ix},${node.iz + oz},${node.floor}`)
          if (!o1 || !o2 || o1.stair || o2.stair) continue
        }
        const dist = Math.hypot(node.x - other.x, node.z - other.z)
        if (dist > 0.92) continue
        link(node, other)
      }
    }
  }

  for (const stair of STAIRS) {
    const chain: NavNode[] = []
    const length = stair.axis === 'z' ? stair.d : stair.w
    const steps = Math.max(2, Math.round(length / CELL))
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const x = stair.axis === 'z' ? stair.x + stair.w * 0.5 : stair.x + t * stair.w
      const z = stair.axis === 'z' ? stair.z + t * stair.d : stair.z + stair.d * 0.5
      const y = FLOOR_Y[stair.fromFloor] + t * (FLOOR_Y[stair.toFloor] - FLOOR_Y[stair.fromFloor])
      const floor = y < 2 ? -1 : y < 6 ? 0 : 1
      chain.push(
        add({
          ix: Math.floor(x / CELL),
          iz: Math.floor(z / CELL),
          x,
          y,
          z,
          floor,
          stair: true,
        }),
      )
    }
    for (let i = 0; i < chain.length - 1; i++) link(chain[i], chain[i + 1])
    connectStairEnd(chain[0], stair.fromFloor, map, nodes, colliders)
    connectStairEnd(chain[chain.length - 1], stair.toFloor, map, nodes, colliders)
  }

  return { nodes, cellSize: CELL }
}

function connectStairEnd(
  end: NavNode,
  floor: number,
  map: Map<string, NavNode>,
  nodes: NavNode[],
  colliders: AABB[],
): void {
  const candidates: NavNode[] = []
  for (const n of nodes) {
    if (n.stair || n.floor !== floor) continue
    const d = Math.hypot(n.x - end.x, n.z - end.z)
    if (d < 3.4) candidates.push(n)
  }
  candidates.sort((a, b) => Math.hypot(a.x - end.x, a.z - end.z) - Math.hypot(b.x - end.x, b.z - end.z))
  for (const n of candidates) {
    const y = (n.y + end.y) * 0.5 + 0.4
    const a = { x: end.x, y, z: end.z }
    const b = { x: n.x, y, z: n.z }
    let blocked = false
    for (const box of colliders) {
      if (box.standOnly) continue
      if (box.maxY < y - 0.2 || box.minY > y + 0.2) continue
      if (segmentHitsAABB(a, b, box)) {
        blocked = true
        break
      }
    }
    if (blocked) continue
    const cost = Math.hypot(n.x - end.x, n.z - end.z, (n.y - end.y) * 0.65)
    if (!end.links.some((l) => l.to === n.id)) end.links.push({ to: n.id, cost })
    if (!n.links.some((l) => l.to === end.id)) n.links.push({ to: end.id, cost })
    return
  }
  // map is unused except as a sanity reference for the compiler via a touch.
  void map
  throw new Error(`Trappe ende kunne ikke forbindes (floor ${floor} @ ${end.x.toFixed(1)},${end.z.toFixed(1)})`)
}

function buildLights(): LightDef[] {
  const lights: LightDef[] = []
  for (const r of ROOMS) {
    if (r.light === 'none') continue
    const spots = lightSpots(r)
    spots.forEach((spot, i) => {
      const spec = lightSpec(r.light)
      lights.push({
        id: `${r.id}_${i}`,
        room: r.id,
        x: spot.x,
        z: spot.z,
        y: FLOOR_Y[r.floor] + (r.outdoors ? 2.4 : 2.7),
        color: spec.color,
        intensity: spec.intensity,
        distance: spec.distance,
        mode: spec.mode,
        flicker: spec.flicker,
      })
    })
  }
  return lights
}

function lightSpots(r: RoomDef): { x: number; z: number }[] {
  if (r.lightAt) return [r.lightAt]
  const long = Math.max(r.w, r.d)
  if (long > 18) {
    if (r.w >= r.d) {
      return [
        { x: r.x + r.w * 0.33, z: r.z + r.d * 0.5 },
        { x: r.x + r.w * 0.67, z: r.z + r.d * 0.5 },
      ]
    }
    return [
      { x: r.x + r.w * 0.5, z: r.z + r.d * 0.33 },
      { x: r.x + r.w * 0.5, z: r.z + r.d * 0.67 },
    ]
  }
  return [{ x: r.x + r.w * 0.5, z: r.z + r.d * 0.5 }]
}

function lightSpec(mode: RoomDef['light']): {
  color: string
  intensity: number
  distance: number
  mode: LightDef['mode']
  flicker: boolean
} {
  switch (mode) {
    case 'always-warm':
      return { color: '#ffb27a', intensity: 36, distance: 16, mode: 'always', flicker: true }
    case 'always-dim':
      return { color: '#ffc9a4', intensity: 14, distance: 11, mode: 'always', flicker: true }
    case 'always-candle':
      return { color: '#ff9448', intensity: 16, distance: 12, mode: 'always', flicker: true }
    case 'always-red':
      return { color: '#ff3b32', intensity: 10, distance: 10, mode: 'always', flicker: true }
    case 'secret':
      return { color: '#ffe0b8', intensity: 18, distance: 11, mode: 'secret', flicker: true }
    case 'power':
      return { color: '#ffd0a6', intensity: 22, distance: 13, mode: 'power', flicker: false }
    default:
      return { color: '#ffffff', intensity: 0, distance: 1, mode: 'always', flicker: false }
  }
}

export function stairHeight(stair: StairDef, x: number, z: number): number | null {
  if (x < stair.x || x > stair.x + stair.w || z < stair.z || z > stair.z + stair.d) return null
  const t = stair.axis === 'z' ? (z - stair.z) / stair.d : (x - stair.x) / stair.w
  const y0 = FLOOR_Y[stair.fromFloor]
  const y1 = FLOOR_Y[stair.toFloor]
  const u = Math.max(0, Math.min(1, t))
  return y0 + u * (y1 - y0)
}

export function sampleFloorY(world: World, x: number, z: number, currentY: number): number | null {
  for (const s of world.stairs) {
    const h = stairHeight(s, x, z)
    if (h !== null) return h
  }
  let best: number | null = null
  let bestD = 1e9
  for (const r of world.rooms) {
    if (x < r.x || x > r.x + r.w || z < r.z || z > r.z + r.d) continue
    const y = FLOOR_Y[r.floor]
    const d = Math.abs(y - currentY)
    if (d < bestD) {
      bestD = d
      best = y
    }
  }
  return best
}

export function roomAt(world: World, x: number, z: number, y: number): RoomDef | null {
  let best: RoomDef | null = null
  let bestD = 1e9
  for (const r of world.rooms) {
    if (x < r.x || x > r.x + r.w || z < r.z || z > r.z + r.d) continue
    const d = Math.abs(FLOOR_Y[r.floor] - y)
    if (d < bestD) {
      bestD = d
      best = r
    }
  }
  return best
}

export function patrolPoints(world: World, allow: (floor: number) => boolean, secretOpen: boolean): Vec3[] {
  const skip = new Set(['yard', 'tunnel'])
  if (!secretOpen) skip.add('secret')
  const pts: Vec3[] = []
  for (const r of world.rooms) {
    if (!allow(r.floor) || skip.has(r.id)) continue
    const nudge = WAYPOINT_NUDGE[r.id]
    const x = nudge ? nudge.x : r.x + r.w * 0.5
    const z = nudge ? nudge.z : r.z + r.d * 0.5
    pts.push({ x, y: FLOOR_Y[r.floor], z })
  }
  return pts
}

export function inZone(zone: { floor: number; minX: number; maxX: number; minZ: number; maxZ: number }, x: number, z: number, y: number): boolean {
  const floor = y < 2 ? -1 : y < 6 ? 0 : 1
  return floor === zone.floor && x >= zone.minX && x <= zone.maxX && z >= zone.minZ && z <= zone.maxZ
}

export function nearestDoor(world: World, x: number, z: number, floor: number, max = 1.6): DoorInst | null {
  let best: DoorInst | null = null
  let bestD = max
  for (const d of world.doors) {
    if (d.floor !== floor || d.kind === 'arch') continue
    const dds = distXZ({ x, y: 0, z }, { x: d.axis === 'x' ? d.coord : d.center, y: 0, z: d.axis === 'z' ? d.coord : d.center })
    if (dds < bestD) {
      bestD = dds
      best = d
    }
  }
  return best
}
