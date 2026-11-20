import { describe, expect, it } from 'vitest'
import { beamEffect, clipForState } from '../src/ai/MonsterAnim'
import { chooseSearchPoint, createMonsterBB, stepMonster, type SenseInput } from '../src/ai/MonsterBrain'
import { approximateHearing } from '../src/ai/senses'

function rngOf(value: number): () => number {
  return () => value
}

function sense(over: Partial<SenseInput> = {}): SenseInput {
  return {
    dt: 0.5,
    monsterPos: { x: 0, y: 0, z: 0 },
    playerPos: { x: 0, y: 0, z: 5 },
    canSee: false,
    hear: null,
    flashlightHit: false,
    distance: 5,
    atGoal: false,
    hiding: false,
    hideSpot: null,
    holdBreath: false,
    allowChase: true,
    aggression: 0.4,
    rng: rngOf(0.99),
    waypoints: [
      { x: 0, y: 0, z: 0 },
      { x: 4, y: 0, z: 0 },
    ],
    knowsHide: false,
    searchSpots: [],
    checkedIds: new Set<string>(),
    ...over,
  }
}

describe('monster state machine', () => {
  it('leaves idle for patrol', () => {
    const bb = createMonsterBB({ state: 'Idle', stateTime: 0, speedMul: 1 })
    const r = stepMonster(bb, sense({ dt: 4, rng: rngOf(0) }))
    expect(r.bb.state).toBe('Patrol')
  })

  it('investigates a loud sound and does not chase from it when far', () => {
    const bb = createMonsterBB({ state: 'Patrol', goal: { x: 4, y: 0, z: 0 } })
    const r = stepMonster(
      bb,
      sense({
        hear: { pos: { x: 2, y: 0, z: 2 }, loudness: 0.6 },
        distance: 9,
        rng: rngOf(0.99),
      }),
    )
    expect(r.bb.state).toBe('Investigate')
    expect(r.bb.goal?.x).toBeCloseTo(2)
  })

  it('hesitates in suspicious before chasing a distant first sight', () => {
    const bb = createMonsterBB({ state: 'Patrol' })
    const first = stepMonster(bb, sense({ canSee: true, distance: 9, playerPos: { x: 0, y: 0, z: 9 }, rng: rngOf(0.2) }))
    expect(first.bb.state).toBe('Suspicious')
    const later = stepMonster(first.bb, sense({ dt: 2, canSee: true, distance: 8, playerPos: { x: 0, y: 0, z: 8 }, rng: rngOf(0.2) }))
    expect(later.bb.state).toBe('Chase')
    expect(later.speed).toBeGreaterThan(first.speed)
  })

  it('does not chase when the director forbids it', () => {
    const bb = createMonsterBB({ state: 'Patrol' })
    const r = stepMonster(bb, sense({ dt: 3, canSee: true, allowChase: false, distance: 4, rng: rngOf(0) }))
    expect(r.bb.state).toBe('Suspicious')
  })

  it('attacks at close range and then returns to chase', () => {
    const bb = createMonsterBB({ state: 'Chase', goal: { x: 0, y: 0, z: 1 } })
    const hit = stepMonster(bb, sense({ canSee: true, distance: 1, playerPos: { x: 0, y: 0, z: 1 }, rng: rngOf(0.5) }))
    expect(hit.bb.state).toBe('Attack')
    expect(hit.attackPulse).toBe(true)
    const after = stepMonster(hit.bb, sense({ dt: 1, canSee: true, distance: 1.1, playerPos: { x: 0, y: 0, z: 1.1 }, rng: rngOf(0.5) }))
    expect(after.bb.state === 'Chase' || after.bb.state === 'Attack').toBe(true)
  })

  it('loses the player and searches the last place', () => {
    const bb = createMonsterBB({ state: 'Chase', lastSeen: { x: 3, y: 0, z: 3 }, unseenTime: 0 })
    const lost = stepMonster(bb, sense({ dt: 0.8, canSee: false, distance: 8, rng: rngOf(0.9) }))
    expect(lost.bb.state).toBe('LostPlayer')
    const searched = stepMonster(lost.bb, sense({ dt: 0.2, atGoal: true, canSee: false, rng: rngOf(0.9) }))
    expect(searched.bb.state).toBe('Search')
  })

  it('returns to patrol after the search timer', () => {
    const bb = createMonsterBB({ state: 'Search', searchLeft: 0.2, goal: { x: 1, y: 0, z: 1 } })
    const r = stepMonster(bb, sense({ dt: 0.4, atGoal: false, rng: rngOf(0.5) }))
    expect(r.bb.state).toBe('ReturnToPatrol')
    const back = stepMonster(r.bb, sense({ dt: 0.2, atGoal: true, rng: rngOf(0.9) }))
    expect(back.bb.state).toBe('Patrol')
  })

  it('reacts to a flashlight beam without a clear view', () => {
    const bb = createMonsterBB({ state: 'Patrol' })
    const r = stepMonster(bb, sense({ flashlightHit: true, canSee: false, rng: rngOf(0.4) }))
    expect(r.bb.state).toBe('Suspicious')
  })

  it('can find a hiding player and is less likely to while they hold their breath', () => {
    const spot = { x: 0.4, y: 0, z: 0.2 }
    const bb = createMonsterBB({ state: 'Search', suspicion: 0.9, searchLeft: 5 })
    const found = stepMonster(
      bb,
      sense({
        dt: 1,
        hiding: true,
        hideSpot: spot,
        monsterPos: { x: 0, y: 0, z: 0 },
        holdBreath: false,
        knowsHide: true,
        rng: rngOf(0),
      }),
    )
    expect(found.foundHiding).toBe(true)
    const held = stepMonster(
      createMonsterBB({ state: 'Search', suspicion: 0, searchLeft: 5 }),
      sense({
        dt: 0.2,
        hiding: true,
        hideSpot: spot,
        holdBreath: true,
        rng: () => 0.2,
      }),
    )
    expect(held.foundHiding).toBe(false)
    const unknown = stepMonster(
      createMonsterBB({ state: 'Search', suspicion: 0.9, searchLeft: 5 }),
      sense({ dt: 1, hiding: true, hideSpot: spot, knowsHide: false, rng: rngOf(0) }),
    )
    expect(unknown.foundHiding).toBe(false)
  })

  it('keeps the last seen place after the player leaves the cone', () => {
    const bb = createMonsterBB({
      state: 'Chase',
      lastSeen: { x: 1, y: 0, z: 1 },
      goal: { x: 1, y: 0, z: 1 },
      unseenTime: 0.2,
    })
    const still = stepMonster(bb, sense({
      dt: 0.2,
      canSee: false,
      playerPos: { x: 9, y: 0, z: 9 },
      distance: 12,
    }))
    expect(still.bb.state).toBe('Chase')
    expect(still.bb.goal?.x).toBeCloseTo(1)
    expect(still.bb.goal?.z).toBeCloseTo(1)
  })

  it('prefers an unchecked hiding spot while searching', () => {
    const pick = chooseSearchPoint(
      { x: 0, y: 0, z: 0 },
      [
        { id: 'a', pos: { x: 3, y: 0, z: 0 } },
        { id: 'b', pos: { x: 10, y: 0, z: 0 } },
      ],
      new Set(['b']),
      rngOf(0),
    )
    expect(pick.id).toBe('a')
  })

  it('hears a place near the noise, not the exact source', () => {
    const heard = approximateHearing({ x: 0, y: 0, z: 0 }, { x: 8, y: 0, z: 0 }, 0.4, () => 0)
    expect(Math.hypot(heard.x, heard.z)).toBeGreaterThan(1)
    expect(heard.y).toBe(0)
  })

  it('blinds on a short beam and only leaves after the beam is held', () => {
    expect(beamEffect(0.4, 0)).toBe('blind')
    expect(beamEffect(1.25, 0)).toBe('banish')
    expect(beamEffect(2, 4)).toBe('none')
  })

  it('picks walk, run, search and attack clips from the brain state', () => {
    expect(clipForState('Patrol', 1.4).clip).toBe('Walk')
    expect(clipForState('Chase', 3.5).clip).toBe('Run')
    expect(clipForState('Search', 1).clip).toBe('Search')
    expect(clipForState('Attack', 0.8).clip).toBe('Attack')
    expect(clipForState('Idle', 0).clip).toBe('Idle')
  })
})
