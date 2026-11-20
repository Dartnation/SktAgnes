import type { MonsterStateName } from '../ai/MonsterBrain'
import { emptyScript, type ScriptState } from '../horror/ScriptedEvents'
import { FILE_IDS, itemDef } from './catalog'
import { hasItem, type InvSlot } from './Inventory'

export interface PlayerState {
  x: number
  y: number
  z: number
  yaw: number
  pitch: number
  health: number
  stamina: number
  battery: number
  flashlightOn: boolean
  crouching: boolean
}

export interface Flags {
  generatorOn: boolean
  secretOpen: boolean
  safeOpen: boolean
  radioOn: boolean
  introDone: boolean
  mannequinUsed: boolean
  mannequinOn: boolean
  powerCut: boolean
}

export interface GameSnapshot {
  version: 1
  playTime: number
  player: PlayerState
  inventory: InvSlot[]
  pickedUp: string[]
  flags: Flags
  visited: string[]
  doorsOpen: string[]
  doorsUnlocked: string[]
  monster: {
    x: number
    y: number
    z: number
    yaw: number
    state: MonsterStateName
    waypointIndex: number
    suspicion: number
    blindTime: number
  }
  rosaryCharges: number
  iFrame: number
  events: ScriptState
}

export const SPAWN = { x: 6, y: 0, z: 6, yaw: Math.PI / 2 }
export const MONSTER_START = { x: 42, y: 0, z: 9, yaw: Math.PI }

export function createNewGame(): GameSnapshot {
  return {
    version: 1,
    playTime: 0,
    player: {
      x: SPAWN.x,
      y: SPAWN.y,
      z: SPAWN.z,
      yaw: SPAWN.yaw,
      pitch: 0,
      health: 100,
      stamina: 100,
      battery: 100,
      flashlightOn: false,
      crouching: false,
    },
    inventory: [{ itemId: 'note_maja', count: 1 }],
    pickedUp: [],
    flags: {
      generatorOn: false,
      secretOpen: false,
      safeOpen: false,
      radioOn: false,
      introDone: false,
      mannequinUsed: false,
      mannequinOn: false,
      powerCut: false,
    },
    visited: ['reception'],
    doorsOpen: [],
    doorsUnlocked: [],
    monster: {
      x: MONSTER_START.x,
      y: MONSTER_START.y,
      z: MONSTER_START.z,
      yaw: MONSTER_START.yaw,
      state: 'Patrol',
      waypointIndex: 0,
      suspicion: 0,
      blindTime: 0,
    },
    rosaryCharges: 2,
    iFrame: 0,
    events: emptyScript(),
  }
}

export interface ObjectiveView {
  id: string
  text: string
  done: boolean
}

export function fileCount(snap: GameSnapshot): number {
  return FILE_IDS.reduce((n, id) => n + (hasItem(snap.inventory, id) ? 1 : 0), 0)
}

export const MISSION_KEYS = [
  { id: 'key_op', name: 'Nøgle fra operationsstuen' },
  { id: 'key_arkiv', name: 'Nøgle fra arkivet' },
  { id: 'key_kapel', name: 'Nøgle fra kapellet' },
] as const

export function keysFound(snap: GameSnapshot): number {
  return MISSION_KEYS.filter((k) => hasItem(snap.inventory, k.id)).length
}

export function missingKeyNames(snap: GameSnapshot): string[] {
  return MISSION_KEYS.filter((k) => !hasItem(snap.inventory, k.id)).map((k) => k.name)
}

export function objectives(snap: GameSnapshot): ObjectiveView[] {
  const n = keysFound(snap)
  return [
    { id: 'keys', text: `Find de tre nøgler (${n}/3)`, done: n >= 3 },
    { id: 'leave', text: 'Åbn UD TIL STILHEDEN', done: false },
  ]
}

export function currentObjective(snap: GameSnapshot): ObjectiveView {
  return objectives(snap).find((o) => !o.done) ?? objectives(snap)[0]
}

export function storyProgress(snap: GameSnapshot): number {
  const list = objectives(snap).filter((o) => o.id !== 'leave')
  const done = list.filter((o) => o.done).length
  return done / list.length
}

export type EndingId = 'vidnet' | 'sandheden' | 'tom_port' | 'flugten' | 'optagelsen'

export function resolveEnding(snap: GameSnapshot, cause: 'yard' | 'tunnel' | 'death'): EndingId {
  if (cause === 'death') return 'optagelsen'
  if (cause === 'tunnel') return 'flugten'
  const files = fileCount(snap)
  const proof = hasItem(snap.inventory, 'evidence')
  const rosary = hasItem(snap.inventory, 'rosary')
  if (proof && rosary && files >= 6) return 'vidnet'
  if (proof) return 'sandheden'
  return 'tom_port'
}

export function endingCopy(id: EndingId): { kicker: string; title: string; paragraphs: string[] } {
  switch (id) {
    case 'vidnet':
      return {
        kicker: 'Afslutning',
        title: 'Vidnet',
        paragraphs: [
          'Bagporten giver sig, da strømmen og nøglen endelig er enige. Regnen er koldere end huset. Under armen har du bevismappen, rosenkransen og alle seks journaler.',
          'Maja står ikke på vejen. Det gør ingen. Men navnene gør. I morgen er Skt. Agnes ikke længere en anekdote, nogen kan lukke en dør på.',
          'Et sted bag dig standser et par skridt ved tærsklen og bliver der. Huset husker. Nu gør nogen udenfor det også.',
        ],
      }
    case 'sandheden':
      return {
        kicker: 'Afslutning',
        title: 'Sandheden',
        paragraphs: [
          'Du har ikke hvert ark. Du har nok. Bevismappen vejer mere end lygten, og porten lukker bag dig med en lyd der endelig lyder som en lås og ikke som en mund.',
          'Artiklen vil blive modsagt. Det er i orden. Modsigelse er også et spor, og spor er det eneste, Vogteren ikke kan patruljere.',
        ],
      }
    case 'tom_port':
      return {
        kicker: 'Afslutning',
        title: 'Den tomme port',
        paragraphs: [
          'Porten åbner. Du løber. Dine hænder er tomme.',
          'I dagslys vil du lyde som alle de andre, der "bare havde en fornemmelse" af Skt. Agnes. Huset beholder papirerne. Du beholder pulsen. Ingen af delene rækker.',
        ],
      }
    case 'flugten':
      return {
        kicker: 'Afslutning',
        title: 'Flugten',
        paragraphs: [
          'Tunnellen lugter af jern og regn. Du kravler ud under marehalmen, og vinden tager lygten et øjeblik, før den giver den tilbage.',
          'Bag dig bliver bygningen stående med sine arkiver, sine senge og sin vagt. Du slap ud. Det er ikke det samme som at afslutte noget.',
        ],
      }
    case 'optagelsen':
      return {
        kicker: 'Afslutning',
        title: 'Optagelsen',
        paragraphs: [
          'Lygten peger op i loftet. Nogen samler den op. Det er ikke dig.',
          'Dit navn står på en linje, der ikke fandtes i går, med en håndskrift du genkender. Vogteren retter på uniformen og fortsætter sin runde. Der er én seng mere, end der var.',
        ],
      }
  }
}

export function itemLabel(id: string): string {
  return itemDef(id).name
}
