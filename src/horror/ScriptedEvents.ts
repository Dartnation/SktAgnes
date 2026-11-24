/** Scripted scares. Independent of Vogteren's patrol, and stored in the save. */
export interface ScriptState {
  jumps: string[]
  shadowAt: number
  /** 0 idle, 1 silence, 2 figure present, 3 figure gone, 4 finished */
  slagter: number
  slagterT: number
  /** Unique ids of director beats that have already played. */
  beats: string[]
  /** The door figure in the patient hall has finished. */
  hallDoor: boolean
  /** The closet figure has screamed in the player's face. */
  hallCloset: boolean
  /** Seconds left before the hall goes dark. Negative until both shocks are done. */
  hallWait: number
  /** Seconds of darkness left in the patient hall. */
  hallDark: number
  /** The hall blackout has already happened. */
  hallPlayed: boolean
}

export interface ScriptInput {
  dt: number
  time: number
  room: string
  prevRoom: string
  flashlight: boolean
  prevFlash: boolean
  lookedAway: boolean
  atDoor: boolean
  /** The timed blackout has already moved the player into the butcher room. */
  powerCut?: boolean
  /** The player is looking at the butcher's side of the room. */
  lookingAtFigure?: boolean
  /** The flashlight has stayed on the butcher long enough to count. */
  beam?: boolean
}

export function emptyScript(): ScriptState {
  return { jumps: [], shadowAt: -100, slagter: 0, slagterT: 0, beats: [], hallDoor: false, hallCloset: false, hallWait: -1, hallDark: 0, hallPlayed: false }
}

export const HALL_WAIT = 10
export const HALL_DARK = 4

/** Full darkness only in the patient hall, ten seconds after both shocks, then the lights return. */
export function stepHallDark(prev: ScriptState, dt: number, room: string): { state: ScriptState; cue: '' | 'out' | 'back' } {
  const state: ScriptState = { ...prev, jumps: prev.jumps, beats: prev.beats }
  let cue: '' | 'out' | 'back' = ''
  const step = Math.max(0, dt)
  if (!state.hallPlayed && state.hallDoor && state.hallCloset && state.hallWait < 0 && state.hallDark <= 0) {
    state.hallWait = HALL_WAIT
  }
  if (state.hallWait >= 0 && room === 'patientgang') {
    state.hallWait -= step
    if (state.hallWait <= 0) {
      state.hallWait = -1
      state.hallDark = HALL_DARK
      cue = 'out'
    }
  }
  if (state.hallDark > 0) {
    state.hallDark = Math.max(0, state.hallDark - step)
    if (state.hallDark === 0) {
      state.hallPlayed = true
      cue = 'back'
    }
  }
  return { state, cue }
}

const PASSES: { id: string; room: string; cue: string }[] = [
  { id: 'door_patient', room: 'patientgang', cue: 'pass:patient' },
  { id: 'door_operation', room: 'operationsstue', cue: 'pass:operation' },
  { id: 'arkiv', room: 'arkiv', cue: 'archive' },
]

export function stepScript(prev: ScriptState, input: ScriptInput): { state: ScriptState; cues: string[] } {
  const state: ScriptState = {
    jumps: prev.jumps.slice(),
    shadowAt: prev.shadowAt,
    slagter: prev.slagter,
    slagterT: prev.slagterT,
    beats: (prev.beats ?? []).slice(),
    hallDoor: prev.hallDoor === true,
    hallCloset: prev.hallCloset === true,
    hallWait: Number.isFinite(prev.hallWait) ? prev.hallWait : -1,
    hallDark: Number.isFinite(prev.hallDark) ? Math.max(0, prev.hallDark) : 0,
    hallPlayed: prev.hallPlayed === true,
  }
  const cues: string[] = []
  if (input.room && input.room !== input.prevRoom) {
    for (const pass of PASSES) {
      if (pass.room !== input.room || state.jumps.includes(pass.id)) continue
      state.jumps.push(pass.id)
      cues.push(pass.cue)
    }
  }
  // The figure behind the player is gone. A power cut no longer summons it.
  if (state.slagter === 1) {
    // The figure stays behind them until the flashlight is back on. No clock.
    if (input.flashlight) {
      state.slagter = 2
      state.slagterT = 0
      cues.push('await-turn')
    }
  } else if (state.slagter === 2) {
    // Running and screaming starts when they turn toward it, not after a delay.
    if (input.flashlight && input.lookingAtFigure) {
      state.slagter = 3
      state.slagterT = 0
      cues.push('charge')
    }
  } else if (state.slagter === 3) {
    state.slagterT += input.dt
    if (input.beam) {
      state.slagter = 4
      cues.push('banish')
    } else if (state.slagterT > 3.2) {
      state.slagter = 4
      cues.push('strike')
    }
  }
  const earlyRoom = (input.room === 'patientgang' || input.room === 'operationsstue') && state.slagter < 4
  const sequenceBusy = state.slagter > 0 && state.slagter < 4
  if (!earlyRoom && !sequenceBusy && input.atDoor && input.time - state.shadowAt > 24 && cues.length === 0) {
    state.shadowAt = input.time
    cues.push('shadow')
  }
  return { state, cues }
}
