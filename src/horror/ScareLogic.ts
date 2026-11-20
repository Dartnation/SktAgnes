/** Kinds the jumpscare engine can stage. `attack` is reserved for a real hit. */
export type ScareKind =
  | 'attack'
  | 'face'
  | 'behind'
  | 'ceiling'
  | 'fake'
  | 'still'
  | 'door'
  | 'whisper'
  | 'flash'
  | 'shadow'

export interface ScareMemory {
  global: number
  byKind: Partial<Record<ScareKind, number>>
}

export function emptyScareMemory(): ScareMemory {
  return { global: -999, byKind: {} }
}

export function canPlayScare(mem: ScareMemory, kind: ScareKind, now: number, force = false): boolean {
  if (force || kind === 'attack') return true
  if (now - mem.global < 12) return false
  const last = mem.byKind[kind] ?? -999
  const cd = kind === 'fake' ? 18 : 34
  return now - last >= cd
}

export function markScare(mem: ScareMemory, kind: ScareKind, now: number): ScareMemory {
  return { global: now, byKind: { ...mem.byKind, [kind]: now } }
}

export interface ScareContext {
  inDark: boolean
  monsterNear: boolean
  doorOpenNear: boolean
  inMannequinRoom: boolean
  tension: number
  rng: () => number
}

/** Weighted pick. A weight of 0 keeps a scare out of the pool entirely. */
export function pickDynamicScare(ctx: ScareContext): ScareKind {
  const pool: { k: ScareKind; w: number }[] = [
    { k: 'whisper', w: 3 },
    { k: 'fake', w: 2.2 },
    { k: 'flash', w: ctx.inDark ? 1.2 : 3 },
    { k: 'ceiling', w: 1.8 },
    { k: 'shadow', w: ctx.inDark ? 3 : 1 },
    { k: 'behind', w: ctx.monsterNear ? 0.6 : 2.6 },
    { k: 'door', w: ctx.doorOpenNear ? 3.4 : 0 },
    { k: 'still', w: ctx.inMannequinRoom ? 4 : 0 },
    // V3: avoid giant floating face in player's view.
  ]
  const sum = pool.reduce((a, p) => a + p.w, 0)
  let r = ctx.rng() * sum
  for (const p of pool) {
    if (p.w <= 0) continue
    r -= p.w
    if (r <= 0) return p.k
  }
  return 'whisper'
}
