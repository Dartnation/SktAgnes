import { describe, expect, it } from 'vitest'
import { lineOfSight, mustCrouch, rayAABB, resolveMovement, selectInteract, type AABB } from '../src/physics/Collision'
import { canHear, inVisionCone, noiseLoudness } from '../src/ai/senses'
import { doorCollider } from '../src/world/buildWorld'
import type { DoorInst } from '../src/world/buildWorld'

const wall: AABB = { minX: 2, maxX: 2.25, minY: 0, maxY: 3, minZ: -8, maxZ: 8 }
const beam: AABB = { minX: 4, maxX: 5, minY: 1.15, maxY: 2.6, minZ: -1, maxZ: 1, standOnly: true }

describe('collision', () => {
  it('stops at a wall instead of tunnelling through it', () => {
    const r = resolveMovement({ x: 1.2, y: 0, z: 0 }, { x: 2, z: 0 }, 0.3, 1.7, false, [wall])
    expect(r.x).toBeLessThanOrEqual(2 - 0.3 + 0.02)
    expect(r.hit).toBe(true)
  })

  it('slides along a wall when moving diagonally', () => {
    const r = resolveMovement({ x: 1.2, y: 0, z: 0 }, { x: 2, z: 1.4 }, 0.3, 1.7, false, [wall])
    expect(r.x).toBeLessThanOrEqual(2 - 0.3 + 0.02)
    expect(r.z).toBeGreaterThan(1)
  })

  it('lets a crouching body pass a low beam and blocks standing', () => {
    const standing = resolveMovement({ x: 3.2, y: 0, z: 0 }, { x: 1.2, z: 0 }, 0.3, 1.7, false, [beam])
    const crouch = resolveMovement({ x: 3.2, y: 0, z: 0 }, { x: 1.2, z: 0 }, 0.3, 1.05, true, [beam])
    expect(standing.x).toBeLessThan(4)
    expect(crouch.x).toBeGreaterThan(4)
    expect(mustCrouch(0, 4.5, 0, 1.7, [beam])).toBe(true)
    expect(mustCrouch(0, 4.5, 0, 1.05, [beam])).toBe(false)
  })

  it('blocks line of sight through a wall and keeps it inside a room', () => {
    const a = { x: 0, y: 1.5, z: 0 }
    const behind = { x: 4, y: 1.5, z: 0 }
    const beside = { x: 0, y: 1.5, z: 3 }
    expect(lineOfSight(a, behind, [wall])).toBe(false)
    expect(lineOfSight(a, beside, [wall])).toBe(true)
  })

  it('ray hits a box in front and misses one beside the aim', () => {
    const box: AABB = { minX: -0.2, maxX: 0.2, minY: 0, maxY: 1, minZ: 2, maxZ: 2.4 }
    const hit = rayAABB(0, 0.5, 0, 0, 0, 1, box, 5)
    expect(hit).not.toBeNull()
    const miss = rayAABB(0, 0.5, 0, 1, 0, 0, box, 5)
    expect(miss).toBeNull()
  })

  it('closed doors block and open doors do not', () => {
    const door: DoorInst = {
      id: 'd',
      kind: 'door',
      floor: 0,
      axis: 'z',
      coord: 5,
      spanMin: 1,
      spanMax: 2.2,
      center: 1.6,
      width: 1.2,
      locked: false,
      a: 'a',
      b: 'b',
    }
    expect(doorCollider(door, 0)).not.toBeNull()
    expect(doorCollider(door, 1)).toBeNull()
  })

  it('picks the interactable under the crosshair', () => {
    const chosen = selectInteract(
      { x: 0, y: 1.6, z: 0 },
      { x: 0, y: 0, z: 1 },
      [
        { id: 'side', kind: 'note', x: 1.2, y: 1, z: 1.2, radius: 0.4, prompt: 'side' },
        { id: 'front', kind: 'door', x: 0.1, y: 1.2, z: 1.6, radius: 0.5, prompt: 'front' },
      ],
    )
    expect(chosen?.id).toBe('front')
  })
})

describe('senses', () => {
  it('hears a sprint nearby and not a crouch far away', () => {
    const ear = { x: 0, y: 0, z: 0 }
    expect(canHear(ear, { x: 8, y: 0, z: 0 }, 'sprint', 0, false)).toBe(true)
    expect(canHear(ear, { x: 8, y: 0, z: 0 }, 'crouch', 0, false)).toBe(false)
    expect(canHear(ear, { x: 6, y: 0, z: 0 }, 'sprint', 2, true)).toBe(false)
    expect(noiseLoudness('sprint')).toBeGreaterThan(noiseLoudness('walk'))
  })

  it('respects the vision cone and walls', () => {
    const eye = { x: 0, y: 1.6, z: 0 }
    const fwd = { x: 0, z: 1 }
    const ahead = { x: 0.2, y: 1.5, z: 6 }
    const behind = { x: 0, y: 1.5, z: -4 }
    const pastWall = { x: 4, y: 1.5, z: 1 }
    expect(inVisionCone(eye, fwd, ahead, Math.cos((50 * Math.PI) / 180), 12, [])).toBe(true)
    expect(inVisionCone(eye, fwd, behind, Math.cos((50 * Math.PI) / 180), 12, [])).toBe(false)
    expect(inVisionCone(eye, { x: 1, z: 0.2 }, pastWall, Math.cos((55 * Math.PI) / 180), 12, [wall])).toBe(false)
  })
})
