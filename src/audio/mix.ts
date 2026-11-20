/**
 * Sound-pressure and scheduling policy shared by music, effects and audio tests.
 * Normalise each recording ONCE against a reference volume. Never compensate
 * for the listener's current slider settings, or lowering a slider gets louder.
 */
export const REFERENCE_MASTER = 0.8
export const REFERENCE_MUSIC = 0.7
export const REFERENCE_SFX = 0.85

export function clampVolume(value: number): number {
  return Number.isFinite(value) ? Math.max(0, Math.min(1, value)) : 0
}

export function normalisedGain(sourcePeak: number, targetPeak: number, maxGain = 8): number {
  return Math.min(maxGain, Math.max(0, targetPeak) / Math.max(0.01, sourcePeak * REFERENCE_MASTER))
}

export function musicBedGain(rms: number, peak: number): number {
  const wantedRms = 0.063
  const gain = wantedRms / Math.max(0.001, rms * REFERENCE_MASTER)
  return Math.min(gain, 0.45 / Math.max(0.001, peak * REFERENCE_MASTER))
}

/**
 * HorrorDirector gemmer spænding som 0–100. Mixeren bruger 0–1.
 * Jagt lægger et loft på 0,25 oveni, så et lavt stressniveau ikke bliver fuld alarm.
 */
export function normaliseTension(raw: number, chasing = false): number {
  if (!Number.isFinite(raw)) return clampVolume(chasing ? 0.25 : 0)
  return clampVolume(raw / 100 + (chasing ? 0.25 : 0))
}

/** En lyd fra en tidligere scene eller et for gammelt tastetryk må ikke afspilles. */
export function acceptQueuedCue(requestEpoch: number, currentEpoch: number, ageMs: number, kind: string): boolean {
  return requestEpoch === currentEpoch && cueIsFresh(kind, ageMs)
}

/** Events older than the action that triggered them should not replay on unlock. */
export function cueIsFresh(kind: string, ageMs: number): boolean {
  const maxAge = kind === 'step' || kind === 'stepMonster' ? 200 :
    kind === 'flash' || kind === 'click' ? 650 :
    kind === 'scream' || kind === 'shadow' || kind === 'deep' || kind === 'metallic' ? 2300 : 1200
  return ageMs >= 0 && ageMs <= maxAge
}
