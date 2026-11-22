import * as THREE from 'three'
import { containerTransform, type ContainerSpec, type ContainerState } from '../systems/ContainerLogic'
import { FLOOR_Y, ROOMS } from './data'
import type { PlacedContainer } from './containerCatalog'

export interface ContainerRig {
  id: string
  root: THREE.Group
  mover: THREE.Object3D
}

const wood = new THREE.MeshStandardMaterial({ color: '#4a382c', roughness: 0.84 })
const face = new THREE.MeshStandardMaterial({ color: '#8d6b52', roughness: 0.68 })
const metal = new THREE.MeshStandardMaterial({ color: '#b7aa96', metalness: 0.55, roughness: 0.38 })
const paper = new THREE.MeshStandardMaterial({ color: '#d7c39a', roughness: 1 })
const cavity = new THREE.MeshStandardMaterial({ color: '#2a211b', roughness: 1 })

export function buildContainerRig(place: PlacedContainer): ContainerRig {
  const room = ROOMS.find((item) => item.id === place.spec.roomId)
  const floor = room ? FLOOR_Y[room.floor] : 0
  const root = new THREE.Group()
  root.position.set(place.x, floor + place.y, place.z)
  root.rotation.y = place.yaw
  if (place.spec.kind === 'drawer') return drawer(place.spec, root)
  return cabinet(root)
}

function drawer(spec: ContainerSpec, root: THREE.Group): ContainerRig {
  const shell = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.24, 0.46), wood)
  shell.position.z = -0.2
  const mover = new THREE.Group()
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.14, 0.36), face)
  const front = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.16, 0.02), face)
  front.position.z = 0.18
  const inside = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.02, 0.24), cavity)
  inside.position.set(0, 0.05, 0.02)
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.08, 0.3), wood)
  left.position.set(-0.3, 0.06, 0)
  const right = left.clone()
  right.position.x = 0.3
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.018, 0.02), metal)
  handle.position.set(0, 0, 0.198)
  mover.add(box, front, inside, left, right, handle)
  if (spec.contents.length) {
    const sheet = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.012, 0.16), paper)
    sheet.name = 'loot'
    sheet.position.y = 0.1
    mover.add(sheet)
  }
  root.add(shell, mover)
  return { id: spec.id, root, mover }
}

function cabinet(root: THREE.Group): ContainerRig {
  const shell = new THREE.Mesh(new THREE.BoxGeometry(0.86, 1.15, 0.4), wood)
  shell.position.z = -0.12
  const interior = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.95, 0.02), cavity)
  interior.position.z = 0.02
  const hinge = new THREE.Group()
  hinge.position.set(-0.4, 0, 0.1)
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.05, 0.035), face)
  door.position.x = 0.39
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.12, 0.035), metal)
  handle.position.set(0.66, 0, 0.03)
  hinge.add(door, handle)
  root.add(shell, interior, hinge)
  return { id: '', root, mover: hinge }
}

export function applyContainerPose(spec: ContainerSpec, state: ContainerState, mover: THREE.Object3D): void {
  const pose = containerTransform(spec, state)
  if (spec.kind === 'drawer') {
    mover.position.z = pose.slide
    mover.rotation.y = 0
  } else {
    mover.position.z = 0
    mover.rotation.y = -pose.swing
  }
}
