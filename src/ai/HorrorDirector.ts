import { clamp, lerp } from '../core/math'

/**
 * Pacing layer. Tension tracks how unsafe the player should feel.
 * Scares and soft world-events are gated so a bad moment is not followed
 * immediately by another one. After a hit, aggression is suppressed so the
 * player has a beat to escape instead of being stunlocked by set pieces.
 */
export interface DirectorState {
  tension: number
  stress: number
  sinceScare: number
  sinceSoft: number
  suppress: number
  softWindow: number
  windowLeft: number
}

export type SoftKind =
  | 'flicker'
  | 'whisper'
  | 'creak'
  | 'thunder'
  | 'drop'
  | 'shadow'
  | 'lightOut'
  | 'radio'
  | 'mannequin'
  | 'knock'
  | 'phone'
  | 'breath'

export type DirectorEvent = { type: 'scare' } | { type: 'soft'; kind: SoftKind }

export interface DirectorInput {
  dt: number
  health: number
  monsterDist: number
  inDark: boolean
  sprinting: boolean
  hiding: boolean
  tookDamage: boolean
  story: number
  rng: () => number
}

export function createDirector(): DirectorState {
  return {
    tension: 10,
    stress: 10,
    sinceScare: 30,
    sinceSoft: 4,
    suppress: 0,
    softWindow: 0,
    windowLeft: 30,
  }
}

/** Minimum seconds between director-requested scares. Shrinks as tension rises. */
export function scareCooldown(tension: number): number {
  return lerp(28, 14, clamp(tension, 0, 100) / 100)
}

const SOFT: SoftKind[] = ['flicker', 'whisper', 'creak', 'knock', 'phone', 'breath', 'lightOut', 'radio', 'drop', 'thunder']

export function stepDirector(
  state: DirectorState,
  input: DirectorInput,
): { state: DirectorState; event: DirectorEvent | null; aggression: number } {
  const s: DirectorState = { ...state }
  const dt = Math.max(0, input.dt)
  if (input.tookDamage) s.suppress = Math.max(s.suppress, 8)
  s.suppress = Math.max(0, s.suppress - dt)
  s.sinceScare += dt
  s.sinceSoft += dt
  s.windowLeft -= dt
  if (s.windowLeft <= 0) {
    s.windowLeft = 30
    s.softWindow = 0
  }

  const near = 1 - clamp(input.monsterDist / 24, 0, 1)
  let target = 10
  target += near * 44
  if (input.inDark) target += 12
  if (input.sprinting) target += 6
  if (input.health < 45) target += 14
  target += clamp(input.story, 0, 1) * 16
  if (input.hiding) target -= 12
  if (input.monsterDist > 30) target -= 6
  target = clamp(target, 0, 100)
  const k = 1 - Math.exp(-dt * 0.4)
  s.stress = s.stress + (target - s.stress) * k
  s.tension = clamp(s.stress + (input.tookDamage ? 10 : 0), 0, 100)

  let event: DirectorEvent | null = null
  const cd = scareCooldown(s.tension)
  const scarePerSec = s.tension > 30 ? 0.15 + (s.tension / 100) * 0.7 : 0.02
  const roll = input.rng()
  if (s.suppress <= 0 && s.sinceScare >= cd && roll < scarePerSec * Math.min(dt, 0.5)) {
    event = { type: 'scare' }
    s.sinceScare = 0
  } else {
    const softCd = lerp(10, 4, s.tension / 100)
    const softPerSec = 0.28 + s.tension / 120
    const roll2 = input.rng()
    if (s.sinceSoft >= softCd && s.softWindow < 4 && roll2 < softPerSec * Math.min(dt, 0.5)) {
      const kind = SOFT[Math.floor(input.rng() * SOFT.length) % SOFT.length]
      event = { type: 'soft', kind }
      s.sinceSoft = 0
      s.softWindow += 1
    }
  }

  const aggression = clamp((s.tension / 100) * (s.suppress > 0 ? 0.22 : 1), 0, 1)
  return { state: s, event, aggression }
}
