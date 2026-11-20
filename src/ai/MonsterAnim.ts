import type { MonsterStateName } from './MonsterBrain'

export type MonsterClip = 'Idle' | 'Walk' | 'Run' | 'Search' | 'Attack'

export interface ClipPose {
  clip: MonsterClip
  /** Playback rate relative to the authored clip. 1 matches a normal walk cycle. */
  timeScale: number
}

/**
 * Maps the brain's state to a clip. A rigged model can play `clip` directly.
 * Until that model exists, the procedural body uses the same choice.
 */
export function clipForState(state: MonsterStateName, speed: number): ClipPose {
  if (state === 'Attack') return { clip: 'Attack', timeScale: 1 }
  if (state === 'Search' || state === 'Investigate' || state === 'Suspicious' || state === 'LostPlayer') {
    return { clip: 'Search', timeScale: 0.85 }
  }
  if (state === 'Idle' || speed < 0.15) return { clip: 'Idle', timeScale: 1 }
  if (state === 'Chase' || speed > 2.6) {
    const timeScale = Math.max(0.75, Math.min(1.35, speed / 3.4))
    return { clip: 'Run', timeScale }
  }
  return { clip: 'Walk', timeScale: Math.max(0.7, Math.min(1.25, speed / 1.5)) }
}

/** How long a beam must stay on the body before it leaves the room. */
export const BEAM_BANISH_SECONDS = 1.25

export function beamEffect(heldSeconds: number, immuneSeconds: number): 'none' | 'blind' | 'banish' {
  if (immuneSeconds > 0 || heldSeconds <= 0.05) return 'none'
  if (heldSeconds >= BEAM_BANISH_SECONDS) return 'banish'
  return 'blind'
}
