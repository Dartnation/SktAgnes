import { describe, expect, it } from 'vitest'
import {
  assertContainerSpecs, containerTransform, freshContainerState, restoreContainers,
  serializeContainers, stepContainer, takeContainerLoot, toggleContainer,
  type ContainerAccess, type ContainerSpec,
} from '../src/systems/ContainerLogic'

const access: ContainerAccess = { inRange: true, lineOfSight: true, hasRequiredItem: true }
const desk: ContainerSpec = {
  id: 'reception_desk_drawer_left',
  roomId: 'reception',
  kind: 'drawer',
  contents: [
    { id: 'desk_battery_1', itemId: 'battery' },
    { id: 'desk_battery_2', itemId: 'battery' },
  ],
  slideDistance: 0.33,
}

function complete(start = freshContainerState(), spec = desk) {
  let state = start
  for (let i = 0; i < 12; i++) state = stepContainer(spec, state, 0.05)
  return state
}

describe('Gameplay V4 – drawer/cabinet logic contract', () => {
  it('opens and closes a moving drawer, rejecting spam while moving', () => {
    const opening = toggleContainer(desk, freshContainerState(), access)
    expect(opening.effect).toBe('opening')
    const mid = stepContainer(desk, opening.state, 0.05)
    expect(mid.progress).toBeGreaterThan(0)
    expect(mid.progress).toBeLessThan(1)
    expect(toggleContainer(desk, mid, access).effect).toBe('busy')
    const open = complete(mid)
    expect(open.progress).toBe(1)
    expect(containerTransform(desk, open).slide).toBeCloseTo(0.33)
    const closing = toggleContainer(desk, open, access)
    expect(closing.effect).toBe('closing')
    expect(complete(closing.state).progress).toBe(0)
  })

  it('keeps a pause frozen and clamps a frame hitch', () => {
    const state = toggleContainer(desk, freshContainerState(), access).state
    expect(stepContainer(desk, state, 3, true)).toBe(state)
    expect(stepContainer(desk, state, 3).progress).toBeCloseTo(0.125)
  })

  it('handles cabinet swing, range, LOS and required keys', () => {
    const cupboard: ContainerSpec = {
      id: 'staff_cabinet', roomId: 'personalerum', kind: 'cabinet',
      contents: [], requiresItem: 'key_arkiv', swingRadians: Math.PI * 0.5,
    }
    const closed = freshContainerState()
    expect(toggleContainer(cupboard, closed, { ...access, inRange: false }).effect).toBe('out_of_range')
    expect(toggleContainer(cupboard, closed, { ...access, lineOfSight: false }).effect).toBe('occluded')
    expect(toggleContainer(cupboard, closed, { ...access, hasRequiredItem: false }).effect).toBe('locked')
    const open = complete(toggleContainer(cupboard, closed, access).state, cupboard)
    expect(containerTransform(cupboard, open).slide).toBe(0)
    expect(containerTransform(cupboard, open).swing).toBeCloseTo(Math.PI * 0.5)
  })

  it('never grants loot from closed drawers or when inventory cannot accept it', () => {
    const closed = freshContainerState()
    expect(takeContainerLoot(desk, closed, 'desk_battery_1', access, true).effect).toBe('closed')
    const opening = toggleContainer(desk, closed, access).state
    const partial = stepContainer(desk, opening, 0.05)
    expect(takeContainerLoot(desk, partial, 'desk_battery_1', access, true).effect).toBe('closed')
    const open = complete(partial)
    const noRoom = takeContainerLoot(desk, open, 'desk_battery_1', access, false)
    expect(noRoom.effect).toBe('no_space')
    expect(noRoom.state.takenIds).toHaveLength(0)
  })

  it('claims one world-unique slot once, but supports two identical items', () => {
    const open = complete(toggleContainer(desk, freshContainerState(), access).state)
    const first = takeContainerLoot(desk, open, 'desk_battery_1', access, true)
    expect(first.effect).toBe('taken')
    expect(first.itemId).toBe('battery')
    expect(takeContainerLoot(desk, first.state, 'desk_battery_1', access, true).effect).toBe('already_taken')
    const second = takeContainerLoot(desk, first.state, 'desk_battery_2', access, true)
    expect(second.effect).toBe('taken')
    expect(second.state.takenIds).toEqual(['desk_battery_1', 'desk_battery_2'])
    expect(takeContainerLoot(desk, second.state, 'does_not_exist', access, true).effect).toBe('unknown')
  })

  it('serializes and restores without re-looting or half-open animations', () => {
    const open = complete(toggleContainer(desk, freshContainerState(), access).state)
    const loot = takeContainerLoot(desk, open, 'desk_battery_1', access, true)
    const map = new Map([[desk.id, loot.state]])
    const saved = serializeContainers([desk], map)
    const restored = restoreContainers([desk], JSON.parse(JSON.stringify(saved)))
    expect(restored.get(desk.id)).toEqual(loot.state)
    expect(takeContainerLoot(desk, restored.get(desk.id)!, 'desk_battery_1', access, true).effect)
      .toBe('already_taken')
  })

  it('migrates missing legacy state and rejects forged data safely', () => {
    expect(restoreContainers([desk], undefined).get(desk.id)).toEqual(freshContainerState())
    const forged = {
      version: 1,
      containers: [{ id: desk.id, open: true, takenIds: ['unknown_slot', 'desk_battery_1', 'desk_battery_1'] }],
    }
    expect(restoreContainers([desk], forged).get(desk.id)?.takenIds).toEqual(['desk_battery_1'])
    const bad = { ...forged, version: 42 }
    expect(restoreContainers([desk], bad).get(desk.id)).toEqual(freshContainerState())
  })

  it('rejects duplicate IDs and duplicate loot slots at registration', () => {
    expect(() => assertContainerSpecs([desk, desk])).toThrow('Duplicate or empty')
    expect(() => assertContainerSpecs([desk, {
      id: 'another', roomId: 'arkiv', kind: 'drawer',
      contents: [{ id: 'desk_battery_1', itemId: 'battery' }],
    }])).toThrow('Duplicate or invalid loot-slot')
  })
})
