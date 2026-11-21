import { describe, expect, it } from 'vitest'
import { emptyPerception, investigateGoal, rememberNoise } from '../src/ai/perceptionMemory'

describe('monsterets hørememory', () => {
  it('husker en skuffelyd som et sted, der skal undersøges', () => {
    const memory = rememberNoise(emptyPerception(), { pos: { x: 4, y: 1, z: 8.5 }, loudness: 0.88 }, 0.016)
    expect(investigateGoal(memory)).toEqual({ x: 4, y: 1, z: 8.5 })
  })

  it('ignorerer en stille lyd og glemmer en gammel', () => {
    const quiet = rememberNoise(emptyPerception(), { pos: { x: 1, y: 0, z: 1 }, loudness: 0.14 }, 0.016)
    expect(investigateGoal(quiet)).toBeNull()
    let memory = rememberNoise(emptyPerception(), { pos: { x: 4, y: 1, z: 8.5 }, loudness: 0.88 }, 0.016)
    for (let i = 0; i < 170; i++) memory = rememberNoise(memory, null, 0.05)
    expect(investigateGoal(memory)).toBeNull()
  })

  it('fryser mens spillet er på pause', () => {
    let memory = rememberNoise(emptyPerception(), { pos: { x: 2, y: 0, z: 3 }, loudness: 0.7 }, 0.016)
    memory = rememberNoise(memory, null, 5, true)
    expect(memory.lastHeard?.age).toBe(0)
    expect(investigateGoal(memory)).toEqual({ x: 2, y: 0, z: 3 })
  })
})
