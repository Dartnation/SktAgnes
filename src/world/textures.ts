import * as THREE from 'three'
import { mulberry32 } from '../core/math'

function canvas(size = 512): { c: HTMLCanvasElement; g: CanvasRenderingContext2D; size: number } {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')
  if (!g) throw new Error('Canvas 2D er ikke tilgængelig')
  return { c, g, size }
}

function noise(rng: () => number, size: number): Float32Array {
  const g = new Float32Array(size * size)
  for (let i = 0; i < g.length; i++) g[i] = rng()
  return g
}

function sample(n: Float32Array, size: number, x: number, y: number): number {
  const xi = ((x % size) + size) % size
  const yi = ((y % size) + size) % size
  const x0 = Math.floor(xi)
  const y0 = Math.floor(yi)
  const tx = xi - x0
  const ty = yi - y0
  const x1 = (x0 + 1) % size
  const y1 = (y0 + 1) % size
  const a = n[y0 * size + x0]
  const b = n[y0 * size + x1]
  const c = n[y1 * size + x0]
  const d = n[y1 * size + x1]
  return a + (b - a) * tx + (c - a) * ty + (a - b - c + d) * tx * ty
}

function fbm(n: Float32Array, size: number, x: number, y: number): number {
  let v = 0
  let a = 0.5
  let f = 1
  for (let i = 0; i < 5; i++) {
    v += a * sample(n, size, (x * f) % size, (y * f) % size)
    f *= 2
    a *= 0.5
  }
  return v
}

function texOf(c: HTMLCanvasElement, repeat = true, color = true): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c)
  t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace
  t.wrapS = t.wrapT = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping
  t.anisotropy = 4
  t.needsUpdate = true
  return t
}

function cracks(g: CanvasRenderingContext2D, rng: () => number, size: number, count: number, alpha: number) {
  g.strokeStyle = `rgba(20,16,14,${alpha})`
  g.lineWidth = 1
  for (let i = 0; i < count; i++) {
    let x = rng() * size
    let y = rng() * size
    g.beginPath()
    g.moveTo(x, y)
    const steps = 6 + Math.floor(rng() * 14)
    for (let s = 0; s < steps; s++) {
      x += (rng() - 0.5) * 28
      y += (rng() - 0.3) * 22
      g.lineTo(x, y)
    }
    g.stroke()
  }
}

export interface TexSet {
  map: THREE.CanvasTexture
  rough: THREE.CanvasTexture
}

function pair(paint: (g: CanvasRenderingContext2D, size: number, n: Float32Array, rng: () => number) => void, seed: number): TexSet {
  const rng = mulberry32(seed)
  const n = noise(rng, 128)
  const albedo = canvas()
  paint(albedo.g, albedo.size, n, rng)
  const rough = canvas(256)
  const rn = noise(mulberry32(seed ^ 0x9e3779b9), 64)
  const img = rough.g.createImageData(256, 256)
  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      const f = fbm(rn, 64, x / 4, y / 4)
      const v = Math.max(0, Math.min(255, 150 + f * 90))
      const i = (y * 256 + x) * 4
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v
      img.data[i + 3] = 255
    }
  }
  rough.g.putImageData(img, 0, 0)
  return { map: texOf(albedo.c, true, true), rough: texOf(rough.c, true, false) }
}

export interface Materials {
  plaster: THREE.MeshStandardMaterial
  damp: THREE.MeshStandardMaterial
  brick: THREE.MeshStandardMaterial
  panel: THREE.MeshStandardMaterial
  tileWall: THREE.MeshStandardMaterial
  concrete: THREE.MeshStandardMaterial
  wood: THREE.MeshStandardMaterial
  stone: THREE.MeshStandardMaterial
  carpet: THREE.MeshStandardMaterial
  tileFloor: THREE.MeshStandardMaterial
  metal: THREE.MeshStandardMaterial
  fabric: THREE.MeshStandardMaterial
  ceiling: THREE.MeshStandardMaterial
  trim: THREE.MeshStandardMaterial
  door: THREE.MeshStandardMaterial
  blood: THREE.MeshStandardMaterial
  glass: THREE.MeshStandardMaterial
  eye: THREE.MeshStandardMaterial
  monster: THREE.MeshStandardMaterial
  dispose(): void
}

function std(map: THREE.CanvasTexture, rough: THREE.CanvasTexture, color: string, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) {
  return new THREE.MeshStandardMaterial({
    map,
    roughnessMap: rough,
    color,
    roughness: 0.92,
    metalness: 0.02,
    ...extra,
  })
}

export function createMaterials(): Materials {
  const plaster = pair((g, size, n) => {
    g.fillStyle = '#8c847a'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.35, y * 0.35)
        const grime = Math.min(1, y / size) * 0.35 + (y > size * 0.82 ? (y / size - 0.82) * 1.4 : 0)
        const stain = Math.exp(-((x - 180) ** 2 + (y - 300) ** 2) / 18000) * 0.25
        const i = (y * size + x) * 4
        const shade = 0.78 + f * 0.28 - grime * 0.45 - stain
        img.data[i] *= shade
        img.data[i + 1] *= shade * 0.98
        img.data[i + 2] *= shade * 0.94
      }
    }
    g.putImageData(img, 0, 0)
    cracks(g, mulberry32(3), size, 18, 0.35)
  }, 11)

  const damp = pair((g, size, n) => {
    g.fillStyle = '#667064'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.4, y * 0.5)
        const drip = Math.sin(x * 0.2) * 0.5 + 0.5
        const wet = y / size
        const i = (y * size + x) * 4
        const shade = 0.7 + f * 0.25 - wet * 0.35 * drip
        img.data[i] = img.data[i] * shade * 0.85
        img.data[i + 1] = img.data[i + 1] * shade
        img.data[i + 2] = img.data[i + 2] * shade * 0.8
      }
    }
    g.putImageData(img, 0, 0)
  }, 19)

  const brick = pair((g, size) => {
    g.fillStyle = '#4a302c'
    g.fillRect(0, 0, size, size)
    const bw = 64
    const bh = 30
    for (let row = 0; row < size / bh + 1; row++) {
      for (let col = 0; col < size / bw + 2; col++) {
        const off = row % 2 ? bw / 2 : 0
        const shade = 90 + ((row * 13 + col * 7) % 40)
        g.fillStyle = `rgb(${shade + 40},${shade * 0.45},${shade * 0.38})`
        g.fillRect(col * bw - off + 2, row * bh + 2, bw - 4, bh - 4)
      }
    }
    cracks(g, mulberry32(8), size, 8, 0.4)
  }, 23)

  const panel = pair((g, size, n) => {
    g.fillStyle = '#6b5342'
    g.fillRect(0, 0, size, size)
    g.strokeStyle = 'rgba(30,20,12,0.45)'
    for (let x = 0; x < size; x += 96) {
      g.strokeRect(x + 8, 8, 80, size - 16)
      g.strokeRect(x + 16, 20, 64, size - 40)
    }
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.8, y * 0.15)
        const i = (y * size + x) * 4
        const s = 0.85 + f * 0.2
        img.data[i] *= s
        img.data[i + 1] *= s
        img.data[i + 2] *= s * 0.9
      }
    }
    g.putImageData(img, 0, 0)
  }, 29)

  const tileWall = pair((g, size) => {
    g.fillStyle = '#8a8780'
    g.fillRect(0, 0, size, size)
    const s = 64
    for (let y = 0; y < size; y += s) {
      for (let x = 0; x < size; x += s) {
        const dirty = ((x * 3 + y * 5) % 17) / 40
        g.fillStyle = `rgba(60,58,52,${0.05 + dirty})`
        g.fillRect(x + 2, y + 2, s - 4, s - 4)
        if ((x + y) % (s * 5) === 0) {
          g.strokeStyle = 'rgba(40,30,28,0.45)'
          g.strokeRect(x + 8, y + 8, s - 16, s - 16)
        }
      }
    }
  }, 31)

  const concrete = pair((g, size, n) => {
    g.fillStyle = '#6a6762'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.5, y * 0.5)
        const i = (y * size + x) * 4
        const s = 0.75 + f * 0.4
        img.data[i] *= s
        img.data[i + 1] *= s
        img.data[i + 2] *= s
      }
    }
    g.putImageData(img, 0, 0)
    cracks(g, mulberry32(4), size, 10, 0.4)
  }, 37)

  const wood = pair((g, size, n) => {
    for (let y = 0; y < size; y += 48) {
      const tone = 70 + (y % 96)
      g.fillStyle = `rgb(${tone + 30},${tone * 0.62},${tone * 0.38})`
      g.fillRect(0, y, size, 46)
      g.fillStyle = 'rgba(20,12,8,0.35)'
      g.fillRect(0, y + 45, size, 3)
    }
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const grain = fbm(n, 128, x * 0.15, y * 1.4)
        const i = (y * size + x) * 4
        const s = 0.82 + grain * 0.28
        img.data[i] *= s
        img.data[i + 1] *= s
        img.data[i + 2] *= s
      }
    }
    g.putImageData(img, 0, 0)
  }, 41)

  const stone = pair((g, size, n) => {
    g.fillStyle = '#7c776f'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.22, y * 0.22)
        const tile = (Math.floor(x / 80) + Math.floor(y / 80)) % 2 ? 0.92 : 1
        const i = (y * size + x) * 4
        const s = (0.72 + f * 0.35) * tile
        img.data[i] *= s
        img.data[i + 1] *= s
        img.data[i + 2] *= s * 0.95
      }
    }
    g.putImageData(img, 0, 0)
  }, 43)

  const carpet = pair((g, size, n) => {
    g.fillStyle = '#5a2c30'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.9, y * 0.9)
        const wear = Math.exp(-((x - size / 2) ** 2) / 40000) * 0.2
        const i = (y * size + x) * 4
        const s = 0.75 + f * 0.35 + wear
        img.data[i] *= s
        img.data[i + 1] *= s * 0.9
        img.data[i + 2] *= s * 0.88
      }
    }
    g.putImageData(img, 0, 0)
  }, 47)

  const tileFloor = pair((g, size) => {
    g.fillStyle = '#6e6b64'
    g.fillRect(0, 0, size, size)
    const s = 72
    for (let y = 0; y < size; y += s) {
      for (let x = 0; x < size; x += s) {
        const v = 150 + ((x * 9 + y * 3) % 50)
        g.fillStyle = `rgb(${v},${v - 4},${v - 10})`
        g.fillRect(x + 2, y + 2, s - 4, s - 4)
        if ((x / s + y / s) % 7 === 0) {
          g.fillStyle = 'rgba(40,20,16,0.25)'
          g.fillRect(x + 10, y + 10, s - 20, s - 20)
        }
      }
    }
  }, 53)

  const metal = pair((g, size, n) => {
    g.fillStyle = '#5a564e'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.6, y * 0.2)
        const rust = fbm(n, 128, x * 0.1 + 20, y * 0.1) > 0.62 ? 0.35 : 0
        const i = (y * size + x) * 4
        img.data[i] = 90 * (0.7 + f * 0.4) + rust * 80
        img.data[i + 1] = 82 * (0.7 + f * 0.3) + rust * 30
        img.data[i + 2] = 70 * (0.7 + f * 0.3)
      }
    }
    g.putImageData(img, 0, 0)
  }, 59)

  const fabric = pair((g, size, n) => {
    g.fillStyle = '#6d4e46'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 1.2, y * 1.2)
        const stripe = Math.sin(y * 0.4) * 0.04
        const i = (y * size + x) * 4
        const s = 0.8 + f * 0.3 + stripe
        img.data[i] *= s
        img.data[i + 1] *= s
        img.data[i + 2] *= s
      }
    }
    g.putImageData(img, 0, 0)
  }, 61)

  const ceiling = pair((g, size, n) => {
    g.fillStyle = '#74716b'
    g.fillRect(0, 0, size, size)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.3, y * 0.3)
        const leak = Math.exp(-((x - 200) ** 2 + (y - 220) ** 2) / 9000) * 0.45
        const i = (y * size + x) * 4
        const s = 0.8 + f * 0.15 - leak
        img.data[i] *= s
        img.data[i + 1] *= s * (1 - leak * 0.3)
        img.data[i + 2] *= s * (1 - leak * 0.4)
      }
    }
    g.putImageData(img, 0, 0)
  }, 67)

  const trim = pair((g, size) => {
    g.fillStyle = '#3a312a'
    g.fillRect(0, 0, size, size)
  }, 71)

  const door = pair((g, size, n) => {
    g.fillStyle = '#4e3b2e'
    g.fillRect(0, 0, size, size)
    g.strokeStyle = 'rgba(20,12,8,0.6)'
    g.lineWidth = 6
    g.strokeRect(28, 28, size - 56, size * 0.42)
    g.strokeRect(28, size * 0.5, size - 56, size * 0.42)
    const img = g.getImageData(0, 0, size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const f = fbm(n, 128, x * 0.2, y * 0.8)
        const i = (y * size + x) * 4
        const s = 0.85 + f * 0.25
        img.data[i] *= s
        img.data[i + 1] *= s
        img.data[i + 2] *= s
      }
    }
    g.putImageData(img, 0, 0)
  }, 73)

  const bloodC = canvas()
  {
    const g = bloodC.g
    g.clearRect(0, 0, 512, 512)
    const rng = mulberry32(99)
    g.fillStyle = 'rgba(90,8,10,0.0)'
    for (let i = 0; i < 40; i++) {
      g.fillStyle = `rgba(${80 + rng() * 40},${6 + rng() * 8},${8},${0.25 + rng() * 0.55})`
      g.beginPath()
      g.ellipse(40 + rng() * 430, 180 + rng() * 160, 20 + rng() * 80, 8 + rng() * 24, rng() * 3, 0, Math.PI * 2)
      g.fill()
    }
    g.fillStyle = 'rgba(60,4,6,0.7)'
    g.beginPath()
    g.ellipse(256, 270, 180, 36, 0.2, 0, Math.PI * 2)
    g.fill()
  }
  const bloodMap = texOf(bloodC.c, false, true)
  const blood = new THREE.MeshStandardMaterial({
    map: bloodMap,
    transparent: true,
    depthWrite: false,
    roughness: 0.45,
    metalness: 0.05,
    color: '#7a1014',
    polygonOffset: true,
    polygonOffsetFactor: -2,
  })

  const glass = new THREE.MeshStandardMaterial({
    color: '#141820',
    roughness: 0.15,
    metalness: 0.4,
    transparent: true,
    opacity: 0.45,
    emissive: '#0a1018',
    emissiveIntensity: 0.2,
  })

  const all = [plaster, damp, brick, panel, tileWall, concrete, wood, stone, carpet, tileFloor, metal, fabric, ceiling, trim, door]
  const mats = {
    plaster: std(plaster.map, plaster.rough, '#ffffff'),
    damp: std(damp.map, damp.rough, '#ffffff'),
    brick: std(brick.map, brick.rough, '#ffffff'),
    panel: std(panel.map, panel.rough, '#ffffff'),
    tileWall: std(tileWall.map, tileWall.rough, '#ffffff', { roughness: 0.55 }),
    concrete: std(concrete.map, concrete.rough, '#ffffff'),
    wood: std(wood.map, wood.rough, '#ffffff', { roughness: 0.78 }),
    stone: std(stone.map, stone.rough, '#ffffff'),
    carpet: std(carpet.map, carpet.rough, '#ffffff', { roughness: 1 }),
    tileFloor: std(tileFloor.map, tileFloor.rough, '#ffffff', { roughness: 0.42, metalness: 0.08 }),
    metal: std(metal.map, metal.rough, '#ffffff', { roughness: 0.55, metalness: 0.45 }),
    fabric: std(fabric.map, fabric.rough, '#ffffff', { roughness: 0.95 }),
    ceiling: std(ceiling.map, ceiling.rough, '#ffffff'),
    trim: std(trim.map, trim.rough, '#ffffff', { roughness: 0.7 }),
    door: std(door.map, door.rough, '#ffffff', { roughness: 0.65 }),
    blood,
    glass,
    eye: new THREE.MeshStandardMaterial({ color: '#200000', emissive: '#ff1a12', emissiveIntensity: 2.4, roughness: 0.3 }),
    monster: new THREE.MeshStandardMaterial({ color: '#0c0b0d', roughness: 0.84, metalness: 0.06 }),
    dispose() {
      for (const m of Object.values(mats)) {
        if (m instanceof THREE.Material) {
          const mat = m as THREE.MeshStandardMaterial
          mat.map?.dispose()
          mat.roughnessMap?.dispose()
          mat.dispose()
        }
      }
    },
  }
  void all
  return mats
}
