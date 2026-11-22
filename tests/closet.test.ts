import { describe, expect, it } from 'vitest'
import { canLeaveCloset, enterCloset, leaveCloset, passerAlong, stepCloset } from '../src/horror/ClosetSequence'

describe('closet hide', () => {
  it('locks the door for 20 seconds and screams at 3', () => {
    let state = enterCloset('hide_pat')
    const early = stepCloset(state, 2.9)
    expect(early.cues).toEqual([])
    expect(canLeaveCloset(early.state)).toBe(false)
    const scream = stepCloset(early.state, 0.2)
    expect(scream.cues).toContain('scream')
    state = scream.state
    expect(passerAlong(state.locked)).not.toBeNull()
    const mid = stepCloset(state, 12)
    expect(passerAlong(8)).toBeCloseTo(0.46, 1)
    const free = stepCloset(mid.state, 8)
    expect(free.cues).toContain('free')
    expect(canLeaveCloset(free.state)).toBe(true)
    expect(passerAlong(free.state.locked)).toBeNull()
  })

  it('does not advance while no time is given, then whispers for 10 seconds', () => {
    const held = stepCloset(enterCloset('hide_obs'), 0)
    expect(held.state.locked).toBe(0)
    const out = leaveCloset(held.state)
    const still = stepCloset(out, 9.5)
    expect(still.state.phase).toBe('whispers')
    const done = stepCloset(still.state, 0.6)
    expect(done.state.phase).toBe('idle')
    expect(done.cues).toContain('quiet')
  })
})
