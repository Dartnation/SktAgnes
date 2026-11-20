import { describe, expect, it } from 'vitest'
import {
  clampVolume, cueIsFresh, musicBedGain, normalisedGain,
  REFERENCE_MASTER, REFERENCE_MUSIC, REFERENCE_SFX,
} from '../src/audio/mix'

describe('audio mixer regression safety', () => {
  it('keeps silence at zero and clamps sliders', () => {
    expect(clampVolume(0)).toBe(0)
    expect(clampVolume(1.5)).toBe(1)
    expect(clampVolume(-1)).toBe(0)
    expect(clampVolume(Number.NaN)).toBe(0)
  })

  it('uses fixed reference volumes, never cancels a lowered slider', () => {
    const gain = normalisedGain(0.4, 0.25)
    const base = 0.4 * gain * REFERENCE_MASTER
    expect(base).toBeGreaterThan(0.15)
    expect(base * 0).toBe(0)
    expect(base * 0.3).toBeLessThan(base * REFERENCE_SFX)
    expect(base * 0.6).toBeGreaterThan(base * 0.3)
  })

  it('scales ambience with music volume independently of master', () => {
    const gain = musicBedGain(0.12, 0.4)
    expect(gain).toBeGreaterThan(0)
    expect(gain * 0 / REFERENCE_MUSIC).toBe(0)
    expect(gain * 0.25 / REFERENCE_MUSIC).toBeLessThan(gain)
  })

  it('does not replay footsteps or flashlight clicks long after their trigger', () => {
    expect(cueIsFresh('stepMonster', 201)).toBe(false)
    expect(cueIsFresh('step', 100)).toBe(true)
    expect(cueIsFresh('flash', 651)).toBe(false)
    expect(cueIsFresh('scream', 2000)).toBe(true)
    expect(cueIsFresh('scream', 2400)).toBe(false)
  })
})
