import { beforeAll, describe, expect, it } from 'vitest'
import { astar, findPath, type NavNode } from '../src/ai/Pathfinding'
import { buildWorld, roomAt, sampleFloorY, type World } from '../src/world/buildWorld'
import { FLOOR_Y } from '../src/world/data'

function node(id: number, x: number, z: number): NavNode {
  return { id, ix: x, iz: z, x, y: 0, z, floor: 0, links: [] , stair: false }
}

function linkAll(nodes: NavNode[], pairs: [number, number][]) {
  for (const [a, b] of pairs) {
    nodes[a].links.push({ to: b, cost: 1 })
    nodes[b].links.push({ to: a, cost: 1 })
  }
}

describe('astar', () => {
  it('walks around a blocked center instead of through it', () => {
    const nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((id) => node(id, id % 3, Math.floor(id / 3)))
    linkAll(nodes, [
      [0, 1], [1, 2],
      [0, 3], [2, 5],
      [3, 6], [5, 8],
      [6, 7], [7, 8],
    ])
    const around = astar(nodes, 0, 8, () => true)
    expect(around).not.toBeNull()
    expect(around).not.toContain(4)
    expect(astar(nodes, 0, 8, (id) => id !== 1 && id !== 3)).toBeNull()
  })
})

describe('asylum navmesh', () => {
  let world: World
  beforeAll(() => {
    world = buildWorld()
  })

  it('joins every room to the entrance when doors are open', () => {
    const start = { x: 20, y: 4, z: 3 }
    const failures: string[] = []
    for (const r of world.rooms) {
      const goal = { x: r.x + r.w * 0.5, y: FLOOR_Y[r.floor] + 0.1, z: r.z + Math.min(r.d * 0.5, r.d - 0.8) }
      const open = findPath(world.nav, start, goal, { blockDoor: () => false })
      if (!open) failures.push(r.id)
    }
    expect(failures, `ikke forbundet: ${failures.join(', ')}`).toEqual([])
  })

  it('walks from reception up both stairs into the last chamber', () => {
    const start = { x: 6, y: 0, z: 6 }
    const kammer = { x: 42, y: 8, z: 6 }
    const route = findPath(world.nav, start, kammer, { blockDoor: () => false })
    expect(route && route.length).toBeGreaterThan(4)
    expect(route![0].y).toBeLessThan(1)
    expect(route![route!.length - 1].y).toBeGreaterThan(7)
  })

  it('keeps the exit shut until that door is unlocked', () => {
    const kammer = { x: 42, y: 8, z: 6 }
    const out = { x: 42, y: 8, z: 14 }
    expect(findPath(world.nav, kammer, out, { blockDoor: (id) => id === 'door_stilhed' })).toBeNull()
    expect(findPath(world.nav, kammer, out, { blockDoor: () => false })!.length).toBeGreaterThan(1)
  })

  it('names the twelve rooms', () => {
    expect(roomAt(world, 6, 6, 0)?.name).toBe('Receptionen')
    expect(roomAt(world, 42, 6, 0)?.name).toBe('Slagterummet')
    expect(roomAt(world, 6, 6, 4)?.name).toBe('Arkivrummet')
    expect(roomAt(world, 42, 6, 8)?.name).toBe('Det sidste kammer')
    const low = sampleFloorY(world, 51, 2, 0)
    const high = sampleFloorY(world, 51, 8, 6)
    expect(low).not.toBeNull()
    expect(high!).toBeGreaterThan(low!)
  })
})
