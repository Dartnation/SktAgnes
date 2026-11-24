import { describe, expect, it } from 'vitest'
import { createNewGame } from '../src/systems/Story'
import { BODY_CODE, HALL_CODE, roomDoorBlock, roomMission } from '../src/systems/roomGates'

describe('opgave før næste rum', () => {
  it('holder patientgangen lukket, indtil koden fra loftet er indtastet', () => {
    const snap = createNewGame()
    expect(8 * 150 + 43).toBe(Number(HALL_CODE))
    expect(roomMission('patientgang', snap)?.text).toContain('væggen')
    expect(roomDoorBlock('patientgang', 'door_pat_op', snap)).toBeTruthy()
    snap.pickedUp.push('bat_gang')
    expect(roomDoorBlock('patientgang', 'door_pat_op', snap)).toBeTruthy()
    snap.readIds.push('code_1243')
    expect(roomDoorBlock('patientgang', 'door_pat_op', snap)).toBeNull()
  })

  it('holder receptionens dør, indtil overvågningen er set', () => {
    const snap = createNewGame()
    expect(roomDoorBlock('reception', 'door_rec_pat', snap)).toBeNull()
    snap.inventory.push({ itemId: 'key_gang', count: 1 })
    expect(roomMission('reception', snap)?.text).toContain('døren')
    expect(roomDoorBlock('reception', 'door_rec_pat', snap)).toBeTruthy()
    snap.readIds.push('rec_door')
    expect(roomDoorBlock('reception', 'door_rec_pat', snap)).toBeNull()
  })

  it('holder også døren tilbage lukket, indtil opgaven er løst', () => {
    const snap = createNewGame()
    expect(roomDoorBlock('patientgang', 'door_rec_pat', snap)).toBeTruthy()
    snap.readIds.push('code_1243')
    expect(roomDoorBlock('patientgang', 'door_rec_pat', snap)).toBeNull()
    expect(roomDoorBlock('operationsstue', 'door_op_slag', snap)).toBeTruthy()
    expect(roomMission('operationsstue', snap)?.text).toContain('Gem dig')
    const after = { ...snap, beats: ['op_mission'] }
    expect(roomMission('operationsstue', after)?.text).toContain('bogstaverne')
    expect(roomDoorBlock('operationsstue', 'door_op_slag', after)).toBeTruthy()
    after.pickedUp.push('bat_op')
    expect(roomDoorBlock('operationsstue', 'door_op_slag', after)).toBeTruthy()
    after.beats = ['op_mission', 'op_homo']
    expect(roomDoorBlock('operationsstue', 'door_op_slag', after)).toBeNull()
  })

  it('holder slagterummet lukket, indtil lagenet er væk og nøglen er taget', () => {
    const snap = createNewGame()
    expect(BODY_CODE).toHaveLength(4)
    expect(roomMission('slagterum', snap)?.text).toContain('lagenet')
    expect(roomDoorBlock('slagterum', 'door_slag_trappe', snap)).toBeTruthy()
    const shown = { ...snap, beats: ['slag_sheet'] }
    expect(roomMission('slagterum', shown)?.text).toContain('maven')
    const open = { ...snap, beats: ['slag_sheet', 'slag_code'] }
    expect(roomMission('slagterum', open)?.text).toContain('nøglen')
    const done = { ...snap, beats: ['slag_sheet', 'slag_code', 'slag_key'] }
    expect(roomDoorBlock('slagterum', 'door_slag_trappe', done)).toBeNull()
  })
})
