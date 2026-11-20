import { describe, expect, it } from 'vitest'
import { bodyLean, clipForState } from '../src/ai/MonsterAnim'
import { DEVICES, HIDES, ROOMS } from '../src/world/data'

function inside(roomId: string, x: number, z: number): boolean {
  const room = ROOMS.find((item) => item.id === roomId)
  if (!room) return false
  return x > room.x + 0.4 && x < room.x + room.w - 0.4 && z > room.z + 0.4 && z < room.z + room.d - 0.4
}

describe('v3 interaction points', () => {
  it('places the generator, the safe and the radio inside their rooms and off the door line', () => {
    expect(DEVICES.map((d) => d.kind).sort()).toEqual(['generator', 'radio', 'safe'])
    for (const device of DEVICES) {
      expect(inside(device.room, device.x, device.z)).toBe(true)
      expect(Math.abs(device.z - 6)).toBeGreaterThan(1.4)
    }
  })

  it('places hides in front of furniture, not in a doorway', () => {
    expect(HIDES.length).toBeGreaterThanOrEqual(3)
    expect(HIDES.some((h) => h.kind === 'bed')).toBe(true)
    for (const hide of HIDES) {
      expect(inside(hide.room, hide.x, hide.z)).toBe(true)
      expect(Math.abs(hide.z - 6)).toBeGreaterThan(1.4)
    }
  })

  it('gives search a heavier lean than a walk', () => {
    expect(bodyLean('Search')).toBeGreaterThan(bodyLean('Walk'))
    expect(bodyLean('Run')).toBeGreaterThan(bodyLean('Search'))
    expect(clipForState('Search', 0.4).clip).toBe('Search')
  })
})
