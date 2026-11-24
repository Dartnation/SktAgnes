import * as THREE from 'three'
import { describe, expect, it } from 'vitest'
import { ROOMS, PROPS, STAIRS, PICKUPS, type RoomDef } from '../src/world/data'
import { addVisualDetailV5, type VisualDetailV5Stats } from '../src/world/VisualDetailV5'

const roomIds = [
  'reception', 'patientgang', 'operationsstue', 'slagterum',
  'arkiv', 'laboratorium', 'obduktion', 'personalerum',
  'kaeldergang', 'kapel', 'observation', 'kammer',
]

function snapshotWorld() {
  return JSON.stringify({
    props: PROPS, stairs: STAIRS, pickups: PICKUPS,
    rooms: ROOMS,
  })
}

describe('V5 complete room dressing – strict presentation-only contract', () => {
  it('renders recognizable fittings on every main department without changing any world state', () => {
    const before = snapshotWorld()
    const scene = new THREE.Scene()
    const dispose = addVisualDetailV5(scene, ROOMS, PROPS)
    const root = scene.getObjectByName('SktAgnes_VisualDetailV5')
    expect(root).toBeDefined()
    const stats = root?.userData.detailStats as VisualDetailV5Stats
    for (const id of roomIds) expect(stats.rooms).toContain(id)
    expect(stats.details).toBeGreaterThan(300)
    expect(stats.batches).toBeLessThanOrEqual(11)
    expect(stats.anchors).toBeGreaterThan(50)
    expect(snapshotWorld()).toBe(before)
    dispose()
    expect(scene.getObjectByName('SktAgnes_VisualDetailV5')).toBeUndefined()
    expect(snapshotWorld()).toBe(before)
  })

  it('works with a reduced room set and respects the original floor definitions', () => {
    const area = ROOMS.filter(r => r.floor === 0)
    const props = PROPS.filter(p => area.some(r => r.id === p.room))
    const scene = new THREE.Scene()
    const dispose = addVisualDetailV5(scene, area as RoomDef[], props)
    const root = scene.getObjectByName('SktAgnes_VisualDetailV5')
    const stats = root?.userData.detailStats as VisualDetailV5Stats
    expect(stats.rooms).toContain('operationsstue')
    expect(stats.rooms).not.toContain('obduktion')
    expect(stats.details).toBeGreaterThan(50)
    dispose()
  })
})
