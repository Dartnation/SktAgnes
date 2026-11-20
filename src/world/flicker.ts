export type Quality = 'low' | 'medium' | 'high'

/** How many real lights the shader may see. Extra lights stay in the scene but invisible. */
export function visibleLightCount(quality: Quality): number {
  if (quality === 'low') return 4
  if (quality === 'high') return 8
  return 6
}

export const FLICKER_ROOMS = new Set(['reception', 'patientgang', 'kaeldergang'])

/**
 * A slow, per-fixture sag. It never steps, so a tube cannot flash white.
 * Reduced mode only breathes and never goes dark.
 */
export function fixtureFlicker(time: number, seed: number, reduced: boolean): number {
  if (reduced) return 0.92 + 0.05 * Math.sin(time * 0.22 + seed)
  const breathe = 0.9 + 0.06 * Math.sin(time * 0.31 + seed)
  const sag = Math.pow(Math.max(0, Math.sin(time * 0.17 + seed * 1.7)), 4)
  return breathe * (1 - sag * 0.28)
}
