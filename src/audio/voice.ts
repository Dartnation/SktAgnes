/** Pure limiter so tests can lock the crackle rules without an audio device. */
export function admitVoice(active: number, cap: number, sinceLast: number, minGap: number): boolean {
  if (cap <= 0) return false
  if (active >= cap) return false
  if (sinceLast < minGap) return false
  return true
}

export const VOICE_LIMITS: Record<string, { cap: number; gap: number }> = {
  step: { cap: 1, gap: 0.2 },
  stepMonster: { cap: 1, gap: 0.24 },
  door: { cap: 1, gap: 0.28 },
  doorSlam: { cap: 1, gap: 0.4 },
  knock: { cap: 3, gap: 0.16 },
  whisper: { cap: 1, gap: 7 },
  scream: { cap: 1, gap: 14 },
  growl: { cap: 1, gap: 1.6 },
  sting: { cap: 1, gap: 1.4 },
  flash: { cap: 1, gap: 0.12 },
  click: { cap: 2, gap: 0.04 },
  creak: { cap: 1, gap: 0.45 },
  thunder: { cap: 1, gap: 8 },
  metallic: { cap: 1, gap: 2 },
  shadow: { cap: 1, gap: 8 },
  deep: { cap: 1, gap: 3 },
}
