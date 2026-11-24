import { describe, expect, it } from 'vitest'
import { flashlightBanishes, pickRelocate } from '../src/ai/presence'
import { beamHits } from '../src/ai/senses'
import { emptyScript, stepHallDark, stepScript } from '../src/horror/ScriptedEvents'
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

  it('does not summon a figure behind the player when the power fails', () => {
    const started = stepScript(emptyScript(), { dt: 0.1, time: 2, room: 'slagterum', prevRoom: 'operationsstue', ...quiet, powerCut: true, flashlight: true, lookingAtFigure: true })
    expect(started.state.slagter).toBe(0)
    expect(started.cues).not.toContain('blackout')
    expect(started.cues).not.toContain('charge')
  })

  it('blacks out the patient hall ten seconds after both shocks, then brings the lights back', () => {
    const base = { ...emptyScript(), hallDoor: true, hallCloset: true }
    const away = stepHallDark(base, 3, 'operationsstue')
    expect(away.cue).toBe('')
    expect(away.state.hallWait).toBe(10)
    const waiting = stepHallDark(away.state, 9.5, 'patientgang')
    expect(waiting.cue).toBe('')
    expect(waiting.state.hallDark).toBe(0)
    const out = stepHallDark(waiting.state, 0.6, 'patientgang')
    expect(out.cue).toBe('out')
    expect(out.state.hallDark).toBeGreaterThan(3)
    const back = stepHallDark(out.state, 4, 'patientgang')
    expect(back.cue).toBe('back')
    expect(back.state.hallPlayed).toBe(true)
    expect(back.state.hallDark).toBe(0)
    const again = stepHallDark(back.state, 2, 'patientgang')
    expect(again.cue).toBe('')
    expect(again.state.hallWait).toBe(-1)
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
