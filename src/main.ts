import './style.css'
import { Game } from './game/Game'
import { UI, type UIHooks } from './ui/UI'
import type { Settings } from './systems/Settings'

const root = document.getElementById('app')
if (!root) throw new Error('Mangler #app')

let game: Game

const hooks: UIHooks = {
  newGame: () => game.handle('new'),
  continue: () => game.handle('continue'),
  openLoad: () => game.handle('openLoad'),
  openSave: () => game.handle('openSave'),
  pickSlot: (slot) => game.handle('slot', slot),
  closeSlots: () => game.handle('closeSlots'),
  settings: () => game.handle('settings'),
  closeSettings: () => game.handle('closeSettings'),
  resume: () => game.handle('resume'),
  restart: () => game.handle('restart'),
  menu: () => game.handle('menu'),
  exit: () => game.handle('exit'),
  exitBack: () => game.handle('exitBack'),
  credits: () => game.handle('credits'),
  creditsBack: () => game.handle('creditsBack'),
  closeInventory: () => game.handle('closeInv'),
  openInventory: () => game.handle('inventory'),
  selectItem: (index) => game.handle('select', index),
  useItem: () => game.handle('use'),
  dropItem: () => game.handle('drop'),
  closeExamine: () => game.handle('closeEx'),
  digit: (d) => game.handle('digit', d),
  keypadOk: () => game.handle('keyOk'),
  keypadClear: () => game.handle('keyClear'),
  closeKeypad: () => game.handle('keyClose'),
  patchSettings: (partial: Partial<Settings>) => game.applyPatch(partial),
  endingMenu: () => game.handle('endMenu'),
  endingRetry: () => game.handle('endRetry'),
  endingNew: () => game.handle('endNew'),
}

const ui = new UI(root, hooks)
const canvas = root.querySelector('#view') as HTMLCanvasElement | null

try {
  if (!canvas) throw new Error('Mangler lærred')
  game = new Game(canvas, ui)
  game.start()
} catch (err) {
  const message = err instanceof Error ? err.message : 'Ukendt fejl'
  ui.fatal(`Spillet kunne ikke starte. ${message}`)
  console.error(err)
}
