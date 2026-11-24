import * as THREE from 'three'
import { containerTransform, type ContainerSpec, type ContainerState } from '../systems/ContainerLogic'
import { FLOOR_Y, ROOMS } from './data'
import type { PlacedContainer } from './containerCatalog'

/**
 * Pure presentation layer for the existing container interaction system.
 * Keep the same world anchors, mover object, open direction and loot name.
 * All gameplay, loot, animation timing and save rules stay in ContainerHost.
 */
export interface ContainerRig {
  id: string
  root: THREE.Group
  mover: THREE.Object3D
}

// The tray's front is at local z=.225; the casing ends at z=.025.
// Recess the tray into its casing before applying the existing slide distance.
const DRAWER_CLOSED_Z = -0.20

const timber = new THREE.MeshStandardMaterial({ color: '#554638', roughness: 0.92 })
const veneer = new THREE.MeshStandardMaterial({ color: '#6e5742', roughness: 0.81 })
const recess = new THREE.MeshStandardMaterial({ color: '#2d2926', roughness: 1 })
const blackIron = new THREE.MeshStandardMaterial({ color: '#343c3c', metalness: 0.7, roughness: 0.66 })
const brass = new THREE.MeshStandardMaterial({ color: '#947c56', metalness: 0.83, roughness: 0.47 })
const enamel = new THREE.MeshStandardMaterial({ color: '#626b65', metalness: 0.49, roughness: 0.67 })
const paper = new THREE.MeshStandardMaterial({ color: '#bcaf98', roughness: 0.97, side: THREE.DoubleSide })
const shadow = new THREE.MeshStandardMaterial({ color: '#201c1b', roughness: 1 })

function block(parent: THREE.Group, mat: THREE.Material,
  x: number, y: number, z: number, w: number, h: number, d: number): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
  mesh.position.set(x, y, z)
  mesh.castShadow = true
  mesh.receiveShadow = true
  parent.add(mesh)
  return mesh
}
function tube(parent: THREE.Group, mat: THREE.Material,
  x: number, y: number, z: number, r: number, h: number): void {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 12), mat)
  mesh.position.set(x, y, z)
  mesh.castShadow = true
  parent.add(mesh)
}

export function buildContainerRig(place: PlacedContainer): ContainerRig {
  const room = ROOMS.find((item) => item.id === place.spec.roomId)
  const floor = room ? FLOOR_Y[room.floor] : 0
  const root = new THREE.Group()
  root.name = 'VisualContainer_' + place.spec.id
  root.position.set(place.x, floor + place.y, place.z)
  root.rotation.y = place.yaw
  if (place.spec.kind === 'drawer') return drawer(place.spec, root)
  return cabinet(root, place.spec.id)
}

function drawer(spec: ContainerSpec, root: THREE.Group): ContainerRig {
  const metalCabinet = /file|med|labor|ark_|obd_|safe/.test(spec.id)
  const casing = metalCabinet ? enamel : timber
  const frontMaterial = metalCabinet ? enamel : veneer
  // A hollow frame with 5 separate panels: the box genuinely has space inside.
  block(root, casing, 0, -0.10, -0.20, 0.78, 0.026, 0.45)
  block(root, casing, 0, 0.10, -0.20, 0.78, 0.025, 0.45)
  block(root, casing, -0.378, 0, -0.20, 0.025, 0.20, 0.45)
  block(root, casing, 0.378, 0, -0.20, 0.025, 0.20, 0.45)
  block(root, recess, 0, 0, -0.425, 0.70, 0.19, 0.016)
  // Visible side rail hardware; motion is still governed by existing state.
  for (const side of [-1, 1]) {
    block(root, blackIron, side * 0.33, -0.060, -0.175, 0.023, 0.017, 0.29)
  }
  const mover = new THREE.Group()
  mover.name = 'drawer_mover'
  mover.position.z = DRAWER_CLOSED_Z
  // Wooden/metal tray with an exposed dark interior and real upright sides.
  block(mover, frontMaterial, 0, -0.055, 0.005, 0.66, 0.022, 0.34)
  block(mover, casing, -0.315, 0.0, 0.005, 0.020, 0.12, 0.33)
  block(mover, casing, 0.315, 0.0, 0.005, 0.020, 0.12, 0.33)
  block(mover, casing, 0, -0.001, -0.16, 0.65, 0.12, 0.018)
  // Routed front, bevel-like border and independent centre panel.
  block(mover, recess, 0, 0.0, 0.182, 0.72, 0.19, 0.030)
  block(mover, frontMaterial, 0, 0.0, 0.204, 0.675, 0.16, 0.022)
  block(mover, casing, 0, 0.0, 0.222, 0.63, 0.13, 0.006)
  // Brass drawer pull: mounting plates, curved arc of metal and tiny rivets.
  for (const side of [-1, 1]) {
    block(mover, brass, side * 0.09, 0.0, 0.237, 0.038, 0.048, 0.019)
    tube(mover, shadow, side * 0.09, 0.0, 0.248, 0.004, 0.013)
  }
  block(mover, brass, 0, 0.017, 0.265, 0.195, 0.017, 0.030)
  block(mover, brass, 0, -0.014, 0.259, 0.195, 0.010, 0.022)
  // Period archival catalogue holder.
  if (metalCabinet) {
    block(mover, brass, 0, 0.060, 0.244, 0.19, 0.042, 0.010)
    block(mover, paper, 0, 0.06, 0.251, 0.160, 0.026, 0.006)
  }
  if (spec.contents.length) {
    const loot = createLoot(spec.contents[0].itemId)
    loot.position.set(0, -0.012, 0)
    loot.name = 'loot'
    mover.add(loot)
  }
  root.add(mover)
  return { id: spec.id, root, mover }
}

function cabinet(root: THREE.Group, id: string): ContainerRig {
  // Open box, not a solid block behind a moving door.
  block(root, timber, -0.41, 0, -0.12, 0.042, 1.15, 0.43)
  block(root, timber, 0.41, 0, -0.12, 0.042, 1.15, 0.43)
  block(root, timber, 0, 0.555, -0.12, 0.84, 0.045, 0.43)
  block(root, timber, 0, -0.555, -0.12, 0.84, 0.045, 0.43)
  block(root, recess, 0, 0, -0.330, 0.76, 1.08, 0.024)
  for (const y of [-0.29, 0.24]) {
    block(root, veneer, 0, y, -0.13, 0.74, 0.023, 0.38)
    block(root, brass, 0, y + 0.012, 0.035, 0.72, 0.006, 0.009)
  }
  const hinge = new THREE.Group()
  hinge.position.set(-0.40, 0, 0.105)
  hinge.name = 'cabinet_hinge'
  block(hinge, veneer, 0.393, 0, 0.016, 0.76, 1.05, 0.038)
  block(hinge, timber, 0.393, 0, 0.043, 0.695, 0.98, 0.012)
  for (const y of [-0.36, 0.36]) {
    tube(hinge, brass, 0.011, y, 0.047, 0.024, 0.18)
    block(hinge, brass, 0.075, y, 0.069, 0.105, 0.033, 0.014)
  }
  block(hinge, brass, 0.69, 0, 0.088, 0.025, 0.14, 0.04)
  block(hinge, shadow, 0.69, 0, 0.111, 0.012, 0.093, 0.007)
  root.add(hinge)
  return { id, root, mover: hinge }
}

/** Visual loot only. ContainerHost still owns when the model is visible. */
function createLoot(itemId: string): THREE.Group {
  const g = new THREE.Group()
  if (itemId === 'battery') {
    const cell = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.18, 12), blackIron)
    cell.rotation.z = Math.PI / 2
    cell.position.y = 0.08
    g.add(cell)
    tube(g, brass, 0.105, 0.075, 0, 0.016, 0.014)
  } else if (itemId.startsWith('fuse_')) {
    block(g, enamel, 0, 0.085, 0, 0.17, 0.055, 0.045)
    block(g, brass, -0.10, 0.085, 0, 0.035, 0.045, 0.046)
    block(g, brass, 0.10, 0.085, 0, 0.035, 0.045, 0.046)
  } else {
    // A folded document, readable from an open drawer.
    block(g, paper, 0, 0.057, 0, 0.25, 0.009, 0.14)
    block(g, shadow, 0, 0.065, -0.021, 0.15, 0.002, 0.004)
    block(g, shadow, -0.021, 0.065, 0.009, 0.12, 0.002, 0.004)
    block(g, brass, 0.11, 0.067, 0.045, 0.022, 0.008, 0.018)
  }
  return g
}

export function applyContainerPose(spec: ContainerSpec, state: ContainerState, mover: THREE.Object3D): void {
  const pose = containerTransform(spec, state)
  if (spec.kind === 'drawer') {
    mover.position.z = DRAWER_CLOSED_Z + pose.slide
    mover.rotation.y = 0
  } else {
    mover.position.z = 0
    mover.rotation.y = -pose.swing
  }
}
