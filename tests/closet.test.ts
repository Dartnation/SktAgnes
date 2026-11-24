import { describe, expect, it } from 'vitest'
import { canLeaveCloset, CLOSET_FACE, enterCloset, leaveCloset, passerPose, stepCloset } from '../src/horror/ClosetSequence'
import { HALL_KNOCK_DELAY, HALL_QUESTIONS, hallKnockLevel } from '../src/systems/hallAsk'

describe('closet hide', () => {
  it('smiles, walks off, waits, then lunges before the door opens', () => {
    const early = stepCloset(enterCloset('hide_pat'), 2.9)
    expect(early.cues).toEqual([])
    expect(canLeaveCloset(early.state)).toBe(false)
    const scream = stepCloset(early.state, 0.2)
    expect(scream.cues).toContain('scream')
    const look = stepCloset(scream.state, 5.5)
    const pose = passerPose(look.state.locked)
    expect(pose).not.toBeNull()
    expect(pose!.face).toBe(1)
    expect(pose!.smile).toBeGreaterThan(0.6)
    expect(pose!.lunge).toBe(0)
    expect(canLeaveCloset(look.state)).toBe(false)
    const gone = stepCloset(look.state, 5)
    const waiting = passerPose(gone.state.locked)
    expect(waiting?.hidden).toBe(true)
    expect(canLeaveCloset(gone.state)).toBe(false)
    const face = stepCloset(gone.state, 1.4)
    expect(face.cues).toContain('face')
    expect(face.state.locked).toBeGreaterThanOrEqual(CLOSET_FACE)
    expect(passerPose(face.state.locked)?.lunge).toBe(1)
    expect(canLeaveCloset(face.state)).toBe(false)
    const free = stepCloset(face.state, 2.2)
    expect(free.cues).toContain('free')
    expect(canLeaveCloset(free.state)).toBe(true)
    expect(passerPose(free.state.locked)).toBeNull()
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

describe('reception door', () => {
  it('knocks harder the longer the question stays open', () => {
    expect(hallKnockLevel(2).hard).toBe(false)
    expect(hallKnockLevel(2).gap).toBeGreaterThan(hallKnockLevel(30).gap)
    expect(hallKnockLevel(30).volume).toBeGreaterThan(hallKnockLevel(2).volume)
    expect(hallKnockLevel(2).rate).toBe(1)
    expect(hallKnockLevel(30).rate).toBe(1)
    expect(hallKnockLevel(9).pause).toBe(false)
    expect(hallKnockLevel(2).gap).toBeGreaterThan(3)
    expect(hallKnockLevel(15).pause).toBe(true)
    expect(hallKnockLevel(2).pause).toBe(false)
    expect(hallKnockLevel(30).hard).toBe(true)
  })

  it('asks three questions from the letter, and waits ten seconds before knocking', () => {
    expect(HALL_KNOCK_DELAY).toBe(10)
    expect(HALL_QUESTIONS).toHaveLength(3)
    const answers = new Set(HALL_QUESTIONS.map((question) => question.answer))
    expect(answers.size).toBe(3)
    for (const question of HALL_QUESTIONS) {
      expect(question.choices.map((choice) => choice.id)).toContain(question.answer)
    }
  })
})
