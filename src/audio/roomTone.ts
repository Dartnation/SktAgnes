/** One placed sound per room. The source sits in the room, not on the player. */
export type ToneKind = 'waterDrop' | 'pipeKnock' | 'airRumble' | 'distantBell'

export interface RoomBox {
  id: string
  x: number
  z: number
  w: number
  d: number
  floorY: number
}

export interface ToneState {
  roomId: string
  nextAt: number
  seq: number
}

export interface RoomCue {
  kind: ToneKind
  x: number
  y: number
  z: number
}

const TONE: Record<string, ToneKind> = {
  reception: 'airRumble',
  patientgang: 'waterDrop',
  operationsstue: 'pipeKnock',
  slagterum: 'pipeKnock',
  arkiv: 'airRumble',
  laboratorium: 'airRumble',
  obduktion: 'pipeKnock',
  personalerum: 'airRumble',
  kaeldergang: 'waterDrop',
  kapel: 'distantBell',
  observation: 'airRumble',
  kammer: 'pipeKnock',
  trappe0: 'pipeKnock',
  trappe1: 'pipeKnock',
  trappe2: 'waterDrop',
}

/** The sideboard in the staff room. The radio is heard from here, not from the player. */
export const RADIO_SOURCE = { x: 45.8, y: 5.2, z: 9.2 }

export function createTone(): ToneState {
  return { roomId: '', nextAt: 8, seq: 0 }
}

export function roomSource(room: RoomBox, kind: ToneKind): RoomCue {
  const alongX = kind === 'waterDrop' || kind === 'distantBell' ? 0.82 : 0.16
  const alongZ = kind === 'distantBell' ? 0.78 : 0.22
  return {
    kind,
    x: room.x + room.w * alongX,
    y: room.floorY + 2.2,
    z: room.z + room.d * alongZ,
  }
}

/**
 * At most one room sound. A room change or a long pause waits, so several
 * sounds do not play the moment the game continues.
 */
export function stepRoomTone(
  state: ToneState,
  input: { time: number; dt: number; room: RoomBox | null },
): { state: ToneState; cue: RoomCue | null } {
  const room = input.room
  const id = room?.id ?? ''
  const changed = id !== state.roomId
  let nextAt = state.nextAt
  if (changed || input.dt > 0.5) nextAt = Math.max(nextAt, input.time + 6)
  const kind = room ? TONE[room.id] : undefined
  if (!room || !kind || input.time < nextAt) {
    return { state: { ...state, roomId: id, nextAt }, cue: null }
  }
  const seq = state.seq + 1
  return {
    state: { roomId: id, nextAt: input.time + 16 + (seq % 6), seq },
    cue: roomSource(room, kind),
  }
}

/** A quiet pulse from the radio while it is switched on. */
export function radioPulse(on: boolean, time: number, last: number): boolean {
  if (!on) return false
  return time - last >= 11
}

/** True on the first step that leaves a fully open or fully closed door. */
export function doorStartedMoving(before: number, after: number): boolean {
  if (Math.abs(after - before) < 0.001) return false
  const rested = before <= 0.02 || before >= 0.98
  const leaving = after > 0.02 && after < 0.98
  return rested && leaving
}
