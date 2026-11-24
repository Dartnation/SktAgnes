import { expect, test } from '@playwright/test'
import fs from 'node:fs'

const files = [
  'fodtrin-gaaende.mp3',
  'lommelygte-taend-sluk.mp3',
  'metallic.mp3',
  'skrig.mp3',
  'pludselig-skygge-monster.mp3',
  'dyb-lyd.mp3',
  'heard-baggrund.mp3',
  'baggrundslyd-hele-tiden-i-lav.mp3',
]

test.setTimeout(180000)

test('launcher serves every recording and Firefox/Chromium actually plays them', async ({ page, request, browserName }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })

  for (const file of files) {
    const full = await request.get(`/assets/audio/${file}`)
    expect(full.status(), file).toBe(200)
    expect(full.headers()['content-type'] ?? '', file).toContain('audio/mpeg')
    const len = Number(full.headers()['content-length'] ?? '0')
    expect(len, file).toBeGreaterThan(1000)
    expect(full.headers()['accept-ranges'], file).toBe('bytes')
    const cache = full.headers()['cache-control'] ?? ''
    expect(cache.length, file).toBeGreaterThan(0)
    const partial = await request.get(`/assets/audio/${file}`, {
      headers: { Range: 'bytes=0-15' },
    })
    expect(partial.status(), `${file} range`).toBe(206)
    expect(partial.headers()['content-type'] ?? '', file).toContain('audio/mpeg')
    expect(partial.headers()['content-range'] ?? '', file).toContain('bytes 0-15/')
    expect(Number(partial.headers()['content-length'] ?? '0'), file).toBe(16)
    const body = await partial.body()
    expect(body.length, file).toBe(16)
  }

  await page.goto('/?test=1&debug=1')
  await page.locator('#btn-new').click()
  await page.waitForFunction(() => window.__AGNES__?.mode() === 'playing')

  const decoded = await page.evaluate(async (names) => {
    const out: Record<string, { ok: boolean; seconds: number; error: string }> = {}
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    const ctx = new AC()
    await ctx.resume()
    for (const name of names) {
      try {
        const res = await fetch(`assets/audio/${name}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const audio = await ctx.decodeAudioData(await res.arrayBuffer())
        out[name] = { ok: audio.length > 32 && audio.duration > 0.05, seconds: audio.duration, error: '' }
      } catch (err) {
        out[name] = { ok: false, seconds: 0, error: err instanceof Error ? err.message : String(err) }
      }
    }
    await ctx.close()
    return out
  }, files)
  for (const file of files) {
    expect(decoded[file]?.ok, `${file} ${decoded[file]?.error ?? ''}`).toBe(true)
  }

  await page.waitForFunction((names) => {
    const log = window.__AGNES__?.audioLog() ?? []
    return (names as string[]).every((file) => log.includes(`load-ok:${file}`))
  }, files)
  await page.waitForFunction(() => (window.__AGNES__?.audioLog() ?? []).some((line) => line === 'state:running'))
  await page.waitForFunction(() => (window.__AGNES__?.audioLog() ?? []).includes('bed-start'))

  const bed = await page.evaluate(() => window.__AGNES__!.measureBed())
  expect(bed.state, browserName).toBe('running')
  expect(bed.rms, `${browserName} bed rms ${bed.rms}`).toBeGreaterThan(0.02)
  expect(bed.peak, `${browserName} bed peak ${bed.peak}`).toBeGreaterThan(0.04)
  expect(bed.peak, `${browserName} bed peak ${bed.peak}`).toBeLessThan(0.7)

  const kinds = ['scream', 'shadow', 'deep', 'metallic', 'flash', 'step'] as const
  const floor: Record<string, { rms: number; peak: number }> = {
    scream: { rms: 0.02, peak: 0.12 },
    shadow: { rms: 0.02, peak: 0.12 },
    deep: { rms: 0.02, peak: 0.12 },
    metallic: { rms: 0.02, peak: 0.12 },
    flash: { rms: 0.003, peak: 0.08 },
    step: { rms: 0.008, peak: 0.05 },
  }
  const levels: Record<string, { rms: number; peak: number; state: string; played: boolean }> = {}
  for (const kind of kinds) {
    const heard = await page.evaluate((name) => window.__AGNES__!.audition(name), kind)
    levels[kind] = heard
    expect(heard.state, `${browserName} ${kind}`).toBe('running')
    expect(heard.played, `${browserName} ${kind} blev ikke startet`).toBe(true)
    expect(heard.rms, `${browserName} ${kind} rms ${heard.rms}`).toBeGreaterThan(floor[kind].rms)
    expect(heard.peak, `${browserName} ${kind} peak ${heard.peak}`).toBeGreaterThan(floor[kind].peak)
  }

  fs.writeFileSync(
    testInfo.outputPath(`audio-levels-${browserName}.json`),
    JSON.stringify({ browser: browserName, bed, levels, decoded }, null, 2),
  )
  expect(errors, errors.join('\n')).toEqual([])
})
