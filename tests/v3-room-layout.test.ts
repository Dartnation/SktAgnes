import { describe, expect, it } from 'vitest'
import { PROPS, ROOM_IDS } from '../src/world/data'
import { buildWorld } from '../src/world/buildWorld'

const newNames = [
  'rec_waitbench', 'rec_pigeon', 'pat_medicine', 'pat_cabinet',
  'op_sparecase', 'op_assistantchair', 'slag_washstation', 'slag_rustbucket',
  'ark_filing2', 'ark_bookcase', 'lab_archive', 'lab_stool',
  'obd_cab2', 'obd_tray2', 'pers_bench', 'pers_wardrobe',
  'kael_spares', 'kael_cables', 'kap_pew3', 'kap_pew4',
  'obs_supply', 'obs_records', 'kam_nightstand', 'kam_storage',
]
const added = new Set(newNames)

describe('V3 cinematic layout', () => {
  it('adds two meaningful furniture silhouettes per main hospital room', () => {
    expect(newNames.length).toBe(24)
    for (const id of ROOM_IDS) {
      const props = PROPS.filter(p => p.room === id && added.has(p.id))
      expect(props, id).toHaveLength(2)
    }
    expect(PROPS.filter(p => added.has(p.id))).toHaveLength(24)
  })

  it('keeps furniture out of central door approaches and existing furniture', () => {
    for (const p of PROPS.filter(p => added.has(p.id))) {
      expect(Math.abs(p.z - 6), p.id).toBeGreaterThanOrEqual(1.7)
      for (const q of PROPS) {
        if (p.id === q.id || p.room !== q.room) continue
        const px = Math.abs(p.x - q.x) - (p.w + q.w) / 2
        const pz = Math.abs(p.z - q.z) - (p.d + q.d) / 2
        expect(px >= 0.14 || pz >= 0.14, p.id + ' / ' + q.id).toBe(true)
      }
    }
  })

  it('still has connected nav nodes on all three floors', () => {
    const world = buildWorld()
    for (const floor of [0, 1, 2]) {
      const walk = world.nav.nodes.filter(n => !n.stair && n.floor === floor)
      expect(walk.length).toBeGreaterThan(100)
      expect(walk.some(n => n.links.length > 0)).toBe(true)
    }
  })
})
