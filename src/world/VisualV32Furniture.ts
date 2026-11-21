import * as THREE from 'three'
import { FLOOR_Y, type PropDef, type RoomDef } from './data'

/**
 * V3.2 art-only furniture pass. Drawer fronts are separate named scene nodes
 * for Cursor to integrate later; the current static cabinet bodies remain.
 * Never treat these objects as interactive or saved game state yet.
 */
export interface V32DrawerAnchor {
  id: string
  room: string
  cabinetId: string
  drawerIndex: number
  width: number
}

export function addV32Furniture(scene: THREE.Scene, rooms: RoomDef[], props: PropDef[]): () => void {
  const root = new THREE.Group()
  root.name = 'SktAgnes_V32_DrawerDressing'
  const wood = new THREE.MeshStandardMaterial({ color: '#46352d', roughness: 0.93, metalness: 0 })
  const metal = new THREE.MeshStandardMaterial({ color: '#4b4e4b', roughness: 0.84, metalness: 0.42 })
  const brass = new THREE.MeshStandardMaterial({ color: '#807057', roughness: 0.55, metalness: 0.7 })
  const label = new THREE.MeshStandardMaterial({ color: '#aa9982', roughness: 0.98 })
  const grime = new THREE.MeshStandardMaterial({ color: '#272521', roughness: 1 })
  const sharedBox = new THREE.BoxGeometry(1, 1, 1)
  const anchors: V32DrawerAnchor[] = []
  const byId = new Map(rooms.map(r => [r.id, r]))
  const drawerKinds = new Set(['filing', 'recordcabinet', 'dresser', 'cabinet', 'sideboard'])
  const create = (parent: THREE.Group, material: THREE.Material,
    x: number, y: number, z: number, w: number, h: number, d: number): THREE.Mesh => {
    const mesh = new THREE.Mesh(sharedBox, material)
    mesh.position.set(x, y, z)
    mesh.scale.set(w, h, d)
    mesh.castShadow = false
    parent.add(mesh)
    return mesh
  }
  for (const p of props) {
    if (!drawerKinds.has(p.kind) || p.blocksUntilUnlock) continue
    const r = byId.get(p.room)
    if (!r) continue
    const frontSign = p.z - r.z < r.d * 0.5 ? 1 : -1
    const cabinet = new THREE.Group()
    cabinet.name = 'V32_CabinetDetail_' + p.id
    cabinet.position.set(p.x, FLOOR_Y[r.floor] + (p.yOff ?? 0), p.z)
    cabinet.rotation.y = p.rot
    root.add(cabinet)
    const rows = p.kind === 'sideboard' ? 2 : p.kind === 'filing' ? 4 : 3
    const faceW = Math.max(0.2, p.w * 0.74)
    const faceH = p.h * (p.kind === 'sideboard' ? 0.22 : 0.18)
    const dark = p.kind === 'filing' || p.kind === 'cabinet'
    for (let i = 0; i < rows; i++) {
      const y = p.h * (0.18 + (i + 0.5) * (0.68 / rows))
      const z = frontSign * (p.d * 0.5 + 0.023)
      const drawer = new THREE.Group()
      drawer.name = 'v32_drawer_' + p.id + '_' + i
      drawer.userData = { role: 'drawer-visual-only', cabinetId: p.id, drawerIndex: i, room: p.room }
      drawer.position.set(0, y, z)
      cabinet.add(drawer)
      create(drawer, dark ? metal : wood, 0, 0, 0, faceW, Math.min(faceH, p.h / rows * 0.65), 0.035)
      create(drawer, grime, 0, 0, frontSign * 0.022, faceW * 0.86, Math.min(faceH, p.h / rows * 0.65) * 0.77, 0.008)
      create(drawer, dark ? metal : wood, 0, 0, frontSign * 0.029, faceW * 0.84, Math.min(faceH, p.h / rows * 0.65) * 0.72, 0.009)
      create(drawer, brass, 0, -0.025, frontSign * 0.044, Math.min(0.17, faceW * 0.34), 0.025, 0.035)
      create(drawer, brass, 0, 0.048, frontSign * 0.041, Math.min(0.21, faceW * 0.42), 0.075, 0.012)
      create(drawer, label, 0, 0.048, frontSign * 0.050, Math.min(0.17, faceW * 0.36), 0.047, 0.012)
      anchors.push({ id: drawer.name, room: p.room, cabinetId: p.id, drawerIndex: i, width: faceW })
    }
    // Nicks at the front edges read as a worn real object when lit by the flashlight.
    for (const side of [-1, 1]) {
      create(cabinet, grime, side * p.w * 0.42, p.h * 0.56,
        frontSign * (p.d * 0.5 + 0.01), 0.012, p.h * 0.55, 0.016)
    }
  }

  // Extra tabletop cues, aligned with furniture already in world data.
  const journal = (roomId: string, x: number, y: number, z: number) => {
    const room = byId.get(roomId)
    if (!room) return
    const g = new THREE.Group()
    g.name = 'V32_Journal_' + roomId
    g.position.set(room.x + x, FLOOR_Y[room.floor] + y, room.z + z)
    root.add(g)
    for (let i = 0; i < 6; i++) {
      create(g, i % 2 ? label : wood, i * 0.013, i * 0.016, i * 0.006, 0.31, 0.012, 0.26)
    }
    create(g, brass, 0.26, 0.08, 0.05, 0.017, 0.025, 0.30)
  }
  journal('reception', 4.1, 0.88, 9.40)
  journal('arkiv', 7.8, 0.80, 2.45)
  journal('laboratorium', 16 - 12, 0.96, 9.14)
  journal('obduktion', 30 - 24, 0.91, 8.98)
  journal('personalerum', 45.8 - 36, 0.96, 9.15)
  journal('observation', 30 - 24, 0.81, 2.40)

  root.userData.drawerAnchors = anchors
  root.userData.note = 'Visual only; Cursor must replace static cabinet bodies before opening drawers'
  scene.add(root)
  return () => {
    scene.remove(root)
    sharedBox.dispose()
    for (const m of [wood, metal, brass, label, grime]) m.dispose()
  }
}
