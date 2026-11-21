import { describe, expect, it } from 'vitest'
import { buildWorld, stairHeight } from '../src/world/buildWorld'
import { FLOOR_Y, ROOMS, STAIRS } from '../src/world/data'

describe('V3 cinematic stair redesign', () => {
  it('gives both flights physical wall clearance, not merely a visual offset', () => {
    const [lower, upper] = STAIRS
    const room = ROOMS.find(r => r.id === 'trappe0')!
    expect(lower.z - room.z).toBeGreaterThanOrEqual(0.85)
    expect(room.z + room.d - (upper.z + upper.d)).toBeGreaterThanOrEqual(0.85)
    expect(upper.z - (lower.z + lower.d)).toBeGreaterThanOrEqual(1.3)
    expect(lower.x - room.x).toBeGreaterThan(1)
    expect(room.x + room.w - lower.x - lower.w).toBeGreaterThan(1)
  })

  it('keeps ramp, floor cutouts and navigation in agreement', () => {
    const world = buildWorld()
    expect(world.stairs).toEqual(STAIRS)
    const [lower, upper] = STAIRS
    for (const stair of [lower, upper]) {
      const midX = stair.x + stair.w / 2
      expect(stairHeight(stair, midX, stair.z)).toBeCloseTo(FLOOR_Y[stair.fromFloor])
      expect(stairHeight(stair, midX, stair.z + stair.d)).toBeCloseTo(FLOOR_Y[stair.toFloor])
      const stairNodes = world.nav.nodes.filter(n => n.stair && n.x === midX &&
        n.z >= stair.z - 0.01 && n.z <= stair.z + stair.d + 0.01)
      expect(stairNodes.length).toBeGreaterThan(3)
      expect(stairNodes.every(n => n.links.length > 0)).toBe(true)
    }
  })
})
