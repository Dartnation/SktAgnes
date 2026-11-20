import { describe, expect, it } from 'vitest'
import { modeAction } from '../src/game/modalInput'

describe('inventar og pause', () => {
  it('åbner inventaret med I og Tab og lukker det igen', () => {
    expect(modeAction('playing', 'KeyI')).toEqual({ type: 'mode', mode: 'inventory' })
    expect(modeAction('playing', 'Tab')).toEqual({ type: 'mode', mode: 'inventory' })
    expect(modeAction('inventory', 'KeyI')).toEqual({ type: 'mode', mode: 'playing' })
    expect(modeAction('inventory', 'Tab')).toEqual({ type: 'mode', mode: 'playing' })
    expect(modeAction('inventory', 'Escape')).toEqual({ type: 'mode', mode: 'playing' })
  })

  it('lader Escape pause og genoptage, også fra inventaret under pause', () => {
    expect(modeAction('playing', 'Escape')).toEqual({ type: 'mode', mode: 'paused' })
    expect(modeAction('paused', 'Escape')).toEqual({ type: 'mode', mode: 'playing' })
    expect(modeAction('paused', 'KeyI')).toEqual({ type: 'mode', mode: 'inventory' })
  })

  it('lukker undersøgelse og kodefelt med Escape og rører ikke menuen', () => {
    expect(modeAction('examine', 'Escape')).toEqual({ type: 'mode', mode: 'playing' })
    expect(modeAction('keypad', 'Escape')).toEqual({ type: 'mode', mode: 'playing' })
    expect(modeAction('examine', 'KeyI')).toEqual({ type: 'none' })
    expect(modeAction('menu', 'Escape')).toEqual({ type: 'none' })
    expect(modeAction('menu', 'KeyI')).toEqual({ type: 'none' })
    expect(modeAction('settings', 'Escape')).toEqual({ type: 'back' })
    expect(modeAction('playing', null)).toEqual({ type: 'none' })
  })
})
