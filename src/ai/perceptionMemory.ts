import type { Vec3 } from '../core/math'

/** How long a loud noise stays a place worth walking to. */
const MEMORY_SECONDS = 8
/** Same floor as the brain: quieter than a walk is not an investigation. */
const MIN_LOUDNESS = 0.38

export interface HeardNoise {
  pos: Vec3
  loudness: number
  age: number
}

export interface PerceptionMemory {
  lastHeard: HeardNoise | null
}

export function emptyPerception(): PerceptionMemory {
  return { lastHeard: null }
}

/**
 * Remember the loudest fresh noise. Quiet sounds and a paused clock do not
 * create or erase a goal. This does not move the monster.
 */
export function rememberNoise(
  memory: PerceptionMemory,
  noise: { pos: Vec3; loudness: number } | null,
  dt: number,
  paused = false,
): PerceptionMemory {
  const ageDt = paused || !Number.isFinite(dt) || dt <= 0 ? 0 : Math.min(dt, 0.05)
  const current = memory.lastHeard
  const aged = current
    ? { ...current, age: current.age + ageDt, pos: { ...current.pos } }
    : null
  const kept = aged && aged.age <= MEMORY_SECONDS ? aged : null
  if (!noise || noise.loudness < MIN_LOUDNESS) return { lastHeard: kept }
  if (kept && kept.loudness > noise.loudness && kept.age < 1) return { lastHeard: kept }
  return {
    lastHeard: {
      pos: { x: noise.pos.x, y: noise.pos.y, z: noise.pos.z },
      loudness: noise.loudness,
      age: 0,
    },
  }
}

/** Where the monster should look, or null when the sound has been forgotten. */
export function investigateGoal(memory: PerceptionMemory): Vec3 | null {
  const heard = memory.lastHeard
  if (!heard || heard.age > MEMORY_SECONDS || heard.loudness < MIN_LOUDNESS) return null
  return { ...heard.pos }
}
