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
  // rec_records and ark_records stay as one interactive cabinet. The scanned
  // chest is a separate mesh and was splitting into floating drawers on top
  // of the real drawers.
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

/**
 * Mount a purely decorative hero object at an authored world anchor.
 * This never hides/changes collision props, lighting, interactive entities or AI.
 * Its position is the lowest point of the scanned asset, ideal for lamps/floor props.
 */
export function mountScannedDecorV5(
  scene: THREE.Scene,
  assetId: string,
  position: THREE.Vector3,
  bounds: { width: number; height: number; depth: number },
  yaw = 0,
): () => void {
  if (!/^[a-z0-9_]+$/.test(assetId)) throw new Error('Invalid CC0 asset ID')
  let disposed = false
  let mounted: THREE.Group | null = null
  loader.load(
    '/models/polyhaven/' + assetId + '/' + assetId + '_1k.gltf',
    (gltf) => {
      const model = gltf.scene
      if (disposed) { disposeAsset(model); return }
      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3())
      const fit = 0.94 * Math.min(
        bounds.width / size.x, bounds.height / size.y, bounds.depth / size.z,
      )
      if (![size.x, size.y, size.z, fit].every(x => Number.isFinite(x) && x > 0.0001)) {
        disposeAsset(model)
        return
      }
      model.scale.multiplyScalar(fit)
      const fitted = new THREE.Box3().setFromObject(model)
      const center = fitted.getCenter(new THREE.Vector3())
      model.position.sub(new THREE.Vector3(center.x, fitted.min.y, center.z))
      const anchor = new THREE.Group()
      anchor.name = 'PolyHaven_VisualDecor_' + assetId
      anchor.position.copy(position)
      anchor.rotation.y = yaw
      anchor.add(model)
      anchor.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.castShadow = true
          obj.receiveShadow = true
        }
      })
      scene.add(anchor)
      mounted = anchor
    },
    undefined,
    error => { console.warn('CC0 visual decoration was unavailable:', assetId, error) },
  )
  return () => {
    disposed = true
    if (mounted) {
      scene.remove(mounted)
      disposeAsset(mounted)
      mounted = null
    }
  }
}

/**
 * The existing first-person arm remains in place. Only the primitive torch
 * housing is replaced, after a verified local scanned glTF has loaded.
 * No change to flashlight spotlight, battery, interaction or camera movement.
 */
export function replaceCameraFlashlightV5(root: THREE.Group, housing: THREE.Group): void {
  loader.load(
    '/models/polyhaven/vintage_flashlight/vintage_flashlight_1k.gltf',
    (gltf) => {
      if (!root.parent) { disposeAsset(gltf.scene); return }
      const model = gltf.scene
      const before = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3())
      if (![before.x, before.y, before.z].every(v => Number.isFinite(v) && v > 0.001)) {
        disposeAsset(model)
        return
      }
      // The scan may be authored along any axis. Align its longest axis to
      // the camera torch's -Z direction before aspect-preserving scale.
      // This vintage light keeps its glass on +Z, which is back toward the
      // camera in the viewmodel, so that case is turned 180 degrees.
      const longX = before.x > before.y && before.x > before.z
      const longY = before.y > before.x && before.y > before.z
      if (longX) model.rotation.y = Math.PI / 2
      else if (longY) model.rotation.x = Math.PI / 2
      if (!longX) model.rotateY(Math.PI)
      const size = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3())
      const fit = Math.min(0.32 / size.z, 0.087 / size.x, 0.087 / size.y)
      if (!Number.isFinite(fit) || fit <= 0) { disposeAsset(model); return }
      model.scale.multiplyScalar(fit)
      const fitted = new THREE.Box3().setFromObject(model)
      const center = fitted.getCenter(new THREE.Vector3())
      model.position.sub(center)
      model.position.z -= 0.022
      model.traverse(obj => {
        if (!(obj instanceof THREE.Mesh)) return
        obj.frustumCulled = false
        obj.renderOrder = 3
        // Keep scanned texture maps; only show hand-held geometry in front
        // of level geometry, matching existing viewmodel presentation.
        const list = Array.isArray(obj.material) ? obj.material : [obj.material]
        const adapted = list.map(mat => {
          const next = mat.clone()
          next.depthTest = false
          next.depthWrite = false
          const glass = obj.name.toLowerCase().includes('glass')
          if (glass) {
            next.color = new THREE.Color('#d5d0c4')
            next.transparent = true
            next.opacity = 0.62
            next.roughness = 0.18
            next.metalness = 0.05
          } else {
            next.color = new THREE.Color('#3c3834')
            next.roughness = 0.58
            next.metalness = 0.62
            if ('emissive' in next) next.emissive = new THREE.Color('#000000')
          }
          next.needsUpdate = true
          return next
        })
        obj.material = Array.isArray(obj.material) ? adapted : adapted[0]
      })
      root.add(model)
      housing.visible = false
    },
    undefined,
    err => { console.warn('Optional CC0 hand torch unavailable; preserving old torch:', err) },
  )
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
