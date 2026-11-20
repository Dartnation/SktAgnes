import { describe, expect, it } from 'vitest'
import { applyMouseLook, rightFromYaw } from '../src/core/math'
import { doorCollider, type DoorInst } from '../src/world/buildWorld'
import { batteryBand, boostBattery, stepBattery, BATTERY_DRAIN_PER_SEC, BATTERY_RECHARGE_PER_SEC } from '../src/systems/battery'
import { admitVoice, VOICE_LIMITS } from '../src/audio/voice'
import { sanitizeSettings } from '../src/systems/Settings'

const door: DoorInst = {
  id: 'd',
  kind: 'door',
  floor: 1,
  axis: 'z',
  coord: 4,
  spanMin: 1,
  spanMax: 2.1,
  center: 1.55,
  width: 1.1,
  locked: false,
  a: 'a',
  b: 'b',
}

describe('look and strafe', () => {
  it('maps D to the camera right and A to the camera left when facing +Z', () => {
    const right = rightFromYaw(0)
    expect(right.x).toBeLessThan(0)
    expect(Math.abs(right.z)).toBeLessThan(0.001)
    const left = { x: -right.x, z: -right.z }
    expect(left.x).toBeGreaterThan(0)
  })

  it('looks up when the mouse moves up, unless invert Y is on', () => {
    const up = applyMouseLook(0, 0, 0, -0.2, false)
    expect(up.pitch).toBeGreaterThan(0)
    const down = applyMouseLook(0, 0, 0, 0.2, false)
    expect(down.pitch).toBeLessThan(0)
    const inverted = applyMouseLook(0, 0, 0, -0.2, true)
    expect(inverted.pitch).toBeLessThan(0)
    expect(sanitizeSettings({}).invertY).toBe(false)
  })
})

describe('doors', () => {
  it('keeps a solid leaf while nearly shut and drops it once the leaf has swung clear', () => {
    expect(doorCollider(door, 0)).not.toBeNull()
    expect(doorCollider(door, 0.1)).not.toBeNull()
    expect(doorCollider(door, 0.5)).toBeNull()
    expect(doorCollider({ ...door, kind: 'arch' }, 0)).toBeNull()
  })
})

describe('battery', () => {
  it('drains in a few minutes, recharges much slower, and pickups add charge', () => {
    expect(BATTERY_DRAIN_PER_SEC).toBeGreaterThan(0.4)
    expect(BATTERY_DRAIN_PER_SEC).toBeLessThan(0.6)
    expect(BATTERY_RECHARGE_PER_SEC).toBeLessThan(BATTERY_DRAIN_PER_SEC * 0.25)
    const drained = stepBattery(100, true, 210)
    expect(drained.charge).toBe(0)
    expect(drained.on).toBe(false)
    expect(drained.died).toBe(true)
    const idle = stepBattery(10, false, 10)
    expect(idle.charge).toBeGreaterThan(10)
    expect(idle.charge).toBeLessThan(20)
    expect(boostBattery(70)).toBe(100)
    expect(batteryBand(8)).toBe('critical')
    expect(batteryBand(20)).toBe('low')
    expect(batteryBand(80)).toBe('ok')
  })
})

describe('audio voices', () => {
  it('refuses a second footstep inside the gap and a stacked scream', () => {
    expect(admitVoice(0, VOICE_LIMITS.step.cap, 1, VOICE_LIMITS.step.gap)).toBe(true)
    expect(admitVoice(1, VOICE_LIMITS.step.cap, 1, VOICE_LIMITS.step.gap)).toBe(false)
    expect(admitVoice(0, VOICE_LIMITS.step.cap, 0.05, VOICE_LIMITS.step.gap)).toBe(false)
    expect(admitVoice(0, VOICE_LIMITS.scream.cap, 2, VOICE_LIMITS.scream.gap)).toBe(false)
    expect(admitVoice(0, VOICE_LIMITS.scream.cap, 20, VOICE_LIMITS.scream.gap)).toBe(true)
  })
})
