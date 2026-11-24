import * as THREE from 'three'

/**
 * The figure that steps out of a doorway.
 * Appearance from the visual-only design pass: a dark layered gown,
 * with no bright face. The hood group is named "glance" so the existing
 * turn still moves the head. Nothing calls lookAt on it.
 */
export function buildDoorGhost(): THREE.Group {
  const g = new THREE.Group()
  const gownMat = new THREE.MeshStandardMaterial({
    color: '#282927', roughness: 0.96, side: THREE.DoubleSide,
  })
  const seamMat = new THREE.MeshStandardMaterial({
    color: '#544f47', roughness: 0.98, side: THREE.DoubleSide,
  })
  const voidMat = new THREE.MeshStandardMaterial({ color: '#0e1011', roughness: 1 })
  const bandageMat = new THREE.MeshStandardMaterial({
    color: '#555047', roughness: 0.97, side: THREE.DoubleSide,
  })
  const shadowMesh = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(x, y, z)
    mesh.castShadow = false
    g.add(mesh)
    return mesh
  }
  const coat = new THREE.CylinderGeometry(0.245, 0.405, 1.36, 18, 8, true)
  const pos = coat.getAttribute('position') as THREE.BufferAttribute
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const y = pos.getY(i)
    const z = pos.getZ(i)
    const uneven = 1 + 0.052 * Math.sin(i * 1.43) + 0.036 * Math.sin(i * 3.3)
    pos.setXYZ(i, x * uneven, y + (y < -0.46 ? 0.066 * Math.sin(i * 0.61) : 0), z * uneven)
  }
  coat.computeVertexNormals()
  shadowMesh(coat, gownMat, 0, 0.80, 0)
  const torso = shadowMesh(new THREE.CapsuleGeometry(0.17, 0.33, 5, 12), gownMat, 0, 1.37, 0)
  torso.scale.set(1.17, 1, 0.84)
  for (const side of [-1, 1]) {
    const sleeve = shadowMesh(new THREE.CylinderGeometry(0.086, 0.125, 0.75, 10, 3, true),
      gownMat, side * 0.27, 1.12, 0)
    sleeve.rotation.z = side * -0.13
    const hand = shadowMesh(new THREE.SphereGeometry(0.064, 9, 7), voidMat, side * 0.30, 0.72, 0.015)
    hand.scale.set(0.78, 1.25, 0.68)
    const seam = shadowMesh(new THREE.PlaneGeometry(0.045, 0.72), seamMat, side * 0.205, 1.06, 0.11)
    seam.rotation.z = side * 0.08
    const shoe = shadowMesh(new THREE.BoxGeometry(0.22, 0.11, 0.35), voidMat, side * 0.16, 0.085, 0.105)
    shoe.rotation.y = side * 0.10
  }
  const glance = new THREE.Group()
  glance.name = 'glance'
  glance.position.set(0, 1.79, 0)
  const faceVoid = new THREE.Mesh(new THREE.SphereGeometry(0.123, 15, 12), voidMat)
  faceVoid.position.set(0, -0.04, 0.098)
  faceVoid.scale.set(0.87, 1.28, 0.48)
  const hood = new THREE.Mesh(new THREE.SphereGeometry(0.19, 17, 12, 0, Math.PI * 2, 0, Math.PI * 0.76), gownMat)
  hood.position.set(0, 0.04, -0.025)
  hood.scale.set(1.06, 1.16, 0.93)
  glance.add(faceVoid, hood)
  for (let i = 0; i < 4; i++) {
    const bandage = new THREE.Mesh(new THREE.PlaneGeometry(0.275, 0.052), bandageMat)
    bandage.position.set(0.005 * (i % 2 ? 1 : -1), 0.05 - i * 0.065, 0.160)
    bandage.rotation.z = -0.12 + i * 0.06
    glance.add(bandage)
  }
  const veil = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.62, 2, 3), gownMat)
  veil.position.set(-0.14, -0.30, 0.045)
  veil.rotation.z = -0.14
  glance.add(veil)
  g.add(glance)
  g.visible = false
  return g
}
