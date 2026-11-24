import { expect, test } from '@playwright/test'

test('rum 2 og 3 viser kun dørskikkelsen, og slagterrummet venter på et blik', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await expect.poll(() => page.evaluate(() => window.__AGNES__?.mode() ?? '')).toBe('playing')
  await page.evaluate(() => window.__AGNES__!.freeze(true))
  await page.evaluate(() => window.__AGNES__!.act('flashlight'))

  await page.evaluate(() => {
    window.__AGNES__!.teleport(18, 0, 6)
    window.__AGNES__!.face(Math.PI / 2)
    window.__AGNES__!.tick(0.5)
  })
  const hall = await page.evaluate(() => window.__AGNES__!.figure())
  expect(hall.passer).toBe(true)
  expect(hall.passerX).toBeGreaterThan(23)
  expect(hall.passerX).toBeLessThan(26)
  await page.screenshot({ path: 'docs/sequence-shots/patientgang-pass.png' })
  const patientOnce = await page.evaluate(() => {
    window.__AGNES__!.teleport(6, 0, 6)
    window.__AGNES__!.tick(0.1)
    window.__AGNES__!.teleport(18, 0, 5)
    window.__AGNES__!.tick(0.1)
    return window.__AGNES__!.events().jumps.filter((id) => id === 'door_patient').length
  })
  expect(patientOnce).toBe(1)
  expect(await page.evaluate(() => window.__AGNES__!.monster().state)).not.toMatch(/Chase|Attack/)
  expect(await page.evaluate(() => window.__AGNES__!.monster().x)).toBeGreaterThan(35)

  await page.evaluate(() => {
    window.__AGNES__!.teleport(30, 0, 6)
    window.__AGNES__!.face(Math.PI / 2)
    window.__AGNES__!.tick(0.36)
  })
  const theatre = await page.evaluate(() => window.__AGNES__!.figure())
  expect(theatre.passer).toBe(true)
  expect(theatre.passerX).toBeGreaterThan(35)
  await page.screenshot({ path: 'docs/sequence-shots/operationsstue-pass.png' })
  expect(await page.evaluate(() => window.__AGNES__!.monster().state)).not.toMatch(/Chase|Attack/)

  await page.evaluate(() => {
    window.__AGNES__!.teleport(6, 4, 6)
    window.__AGNES__!.face(0)
    window.__AGNES__!.tick(0.65)
  })
  expect(await page.evaluate(() => window.__AGNES__!.events().jumps.includes('arkiv'))).toBe(true)
  const archive = await page.evaluate(() => window.__AGNES__!.figure())
  expect(archive.passer).toBe(true)
  expect(archive.passerX).toBeGreaterThan(4)
  expect(archive.passerX).toBeLessThan(8)
  expect(archive.passerZ).toBeGreaterThan(9)
  await page.screenshot({ path: 'docs/sequence-shots/arkiv-pass.png' })

  const before = await page.evaluate(() => window.__AGNES__!.snapshot().player)
  await page.evaluate(() => {
    window.__AGNES__!.advance(130)
    window.__AGNES__!.tick(0.2)
  })
  const after = await page.evaluate(() => window.__AGNES__!.snapshot().player)
  expect(Math.hypot(after.x - before.x, after.z - before.z)).toBeLessThan(1)
  expect(await page.evaluate(() => window.__AGNES__!.events().slagter)).toBe(0)
  expect(await page.evaluate(() => window.__AGNES__!.figure().butcher)).toBe(false)
  expect(await page.evaluate(() => window.__AGNES__!.snapshot().flags.powerCut)).toBe(false)
  expect(errors).toEqual([])
})
