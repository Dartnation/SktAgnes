import * as THREE from 'three'

/**
 * Non-interactive V5 creature art only. Attach to existing rig joints to
 * preserve the exact state machine, chase movement, hearing, vision and
 * animation timing in MonsterAI.ts.
 *
 * These meshes are temporary authored dressing until a licensed, rigged,
 * realistically textured GLB passes animation/visibility tests.
 */
export function decorateMonsterV5(spine: THREE.Group, head: THREE.Group, pelvis: THREE.Group): void {
  const materials = {
    darkCloth: new THREE.MeshStandardMaterial({
      color: '#282d2b', roughness: 0.99, metalness: 0.0, side: THREE.DoubleSide,
    }),
    seam: new THREE.MeshStandardMaterial({
      color: '#555a50', roughness: 0.99, side: THREE.DoubleSide,
    }),
    charcoal: new THREE.MeshStandardMaterial({
      color: '#151918', roughness: 0.99, side: THREE.DoubleSide,
    }),
    bone: new THREE.MeshStandardMaterial({
      color: '#4e4d48', roughness: 0.94, metalness: 0,
    }),
    iron: new THREE.MeshStandardMaterial({
      color: '#54534b', roughness: 0.77, metalness: 0.61,
    }),
  }
  const add = (parent: THREE.Group, geo: THREE.BufferGeometry, mat: THREE.Material,
    x: number, y: number, z: number): THREE.Mesh => {
    const item = new THREE.Mesh(geo, mat)
    item.position.set(x, y, z)
    item.castShadow = true
    item.receiveShadow = true
    parent.add(item)
    return item
  }

  // Several asymmetrically draped hospital gown pieces soften the capsule
  // silhouette instead of adding a luminous or implausibly large head.
  for (let i = 0; i < 6; i++) {
    const side = i % 2 ? 1 : -1
    const angle = (i / 6) * Math.PI * 2
    const geo = new THREE.PlaneGeometry(0.20 + (i % 3) * 0.028, 0.42 + (i % 4) * 0.080, 3, 4)
    const pos = geo.getAttribute('position') as THREE.BufferAttribute
    for (let p = 0; p < pos.count; p++) {
      const x = pos.getX(p)
      const y = pos.getY(p)
      pos.setZ(p, (0.012 + 0.029 * Math.sin(x * 34 + i * 1.7)) * (0.5 - y))
      if (y < -0.1) pos.setY(p, y + Math.sin(p * 2.12 + i) * 0.027)
    }
    geo.computeVertexNormals()
    const strip = add(spine, geo, i % 3 === 0 ? materials.seam : materials.darkCloth,
      Math.cos(angle) * 0.13, -0.24 - (i % 3) * 0.063,
      0.11 + Math.sin(angle) * 0.12)
    strip.rotation.y = side * 0.25 + angle * 0.23
    strip.rotation.z = side * (0.09 + i * 0.025)
  }
  // Front collar sewn onto the cowl, and uneven binding straps.
  for (let i = 0; i < 4; i++) {
    const seam = add(head,
      new THREE.PlaneGeometry(0.20 + i * 0.011, 0.013),
      i % 2 ? materials.darkCloth : materials.seam,
      0.008 * (i % 2 ? 1 : -1), 0.165 - i * 0.065, 0.213)
    seam.rotation.z = -0.14 + i * 0.075
  }
  // The eyes remain fully black. No face image, smile, glow or screen effect.
  const deepCowl = add(head, new THREE.TorusGeometry(0.120, 0.012, 7, 21, Math.PI * 1.63),
    materials.charcoal, 0, 0.067, 0.177)
  deepCowl.rotation.z = -0.15
  deepCowl.scale.set(0.93, 1.26, 0.72)
  for (const side of [-1, 1]) {
    for (let i = 0; i < 5; i++) {
      const thread = add(spine, new THREE.BoxGeometry(0.011, 0.036, 0.009),
        materials.seam, side * 0.16, 0.21 - i * 0.081, 0.18)
      thread.rotation.z = side * (0.36 + (i % 2) * 0.15)
    }
    const strap = add(pelvis, new THREE.PlaneGeometry(0.12, 0.51, 3, 5),
      materials.darkCloth, side * 0.13, -0.22, 0.08)
    strap.rotation.z = side * 0.28
    const buckle = add(pelvis, new THREE.TorusGeometry(0.022, 0.005, 6, 12),
      materials.iron, side * 0.16, 0.035, 0.142)
    buckle.rotation.x = Math.PI * 0.18
  }
  // Muted, uneven chest ribs are visible in close low-key light only.
  for (let i = 0; i < 4; i++) {
    const rib = add(spine,
      new THREE.CapsuleGeometry(0.010, 0.08 + 0.010 * (i % 2), 2, 6),
      materials.bone, (i % 2 ? -1 : 1) * 0.085, 0.17 - i * 0.093, 0.205)
    rib.rotation.z = i % 2 ? -0.45 : 0.45
  }
}
