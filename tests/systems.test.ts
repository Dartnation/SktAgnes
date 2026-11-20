import { describe, expect, it } from 'vitest'
import { createDirector, scareCooldown, stepDirector } from '../src/ai/HorrorDirector'
import { canPlayScare, emptyScareMemory, markScare, pickDynamicScare } from '../src/horror/ScareLogic'
import { addItem, countItem, dropOne, hasItem, removeItem, useConsumable } from '../src/systems/Inventory'
import { latestSave, loadGame, memoryStorage, saveGame } from '../src/systems/SaveSystem'
import { loadSettings, sanitizeSettings } from '../src/systems/Settings'
import { createNewGame, currentObjective, resolveEnding, storyProgress } from '../src/systems/Story'

describe('inventory', () => {
  it('stacks batteries, refuses a second unique key, and uses a medkit', () => {
    let slots = addItem([], 'battery', 3).slots
    expect(countItem(slots, 'battery')).toBe(3)
    slots = addItem(slots, 'battery', 6).slots
    expect(countItem(slots, 'battery')).toBe(8)
    slots = addItem(slots, 'chapel_key', 1).slots
    const again = addItem(slots, 'chapel_key', 1)
    expect(again.added).toBe(0)
    expect(hasItem(again.slots, 'chapel_key')).toBe(true)
    const used = useConsumable(addItem(slots, 'medkit', 1).slots, 'medkit')
    expect(used.heal).toBeGreaterThan(20)
    expect(hasItem(used.slots, 'medkit')).toBe(false)
    const dropped = dropOne(slots, 'battery')
    expect(dropped.dropped).toBe(true)
    expect(countItem(dropped.slots, 'battery')).toBe(7)
    expect(dropOne(slots, 'chapel_key').dropped).toBe(false)
    expect(countItem(removeItem(slots, 'battery', 10), 'battery')).toBe(0)
  })
})

describe('save and settings', () => {
  it('roundtrips slots and ignores corrupt data', () => {
    const storage = memoryStorage()
    const snap = createNewGame()
    snap.player.x = 12.5
    snap.playTime = 40
    saveGame(storage, 1, snap, 1000)
    saveGame(storage, 2, { ...snap, playTime: 10, player: { ...snap.player, x: 3 } }, 500)
    const loaded = loadGame(storage, 1)
    expect(loaded?.snapshot.player.x).toBeCloseTo(12.5)
    expect(latestSave(storage)?.slot).toBe(1)
    storage.setItem('skt-agnes-save-0', '{not json')
    expect(loadGame(storage, 0)).toBeNull()
  })

  it('sanitizes settings into range', () => {
    const s = sanitizeSettings({
      quality: 'high',
      masterVolume: 4,
      fpsCap: 90,
      brightness: 0.1,
      mouseSensitivity: 1,
      resolutionScale: 3,
    })
    expect(s.quality).toBe('high')
    expect(s.masterVolume).toBe(1)
    expect(s.fpsCap).toBe(60)
    expect(s.brightness).toBeGreaterThan(0.5)
    expect(s.mouseSensitivity).toBeLessThan(0.02)
    const storage = memoryStorage()
    storage.setItem('skt-agnes-settings', '{"quality":"low","masterVolume":0.2}')
    expect(loadSettings(storage).quality).toBe('low')
    expect(loadSettings(storage).masterVolume).toBeCloseTo(0.2)
  })
})

describe('director pacing', () => {
  it('keeps tension inside 0..100 and suppresses scares after damage', () => {
    let state = createDirector()
    state = { ...state, tension: 90, stress: 90, sinceScare: 100, suppress: 0 }
    const blocked = stepDirector(state, {
      dt: 0.5,
      health: 20,
      monsterDist: 4,
      inDark: true,
      sprinting: true,
      hiding: false,
      tookDamage: true,
      story: 0.8,
      rng: () => 0,
    })
    expect(blocked.state.tension).toBeGreaterThanOrEqual(0)
    expect(blocked.state.tension).toBeLessThanOrEqual(100)
    expect(blocked.event?.type).not.toBe('scare')
    expect(blocked.state.suppress).toBeGreaterThan(5)
  })

  it('spaces scares by the tension cooldown and caps soft events', () => {
    expect(scareCooldown(100)).toBeLessThan(scareCooldown(0))
    let state = createDirector()
    state = { ...state, tension: 100, stress: 100, sinceScare: 0, sinceSoft: 0, softWindow: 0, windowLeft: 180, suppress: 0 }
    let scares = 0
    let soft = 0
    let sinceLast = 0
    let minGap = 999
    for (let t = 0; t < 120; t++) {
      const step = stepDirector(state, {
        dt: 1,
        health: 30,
        monsterDist: 3,
        inDark: true,
        sprinting: false,
        hiding: false,
        tookDamage: false,
        story: 1,
        rng: () => 0,
      })
      state = step.state
      if (step.event?.type === 'scare') {
        scares++
        minGap = Math.min(minGap, sinceLast)
        sinceLast = 0
      } else {
        sinceLast += 1
        if (step.event?.type === 'soft') soft++
      }
    }
    expect(scares).toBeGreaterThan(3)
    expect(scares).toBeLessThan(12)
    expect(minGap).toBeGreaterThanOrEqual(14)
    expect(soft).toBeLessThanOrEqual(20)
    expect(soft).toBeGreaterThan(0)
  })

  it('is quieter when the player is safe', () => {
    const run = (monsterDist: number, inDark: boolean) => {
      let state = createDirector()
      let n = 0
      for (let i = 0; i < 90; i++) {
        const step = stepDirector(state, {
          dt: 1,
          health: 100,
          monsterDist,
          inDark,
          sprinting: false,
          hiding: monsterDist > 20,
          tookDamage: false,
          story: 0,
          rng: () => 0,
        })
        state = step.state
        if (step.event) n++
      }
      return n
    }
    expect(run(40, false)).toBeLessThan(run(3, true))
  })
})

describe('jumpscare selection', () => {
  it('obeys cooldowns and context', () => {
    let mem = emptyScareMemory()
    expect(canPlayScare(mem, 'face', 0)).toBe(true)
    mem = markScare(mem, 'face', 10)
    expect(canPlayScare(mem, 'whisper', 15)).toBe(false)
    expect(canPlayScare(mem, 'attack', 15)).toBe(true)
    expect(canPlayScare(mem, 'face', 30)).toBe(false)
    expect(canPlayScare(mem, 'whisper', 30)).toBe(true)
    const still = pickDynamicScare({
      inDark: true,
      monsterNear: false,
      doorOpenNear: false,
      inMannequinRoom: true,
      tension: 40,
      rng: () => 0.99,
    })
    expect(still).toBe('still')
    for (let i = 0; i < 12; i++) {
      const k = pickDynamicScare({
        inDark: false,
        monsterNear: false,
        doorOpenNear: false,
        inMannequinRoom: false,
        tension: 20,
        rng: () => i / 12,
      })
      expect(k).not.toBe('still')
      expect(k).not.toBe('door')
    }
  })
})

describe('story', () => {
  it('advances objectives and picks distinct endings', () => {
    const snap = createNewGame()
    expect(currentObjective(snap).id).toBe('keys')
    snap.inventory = addItem(snap.inventory, 'key_op').slots
    snap.inventory = addItem(snap.inventory, 'key_arkiv').slots
    snap.inventory = addItem(snap.inventory, 'key_kapel').slots
    expect(currentObjective(snap).id).toBe('leave')
    expect(storyProgress(snap)).toBe(1)
    expect(resolveEnding(snap, 'death')).toBe('optagelsen')
    expect(resolveEnding(snap, 'tunnel')).toBe('flugten')
    expect(resolveEnding(snap, 'yard')).toBe('tom_port')
    snap.inventory = addItem(snap.inventory, 'evidence').slots
    expect(resolveEnding(snap, 'yard')).toBe('sandheden')
    for (const id of ['file_1', 'file_2', 'file_3', 'file_4', 'file_5', 'file_6', 'rosary']) {
      snap.inventory = addItem(snap.inventory, id).slots
    }
    expect(resolveEnding(snap, 'yard')).toBe('vidnet')
  })
})
