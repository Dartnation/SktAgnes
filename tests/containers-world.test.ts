import { describe, expect, it } from 'vitest'
import { CATALOG } from '../src/systems/catalog'
import {
  assertContainerSpecs,
  freshContainerState,
  restoreContainers,
  serializeContainers,
  stepContainer,
  takeContainerLoot,
  toggleContainer,
} from '../src/systems/ContainerLogic'
import { CONTAINERS, containerSpecs } from '../src/world/containerCatalog'
import { HIDES, PICKUPS, ROOMS } from '../src/world/data'

const access = { inRange: true, lineOfSight: true, hasRequiredItem: true }

describe('skuffer og skabe i rummene', () => {
  it('har unikke id og loot, og alle genstande findes', () => {
    const specs = containerSpecs()
    assertContainerSpecs(specs)
    const ids = new Set(specs.map((spec) => spec.id))
    expect(ids.size).toBe(specs.length)
    for (const spec of specs) {
      for (const loot of spec.contents) expect(CATALOG[loot.itemId]).toBeTruthy()
    }
  })

  it('står i det rigtige rum og åbner væk fra dørlinjen', () => {
    for (const place of CONTAINERS) {
      const room = ROOMS.find((item) => item.id === place.spec.roomId)
      expect(room).toBeTruthy()
      const slide = place.spec.slideDistance ?? 0
      const endX = place.x + Math.sin(place.yaw) * slide
      const endZ = place.z + Math.cos(place.yaw) * slide
      for (const point of [{ x: place.x, z: place.z }, { x: endX, z: endZ }]) {
        expect(point.x).toBeGreaterThan(room!.x + 0.6)
        expect(point.x).toBeLessThan(room!.x + room!.w - 0.6)
        expect(point.z).toBeGreaterThan(room!.z + 0.4)
        expect(point.z).toBeLessThan(room!.z + room!.d - 0.4)
        expect(Math.abs(point.z - 6)).toBeGreaterThan(1.6)
      }
    }
  })

  it('flytter ikke den eneste kopi af nøgler, der allerede ligger i rummet', () => {
    const placed = new Set(PICKUPS.map((pickup) => pickup.itemId))
    for (const place of CONTAINERS) {
      for (const loot of place.spec.contents) {
        if (loot.itemId.startsWith('key_')) expect(placed.has(loot.itemId)).toBe(false)
      }
    }
  })

  it('lader skjulestederne stå', () => {
    expect(HIDES.map((hide) => hide.id).sort()).toEqual(['hide_kael', 'hide_kam', 'hide_obs', 'hide_op', 'hide_pat'])
  })

  it('kan ikke samle det samme op to gange, og gemmer åbnet tilstand', () => {
    const spec = containerSpecs().find((item) => item.id === 'ark_table_drawer')!
    let state = freshContainerState()
    state = toggleContainer(spec, state, access).state
    for (let i = 0; i < 8; i++) state = stepContainer(spec, state, 0.1, false)
    expect(state.progress).toBe(1)
    const first = takeContainerLoot(spec, state, 'loot_note_code', access, true)
    expect(first.effect).toBe('taken')
    const second = takeContainerLoot(spec, first.state, 'loot_note_code', access, true)
    expect(second.effect).toBe('already_taken')
    const states = new Map([[spec.id, first.state]])
    const saved = serializeContainers([spec], states)
    const loaded = restoreContainers([spec], saved)
    expect(loaded.get(spec.id)?.takenIds).toEqual(['loot_note_code'])
    expect(loaded.get(spec.id)?.target).toBe('open')
  })

  it('holder et låst skab lukket uden nøgle', () => {
    const spec = containerSpecs().find((item) => item.id === 'ark_locked_cabinet')!
    const locked = toggleContainer(spec, freshContainerState(), { ...access, hasRequiredItem: false })
    expect(locked.effect).toBe('locked')
    expect(locked.state.target).toBe('closed')
  })
})
