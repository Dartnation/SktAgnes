import { expect, test } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'

test('V3 kan bruge generator, radio og skjul uden at fanen dør', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  page.on('crash', () => errors.push('page-crash'))
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('playing')

  const shot = async (name: string) => {
    const file = testInfo.outputPath(`${name}.png`)
    await page.screenshot({ path: file })
    const kept = path.resolve('docs/v3-shots', `${name}.png`)
    fs.mkdirSync(path.dirname(kept), { recursive: true })
    fs.copyFileSync(file, kept)
  }

  await page.evaluate(() => window.__AGNES__!.teleport(6, 0, 6))
  await page.waitForTimeout(800)
  await shot('reception')

  await page.evaluate(() => {
    const g = window.__AGNES__!
    g.teleport(8.8, 8, 7.2)
    g.face(0)
  })
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.prompt ?? '')).toBe('Generator')
  await page.evaluate(() => {
    const g = window.__AGNES__!
    g.give('fuse_red')
    g.give('fuse_blue')
    g.give('fuse_yellow')
    g.act('interact')
  })
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.snapshot().flags.generatorOn)).toBe(true)
  await shot('generator')

  await page.evaluate(() => {
    const g = window.__AGNES__!
    g.teleport(45.8, 4, 7.3)
    g.face(0)
    g.act('interact')
  })
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.snapshot().flags.radioOn)).toBe(true)

  await page.evaluate(() => {
    const g = window.__AGNES__!
    g.teleport(14, 0, 4.4)
    g.face(Math.PI)
    g.act('interact')
  })
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_pat')

  await page.waitForTimeout(1200)
  const gfx = await page.evaluate(() => window.__AGNES__!.gfx())
  expect(gfx.flash).toBe(0)
  expect(gfx.face).toBe(0)
  expect(gfx.lights).toBeLessThanOrEqual(8)
  expect(gfx.calls).toBeGreaterThan(0)
  expect(gfx.calls).toBeLessThan(900)
  expect(gfx.fps).toBeGreaterThan(8)
  expect(errors).toEqual([])
  await shot('patientgang')
})
