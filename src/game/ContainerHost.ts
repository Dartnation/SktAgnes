import * as THREE from 'three'
import { lineOfSight, type AABB, type InteractCandidate } from '../physics/Collision'
import {
  freshContainerState,
  restoreContainers,
  serializeContainers,
  stepContainer,
  takeContainerLoot,
  toggleContainer,
  type ContainerAccess,
  type ContainerSave,
  type ContainerState,
} from '../systems/ContainerLogic'
import { applyContainerPose, buildContainerRig, type ContainerRig } from '../world/ContainerView'
import { CONTAINERS, containerSpecs, type PlacedContainer } from '../world/containerCatalog'
import { FLOOR_Y, ROOMS } from '../world/data'

export interface ContainerUse {
  effect: string
  itemId: string | null
  kind: 'drawer' | 'cabinet'
  x: number
  y: number
  z: number
}

/** Runtime adapter. ContainerLogic owns the rules. This only poses meshes and reports a result. */
export class ContainerHost {
  private states = new Map<string, ContainerState>()
  private rigs: ContainerRig[] = []

  constructor(private scene: THREE.Scene) {
    this.reset()
    for (const place of CONTAINERS) {
      const rig = buildContainerRig(place)
      rig.id = place.spec.id
      this.scene.add(rig.root)
      this.rigs.push(rig)
    }
  }

  reset(): void {
    this.states = restoreContainers(containerSpecs(), null)
  }

  load(raw: unknown): void {
    this.states = restoreContainers(containerSpecs(), raw)
    this.pose()
  }

  save(): ContainerSave {
    return serializeContainers(containerSpecs(), this.states)
  }

  step(dt: number, paused: boolean): void {
    for (const place of CONTAINERS) {
      const current = this.states.get(place.spec.id) ?? freshContainerState()
      this.states.set(place.spec.id, stepContainer(place.spec, current, dt, paused))
    }
    this.pose()
  }

  candidates(): InteractCandidate[] {
    return CONTAINERS.map((place) => {
      const state = this.states.get(place.spec.id) ?? freshContainerState()
      const at = frontOf(place)
      return {
        id: place.spec.id,
        kind: 'container',
        x: at.x,
        y: at.y,
        z: at.z,
        radius: place.spec.kind === 'drawer' ? 0.13 : 0.5,
        prompt: promptFor(place, state),
      }
    })
  }

  state(id: string): ContainerState | null {
    return this.states.get(id) ?? null
  }

  use(id: string, eye: { x: number; y: number; z: number }, hasItem: (itemId: string) => boolean, canCarry: (itemId: string) => boolean, blockers: AABB[]): ContainerUse {
    const place = CONTAINERS.find((item) => item.spec.id === id)
    if (!place) return { effect: 'unknown', itemId: null, kind: 'drawer', x: 0, y: 0, z: 0 }
    const at = frontOf(place)
    const located = { kind: place.spec.kind, x: at.x, y: at.y, z: at.z }
    const access: ContainerAccess = {
      inRange: true,
      lineOfSight: canReachContainer(eye, at, blockers),
      hasRequiredItem: !place.spec.requiresItem || hasItem(place.spec.requiresItem),
    }
    let state = this.states.get(id) ?? freshContainerState()
    const nextLoot = place.spec.contents.find((loot) => !state.takenIds.includes(loot.id))
    if (state.target === 'open' && state.progress > 0.999 && nextLoot) {
      const result = takeContainerLoot(place.spec, state, nextLoot.id, access, canCarry(nextLoot.itemId))
      this.states.set(id, result.state)
      return { effect: result.effect, itemId: result.itemId, ...located }
    }
    const toggled = toggleContainer(place.spec, state, access)
    this.states.set(id, toggled.state)
    return { effect: toggled.effect, itemId: null, ...located }
  }

  private pose(): void {
    for (const rig of this.rigs) {
      const place = CONTAINERS.find((item) => item.spec.id === rig.id)
      if (!place) continue
      const state = this.states.get(rig.id) ?? freshContainerState()
      applyContainerPose(place.spec, state, rig.mover)
      const left = place.spec.contents.some((loot) => !state.takenIds.includes(loot.id))
      rig.mover.traverse((obj) => {
        if (obj.name === 'loot') obj.visible = left && state.progress > 0.35
      })
    }
  }
}

/** A drawer built into a cabinet can sit inside that cabinet's box. Step the check toward the player. */
function canReachContainer(eye: { x: number; y: number; z: number }, at: { x: number; y: number; z: number }, blockers: AABB[]): boolean {
  if (lineOfSight(eye, at, blockers) || lineOfSight(eye, { x: at.x, y: at.y + 0.45, z: at.z }, blockers)) return true
  const dx = eye.x - at.x
  const dz = eye.z - at.z
  const len = Math.hypot(dx, dz) || 1
  const stepped = { x: at.x + (dx / len) * 0.35, y: at.y + 0.25, z: at.z + (dz / len) * 0.35 }
  return lineOfSight(eye, stepped, blockers)
}

function frontOf(place: PlacedContainer): { x: number; y: number; z: number } {
  const room = ROOMS.find((item) => item.id === place.spec.roomId)
  const face = 0.16
  return {
    x: place.x + Math.sin(place.yaw) * face,
    y: (room ? FLOOR_Y[room.floor] : 0) + place.y,
    z: place.z + Math.cos(place.yaw) * face,
  }
}

function promptFor(place: PlacedContainer, state: ContainerState): string {
  const door = place.spec.kind === 'cabinet'
  if (place.spec.requiresItem && state.target === 'closed') return door ? 'Låst skab' : 'Låst skuffe'
  if (state.target === 'open' && state.progress > 0.98) {
    const left = place.spec.contents.some((loot) => !state.takenIds.includes(loot.id))
    if (left) return 'Tag indholdet'
    return door ? 'Luk lågen' : 'Luk skuffen'
  }
  return door ? 'Skab' : 'Skuffe'
}
