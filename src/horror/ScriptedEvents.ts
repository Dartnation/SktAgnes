/** Scripted scares. Independent of Vogteren's patrol, and stored in the save. */
export interface ScriptState {
  jumps: string[]
  shadowAt: number
  /** 0 idle, 1 silence, 2 figure present, 3 figure gone, 4 finished */
  slagter: number
  slagterT: number
  /** Unique ids of director beats that have already played. */
  beats: string[]
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
  return { jumps: [], shadowAt: -100, slagter: 0, slagterT: 0, beats: [] }
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
  }
  const cues: string[] = []
  if (input.room && input.room !== input.prevRoom) {
    for (const pass of PASSES) {
      if (pass.room !== input.room || state.jumps.includes(pass.id)) continue
      state.jumps.push(pass.id)
      cues.push(pass.cue)
    }
  }
  // The big figure waits for the blackout. Walking into the room with the lights on does nothing.
  if (input.powerCut && input.room === 'slagterum' && state.slagter === 0) {
    state.slagter = 1
    state.slagterT = 0
    cues.push('blackout')
    cues.push('silence')
  }
  if (state.slagter === 1) {
    state.slagterT += input.dt
    if (state.slagterT > 1.35) {
      state.slagter = 2
      state.slagterT = 0
      cues.push('await-turn')
    }
  } else if (state.slagter === 2) {
    state.slagterT += input.dt
    if (input.lookingAtFigure) {
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
