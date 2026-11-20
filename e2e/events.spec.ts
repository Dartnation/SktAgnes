import { expect, test, type Page, type TestInfo } from '@playwright/test'

const files = [
  'fodtrin-gaaende.mp3',
  'lommelygte-taend-sluk.mp3',
  'metallic.mp3',
  'skrig.mp3',
  'pludselig-skygge-monster.mp3',
  'dyb-lyd.mp3',
]

test.setTimeout(180000)

async function shoot(page: Page, testInfo: TestInfo, name: string) {
  await page.evaluate(() => window.__AGNES__?.freeze?.(true))
  await page.evaluate(() => {
    const c = document.querySelector('canvas') as HTMLCanvasElement | null
    const gl = c?.getContext('webgl2') || c?.getContext('webgl')
    if (!gl) return
    gl.readPixels(8, 8, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4))
  })
  await page.screenshot({ path: testInfo.outputPath(name), timeout: 20000 })
  await page.evaluate(() => window.__AGNES__?.freeze?.(false))
}

test('recordings, footsteps, flashlight, monster beam, and scripted events', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await page.waitForFunction(() => window.__AGNES__?.mode() === 'playing')
  await page.evaluate(() => window.__AGNES__!.act('flashlight'))

  const loaded = await page.evaluate(async () => {
    const t0 = performance.now()
    while (performance.now() - t0 < 8000) {
      const log = window.__AGNES__!.audioLog()
      if (log.filter((line) => line.startsWith('load-ok:')).length >= 6) return log
      await new Promise((r) => setTimeout(r, 100))
    }
    return window.__AGNES__!.audioLog()
  })
  for (const file of files) expect(loaded, loaded.join('\n')).toContain(`load-ok:${file}`)
  for (const file of files) {
    const res = await page.request.get(`/assets/audio/${file}`)
    expect(res.status(), file).toBe(200)
  }

  await page.evaluate(() => window.__AGNES__!.setMove({ forward: 1 }))
  await page.waitForFunction(() => window.__AGNES__!.audioLog().includes('step-start'), null, { timeout: 8000 })
  await page.evaluate(() => window.__AGNES__!.setMove(null))
  await page.waitForFunction(() => window.__AGNES__!.audioLog().includes('step-stop'), null, { timeout: 4000 })

  const clicksBefore = await page.evaluate(() => window.__AGNES__!.audioLog().filter((l) => l === 'flash').length)
  await page.evaluate(() => window.__AGNES__!.act('flashlight'))
  await page.evaluate(() => window.__AGNES__!.act('flashlight'))
  const clicks = await page.evaluate(() => window.__AGNES__!.audioLog().filter((l) => l === 'flash').length)
  expect(clicks).toBeGreaterThan(clicksBefore)
  await shoot(page, testInfo, 'flashlight-beam.png')

  await page.evaluate(() => {
    window.__AGNES__!.placeMonster(20, 4, 7.2)
    window.__AGNES__!.teleport(20, 4, 5.2)
    const p = window.__AGNES__!.snapshot().player
    if (Math.abs(p.yaw) > 0.01) window.__AGNES__!.look(p.yaw, 0)
  })
  await page.waitForFunction(() => window.__AGNES__!.monsterHidden(), null, { timeout: 8000 })

  await page.evaluate(() => window.__AGNES__!.teleport(30, 0, 6))
  await page.waitForFunction(() => window.__AGNES__!.events().jumps.includes('stue102'), null, { timeout: 8000 })
  await page.waitForFunction(() => window.__AGNES__!.audioLog().includes('scream'), null, { timeout: 4000 })
  await shoot(page, testInfo, 'jumpscare-face.png')
  await page.evaluate(() => {
    window.__AGNES__!.teleport(18, 0, 6)
    window.__AGNES__!.teleport(30, 0, 6)
  })
  expect(await page.evaluate(() => window.__AGNES__!.events().jumps.filter((id) => id === 'stue102').length)).toBe(1)

  await page.evaluate(() => {
    window.__AGNES__!.teleport(10.4, 0, 6)
    const p = window.__AGNES__!.snapshot().player
    window.__AGNES__!.look(p.yaw - Math.PI / 2, p.pitch)
    window.__AGNES__!.act('interact')
  })
  await page.waitForFunction(() => window.__AGNES__!.doorOpen('door_rec_pat'), null, { timeout: 8000 })
  await page.waitForFunction(() => window.__AGNES__!.audioLog().includes('shadow'), null, { timeout: 8000 })
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(undefined)))))
  await shoot(page, testInfo, 'shadow-door.png')

  await page.evaluate(() => window.__AGNES__!.teleport(42, 0, 6))
  await page.waitForFunction(() => window.__AGNES__!.audioLog().includes('deep'), null, { timeout: 20000 })
  await page.evaluate(() => {
    const p = window.__AGNES__!.snapshot().player
    window.__AGNES__!.look(p.yaw - 0.7, 0)
  })
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(undefined)))))
  await shoot(page, testInfo, 'slagter-corner.png')

  await page.evaluate(() => window.__AGNES__!.emptyLight())
  await page.waitForFunction(() => window.__AGNES__!.audioLog().includes('metallic'), null, { timeout: 8000 })
  expect(await page.evaluate(() => window.__AGNES__!.snapshot().player.flashlightOn)).toBe(false)

  expect(errors, errors.join('\n')).toEqual([])
})
