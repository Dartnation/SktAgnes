import * as THREE from 'three'
import { FLOOR_Y, type RoomDef } from './data'

/**
 * Purely decorative hospital wall identity. Nothing in this file registers as
 * a collider, pickup, interaction, light, trigger, or navigational obstacle.
 * All fixtures sit within ~18cm of the interior front wall (local z=0).
 * The existing wall/door and story systems remain authoritative.
 */
interface Department { title: string; sub: string; theme: 'clinical' | 'archive' | 'service' | 'chapel' }
const identity: Record<string, Department> = {
  reception: { title: 'MODTAGELSE', sub: 'INDSKRIVNING  /  1987', theme: 'archive' },
  patientgang: { title: 'PATIENTAFDELING', sub: 'SENGE 01–08  /  NATTERO', theme: 'clinical' },
  operationsstue: { title: 'OPERATIONSSTUE', sub: 'STERIL ZONE  /  KIRURGI', theme: 'clinical' },
  slagterum: { title: 'SERVICEAFDELING', sub: 'AUTOKLAVE  /  RENGØRING', theme: 'service' },
  arkiv: { title: 'JOURNALARKIV', sub: 'FORTROLIGE DOKUMENTER', theme: 'archive' },
  laboratorium: { title: 'LABORATORIUM', sub: 'PRØVER  /  REGISTRERING', theme: 'clinical' },
  obduktion: { title: 'OBDUKTION', sub: 'PROTOKOL  /  PRØVER', theme: 'clinical' },
  personalerum: { title: 'PERSONALE', sub: 'NATTEVAGT  /  PAUSE', theme: 'archive' },
  kaeldergang: { title: 'TEKNISK KÆLDER', sub: 'EL  /  VAND  /  VENTILATION', theme: 'service' },
  kapel: { title: 'KAPEL', sub: 'STILHED  /  MINDE', theme: 'chapel' },
  observation: { title: 'OBSERVATION', sub: 'PATIENTREGISTRERING', theme: 'clinical' },
  kammer: { title: 'ISOLATION', sub: 'ADGANG KUN FOR PERSONALE', theme: 'clinical' },
  trappe0: { title: 'TRAPPE', sub: 'ETAGE 1', theme: 'service' },
  trappe1: { title: 'TRAPPE', sub: 'ETAGE 2', theme: 'service' },
  trappe2: { title: 'TRAPPE', sub: 'ETAGE 3', theme: 'service' },
}

export function addVisualIdentityV4(scene: THREE.Scene, rooms: readonly RoomDef[]): () => void {
  const root = new THREE.Group()
  root.name = 'SktAgnes_VisualIdentityV4'
  const steel = new THREE.MeshStandardMaterial({ color: '#5b625f', metalness: 0.67, roughness: 0.64 })
  const wornMetal = new THREE.MeshStandardMaterial({ color: '#777368', metalness: 0.68, roughness: 0.74 })
  const oxidised = new THREE.MeshStandardMaterial({ color: '#4c3c37', metalness: 0.36, roughness: 0.88 })
  const dark = new THREE.MeshStandardMaterial({ color: '#1c2020', metalness: 0.17, roughness: 0.91 })
  const glass = new THREE.MeshStandardMaterial({ color: '#939986', metalness: 0.14, roughness: 0.28 })
  const parchment = new THREE.MeshStandardMaterial({ color: '#b5a48a', roughness: 0.96 })
  const retained: THREE.Texture[] = []
  const frame = (parent: THREE.Group, w: number, h: number, d: number,
    x: number, y: number, z: number, mat: THREE.Material) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    mesh.position.set(x, y, z)
    mesh.receiveShadow = true
    parent.add(mesh)
    return mesh
  }
  const rod = (parent: THREE.Group, r: number, length: number, x: number,
    y: number, z: number, mat: THREE.Material, rotationZ = 0) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, length, 12), mat)
    mesh.position.set(x, y, z)
    mesh.rotation.z = rotationZ
    parent.add(mesh)
    return mesh
  }
  const label = (parent: THREE.Group, title: string, sub: string, width: number) => {
    const c = document.createElement('canvas')
    c.width = 960; c.height = 400
    const g = c.getContext('2d')
    if (!g) return
    g.fillStyle = '#282725'
    g.fillRect(0, 0, 960, 400)
    g.strokeStyle = '#978778'
    g.lineWidth = 12
    g.strokeRect(25, 25, 910, 350)
    g.fillStyle = '#bcb49e'
    g.fillRect(47, 47, 866, 306)
    g.fillStyle = '#39352e'
    g.fillRect(68, 65, 824, 264)
    g.fillStyle = '#e5d6b9'
    g.font = 'bold 76px Georgia,serif'
    g.textAlign = 'center'
    g.fillText(title, 480, 194, 782)
    g.fillStyle = '#b6a78d'
    g.font = '36px Georgia,serif'
    g.fillText(sub, 480, 258, 782)
    g.fillStyle = '#8b5d50'
    g.fillRect(330, 290, 300, 5)
    const map = new THREE.CanvasTexture(c)
    map.colorSpace = THREE.SRGBColorSpace
    map.anisotropy = 4
    retained.push(map)
    const mat = new THREE.MeshStandardMaterial({ map, roughness: 0.94, side: THREE.DoubleSide })
    const board = new THREE.Mesh(new THREE.PlaneGeometry(width, 0.72), mat)
    board.position.set(0, 2.48, 0.045)
    parent.add(board)
    // Heavy wooden sign back and brass corner brackets.
    frame(parent, width + 0.09, 0.79, 0.065, 0, 2.48, 0.010, dark)
    board.position.z = 0.051
    for (const sign of [-1, 1])
      for (const y of [2.17, 2.79])
        rod(parent, 0.016, 0.022, sign * width * 0.48, y, 0.065, wornMetal, Math.PI / 2)
  }
  for (const room of rooms) {
    if (room.outdoors) continue
    const type = identity[room.id]
    if (!type) continue
    const section = new THREE.Group()
    section.name = 'VisualDepartment_' + room.id
    section.position.set(room.x + room.w * 0.5, FLOOR_Y[room.floor], room.z + 0.19)
    root.add(section)
    label(section, type.title, type.sub, Math.min(2.70, room.w * 0.36))

    // Wall-mounted instrument bay below the sign. No floor obstruction.
    const instrumentX = -(room.w * 0.26)
    frame(section, 1.15, 0.95, 0.10, instrumentX, 1.48, 0.01, steel)
    frame(section, 1.03, 0.83, 0.025, instrumentX, 1.48, 0.077, dark)
    frame(section, 0.90, 0.13, 0.026, instrumentX, 1.78, 0.094, oxidised)
    for (const x of [-0.45, 0.45]) {
      for (const y of [1.1, 1.83]) {
        rod(section, 0.017, 0.014, instrumentX + x, y, 0.102, wornMetal, Math.PI / 2)
      }
    }
    if (type.theme === 'clinical') {
      for (let i = 0; i < 3; i++) {
        frame(section, 0.17, 0.36, 0.022,
          instrumentX - 0.30 + i * 0.29, 1.44, 0.104, glass)
        rod(section, 0.070, 0.020, instrumentX - 0.30 + i * 0.29,
          1.45, 0.136, oxidised, Math.PI / 2)
        rod(section, 0.039, 0.023, instrumentX - 0.30 + i * 0.29,
          1.45, 0.147, parchment, Math.PI / 2)
      }
      frame(section, 0.76, 0.085, 0.023, instrumentX, 1.12, 0.106, steel)
    } else if (type.theme === 'archive') {
      for (let i = 0; i < 5; i++) {
        frame(section, 0.125, 0.43, 0.022,
          instrumentX - 0.35 + i * 0.175, 1.43, 0.103,
          i % 2 ? parchment : wornMetal)
        frame(section, 0.088, 0.012, 0.026,
          instrumentX - 0.35 + i * 0.175, 1.56, 0.118, dark)
      }
    } else if (type.theme === 'service') {
      // Visible conduits and a pressure meter on the front wall.
      for (let i = 0; i < 4; i++) {
        frame(section, 0.79, 0.055, 0.027,
          instrumentX, 1.16 + i * 0.14, 0.109, i % 2 ? wornMetal : steel)
      }
      rod(section, 0.117, 0.028, instrumentX + 0.285, 1.45, 0.130,
        wornMetal, Math.PI / 2)
      rod(section, 0.073, 0.030, instrumentX + 0.285, 1.45, 0.145,
        parchment, Math.PI / 2)
    } else {
      frame(section, 0.06, 0.50, 0.032, instrumentX, 1.45, 0.108, wornMetal)
      frame(section, 0.32, 0.055, 0.034, instrumentX, 1.56, 0.113, wornMetal)
      for (const x of [-0.26, 0.26])
        rod(section, 0.029, 0.11, instrumentX + x, 1.18, 0.125, parchment)
    }
    // A second visual reference point creates asymmetric room identity.
    const rhs = room.w * 0.28
    frame(section, 0.96, 0.78, 0.07, rhs, 1.53, 0.013, dark)
    frame(section, 0.84, 0.66, 0.012, rhs, 1.53, 0.067, parchment)
    frame(section, 0.77, 0.049, 0.013, rhs, 1.74, 0.079, oxidised)
    for (let i = 0; i < 6; i++)
      frame(section, i % 2 ? 0.53 : 0.63, 0.013, 0.009,
        rhs - 0.045, 1.61 - i * 0.082, 0.080, wornMetal)
    // Continuous service cable near the cornice, clamped to the front wall.
    frame(section, room.w * 0.87, 0.029, 0.046, 0, 3.12, 0.0, oxidised)
    for (const x of [-room.w * 0.38, 0, room.w * 0.38]) {
      frame(section, 0.057, 0.12, 0.063, x, 3.08, 0.017, steel)
    }
  }
  scene.add(root)
  return () => {
    scene.remove(root)
    const disposed = new Set<THREE.Material>()
    root.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return
      obj.geometry.dispose()
      const m = obj.material
      const arr = Array.isArray(m) ? m : [m]
      for (const mat of arr) {
        if (disposed.has(mat)) continue
        disposed.add(mat)
        mat.dispose()
      }
    })
    retained.forEach((tex) => tex.dispose())
  }
}
