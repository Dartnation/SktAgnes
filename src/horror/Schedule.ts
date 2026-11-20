/** One planner for the big room beats. Time is play time, never the wall clock. */
export type BeatSize = 'major' | 'minor'

export interface PlannedBeat {
  id: string
  dueTime: number
  roomId: string
  epoch: number
  priority: number
  group: string
  size: BeatSize
}

export interface ScheduleState {
  epoch: number
  recoveryUntil: number
  pending: PlannedBeat[]
}

export interface ScheduleTick {
  dt: number
  time: number
  room: string
  /** Pause, an open text panel, an attack, or a scare already on screen. */
  blocked: boolean
  firedIds: string[]
}

export const MAJOR_RECOVERY = 90

export function createSchedule(): ScheduleState {
  return { epoch: 1, recoveryUntil: 0, pending: [] }
}

/** New game and loaded games drop anything queued in the previous scene. */
export function advanceEpoch(state: ScheduleState): ScheduleState {
  return { epoch: state.epoch + 1, recoveryUntil: 0, pending: [] }
}

export function markRecovery(state: ScheduleState, time: number, seconds: number): ScheduleState {
  return { ...state, recoveryUntil: Math.max(state.recoveryUntil, time + seconds) }
}

export function planBeat(state: ScheduleState, beat: Omit<PlannedBeat, 'epoch'>): ScheduleState {
  if (state.pending.some((item) => item.id === beat.id)) return state
  return { ...state, pending: [...state.pending, { ...beat, epoch: state.epoch }] }
}

/**
 * A long step means the game was paused. Beats that matured in that gap are
 * dropped, so resume does not play them all at once.
 */
export function stepSchedule(
  state: ScheduleState,
  tick: ScheduleTick,
): { state: ScheduleState; fired: PlannedBeat[] } {
  const dt = Math.max(0, tick.dt)
  let pending = state.pending.filter((beat) => beat.epoch === state.epoch && !tick.firedIds.includes(beat.id))
  if (dt > 0.5 || tick.blocked) {
    if (dt > 0.5) pending = pending.filter((beat) => beat.dueTime > tick.time)
    return { state: { ...state, pending }, fired: [] }
  }
  const ready = pending
    .filter((beat) => beat.dueTime <= tick.time && (beat.roomId === '' || beat.roomId === tick.room))
    .sort((a, b) => b.priority - a.priority || a.dueTime - b.dueTime)
  const chosen = ready.find((beat) => beat.size === 'minor' || tick.time >= state.recoveryUntil) ?? null
  const major = chosen?.size === 'major'
  if (!chosen) return { state: { ...state, pending }, fired: [] }
  return {
    state: {
      ...state,
      pending: pending.filter((beat) => beat.id !== chosen.id),
      recoveryUntil: major ? tick.time + MAJOR_RECOVERY : state.recoveryUntil,
    },
    fired: [chosen],
  }
}

export interface SequenceContext {
  time: number
  room: string
  readIds: string[]
  fired: string[]
}

const ARCHIVE_READS = new Set(['note_log', 'note_code', 'note_generator'])

/** The three room sequences. Each id is saved and will not be offered again. */
export function offerSequences(ctx: SequenceContext): Omit<PlannedBeat, 'epoch'>[] {
  const out: Omit<PlannedBeat, 'epoch'>[] = []
  const offer = (id: string, roomId: string) => {
    if (ctx.fired.includes(id)) return
    out.push({ id, dueTime: ctx.time, roomId, priority: 2, group: 'major', size: 'major' })
  }
  if (ctx.time >= 25 && ctx.room === 'reception') offer('reception_wake', 'reception')
  const readArchive = ctx.readIds.some((id) => ARCHIVE_READS.has(id) || id.startsWith('file_'))
  if (readArchive && ctx.room === 'arkiv') offer('arkiv_names', 'arkiv')
  if (ctx.room === 'operationsstue') offer('obduktion_witness', 'operationsstue')
  if (ctx.room === 'obduktion') offer('obduktion_witness', 'obduktion')
  return out
}
