import { describe, expect, it } from 'vitest'
import { fadeEdges, seamlessTail, stepMarks } from '../src/audio/steps'

function hit(data: Float32Array, sampleRate: number, at: number): void {
  const i0 = Math.floor(at * sampleRate)
  for (let k = 0; k < 80 && i0 + k < data.length; k++) {
    data[i0 + k] += Math.sin(k / 2) * Math.exp(-k / 18)
  }
}

describe('footstep slices', () => {
  it('finds separated footfalls and ignores the gap between them', () => {
    const sampleRate = 1000
    const data = new Float32Array(sampleRate * 3)
    hit(data, sampleRate, 0.1)
    hit(data, sampleRate, 0.9)
    hit(data, sampleRate, 1.7)
    const marks = stepMarks(data, sampleRate)
    expect(marks.length).toBeGreaterThanOrEqual(3)
    for (const mark of marks) {
      expect(mark.end).toBeGreaterThan(mark.start)
      expect(mark.end - mark.start).toBeLessThan(0.5)
    }
  })

  it('fades the cut so the edges are silent and the loop join meets', () => {
    const data = new Float32Array(1000)
    data.fill(0.4)
    data[0] = 0.2
    fadeEdges(data, 1000, 0.01)
    expect(Math.abs(data[0])).toBeLessThan(0.02)
    expect(Math.abs(data[data.length - 1])).toBeLessThan(0.02)
    expect(Math.abs(data[500] - 0.4)).toBeLessThan(0.001)
    const loop = new Float32Array(2000)
    loop.fill(0.3)
    loop[0] = 0.1
    loop[loop.length - 1] = 0.8
    seamlessTail(loop, 1000, 0.02)
    expect(loop[loop.length - 1]).toBeCloseTo(loop[0], 5)
    expect(loop[400]).toBeCloseTo(0.3, 5)
  })
})
