export type Quality = 'low' | 'medium' | 'high'

/** How many real lights the shader may see. Extra lights stay in the scene but invisible. */
export function visibleLightCount(quality: Quality): number {
  if (quality === 'low') return 4
  if (quality === 'high') return 8
  return 6
}

export const FLICKER_ROOMS = new Set(['reception', 'patientgang', 'kaeldergang'])

/**
 * A slow, per-fixture fault. The fastest dip is well under a strobe.
 * Reduced mode only breathes and never goes dark.
 */
export function fixtureFlicker(time: number, seed: number, reduced: boolean): number {
  const breathe = 0.9 + 0.1 * Math.sin(time * 0.37 + seed)
  if (reduced) return 0.84 + 0.16 * (0.5 + 0.5 * Math.sin(time * 0.28 + seed))
  const fault = Math.sin(time * 0.16 + seed) > 0.62
  if (!fault) return breathe
  const blink = Math.sin(time * 2.1 + seed * 2.7)
  const drop = blink > 0.45 ? 0.12 : blink > -0.15 ? 0.4 : 0.82
  return breathe * drop
}
