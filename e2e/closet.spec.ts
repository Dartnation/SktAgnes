import { expect, test } from '@playwright/test'

test('skabet åbner når skikkelsen er væk, og slukningen flytter ikke spilleren', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await expect.poll(() => page.evaluate(() => window.__AGNES__?.mode() ?? '')).toBe('playing')
  await page.evaluate(() => window.__AGNES__!.freeze(true))

  await page.evaluate(() => {
    window.__AGNES__!.teleport(29.0, 0, 8.5)
    window.__AGNES__!.face(0)
    window.__AGNES__!.tick(0.1)
    window.__AGNES__!.act('interact')
  })
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_op')
  expect(await page.evaluate(() => window.__AGNES__!.snapshot().player.flashlightOn)).toBe(false)
  await page.screenshot({ path: 'docs/sequence-shots/closet-inside.png' })

  await page.evaluate(() => {
    window.__AGNES__!.tick(2.4)
    window.__AGNES__!.act('interact')
  })
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_op')
  expect(await page.evaluate(() => window.__AGNES__!.closet().locked)).toBeLessThan(3)

  await page.evaluate(() => window.__AGNES__!.tick(1))
  expect(await page.evaluate(() => window.__AGNES__!.closet().locked)).toBeGreaterThan(3)
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_op')

  await page.evaluate(() => {
    window.__AGNES__!.tick(4)
    window.__AGNES__!.act('interact')
  })
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_op')
  expect(await page.evaluate(() => window.__AGNES__!.closet().locked)).toBeLessThan(13)

  await page.evaluate(() => window.__AGNES__!.tick(7))
  expect(await page.evaluate(() => window.__AGNES__!.closet().locked)).toBeGreaterThan(13)
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_op')
  await page.evaluate(() => window.__AGNES__!.tick(3.2))
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBeNull()
  expect(await page.evaluate(() => window.__AGNES__!.closet().phase)).toBe('whispers')
  await page.evaluate(() => window.__AGNES__!.tick(10.2))
  expect(await page.evaluate(() => window.__AGNES__!.closet().phase)).toBe('idle')

  await page.evaluate(() => {
    window.__AGNES__!.advance(130)
    window.__AGNES__!.tick(0.3)
  })
  const stayed = await page.evaluate(() => window.__AGNES__!.snapshot().player)
  expect(stayed.x).toBeGreaterThan(24)
  expect(stayed.x).toBeLessThan(36)
  expect(await page.evaluate(() => window.__AGNES__!.snapshot().flags.powerCut)).toBe(false)
  expect(await page.evaluate(() => window.__AGNES__!.figure().butcher)).toBe(false)
  expect(errors).toEqual([])
})
