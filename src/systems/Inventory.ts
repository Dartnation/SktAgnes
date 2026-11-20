import { CATALOG, type ItemDef } from './catalog'

export interface InvSlot {
  itemId: string
  count: number
}

export function cloneInv(slots: InvSlot[]): InvSlot[] {
  return slots.map((s) => ({ ...s }))
}

export function countItem(slots: InvSlot[], itemId: string): number {
  return slots.reduce((n, s) => (s.itemId === itemId ? n + s.count : n), 0)
}

export function hasItem(slots: InvSlot[], itemId: string): boolean {
  return countItem(slots, itemId) > 0
}

export function addItem(slots: InvSlot[], itemId: string, count = 1): { slots: InvSlot[]; added: number } {
  const def = CATALOG[itemId]
  if (!def || !Number.isFinite(count) || count <= 0) return { slots, added: 0 }
  const next = cloneInv(slots)
  // `stack` is the most of this item the player can carry, kept in as few slots as possible.
  let left = Math.min(count, Math.max(0, def.stack - countItem(next, itemId)))
  const added = left
  const existing = next.find((s) => s.itemId === itemId)
  if (existing) {
    const put = Math.min(left, def.stack - existing.count)
    existing.count += put
    left -= put
  }
  if (left > 0) next.push({ itemId, count: left })
  return { slots: next, added }
}

export function removeItem(slots: InvSlot[], itemId: string, count = 1): InvSlot[] {
  const next = cloneInv(slots)
  let left = count
  for (let i = next.length - 1; i >= 0 && left > 0; i--) {
    if (next[i].itemId !== itemId) continue
    const take = Math.min(next[i].count, left)
    next[i].count -= take
    left -= take
    if (next[i].count <= 0) next.splice(i, 1)
  }
  return next
}

export function dropOne(slots: InvSlot[], itemId: string): { slots: InvSlot[]; dropped: boolean } {
  const def = CATALOG[itemId]
  if (!def || !def.droppable || countItem(slots, itemId) <= 0) return { slots, dropped: false }
  return { slots: removeItem(slots, itemId, 1), dropped: true }
}

export function useConsumable(slots: InvSlot[], itemId: string): { slots: InvSlot[]; heal: number } {
  const def: ItemDef | undefined = CATALOG[itemId]
  if (!def || def.kind !== 'consumable' || !hasItem(slots, itemId)) return { slots, heal: 0 }
  return { slots: removeItem(slots, itemId, 1), heal: def.heal ?? 0 }
}
