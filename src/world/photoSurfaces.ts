import * as THREE from 'three'
import type { Materials } from './textures'

/** CC0 textures from Poly Haven, 1K JPEG. https://polyhaven.com/license */
export interface SurfaceAsset {
  id: string
  author: string
  page: string
  slots: (keyof Materials)[]
  /** Keeps the hospital dark. The photo supplies the detail. */
  tint: string
  normal: number
  /** Extra repeats. Carpet photos are close-ups and otherwise read as gravel. */
  repeat?: number
}

export const SURFACE_ASSETS: SurfaceAsset[] = [
  { id: 'worn_planks', author: 'Dimitrios Savva', page: 'https://polyhaven.com/a/worn_planks', slots: ['wood'], tint: '#e4d0b4', normal: 0.55 },
  { id: 'brown_planks_05', author: 'Rob Tuytel', page: 'https://polyhaven.com/a/brown_planks_05', slots: ['panel', 'door', 'trim'], tint: '#c9aa86', normal: 0.4 },
  { id: 'beige_wall_001', author: 'Dimitrios Savva, Rico Cilliers', page: 'https://polyhaven.com/a/beige_wall_001', slots: ['plaster'], tint: '#ddd4c8', normal: 0.35 },
  { id: 'painted_plaster_wall', author: 'Amal Kumar', page: 'https://polyhaven.com/a/painted_plaster_wall', slots: ['ceiling'], tint: '#c8c2b8', normal: 0.3 },
  { id: 'concrete_wall_001', author: 'Dimitrios Savva, Rico Cilliers', page: 'https://polyhaven.com/a/concrete_wall_001', slots: ['damp'], tint: '#aeb5ae', normal: 0.45 },
  { id: 'red_brick_03', author: 'Rob Tuytel', page: 'https://polyhaven.com/a/red_brick_03', slots: ['brick'], tint: '#e0b5a4', normal: 0.7 },
  { id: 'old_linoleum_flooring_01', author: 'Charlotte Baglioni', page: 'https://polyhaven.com/a/old_linoleum_flooring_01', slots: ['tileFloor'], tint: '#d5d0c6', normal: 0.25 },
  { id: 'long_white_tiles', author: 'Jenelle van Heerden, Sergej Majboroda', page: 'https://polyhaven.com/a/long_white_tiles', slots: ['tileWall'], tint: '#e4ebe6', normal: 0.35 },
  { id: 'concrete_floor_worn_001', author: 'Dimitrios Savva, Rico Cilliers', page: 'https://polyhaven.com/a/concrete_floor_worn_001', slots: ['concrete', 'stone'], tint: '#c9c5bc', normal: 0.55 },
  { id: 'dirty_carpet', author: 'Rohit Seervi', page: 'https://polyhaven.com/a/dirty_carpet', slots: ['carpet'], tint: '#b3a898', normal: 0.2, repeat: 3 },
]

export interface SurfaceSet {
  map: THREE.Texture
  rough: THREE.Texture
  normal: THREE.Texture
}

const disposed = new Set<THREE.Texture>()

export async function loadSurfacePhotos(): Promise<Map<string, SurfaceSet>> {
  const loader = new THREE.TextureLoader()
  const out = new Map<string, SurfaceSet>()
  await Promise.all(SURFACE_ASSETS.map(async (asset) => {
    const [map, rough, normal] = await Promise.all([
      loader.loadAsync(`/textures/cc0/${asset.id}_diff.jpg`),
      loader.loadAsync(`/textures/cc0/${asset.id}_rough.jpg`),
      loader.loadAsync(`/textures/cc0/${asset.id}_nor_gl.jpg`),
    ])
    prepare(map, true, asset.repeat ?? 1)
    prepare(rough, false, asset.repeat ?? 1)
    prepare(normal, false, asset.repeat ?? 1)
    out.set(asset.id, { map, rough, normal })
  }))
  return out
}

export function applySurfacePhotos(materials: Materials, photos: Map<string, SurfaceSet>): number {
  let applied = 0
  for (const asset of SURFACE_ASSETS) {
    const photo = photos.get(asset.id)
    if (!photo) continue
    for (const slot of asset.slots) {
      const mat = materials[slot]
      if (!(mat instanceof THREE.MeshStandardMaterial)) continue
      drop(mat.map)
      drop(mat.roughnessMap)
      drop(mat.normalMap)
      mat.map = photo.map
      mat.roughnessMap = photo.rough
      mat.normalMap = photo.normal
      mat.normalScale.set(asset.normal, asset.normal)
      mat.color.set(asset.tint)
      mat.needsUpdate = true
      applied++
    }
  }
  return applied
}

function prepare(tex: THREE.Texture, color: boolean, repeat: number): void {
  tex.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeat, repeat)
  tex.anisotropy = 8
  tex.needsUpdate = true
}

function drop(tex: THREE.Texture | null): void {
  if (!tex || disposed.has(tex)) return
  disposed.add(tex)
  tex.dispose()
}
