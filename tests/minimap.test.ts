import { describe, expect, it } from 'vitest'
import { sanitizeSettings } from '../src/systems/Settings'
import {
  backingStore,
  objectiveRoom,
  projectMinimap,
  type MiniRoom,
  type MiniState,
} from '../src/ui/minimap'

const rooms: MiniRoom[] = [
  { id: 'reception', name: 'Receptionen', floor: 0, x: 0, z: 0, w: 12, d: 12 },
  { id: 'patientgang', name: 'Patientgangen', floor: 0, x: 12, z: 0, w: 12, d: 12 },
  { id: 'operationsstue', name: 'Operationsstuen', floor: 0, x: 24, z: 0, w: 12, d: 12 },
  { id: 'kammer', name: 'Det sidste kammer', floor: 2, x: 36, z: 0, w: 12, d: 12 },
  { id: 'stilhed', name: 'Ud til stilheden', floor: 2, x: 36, z: 12, w: 12, d: 6 },
]

function state(over: Partial<MiniState> = {}): MiniState {
  return {
    rooms,
    floor: 0,
    px: 6,
    pz: 6,
    yaw: 1.2,
    visited: new Set(['reception']),
    monster: null,
    batteries: [],
    doors: [
      { id: 'door_rec_pat', floor: 0, axis: 'x', coord: 12, center: 6, a: 'reception', b: 'patientgang', locked: false },
      { id: 'door_pat_op', floor: 0, axis: 'x', coord: 24, center: 6, a: 'patientgang', b: 'operationsstue', locked: true },
      { id: 'door_stilhed', floor: 2, axis: 'z', coord: 12, center: 42, a: 'kammer', b: 'stilhed', locked: true },
    ],
    goals: [
      { id: 'm4_arkiv', roomId: 'arkiv', x: 6, z: 6, floor: 1 },
      { id: 'm2_reception', roomId: 'reception', x: 6, z: 6, floor: 0 },
    ],
    ...over,
  }
}

describe('minimap', () => {
  it('shows the visited room and the next doorway, not the rest of the floor', () => {
    const map = projectMinimap(state())
    const ids = map.rooms.map((room) => room.id)
    expect(ids).toContain('reception')
    expect(ids).toContain('patientgang')
    expect(ids).not.toContain('operationsstue')
    expect(map.rooms.find((room) => room.id === 'patientgang')?.known).toBe(false)
    expect(map.doors.map((door) => door.id)).toEqual(['door_rec_pat'])
    expect(map.player.yaw).toBeCloseTo(1.2)
    expect(map.goals.map((goal) => goal.id)).toEqual(['m2_reception'])
  })

  it('keeps the secret exit off the map until the player has been there', () => {
    const hidden = projectMinimap(state({
      floor: 2,
      px: 40,
      pz: 6,
      visited: new Set(['kammer']),
    }))
    expect(hidden.rooms.map((room) => room.id)).toEqual(['kammer'])
    expect(hidden.doors).toEqual([])
    const found = projectMinimap(state({
      floor: 2,
      px: 40,
      pz: 14,
      visited: new Set(['kammer', 'stilhed']),
    }))
    expect(found.rooms.map((room) => room.id)).toContain('stilhed')
    expect(found.doors.map((door) => door.id)).toEqual(['door_stilhed'])
  })

  it('draws the monster only while it is sensed on this floor', () => {
    const quiet = projectMinimap(state({
      monster: { x: 8, z: 8, floor: 0, show: false },
    }))
    expect(quiet.monster).toBeNull()
    const otherFloor = projectMinimap(state({
      monster: { x: 8, z: 8, floor: 1, show: true },
    }))
    expect(otherFloor.monster).toBeNull()
    const sensed = projectMinimap(state({
      monster: { x: 8, z: 8, floor: 0, show: true },
    }))
    expect(sensed.monster).not.toBeNull()
  })

  it('matches the canvas to the screen scale', () => {
    expect(backingStore(253, 173, 2)).toEqual({ width: 506, height: 346 })
    expect(backingStore(100, 80, 0)).toEqual({ width: 100, height: 80 })
  })

  it('points a mission at its room and keeps subtitles on unless turned off', () => {
    expect(objectiveRoom('m4_arkiv')).toBe('arkiv')
    expect(objectiveRoom('m1_brev')).toBeNull()
    expect(sanitizeSettings({}).subtitles).toBe(true)
    expect(sanitizeSettings({ subtitles: false }).subtitles).toBe(false)
  })
})
