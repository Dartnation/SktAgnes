import * as THREE from 'three'
import { hashString } from '../core/math'
import { FLOOR_Y, WALL_H, type RoomDef } from './data'

/**
 * Non-interactive small-scale set dressing. Large furniture lives in PROPS
 * where navigation/collision already knows about it. All details here sit
 * against the wall or on existing tables and do not change gameplay.
 */
export function addHospitalSetDressing(scene: THREE.Scene, rooms: RoomDef[]): () => void {
  const root = new THREE.Group()
  root.name = 'SktAgnes_SetDressing_V2'
  const rust = new THREE.MeshStandardMaterial({ color: '#4f4940', metalness: 0.65, roughness: 0.88 })
  const black = new THREE.MeshStandardMaterial({ color: '#242528', roughness: 0.94, metalness: 0.22 })
  const paper = new THREE.MeshStandardMaterial({ color: '#b1a48b', roughness: 1, side: THREE.DoubleSide })
  const glass = new THREE.MeshStandardMaterial({ color: '#2f3935', transparent: true, opacity: 0.65, metalness: 0.23, roughness: 0.24 })
  const cloth = new THREE.MeshStandardMaterial({ color: '#4e4844', roughness: 1, side: THREE.DoubleSide })
  const stains = new THREE.MeshBasicMaterial({ color: '#241916', transparent: true, opacity: 0.43, depthWrite: false })
  const labels = new Set<THREE.CanvasTexture>()
  const palettes = [rust, black, paper, glass, cloth, stains]

  const box = (w: number, h: number, d: number, x: number, y: number, z: number, mat: THREE.Material) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat)
    mesh.position.set(x, y, z)
    mesh.castShadow = true
    mesh.receiveShadow = true
    root.add(mesh)
    return mesh
  }
  const tube = (a: THREE.Vector3, b: THREE.Vector3, radius: number, mat: THREE.Material) => {
    const delta = b.clone().sub(a)
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), 7), mat)
    mesh.position.copy(a).addScaledVector(delta, 0.5)
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), delta.normalize())
    mesh.castShadow = true
    root.add(mesh)
  }
  const sign = (label: string, x: number, y: number, z: number) => {
    const canvas = document.createElement('canvas')
    canvas.width = 384
    canvas.height = 160
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#aaa08d'
    ctx.fillRect(0,0,384,160)
    ctx.fillStyle = '#34312d'
    ctx.fillRect(12,12,360,136)
    ctx.strokeStyle = '#655f53'
    ctx.lineWidth = 3
    ctx.strokeRect(24,25,335,110)
    ctx.textAlign = 'center'
    ctx.fillStyle = '#c6b39a'
    ctx.font = 'bold 29px Georgia'
    ctx.fillText(label,192,76)
    ctx.font = '16px monospace'
    ctx.fillText('SKT. AGNES  •  1987',192,107)
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    labels.add(texture)
    const material = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.93 })
    palettes.push(material)
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(0.96,0.40),material)
    mesh.position.set(x,y,z)
    root.add(mesh)
  }

  const roomTitles: Record<string,string> = {
    reception:'MODTAGELSE', patientgang:'PATIENTER', operationsstue:'STERILT', slagterum:'FORBUDT',
    arkiv:'JOURNALER', laboratorium:'LABORATORIUM', obduktion:'SEKTIONSSTUE',
    personalerum:'PERSONALE', kaeldergang:'KÆLDER', kapel:'STILHED',
    observation:'OBSERVATION', kammer:'ISOLATION', stilhed:'UDGANG',
    trappe0:'ETAGE 1', trappe1:'ETAGE 2', trappe2:'ETAGE 3',
  }
  // Curated tabletop anchors match the current furniture; not arbitrary floats.
  const tabletop: Record<string,[number,number,number]> = {
    reception:[4,0.83,9.5], operationsstue:[30,0.91,9.2],
    slagterum:[42,0.86,9.4], arkiv:[8,0.80,2.4],
    laboratorium:[16,0.97,9.2], obduktion:[30,0.88,9],
    personalerum:[45.8,0.96,9.2], observation:[30,0.82,2.4],
  }
  for (const room of rooms) {
    if (room.outdoors) continue
    const base = FLOOR_Y[room.floor]
    const seed = hashString('set-dressing-' + room.id) >>> 0
    const rand = (n: number) => (((seed ^ (n * 2654435761)) >>> 0) % 1000) / 1000

    // Corroded overhead water/steam conduit with brackets. Parallel to a wall,
    // well above the player and away from doors.
    const pipeY = base + WALL_H - 0.34
    const wallZ = room.z + 0.19
    tube(new THREE.Vector3(room.x+0.4,pipeY,wallZ),
      new THREE.Vector3(room.x+room.w-0.4,pipeY,wallZ),0.034,rust)
    for (let i=1;i<=3;i++) {
      const x = room.x + (room.w * i) / 4
      box(0.08,0.13,0.11,x,pipeY,wallZ-0.03,black)
    }

    sign(roomTitles[room.id] ?? 'AFDELING', room.x + Math.min(room.w-1.3, 1.75), base+1.68, room.z + 0.145)

    // Accumulated debris and patient paperwork near corners, never in door aisle.
    for (let i=0; i<4; i++) {
      const x = room.x + 0.75 + i * 0.14 + rand(i+3) * 0.4
      const z = room.z + 0.7 + rand(i+7) * 0.65
      const page = new THREE.Mesh(new THREE.PlaneGeometry(0.21 + rand(i+11)*0.14,0.19),paper)
      page.rotation.x = -Math.PI / 2
      page.rotation.z = (rand(i+17)-0.5)*1.0
      page.position.set(x,base + 0.079 + i*0.0005,z)
      page.receiveShadow = true
      root.add(page)
    }
    const stain = new THREE.Mesh(new THREE.CircleGeometry(0.27+rand(19)*0.38,13),stains)
    stain.rotation.x = -Math.PI / 2
    stain.position.set(room.x + room.w*0.77,base+0.081,room.z+1.15)
    stain.scale.set(1.5,0.65,1)
    root.add(stain)

    // Small discarded cloth / bandage fold at the far wall.
    const fold = new THREE.Mesh(new THREE.PlaneGeometry(0.54,0.28),cloth)
    fold.rotation.x = -Math.PI / 2
    fold.rotation.z = rand(41)
    fold.position.set(room.x+room.w-1.1,base+0.085,room.z+room.d-0.8)
    root.add(fold)

    const anchor = tabletop[room.id]
    if (anchor) {
      const [x,y,z] = anchor
      const h = base+y
      // Paper files and folders with slightly staggered spines.
      for(let i=0;i<4;i++) {
        box(0.28,0.012,0.20,x-0.38+i*0.03,h+i*0.014,z-0.08, i%2?paper:cloth)
      }
      // Rusted scalpel tray / ink dish and glass medicine vials.
      box(0.30,0.035,0.16,x+0.34,h+0.025,z+0.12,black)
      for(let i=0;i<3;i++) {
        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.028,0.032,0.13+i*0.028,8),glass)
        cyl.position.set(x+0.23+i*0.09,h+0.115+i*0.013,z-0.14)
        cyl.castShadow=true
        root.add(cyl)
      }
    }
    // Illuminated emergency exits are deliberately omitted: the player should
    // rely on the flashlight and readable environmental clues.
  }
  scene.add(root)
  return () => {
    scene.remove(root)
    root.traverse(object => {
      if (object instanceof THREE.Mesh) object.geometry.dispose()
    })
    palettes.forEach(m=>m.dispose())
    labels.forEach(t=>t.dispose())
  }
}
