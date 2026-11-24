import * as THREE from 'three'
import { FLOOR_Y, type PropDef, type RoomDef } from './data'
import { scannedAssetId } from './ScannedAssetsV5'

/**
 * V5 surface detail on the existing world's known furniture anchors.
 *
 * NO gameplay: no collisions, interactions, pickups, dynamic lights, AI nodes,
 * story flags, saves, audio or extra props in World. All meshes are decorative.
 * The material/shapes are instanced to avoid hundreds of draw calls.
 *
 * Objects are deliberately constrained to furniture footprints rather than
 * scattering more objects randomly over room floors and escape routes.
 */
type GeometryType = 'box' | 'cylinder' | 'sphere' | 'torus' | 'sheet'
type Finish = 'steel' | 'brass' | 'rubber' | 'linen' | 'paper' | 'paint'
  | 'glass' | 'oxide' | 'leather' | 'red' | 'ink'

export interface VisualDetailV5Stats {
  rooms: string[]
  anchors: number
  details: number
  batches: number
}

export function addVisualDetailV5(
  scene: THREE.Scene,
  rooms: readonly RoomDef[],
  props: readonly PropDef[],
): () => void {
  const palette: Record<Finish, THREE.MeshStandardMaterial> = {
    steel: new THREE.MeshStandardMaterial({ color: '#737b79', metalness: 0.81, roughness: 0.44 }),
    brass: new THREE.MeshStandardMaterial({ color: '#9a8154', metalness: 0.82, roughness: 0.47 }),
    rubber: new THREE.MeshStandardMaterial({ color: '#292d2c', metalness: 0.04, roughness: 0.96 }),
    linen: new THREE.MeshStandardMaterial({ color: '#aaada4', roughness: 0.96 }),
    paper: new THREE.MeshStandardMaterial({ color: '#afa28a', roughness: 0.96 }),
    paint: new THREE.MeshStandardMaterial({ color: '#5f6a61', metalness: 0.12, roughness: 0.76 }),
    glass: new THREE.MeshStandardMaterial({ color: '#839a8d', metalness: 0.0, roughness: 0.24, transparent: true, opacity: 0.7 }),
    oxide: new THREE.MeshStandardMaterial({ color: '#654a3d', metalness: 0.49, roughness: 0.89 }),
    leather: new THREE.MeshStandardMaterial({ color: '#493d32', roughness: 0.93 }),
    red: new THREE.MeshStandardMaterial({ color: '#8c5e4c', roughness: 0.84 }),
    ink: new THREE.MeshStandardMaterial({ color: '#2a2c2a', roughness: 0.88 }),
  }
  const geom: Record<GeometryType, THREE.BufferGeometry> = {
    box: new THREE.BoxGeometry(1, 1, 1),
    cylinder: new THREE.CylinderGeometry(0.5, 0.5, 1, 14),
    sphere: new THREE.SphereGeometry(0.5, 14, 10),
    torus: new THREE.TorusGeometry(0.41, 0.075, 8, 18),
    sheet: new THREE.PlaneGeometry(1, 1),
  }
  const matrices = new Map<string, THREE.Matrix4[]>()
  const rotation = new THREE.Euler()
  const quaternion = new THREE.Quaternion()
  const tmp = new THREE.Quaternion()
  const yawQuaternion = new THREE.Quaternion()
  const shift = new THREE.Vector3()
  const finalPos = new THREE.Vector3()
  const scale = new THREE.Vector3()
  const seenRooms = new Set<string>()
  let detailCount = 0
  let anchorCount = 0

  const paint = (
    p: PropDef, type: GeometryType, finish: Finish,
    ox: number, oy: number, oz: number,
    w: number, h: number, d: number,
    rx = 0, ry = 0, rz = 0,
  ) => {
    const room = rooms.find(r => r.id === p.room)
    if (!room) return
    seenRooms.add(p.room)
    shift.set(ox, oy, oz).applyAxisAngle(THREE.Object3D.DEFAULT_UP, p.rot)
    finalPos.set(p.x + shift.x, FLOOR_Y[room.floor] + (p.yOff ?? 0) + shift.y, p.z + shift.z)
    rotation.set(rx, ry, rz, 'XYZ')
    quaternion.setFromEuler(rotation)
    yawQuaternion.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, p.rot)
    tmp.multiplyQuaternions(yawQuaternion, quaternion)
    scale.set(w, h, d)
    const mat = new THREE.Matrix4().compose(finalPos, tmp, scale)
    const k = type + '/' + finish
    if (!matrices.has(k)) matrices.set(k, [])
    matrices.get(k)!.push(mat)
    detailCount++
  }
  const box = (p: PropDef, mat: Finish, x: number, y: number, z: number,
    w: number, h: number, d: number, ry = 0) => paint(p, 'box', mat, x, y, z, w, h, d, 0, ry)
  const disk = (p: PropDef, mat: Finish, x: number, y: number, z: number,
    diameter: number, depth: number, rx = 0) => paint(p, 'cylinder', mat, x, y, z, diameter, depth, diameter, rx)
  const glass = (p: PropDef, x: number, y: number, z: number, size = 1) => {
    disk(p, 'glass', x, y + 0.07 * size, z, 0.085 * size, 0.15 * size)
    disk(p, 'steel', x, y + 0.145 * size, z, 0.090 * size, 0.020 * size)
    disk(p, 'paper', x, y + 0.067 * size, z, 0.090 * size, 0.037 * size)
  }
  const ledger = (p: PropDef, x: number, y: number, z: number, w = 0.32, d = 0.22) => {
    box(p, 'leather', x, y, z, w, 0.029, d)
    box(p, 'paper', x, y + 0.017, z, w * 0.93, 0.009, d * 0.92)
    box(p, 'brass', x - w * 0.45, y + 0.008, z, 0.011, 0.035, d)
    box(p, 'red', x + w * 0.28, y + 0.024, z - d * 0.38, w * 0.08, 0.007, d * 0.10)
  }
  const lamp = (p: PropDef, x: number, y: number, z: number) => {
    disk(p, 'steel', x, y + 0.017, z, 0.18, 0.035)
    disk(p, 'brass', x, y + 0.17, z, 0.023, 0.29)
    disk(p, 'paint', x, y + 0.335, z, 0.24, 0.15)
    disk(p, 'linen', x, y + 0.267, z, 0.12, 0.020)
  }
  const folder = (p: PropDef, x: number, y: number, z: number, count: number) => {
    for (let j = 0; j < count; j++) {
      const dx = x + j * 0.025
      box(p, j % 4 === 0 ? 'leather' : 'paper', dx, y + j * 0.013, z,
        0.20, 0.015, 0.30, (j % 3 - 1) * 0.024)
    }
  }
  const tray = (p: PropDef, x: number, y: number, z: number, w: number, d: number) => {
    box(p, 'steel', x, y, z, w, 0.015, d)
    for (const sign of [-1, 1]) {
      box(p, 'steel', x + sign * (w / 2 - 0.01), y + 0.019, z, 0.014, 0.042, d)
      box(p, 'steel', x, y + 0.019, z + sign * (d / 2 - 0.01), w, 0.042, 0.014)
    }
  }
  const cabinetFace = (p: PropDef, count: number) => {
    const face = p.z > 6 ? -1 : 1
    for (let j = 0; j < count; j++) {
      const height = (j + 0.55) * p.h / count
      const z = face * (p.d * 0.5 + 0.018)
      box(p, 'ink', 0, height, z, p.w * 0.71, 0.024, 0.016)
      box(p, 'brass', 0, height, z + face * 0.012, p.w * 0.22, 0.026, 0.017)
      box(p, 'paper', p.w * 0.22, height + 0.12 * p.h / count, z + face * 0.014,
        p.w * 0.27, 0.030, 0.006)
    }
  }

  for (const p of props) {
    // A high-fidelity scan is the entire visible prop. Do not overlay
    // procedural drawer handles, trays, wheels or folders into the new GLTF.
    if (scannedAssetId(p.id)) {
      // This area is detailed by a real scanned mesh, not a procedural overlay.
      seenRooms.add(p.room)
      anchorCount++
      continue
    }
    const height = p.h
    const surface = height + 0.016
    switch (p.kind) {
      case 'receptiondesk':
        ledger(p, -p.w * 0.17, surface + 0.012, p.d * 0.10, 0.42, 0.28)
        // Keyhole, patient list clipboard, brass reception bell.
        box(p, 'paper', p.w * 0.31, surface + 0.012, 0, 0.21, 0.015, 0.30)
        box(p, 'brass', p.w * 0.31, surface + 0.022, -0.095, 0.09, 0.015, 0.02)
        disk(p, 'brass', p.w * 0.08, surface + 0.035, -p.d * 0.19, 0.12, 0.033)
        disk(p, 'steel', p.w * 0.08, surface + 0.063, -p.d * 0.19, 0.045, 0.030)
        // The scanned CC0 desk lamp is mounted here by LevelBuilder.
        break
      case 'table':
      case 'desk':
        // These are all distinct surfaces: laboratory specimens, archive files,
        // autopsy instruments or the observation report.
        if (p.room === 'arkiv' || p.room === 'observation') {
          ledger(p, -p.w * 0.18, surface + 0.015, 0.03, 0.29, 0.20)
          folder(p, p.w * 0.17, surface + 0.010, -p.d * 0.07, 3)
        } else if (p.room === 'laboratorium') {
          tray(p, -p.w * 0.08, surface + 0.016, 0, 0.43, p.d * 0.61)
          for (let i = 0; i < 3; i++)
            glass(p, -p.w * 0.18 + i * 0.15, surface + 0.028, 0, i === 1 ? 1.15 : 0.85)
          box(p, 'ink', p.w * 0.32, surface + 0.008, 0.0, 0.16, 0.014, 0.23)
        } else if (p.room === 'slagterum') {
          tray(p, 0, surface + 0.014, 0, p.w * 0.52, p.d * 0.66)
          for (let i = 0; i < 3; i++) {
            const x = (i - 1) * 0.16
            box(p, 'steel', x, surface + 0.039, -0.10, 0.015, 0.016, 0.27)
            box(p, 'rubber', x, surface + 0.042, 0.08, 0.035, 0.025, 0.11)
          }
        } else {
          ledger(p, 0, surface + 0.015, 0, 0.31, 0.24)
        }
        break
      case 'sideboard':
        // Cardboard archival cases and a compact worn desk lamp.
        if (p.id !== 'pers_radio') {
          folder(p, -p.w * 0.20, surface + 0.015, 0, 4)
          lamp(p, p.w * 0.29, surface, 0)
        } else {
          tray(p, -p.w * 0.20, surface + 0.014, 0, 0.25, 0.22)
          box(p, 'steel', p.w * 0.26, surface + 0.045, 0, 0.22, 0.075, 0.15)
        }
        break
      case 'gurney':
      case 'bed': {
        // Padded mattress, stitched cover, pillow and tubular safety rails
        // over the old frame. Positioned within the known gurney footprint.
        const padWidth = p.w * 0.82
        box(p, 'rubber', 0, height + 0.013, 0, padWidth, 0.035, p.d * 0.85)
        box(p, p.room === 'obduktion' ? 'steel' : 'linen',
          0, height + 0.045, 0, padWidth * 0.98, 0.032, p.d * 0.81)
        if (p.room !== 'obduktion') {
          box(p, 'linen', -p.w * 0.28, height + 0.083, 0,
            p.w * 0.18, 0.070, p.d * 0.67)
          for (let i = 0; i < 4; i++)
            box(p, 'paper', -p.w * 0.34 + i * 0.028, height + 0.125, 0,
              0.008, 0.004, p.d * 0.48)
        }
        for (const side of [-1, 1]) {
          const z = side * p.d * 0.43
          box(p, 'steel', 0, height + 0.160, z, p.w * 0.68, 0.018, 0.018)
          for (const dx of [-p.w * 0.32, p.w * 0.32]) {
            box(p, 'steel', dx, height + 0.085, z, 0.015, 0.17, 0.018)
          }
        }
        for (const x of [-p.w * 0.26, p.w * 0.26]) {
          box(p, 'rubber', x, height + 0.075, 0, 0.035, 0.047, p.d * 0.74)
        }
        break
      }
      case 'medicalcart': {
        const y = height + 0.018
        tray(p, 0, y, 0, p.w * 0.81, p.d * 0.84)
        glass(p, -p.w * 0.20, y + 0.027, -p.d * 0.11, 0.85)
        glass(p, 0, y + 0.027, 0, 0.72)
        if (p.room !== 'patientgang') {
          disk(p, 'steel', p.w * 0.22, y + 0.039, -p.d * 0.12, 0.14, 0.010)
          for (let i = 0; i < 3; i++)
            box(p, 'steel', p.w * 0.15 + i * 0.05,
              y + 0.045, -p.d * 0.1, 0.006, 0.006, 0.18)
        } else {
          box(p, 'linen', p.w * 0.21, y + 0.045, 0, 0.12, 0.055, 0.22)
          box(p, 'red', p.w * 0.21, y + 0.076, 0, 0.035, 0.006, 0.075)
        }
        for (const x of [-p.w * 0.32, p.w * 0.32])
          for (const z of [-p.d * 0.30, p.d * 0.30])
            disk(p, 'rubber', x, 0.067, z, 0.075, 0.024, Math.PI / 2)
        break
      }
      case 'filing':
        cabinetFace(p, 4)
        break
      case 'recordcabinet':
        cabinetFace(p, 6)
        break
      case 'dresser':
        cabinetFace(p, 3)
        box(p, 'paper', 0, surface + 0.02, 0, p.w * 0.44, 0.012, p.d * 0.42)
        break
      case 'cabinet':
        // A shallow rust-marked identity plaque and stamped lock hardware,
        // visual only: opened drawers continue to come from ContainerHost.
        cabinetFace(p, 2)
        break
      case 'shelf':
      case 'bookshelf':
        // Additional family-numbered spines on one shelf tier, not floor clutter.
        for (let i = 0; i < 10; i++) {
          const z = -p.d * 0.37 + i * p.d * 0.076
          box(p, i % 4 === 0 ? 'leather' : 'paper',
            p.w * 0.03, p.h * 0.58, z, p.w * 0.42,
            p.h * 0.14 + (i % 3) * 0.012,
            Math.min(p.d * 0.046, 0.046))
          box(p, 'ink', p.w * 0.26, p.h * 0.61, z, 0.007, 0.022, 0.021)
        }
        break
      case 'chair':
        // Stitched, worn seat and foot caps, never new collision volumes.
        box(p, 'leather', 0, p.h * 0.50, 0, p.w * 0.74, 0.045, p.d * 0.74)
        box(p, 'leather', 0, p.h * 0.77, -p.d * 0.32,
          p.w * 0.75, p.h * 0.23, 0.04)
        break
      case 'bench':
      case 'pew':
        box(p, p.kind === 'pew' ? 'leather' : 'linen',
          0, p.h * 0.52, 0, p.w * 0.86, 0.046, p.d * 0.76)
        for (let i = 1; i < 4; i++) {
          box(p, 'ink', -p.w * 0.5 + i * p.w * 0.25,
            p.h * 0.54, 0, 0.008, 0.004, p.d * 0.7)
        }
        break
      case 'sofa':
        for (let i = 0; i < 3; i++) {
          const x = (i - 1) * p.w * 0.26
          box(p, 'leather', x, p.h * 0.56, 0, p.w * 0.24, 0.08, p.d * 0.70)
          box(p, 'leather', x, p.h * 0.83, -p.d * 0.34,
            p.w * 0.24, p.h * 0.22, 0.055)
        }
        break
      case 'wheelchair':
        for (const side of [-1, 1]) {
          const z = side * p.d * 0.40
          paint(p, 'torus', 'steel', 0, p.h * 0.38, z, 0.43, 0.43, 0.43, 0, 0, 0)
          disk(p, 'steel', 0, p.h * 0.38, z, 0.055, 0.037, Math.PI / 2)
          for (let i = 0; i < 8; i++) {
            const ang = i * Math.PI / 4
            box(p, 'steel', Math.cos(ang) * 0.085,
              p.h * 0.38 + Math.sin(ang) * 0.085, z,
              0.012, 0.012, 0.012)
          }
        }
        break
      case 'foldscreen':
        for (let i = 0; i < 3; i++) {
          const x = (i - 1) * p.w * 0.31
          box(p, 'linen', x, p.h * 0.51, 0, p.w * 0.295, p.h * 0.79, 0.018, i % 2 ? 0.10 : -0.10)
          box(p, 'steel', x, p.h * 0.96, 0, p.w * 0.295, 0.018, 0.025)
          box(p, 'steel', x, p.h * 0.11, 0, p.w * 0.295, 0.018, 0.025)
        }
        break
      case 'ivstand':
        box(p, 'steel', 0, p.h * 0.94, 0, 0.31, 0.025, 0.023)
        glass(p, p.w * 0.22, p.h * 0.76, 0, 1.3)
        box(p, 'rubber', p.w * 0.22, p.h * 0.60, 0,
          0.008, p.h * 0.22, 0.008)
        break
      case 'altar':
        for (const x of [-p.w * 0.35, p.w * 0.35]) {
          disk(p, 'brass', x, surface + 0.026, -p.d * 0.22, 0.09, 0.025)
          disk(p, 'linen', x, surface + 0.105, -p.d * 0.22, 0.035, 0.145)
          paint(p, 'sphere', 'paper', x, surface + 0.195, -p.d * 0.22, 0.033, 0.049, 0.033)
        }
        break
      default:
        break
    }
    if (seenRooms.has(p.room)) anchorCount++
  }

  const root = new THREE.Group()
  root.name = 'SktAgnes_VisualDetailV5'
  for (const [key, items] of matrices) {
    if (!items.length) continue
    const [geometry, material] = key.split('/') as [GeometryType, Finish]
    const instance = new THREE.InstancedMesh(geom[geometry], palette[material], items.length)
    items.forEach((m, n) => instance.setMatrixAt(n, m))
    instance.instanceMatrix.needsUpdate = true
    instance.frustumCulled = false // Batches contain instances on multiple floors.
    instance.castShadow = false
    instance.receiveShadow = true
    instance.name = 'VisualDetailV5_' + key
    root.add(instance)
  }
  const stats: VisualDetailV5Stats = {
    rooms: [...seenRooms],
    anchors: anchorCount,
    details: detailCount,
    batches: root.children.length,
  }
  root.userData.detailStats = stats
  scene.add(root)

  return () => {
    scene.remove(root)
    for (const g of Object.values(geom)) g.dispose()
    for (const m of Object.values(palette)) m.dispose()
  }
}
