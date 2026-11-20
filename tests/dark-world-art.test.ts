import { describe, expect, it } from 'vitest'
import { buildWorld } from '../src/world/buildWorld'
import { FLOOR_Y, PROPS, ROOMS, STAIRS } from '../src/world/data'

describe('dark hospital art-direction invariants', () => {
  it('keeps both stair flights centered and away from the right-hand wall', () => {
    const stairwell = ROOMS.find(r => r.id === 'trappe0')!
    for (const flight of STAIRS) {
      const left = flight.x - stairwell.x
      const right = stairwell.x + stairwell.w - (flight.x + flight.w)
      expect(left).toBeGreaterThan(1.6)
      expect(right).toBeGreaterThan(1.6)
      expect(Math.abs(left - right)).toBeLessThan(0.15)
      expect(FLOOR_Y[flight.toFloor]).toBeGreaterThan(FLOOR_Y[flight.fromFloor])
    }
  })

  it('gives every main hospital room purposeful furniture without new pickups', () => {
    const rooms = ROOMS.filter(r => !r.id.startsWith('trappe') && r.id !== 'stilhed')
    for (const room of rooms) {
      expect(PROPS.filter(p => p.room === room.id).length, room.id).toBeGreaterThanOrEqual(3)
    }
  })

  it('places multiple ceiling fixtures in the first room with small pools of light', () => {
    const world = buildWorld()
    const reception = world.lights.filter(l => l.room === 'reception')
    expect(reception).toHaveLength(3)
    expect(reception.every(l => l.intensity > 0 && l.intensity < 9 && l.flicker)).toBe(true)
    expect(world.lights.filter(l => l.room === 'reception').map(l=>l.x)).toEqual([2.25,6.05,9.2])
  })
})
