import { describe, expect, it } from 'vitest'
import {
  createTone,
  doorStartedMoving,
  radioPulse,
  RADIO_SOURCE,
  roomSource,
  stepRoomTone,
  type RoomBox,
} from '../src/audio/roomTone'

const reception: RoomBox = { id: 'reception', x: 0, z: 0, w: 12, d: 12, floorY: 0 }
const chapel: RoomBox = { id: 'kapel', x: 12, z: 0, w: 12, d: 12, floorY: 8 }
const quiet: RoomBox = { id: 'stilhed', x: 36, z: 12, w: 12, d: 6, floorY: 8 }

describe('room tones', () => {
  it('places a drip in the corridor and a bell in the chapel, away from the middle', () => {
    const drip = roomSource({ id: 'patientgang', x: 12, z: 0, w: 12, d: 12, floorY: 0 }, 'waterDrop')
    expect(drip.kind).toBe('waterDrop')
    expect(drip.x).toBeGreaterThan(12 + 6)
    expect(drip.y).toBeCloseTo(2.2)
    const bell = roomSource(chapel, 'distantBell')
    expect(bell.z).toBeGreaterThan(6)
    expect(RADIO_SOURCE.x).toBeCloseTo(45.8)
  })

  it('waits after entering a room and stays silent in the exit yard', () => {
    const entered = stepRoomTone(createTone(), { time: 1, dt: 0.05, room: reception })
    expect(entered.cue).toBeNull()
    const later = stepRoomTone(entered.state, { time: 30, dt: 0.05, room: reception })
    expect(later.cue?.kind).toBe('airRumble')
    expect(later.cue && later.cue.x).toBeGreaterThan(0)
    expect(later.cue && later.cue.x).toBeLessThan(12)
    const yard = stepRoomTone(later.state, { time: 60, dt: 0.05, room: quiet })
    expect(yard.cue).toBeNull()
  })

  it('does not dump several sounds after a pause', () => {
    let state = createTone()
    state = { ...state, roomId: 'reception', nextAt: 10 }
    const resumed = stepRoomTone(state, { time: 40, dt: 8, room: reception })
    expect(resumed.cue).toBeNull()
    expect(resumed.state.nextAt).toBeGreaterThan(40)
  })

  it('pulses the radio only while it is on, and creaks when a door leaves its rest', () => {
    expect(radioPulse(false, 20, 0)).toBe(false)
    expect(radioPulse(true, 5, 0)).toBe(false)
    expect(radioPulse(true, 12, 0)).toBe(true)
    expect(doorStartedMoving(0, 0.08)).toBe(true)
    expect(doorStartedMoving(0.4, 0.5)).toBe(false)
    expect(doorStartedMoving(1, 1)).toBe(false)
    expect(doorStartedMoving(1, 0.9)).toBe(true)
  })
})
