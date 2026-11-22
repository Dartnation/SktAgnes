import { describe, expect, it } from 'vitest'
import { flashlightBanishes, pickRelocate } from '../src/ai/presence'
import { beamHits } from '../src/ai/senses'
import { emptyScript, stepScript } from '../src/horror/ScriptedEvents'
import { CLIP_FILES } from '../src/audio/clips'
import type { AABB } from '../src/physics/Collision'

const open: AABB[] = []

describe('flashlight beam', () => {
  const origin = { x: 0, y: 1.6, z: 0 }
  const dir = { x: 0, y: 0, z: 1 }
  const ahead = { x: 0.2, y: 1.6, z: 4 }

  it('requires the lamp on, the cone, and a clear line', () => {
    expect(flashlightBanishes(false, origin, dir, ahead, open)).toBe(false)
    expect(flashlightBanishes(true, origin, { x: 1, y: 0, z: 0 }, ahead, open)).toBe(false)
    expect(flashlightBanishes(true, origin, dir, ahead, open)).toBe(true)
    const wall: AABB = { minX: -1, maxX: 1, minY: 0, maxY: 3, minZ: 2, maxZ: 2.2, id: 'w' }
    expect(beamHits(origin, dir, ahead, Math.cos(0.5), 16, [wall])).toBe(false)
    expect(flashlightBanishes(true, origin, dir, ahead, [wall])).toBe(false)
  })
})

describe('relocation', () => {
  const cells = [
    { x: 0, y: 4, z: 2 },
    { x: 12, y: 4, z: 0 },
    { x: 14, y: 4, z: 1 },
    { x: -12, y: 4, z: 0 },
    { x: 30, y: 4, z: 0 },
  ]
  it('rejects a cell the player can see and a recent spawn', () => {
    const spot = pickRelocate({
      cells,
      player: { x: 0, y: 4, z: 0 },
      forward: { x: 0, z: 1 },
      recent: [{ x: 12, y: 4, z: 0 }],
      from: { x: 1, y: 4, z: 1 },
      visible: (p) => p.z > 0,
      rng: () => 0,
    })
    expect(spot).not.toBeNull()
    expect(spot && spot.z <= 0).toBe(true)
    expect(spot && Math.hypot(spot.x - 12, spot.z)).toBeGreaterThan(3.5)
    expect(Math.hypot((spot?.x ?? 0), (spot?.z ?? 0))).toBeGreaterThan(7)
    expect(Math.hypot((spot?.x ?? 0), (spot?.z ?? 0))).toBeLessThan(26)
  })
})

describe('scripted events', () => {
  const quiet = { flashlight: false, prevFlash: false, lookedAway: false, atDoor: false }

  it('lets only the door figure into the early rooms, once', () => {
    const hall = stepScript(emptyScript(), { dt: 0.1, time: 4, room: 'patientgang', prevRoom: 'reception', ...quiet })
    expect(hall.cues).toEqual(['pass:patient'])
    const again = stepScript(hall.state, { dt: 0.1, time: 8, room: 'patientgang', prevRoom: 'reception', ...quiet })
    expect(again.cues).toEqual([])
    const theatre = stepScript(hall.state, { dt: 0.1, time: 9, room: 'operationsstue', prevRoom: 'patientgang', ...quiet })
    expect(theatre.cues).toEqual(['pass:operation'])
    expect(theatre.state.jumps).toEqual(['door_patient', 'door_operation'])
  })

  it('keeps the butcher asleep until the lights die, then waits for a look', () => {
    const walked = stepScript(emptyScript(), { dt: 0.1, time: 1, room: 'slagterum', prevRoom: 'operationsstue', ...quiet })
    expect(walked.state.slagter).toBe(0)
    const started = stepScript(emptyScript(), { dt: 0.1, time: 2, room: 'slagterum', prevRoom: 'operationsstue', ...quiet, powerCut: true })
    let state = started.state
    let cues = started.cues.slice()
    for (let i = 0; i < 16; i++) {
      const step = stepScript(state, { dt: 0.1, time: 3 + i, room: 'slagterum', prevRoom: 'slagterum', ...quiet, powerCut: true })
      state = step.state
      cues = cues.concat(step.cues)
    }
    expect(cues).toContain('silence')
    expect(cues).toContain('await-turn')
    expect(state.slagter).toBe(2)
    const charge = stepScript(state, { dt: 0.1, time: 6, room: 'slagterum', prevRoom: 'slagterum', ...quiet, powerCut: true, lookingAtFigure: true })
    expect(charge.cues).toContain('charge')
    const gone = stepScript(charge.state, { dt: 0.1, time: 7, room: 'slagterum', prevRoom: 'slagterum', ...quiet, powerCut: true, beam: true })
    expect(gone.cues).toContain('banish')
    expect(gone.state.slagter).toBe(4)
  })
})

describe('sound files', () => {
  it('maps each recording to its event', () => {
    expect(CLIP_FILES.step).toBe('fodtrin-gaaende.mp3')
    expect(CLIP_FILES.flash).toBe('lommelygte-taend-sluk.mp3')
    expect(CLIP_FILES.metallic).toBe('metallic.mp3')
    expect(CLIP_FILES.scream).toBe('skrig.mp3')
    expect(CLIP_FILES.shadow).toBe('pludselig-skygge-monster.mp3')
    expect(CLIP_FILES.deep).toBe('dyb-lyd.mp3')
  })
})
