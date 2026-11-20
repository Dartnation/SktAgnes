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
  it('fires a room jumpscare once and then never again', () => {
    const first = stepScript(emptyScript(), {
      dt: 0.1, time: 10, room: 'operationsstue', prevRoom: 'patientgang', flashlight: true, prevFlash: true, lookedAway: false, atDoor: false,
    })
    expect(first.cues).toContain('jump:stue102')
    const again = stepScript(first.state, {
      dt: 0.1, time: 12, room: 'operationsstue', prevRoom: 'reception', flashlight: true, prevFlash: true, lookedAway: false, atDoor: false,
    })
    expect(again.cues.some((c) => c.startsWith('jump'))).toBe(false)
  })

  it('runs the Slagterummet sequence in order', () => {
    let state = emptyScript()
    const enter = stepScript(state, {
      dt: 0.1, time: 1, room: 'slagterum', prevRoom: 'operationsstue', flashlight: true, prevFlash: true, lookedAway: false, atDoor: false,
    })
    expect(enter.cues).toContain('silence')
    state = enter.state
    let cues: string[] = []
    for (let i = 0; i < 8; i++) {
      const step = stepScript(state, {
        dt: 0.1, time: 2 + i, room: 'slagterum', prevRoom: 'slagterum', flashlight: true, prevFlash: true, lookedAway: false, atDoor: false,
      })
      state = step.state
      cues = cues.concat(step.cues)
    }
    expect(cues).toContain('deep')
    expect(cues).toContain('figure')
    const gone = stepScript(state, {
      dt: 0.1, time: 8, room: 'slagterum', prevRoom: 'slagterum', flashlight: false, prevFlash: true, lookedAway: false, atDoor: false,
    })
    expect(gone.cues).toContain('hide-figure')
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
