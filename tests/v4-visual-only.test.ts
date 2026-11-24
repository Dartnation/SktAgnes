import { describe, expect, it } from 'vitest'
import { CATALOG } from '../src/systems/catalog'
import { artworkKind, itemArtwork } from '../src/ui/ItemArtwork'
import { CONTAINERS } from '../src/world/containerCatalog'
import { buildContainerRig, applyContainerPose } from '../src/world/ContainerView'

describe('V4 design-only illustration and 3D presentation contract', () => {
  it('renders an offline original pictogram for every existing catalogue item', () => {
    for (const item of Object.values(CATALOG)) {
      const svg = itemArtwork(item.name)
      expect(svg).toContain('<svg')
      expect(svg).toContain('aria-hidden="true"')
      expect(svg).not.toContain('href="http')
      expect(svg).not.toContain('<image')
      expect(svg).not.toContain(item.name)
    }
    expect(artworkKind('Batteri')).toBe('battery')
    expect(artworkKind('Blå sikring')).toBe('fuse')
    expect(artworkKind('Hovednøgle')).toBe('key')
    expect(artworkKind('Majas brev')).toBe('document')
  })

  it('preserves the existing drawer mover and its complete open animation distance', () => {
    const place = CONTAINERS.find((p) => p.spec.kind === 'drawer')!
    const rig = buildContainerRig(place)
    expect(rig.id).toBe(place.spec.id)
    expect(rig.root.name).toBe('VisualContainer_' + place.spec.id)
    expect(rig.mover.name).toBe('drawer_mover')
    expect(rig.root.children.length).toBeGreaterThan(4)
    applyContainerPose(place.spec, { progress: 1, target: 'open', takenIds: [] }, rig.mover)
    expect(rig.mover.position.z).toBeCloseTo(place.spec.slideDistance ?? 0.28)
    applyContainerPose(place.spec, { progress: 0, target: 'closed', takenIds: [] }, rig.mover)
    expect(rig.mover.position.z).toBe(0)
  })

  it('preserves the existing cabinet hinge rotation on the original pivot', () => {
    const place = CONTAINERS.find((p) => p.spec.kind === 'cabinet')!
    const rig = buildContainerRig(place)
    expect(rig.id).toBe(place.spec.id)
    expect(rig.mover.name).toBe('cabinet_hinge')
    expect(rig.root.children.length).toBeGreaterThan(5)
    applyContainerPose(place.spec, { progress: 1, target: 'open', takenIds: [] }, rig.mover)
    expect(rig.mover.rotation.y).toBeCloseTo(-(place.spec.swingRadians ?? Math.PI * 0.53))
    applyContainerPose(place.spec, { progress: 0, target: 'closed', takenIds: [] }, rig.mover)
    expect(rig.mover.rotation.y).toBe(0)
  })
})
