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
}

export function emptyScript(): ScriptState {
  return { jumps: [], shadowAt: -100, slagter: 0, slagterT: 0, beats: [] }
}

const JUMPS: { id: string; room: string; needLight: boolean }[] = [
  { id: 'stue102', room: 'operationsstue', needLight: true },
  { id: 'arkiv', room: 'arkiv', needLight: false },
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
    for (const jump of JUMPS) {
      if (jump.room !== input.room || state.jumps.includes(jump.id)) continue
      if (jump.needLight && !input.flashlight) continue
      state.jumps.push(jump.id)
      cues.push(`jump:${jump.id}`)
    }
    if (input.room === 'slagterum' && state.slagter === 0) {
      state.slagter = 1
      state.slagterT = 0
      cues.push('silence')
    }
  }
  if (state.slagter === 1) {
    state.slagterT += input.dt
    if (state.slagterT > 0.55) {
      state.slagter = 2
      state.slagterT = 0
      cues.push('deep')
      cues.push('figure')
    }
  } else if (state.slagter === 2) {
    state.slagterT += input.dt
    const broke = input.flashlight !== input.prevFlash || input.lookedAway
    if (broke || state.slagterT > 8) {
      state.slagter = 3
      state.slagterT = 0
      cues.push('hide-figure')
    }
  } else if (state.slagter === 3) {
    state.slagterT += input.dt
    if (state.slagterT > 2) {
      state.slagter = 4
      cues.push('steps')
    }
  }
  if (input.atDoor && input.time - state.shadowAt > 24 && !cues.some((c) => c.startsWith('jump'))) {
    state.shadowAt = input.time
    cues.push('shadow')
  }
  return { state, cues }
}
