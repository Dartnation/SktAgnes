import * as THREE from 'three'
import { FLOOR_Y, type RoomDef } from './data'

/**
 * Skt. Agnes V3: lightweight environmental storytelling, entirely offline.
 * No new realtime lights, simulation, sound, collisions or interaction logic.
 * Repeated small objects are batched into InstancedMesh to limit draw calls.
 * The authored positions are relative to the existing RoomDef footprint.
 */
type Shape = 'box' | 'cylinder' | 'sphere' | 'torus' | 'sheet'
type Finish = 'wood' | 'rust' | 'enamel' | 'porcelain' | 'paper' |
  'ink' | 'cloth' | 'brass' | 'glass' | 'stain' | 'glow'
interface Placement {
  shape: Shape
  finish: Finish
  matrix: THREE.Matrix4
}

export const V3_ROOM_THEMES: Record<string, string> = {
  reception: 'Efterladt nattevagt og slidt administrationsskranke',
  patientgang: 'Forladte patienter og nummererede døre',
  operationsstue: 'Afbrudt indgreb og klinisk metal',
  slagterum: 'Isoleret vaskeområde, kroge og forseglede beholdere',
  arkiv: 'Overfyldt journalarkiv og glemte navne',
  laboratorium: 'Forældet kemiudstyr og registreringsapparater',
  obduktion: 'Obduktionsinstrumenter og kolde stålflader',
  personalerum: 'Sidste kaffepause, radio og vagtbytter',
  kaeldergang: 'Våd teknik, tre sikringer og generator',
  kapel: 'Slidt kapel, 1907 og støvede votivlys',
  observation: 'Observationsglas og patientfiksering',
  kammer: 'Tom journalreol, isolationsseng og udgangsspor',
  trappe0: 'Slidte gelændere og trappeskilte',
  trappe1: 'Fugtskjolder og nedlagt el',
  trappe2: 'Tunge beslag og mørk trappe',
  stilhed: 'Udgang, regn og en sidste tung lås',
}

export function addVisualV3(scene: THREE.Scene, rooms: RoomDef[]): () => void {
  const palettes: Record<Finish, THREE.MeshStandardMaterial> = {
    wood: new THREE.MeshStandardMaterial({ color: '#4c382e', roughness: 0.88 }),
    rust: new THREE.MeshStandardMaterial({ color: '#5b4137', metalness: 0.57, roughness: 0.79 }),
    enamel: new THREE.MeshStandardMaterial({ color: '#596862', metalness: 0.18, roughness: 0.73 }),
    porcelain: new THREE.MeshStandardMaterial({ color: '#aaa89a', metalness: 0.02, roughness: 0.88 }),
    paper: new THREE.MeshStandardMaterial({ color: '#b2a48b', roughness: 1 }),
    ink: new THREE.MeshStandardMaterial({ color: '#1a1b1b', roughness: 0.98 }),
    cloth: new THREE.MeshStandardMaterial({ color: '#4b4744', roughness: 1, side: THREE.DoubleSide }),
    brass: new THREE.MeshStandardMaterial({ color: '#857352', metalness: 0.72, roughness: 0.56 }),
    glass: new THREE.MeshStandardMaterial({ color: '#465d59', metalness: 0.08, roughness: 0.2, transparent: true, opacity: 0.66 }),
    stain: new THREE.MeshStandardMaterial({ color: '#29241d', roughness: 1, transparent: true, opacity: 0.48, depthWrite: false, side: THREE.DoubleSide }),
    glow: new THREE.MeshStandardMaterial({ color: '#b0a084', emissive: '#806b48', emissiveIntensity: 0.15, roughness: 0.83 }),
  }
  const geometries: Record<Shape, THREE.BufferGeometry> = {
    box: new THREE.BoxGeometry(1, 1, 1),
    cylinder: new THREE.CylinderGeometry(0.5, 0.5, 1, 10),
    sphere: new THREE.SphereGeometry(0.5, 10, 8),
    torus: new THREE.TorusGeometry(0.5, 0.09, 6, 12),
    sheet: new THREE.PlaneGeometry(1, 1),
  }
  const all: Placement[] = []
  const P = (room: RoomDef, shape: Shape, finish: Finish, x: number, y: number, z: number,
    sx: number, sy: number, sz: number, ry = 0, rx = 0, rz = 0): void => {
    const mat = new THREE.Matrix4()
    const p = new THREE.Vector3(room.x + x, FLOOR_Y[room.floor] + y, room.z + z)
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'XYZ'))
    mat.compose(p, q, new THREE.Vector3(sx, sy, sz))
    all.push({ shape, finish, matrix: mat })
  }
  const box = (r: RoomDef, f: Finish, x: number, y: number, z: number,
    w: number, h: number, d: number, rot = 0) => P(r, 'box', f, x, y, z, w, h, d, rot)
  const jar = (r: RoomDef, x: number, y: number, z: number, size = 1) => {
    P(r, 'cylinder', 'glass', x, y + 0.10 * size, z, 0.11 * size, 0.20 * size, 0.11 * size)
    box(r, 'rust', x, y + 0.21 * size, z, 0.12 * size, 0.025 * size, 0.12 * size)
  }
  const binder = (r: RoomDef, x: number, y: number, z: number, n: number) => {
    for (let i = 0; i < n; i++) {
      box(r, i % 3 === 0 ? 'cloth' : 'paper', x + i * 0.045, y + 0.028 + i * 0.013, z,
        0.36, 0.012, 0.23, (i % 3 - 1) * 0.035)
    }
  }
  const indicator = (r: RoomDef, x: number, y: number, z: number) => {
    box(r, 'ink', x, y, z, 0.32, 0.22, 0.08)
    P(r, 'sphere', 'glow', x - 0.075, y + 0.035, z + 0.05, 0.045, 0.045, 0.045)
    P(r, 'cylinder', 'brass', x + 0.075, y + 0.035, z + 0.05, 0.08, 0.04, 0.08, 0, Math.PI / 2)
  }
  const clock = (r: RoomDef, x: number, z: number) => {
    box(r, 'wood', x, 2.18, z, 0.49, 0.49, 0.075)
    P(r, 'cylinder', 'paper', x, 2.18, z + 0.043, 0.38, 0.035, 0.38, 0, Math.PI / 2)
    box(r, 'ink', x, 2.19, z + 0.068, 0.025, 0.16, 0.01, 0.6)
    box(r, 'ink', x + 0.035, 2.13, z + 0.07, 0.095, 0.017, 0.01, 0.3)
  }
  const wall = (r: RoomDef): void => {
    // Not placed at door openings; wall trim, conduits and plaques only.
    const y = 2.98
    box(r, 'rust', r.w * 0.46, y, 0.28, r.w * 0.58, 0.044, 0.055)
    for (let i = 0; i < 3; i++) {
      box(r, 'rust', r.w * (0.2 + i * 0.2), y - 0.055, 0.28, 0.065, 0.12, 0.07)
    }
    box(r, 'wood', Math.max(1, r.w - 2.3), 1.66, 0.2, 0.86, 0.61, 0.07)
    box(r, 'paper', Math.max(1, r.w - 2.3), 1.66, 0.247, 0.71, 0.45, 0.012)
    for (let i = 0; i < 3; i++) {
      box(r, 'ink', Math.max(1, r.w - 2.53), 1.78 - i * 0.095, 0.258, 0.42 + i * 0.07, 0.014, 0.01)
    }
    // Floor evidence remains near the wall; never obstruct doors or corridors.
    for (let i = 0; i < 3; i++) {
      P(r, 'sheet', 'paper', 0.62 + i * 0.2, 0.09 + i * 0.001, 0.67 + (i % 2) * 0.14,
        0.18 + i * 0.04, 0.21, 1, i * 0.2, -Math.PI / 2)
    }
    box(r, 'stain', r.w - 1.12, 0.85, 0.222, 0.46, 1.2, 0.016)
  }

  for (const r of rooms) {
    if (r.id !== 'stilhed') wall(r)
    switch (r.id) {
      case 'reception':
        // Abandoned night shift: telephone, ledger, mug and switches on desk.
        box(r, 'ink', 4.54, 0.88, 9.42, 0.34, 0.085, 0.18)
        box(r, 'ink', 4.52, 0.99, 9.40, 0.30, 0.054, 0.075, 0.19)
        binder(r, 3.52, 0.84, 9.25, 5)
        P(r, 'cylinder', 'porcelain', 4.86, 0.98, 9.70, 0.15, 0.20, 0.15)
        P(r, 'torus', 'porcelain', 4.97, 1.00, 9.70, 0.095, 0.095, 0.095)
        clock(r, 5.3, 0.25)
        indicator(r, 9.48, 1.48, 9.56)
        box(r, 'paper', 9.33, 1.07, 9.38, 0.38, 0.025, 0.30)
        break
      case 'patientgang':
        // Rails and patient belongings on the existing trolley.
        for (let i = 0; i < 3; i++) {
          box(r, 'brass', 3.25 + i * 0.38, 0.91, 9.3, 0.024, 0.08, 0.56)
          box(r, 'cloth', 3.21 + i * 0.39, 0.94, 9.30, 0.22, 0.045, 0.57)
        }
        box(r, 'enamel', 10.20, 1.35, 0.18, 0.55, 0.71, 0.12)
        for (let i = 0; i < 3; i++) jar(r, 2.1 + i * 0.22, 0.4, 0.45, 1.3)
        break
      case 'operationsstue':
        // Surgical light and stainless instruments, not a second operating table.
        P(r, 'cylinder', 'rust', 6.1, 3.12, 8.6, 0.05, 0.6, 0.05)
        P(r, 'cylinder', 'enamel', 6.1, 2.74, 8.6, 0.97, 0.14, 0.97)
        P(r, 'cylinder', 'glow', 6.1, 2.65, 8.6, 0.62, 0.023, 0.62)
        for (let i = 0; i < 5; i++) {
          box(r, 'rust', 8.88 + i * 0.105, 0.98, 2.07, 0.025, 0.025, 0.3, i * 0.06)
        }
        jar(r, 3.45, 0.95, 9.2)
        binder(r, 6.35, 0.92, 9.0, 3)
        break
      case 'slagterum':
        for (let i = 0; i < 5; i++) {
          box(r, 'rust', 4.6 + i * 0.39, 2.63, 2.42, 0.024, 0.52, 0.026)
          P(r, 'torus', 'rust', 4.6 + i * 0.39, 2.35, 2.42, 0.08, 0.12, 0.08)
        }
        jar(r, 5.65, 0.84, 9.3)
        box(r, 'enamel', 6.1, 0.85, 9.34, 0.34, 0.035, 0.25)
        break
      case 'arkiv':
        // Worn rows of binders on existing shelf.
        for (let i = 0; i < 14; i++) {
          box(r, i % 4 === 0 ? 'paper' : 'cloth', 2.12, 0.34 + (i % 3) * 0.47,
            8.27 + Math.floor(i / 3) * 0.19, 0.19, 0.30, 0.045)
        }
        binder(r, 8.0, 0.80, 2.4, 6)
        box(r, 'brass', 8.48, 0.82, 2.14, 0.10, 0.40, 0.08)
        P(r, 'sphere', 'glow', 8.48, 1.04, 2.14, 0.27, 0.12, 0.26)
        break
      case 'laboratorium':
        for (let i = 0; i < 6; i++) jar(r, 3.75 + (i % 3) * 0.18, 0.95, 9.15 + Math.floor(i / 3) * 0.16, 0.8 + (i % 2) * 0.5)
        box(r, 'rust', 4.3, 1.12, 9.45, 0.03, 0.48, 0.04)
        box(r, 'brass', 4.3, 1.35, 9.45, 0.32, 0.03, 0.04)
        indicator(r, 9.8, 1.2, 0.43)
        break
      case 'obduktion':
        for (let i = 0; i < 4; i++) box(r, 'rust', 5.88 + i * 0.105, 0.96, 9.2, 0.026, 0.025, 0.35)
        P(r, 'cylinder', 'brass', 7.9, 0.12, 8.8, 0.34, 0.025, 0.34)
        jar(r, 6.58, 0.93, 9.2)
        binder(r, 2.30, 1.15, 2.0, 4)
        break
      case 'personalerum':
        // Radio on the current sideboard; no extra audio voice/loop is added.
        box(r, 'wood', 9.9, 1.08, 9.17, 0.56, 0.28, 0.19)
        box(r, 'ink', 9.9, 1.1, 9.29, 0.48, 0.18, 0.015)
        P(r, 'cylinder', 'brass', 10.02, 1.11, 9.31, 0.07, 0.045, 0.07, 0, Math.PI / 2)
        P(r, 'sphere', 'glow', 9.75, 1.14, 9.32, 0.05, 0.05, 0.05)
        P(r, 'cylinder', 'porcelain', 9.16, 1.02, 9.43, 0.15, 0.18, 0.15)
        binder(r, 9.0, 0.96, 9.15, 4)
        clock(r, 5.6, 0.25)
        break
      case 'kaeldergang':
        // Visible mission prop, currently VISUAL ONLY until Cursor wires DEVICES.
        box(r, 'rust', 8.8, 0.65, 9.15, 1.18, 1.12, 0.70)
        box(r, 'ink', 8.8, 1.24, 8.78, 0.82, 0.37, 0.06)
        for (let i = 0; i < 3; i++) {
          box(r, 'porcelain', 8.55 + i * 0.23, 1.25, 8.733, 0.12, 0.17, 0.035)
          box(r, i === 0 ? 'rust' : i === 1 ? 'enamel' : 'brass',
            8.55 + i * 0.23, 1.25, 8.70, 0.09, 0.11, 0.02)
        }
        P(r, 'cylinder', 'rust', 9.05, 1.39, 9.14, 0.34, 0.24, 0.34)
        for (let i = 0; i < 3; i++) box(r, 'rust', 1.02 + i * 0.2, 2.52, 10.92, 0.055, 0.98, 0.08)
        break
      case 'kapel':
        // Tarnished altar, candles and foundation tablet.
        for (let i = 0; i < 5; i++) {
          P(r, 'cylinder', 'porcelain', 5.13 + i * 0.38, 1.13, 9.48, 0.078, 0.25 + (i % 2) * 0.1, 0.078)
          P(r, 'sphere', 'glow', 5.13 + i * 0.38, 1.3 + (i % 2) * 0.1, 9.48, 0.04, 0.09, 0.04)
        }
        box(r, 'brass', 6.06, 1.20, 9.18, 0.43, 0.19, 0.07)
        binder(r, 5.53, 1.12, 9.42, 2)
        box(r, 'rust', 6.4, 1.4, 0.21, 0.65, 0.48, 0.10)
        break
      case 'observation':
        // One-way observation panel and restraints on existing gurney.
        box(r, 'rust', 5.3, 1.72, 0.18, 1.42, 0.94, 0.07)
        box(r, 'glass', 5.3, 1.72, 0.245, 1.29, 0.79, 0.018)
        indicator(r, 7.5, 1.0, 2.15)
        for (let i = 0; i < 3; i++) box(r, 'cloth', 9.08, 0.98, 9.05 + i * 0.20, 0.48, 0.06, 0.07)
        break
      case 'kammer':
        // Last patient bed and abandoned file, avoiding the exit threshold.
        for (let i = 0; i < 3; i++) box(r, 'cloth', 4.05 + i * 0.45, 0.51, 9.10, 0.11, 0.08, 0.75)
        binder(r, 2.1, 1.29, 2.05, 6)
        box(r, 'rust', 9.60, 1.49, 0.23, 0.65, 0.83, 0.1)
        indicator(r, 1.6, 1.1, 2.25)
        break
      case 'trappe0':
      case 'trappe1':
      case 'trappe2':
        for (let i = 0; i < 5; i++) box(r, 'rust', r.w - 0.54, 0.7 + i * 0.38, 1.05, 0.05, 0.12, 0.08)
        box(r, 'paper', 1.2, 1.7, 0.22, 0.7, 0.43, 0.04)
        break
      case 'stilhed':
        box(r, 'rust', 6, 1.48, 5.68, 2.3, 2.7, 0.22)
        box(r, 'brass', 6.9, 1.35, 5.52, 0.19, 0.37, 0.10)
        box(r, 'ink', 6, 2.5, 5.50, 0.94, 0.09, 0.04)
        break
    }
  }

  const root = new THREE.Group()
  root.name = 'SktAgnes_VisualV3_Detail'
  const batches = new Map<string, Placement[]>()
  for (const item of all) {
    const key = item.shape + ':' + item.finish
    const list = batches.get(key) ?? []
    list.push(item)
    batches.set(key, list)
  }
  for (const [key, list] of batches) {
    const [shape, finish] = key.split(':') as [Shape, Finish]
    const mesh = new THREE.InstancedMesh(geometries[shape], palettes[finish], list.length)
    list.forEach((item, i) => mesh.setMatrixAt(i, item.matrix))
    mesh.instanceMatrix.needsUpdate = true
    mesh.castShadow = false // Lights are budgeted; small debris must not render hundreds of shadows.
    mesh.receiveShadow = false
    mesh.frustumCulled = false // One mesh contains details across multiple rooms.
    mesh.name = 'V3_' + key
    root.add(mesh)
  }
  root.userData.v3DetailCount = all.length
  root.userData.v3RoomThemes = V3_ROOM_THEMES
  scene.add(root)
  return () => {
    scene.remove(root)
    Object.values(geometries).forEach((g) => g.dispose())
    Object.values(palettes).forEach((m) => m.dispose())
  }
}
