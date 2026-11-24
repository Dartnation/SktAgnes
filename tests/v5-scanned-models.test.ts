import { describe, expect, it } from 'vitest'
// @ts-ignore: Test runner supplies Node; browser-only tsconfig omits @types/node.
import fs from 'node:fs'
// @ts-ignore: Test runner supplies Node; browser-only tsconfig omits @types/node.
import path from 'node:path'
import { PROPS } from '../src/world/data'
import { scannedAssetId } from '../src/world/ScannedAssetsV5'

describe('V5 licensed scanned meshes – art-only contract', () => {
  const entries = [
    ['pat_wheelchair', 'wheelchair_01'],
    ['rec_records', 'vintage_wooden_drawer_01'],
    ['ark_records', 'vintage_wooden_drawer_01'],
    ['op_sparecase', 'steel_frame_shelves_01'],
    ['slag_shelf', 'steel_frame_shelves_01'],
    ['kael_shelf', 'steel_frame_shelves_01'],
    ['slag_cart', 'tool_cart'],
    ['lab_cart', 'tool_cart'],
    ['kael_cart', 'tool_cart'],
    ['kael_spares', 'utility_box_01'],
  ] as const

  it('maps exclusively existing static visual props, not gameplay interactions', () => {
    const all = PROPS.map(p => p.id)
    for (const [id, asset] of entries) {
      expect(all).toContain(id)
      expect(scannedAssetId(id)).toBe(asset)
    }
    for (const id of [
      'ark_safe', 'rec_desk', 'pat_locker', 'op_table', 'kam_bed',
    ]) expect(scannedAssetId(id)).toBeNull()
    expect(PROPS.find(p => p.id === 'pat_wheelchair')?.kind).toBe('wheelchair')
  })

  it('includes a complete, offline, CC0 1K glTF bundle and manifest for every mapped asset', () => {
    const root = path.resolve('public/models/polyhaven')
    const manifest = JSON.parse(fs.readFileSync(path.join(root, 'asset-manifest.json'), 'utf8')) as Array<{
      id: string; license: string; hashes: Record<string, string>;
    }>
    for (const asset of new Set(entries.map(x => x[1]))) {
      const record = manifest.find(x => x.id === asset)!
      expect(record).toBeDefined()
      expect(record.license).toBe('CC0')
      expect(Object.keys(record.hashes).length).toBeGreaterThanOrEqual(4)
      const file = path.join(root, asset, asset + '_1k.gltf')
      const gltf = JSON.parse(fs.readFileSync(file, 'utf8')) as {
        images?: Array<{ uri?: string }>; buffers?: Array<{ uri?: string }>
      }
      expect(gltf.buffers?.length).toBeGreaterThan(0)
      for (const dep of [...(gltf.buffers ?? []), ...(gltf.images ?? [])]) {
        if (!dep.uri || dep.uri.startsWith('data:')) continue
        expect(fs.existsSync(path.join(root, asset, dep.uri))).toBe(true)
      }
    }
  })
})
