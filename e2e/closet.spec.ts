import { expect, test } from '@playwright/test'

test('skabet holder en i 20 sekunder, og lyset bliver slukket efter to minutter', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await expect.poll(() => page.evaluate(() => window.__AGNES__?.mode() ?? '')).toBe('playing')
  await page.evaluate(() => window.__AGNES__!.freeze(true))

  await page.evaluate(() => {
    window.__AGNES__!.teleport(14, 0, 4.3)
    window.__AGNES__!.face(Math.PI)
    window.__AGNES__!.tick(0.1)
    window.__AGNES__!.act('interact')
  })
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_pat')
  expect(await page.evaluate(() => window.__AGNES__!.snapshot().player.flashlightOn)).toBe(false)
  await page.screenshot({ path: 'docs/sequence-shots/closet-inside.png' })

  await page.evaluate(() => {
    window.__AGNES__!.tick(2.4)
    window.__AGNES__!.act('interact')
  })
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_pat')
  expect(await page.evaluate(() => window.__AGNES__!.closet().locked)).toBeLessThan(3)

  await page.evaluate(() => window.__AGNES__!.tick(1))
  expect(await page.evaluate(() => window.__AGNES__!.closet().locked)).toBeGreaterThan(3)
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_pat')

  await page.evaluate(() => window.__AGNES__!.tick(18))
  expect(await page.evaluate(() => window.__AGNES__!.closet().locked)).toBeGreaterThanOrEqual(20)
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  expect(await page.evaluate(() => window.__AGNES__!.hiding())).toBeNull()
  expect(await page.evaluate(() => window.__AGNES__!.closet().phase)).toBe('whispers')
  await page.evaluate(() => window.__AGNES__!.tick(10.2))
  expect(await page.evaluate(() => window.__AGNES__!.closet().phase)).toBe('idle')

  await page.evaluate(() => {
    window.__AGNES__!.advance(130)
    window.__AGNES__!.tick(0.3)
  })
  expect(await page.evaluate(() => window.__AGNES__!.snapshot().flags.powerCut)).toBe(true)
  expect(await page.evaluate(() => window.__AGNES__!.roomPower())).toBe(0)
  expect(errors).toEqual([])
})
