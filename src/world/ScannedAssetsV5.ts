import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import type { PropDef } from './data'

/**
 * Optional, locally hosted, legally vetted CC0 glTF hero-asset replacements.
 * Not a gameplay system: existing gameplay props retain their ID, location,
 * collider, interaction logic and fallback procedural 3D model.
 */
const ASSETS: Record<string, string> = {
  pat_wheelchair: 'wheelchair_01',
  rec_records: 'vintage_wooden_drawer_01',
  ark_records: 'vintage_wooden_drawer_01',
  op_sparecase: 'steel_frame_shelves_01',
  slag_shelf: 'steel_frame_shelves_01',
  kael_shelf: 'steel_frame_shelves_01',
  slag_cart: 'tool_cart',
  lab_cart: 'tool_cart',
  kael_cart: 'tool_cart',
  kael_spares: 'utility_box_01',
}
const loader = new GLTFLoader()

export function scannedAssetId(propId: string): string | null {
  return ASSETS[propId] ?? null
}

export function mountScannedAssetV5(
  scene: THREE.Scene,
  p: PropDef,
  fallback: THREE.Group,
): () => void {
  const id = scannedAssetId(p.id)
  if (!id) return () => undefined
  let disposed = false
  let loaded: THREE.Group | null = null
  const url = '/models/polyhaven/' + id + '/' + id + '_1k.gltf'
  loader.load(
    url,
    (gltf) => {
      const source = gltf.scene
      if (disposed) {
        disposeAsset(source)
        return
      }
      const bounds = new THREE.Box3().setFromObject(source)
      const span = bounds.getSize(new THREE.Vector3())
      if (span.x < 0.01 || span.y < 0.01 || span.z < 0.01) {
        console.warn('CC0 glTF has invalid dimensions; keeping existing art:', id)
        disposeAsset(source)
        return
      }
      // Preserve old footprint, align on the original scene floor; no collider.
      const fit = 0.93 * Math.min(
        p.w / span.x,
        p.h / span.y,
        p.d / span.z,
      )
      if (!Number.isFinite(fit) || fit <= 0) {
        disposeAsset(source)
        return
      }
      source.scale.multiplyScalar(fit)
      const scaledBounds = new THREE.Box3().setFromObject(source)
      const middle = scaledBounds.getCenter(new THREE.Vector3())
      source.position.sub(new THREE.Vector3(middle.x, scaledBounds.min.y, middle.z))
      const anchor = new THREE.Group()
      anchor.position.copy(fallback.position)
      anchor.rotation.copy(fallback.rotation)
      anchor.name = 'PolyHaven_CC0_' + p.id
      anchor.add(source)
      anchor.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true
          object.receiveShadow = true
        }
      })
      scene.add(anchor)
      loaded = anchor
      fallback.visible = false
    },
    undefined,
    (error) => {
      // Optional scan unavailable – original model stays fully visible.
      console.warn('Optional local CC0 scan unavailable, using procedural art:', id, error)
    },
  )
  return () => {
    disposed = true
    if (loaded) {
      scene.remove(loaded)
      disposeAsset(loaded)
      loaded = null
    }
    scene.remove(fallback)
    fallback.traverse(object => {
      if (object instanceof THREE.Mesh) object.geometry.dispose()
    })
  }
}

function disposeAsset(group: THREE.Object3D): void {
  const geometries = new Set<THREE.BufferGeometry>()
  const materials = new Set<THREE.Material>()
  const textures = new Set<THREE.Texture>()
  group.traverse(object => {
    if (!(object instanceof THREE.Mesh)) return
    geometries.add(object.geometry)
    const used = Array.isArray(object.material) ? object.material : [object.material]
    for (const mat of used) {
      materials.add(mat)
      const standard = mat as THREE.MeshStandardMaterial
      for (const tex of [
        standard.map, standard.normalMap, standard.roughnessMap,
        standard.metalnessMap, standard.aoMap, standard.emissiveMap,
        standard.alphaMap,
      ]) if (tex) textures.add(tex)
    }
  })
  for (const g of geometries) g.dispose()
  for (const tex of textures) tex.dispose()
  for (const m of materials) m.dispose()
}
