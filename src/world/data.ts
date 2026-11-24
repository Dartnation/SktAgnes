export type FloorMat = 'wood' | 'tile' | 'concrete' | 'carpet' | 'stone'
export type WallMat = 'plaster' | 'tile' | 'concrete' | 'panel' | 'brick' | 'damp'
export type LightMode = 'always-warm' | 'always-dim' | 'always-candle' | 'always-red' | 'power' | 'secret' | 'none'

/** Three walkable floors. 0 is where you start. */
export const FLOOR_Y: Record<number, number> = { 0: 0, 1: 4, 2: 8 }
export const WALL_H = 3.5
export const CELL = 0.5
export const NAV_INSET = 0.45

export const ROOM_IDS = [
  'reception',
  'patientgang',
  'operationsstue',
  'slagterum',
  'arkiv',
  'laboratorium',
  'obduktion',
  'personalerum',
  'kaeldergang',
  'kapel',
  'observation',
  'kammer',
] as const

/** Lamps in these rooms flicker. They are fixtures, not screen dots. */
export const DEFECTIVE_ROOMS = ['operationsstue', 'obduktion', 'kapel', 'observation'] as const

export const KEY_IDS = ['key_op', 'key_arkiv', 'key_kapel'] as const
export const EXIT_DOOR = 'door_stilhed'

export interface RoomDef {
  id: string
  name: string
  floor: number
  x: number
  z: number
  w: number
  d: number
  floorMat: FloorMat
  wallMat: WallMat
  outdoors?: boolean
  light: LightMode
  lightAt?: { x: number; z: number }
}

export interface ConnectionDef {
  id: string
  a: string
  b: string
  kind: 'door' | 'arch' | 'hidden'
  width?: number
  at?: number
  locked?: boolean
  keyId?: string
  needsPower?: boolean
  signA?: string
  signB?: string
}

export interface StairDef {
  id: string
  x: number
  z: number
  w: number
  d: number
  fromFloor: number
  toFloor: number
  axis: 'z' | 'x'
}

export interface PropDef {
  id: string
  room: string
  kind: string
  x: number
  z: number
  rot: number
  w: number
  d: number
  h: number
  yOff?: number
  block: 'always' | 'stand' | 'none'
  blocksUntilUnlock?: string
}

export interface PickupDef {
  id: string
  room: string
  itemId: string
  x: number
  z: number
  /** Height above the room floor. Missing means a small object resting near knee height. */
  y?: number
}

export interface DeviceDef {
  id: string
  kind: 'generator' | 'safe' | 'bookshelf' | 'radio'
  room: string
  x: number
  z: number
}

export interface HideDef {
  id: string
  room: string
  kind: 'locker' | 'bed'
  x: number
  z: number
}

export interface DecalDef {
  room: string
  kind: 'blood' | 'puddle'
  x: number
  z: number
  rot: number
  w: number
  d: number
}

export interface Zone {
  floor: number
  minX: number
  maxX: number
  minZ: number
  maxZ: number
}

/** Kept so old ending checks do not fire inside the new building. */
export const ZONES: { yard: Zone; tunnel: Zone } = {
  yard: { floor: 9, minX: 0, maxX: 1, minZ: 0, maxZ: 1 },
  tunnel: { floor: 9, minX: 2, maxX: 3, minZ: 0, maxZ: 1 },
}

const R = (
  id: string,
  name: string,
  floor: number,
  x: number,
  z: number,
  w: number,
  d: number,
  floorMat: FloorMat,
  wallMat: WallMat,
  light: LightMode,
): RoomDef => ({ id, name, floor, x, z, w, d, floorMat, wallMat, light })

/** Four rooms in a row, plus a stairwell on the east, same footprint on every floor. */
const row = (floor: number, names: [string, string, string, string, string][]) => {
  const spec: [string, string, FloorMat, WallMat, LightMode][] = names as unknown as [string, string, FloorMat, WallMat, LightMode][]
  return spec.map((s, i) => R(s[0], s[1], floor, i * 12, 0, i === 4 ? 8 : 12, 12, s[2], s[3], s[4]))
}

export const ROOMS: RoomDef[] = [
  ...([
    ['reception', 'Receptionen', 'wood', 'panel', 'always-warm'],
    ['patientgang', 'Patientgangen', 'tile', 'plaster', 'always-dim'],
    ['operationsstue', 'Operationsstuen', 'tile', 'tile', 'power'],
    ['slagterum', 'Slagterummet', 'tile', 'brick', 'always-red'],
    ['trappe0', 'Trappeopgang', 'concrete', 'damp', 'always-dim'],
  ] as [string, string, FloorMat, WallMat, LightMode][]).map((s, i) => R(s[0], s[1], 0, i * 12, 0, i === 4 ? 8 : 12, 12, s[2], s[3], s[4])),
  ...([
    ['arkiv', 'Arkivrummet', 'wood', 'panel', 'always-dim'],
    ['laboratorium', 'Det aflåste laboratorium', 'tile', 'tile', 'power'],
    ['obduktion', 'Obduktionssalen', 'tile', 'tile', 'always-dim'],
    ['personalerum', 'Det forladte personalerum', 'carpet', 'plaster', 'always-warm'],
    ['trappe1', 'Trappeopgang', 'concrete', 'damp', 'always-dim'],
  ] as [string, string, FloorMat, WallMat, LightMode][]).map((s, i) => R(s[0], s[1], 1, i * 12, 0, i === 4 ? 8 : 12, 12, s[2], s[3], s[4])),
  ...([
    ['kaeldergang', 'Kældergangen', 'concrete', 'damp', 'always-dim'],
    ['kapel', 'Det mørke kapel', 'stone', 'brick', 'always-candle'],
    ['observation', 'Observationsrummet', 'tile', 'plaster', 'none'],
    ['kammer', 'Det sidste kammer', 'concrete', 'damp', 'always-dim'],
    ['trappe2', 'Trappeopgang', 'concrete', 'damp', 'none'],
  ] as [string, string, FloorMat, WallMat, LightMode][]).map((s, i) => R(s[0], s[1], 2, i * 12, 0, i === 4 ? 8 : 12, 12, s[2], s[3], s[4])),
  R('stilhed', 'Ud til stilheden', 2, 36, 12, 12, 6, 'concrete', 'damp', 'none'),
]

void row

export const CONNECTIONS: ConnectionDef[] = [
  { id: 'door_rec_pat', a: 'reception', b: 'patientgang', kind: 'door', locked: true, keyId: 'key_gang', signA: 'Patientgangen', signB: 'Receptionen' },
  { id: 'door_pat_op', a: 'patientgang', b: 'operationsstue', kind: 'door', signA: 'Operationsstuen', signB: 'Gang' },
  { id: 'door_op_slag', a: 'operationsstue', b: 'slagterum', kind: 'door', signA: 'Slagterummet', signB: 'Operationsstuen' },
  { id: 'door_slag_trappe', a: 'slagterum', b: 'trappe0', kind: 'door', signA: 'Trappe', signB: 'Slagterummet' },
  { id: 'door_arkiv_lab', a: 'arkiv', b: 'laboratorium', kind: 'door', locked: true, keyId: 'key_op', signA: 'Laboratorium', signB: 'Arkivrummet' },
  { id: 'door_lab_obd', a: 'laboratorium', b: 'obduktion', kind: 'door', signA: 'Obduktionssalen', signB: 'Laboratorium' },
  { id: 'door_obd_pers', a: 'obduktion', b: 'personalerum', kind: 'door', signA: 'Personalerum', signB: 'Obduktionssalen' },
  { id: 'door_pers_trappe', a: 'personalerum', b: 'trappe1', kind: 'door', signA: 'Trappe', signB: 'Personalerum' },
  { id: 'door_kael_kapel', a: 'kaeldergang', b: 'kapel', kind: 'door', signA: 'Kapellet', signB: 'Kældergangen' },
  { id: 'door_kapel_obs', a: 'kapel', b: 'observation', kind: 'door', signA: 'Observation', signB: 'Kapellet' },
  { id: 'door_obs_kammer', a: 'observation', b: 'kammer', kind: 'door', signA: 'Det sidste kammer', signB: 'Observation' },
  { id: 'door_kammer_trappe', a: 'kammer', b: 'trappe2', kind: 'door', signA: 'Trappe', signB: 'Kammeret' },
  { id: 'door_stilhed', a: 'kammer', b: 'stilhed', kind: 'door', locked: true, signA: 'UD TIL STILHEDEN', signB: '' },
]

export const STAIRS: StairDef[] = [
  // The stair flights are offset from the door and have a real mid-floor landing.
  // Keep almost 1m clear of both end walls; floor holes, physics and nav use these same definitions.
  // The middle landing remains 1.4m wide in z, safely clear of the Personnel Room doorway.
  // Reduced the excessive 3.8 m-wide stair slabs to a 2.55 m stair
  // centered inside the 8 m shaft: 2.8 m free passage on either side.
  // Gameplay uses these same definitions for its ramps, cutouts and navigation.
  { id: 'stair_01', x: 50.75, z: 0.95, w: 2.55, d: 4.35, fromFloor: 0, toFloor: 1, axis: 'z' },
  { id: 'stair_12', x: 50.75, z: 6.70, w: 2.55, d: 4.35, fromFloor: 1, toFloor: 2, axis: 'z' },
]

function P(
  id: string,
  room: string,
  kind: string,
  x: number,
  z: number,
  w: number,
  d: number,
  h: number,
): PropDef {
  return { id, room, kind, x, z, rot: 0, w, d, h, block: 'always' }
}

/** Furniture sits in corners, clear of the door line at z≈6 and the shared walls. */
export const PROPS: PropDef[] = [
  P('rec_desk', 'reception', 'receptiondesk', 4, 9.5, 2.6, 0.86, 1.12),
  P('rec_chair', 'reception', 'chair', 4, 8.4, 0.45, 0.45, 0.9),
  P('pat_bench', 'patientgang', 'bench', 18, 2.2, 1.4, 0.45, 0.48),
  P('op_table', 'operationsstue', 'gurney', 33.2, 8.15, 1.8, 0.7, 0.85),
  P('op_cab', 'operationsstue', 'cabinet', 26.8, 2.2, 0.6, 1.4, 1.6),
  P('slag_table', 'slagterum', 'table', 42, 9.4, 1.8, 0.8, 0.8),
  P('slag_hook', 'slagterum', 'beam', 40, 2.4, 2.2, 0.2, 0.15),
  P('ark_shelf', 'arkiv', 'shelf', 2.2, 9.2, 0.5, 2.4, 2),
  P('ark_table', 'arkiv', 'table', 8, 2.4, 1.2, 0.7, 0.75),
  P('lab_bench', 'laboratorium', 'table', 16, 9.2, 1.6, 0.7, 0.9),
  P('obd_table', 'obduktion', 'gurney', 30, 9, 1.9, 0.7, 0.8),
  P('pers_sofa', 'personalerum', 'sofa', 42, 9.2, 1.6, 0.7, 0.7),
  P('kap_altar', 'kapel', 'altar', 18, 9.4, 1.4, 0.6, 1),
  P('obs_desk', 'observation', 'desk', 30, 2.4, 1.2, 0.6, 0.75),
  P('kam_bed', 'kammer', 'bed', 40, 9, 1.8, 0.9, 0.55),

  // Set dressing placed near outer walls, leaving doors and the middle aisle open.
  P('rec_records', 'reception', 'recordcabinet', 1.15, 3.25, 1.2, 0.48, 1.8),
  P('rec_filing', 'reception', 'filing', 8.8, 2.0, 0.72, 0.56, 1.35),
  P('rec_sidechair', 'reception', 'chair', 7.1, 9.65, 0.45, 0.45, 0.9),
  P('rec_sideboard', 'reception', 'sideboard', 9.5, 9.8, 1.35, 0.52, 1.0),
  P('pat_gurney', 'patientgang', 'gurney', 15.1, 9.3, 1.9, 0.7, 0.85),
  P('pat_locker', 'patientgang', 'locker', 14.0, 2.2, 0.76, 0.65, 1.8),
  P('pat_wheelchair', 'patientgang', 'wheelchair', 22.3, 2.0, 0.65, 0.82, 1.1),
  P('op_screen', 'operationsstue', 'foldscreen', 34.7, 9.55, 1.4, 0.2, 1.95),
  P('op_iv', 'operationsstue', 'ivstand', 27.4, 9.0, 0.32, 0.32, 1.85),
  P('op_trolley', 'operationsstue', 'medicalcart', 33.6, 2.15, 0.72, 0.56, 0.9),
  P('slag_locker', 'slagterum', 'locker', 38.1, 9.6, 0.9, 0.6, 1.8),
  P('slag_cart', 'slagterum', 'medicalcart', 45.4, 2.1, 0.85, 0.58, 0.94),
  P('slag_shelf', 'slagterum', 'shelf', 45.5, 9.7, 0.5, 2.2, 2),
  P('ark_file', 'arkiv', 'filing', 3.7, 2.0, 0.78, 0.56, 1.4),
  P('ark_records', 'arkiv', 'recordcabinet', 9.0, 9.5, 1.4, 0.48, 1.8),
  P('ark_chair', 'arkiv', 'chair', 8, 3.5, 0.46, 0.46, 0.92),
  P('ark_safe', 'arkiv', 'safe', 10.2, 9.55, 0.55, 0.48, 0.78),
  P('lab_cart', 'laboratorium', 'medicalcart', 22.4, 2.0, 0.74, 0.56, 0.9),
  P('lab_screen', 'laboratorium', 'foldscreen', 21.8, 9.5, 1.4, 0.17, 1.9),
  P('lab_iv', 'laboratorium', 'ivstand', 13.5, 2.3, 0.32, 0.32, 1.8),
  P('obd_cabinet', 'obduktion', 'recordcabinet', 26.4, 2.0, 1.4, 0.5, 1.85),
  P('obd_trolley', 'obduktion', 'medicalcart', 34.3, 9.5, 0.82, 0.57, 0.85),
  P('obd_screen', 'obduktion', 'foldscreen', 34.1, 2.0, 1.45, 0.18, 1.95),
  P('pers_radio', 'personalerum', 'sideboard', 45.8, 9.2, 1.1, 0.5, 0.9),
  P('pers_filing', 'personalerum', 'filing', 38.2, 2.2, 0.75, 0.55, 1.35),
  P('pers_armchair', 'personalerum', 'chair', 39.4, 9.15, 0.46, 0.46, 0.93),
  P('kael_shelf', 'kaeldergang', 'shelf', 2.1, 9.55, 0.5, 2.1, 1.9),
  P('kael_cart', 'kaeldergang', 'medicalcart', 9.55, 2.0, 0.8, 0.57, 0.9),
  P('kael_locker', 'kaeldergang', 'locker', 7.4, 9.65, 0.74, 0.56, 1.75),
  P('kap_pew1', 'kapel', 'pew', 15, 2.0, 1.65, 0.5, 0.9),
  P('kap_pew2', 'kapel', 'pew', 20.7, 2.0, 1.65, 0.5, 0.9),
  P('kap_filing', 'kapel', 'recordcabinet', 22.4, 9.6, 0.75, 0.45, 1.6),
  P('obs_screen', 'observation', 'foldscreen', 26, 9.5, 1.4, 0.18, 1.9),
  P('obs_gurney', 'observation', 'gurney', 33.6, 9.2, 1.75, 0.7, 0.85),
  P('obs_locker', 'observation', 'locker', 34.4, 2.0, 0.8, 0.56, 1.8),
  P('kam_cart', 'kammer', 'medicalcart', 45.5, 2.15, 0.8, 0.56, 0.9),
  P('kam_dresser', 'kammer', 'dresser', 38.1, 2.0, 1.1, 0.54, 1.2),
  P('kam_chair', 'kammer', 'chair', 45.5, 9.5, 0.46, 0.46, 0.9),
  // V3 cinematic: 24 deliberately placed furniture silhouettes, two per main room.
  // They remain outside the z≈6 door route and are checked for overlap in tests.
  P('rec_waitbench', 'reception', 'bench', 2.8, 2.0, 1.5, 0.5, 0.5),
  P('rec_pigeon', 'reception', 'shelf', 6.35, 2.15, 0.6, 0.4, 1.9),
  P('pat_medicine', 'patientgang', 'medicalcart', 20.15, 2.2, 0.72, 0.55, 0.9),
  P('pat_cabinet', 'patientgang', 'recordcabinet', 22.65, 9.5, 0.8, 0.5, 1.55),
  P('op_sparecase', 'operationsstue', 'shelf', 30, 2.2, 1.3, 0.42, 1.75),
  P('op_assistantchair', 'operationsstue', 'chair', 32, 9.35, 0.46, 0.46, 0.85),
  P('op_locker', 'operationsstue', 'locker', 29.0, 10.55, 0.76, 0.62, 1.8),
  P('slag_washstation', 'slagterum', 'cabinet', 37.25, 2.15, 0.65, 0.5, 1.3),
  P('slag_rustbucket', 'slagterum', 'barrel', 43.3, 2.25, 0.55, 0.55, 0.76),
  P('ark_filing2', 'arkiv', 'filing', 5.45, 9.45, 0.75, 0.54, 1.28),
  P('ark_bookcase', 'arkiv', 'shelf', 1.15, 2.2, 0.55, 2.0, 2.1),
  P('lab_archive', 'laboratorium', 'filing', 17.1, 2.3, 0.75, 0.55, 1.35),
  P('lab_stool', 'laboratorium', 'chair', 18.6, 9.3, 0.46, 0.46, 0.85),
  P('obd_cab2', 'obduktion', 'cabinet', 30.8, 2.1, 0.72, 0.55, 1.55),
  P('obd_tray2', 'obduktion', 'medicalcart', 32.2, 9.45, 0.75, 0.55, 0.88),
  P('pers_bench', 'personalerum', 'bench', 43.1, 2.15, 1.25, 0.5, 0.45),
  P('pers_wardrobe', 'personalerum', 'locker', 46.6, 2.1, 0.72, 0.6, 1.8),
  P('kael_spares', 'kaeldergang', 'cabinet', 2.6, 2.0, 0.75, 0.55, 1.45),
  P('kael_cables', 'kaeldergang', 'barrel', 4.8, 2.2, 0.6, 0.6, 0.82),
  P('kap_pew3', 'kapel', 'pew', 15, 3.65, 1.65, 0.5, 0.9),
  P('kap_pew4', 'kapel', 'pew', 20.7, 3.65, 1.65, 0.5, 0.9),
  P('obs_supply', 'observation', 'medicalcart', 27.45, 2.2, 0.76, 0.56, 0.85),
  P('obs_records', 'observation', 'filing', 28.15, 9.4, 0.7, 0.56, 1.35),
  P('kam_nightstand', 'kammer', 'cabinet', 42.1, 9.45, 0.68, 0.5, 0.88),
  P('kam_storage', 'kammer', 'shelf', 42.2, 2.0, 0.62, 1.15, 1.7),
]

for (const prop of PROPS) {
  if (prop.z > 6 && (prop.kind === 'filing' || prop.kind === 'recordcabinet' || prop.kind === 'dresser')) {
    prop.rot = Math.PI
  }
}

export const PICKUPS: PickupDef[] = [
  { id: 'letter_maja', room: 'reception', itemId: 'note_maja', x: 4.15, z: 9.15, y: 1.2 },
  { id: 'bat_pers', room: 'personalerum', itemId: 'battery', x: 43.1, z: 2.15, y: 0.52 },
  { id: 'key_op_pick', room: 'operationsstue', itemId: 'key_op', x: 33.6, z: 2.15, y: 0.96 },
  { id: 'bat_op', room: 'operationsstue', itemId: 'battery', x: 30.15, z: 2.32, y: 1.4 },
  { id: 'key_arkiv_pick', room: 'arkiv', itemId: 'key_arkiv', x: 8, z: 2.4, y: 0.82 },
  { id: 'key_kapel_pick', room: 'kapel', itemId: 'key_kapel', x: 18, z: 9.4, y: 1.08 },
]

/**
 * Interaction points in front of the V3 props, clear of the door line at z≈6.
 * The generator box itself is the visual at (8.8, 9.15) in the basement.
 */
export const DEVICES: DeviceDef[] = [
  { id: 'dev_generator', kind: 'generator', room: 'kaeldergang', x: 8.8, z: 8.35 },
  { id: 'dev_safe', kind: 'safe', room: 'arkiv', x: 10.2, z: 8.55 },
  { id: 'dev_radio', kind: 'radio', room: 'personalerum', x: 45.8, z: 8.35 },
]
export const HIDES: HideDef[] = [
  { id: 'hide_pat', room: 'patientgang', kind: 'locker', x: 14, z: 3.2 },
  { id: 'hide_op', room: 'operationsstue', kind: 'locker', x: 29.0, z: 9.7 },
  { id: 'hide_kael', room: 'kaeldergang', kind: 'locker', x: 7.4, z: 8.55 },
  { id: 'hide_obs', room: 'observation', kind: 'locker', x: 34.4, z: 3.05 },
  { id: 'hide_kam', room: 'kammer', kind: 'bed', x: 40, z: 7.85 },
]
export const DECALS: DecalDef[] = [
  { room: 'slagterum', kind: 'blood', x: 40, z: 6.5, rot: 0.2, w: 1.4, d: 0.5 },
  { room: 'obduktion', kind: 'blood', x: 28, z: 8, rot: 0.4, w: 1.2, d: 0.45 },
  { room: 'kammer', kind: 'puddle', x: 42, z: 4, rot: 0, w: 1.1, d: 0.8 },
]
export const WAYPOINT_NUDGE: Record<string, { x: number; z: number }> = {}
