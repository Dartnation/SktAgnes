import { expect, test } from '@playwright/test'

test('I, Tab og Escape åbner og lukker inventar og pause', async ({ page }, testInfo) => {
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await page.waitForFunction(() => window.__AGNES__?.mode() === 'playing')
  await expect(page.locator('#obj-text')).toHaveText('Efterlysningen ligger på skranken.')

  await page.keyboard.press('i')
  await expect(page.locator('#inventory')).toBeVisible()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('inventory')
  await page.screenshot({ path: testInfo.outputPath('inventory-aaben.png'), timeout: 15000 })

  await page.keyboard.press('Escape')
  await expect(page.locator('#inventory')).toBeHidden()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('playing')

  await page.keyboard.press('Tab')
  await expect(page.locator('#inventory')).toBeVisible()
  await page.keyboard.press('i')
  await expect(page.locator('#inventory')).toBeHidden()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('playing')

  await page.keyboard.press('Escape')
  await expect(page.locator('#pause')).toBeVisible()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('paused')
  await page.screenshot({ path: testInfo.outputPath('pause.png'), timeout: 15000 })

  await page.keyboard.press('i')
  await expect(page.locator('#inventory')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('playing')
})
