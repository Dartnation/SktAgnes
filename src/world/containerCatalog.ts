import type { ContainerLoot, ContainerSpec } from '../systems/ContainerLogic'
import { PROPS } from './data'

/** A container standing in a room. Yaw 0 faces +Z. Slide stays short of the door line at z≈6. */
export interface PlacedContainer {
  spec: ContainerSpec
  x: number
  z: number
  y: number
  yaw: number
  /** Drawer opening. Missing means a single loose drawer. */
  fit?: { w: number; h: number; d: number }
  face?: 'metal' | 'wood'
}

const PLACED: PlacedContainer[] = [
  {
    spec: {
      id: 'rec_desk_drawer',
      roomId: 'reception',
      kind: 'drawer',
      contents: [],
      slideDistance: 0.22,
    },
    x: 4, z: 8.95, y: 0.78, yaw: Math.PI,
  },
  {
    spec: {
      id: 'ark_table_drawer',
      roomId: 'arkiv',
      kind: 'drawer',
      contents: [{ id: 'loot_note_code', itemId: 'note_code' }],
      slideDistance: 0.22,
    },
    x: 8, z: 2.9, y: 0.72, yaw: 0,
  },
  {
    spec: {
      id: 'ark_locked_cabinet',
      roomId: 'arkiv',
      kind: 'cabinet',
      contents: [{ id: 'loot_file_3', itemId: 'file_3' }],
      requiresItem: 'key_arkiv',
      swingRadians: 0.9,
    },
    x: 1.35, z: 10.35, y: 1.05, yaw: Math.PI,
  },
  {
    spec: {
      id: 'pers_side_drawer',
      roomId: 'personalerum',
      kind: 'drawer',
      contents: [{ id: 'loot_pers_battery', itemId: 'battery' }],
      slideDistance: 0.2,
    },
    x: 44.2, z: 8.9, y: 0.7, yaw: Math.PI,
  },
  {
    spec: {
      id: 'pers_wardrobe',
      roomId: 'personalerum',
      kind: 'cabinet',
      contents: [{ id: 'loot_file_4', itemId: 'file_4' }],
      swingRadians: 0.9,
    },
    x: 46.55, z: 2.7, y: 1.05, yaw: 0,
  },
  {
    spec: {
      id: 'op_fuse_drawer',
      roomId: 'operationsstue',
      kind: 'drawer',
      contents: [{ id: 'loot_fuse_red', itemId: 'fuse_red' }],
      slideDistance: 0.2,
    },
    x: 26.8, z: 2.7, y: 0.85, yaw: 0,
  },
  {
    spec: {
      id: 'lab_fuse_drawer',
      roomId: 'laboratorium',
      kind: 'drawer',
      contents: [{ id: 'loot_fuse_blue', itemId: 'fuse_blue' }],
      slideDistance: 0.2,
    },
    x: 16, z: 8.7, y: 0.82, yaw: Math.PI,
  },
  {
    spec: {
      id: 'kael_note_drawer',
      roomId: 'kaeldergang',
      kind: 'drawer',
      contents: [{ id: 'loot_note_generator', itemId: 'note_generator' }],
      slideDistance: 0.2,
    },
    x: 2.6, z: 2.65, y: 0.7, yaw: 0,
  },
  {
    spec: {
      id: 'kael_fuse_cabinet',
      roomId: 'kaeldergang',
      kind: 'cabinet',
      contents: [{ id: 'loot_fuse_yellow', itemId: 'fuse_yellow' }],
      swingRadians: 0.85,
    },
    x: 4.4, z: 2.55, y: 1.0, yaw: 0,
  },
  {
    spec: {
      id: 'pat_med_drawer',
      roomId: 'patientgang',
      kind: 'drawer',
      contents: [{ id: 'loot_pat_battery', itemId: 'battery' }],
      slideDistance: 0.18,
    },
    x: 20.15, z: 2.65, y: 0.78, yaw: 0,
  },
  {
    spec: {
      id: 'obd_file_drawer',
      roomId: 'obduktion',
      kind: 'drawer',
      contents: [{ id: 'loot_file_5', itemId: 'file_5' }],
      slideDistance: 0.2,
    },
    x: 30.8, z: 2.65, y: 0.8, yaw: 0,
  },
  {
    spec: {
      id: 'obs_empty_drawer',
      roomId: 'observation',
      kind: 'drawer',
      contents: [],
      slideDistance: 0.32,
    },
    x: 30, z: 2.48, y: 0.46, yaw: 0,
  },
  {
    spec: {
      id: 'kael_tool_cabinet',
      roomId: 'kaeldergang',
      kind: 'cabinet',
      contents: [{ id: 'loot_crowbar', itemId: 'crowbar' }],
      swingRadians: 0.9,
    },
    x: 6.2, z: 9.5, y: 1.0, yaw: Math.PI,
  },
  {
    spec: {
      id: 'kap_record_cabinet',
      roomId: 'kapel',
      kind: 'cabinet',
      contents: [
        { id: 'loot_evidence', itemId: 'evidence' },
        { id: 'loot_file_6', itemId: 'file_6' },
      ],
      swingRadians: 0.9,
    },
    x: 13.2, z: 9.55, y: 1.0, yaw: Math.PI,
  },
  {
    spec: {
      id: 'kap_rosary_drawer',
      roomId: 'kapel',
      kind: 'drawer',
      contents: [{ id: 'loot_rosary', itemId: 'rosary' }],
      slideDistance: 0.18,
    },
    x: 18.2, z: 2.7, y: 0.7, yaw: 0,
  },
  {
    spec: {
      id: 'op_med_drawer',
      roomId: 'operationsstue',
      kind: 'drawer',
      contents: [{ id: 'loot_med_op', itemId: 'medkit' }],
      slideDistance: 0.2,
    },
    x: 25.3, z: 9.45, y: 0.72, yaw: Math.PI,
  },
  {
    spec: {
      id: 'obd_med_drawer',
      roomId: 'obduktion',
      kind: 'drawer',
      contents: [{ id: 'loot_med_obd', itemId: 'medkit' }],
      slideDistance: 0.2,
    },
    x: 28.8, z: 2.55, y: 0.72, yaw: 0,
  },
  {
    spec: {
      id: 'slag_shelf_drawer',
      roomId: 'slagterum',
      kind: 'drawer',
      contents: [{ id: 'loot_bat_slag', itemId: 'battery' }],
      slideDistance: 0.22,
    },
    x: 45.22, z: 9.42, y: 1.02, yaw: Math.PI,
  },
  {
    spec: {
      id: 'lab_shelf_drawer',
      roomId: 'laboratorium',
      kind: 'drawer',
      contents: [{ id: 'loot_bat_lab', itemId: 'battery' }],
      slideDistance: 0.2,
    },
    x: 19.2, z: 9.45, y: 0.78, yaw: Math.PI,
  },
  {
    spec: {
      id: 'kam_med_drawer',
      roomId: 'kammer',
      kind: 'drawer',
      contents: [{ id: 'loot_med_kam', itemId: 'medkit' }],
      slideDistance: 0.18,
    },
    x: 44.0, z: 2.55, y: 0.7, yaw: 0,
  },
]

const PLINTH = 0.07
const CAP = 0.045

interface DrawerSlot {
  id: string
  contents?: ContainerLoot[]
}

function stack(propId: string, count: number, slots: DrawerSlot[]): PlacedContainer[] {
  const prop = PROPS.find((item) => item.id === propId)
  if (!prop) return []
  const span = prop.h - PLINTH - CAP
  const slotH = span / count
  const yaw = prop.rot
  const ordered = slots.slice()
  let extra = 0
  while (ordered.length < count) {
    extra += 1
    ordered.splice(Math.max(0, ordered.length - 1), 0, { id: `${propId}_d${extra}` })
  }
  return ordered.slice(0, count).map((item, index) => ({
    spec: {
      id: item.id,
      roomId: prop.room,
      kind: 'drawer' as const,
      contents: item.contents ?? [],
      slideDistance: Math.min(0.28, prop.d * 0.55),
    },
    x: prop.x + Math.sin(yaw) * (prop.d / 2),
    z: prop.z + Math.cos(yaw) * (prop.d / 2),
    y: PLINTH + slotH * (index + 0.5),
    yaw,
    fit: { w: prop.w * 0.9, h: slotH * 0.9, d: prop.d * 0.86 },
    face: prop.kind === 'filing' ? 'metal' as const : 'wood' as const,
  }))
}

const CABINET_DRAWERS: PlacedContainer[] = [
  ...stack('rec_filing', 4, [
    { id: 'rec_file_journal', contents: [{ id: 'loot_file_1', itemId: 'file_1' }] },
    { id: 'rec_file_battery', contents: [{ id: 'loot_rec_battery', itemId: 'battery' }] },
    { id: 'rec_file_spare' },
    { id: 'rec_file_empty' },
  ]),
  ...stack('rec_records', 3, [
    { id: 'rec_records_a' },
    { id: 'rec_records_b' },
    { id: 'rec_records_c' },
  ]),
  ...stack('ark_file', 4, [
    { id: 'ark_file_drawer', contents: [{ id: 'loot_file_2', itemId: 'file_2' }] },
    { id: 'ark_file_b' },
    { id: 'ark_file_c' },
    { id: 'ark_file_d' },
  ]),
  ...stack('ark_filing2', 4, [
    { id: 'ark_plan_drawer', contents: [{ id: 'loot_blueprint', itemId: 'blueprint' }] },
    { id: 'ark_filing2_b' },
    { id: 'ark_filing2_c' },
    { id: 'ark_filing2_d' },
  ]),
  ...stack('ark_records', 3, [
    { id: 'ark_records_a' },
    { id: 'ark_records_b' },
    { id: 'ark_records_c' },
  ]),
  ...stack('lab_archive', 4, [
    { id: 'lab_archive_a' },
    { id: 'lab_archive_b' },
    { id: 'lab_archive_c' },
    { id: 'lab_archive_d' },
  ]),
  ...stack('obd_cabinet', 3, [
    { id: 'obd_records_a' },
    { id: 'obd_records_b' },
    { id: 'obd_records_c' },
  ]),
  ...stack('pers_filing', 4, [
    {
      id: 'pers_nurse_drawer',
      contents: [
        { id: 'loot_note_nurse', itemId: 'note_nurse' },
        { id: 'loot_chapel_key', itemId: 'chapel_key' },
      ],
    },
    { id: 'pers_filing_b' },
    { id: 'pers_filing_c' },
    { id: 'pers_filing_d' },
  ]),
  ...stack('pat_cabinet', 3, [
    { id: 'pat_cabinet_a' },
    { id: 'pat_cabinet_b' },
    { id: 'pat_cabinet_c' },
  ]),
  ...stack('kap_filing', 3, [
    { id: 'kap_filing_a' },
    { id: 'kap_filing_b' },
    { id: 'kap_filing_c' },
  ]),
  ...stack('obs_records', 4, [
    { id: 'obs_shelf_drawer', contents: [{ id: 'loot_bat_obs', itemId: 'battery' }] },
    { id: 'obs_records_b' },
    { id: 'obs_records_c' },
    { id: 'obs_records_d' },
  ]),
  ...stack('kam_dresser', 3, [
    { id: 'kam_dresser_a' },
    { id: 'kam_dresser_b' },
    { id: 'kam_empty_drawer' },
  ]),
]

export const CONTAINERS: PlacedContainer[] = [...PLACED, ...CABINET_DRAWERS]

export function containerSpecs(): ContainerSpec[] {
  return CONTAINERS.map((place) => place.spec)
}
