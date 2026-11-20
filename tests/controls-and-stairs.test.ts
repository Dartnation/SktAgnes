import { describe, expect, it } from 'vitest'
import { CROUCH_H, EYE_CROUCH, EYE_STAND, STAND_H, smoothEyeHeight, simulatePlayer } from '../src/player/PlayerController'
import { buildWorld, sampleFloorY, stairHeight } from '../src/world/buildWorld'
import { STAIRS } from '../src/world/data'

describe('stairwell landing', () => {
  it('has clearance at the Personnel Room doorway and between stair flights', () => {
    const [lower, upper] = STAIRS
    expect(lower).toBeDefined()
    expect(upper).toBeDefined()
    expect(lower.fromFloor).toBe(0)
    expect(upper.fromFloor).toBe(1)
    expect(lower.x).toBeGreaterThan(50)
    expect(upper.x).toBeGreaterThan(50)
    const landing = upper.z - (lower.z + lower.d)
    expect(landing).toBeGreaterThanOrEqual(1.2)
    expect(lower.z + lower.d).toBeLessThan(6)
    expect(upper.z).toBeGreaterThan(6)
  })

  it('meets landing height exactly at both ends', () => {
    const [lower, upper] = STAIRS
    const midX = lower.x + lower.w / 2
    expect(stairHeight(lower, midX, lower.z)).toBeCloseTo(0)
    expect(stairHeight(lower, midX, lower.z + lower.d)).toBeCloseTo(4)
    expect(stairHeight(upper, midX, upper.z)).toBeCloseTo(4)
    expect(stairHeight(upper, midX, upper.z + upper.d)).toBeCloseTo(8)
    expect(sampleFloorY(buildWorld(), midX, 6, 4)).toBe(4)
  })
})

describe('smooth crouching', () => {
  it('eases smoothly down and up without jumping or overshooting', () => {
    let eye = EYE_STAND
    const down = smoothEyeHeight(eye, EYE_CROUCH, 1 / 60)
    expect(down).toBeLessThan(EYE_STAND)
    expect(down).toBeGreaterThan(EYE_CROUCH)
    eye = down
    for (let n = 0; n < 45; n++) eye = smoothEyeHeight(eye, EYE_CROUCH, 1 / 60)
    expect(eye).toBeCloseTo(EYE_CROUCH, 2)
    const up = smoothEyeHeight(eye, EYE_STAND, 1 / 60)
    expect(up).toBeGreaterThan(eye)
    expect(up).toBeLessThan(EYE_STAND)
  })

  it('keeps crouch collider lower than standing collider', () => {
    expect(CROUCH_H).toBeLessThan(STAND_H)
    const player = {
      x: 5, y: 0, z: 5, yaw: 0, pitch: 0, vy: 0, vx: 0, vz: 0,
      stamina: 100, health: 100, crouching: false, grounded: true,
      justLanded: false, battery: 100, flashlightOn: false,
    }
    const wish = { forward: 0, strafe: 0, sprint: false, crouch: true, jump: false, dt: 1 / 60 }
    const sim = simulatePlayer(player, wish, [], () => 0)
    expect(sim.crouching).toBe(true)
    expect(sim.vx).toBe(0)
    expect(sim.vz).toBe(0)
  })
})
