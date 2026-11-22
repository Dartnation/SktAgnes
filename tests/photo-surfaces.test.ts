import { describe, expect, it } from 'vitest'
import { SURFACE_ASSETS } from '../src/world/photoSurfaces'

describe('CC0-overflader', () => {
  it('peger på navngivne Poly Haven-filer uden at bruge samme slot to gange', () => {
    const slots = new Set<string>()
    expect(SURFACE_ASSETS.length).toBe(10)
    for (const asset of SURFACE_ASSETS) {
      expect(asset.id).toMatch(/^[a-z0-9_]+$/)
      expect(asset.page).toBe(`https://polyhaven.com/a/${asset.id}`)
      expect(asset.author.length).toBeGreaterThan(2)
      for (const slot of asset.slots) {
        expect(slots.has(slot)).toBe(false)
        slots.add(slot)
      }
    }
    expect(slots.size).toBeGreaterThanOrEqual(12)
  })
})
