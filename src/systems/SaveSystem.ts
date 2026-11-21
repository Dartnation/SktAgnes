import { emptyScript } from '../horror/ScriptedEvents'
import { CATALOG } from './catalog'
import type { InvSlot } from './Inventory'
import type { MonsterStateName } from '../ai/MonsterBrain'
import { createNewGame, type Flags, type GameSnapshot } from './Story'

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

const READABLE = new Set(['note', 'story', 'map', 'collectible'])
const MONSTER_STATES = new Set<MonsterStateName>([
  'Idle', 'Patrol', 'Investigate', 'Search', 'Suspicious', 'Chase', 'Attack', 'LostPlayer', 'ReturnToPatrol',
])

function finite(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function strings(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.filter((item): item is string => typeof item === 'string')
}

function sanitizeInventory(slots: unknown): InvSlot[] {
  if (!Array.isArray(slots)) return []
  const merged = new Map<string, number>()
  for (const slot of slots) {
    if (!slot || typeof slot !== 'object') continue
    const itemId = (slot as InvSlot).itemId
    const count = (slot as InvSlot).count
    const def = typeof itemId === 'string' ? CATALOG[itemId] : undefined
    if (!def || typeof count !== 'number' || !Number.isFinite(count) || count <= 0) continue
    merged.set(itemId, Math.min(def.stack, (merged.get(itemId) ?? 0) + count))
  }
  return [...merged].map(([itemId, count]) => ({ itemId, count: Math.floor(count) }))
}

/** Accept a version-1 save, fill new fields, and drop items the game no longer knows. */
export function migrateSnapshot(raw: unknown): GameSnapshot | null {
  if (!raw || typeof raw !== 'object') return null
  const src = raw as Partial<GameSnapshot>
  if (!src.player || typeof src.player.x !== 'number' || !Number.isFinite(src.player.x)) return null
  if (!Array.isArray(src.inventory)) return null
  const base = createNewGame()
  const inventory = sanitizeInventory(src.inventory)
  const incomingReads = src.readIds
  const readIds = Array.isArray(incomingReads)
    ? incomingReads.filter((id) => typeof id === 'string' && !!CATALOG[id])
    : inventory
      .map((slot) => slot.itemId)
      .filter((id) => id !== 'note_maja' && READABLE.has(CATALOG[id]?.kind ?? ''))
  const flags = { ...base.flags }
  const incoming = src.flags ?? ({} as Partial<Flags>)
  for (const key of Object.keys(base.flags) as (keyof Flags)[]) flags[key] = incoming[key] === true
  const monster = src.monster && typeof src.monster.x === 'number' ? src.monster : base.monster
  return {
    ...base,
    version: 1,
    playTime: Math.max(0, finite(src.playTime, 0)),
    player: {
      ...base.player,
      x: src.player.x,
      y: finite(src.player.y, base.player.y),
      z: finite(src.player.z, base.player.z),
      yaw: finite(src.player.yaw, base.player.yaw),
      pitch: clamp(finite(src.player.pitch, 0), -1.2, 1.2),
      health: clamp(finite(src.player.health, 100), 0, 100),
      stamina: clamp(finite(src.player.stamina, 100), 0, 100),
      battery: clamp(finite(src.player.battery, 100), 0, 100),
      flashlightOn: src.player.flashlightOn === true,
      crouching: src.player.crouching === true,
    },
    inventory,
    pickedUp: strings(src.pickedUp),
    flags,
    visited: strings(src.visited).length ? strings(src.visited) : base.visited,
    doorsOpen: strings(src.doorsOpen),
    doorsUnlocked: strings(src.doorsUnlocked),
    monster: {
      ...base.monster,
      x: finite(monster.x, base.monster.x),
      y: finite(monster.y, base.monster.y),
      z: finite(monster.z, base.monster.z),
      yaw: finite(monster.yaw, base.monster.yaw),
      state: MONSTER_STATES.has(monster.state) ? monster.state : base.monster.state,
      waypointIndex: Number.isInteger(monster.waypointIndex) ? monster.waypointIndex : 0,
      suspicion: finite(monster.suspicion, 0),
      blindTime: finite(monster.blindTime, 0),
    },
    rosaryCharges: clamp(Math.round(finite(src.rosaryCharges, base.rosaryCharges)), 0, 2),
    iFrame: Math.max(0, finite(src.iFrame, 0)),
    events: src.events && Array.isArray(src.events.jumps)
      ? {
          ...emptyScript(),
          ...src.events,
          jumps: src.events.jumps.filter((id) => typeof id === 'string'),
          beats: Array.isArray(src.events.beats) ? src.events.beats.filter((id) => typeof id === 'string') : [],
        }
      : emptyScript(),
    readIds,
    containers: src.containers && typeof src.containers === 'object' ? src.containers : undefined,
  }
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
    const parsed = JSON.parse(raw) as Partial<SaveData>
    if (!parsed || (parsed.version !== undefined && parsed.version !== 1)) return null
    const snapshot = migrateSnapshot(parsed.snapshot)
    if (!snapshot) return null
    return {
      version: 1,
      slot,
      savedAt: typeof parsed.savedAt === 'number' && Number.isFinite(parsed.savedAt) ? parsed.savedAt : 0,
      snapshot,
    }
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
