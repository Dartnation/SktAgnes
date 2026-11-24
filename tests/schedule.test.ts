import { describe, expect, it } from 'vitest'
import { createDirector, stepDirector } from '../src/ai/HorrorDirector'
import {
  advanceEpoch,
  createSchedule,
  MAJOR_RECOVERY,
  offerSequences,
  planBeat,
  stepSchedule,
  type PlannedBeat,
} from '../src/horror/Schedule'
import { migrateSnapshot } from '../src/systems/SaveSystem'

const beat = (id: string, over: Partial<Omit<PlannedBeat, 'epoch' | 'id'>> = {}): Omit<PlannedBeat, 'epoch'> => ({
  id,
  dueTime: 10,
  roomId: 'reception',
  priority: 1,
  group: 'major',
  size: 'major',
  ...over,
})

describe('horror schedule', () => {
  it('plays one major beat and holds the next through recovery', () => {
    let state = planBeat(createSchedule(), beat('a', { priority: 2 }))
    state = planBeat(state, beat('b'))
    const first = stepSchedule(state, { dt: 0.05, time: 10, room: 'reception', blocked: false, firedIds: [] })
    expect(first.fired.map((item) => item.id)).toEqual(['a'])
    expect(first.state.recoveryUntil).toBe(10 + MAJOR_RECOVERY)
    const held = stepSchedule(first.state, { dt: 0.05, time: 40, room: 'reception', blocked: false, firedIds: ['a'] })
    expect(held.fired).toEqual([])
    const later = stepSchedule(held.state, { dt: 0.05, time: 10 + MAJOR_RECOVERY, room: 'reception', blocked: false, firedIds: ['a'] })
    expect(later.fired.map((item) => item.id)).toEqual(['b'])
  })

  it('drops beats that matured during a pause instead of playing them together', () => {
    const state = planBeat(createSchedule(), beat('late', { dueTime: 12 }))
    const resumed = stepSchedule(state, { dt: 8, time: 20, room: 'reception', blocked: false, firedIds: [] })
    expect(resumed.fired).toEqual([])
    expect(resumed.state.pending).toEqual([])
  })

  it('rejects a beat from an older scene', () => {
    const queued = planBeat(createSchedule(), beat('old'))
    const next = advanceEpoch(queued)
    const stale = { ...next, pending: queued.pending }
    const step = stepSchedule(stale, { dt: 0.05, time: 30, room: 'reception', blocked: false, firedIds: [] })
    expect(step.fired).toEqual([])
    expect(step.state.pending).toEqual([])
  })

  it('waits for the right room and skips a beat that already played', () => {
    const state = planBeat(createSchedule(), beat('door', { roomId: 'arkiv' }))
    const away = stepSchedule(state, { dt: 0.05, time: 12, room: 'reception', blocked: false, firedIds: [] })
    expect(away.fired).toEqual([])
    expect(away.state.pending).toHaveLength(1)
    const done = stepSchedule(state, { dt: 0.05, time: 12, room: 'arkiv', blocked: false, firedIds: ['door'] })
    expect(done.fired).toEqual([])
  })

  it('holds the queue while a text panel or attack is active', () => {
    const state = planBeat(createSchedule(), beat('wait'))
    const held = stepSchedule(state, { dt: 0.05, time: 12, room: 'reception', blocked: true, firedIds: [] })
    expect(held.fired).toEqual([])
    expect(held.state.pending).toHaveLength(1)
  })

  it('offers each room sequence once, and the archive only after a document', () => {
    expect(offerSequences({ time: 10, room: 'reception', readIds: [], fired: [] })).toEqual([])
    expect(offerSequences({ time: 25, room: 'reception', readIds: [], fired: [] })[0]?.id).toBe('reception_wake')
    expect(offerSequences({ time: 40, room: 'arkiv', readIds: [], fired: [] })).toEqual([])
    expect(offerSequences({ time: 40, room: 'arkiv', readIds: ['note_log'], fired: [] })[0]?.id).toBe('arkiv_names')
    expect(offerSequences({ time: 40, room: 'arkiv', readIds: ['note_log'], fired: ['arkiv_names'] })).toEqual([])
    expect(offerSequences({ time: 5, room: 'operationsstue', readIds: [], fired: [] })).toEqual([])
    expect(offerSequences({ time: 5, room: 'obduktion', readIds: [], fired: [] })[0]?.id).toBe('obduktion_witness')
  })

  it('does not add a director scare while a beat is already playing', () => {
    const state = createDirector()
    const step = stepDirector(
      { ...state, tension: 100, stress: 100, sinceScare: 100, suppress: 0 },
      {
        dt: 0.5,
        health: 20,
        monsterDist: 3,
        inDark: true,
        sprinting: false,
        hiding: false,
        tookDamage: false,
        story: 1,
        rng: () => 0,
        blocked: true,
      },
    )
    expect(step.event).toBeNull()
  })

  it('keeps saved beat ids and fills them in for an old save', () => {
    const kept = migrateSnapshot({
      version: 1,
      player: { x: 6, y: 0, z: 6 },
      inventory: [],
      events: { jumps: ['stue102'], shadowAt: 4, slagter: 4, slagterT: 0, beats: ['reception_wake'] },
    })
    expect(kept?.events.beats).toEqual(['reception_wake'])
    const legacy = migrateSnapshot({
      version: 1,
      player: { x: 6, y: 0, z: 6 },
      inventory: [],
      events: { jumps: [], shadowAt: -100, slagter: 0, slagterT: 0 },
    })
    expect(legacy?.events.beats).toEqual([])
  })
})
