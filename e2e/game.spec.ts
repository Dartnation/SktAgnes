import { expect, test, type Page, type TestInfo } from '@playwright/test'

test.setTimeout(300000)

async function shoot(page: Page, testInfo: TestInfo, name: string) {
  await page.evaluate(() => window.__AGNES__?.freeze?.(true))
  await page.evaluate(() => {
    try {
      const c = document.querySelector('canvas') as HTMLCanvasElement | null
      const gl = c?.getContext('webgl2') || c?.getContext('webgl')
      if (!gl || !c) return
      const pix = new Uint8Array(4)
      gl.readPixels(8, 8, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pix)
    } catch {
      /* software GL can refuse a readback; the screenshot still shows the frame */
    }
  })
  await page.screenshot({ path: testInfo.outputPath(name), timeout: 15000 })
  await page.evaluate(() => window.__AGNES__?.freeze?.(false))
}

test('menu, level, movement, monster, scare, door, save and restart', async ({ page }, testInfo) => {
  const errors: string[] = []
  const failed: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('response', (res) => {
    if (res.status() >= 400) failed.push(`${res.status()} ${res.url()}`)
  })

  await page.goto('/?test=1')
  await expect(page.locator('h1')).toHaveText('SKT. AGNES')
  await expect(page.locator('#btn-new')).toBeVisible()
  await page.screenshot({ path: testInfo.outputPath('menu.png') })

  await page.locator('#btn-settings').click()
  await expect(page.locator('#settings')).toBeVisible()
  await page.locator('#set-master').fill('0.4')
  await page.screenshot({ path: testInfo.outputPath('settings.png') })
  await page.locator('#btn-settings-back').click()

  await page.locator('#btn-new').click()
  await page.waitForFunction(() => window.__AGNES__?.mode() === 'playing')
  await page.waitForTimeout(800)
  await page.evaluate(() => window.__AGNES__!.act('flashlight'))
  await page.waitForTimeout(400)
  const alive = await page.evaluate(() => (document.querySelector('canvas') as HTMLCanvasElement).width)
  expect(alive).toBeGreaterThan(100)
  await shoot(page, testInfo, 'hall.png')
  await expect(page.locator('#bat-label')).toContainText('%')
  const looked = await page.evaluate(() => {
    const before = window.__AGNES__!.snapshot().player.pitch
    window.__AGNES__!.look(0, -0.35)
    return window.__AGNES__!.snapshot().player.pitch - before
  })
  expect(looked).toBeGreaterThan(0.2)
  await page.evaluate(() => window.__AGNES__!.look(0, 0.35))

  const before = await page.evaluate(() => window.__AGNES__!.snapshot().player)
  await page.evaluate(() => window.__AGNES__!.setMove({ forward: 1 }))
  await page.waitForFunction((start) => {
    const p = window.__AGNES__!.snapshot().player
    return Math.hypot(p.x - start.x, p.z - start.z) > 0.4 && p.x > start.x
  }, before, { timeout: 8000 })
  await page.evaluate(() => window.__AGNES__!.setMove(null))
  const after = await page.evaluate(() => window.__AGNES__!.snapshot().player)
  expect(Math.hypot(after.x - before.x, after.z - before.z)).toBeGreaterThan(0.4)
  expect(after.x).toBeGreaterThan(before.x)

  const strafeFrom = await page.evaluate(() => window.__AGNES__!.snapshot().player.z)
  await page.evaluate(() => window.__AGNES__!.setMove({ strafe: 1 }))
  const strafedLeft = await page.evaluate(async (startZ) => {
    const t0 = performance.now()
    while (performance.now() - t0 < 8000) {
      await new Promise((r) => requestAnimationFrame(() => r(undefined)))
      if (window.__AGNES__!.snapshot().player.z > startZ + 0.35) return true
    }
    return false
  }, strafeFrom)
  await page.evaluate(() => window.__AGNES__!.setMove(null))
  expect(strafedLeft).toBe(true)

  const monsterMoved = await page.evaluate(async () => {
    const start = window.__AGNES__!.monster()
    const t0 = performance.now()
    while (performance.now() - t0 < 20000) {
      await new Promise((r) => requestAnimationFrame(() => r(undefined)))
      const now = window.__AGNES__!.monster()
      if (Math.hypot(now.x - start.x, now.z - start.z) > 0.08 || now.state !== start.state) return true
    }
    return false
  })
  expect(monsterMoved).toBe(true)

  await page.evaluate(() => window.__AGNES__!.forceMonster('Chase'))
  const chased = await page.evaluate(() => window.__AGNES__!.monster().state)
  expect(chased).toBe('Chase')

  await page.evaluate(() => {
    const m = window.__AGNES__!.monster()
    window.__AGNES__!.teleport(m.x, m.y, m.z - 1.7)
    const p = window.__AGNES__!.snapshot().player
    if (Math.abs(p.yaw) > 0.02) window.__AGNES__!.look(p.yaw, 0)
    if (Math.abs(p.pitch) > 0.02) window.__AGNES__!.look(0, p.pitch)
  })
  await page.waitForTimeout(200)
  await page.evaluate(() => window.__AGNES__!.faceMonster(Math.PI))
  await shoot(page, testInfo, 'monster.png')

  await page.evaluate(() => window.__AGNES__!.scare('face'))
  await page.waitForTimeout(80)
  expect(await page.evaluate(() => window.__AGNES__!.lastScare())).toBe('face')
  await shoot(page, testInfo, 'scare.png')

  await page.evaluate(() => {
    window.__AGNES__!.teleport(10.4, 0, 6)
    const p = window.__AGNES__!.snapshot().player
    window.__AGNES__!.look(p.yaw - Math.PI / 2, 0)
  })
  await page.waitForTimeout(200)
  await shoot(page, testInfo, 'door-closed.png')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await page.waitForFunction(() => window.__AGNES__!.doorOpen('door_rec_pat'), null, { timeout: 15000 })
  await shoot(page, testInfo, 'corridor.png')

  await page.evaluate(() => {
    window.__AGNES__!.teleport(6, 0, 6)
    window.__AGNES__!.save(1)
    window.__AGNES__!.teleport(18, 0, 6)
    window.__AGNES__!.load(1)
  })
  const loaded = await page.evaluate(() => window.__AGNES__!.snapshot().player)
  expect(loaded.x).toBeGreaterThan(4)
  expect(loaded.x).toBeLessThan(10)

  await page.evaluate(() => window.__AGNES__!.restart())
  await page.waitForTimeout(300)
  const restarted = await page.evaluate(() => window.__AGNES__!.snapshot().player)
  expect(restarted.x).toBeGreaterThan(4)
  expect(restarted.x).toBeLessThan(10)

  const fps = await page.evaluate(() => window.__AGNES__!.fps())
  expect(fps).toBeGreaterThan(12)

  await page.evaluate(() => window.__AGNES__!.act('inventory'))
  await expect(page.locator('#inventory')).toBeVisible()
  await shoot(page, testInfo, 'inventory.png')

  expect(failed, failed.join('\n')).toEqual([])
  expect(errors, errors.join('\n')).toEqual([])
})
