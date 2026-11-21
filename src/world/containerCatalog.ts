import type { ContainerSpec } from '../systems/ContainerLogic'

/** A container standing in a room. Yaw 0 faces +Z. Slide stays short of the door line at z≈6. */
export interface PlacedContainer {
  spec: ContainerSpec
  x: number
  z: number
  y: number
  yaw: number
}

export const CONTAINERS: PlacedContainer[] = [
  {
    spec: {
      id: 'rec_desk_drawer',
      roomId: 'reception',
      kind: 'drawer',
      contents: [{ id: 'loot_note_log', itemId: 'note_log' }],
      slideDistance: 0.22,
    },
    x: 4, z: 8.95, y: 0.78, yaw: Math.PI,
  },
  {
    spec: {
      id: 'rec_file_empty',
      roomId: 'reception',
      kind: 'drawer',
      contents: [],
      slideDistance: 0.2,
    },
    x: 8.35, z: 2.55, y: 0.42, yaw: 0,
  },
  {
    spec: {
      id: 'rec_file_journal',
      roomId: 'reception',
      kind: 'drawer',
      contents: [{ id: 'loot_file_1', itemId: 'file_1' }],
      slideDistance: 0.2,
    },
    x: 8.8, z: 2.55, y: 0.78, yaw: 0,
  },
  {
    spec: {
      id: 'rec_file_battery',
      roomId: 'reception',
      kind: 'drawer',
      contents: [{ id: 'loot_rec_battery', itemId: 'battery' }],
      slideDistance: 0.2,
    },
    x: 9.25, z: 2.55, y: 1.14, yaw: 0,
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
      id: 'ark_file_drawer',
      roomId: 'arkiv',
      kind: 'drawer',
      contents: [{ id: 'loot_file_2', itemId: 'file_2' }],
      slideDistance: 0.2,
    },
    x: 3.7, z: 2.55, y: 0.7, yaw: 0,
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
      slideDistance: 0.18,
    },
    x: 30, z: 2.85, y: 0.62, yaw: 0,
  },
  {
    spec: {
      id: 'kam_empty_drawer',
      roomId: 'kammer',
      kind: 'drawer',
      contents: [],
      slideDistance: 0.18,
    },
    x: 38.1, z: 2.6, y: 0.7, yaw: 0,
  },
]

export function containerSpecs(): ContainerSpec[] {
  return CONTAINERS.map((place) => place.spec)
}
