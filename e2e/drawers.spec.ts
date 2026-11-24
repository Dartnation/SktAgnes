import { expect, test } from '@playwright/test'
import fs from 'node:fs'
import path from 'node:path'

test('skuffer og skabe kan åbnes, tømmes én gang og huskes', async ({ page }, testInfo) => {
  const errors: string[] = []
  page.on('pageerror', (err) => errors.push(err.message))
  page.on('crash', () => errors.push('page-crash'))
  await page.goto('/?test=1')
  await page.locator('#btn-new').click()
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('playing')

  const shot = async (name: string) => {
    const file = testInfo.outputPath(`${name}.png`)
    await page.screenshot({ path: file })
    const kept = path.resolve('docs/g2-shots', `${name}.png`)
    fs.mkdirSync(path.dirname(kept), { recursive: true })
    fs.copyFileSync(file, kept)
  }

  let pitch = 0
  const stand = (x: number, y: number, z: number, yaw: number, nextPitch = 0) => page.evaluate(({ x, y, z, yaw, dy }) => {
    const g = window.__AGNES__!
    g.teleport(x, y, z)
    g.face(yaw)
    if (dy) g.look(0, dy)
    return true
  }, { x, y, z, yaw, dy: pitch - nextPitch }).then(() => {
    pitch = nextPitch
  })

  await stand(4, 0, 7.35, 0, -0.5)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('rec_desk_drawer')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.container('rec_desk_drawer')?.progress ?? 0)).toBeGreaterThan(0.999)
  await shot('reception-skuffe-aaben')
  expect(await page.evaluate(() => window.__AGNES__!.snapshot().inventory.some((slot) => slot.itemId === 'note_log'))).toBe(false)

  await stand(8.8, 0, 3.9, Math.PI, 0)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('rec_file_empty')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.container('rec_file_empty')?.target ?? '')).toBe('open')

  await stand(8.8, 0, 3.9, Math.PI, -0.62)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('rec_file_battery')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.container('rec_file_battery')?.progress ?? 0)).toBeGreaterThan(0.999)
  const before = await page.evaluate(() => window.__AGNES__!.snapshot().inventory.filter((slot) => slot.itemId === 'battery').reduce((n, slot) => n + slot.count, 0))
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.snapshot().inventory.filter((slot) => slot.itemId === 'battery').reduce((n, slot) => n + slot.count, 0))).toBe(before + 1)
  await shot('reception-arkivskab')

  await stand(8, 4, 4.3, Math.PI)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('ark_table_drawer')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.container('ark_table_drawer')?.progress ?? 0)).toBeGreaterThan(0.999)
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.snapshot().inventory.some((slot) => slot.itemId === 'note_code'))).toBe(true)
  await page.evaluate(() => window.__AGNES__!.act('resume'))
  await shot('arkiv-skuffe')

  await stand(1.35, 4, 8.7, 0)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.prompt ?? '')).toBe('Låst skab')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  expect(await page.evaluate(() => window.__AGNES__!.container('ark_locked_cabinet')?.target)).toBe('closed')
  await page.evaluate(() => window.__AGNES__!.give('key_arkiv'))
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.container('ark_locked_cabinet')?.target ?? '')).toBe('open')
  await shot('arkiv-laast-skab')

  await stand(44.2, 4, 7.35, 0)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('pers_side_drawer')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.container('pers_side_drawer')?.progress ?? 0)).toBeGreaterThan(0.999)
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await shot('personalerum-skuffe')

  await page.evaluate(() => window.__AGNES__!.save(2))
  await page.evaluate(() => window.__AGNES__!.restart())
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.mode())).toBe('playing')
  await page.evaluate(() => window.__AGNES__!.load(2))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.snapshot().inventory.some((slot) => slot.itemId === 'note_log'))).toBe(false)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.snapshot().inventory.some((slot) => slot.itemId === 'battery'))).toBe(true)

  await stand(26.8, 0, 4.15, Math.PI)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('op_fuse_drawer')
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.container('op_fuse_drawer')?.target ?? '')).toBe('open')

  await stand(2.6, 8, 4.15, Math.PI)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('kael_note_drawer')

  await stand(30.8, 4, 4.15, Math.PI)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('obd_file_drawer')

  await stand(30, 8, 4.2, Math.PI)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('obs_empty_drawer')

  await stand(38.1, 8, 4.1, Math.PI)
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.aim()?.id ?? '')).toBe('kam_empty_drawer')

  await stand(14, 0, 4.4, Math.PI)
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.hiding())).toBe('hide_pat')
  await page.evaluate(() => window.__AGNES__!.tick(18))
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  await expect.poll(() => page.evaluate(() => window.__AGNES__!.hiding())).toBeNull()

  await stand(4, 0, 7.35, 0, -0.5)
  await expect.poll(() => page.evaluate(() => {
    const drawer = window.__AGNES__!.container('rec_desk_drawer')
    return drawer ? drawer.progress < 0.02 || drawer.progress > 0.98 : false
  })).toBe(true)
  await page.evaluate(() => window.__AGNES__!.act('interact'))
  const heard = await page.evaluate(() => window.__AGNES__!.signals().some((signal) => signal.type === 'noiseEmitted' && signal.kind === 'door' && Math.abs(signal.x - 4) < 1.5))
  expect(heard).toBe(true)
  expect(await page.evaluate(() => window.__AGNES__!.monster().state)).not.toMatch(/Chase|Attack/)

  expect(errors).toEqual([])
})
