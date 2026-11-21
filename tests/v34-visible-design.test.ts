import { describe, expect, it } from 'vitest'
import { buildWorld } from '../src/world/buildWorld'
import { FLOOR_Y, PROPS, ROOMS, STAIRS } from '../src/world/data'

describe('V3.4 visible design acceptance', () => {
  it('uses a full-size registration counter, not the original little table', () => {
    const desk = PROPS.find(p => p.id === 'rec_desk')
    expect(desk).toBeDefined()
    expect(desk!.kind).toBe('receptiondesk')
    expect(desk!.w).toBeGreaterThan(2.4)
    expect(desk!.h).toBeGreaterThan(1.0)
  })

  it('keeps the larger counter and every new room prop separate', () => {
    for (const p of PROPS) {
      const room = ROOMS.find(r => r.id === p.room)
      expect(room, p.id).toBeDefined()
      expect(p.x - p.w / 2, p.id).toBeGreaterThanOrEqual(room!.x + 0.25)
      expect(p.x + p.w / 2, p.id).toBeLessThanOrEqual(room!.x + room!.w - 0.25)
      expect(p.z - p.d / 2, p.id).toBeGreaterThanOrEqual(room!.z + 0.25)
      expect(p.z + p.d / 2, p.id).toBeLessThanOrEqual(room!.z + room!.d - 0.25)
      for (const q of PROPS) {
        if (p === q || p.room !== q.room) continue
        // Art assets may touch but may not physically intersect one another.
        const dx = Math.abs(p.x - q.x) - (p.w + q.w) / 2
        const dz = Math.abs(p.z - q.z) - (p.d + q.d) / 2
        expect(dx >= 0 || dz >= 0, p.id + ' intersecting ' + q.id).toBe(true)
      }
    }
  })

  it('has narrower stairs in the center of the full shaft and valid nav', () => {
    const world = buildWorld()
    for (const s of STAIRS) {
      const room = ROOMS.find(r => r.id === 'trappe' + s.fromFloor)!
      expect(s.w).toBeLessThan(2.8)
      expect(s.x - room.x).toBeGreaterThan(2.4)
      expect(room.x + room.w - s.x - s.w).toBeGreaterThan(2.4)
      const nodes = world.nav.nodes.filter(n => n.stair && n.x >= s.x && n.x <= s.x + s.w)
      expect(nodes.length).toBeGreaterThan(16)
      expect(FLOOR_Y[s.toFloor] - FLOOR_Y[s.fromFloor]).toBe(4)
    }
  })
})
