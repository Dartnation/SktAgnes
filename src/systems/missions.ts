import { FILE_IDS } from './catalog'
import { hasItem, type InvSlot } from './Inventory'

export interface MissionFlags {
  generatorOn: boolean
  secretOpen: boolean
  safeOpen: boolean
}

/** The slice of a save the mission graph is allowed to read. */
export interface MissionSnap {
  inventory: InvSlot[]
  flags: MissionFlags
  readIds: string[]
}

export interface ObjectiveView {
  id: string
  text: string
  done: boolean
  hint: string
  optional: boolean
}

interface MissionDef {
  id: string
  requires: string[]
  optional?: boolean
  text: (snap: MissionSnap) => string
  hint: (snap: MissionSnap) => string
  done: (snap: MissionSnap) => boolean
}

const FUSES = ['fuse_red', 'fuse_blue', 'fuse_yellow'] as const

export function hasRead(snap: MissionSnap, itemId: string): boolean {
  return snap.readIds.includes(itemId)
}

function fuseCount(snap: MissionSnap): number {
  return FUSES.filter((id) => hasItem(snap.inventory, id)).length
}

function keyCount(snap: MissionSnap): number {
  return ['key_op', 'key_arkiv', 'key_kapel'].filter((id) => hasItem(snap.inventory, id)).length
}

function fileCount(snap: MissionSnap): number {
  return FILE_IDS.filter((id) => hasItem(snap.inventory, id)).length
}

const MISSIONS: MissionDef[] = [
  {
    id: 'm1_brev',
    requires: [],
    text: () => 'Læs Majas brev.',
    hint: () => 'Det ligger i inventaret. Undersøg det.',
    done: (snap) => hasRead(snap, 'note_maja'),
  },
  {
    id: 'm2_reception',
    requires: ['m1_brev'],
    text: () => 'Læs vagtbogen i receptionen.',
    hint: () => 'Den ligger ved skranken.',
    done: (snap) => hasRead(snap, 'note_log'),
  },
  {
    id: 'm3_generator',
    requires: ['m2_reception'],
    text: (snap) => {
      if (snap.flags.generatorOn) return 'Generatoren kører.'
      return `Find tre sikringer og start generatoren (${fuseCount(snap)}/3).`
    },
    hint: (snap) => hasRead(snap, 'note_generator')
      ? 'Rød, blå og gul skal sidde i generatoren samtidig.'
      : 'Nødstrømmen står et sted i kælderen.',
    done: (snap) => snap.flags.generatorOn,
  },
  {
    id: 'm4_arkiv',
    requires: ['m2_reception'],
    text: () => 'Undersøg arkivet og find stiftelsesprotokollen.',
    hint: () => 'Protokollen siger, hvilket årstal pengeskabet bruger.',
    done: (snap) => hasRead(snap, 'note_code'),
  },
  {
    id: 'm5_nogler',
    requires: ['m4_arkiv'],
    text: (snap) => `Find nøglerne fra operationsstuen, arkivet og kapellet (${keyCount(snap)}/3).`,
    hint: () => 'De tre nøgler ligger ikke i samme rum.',
    done: (snap) => keyCount(snap) >= 3,
  },
  {
    id: 'm6_beviser',
    requires: ['m5_nogler'],
    optional: true,
    text: (snap) => snap.flags.secretOpen
      ? `Den skjulte gang er åben. Saml journaler (${fileCount(snap)}/6) og bevismappen.`
      : `Saml patientjournaler (${fileCount(snap)}/6) og kapellets bevismappe.`,
    hint: () => 'Det ændrer slutningen. Det låser ikke døren.',
    done: (snap) => hasItem(snap.inventory, 'evidence') && fileCount(snap) >= 6,
  },
  {
    id: 'm7_udgang',
    requires: ['m5_nogler'],
    text: () => 'Åbn UD TIL STILHEDEN.',
    hint: (snap) => {
      if (!snap.flags.generatorOn) return 'Bagporten er død uden strøm.'
      if (!snap.flags.safeOpen) return 'Pengeskabet bruger stiftelsesåret.'
      return 'Tre nøgler, strøm og hovednøglen.'
    },
    done: () => false,
  },
]

function byId(id: string): MissionDef {
  const found = MISSIONS.find((mission) => mission.id === id)
  if (!found) throw new Error(`Ukendt mission: ${id}`)
  return found
}

function prereqsMet(mission: MissionDef, snap: MissionSnap): boolean {
  return mission.requires.every((id) => byId(id).done(snap))
}

function view(mission: MissionDef, snap: MissionSnap): ObjectiveView {
  return {
    id: mission.id,
    text: mission.text(snap),
    done: mission.done(snap),
    hint: mission.hint(snap),
    optional: !!mission.optional,
  }
}

export function missionList(snap: MissionSnap): ObjectiveView[] {
  return MISSIONS.filter((mission) => prereqsMet(mission, snap)).map((mission) => view(mission, snap))
}

/** The next required step. Optional evidence never hides the exit. */
export function currentMission(snap: MissionSnap): ObjectiveView {
  const required = missionList(snap).filter((mission) => !mission.optional)
  return required.find((mission) => !mission.done) ?? required[required.length - 1]
}

/** Required steps except the exit, which ends the game instead of being checked off. */
export function missionProgress(snap: MissionSnap): number {
  const required = MISSIONS.filter((mission) => !mission.optional && mission.id !== 'm7_udgang')
  const done = required.filter((mission) => prereqsMet(mission, snap) && mission.done(snap)).length
  return done / required.length
}
