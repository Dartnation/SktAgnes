import { expect, test } from '@playwright/test'

test('introduktionen vises ved nyt spil, kan springes over og belaster ikke fanen', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/?test=1&intro=1')
  await page.locator('#btn-new').click()
  await expect(page.locator('#intro-title')).toHaveText('SKT. AGNES – 1987')
  await page.keyboard.press('Escape')
  await expect(page.locator('#intro')).toBeHidden()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.introOn())).toBe(false)
  await expect(page.locator('#obj-text')).toHaveText('Læs Majas brev.')

  await page.evaluate(() => window.__AGNES__!.save(1))
  await page.evaluate(() => window.__AGNES__!.teleport(18, 0, 6))
  await page.evaluate(() => window.__AGNES__!.load(1))
  await expect(page.locator('#intro')).toBeHidden()

  const first = await page.evaluate(() => window.__AGNES__!.lamps())
  expect(first.length).toBeGreaterThan(1)
  await page.waitForTimeout(1200)
  const second = await page.evaluate(() => window.__AGNES__!.lamps())
  const changed = first.some((value, index) => Math.abs(value - (second[index] ?? value)) > 0.02)
  expect(changed).toBe(true)
  const fps = await page.evaluate(() => window.__AGNES__!.fps())
  expect(fps).toBeGreaterThan(8)
  expect(errors).toEqual([])
})
