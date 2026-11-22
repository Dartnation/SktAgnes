import { expect, test } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'

test('fotomaterialer kan ses i reception, gang, kælder, tæppe og trappe', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await expect.poll(() => page.evaluate(() => window.__AGNES__?.mode() ?? '')).toBe('playing')
  await expect.poll(() => page.evaluate(() => window.__AGNES__?.photos() ?? 0)).toBeGreaterThanOrEqual(12)
  await page.evaluate(() => window.__AGNES__!.act('flashlight'))

  const shot = async (name: string) => {
    await page.waitForTimeout(400)
    const file = testInfo.outputPath(`${name}.png`)
    await page.screenshot({ path: file })
    const kept = path.resolve('docs/audit-shots', `${name}.png`)
    fs.mkdirSync(path.dirname(kept), { recursive: true })
    fs.copyFileSync(file, kept)
  }

  const stand = async (x: number, y: number, z: number, yaw: number, pitch = 0.35) => {
    await page.evaluate(({ x, y, z, yaw, pitch }) => {
      const g = window.__AGNES__!
      g.teleport(x, y, z)
      g.face(yaw)
      const current = g.snapshot().player.pitch
      g.look(0, current - pitch)
    }, { x, y, z, yaw, pitch })
  }

  await stand(6, 0, 4.2, 0, -0.7)
  await shot('reception-gulv')
  await stand(18, 0, 4, Math.PI, -0.65)
  await shot('patientgang-linoleum')
  await stand(42, 4, 4, 0, -0.6)
  await shot('personalerum-taeppe')
  await stand(6, 8, 4, 0, -0.55)
  await shot('kaelder-beton')

  await stand(51.9, 0, 1.15, 0, 0.15)
  await shot('trappe-nedefra')
  await stand(51.9, 2, 3.1, 0, 0.05)
  await shot('trappe-midte')
  await stand(49.3, 1.5, 3.1, Math.PI / 2, 0.1)
  await shot('trappe-siden')
  await stand(51.9, 4, 5.6, Math.PI, -0.45)
  await shot('trappe-ovenfra')

  expect(errors).toEqual([])
})
