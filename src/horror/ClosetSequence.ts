/** Timed locker hide. The clock starts when the door shuts and ignores paused frames. */

export const CLOSET_LOCK = 20
export const CLOSET_SCREAM = 3
export const CLOSET_PASS_END = 16
export const CLOSET_WHISPER = 10

export interface ClosetState {
  phase: 'idle' | 'inside' | 'whispers'
  hideId: string
  /** Seconds since the door shut. */
  locked: number
  /** Seconds of whispers still to play. */
  whisper: number
  screamed: boolean
}

export function emptyCloset(): ClosetState {
  return { phase: 'idle', hideId: '', locked: 0, whisper: 0, screamed: false }
}

export function enterCloset(hideId: string): ClosetState {
  return { phase: 'inside', hideId, locked: 0, whisper: 0, screamed: false }
}

export function canLeaveCloset(state: ClosetState): boolean {
  return state.phase === 'inside' && state.locked >= CLOSET_LOCK
}

/** 0 at the left of the crack, 1 after the figure has walked past. Null when it should be gone. */
export function passerAlong(locked: number): number | null {
  if (locked < CLOSET_SCREAM || locked >= CLOSET_PASS_END) return null
  const u = (locked - CLOSET_SCREAM) / (CLOSET_PASS_END - CLOSET_SCREAM)
  if (u < 0.42) return (u / 0.42) * 0.46
  if (u < 0.58) return 0.46
  return 0.46 + ((u - 0.58) / 0.42) * 0.54
}

export function stepCloset(prev: ClosetState, dt: number): { state: ClosetState; cues: string[] } {
  const state: ClosetState = { ...prev }
  const cues: string[] = []
  if (state.phase === 'inside') {
    const before = state.locked
    state.locked += Math.max(0, dt)
    if (!state.screamed && state.locked >= CLOSET_SCREAM) {
      state.screamed = true
      cues.push('scream')
    }
    if (before < CLOSET_LOCK && state.locked >= CLOSET_LOCK) cues.push('free')
  } else if (state.phase === 'whispers') {
    state.whisper = Math.max(0, state.whisper - Math.max(0, dt))
    if (state.whisper <= 0) {
      state.phase = 'idle'
      state.hideId = ''
      cues.push('quiet')
    }
  }
  return { state, cues }
}

export function leaveCloset(prev: ClosetState): ClosetState {
  return { ...prev, phase: 'whispers', whisper: CLOSET_WHISPER, locked: CLOSET_LOCK }
}
