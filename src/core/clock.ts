/** Wall-clock spikes must not become a giant simulation step. */
export function clampDt(seconds: number, max = 0.05): number {
  if (!Number.isFinite(seconds) || seconds <= 0) return 0
  return Math.min(max, seconds)
}

/**
 * Pause-aware timer. While paused, remaining time does not move.
 * A single call never consumes more than one step of the timer.
 */
export function stepTimer(remaining: number, dt: number, paused: boolean): number {
  if (paused) return remaining
  return Math.max(0, remaining - clampDt(dt))
}
