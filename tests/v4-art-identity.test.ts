import * as THREE from 'three'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { buildWorld } from '../src/world/buildWorld'
import { ROOM_IDS, ROOMS, PROPS, STAIRS } from '../src/world/data'
import { addVisualIdentityV4 } from '../src/world/VisualIdentityV4'

afterEach(() => vi.unstubAllGlobals())

describe('Visual-only V4.1: no gameplay schema changes', () => {
  it('preserves world placement IDs, count and original stair geometry definitions', () => {
    const world = buildWorld()
    expect(world.rooms.map(room => room.id)).toEqual(ROOMS.map(room => room.id))
    expect(PROPS.map(p => p.id)).toContain('ark_safe')
    expect(PROPS.find(p => p.id === 'ark_safe')).toMatchObject({
      room: 'arkiv', kind: 'safe', x: 10.2, z: 9.55,
    })
    expect(STAIRS.map(s => [s.x, s.z, s.w, s.d])).toEqual([
      [50.75, 0.95, 2.55, 4.35],
      [50.75, 6.70, 2.55, 4.35],
    ])
  })

  it('adds visual wall dressing in every main room without registering world props', () => {
    const propsBefore = PROPS.map(p => [p.id, p.x, p.z, p.w, p.d])
    const canvasCtx = {
      fillRect: () => {}, strokeRect: () => {}, fillText: () => {},
    }
    vi.stubGlobal('document', {
      createElement: (_kind: string) => ({
        width: 960, height: 400, getContext: () => canvasCtx,
      }),
    })
    const scene = new THREE.Scene()
    const dispose = addVisualIdentityV4(scene, ROOMS)
    const root = scene.getObjectByName('SktAgnes_VisualIdentityV4')
    expect(root).toBeDefined()
    for (const id of ROOM_IDS) {
      expect(root?.getObjectByName('VisualDepartment_' + id)).toBeDefined()
    }
    expect(PROPS.map(p => [p.id, p.x, p.z, p.w, p.d])).toEqual(propsBefore)
    dispose()
    expect(scene.getObjectByName('SktAgnes_VisualIdentityV4')).toBeUndefined()
  })
})
