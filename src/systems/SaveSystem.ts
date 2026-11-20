import type { GameSnapshot } from './Story'

export interface StorageLike {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

export interface SaveData {
  version: 1
  slot: number
  savedAt: number
  snapshot: GameSnapshot
}

export const SAVE_SLOTS = [0, 1, 2, 3] as const
export type SaveSlotId = (typeof SAVE_SLOTS)[number]

const keyOf = (slot: number) => `skt-agnes-save-${slot}`

export function memoryStorage(): StorageLike {
  const m = new Map<string, string>()
  return {
    getItem: (k) => (m.has(k) ? (m.get(k) as string) : null),
    setItem: (k, v) => {
      m.set(k, v)
    },
    removeItem: (k) => {
      m.delete(k)
    },
  }
}

export function browserStorage(): StorageLike {
  return localStorage
}

function isSnapshot(x: unknown): x is GameSnapshot {
  if (!x || typeof x !== 'object') return false
  const s = x as GameSnapshot
  return s.version === 1 && !!s.player && typeof s.player.x === 'number' && Array.isArray(s.inventory)
}

export function saveGame(storage: StorageLike, slot: number, snapshot: GameSnapshot, now = Date.now()): SaveData {
  const data: SaveData = {
    version: 1,
    slot,
    savedAt: now,
    snapshot: structuredClone(snapshot),
  }
  storage.setItem(keyOf(slot), JSON.stringify(data))
  return data
}

export function loadGame(storage: StorageLike, slot: number): SaveData | null {
  const raw = storage.getItem(keyOf(slot))
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as SaveData
    if (!parsed || parsed.version !== 1 || !isSnapshot(parsed.snapshot)) return null
    parsed.slot = slot
    return parsed
  } catch {
    return null
  }
}

export function listSaves(storage: StorageLike): (SaveData | null)[] {
  return SAVE_SLOTS.map((slot) => loadGame(storage, slot))
}

export function latestSave(storage: StorageLike): SaveData | null {
  let best: SaveData | null = null
  for (const slot of SAVE_SLOTS) {
    const data = loadGame(storage, slot)
    if (!data) continue
    if (!best || data.savedAt > best.savedAt) best = data
  }
  return best
}

export function deleteSave(storage: StorageLike, slot: number): void {
  storage.removeItem(keyOf(slot))
}
