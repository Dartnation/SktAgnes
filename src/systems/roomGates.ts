import { hasItem, type InvSlot } from './Inventory'

/** What a room asks for before its onward door will open. */
export interface RoomSnap {
  inventory: InvSlot[]
  readIds: string[]
  pickedUp: string[]
  containers?: unknown
  beats?: string[]
}

export interface RoomMission {
  id: string
  text: string
  deny: string
  done: boolean
}

interface Gate {
  room: string
  door: string
  id: string
  text: string
  deny: string
  done: (snap: RoomSnap) => boolean
}

function read(snap: RoomSnap, id: string): boolean {
  return snap.readIds.includes(id)
}

function beat(snap: RoomSnap, id: string): boolean {
  return (snap.beats ?? []).includes(id)
}

/** 8 × 150 + 43. The poster in the patient hall asks for this sum. */
export const HALL_CODE = '1243'

/** Written on the covered body in the butcher room. Opens the box. */
export const BODY_CODE = '4182'

function took(snap: RoomSnap, slotId: string): boolean {
  const raw = snap.containers
  if (!raw || typeof raw !== 'object') return false
  const list = (raw as { containers?: unknown }).containers
  if (!Array.isArray(list)) return false
  return list.some((entry) => {
    if (!entry || typeof entry !== 'object') return false
    const ids = (entry as { takenIds?: unknown }).takenIds
    return Array.isArray(ids) && ids.includes(slotId)
  })
}

const GATES: Gate[] = [
  {
    room: 'reception',
    door: 'door_rec_pat',
    id: 'room_reception',
    text: 'Gå hen til døren.',
    deny: 'Gå hen til døren.',
    done: (snap) => read(snap, 'rec_door'),
  },
  {
    room: 'patientgang',
    door: 'door_pat_op',
    id: 'room_patientgang',
    text: 'Kig på væggen. Regn koden og indtast den ved døren.',
    deny: 'Døren giver sig ikke. Koden hænger på væggen.',
    done: (snap) => read(snap, 'code_1243'),
  },
  {
    room: 'operationsstue',
    door: 'door_op_slag',
    id: 'room_operationsstue',
    text: 'Læs bogstaverne på væggene i rækkefølge.',
    deny: 'Døren giver sig ikke. Bogstaverne på væggene er ikke læst.',
    done: (snap) => beat(snap, 'op_mission') && beat(snap, 'op_homo'),
  },
  {
    room: 'slagterum',
    door: 'door_slag_trappe',
    id: 'room_slagterum',
    text: 'Træk lagenet af sengen.',
    deny: 'Døren giver sig ikke. Lagenet ligger stadig på sengen.',
    done: (snap) => beat(snap, 'slag_key'),
  },
  {
    room: 'personalerum',
    door: 'door_obd_pers',
    id: 'room_personalerum',
    text: 'Læs sedlen i personalets arkivskab.',
    deny: 'Læs sedlen i arkivskabet, før du går videre.',
    done: (snap) => read(snap, 'note_nurse'),
  },
  {
    room: 'obduktion',
    door: 'door_lab_obd',
    id: 'room_obduktion',
    text: 'Find journalen i obduktionssalen.',
    deny: 'Find journalen i obduktionssalen, før du går videre.',
    done: (snap) => took(snap, 'loot_file_5'),
  },
  {
    room: 'laboratorium',
    door: 'door_arkiv_lab',
    id: 'room_laboratorium',
    text: 'Find den blå sikring i laboratoriet.',
    deny: 'Find den blå sikring, før laboratoriedøren giver sig.',
    done: (snap) => took(snap, 'loot_fuse_blue'),
  },
  {
    room: 'arkiv',
    door: 'door_arkiv_lab',
    id: 'room_arkiv',
    text: 'Læs stiftelsesprotokollen i arkivets skuffe.',
    deny: 'Læs stiftelsesprotokollen, før du forlader arkivet.',
    done: (snap) => read(snap, 'note_code'),
  },
  {
    room: 'kammer',
    door: 'door_obs_kammer',
    id: 'room_kammer',
    text: 'Find forbindingen i kammeret.',
    deny: 'Find forbindingen i kammeret, før du går videre.',
    done: (snap) => took(snap, 'loot_med_kam'),
  },
  {
    room: 'observation',
    door: 'door_kapel_obs',
    id: 'room_observation',
    text: 'Åbn arkivskabet.',
    deny: 'Døren giver sig ikke. Åbn arkivskabet først.',
    done: (snap) => beat(snap, 'obs_cabinet'),
  },
  {
    room: 'kapel',
    door: 'door_kael_kapel',
    id: 'room_kapel',
    text: 'Se ved alteret.',
    deny: 'Døren giver sig ikke. Se ved alteret først.',
    done: (snap) => hasItem(snap.inventory, 'key_kapel'),
  },
  {
    room: 'kaeldergang',
    door: 'door_kael_kapel',
    id: 'room_kaeldergang',
    text: 'Find den gule sikring i kælderen.',
    deny: 'Find den gule sikring, før du forlader kælderen.',
    done: (snap) => took(snap, 'loot_fuse_yellow'),
  },
]

/** Every door of a room stays shut until that room's task is done. */
const SEALED_DOORS: Record<string, string[]> = {
  reception: ['door_rec_pat'],
  patientgang: ['door_rec_pat', 'door_pat_op'],
  operationsstue: ['door_pat_op', 'door_op_slag'],
  slagterum: ['door_op_slag', 'door_slag_trappe'],
  personalerum: ['door_obd_pers', 'door_pers_trappe'],
  obduktion: ['door_lab_obd', 'door_obd_pers'],
  laboratorium: ['door_arkiv_lab', 'door_lab_obd'],
  arkiv: ['door_arkiv_lab'],
  kammer: ['door_obs_kammer', 'door_kammer_trappe'],
  observation: ['door_kapel_obs', 'door_obs_kammer'],
  kapel: ['door_kael_kapel', 'door_kapel_obs'],
  kaeldergang: ['door_kael_kapel'],
}

function gateFor(roomId: string): Gate | undefined {
  return GATES.find((gate) => gate.room === roomId)
}

/** The door the room's task is keeping the player from. */
export function roomOnwardDoor(roomId: string): string | null {
  return gateFor(roomId)?.door ?? null
}

/** Doors that must stay closed while this room's task is unfinished. */
export function roomSealedDoors(roomId: string, snap: RoomSnap): string[] {
  const mission = roomMission(roomId, snap)
  if (!mission || mission.done) return []
  return SEALED_DOORS[roomId] ?? []
}

/** The task shown while the player is still inside this room. */
export function roomMission(roomId: string, snap: RoomSnap): RoomMission | null {
  const gate = gateFor(roomId)
  if (!gate) return null
  if (roomId === 'reception' && !hasItem(snap.inventory, 'key_gang')) return null
  if (roomId === 'slagterum') {
    const beats = snap.beats ?? []
    if (!beats.includes('slag_sheet')) {
      return {
        id: gate.id,
        text: 'Træk lagenet af sengen.',
        deny: 'Døren giver sig ikke. Lagenet ligger stadig på sengen.',
        done: false,
      }
    }
    if (!beats.includes('slag_code')) {
      return {
        id: gate.id,
        text: 'Tallet på maven åbner boksen.',
        deny: 'Døren giver sig ikke. Tallet på maven åbner boksen.',
        done: false,
      }
    }
    const haveKey = beats.includes('slag_key')
    return {
      id: gate.id,
      text: haveKey ? 'Gå hen til døren.' : 'Tag nøglen i boksen.',
      deny: 'Døren giver sig ikke. Nøglen ligger i boksen.',
      done: haveKey,
    }
  }
  if (roomId === 'operationsstue' && !(snap.beats ?? []).includes('op_mission')) {
    return {
      id: 'room_operations_hide',
      text: 'Gem dig i skabet.',
      deny: 'Gem dig i skabet, før du går videre.',
      done: false,
    }
  }
  return { id: gate.id, text: gate.text, deny: gate.deny, done: gate.done(snap) }
}

/** Why this door stays shut. Null means the room's task is done, or the door is not in that room. */
export function roomDoorBlock(roomId: string, doorId: string, snap: RoomSnap): string | null {
  const mission = roomMission(roomId, snap)
  if (!mission || mission.done) return null
  if (!(SEALED_DOORS[roomId] ?? []).includes(doorId)) return null
  return mission.deny
}
