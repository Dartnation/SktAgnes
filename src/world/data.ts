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
  { id: 'door_rec_pat', a: 'reception', b: 'patientgang', kind: 'door', signA: 'Patientgangen', signB: 'Receptionen' },
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
  // Old gap: just 0.4m at the Personnel Room door, too narrow for a player.
  { id: 'stair_01', x: 50.4, z: 0.6, w: 4.4, d: 4.75, fromFloor: 0, toFloor: 1, axis: 'z' },
  { id: 'stair_12', x: 50.4, z: 6.65, w: 4.4, d: 4.75, fromFloor: 1, toFloor: 2, axis: 'z' },
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
  P('rec_desk', 'reception', 'table', 4, 9.5, 1.6, 0.7, 0.78),
  P('rec_chair', 'reception', 'chair', 4, 8.4, 0.45, 0.45, 0.9),
  P('pat_bench', 'patientgang', 'bench', 18, 2.2, 1.4, 0.45, 0.48),
  P('op_table', 'operationsstue', 'gurney', 30, 9.2, 1.8, 0.7, 0.85),
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
]

export const PICKUPS: PickupDef[] = [
  { id: 'bat_gang', room: 'patientgang', itemId: 'battery', x: 20, z: 9.2 },
  { id: 'bat_pers', room: 'personalerum', itemId: 'battery', x: 44, z: 3 },
  { id: 'key_op_pick', room: 'operationsstue', itemId: 'key_op', x: 32, z: 3 },
  { id: 'key_arkiv_pick', room: 'arkiv', itemId: 'key_arkiv', x: 6, z: 3.2 },
  { id: 'key_kapel_pick', room: 'kapel', itemId: 'key_kapel', x: 14.5, z: 9 },
]

export const DEVICES: DeviceDef[] = []
export const HIDES: HideDef[] = []
export const DECALS: DecalDef[] = [
  { room: 'slagterum', kind: 'blood', x: 40, z: 6.5, rot: 0.2, w: 1.4, d: 0.5 },
  { room: 'obduktion', kind: 'blood', x: 28, z: 8, rot: 0.4, w: 1.2, d: 0.45 },
  { room: 'kammer', kind: 'puddle', x: 42, z: 4, rot: 0, w: 1.1, d: 0.8 },
]
export const WAYPOINT_NUDGE: Record<string, { x: number; z: number }> = {}
