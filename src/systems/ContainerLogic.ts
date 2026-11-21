import { clampDt } from '../core/clock'

/**
 * Pure, platform-independent interaction rules for an animated drawer/cabinet.
 * Does NOT create geometry or modify GameSnapshot. Cursor can integrate it
 * with Three.js, collision, audio, inventory and the V2 save migration.
 */
export type ContainerKind = 'drawer' | 'cabinet'

export interface ContainerLoot {
  /** Permanent world-unique slot ID. Two batteries require two different IDs. */
  id: string
  itemId: string
}

export interface ContainerSpec {
  /** Stable ID across sessions / releases. Never use generated array indices. */
  id: string
  roomId: string
  kind: ContainerKind
  contents: readonly ContainerLoot[]
  /** Item must be in inventory but is not consumed by this pure rule. */
  requiresItem?: string
  /** One direction in seconds, defaults to 0.4. */
  duration?: number
  /** Maximum drawer slide in metres; animation consumes this parameter. */
  slideDistance?: number
  /** Maximum cabinet door swing in radians; animation consumes this parameter. */
  swingRadians?: number
}

export interface ContainerState {
  /** 0 closed, 1 fully open; animated independently of the saved target. */
  progress: number
  target: 'open' | 'closed'
  /** Permanent loot-slot IDs already claimed. */
  takenIds: readonly string[]
}

export interface ContainerAccess {
  inRange: boolean
  lineOfSight: boolean
  /** Whether the player currently has the required key/tool, if any. */
  hasRequiredItem: boolean
}

export type ContainerToggleEffect =
  | 'opening' | 'closing' | 'busy' | 'out_of_range' | 'occluded' | 'locked'

export interface ContainerToggle {
  state: ContainerState
  effect: ContainerToggleEffect
}

export interface ContainerLootResult {
  state: ContainerState
  itemId: string | null
  effect: 'taken' | 'unknown' | 'already_taken' | 'closed'
    | 'no_space' | 'out_of_range' | 'occluded' | 'locked'
}

export interface SavedContainer {
  id: string
  open: boolean
  takenIds: string[]
}

export interface ContainerSave {
  version: 1
  containers: SavedContainer[]
}

const DEFAULT_DURATION = 0.4
const ALMOST_OPEN = 1 - 1e-6

function clamp01(n: number): number {
  return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : 0
}

export function assertContainerSpecs(specs: readonly ContainerSpec[]): void {
  const ids = new Set<string>()
  const slots = new Set<string>()
  for (const spec of specs) {
    if (!spec.id || !spec.roomId || ids.has(spec.id)) {
      throw new Error('Duplicate or empty container ID: ' + spec.id)
    }
    ids.add(spec.id)
    if (spec.kind !== 'drawer' && spec.kind !== 'cabinet') {
      throw new Error('Invalid container kind: ' + spec.id)
    }
    if (spec.duration !== undefined && (!Number.isFinite(spec.duration) || spec.duration <= 0)) {
      throw new Error('Invalid animation duration: ' + spec.id)
    }
    if (spec.slideDistance !== undefined && (!Number.isFinite(spec.slideDistance) || spec.slideDistance < 0)) {
      throw new Error('Invalid slide distance: ' + spec.id)
    }
    if (spec.swingRadians !== undefined && (!Number.isFinite(spec.swingRadians) || spec.swingRadians < 0)) {
      throw new Error('Invalid swing angle: ' + spec.id)
    }
    for (const loot of spec.contents) {
      if (!loot.id || !loot.itemId || slots.has(loot.id)) {
        throw new Error('Duplicate or invalid loot-slot ID: ' + loot.id)
      }
      slots.add(loot.id)
    }
  }
}

export function freshContainerState(): ContainerState {
  return { progress: 0, target: 'closed', takenIds: [] }
}

function accessError(access: ContainerAccess, spec: ContainerSpec):
  'out_of_range' | 'occluded' | 'locked' | null {
  if (!access.inRange) return 'out_of_range'
  if (!access.lineOfSight) return 'occluded'
  if (spec.requiresItem && !access.hasRequiredItem) return 'locked'
  return null
}

/** E toggles a stationary container. No rapid repeated interactions mid-animation. */
export function toggleContainer(
  spec: ContainerSpec,
  state: ContainerState,
  access: ContainerAccess,
): ContainerToggle {
  const error = accessError(access, spec)
  if (error) return { state, effect: error }
  const target = state.target === 'open' ? 1 : 0
  if (Math.abs(clamp01(state.progress) - target) > 1e-6) {
    return { state, effect: 'busy' }
  }
  const nextTarget = state.target === 'open' ? 'closed' : 'open'
  return { state: { ...state, target: nextTarget }, effect: nextTarget === 'open' ? 'opening' : 'closing' }
}

/** Pure animation step. A hitch is clamped; pause advances no game time. */
export function stepContainer(
  spec: ContainerSpec,
  state: ContainerState,
  dt: number,
  paused = false,
): ContainerState {
  if (paused) return state
  const delta = clampDt(dt)
  if (delta === 0) return state
  const duration = spec.duration ?? DEFAULT_DURATION
  const speed = delta / (Number.isFinite(duration) && duration > 0 ? duration : DEFAULT_DURATION)
  const end = state.target === 'open' ? 1 : 0
  const current = clamp01(state.progress)
  if (Math.abs(current - end) <= 1e-6) return state
  const progress = end > current
    ? Math.min(1, current + speed)
    : Math.max(0, current - speed)
  return { ...state, progress }
}

/** The renderer reads this; it never changes the scene directly. */
export function containerTransform(spec: ContainerSpec, state: ContainerState): {
  slide: number
  swing: number
} {
  const p = clamp01(state.progress)
  return {
    slide: spec.kind === 'drawer' ? p * (spec.slideDistance ?? 0.28) : 0,
    swing: spec.kind === 'cabinet' ? p * (spec.swingRadians ?? Math.PI * 0.53) : 0,
  }
}

/**
 * Treat item withdrawal as a transaction. Only mark a slot after inventory
 * capacity and access have been checked by the caller.
 */
export function takeContainerLoot(
  spec: ContainerSpec,
  state: ContainerState,
  slotId: string,
  access: ContainerAccess,
  canCarry: boolean,
): ContainerLootResult {
  const error = accessError(access, spec)
  if (error) return { state, itemId: null, effect: error }
  if (state.progress < ALMOST_OPEN || state.target !== 'open') {
    return { state, itemId: null, effect: 'closed' }
  }
  const found = spec.contents.find((item) => item.id === slotId)
  if (!found) return { state, itemId: null, effect: 'unknown' }
  if (state.takenIds.includes(slotId)) {
    return { state, itemId: null, effect: 'already_taken' }
  }
  if (!canCarry) return { state, itemId: null, effect: 'no_space' }
  return {
    state: { ...state, takenIds: [...state.takenIds, slotId] },
    itemId: found.itemId,
    effect: 'taken',
  }
}

/** Snapshot is stable, JSON-safe and never persists a half-open animation. */
export function serializeContainers(
  specs: readonly ContainerSpec[],
  states: ReadonlyMap<string, ContainerState>,
): ContainerSave {
  assertContainerSpecs(specs)
  return {
    version: 1,
    containers: specs.map((spec) => {
      const state = states.get(spec.id) ?? freshContainerState()
      const valid = new Set(spec.contents.map((c) => c.id))
      return {
        id: spec.id,
        open: state.target === 'open',
        takenIds: [...new Set(state.takenIds.filter((id) => valid.has(id)))],
      }
    }),
  }
}

/**
 * V1 games lack this field: default to closed and unclaimed without touching
 * any pre-existing world pickups. Ignore unknown and malformed saved data.
 */
export function restoreContainers(
  specs: readonly ContainerSpec[],
  raw: unknown,
): Map<string, ContainerState> {
  assertContainerSpecs(specs)
  const result = new Map<string, ContainerState>()
  const obj = raw && typeof raw === 'object' ? raw as Record<string, unknown> : null
  const data = obj?.version === 1 && Array.isArray(obj.containers)
    ? obj.containers as unknown[]
    : []
  for (const spec of specs) {
    const entry = data.find((candidate): candidate is Record<string, unknown> =>
      !!candidate && typeof candidate === 'object' &&
      (candidate as { id?: unknown }).id === spec.id)
    const validSlots = new Set(spec.contents.map((loot) => loot.id))
    const open = entry?.open === true
    const takenIds = Array.isArray(entry?.takenIds)
      ? [...new Set(entry.takenIds.filter((id): id is string =>
        typeof id === 'string' && validSlots.has(id)))]
      : []
    result.set(spec.id, {
      progress: open ? 1 : 0,
      target: open ? 'open' : 'closed',
      takenIds,
    })
  }
  return result
}
