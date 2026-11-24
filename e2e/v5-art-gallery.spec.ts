import { test, expect } from '@playwright/test'
import fs from 'node:fs'
import { FLOOR_Y, ROOMS } from '../src/world/data'

/**
 * V5 visual gallery, NOT a natural playthrough or story/progression test.
 * Teleportation is restricted to deterministic screenshot capture.
 * Repeat on PR26 and PR27 with identical settings for visual comparison.
 *
 * Usage after npm run build and Playwright browser install:
 * npx playwright test e2e/v5-art-gallery.spec.ts --project=chromium
 */
test('capture every SktAgnes zone for visual art review', async ({ page }, testInfo) => {
  test.setTimeout(180000)
  const errors: string[] = []
  page.on('pageerror', e => errors.push(e.message))
  page.on('crash', () => errors.push('page-crash'))
  await page.setViewportSize({ width: 1600, height: 900 })
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('playing')
  // Every location is the room centre, on the same floor, facing +Z.
  const results: Array<{ room: string; calls: number; fps: number; file: string }> = []
  for (const room of ROOMS) {
    const x = room.x + room.w / 2
    const z = room.z + room.d * 0.50
    const y = FLOOR_Y[room.floor]
    await page.evaluate(([xx, yy, zz]) => {
      const game = window.__AGNES__!
      game.teleport(xx, yy, zz)
      game.face(0)
    }, [x, y, z])
    await page.waitForTimeout(390)
    const filename = String(room.floor + 1) + '_' + room.id + '.png'
    await page.screenshot({ path: testInfo.outputPath(filename), animations: 'disabled' })
    const gfx = await page.evaluate(() => window.__AGNES__!.gfx())
    results.push({ room: room.id, calls: gfx.calls, fps: gfx.fps, file: filename })
  }
  const report = {
    branch: 'design/v5-cinematic-complete-pass',
    testNature: 'visual-only inspection using testing teleport, NOT playthrough',
    viewport: { width: 1600, height: 900 },
    photos: results,
    errors,
    warning: 'Passing test does not prove no mesh intersection, photorealism, material quality, or gameplay solvability.',
  }
  fs.writeFileSync(testInfo.outputPath('v5-art-capture-report.json'), JSON.stringify(report, null, 2))
  expect(results).toHaveLength(16)
  expect(errors).toEqual([])
})
