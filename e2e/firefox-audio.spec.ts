import { expect, test } from '@playwright/test'

test.setTimeout(120000)

test('menu is a corridor and the mix is audible without crackle', async ({ page, browserName }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/?test=1')
  await expect(page.locator('h1')).toHaveText('SKT. AGNES')
  await page.waitForTimeout(400)
  await page.evaluate(() => window.__AGNES__?.freeze?.(true))
  await page.evaluate(() => {
    const c = document.querySelector('canvas') as HTMLCanvasElement | null
    const gl = c?.getContext('webgl2') || c?.getContext('webgl')
    if (!gl) return
    gl.readPixels(8, 8, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4))
  })
  const menuShot = testInfo.outputPath(browserName === 'firefox' ? 'menu-firefox.png' : 'menu-chromium.png')
  await page.screenshot({ path: menuShot, timeout: 20000 })
  await page.evaluate(() => window.__AGNES__?.freeze?.(false))

  await page.locator('#btn-new').click()
  await page.waitForFunction(() => window.__AGNES__?.mode() === 'playing')
  await page.mouse.click(640, 360)
  await page.evaluate(() => window.__AGNES__!.act('flashlight'))
  await page.waitForFunction(() => window.__AGNES__!.audioLog().includes('bed-start'), null, { timeout: 8000 })
  if (browserName === 'firefox') {
    await page.evaluate(() => window.__AGNES__?.freeze?.(true))
    await page.evaluate(() => {
      const c = document.querySelector('canvas') as HTMLCanvasElement | null
      const gl = c?.getContext('webgl2') || c?.getContext('webgl')
      if (!gl) return
      gl.readPixels(8, 8, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4))
    })
    await page.screenshot({ path: testInfo.outputPath('minimap-firefox.png'), timeout: 20000 })
    await page.evaluate(() => window.__AGNES__?.freeze?.(false))
  }
  const quiet = await page.evaluate(() => window.__AGNES__!.probe(700))
  if (quiet.state === 'running') {
    expect(quiet.peak, `${browserName} bed ${quiet.peak}`).toBeGreaterThan(0.005)
    expect(quiet.peak, `${browserName} bed ${quiet.peak}`).toBeLessThan(0.85)
    expect(quiet.jumps, `${browserName} bed jumps ${quiet.jumps}`).toBeLessThan(40)
  }

  const mix = await page.evaluate(async () => {
    window.__AGNES__!.ping('flash')
    window.__AGNES__!.ping('shadow')
    window.__AGNES__!.ping('scream')
    window.__AGNES__!.ping('deep')
    return window.__AGNES__!.probe(1200)
  })
  const trace = await page.evaluate(() => window.__AGNES__!.audioLog().slice(-16))
  if (mix.state === 'running') {
    expect(mix.peak, `${browserName} peak ${mix.peak}`).toBeGreaterThan(0.02)
    expect(mix.peak, `${browserName} peak ${mix.peak}`).toBeLessThan(0.98)
    expect(mix.jumps, `${browserName} jumps ${mix.jumps}`).toBeLessThan(200)
  } else {
    expect(mix.state, `${browserName} ${trace.join(' | ')}`).toBe('suspended')
    expect(browserName).toBe('firefox')
  }

  const log = await page.evaluate(() => window.__AGNES__!.audioLog())
  for (const kind of ['flash', 'shadow', 'scream', 'deep']) expect(log, browserName).toContain(kind)
  expect(errors, errors.join('\n')).toEqual([])
})
