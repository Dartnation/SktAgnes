export type GameMode =
  | 'menu'
  | 'playing'
  | 'paused'
  | 'inventory'
  | 'examine'
  | 'keypad'
  | 'settings'
  | 'slots'
  | 'credits'
  | 'exit'
  | 'ending'

export const MODAL_KEYS = ['Escape', 'Tab', 'KeyI'] as const
export const GAMEPLAY_EDGES = ['KeyE', 'KeyF', 'KeyR', 'KeyG', 'KeyQ', 'Space', 'F3', 'F4', 'F6', 'F7'] as const

export type ModeAction =
  | { type: 'mode'; mode: GameMode }
  | { type: 'back' }
  | { type: 'none' }

/**
 * Tastatur skifter kun tilstand. Selve spilopdateringen kører ikke, mens en
 * modal er åben, så lukning skal kunne ske herfra.
 */
export type InventoryAction = 'up' | 'down' | 'use' | 'none'

/** Keyboard choice inside the inventory. The highlighted row is the one the description describes. */
export function inventoryKey(key: string | null): InventoryAction {
  if (key === 'ArrowUp' || key === 'KeyW') return 'up'
  if (key === 'ArrowDown' || key === 'KeyS') return 'down'
  if (key === 'Enter' || key === 'KeyE') return 'use'
  return 'none'
}

export function modeAction(mode: GameMode, key: string | null): ModeAction {
  if (!key) return { type: 'none' }
  if (mode === 'playing') {
    if (key === 'Escape') return { type: 'mode', mode: 'paused' }
    if (key === 'Tab' || key === 'KeyI') return { type: 'mode', mode: 'inventory' }
  } else if (mode === 'paused') {
    if (key === 'Escape') return { type: 'mode', mode: 'playing' }
    if (key === 'Tab' || key === 'KeyI') return { type: 'mode', mode: 'inventory' }
  } else if (mode === 'inventory') {
    if (key === 'Escape' || key === 'Tab' || key === 'KeyI') return { type: 'mode', mode: 'playing' }
  } else if (mode === 'examine' || mode === 'keypad') {
    if (key === 'Escape') return { type: 'mode', mode: 'playing' }
  } else if (mode === 'settings' || mode === 'slots' || mode === 'credits' || mode === 'exit') {
    if (key === 'Escape') return { type: 'back' }
  }
  return { type: 'none' }
}
