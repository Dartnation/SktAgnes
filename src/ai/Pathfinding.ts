import { dist3, distXZ, type Vec3 } from '../core/math'

export interface NavLink {
  to: number
  cost: number
}

export interface NavNode {
  id: number
  ix: number
  iz: number
  x: number
  y: number
  z: number
  floor: number
  doorId?: string
  stair?: boolean
  links: NavLink[]
}

export interface NavGrid {
  nodes: NavNode[]
  cellSize: number
}

export interface PathQuery {
  allowFloor?: (floor: number) => boolean
  blockDoor?: (doorId: string) => boolean
}

class MinHeap {
  private a: { p: number; id: number }[] = []
  get size(): number {
    return this.a.length
  }
  push(p: number, id: number): void {
    const a = this.a
    a.push({ p, id })
    let i = a.length - 1
    while (i > 0) {
      const parent = (i - 1) >> 1
      if (a[parent].p <= a[i].p) break
      const tmp = a[parent]
      a[parent] = a[i]
      a[i] = tmp
      i = parent
    }
  }
  pop(): { p: number; id: number } | undefined {
    const a = this.a
    if (!a.length) return undefined
    const top = a[0]
    const last = a.pop()
    if (a.length > 0 && last) {
      a[0] = last
      let i = 0
      for (;;) {
        const l = i * 2 + 1
        const r = l + 1
        let m = i
        if (l < a.length && a[l].p < a[m].p) m = l
        if (r < a.length && a[r].p < a[m].p) m = r
        if (m === i) break
        const tmp = a[m]
        a[m] = a[i]
        a[i] = tmp
        i = m
      }
    }
    return top
  }
}

export function traversable(node: NavNode, q: PathQuery): boolean {
  if (q.allowFloor && !q.allowFloor(node.floor)) return false
  if (node.doorId && q.blockDoor && q.blockDoor(node.doorId)) return false
  return true
}

/**
 * A* over the nav graph. Heuristic is planar distance, which stays admissible
 * because every link cost is at least the planar distance between its ends.
 * When the goal floor is forbidden (the monster is not allowed upstairs yet),
 * the search heads for the nearest stair node on an allowed floor instead of
 * a room that merely shares the goal's XZ.
 */
export function findPath(grid: NavGrid, start: Vec3, goal: Vec3, query: PathQuery = {}): Vec3[] | null {
  const nodes = grid.nodes
  if (!nodes.length) return null
  const startId = nearestNode(grid, start, query, false)
  if (startId < 0) return null
  const goalFloor = floorGuess(goal.y)
  const goalAllowed = !query.allowFloor || query.allowFloor(goalFloor)
  let goalId = -1
  if (goalAllowed) {
    goalId = nearestNode(grid, goal, query, false)
  } else {
    goalId = nearestStair(grid, goal, query)
    if (goalId < 0) goalId = nearestNode(grid, goal, query, false)
  }
  if (goalId < 0) return null
  const ids = astar(nodes, startId, goalId, (id) => traversable(nodes[id], query))
  if (!ids) return null
  const raw = ids.map((id) => ({ x: nodes[id].x, y: nodes[id].y, z: nodes[id].z }))
  return smoothPath(raw, grid, query, bucketIndex(grid))
}

function bucketIndex(grid: NavGrid): Map<string, number[]> {
  const map = new Map<string, number[]>()
  for (const n of grid.nodes) {
    const k = `${n.ix},${n.iz}`
    let list = map.get(k)
    if (!list) {
      list = []
      map.set(k, list)
    }
    list.push(n.id)
  }
  return map
}

export function nearestNode(grid: NavGrid, pos: Vec3, query: PathQuery, stairsOnly: boolean): number {
  let best = -1
  let bestD = Infinity
  for (const n of grid.nodes) {
    if (stairsOnly && !n.stair) continue
    if (!traversable(n, query)) continue
    const dy = Math.abs(n.y - pos.y)
    if (dy > 3.2) continue
    const d = (n.x - pos.x) ** 2 + (n.z - pos.z) ** 2 + dy * dy * 0.15
    if (d < bestD) {
      bestD = d
      best = n.id
    }
  }
  return best
}

function nearestStair(grid: NavGrid, goal: Vec3, query: PathQuery): number {
  let best = -1
  let bestD = Infinity
  for (const n of grid.nodes) {
    if (!n.stair) continue
    if (!traversable(n, query)) continue
    const d = (n.x - goal.x) ** 2 + (n.z - goal.z) ** 2
    if (d < bestD) {
      bestD = d
      best = n.id
    }
  }
  return best
}

export function floorGuess(y: number): number {
  if (y < 2) return -1
  if (y < 6) return 0
  return 1
}

/** Testable A* on an explicit graph. Returns node ids, or null. */
export function astar(
  nodes: NavNode[],
  startId: number,
  goalId: number,
  canVisit: (id: number) => boolean,
): number[] | null {
  if (!canVisit(startId) || !canVisit(goalId)) return null
  if (startId === goalId) return [startId]
  const gScore = new Map<number, number>()
  const came = new Map<number, number>()
  const closed = new Set<number>()
  const open = new MinHeap()
  gScore.set(startId, 0)
  const h0 = distXZ(nodes[startId], nodes[goalId])
  open.push(h0, startId)
  const maxSteps = nodes.length * 12 + 32
  let steps = 0
  while (open.size > 0 && steps++ < maxSteps) {
    const cur = open.pop()
    if (!cur) break
    const id = cur.id
    if (closed.has(id)) continue
    if (id === goalId) {
      const path = [id]
      let c = id
      while (came.has(c)) {
        c = came.get(c) as number
        path.push(c)
      }
      path.reverse()
      return path
    }
    closed.add(id)
    const base = gScore.get(id) ?? Infinity
    for (const link of nodes[id].links) {
      if (!canVisit(link.to) || closed.has(link.to)) continue
      const ng = base + link.cost
      if (ng + 1e-6 < (gScore.get(link.to) ?? Infinity)) {
        gScore.set(link.to, ng)
        came.set(link.to, id)
        const h = distXZ(nodes[link.to], nodes[goalId])
        open.push(ng + h, link.to)
      }
    }
  }
  return null
}

function smoothPath(points: Vec3[], grid: NavGrid, query: PathQuery, buckets: Map<string, number[]>): Vec3[] {
  if (points.length < 3) return points
  const out: Vec3[] = [points[0]]
  let i = 0
  while (i < points.length - 1) {
    let j = points.length - 1
    while (j > i + 1 && !segmentNearNav(points[i], points[j], grid, query, buckets)) j--
    out.push(points[j])
    i = j
  }
  return out
}

/** A shortcut is legal only when every sample sits on a real traversable node. */
function segmentNearNav(
  a: Vec3,
  b: Vec3,
  grid: NavGrid,
  query: PathQuery,
  buckets: Map<string, number[]>,
): boolean {
  const d = dist3(a, b)
  const steps = Math.max(2, Math.ceil(d / 0.25))
  for (let i = 1; i < steps; i++) {
    const t = i / steps
    const p = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t }
    if (!nearTraversable(grid, p, query, buckets)) return false
  }
  return true
}

function nearTraversable(grid: NavGrid, p: Vec3, query: PathQuery, buckets: Map<string, number[]>): boolean {
  const cs = grid.cellSize
  const ix = Math.floor(p.x / cs)
  const iz = Math.floor(p.z / cs)
  for (let ox = -1; ox <= 1; ox++) {
    for (let oz = -1; oz <= 1; oz++) {
      const list = buckets.get(`${ix + ox},${iz + oz}`)
      if (!list) continue
      for (const id of list) {
        const n = grid.nodes[id]
        if (!traversable(n, query)) continue
        const dx = n.x - p.x
        const dz = n.z - p.z
        if (dx * dx + dz * dz <= 0.42 * 0.42 && Math.abs(n.y - p.y) < 1.05) return true
      }
    }
  }
  return false
}
