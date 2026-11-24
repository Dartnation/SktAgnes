/** Timed locker hide. The clock starts when the door shuts and ignores paused frames. */

export const CLOSET_SCREAM = 3
/** Seconds after the door shuts when the figure lunges into the crack. */
export const CLOSET_FACE = 14
/** The face-scream has ended. The door can open on this same moment. */
export const CLOSET_PASS_END = 16.25
export const CLOSET_LOCK = CLOSET_PASS_END
export const CLOSET_WHISPER = 10

export interface ClosetState {
  phase: 'idle' | 'inside' | 'whispers'
  hideId: string
  /** Seconds since the door shut. */
  locked: number
  /** Seconds of whispers still to play. */
  whisper: number
  screamed: boolean
  /** The eye-level scream has already played. */
  faced: boolean
}

/** Where the figure is while it passes the crack. Null once it is gone for good. */
export interface PasserPose {
  /** 0 at the left of the crack, 1 after it has walked past. */
  along: number
  /** 0 keeps walking. 1 has turned to face the player. */
  face: number
  /** 0 hidden. 1 the smile is fully there. */
  smile: number
  /** 0 at the hallway. 1 pressed against the crack at eye level. */
  lunge: number
  /** True during the one second after it walks away, before it lunges. */
  hidden: boolean
}

export function emptyCloset(): ClosetState {
  return { phase: 'idle', hideId: '', locked: 0, whisper: 0, screamed: false, faced: false }
}

export function enterCloset(hideId: string): ClosetState {
  return { phase: 'inside', hideId, locked: 0, whisper: 0, screamed: false, faced: false }
}

export function canLeaveCloset(state: ClosetState): boolean {
  return state.phase === 'inside' && state.locked >= CLOSET_PASS_END
}

export function passerPose(locked: number): PasserPose | null {
  if (locked < CLOSET_SCREAM || locked >= CLOSET_PASS_END) return null
  const t = locked - CLOSET_SCREAM
  const approach = 3.2
  const turn = 4.4
  const hold = 6.6
  const away = 7.6
  const walked = 10
  const pause = 11
  const sprung = 11.18
  if (t < approach) return pose((t / approach) * 0.46, 0, 0, 0, false)
  if (t < turn) return pose(0.46, smooth((t - approach) / (turn - approach)), 0, 0, false)
  if (t < hold) return pose(0.46, 1, smooth(Math.min(1, ((t - turn) / (hold - turn)) * 1.6)), 0, false)
  if (t < away) {
    const u = smooth((t - hold) / (away - hold))
    return pose(0.46, 1 - u, 1 - u, 0, false)
  }
  if (t < walked) return pose(0.46 + ((t - away) / (walked - away)) * 0.54, 0, 0, 0, false)
  if (t < pause) return pose(1, 0, 0, 0, true)
  if (t < sprung) return pose(1, 1, 1, rush((t - pause) / (sprung - pause)), false)
  return pose(1, 1, 1, 1, false)
}

/** 0 at the left of the crack, 1 after the figure has walked past. Null when it should be gone. */
export function passerAlong(locked: number): number | null {
  const poseNow = passerPose(locked)
  if (!poseNow || poseNow.hidden) return null
  return poseNow.along
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
    if (!state.faced && state.locked >= CLOSET_FACE) {
      state.faced = true
      cues.push('face')
    }
    if (before < CLOSET_PASS_END && state.locked >= CLOSET_PASS_END) cues.push('free')
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
  return { ...prev, phase: 'whispers', whisper: CLOSET_WHISPER, locked: CLOSET_PASS_END }
}

function pose(along: number, face: number, smile: number, lunge: number, hidden: boolean): PasserPose {
  return { along, face, smile, lunge, hidden }
}

function smooth(u: number): number {
  const x = Math.max(0, Math.min(1, u))
  return x * x * (3 - 2 * x)
}

/** Arrives almost at once, so the face snaps down instead of easing in. */
function rush(u: number): number {
  const x = Math.max(0, Math.min(1, u))
  return 1 - (1 - x) ** 3
}
