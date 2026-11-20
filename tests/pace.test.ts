import { describe, expect, it } from 'vitest'
import { SPRINT_SPEED, simulatePlayer, type SimPlayer } from '../src/player/PlayerController'
import { defaultSettings } from '../src/systems/Settings'
import { introFrame, INTRO_BEATS, shouldPlayIntro } from '../src/ui/intro'
import { fixtureFlicker, visibleLightCount } from '../src/world/flicker'

function body(stamina: number): SimPlayer {
  return {
    x: 6, y: 0, z: 6, yaw: 0, pitch: 0, vy: 0, vx: 0, vz: 0,
    stamina, health: 100, crouching: false, grounded: true,
    justLanded: false, battery: 100, flashlightOn: false,
  }
}

describe('sprint', () => {
  it('lasts between 12 and 15 seconds and still allows a walk afterwards', () => {
    let player = body(100)
    let t = 0
    while (player.stamina > 5 && t < 20) {
      player = simulatePlayer(player, { forward: 1, strafe: 0, sprint: true, crouch: false, jump: false, dt: 1 / 60 }, [], () => 0)
      t += 1 / 60
    }
    expect(t).toBeGreaterThan(12)
    expect(t).toBeLessThan(15)
    let walked = player
    for (let n = 0; n < 40; n++) {
      walked = simulatePlayer(walked, { forward: 1, strafe: 0, sprint: true, crouch: false, jump: false, dt: 1 / 60 }, [], () => 0)
    }
    expect(Math.hypot(walked.vx, walked.vz)).toBeLessThan(SPRINT_SPEED - 1)
    expect(Math.hypot(walked.vx, walked.vz)).toBeGreaterThan(1)
    const rested = simulatePlayer({ ...walked, vx: 0, vz: 0 }, { forward: 0, strafe: 0, sprint: false, crouch: false, jump: false, dt: 1 }, [], () => 0)
    expect(rested.stamina).toBeGreaterThan(walked.stamina)
  })
})

describe('intro', () => {
  it('tells the story in order and does not replay on load', () => {
    expect(shouldPlayIntro('new')).toBe(true)
    expect(shouldPlayIntro('load')).toBe(false)
    expect(introFrame(0).beat).toBeNull()
    expect(introFrame(1).beat?.title).toContain('1987')
    expect(introFrame(8).beat?.body).toContain('Emil Kragh')
    expect(introFrame(14).beat?.body).toContain('Skt. Agnes')
    expect(introFrame(20).beat?.title).toBe('NYT MÅL')
    expect(introFrame(30).done).toBe(true)
    expect(INTRO_BEATS.some((beat) => /vogter|slutning|tunnel/i.test(beat.body))).toBe(false)
  })
})

describe('lamps', () => {
  it('flickers each fixture on its own and stays calm when reduced', () => {
    let differed = false
    let dipped = false
    for (let t = 0; t < 40; t += 0.2) {
      const a = fixtureFlicker(t, 1.2, false)
      const b = fixtureFlicker(t, 4.8, false)
      if (Math.abs(a - b) > 0.2) differed = true
      if (a < 0.25 || b < 0.25) dipped = true
      expect(fixtureFlicker(t, 1.2, true)).toBeGreaterThan(0.8)
    }
    expect(differed).toBe(true)
    expect(dipped).toBe(true)
    expect(visibleLightCount('high')).toBeLessThanOrEqual(8)
    expect(visibleLightCount('low')).toBe(4)
  })

  it('starts the mouse a little slower', () => {
    expect(defaultSettings().mouseSensitivity).toBeLessThan(0.0011)
    expect(defaultSettings().reduceFlicker).toBe(false)
  })
})
