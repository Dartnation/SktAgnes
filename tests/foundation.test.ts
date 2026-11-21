import { describe, expect, it } from 'vitest'
import { clampDt, stepTimer } from '../src/core/clock'
import { createBus } from '../src/core/events'
import { createRng } from '../src/core/rng'

describe('gameplay foundation', () => {
  it('emits each signal once and keeps listeners added mid-emit for the next signal', () => {
    const bus = createBus()
    const seen: string[] = []
    bus.on((event) => {
      seen.push(event.type)
      if (event.type === 'powerOn') bus.on(() => seen.push('late'))
    })
    bus.emit({ type: 'powerOn' })
    bus.emit({ type: 'playerRevealed' })
    expect(seen).toEqual(['powerOn', 'playerRevealed', 'late'])
    expect(bus.recent()).toHaveLength(2)
  })

  it('repeats the same numbers from the same seed', () => {
    const a = createRng(1907)
    const b = createRng(1907)
    const first = [a.next(), a.next(), a.next()]
    const second = [b.next(), b.next(), b.next()]
    expect(first).toEqual(second)
    b.restore(a.state())
    expect(b.next()).toBe(a.next())
    expect(createRng(1907).next()).not.toBe(createRng(1908).next())
  })

  it('clamps a hitch and freezes a timer while paused', () => {
    expect(clampDt(2)).toBe(0.05)
    expect(clampDt(-1)).toBe(0)
    expect(stepTimer(3, 1, true)).toBe(3)
    expect(stepTimer(3, 1, false)).toBe(2.95)
  })
})
