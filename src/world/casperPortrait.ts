import * as THREE from 'three'

/** Framed print of Casper on the reception's north wall. The photo keeps its own proportions. */
export function mountCasperPortrait(scene: THREE.Scene): void {
  const loader = new THREE.TextureLoader()
  loader.load(import.meta.env.BASE_URL + 'photos/casper-jorgensen.png', (tex) => {
    const image = tex.image as { width?: number; height?: number }
    const aspect = (image.width && image.height) ? image.width / image.height : 592 / 732
    const height = 1.12
    const width = height * aspect
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 8
    tex.needsUpdate = true

    const group = new THREE.Group()
    group.name = 'casper-portrait'
    // North wall's inner face is z=11.89. The frame stands on that face and faces the room.
    group.position.set(1.55, 1.95, 11.78)

    const wood = new THREE.MeshStandardMaterial({ color: '#3b2b1e', roughness: 0.58, metalness: 0.05 })
    const matte = new THREE.MeshStandardMaterial({ color: '#efe2cc', roughness: 0.86 })
    const border = 0.046
    const depth = 0.04
    const rail = (w: number, h: number, x: number, y: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, depth), wood)
      mesh.position.set(x, y, -depth / 2)
      mesh.castShadow = true
      mesh.receiveShadow = true
      group.add(mesh)
    }
    rail(width + border * 2, border, 0, height / 2 + border / 2)
    rail(width + border * 2, border, 0, -height / 2 - border / 2)
    rail(border, height, -width / 2 - border / 2, 0)
    rail(border, height, width / 2 + border / 2, 0)

    const backing = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.01), matte)
    backing.position.set(0, 0, -0.012)
    backing.receiveShadow = true
    group.add(backing)

    const photo = new THREE.Mesh(
      new THREE.PlaneGeometry(width - 0.01, height - 0.01),
      new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.62,
        metalness: 0,
        emissive: '#fff6ea',
        emissiveMap: tex,
        emissiveIntensity: 0.72,
      }),
    )
    photo.position.set(0, 0, -0.022)
    photo.rotation.y = Math.PI
    group.add(photo)

    const plate = plaque(width + border * 2)
    plate.position.set(0, -height / 2 - border - 0.11, -0.02)
    plate.rotation.y = Math.PI
    group.add(plate)

    const lamp = new THREE.SpotLight('#fff0d2', 2.4, 3.2, 0.5, 0.45, 1)
    lamp.position.set(0, height / 2 + 0.34, -0.55)
    lamp.target.position.set(0, 0, -0.02)
    group.add(lamp, lamp.target)

    scene.add(group)
  })
}

/** Michael on the south wall, opposite Casper. The photo keeps its own proportions. */
export function mountMichaelPortrait(scene: THREE.Scene): void {
  const loader = new THREE.TextureLoader()
  loader.load(import.meta.env.BASE_URL + 'photos/michael-sorensen.png', (tex) => {
    const image = tex.image as { width?: number; height?: number }
    const aspect = (image.width && image.height) ? image.width / image.height : 4 / 3
    let height = 1.02
    let width = height * aspect
    if (width > 1.55) {
      width = 1.55
      height = width / aspect
    }
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 8
    tex.needsUpdate = true

    const group = new THREE.Group()
    group.name = 'michael-portrait'
    // South wall's inner face is z=0.11. The frame stands on that face and faces into the room.
    group.position.set(10.45, 1.95, 0.22)

    const wood = new THREE.MeshStandardMaterial({ color: '#3b2b1e', roughness: 0.58, metalness: 0.05 })
    const matte = new THREE.MeshStandardMaterial({ color: '#efe2cc', roughness: 0.86 })
    const border = 0.046
    const depth = 0.04
    const rail = (w: number, h: number, x: number, y: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, depth), wood)
      mesh.position.set(x, y, depth / 2)
      mesh.castShadow = true
      mesh.receiveShadow = true
      group.add(mesh)
    }
    rail(width + border * 2, border, 0, height / 2 + border / 2)
    rail(width + border * 2, border, 0, -height / 2 - border / 2)
    rail(border, height, -width / 2 - border / 2, 0)
    rail(border, height, width / 2 + border / 2, 0)

    const backing = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.01), matte)
    backing.position.set(0, 0, 0.012)
    backing.receiveShadow = true
    group.add(backing)

    const photo = new THREE.Mesh(
      new THREE.PlaneGeometry(width - 0.01, height - 0.01),
      new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.62,
        metalness: 0,
        emissive: '#fff6ea',
        emissiveMap: tex,
        emissiveIntensity: 0.72,
      }),
    )
    photo.position.set(0, 0, 0.022)
    group.add(photo)

    const plate = michaelPlaque(Math.max(width + border * 2, 1.15))
    plate.position.set(0, -height / 2 - border - 0.16, 0.02)
    group.add(plate)

    const lamp = new THREE.SpotLight('#fff0d2', 2.2, 3.2, 0.5, 0.45, 1)
    lamp.position.set(0, height / 2 + 0.34, 0.55)
    lamp.target.position.set(0, 0, 0.02)
    group.add(lamp, lamp.target)

    scene.add(group)
  })
}

function michaelPlaque(width: number): THREE.Mesh {
  const canvas = document.createElement('canvas')
  canvas.width = 900
  canvas.height = 280
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.fillStyle = '#1c1612'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#e7d3b0'
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20)
    ctx.fillStyle = '#2a2118'
    ctx.textAlign = 'center'
    ctx.font = '700 48px "Segoe UI", sans-serif'
    ctx.fillText('MICHAEL SØRENSEN', canvas.width / 2, 78)
    ctx.font = '34px Georgia, serif'
    ctx.fillText('Han er sød', canvas.width / 2, 150)
    ctx.fillText('og mangler sin kæreste Frederik', canvas.width / 2, 206)
  }
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = 4
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width, width * (280 / 900)),
    new THREE.MeshStandardMaterial({ map, roughness: 0.72, emissive: '#fff6ea', emissiveMap: map, emissiveIntensity: 0.12 }),
  )
  return mesh
}

function plaque(width: number): THREE.Mesh {
  const canvas = document.createElement('canvas')
  canvas.width = 768
  canvas.height = 220
  const ctx = canvas.getContext('2d')
  if (ctx) {
    ctx.fillStyle = '#1c1612'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#e7d3b0'
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20)
    ctx.fillStyle = '#2a2118'
    ctx.textAlign = 'center'
    ctx.font = '700 54px "Segoe UI", sans-serif'
    ctx.fillText('CASPER JØRGENSEN', canvas.width / 2, 78)
    ctx.fillStyle = '#7d2d2a'
    ctx.font = '700 36px Georgia, serif'
    ctx.fillText('EFTERSØGT', canvas.width / 2, 132)
    ctx.fillStyle = '#3a2e24'
    ctx.font = '28px Georgia, serif'
    ctx.fillText('Halvovervægtig  ·  flere byer', canvas.width / 2, 178)
  }
  const map = new THREE.CanvasTexture(canvas)
  map.colorSpace = THREE.SRGBColorSpace
  map.anisotropy = 4
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width, width * (220 / 768)),
    new THREE.MeshStandardMaterial({ map, roughness: 0.72, emissive: '#fff6ea', emissiveMap: map, emissiveIntensity: 0.12 }),
  )
  return mesh
}

/** A clothed figure whose origin is the neck, so a thin rope can meet it. */
export function buildHanged(): { body: THREE.Group; rope: THREE.Mesh } {
  const cloth = new THREE.MeshStandardMaterial({ color: '#2a3036', roughness: 0.92 })
  const skin = new THREE.MeshStandardMaterial({ color: '#5c4b40', roughness: 0.92 })
  const ropeMat = new THREE.MeshStandardMaterial({ color: '#6d5a44', roughness: 0.96 })
  const body = new THREE.Group()
  body.name = 'hanged'

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.105, 16, 12), skin)
  head.scale.set(0.9, 1.08, 0.88)
  head.position.set(0.015, 0.11, 0.02)
  head.rotation.z = 0.42
  head.name = 'hang-head'
  body.add(head)

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.4, 4, 8), cloth)
  torso.position.y = -0.36
  body.add(torso)

  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.042, 0.46, 3, 6), cloth)
    arm.position.set(side * 0.2, -0.4, 0.02)
    arm.rotation.z = side * 0.12
    body.add(arm)
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.58, 3, 6), cloth)
    leg.position.set(side * 0.07, -0.92, 0.01)
    body.add(leg)
  }

  const noose = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.008, 6, 14), ropeMat)
  noose.rotation.x = Math.PI / 2
  noose.position.y = 0.015
  body.add(noose)

  const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 1, 8), ropeMat)
  rope.name = 'hang-rope'
  rope.castShadow = true
  body.visible = false
  rope.visible = false
  return { body, rope }
}
