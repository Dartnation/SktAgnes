import * as THREE from 'three'
import { FLOOR_Y, WALL_H, type PropDef, type RoomDef } from './data'

/**
 * V3 cinematic art pass: curated world-space detail, not game logic.
 * All large furniture is still owned by world.props, where collision is defined.
 * Small repeatable set dressing is batched by material/shape for WebGL.
 */
type Shape = 'box' | 'rod' | 'orb' | 'ring' | 'sheet'
type Finish =
  | 'paint' | 'iron' | 'brass' | 'porcelain' | 'glass' | 'oak'
  | 'paper' | 'cloth' | 'rubber' | 'shadow' | 'warm' | 'rust'
type Place = { shape: Shape; finish: Finish; transform: THREE.Matrix4 }

const LABELS: Record<string, [string, string]> = {
  reception: ['MODTAGELSE', 'NATTEVAGT 1987'],
  patientgang: ['PATIENTFLØJEN', 'STUE 01 - 08'],
  operationsstue: ['OPERATION', 'STERILT OMRÅDE'],
  slagterum: ['SERVICEFLØJ', 'PERSONALEADGANG'],
  arkiv: ['JOURNALARKIV', 'ADGANG BEGRÆNSET'],
  laboratorium: ['LABORATORIUM', 'PRØVEREGISTER'],
  obduktion: ['OBDUKTION', 'REGISTRERING'],
  personalerum: ['PERSONALE', 'VAGTSKIFTE'],
  kaeldergang: ['TEKNISK DRIFT', 'HØJSPÆNDING'],
  kapel: ['SANKT AGNES', 'GRUNDLAGT 1907'],
  observation: ['OBSERVATION', 'ADGANG KUN PERSONALE'],
  kammer: ['ISOLATION', 'PATIENTJOURNAL'],
  trappe0: ['TRAPPE', 'STUEETAGE'],
  trappe1: ['TRAPPE', 'FØRSTE SAL'],
  trappe2: ['TRAPPE', 'KÆLDERFLØJ'],
}

export function addCinematicArtV3(scene: THREE.Scene, rooms: RoomDef[], props: PropDef[]): () => void {
  const root = new THREE.Group()
  root.name = 'SktAgnes_CinematicArtV3'
  const geo: Record<Shape, THREE.BufferGeometry> = {
    box: new THREE.BoxGeometry(1, 1, 1),
    rod: new THREE.CylinderGeometry(0.5, 0.5, 1, 12),
    orb: new THREE.SphereGeometry(0.5, 12, 9),
    ring: new THREE.TorusGeometry(0.5, 0.075, 7, 15),
    sheet: new THREE.PlaneGeometry(1, 1),
  }
  // Tiny deterministic wear maps add grain/pitting without importing heavy textures.
  // These are art assets for the static details, not scanned photorealistic PBR.
  const wearMaps: THREE.CanvasTexture[] = []
  const wearMap = (seed: number, direction: 'grain' | 'scratch' | 'pitted') => {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 128
    const ctx = canvas.getContext('2d')
    let state = seed >>> 0
    const random = () => {
      state = (state * 1664525 + 1013904223) >>> 0
      return state / 4294967296
    }
    if (ctx) {
      ctx.fillStyle = '#e4e1d9'
      ctx.fillRect(0, 0, 128, 128)
      for (let i = 0; i < 490; i++) {
        const x = random() * 128, y = random() * 128
        const a = 0.02 + random() * 0.14
        ctx.fillStyle = 'rgba(26,24,20,' + a.toFixed(3) + ')'
        ctx.fillRect(x, y, 0.5 + random() * 2.6, 0.5 + random() * 2.6)
      }
      for (let i = 0; i < 46; i++) {
        const x = random() * 128, y = random() * 128
        ctx.beginPath()
        ctx.moveTo(x, y)
        if (direction === 'grain') ctx.lineTo(x + random() * 1.5, y + 8 + random() * 50)
        else if (direction === 'scratch') ctx.lineTo(x + 4 + random() * 18, y + random() * 2)
        else ctx.arc(x, y, 0.3 + random() * 2.8, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(41,33,24,' + (0.04 + random() * 0.17).toFixed(3) + ')'
        ctx.lineWidth = 0.6
        ctx.stroke()
      }
    }
    const map = new THREE.CanvasTexture(canvas)
    map.colorSpace = THREE.SRGBColorSpace
    map.wrapS = map.wrapT = THREE.RepeatWrapping
    wearMaps.push(map)
    return map
  }
  const materials: Record<Finish, THREE.MeshStandardMaterial> = {
    paint: new THREE.MeshStandardMaterial({ color: '#65716a', map: wearMap(81, 'pitted'), roughness: 0.83, metalness: 0.13 }),
    iron: new THREE.MeshStandardMaterial({ color: '#5d5e5b', map: wearMap(73, 'scratch'), roughness: 0.62, metalness: 0.77 }),
    brass: new THREE.MeshStandardMaterial({ color: '#8d7b5e', map: wearMap(52, 'scratch'), roughness: 0.53, metalness: 0.8 }),
    porcelain: new THREE.MeshStandardMaterial({ color: '#aaa699', roughness: 0.78, metalness: 0 }),
    glass: new THREE.MeshStandardMaterial({ color: '#62746e', roughness: 0.22, metalness: 0.08, transparent: true, opacity: 0.62, depthWrite: false }),
    oak: new THREE.MeshStandardMaterial({ color: '#584438', map: wearMap(110, 'grain'), roughness: 0.9 }),
    paper: new THREE.MeshStandardMaterial({ color: '#b3a58e', map: wearMap(15, 'pitted'), roughness: 1, side: THREE.DoubleSide }),
    cloth: new THREE.MeshStandardMaterial({ color: '#504c47', map: wearMap(126, 'grain'), roughness: 1, side: THREE.DoubleSide }),
    rubber: new THREE.MeshStandardMaterial({ color: '#242a29', roughness: 0.94 }),
    shadow: new THREE.MeshStandardMaterial({ color: '#1c2020', roughness: 1 }),
    warm: new THREE.MeshStandardMaterial({ color: '#927c56', roughness: 0.75, emissive: '#24190c', emissiveIntensity: 0.09 }),
    rust: new THREE.MeshStandardMaterial({ color: '#745244', map: wearMap(48, 'pitted'), roughness: 0.92, metalness: 0.44 }),
  }
  const batches = new Map<string, Place[]>()
  const decorated = new Set<string>()
  let itemCount = 0
  const place = (r: RoomDef, shape: Shape, finish: Finish,
    x: number, y: number, z: number, w: number, h: number, d: number,
    rx = 0, ry = 0, rz = 0) => {
    const matrix = new THREE.Matrix4()
    matrix.compose(
      new THREE.Vector3(r.x + x, FLOOR_Y[r.floor] + y, r.z + z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
      new THREE.Vector3(w, h, d),
    )
    const key = shape + ':' + finish
    const list = batches.get(key) ?? []
    list.push({ shape, finish, transform: matrix })
    batches.set(key, list)
    itemCount++
  }
  const b = (r: RoomDef, f: Finish, x: number, y: number, z: number,
    w: number, h: number, d: number, rot = 0) => place(r, 'box', f, x, y, z, w, h, d, 0, rot)
  const tube = (r: RoomDef, f: Finish, x: number, y: number, z: number,
    radius: number, height: number, rx = 0, ry = 0, rz = 0) =>
    place(r, 'rod', f, x, y, z, radius * 2, height, radius * 2, rx, ry, rz)
  const vial = (r: RoomDef, x: number, y: number, z: number, scale = 1) => {
    tube(r, 'glass', x, y + 0.08 * scale, z, 0.041 * scale, 0.16 * scale)
    tube(r, 'rust', x, y + 0.17 * scale, z, 0.048 * scale, 0.025 * scale)
    b(r, 'paper', x, y + 0.09 * scale, z + 0.045 * scale, 0.072 * scale, 0.038 * scale, 0.007)
  }
  const folder = (r: RoomDef, x: number, y: number, z: number, n: number) => {
    for (let i = 0; i < n; i++) {
      const h = (0.12 + (i % 3) * 0.017)
      b(r, i % 4 === 0 ? 'cloth' : 'paper', x + i * 0.035, y + h / 2, z,
        0.025, h, 0.22)
      b(r, 'brass', x + i * 0.035, y + h * 0.65, z + 0.115,
        0.013, 0.015, 0.008)
    }
  }
  const chart = (r: RoomDef, x: number, y: number, z: number) => {
    b(r, 'oak', x, y, z, 0.67, 0.88, 0.04)
    b(r, 'paper', x, y, z + 0.029, 0.59, 0.78, 0.008)
    b(r, 'iron', x, y + 0.36, z + 0.045, 0.16, 0.044, 0.025)
    for (let i = 0; i < 7; i++) {
      b(r, i === 4 ? 'rust' : 'shadow', x - 0.19 + (i % 2) * 0.038, y + 0.22 - i * 0.07,
        z + 0.037, 0.3 - (i % 3) * 0.053, 0.009, 0.007)
    }
  }
  const pipe = (r: RoomDef, x: number, y: number, z: number, length: number) => {
    tube(r, 'iron', x + length / 2, y, z, 0.043, length, 0, 0, Math.PI / 2)
    for (const dx of [0.35, length - 0.25]) {
      place(r, 'ring', 'rust', x + dx, y, z, 0.16, 0.16, 0.16, 0, Math.PI / 2)
    }
  }
  const dial = (r: RoomDef, x: number, y: number, z: number) => {
    place(r, 'rod', 'iron', x, y, z, 0.27, 0.043, 0.27, Math.PI / 2)
    place(r, 'rod', 'paper', x, y, z + 0.027, 0.19, 0.014, 0.19, Math.PI / 2)
    b(r, 'shadow', x + 0.034, y + 0.011, z + 0.035, 0.075, 0.008, 0.008, 0.44)
  }
  const candle = (r: RoomDef, x: number, y: number, z: number, h: number) => {
    tube(r, 'porcelain', x, y + h / 2, z, 0.055, h)
    tube(r, 'warm', x, y + h + 0.02, z, 0.024, 0.06)
  }
  const wallPlaques: THREE.Material[] = []
  const wallTextures: THREE.Texture[] = []
  const poster = (r: RoomDef, x: number, y: number, z: number,
    width: number, height: number, facing: 1 | -1, header: string, sub: string) => {
    const c = document.createElement('canvas')
    c.width = 768
    c.height = 384
    const g = c.getContext('2d')
    if (!g) return
    g.fillStyle = '#302d2a'
    g.fillRect(0, 0, c.width, c.height)
    g.fillStyle = '#b9ae91'
    g.fillRect(30, 27, 708, 330)
    g.fillStyle = '#746d5c'
    g.fillRect(45, 41, 678, 300)
    g.fillStyle = '#d0c3a5'
    g.fillRect(52, 47, 664, 288)
    g.fillStyle = '#3a3b36'
    g.textAlign = 'center'
    g.font = 'bold 49px Georgia,serif'
    g.fillText(header, 384, 148, 650)
    g.fillStyle = '#67574b'
    g.font = '33px Georgia,serif'
    g.fillText(sub, 384, 217, 655)
    g.fillStyle = '#6d302b'
    g.fillRect(275, 257, 220, 5)
    for (let i = 0; i < 520; i++) {
      const x0 = (i * 173 + 17) % 768
      const y0 = (i * 101 + 53) % 384
      g.fillStyle = i % 3 === 0 ? 'rgba(46,31,20,0.20)' : 'rgba(70,59,41,0.09)'
      g.fillRect(x0, y0, 2 + (i % 5), 1 + (i % 3))
    }
    const map = new THREE.CanvasTexture(c)
    map.colorSpace = THREE.SRGBColorSpace
    map.anisotropy = 4
    const mat = new THREE.MeshStandardMaterial({ map, roughness: 0.93 })
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat)
    sign.position.set(r.x + x, FLOOR_Y[r.floor] + y, r.z + z)
    if (facing === -1) sign.rotation.y = Math.PI
    sign.name = 'V3_Poster_' + r.id + '_' + header
    root.add(sign)
    wallPlaques.push(mat)
    wallTextures.push(map)
    b(r, 'iron', x, y, z + facing * -0.027, width + 0.10, height + 0.10, 0.048)
  }
  for (const r of rooms) {
    if (r.outdoors) continue
    // Architectural dressing uses the rear/front wall strips, well away from
    // all inter-room doorways (which sit in the X-side walls near z≈6).
    // These are visual, non-colliding details – no changes to world.props.
    const skirting: Finish = r.wallMat === 'panel' ? 'oak' : r.wallMat === 'brick' ? 'iron' : 'paint'
    for (const z of [0.155, r.d - 0.155]) {
      b(r, skirting, r.w * 0.5, 0.13, z, r.w - 0.42, 0.22, 0.066)
      b(r, 'shadow', r.w * 0.5, 0.25, z + (z < r.d * 0.5 ? 0.01 : -0.01),
        r.w - 0.42, 0.017, 0.07)
      // Slender moulding breaks up bare walls without manufacturing props.
      b(r, skirting, r.w * 0.5, WALL_H - 0.13, z,
        r.w - 0.40, 0.14, 0.11)
      b(r, 'shadow', r.w * 0.5, WALL_H - 0.21, z,
        r.w - 0.42, 0.022, 0.08)
    }
    // A muted wall plate on the side of each doorway; not an interactable.
    b(r, 'iron', 0.15, 1.36, 5.05, 0.043, 0.23, 0.155)
    b(r, 'porcelain', 0.175, 1.39, 5.05, 0.024, 0.115, 0.063)
    b(r, 'shadow', 0.192, 1.405, 5.05, 0.009, 0.044, 0.022)
    // All additional geometry stays at walls, above tables or inside existing furniture.
    // Never obstruct central door approach (z ~ 6) with decorative objects.
    const x = r.w - 0.95
    const title = LABELS[r.id]
    if (title) {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 192
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#262c2b'
        ctx.fillRect(0, 0, 512, 192)
        ctx.fillStyle = '#827b68'
        ctx.fillRect(11, 11, 490, 170)
        ctx.fillStyle = '#b9ab91'
        ctx.fillRect(15, 15, 482, 162)
        ctx.fillStyle = '#292a29'
        ctx.font = 'bold 35px Georgia, serif'
        ctx.textAlign = 'center'
        ctx.fillText(title[0], 256, 79, 465)
        ctx.font = '25px Georgia, serif'
        ctx.fillText(title[1], 256, 127, 465)
        for (let j = 0; j < 190; j++) {
          const px = (j * 71 + r.id.length * 37) % 512
          const py = (j * 47 + r.floor * 59) % 192
          ctx.fillStyle = j % 2 ? 'rgba(40,40,28,.13)' : 'rgba(244,218,171,.09)'
          ctx.fillRect(px, py, 1 + (j % 3), 1 + (j % 2))
        }
        const map = new THREE.CanvasTexture(canvas)
        map.colorSpace = THREE.SRGBColorSpace
        map.anisotropy = 2
        const mat = new THREE.MeshStandardMaterial({ map, roughness: 0.93, metalness: 0.03 })
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 0.47), mat)
        sign.position.set(r.x + x, FLOOR_Y[r.floor] + 1.69, r.z + 0.156)
        sign.name = 'V3_Sign_' + r.id
        root.add(sign)
        wallTextures.push(map)
        wallPlaques.push(mat)
        b(r, 'iron', x, 1.69, 0.13, 1.35, 0.56, 0.045)
      }
    }
    // Scuffed enamel wall protector and sparse rusted mounting studs.
    for (let i = 0; i < 3; i++) {
      b(r, 'paint', 0.75 + i * 0.72, 0.86, 0.205, 0.60, 0.08, 0.045)
      tube(r, 'iron', 0.46 + i * 0.72, 0.86, 0.253, 0.022, 0.032, Math.PI / 2)
    }
    switch (r.id) {
      case 'reception': {
        // Mail pigeonholes above the existing night desk.
        b(r, 'oak', 4.35, 1.79, 0.28, 1.85, 0.87, 0.42)
        for (let i = 0; i < 6; i++) {
          const sx = 3.60 + (i % 3) * 0.69
          const sy = 1.58 + Math.floor(i / 3) * 0.43
          b(r, 'shadow', sx, sy, 0.505, 0.58, 0.31, 0.015)
          folder(r, sx - 0.23, sy - 0.13, 0.54, 4)
        }
        chart(r, 7.55, 1.78, 0.29)
        for (let i = 0; i < 3; i++) vial(r, 9.22 + i * 0.14, 1.04, 9.67)
        // Large, unmistakable period hospital reception identity.
        poster(r, 4.25, 2.53, 11.78, 3.1, 0.91, -1, 'SANKT AGNES', 'MODTAGELSE  •  NATTJENESTE')
        poster(r, 9.25, 2.13, 11.78, 1.55, 0.85, -1, 'VISITATION', 'JOURNALER / 1987')
        // Vintage desk telephone: base, handset, rotary dial and cord.
        b(r, 'rubber', 3.24, 1.19, 9.42, 0.36, 0.12, 0.23)
        b(r, 'iron', 3.24, 1.28, 9.42, 0.20, 0.030, 0.12)
        place(r, 'rod', 'porcelain', 3.24, 1.271, 9.34, 0.118, 0.018, 0.118, Math.PI / 2)
        for (let i = 0; i < 8; i++) {
          const a = i * Math.PI / 4
          place(r, 'orb', 'shadow',
            3.24 + Math.cos(a) * 0.041, 1.295, 9.34 + Math.sin(a) * 0.041,
            0.016, 0.009, 0.016)
        }
        // Reception lamp, paperwork and metal bell on the counter top.
        b(r, 'brass', 4.65, 1.19, 9.56, 0.22, 0.025, 0.18)
        tube(r, 'brass', 4.65, 1.39, 9.56, 0.017, 0.38)
        place(r, 'orb', 'warm', 4.65, 1.59, 9.55, 0.34, 0.14, 0.22)
        folder(r, 3.65, 1.17, 9.68, 8)
        folder(r, 4.12, 1.17, 9.66, 5)
        place(r, 'orb', 'brass', 4.95, 1.23, 9.22, 0.18, 0.10, 0.18)
        b(r, 'brass', 4.95, 1.17, 9.22, 0.21, 0.027, 0.21)
        // Stronger period radiator / wall fixture silhouettes in waiting area.
        b(r, 'iron', 7.35, 0.48, 11.69, 2.05, 0.46, 0.14)
        for (let i = 0; i < 11; i++)
          b(r, 'paint', 6.48 + i * 0.17, 0.48, 11.58, 0.08, 0.36, 0.08)
        break
      }
      case 'patientgang': {
        // Nurse call station at one end, handrails and worn patient charts.
        b(r, 'paint', 7.6, 1.35, 0.28, 1.27, 0.8, 0.19)
        for (let i = 0; i < 4; i++) b(r, i === 0 ? 'warm' : 'shadow', 7.23 + i * 0.25, 1.52, 0.393, 0.085, 0.12, 0.02)
        chart(r, 9.57, 1.78, 0.28)
        poster(r, 5.5, 2.62, 11.78, 1.78, 0.72, -1, 'PATIENTFLØJ', 'STUE 01–08  •  STILHED')
        pipe(r, 1.6, 1.05, 11.68, 2.3)
        pipe(r, 7.2, 1.05, 11.68, 2.2)
        break
      }
      case 'operationsstue': {
        b(r, 'iron', 9.2, 1.68, 0.31, 1.43, 1.57, 0.30)
        for (let i = 0; i < 3; i++) {
          b(r, 'glass', 8.73 + i * 0.48, 1.72, 0.49, 0.40, 0.93, 0.027)
          b(r, 'paint', 8.73 + i * 0.48, 1.18, 0.51, 0.40, 0.055, 0.025)
        }
        for (let i = 0; i < 6; i++) vial(r, 9.3 + (i % 3) * 0.18, 1.3 + Math.floor(i / 3) * 0.38, 0.42, 0.7)
        b(r, 'iron', 1.7, 1.09, 10.55, 0.94, 0.045, 0.4)
        for (let i = 0; i < 3; i++) b(r, 'brass', 1.45 + i * 0.25, 1.16, 10.58, 0.018, 0.032, 0.27)
        break
      }
      case 'slagterum': {
        b(r, 'iron', 6.7, 0.82, 0.36, 1.36, 0.12, 0.57)
        b(r, 'porcelain', 6.7, 0.87, 0.37, 1.14, 0.08, 0.45)
        for (let i = 0; i < 4; i++) {
          tube(r, 'rust', 4.3 + i * 0.37, 2.58, 0.55, 0.016, 0.46)
          place(r, 'ring', 'iron', 4.3 + i * 0.37, 2.31, 0.55, 0.17, 0.18, 0.17)
        }
        pipe(r, 2.7, 2.92, 0.52, 5.4)
        break
      }
      case 'arkiv': {
        // Archive labels and readable microfilm silhouette, separate from safe.
        chart(r, 6.7, 1.74, 0.30)
        poster(r, 6.45, 2.52, 11.78, 2.24, 0.72, -1, 'ARKIVET', 'INGEN ADGANG UDEN NØGLE')
        b(r, 'oak', 4.1, 0.64, 9.42, 0.76, 1.26, 0.38)
        for (let i = 0; i < 10; i++) folder(r, 3.80 + (i % 5) * 0.16, 0.83 + Math.floor(i / 5) * 0.45, 9.32, 2)
        b(r, 'iron', 7.7, 1.18, 2.34, 0.52, 0.31, 0.4)
        for (const dx of [-0.18, 0.18]) place(r, 'ring', 'iron', 7.7 + dx, 1.35, 2.35, 0.22, 0.22, 0.22)
        break
      }
      case 'laboratorium': {
        b(r, 'iron', 9.3, 1.53, 0.28, 1.5, 1.32, 0.32)
        for (let i = 0; i < 9; i++) vial(r, 8.77 + (i % 3) * 0.22, 1.01 + Math.floor(i / 3) * 0.36, 0.53)
        dial(r, 7.1, 1.78, 0.39)
        poster(r, 6.25, 2.53, 11.78, 2.22, 0.72, -1, 'LABORATORIUM', 'PRØVER  •  ADGANG FORBUDT')
        chart(r, 5.68, 1.82, 0.28)
        break
      }
      case 'obduktion': {
        b(r, 'iron', 8.65, 0.83, 0.35, 1.16, 0.10, 0.55)
        b(r, 'shadow', 8.65, 0.86, 0.35, 0.83, 0.035, 0.30)
        for (let i = 0; i < 4; i++) vial(r, 8.33 + i * 0.20, 0.88, 0.28)
        chart(r, 6.9, 1.79, 0.25)
        for (let i = 0; i < 3; i++) b(r, 'brass', 4.10 + i * 0.19, 1.07, 9.23, 0.028, 0.022, 0.29, 0.1)
        break
      }
      case 'personalerum': {
        b(r, 'oak', 7.6, 1.71, 0.29, 1.72, 0.95, 0.10)
        for (let i = 0; i < 7; i++) b(r, i % 3 === 0 ? 'cloth' : 'paper', 7.1 + (i % 4) * 0.35, 1.92 - Math.floor(i / 4) * 0.4, 0.36, 0.29, 0.34, 0.012, i % 2 ? 0.08 : -0.08)
        chart(r, 4.7, 1.72, 0.27)
        for (let i = 0; i < 3; i++) vial(r, 9.54 + i * 0.16, 1.06, 9.32)
        break
      }
      case 'kaeldergang': {
        // Pipes, three meters, spare tools and status panel near the generator.
        b(r, 'iron', 8.6, 1.74, 0.31, 1.47, 1.01, 0.25)
        for (let i = 0; i < 3; i++) dial(r, 8.12 + i * 0.48, 1.89, 0.47)
        pipe(r, 1.5, 2.43, 0.38, 6.4)
        for (let i = 0; i < 5; i++) b(r, 'rust', 1.8 + i * 0.12, 0.94, 9.18, 0.04, 0.038, 0.38)
        break
      }
      case 'kapel': {
        for (let i = 0; i < 7; i++) candle(r, 4.2 + i * 0.35, 1.03, 9.4, 0.12 + (i % 3) * 0.05)
        b(r, 'oak', 6.4, 2.03, 0.27, 0.12, 0.74, 0.10)
        b(r, 'oak', 6.4, 2.17, 0.34, 0.47, 0.11, 0.07)
        chart(r, 9.2, 1.67, 0.29)
        break
      }
      case 'observation': {
        b(r, 'iron', 5.0, 1.84, 0.28, 1.90, 1.0, 0.06)
        b(r, 'glass', 5.0, 1.84, 0.327, 1.71, 0.81, 0.016)
        chart(r, 8.45, 1.8, 0.28)
        b(r, 'shadow', 9.13, 0.83, 9.11, 0.39, 0.02, 0.72)
        break
      }
      case 'kammer': {
        b(r, 'oak', 7.7, 1.66, 0.28, 1.1, 0.71, 0.09)
        for (let i = 0; i < 9; i++) b(r, 'shadow', 7.26 + (i % 3) * 0.35, 1.35 + Math.floor(i / 3) * 0.18, 0.35, 0.28, 0.016, 0.013)
        chart(r, 3.8, 1.79, 0.25)
        folder(r, 2.12, 1.34, 2.18, 5)
        break
      }
      case 'trappe0':
      case 'trappe1':
      case 'trappe2': {
        // Architectural shaft identity: wall handrails, old level signs and
        // visible electrical trunking. Narrow new flights stay clear of these.
        for (const x of [0.29, 7.71]) {
          b(r, 'iron', x, 1.15, 3.0, 0.065, 0.075, 3.95)
          b(r, 'brass', x, 1.18, 3.0, 0.095, 0.018, 3.95)
          for (const zz of [1.25, 3.0, 4.75])
            b(r, 'iron', x, 1.0, zz, 0.14, 0.33, 0.052)
          b(r, 'iron', x, 2.90, 7.45, 0.065, 0.075, 3.70)
          for (const zz of [5.76, 7.3, 9.07])
            b(r, 'iron', x, 2.75, zz, 0.14, 0.33, 0.052)
        }
        pipe(r, 0.75, 3.07, 11.70, 5.7)
        poster(r, 4.0, 1.72, 11.79, 2.70, 0.76, -1,
          'TRAPPEOPGANG', r.floor === 0 ? 'TIL 1. SAL' : r.floor === 1 ? 'TIL 2. SAL' : 'UDGANG')
        b(r, 'paint', 6.6, 1.34, 0.38, 0.78, 1.04, 0.19)
        for (let i = 0; i < 6; i++)
          b(r, i === 0 ? 'rust' : 'iron', 6.35 + (i % 3) * 0.24,
            1.65 - Math.floor(i / 3) * 0.37, 0.493, 0.13, 0.13, 0.028)
        break
      }
    }
  }
  // Dress existing shelves/carts with real world anchors, without adding duplicate
  // furniture and without intersecting the game's navmesh or interaction radii.
  const roomById = new Map(rooms.map((r) => [r.id, r]))
  for (const p of props) {
    const r = roomById.get(p.room)
    if (!r) continue
    const x = p.x - r.x
    const z = p.z - r.z
    if (p.kind === 'shelf' || p.kind === 'bookshelf') {
      for (let tier = 0; tier < 2; tier++) {
        const y = p.h * (0.47 + tier * 0.28) + 0.02
        folder(r, x - p.w * 0.36, y, z, Math.min(7, Math.floor(p.w * 7)))
      }
      decorated.add(p.id)
    } else if (p.kind === 'medicalcart') {
      for (let i = 0; i < 3; i++) vial(r, x - 0.19 + i * 0.18, p.h - 0.04, z - 0.05, 0.75)
      b(r, 'cloth', x + 0.05, p.h + 0.025, z + 0.15, 0.30, 0.055, 0.17)
      decorated.add(p.id)
    }
  }

  for (const [key, list] of batches) {
    const [shape, finish] = key.split(':') as [Shape, Finish]
    const mesh = new THREE.InstancedMesh(geo[shape], materials[finish], list.length)
    list.forEach((part, i) => mesh.setMatrixAt(i, part.transform))
    mesh.instanceMatrix.needsUpdate = true
    mesh.castShadow = false
    mesh.receiveShadow = false
    // Instancing spans multiple rooms; the renderer cannot cull per-room.
    mesh.frustumCulled = false
    mesh.name = 'V3C_' + key
    root.add(mesh)
  }
  root.userData.visualPartCount = itemCount
  root.userData.decoratedFurniture = [...decorated]
  root.userData.visualOnly = true
  scene.add(root)
  return () => {
    scene.remove(root)
    Object.values(geo).forEach((g) => g.dispose())
    Object.values(materials).forEach((m) => m.dispose())
    wearMaps.forEach((map) => map.dispose())
    for (const m of wallPlaques) m.dispose()
    for (const t of wallTextures) t.dispose()
    for (const child of root.children) {
      if (child instanceof THREE.Mesh && child.name.startsWith('V3_Sign_')) child.geometry.dispose()
    }
  }
}
