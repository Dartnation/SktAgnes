import * as THREE from 'three'
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { hashString } from '../core/math'
import { FLOOR_Y, WALL_H, type RoomDef } from './data'
import type { DoorInst, LightDef, World } from './buildWorld'
import { applySurfacePhotos, type SurfaceSet } from './photoSurfaces'
import { createMaterials, type Materials } from './textures'
import { addHospitalSetDressing } from './SetDressing'
import { addVisualV3 } from './VisualV3'
import { addCinematicArtV3 } from './CinematicArtV3'

export interface BuiltWorld {
  materials: Materials
  doors: Map<string, THREE.Group>
  pickups: Map<string, THREE.Object3D>
  lights: { def: LightDef; light: THREE.Light; base: number; lens?: THREE.MeshStandardMaterial }[]
  mannequin: THREE.Object3D
  pot: THREE.Object3D
  secretShelf: THREE.Object3D
  detail: THREE.Object3D[]
  rain: THREE.Points
  photoSlots: number
  dispose(): void
}

const FLOOR_MAT: Record<RoomDef['floorMat'], keyof Materials> = {
  wood: 'wood',
  tile: 'tileFloor',
  concrete: 'concrete',
  carpet: 'carpet',
  stone: 'stone',
}

const WALL_MAT: Record<RoomDef['wallMat'], keyof Materials> = {
  plaster: 'plaster',
  tile: 'tileWall',
  concrete: 'concrete',
  panel: 'panel',
  brick: 'brick',
  damp: 'damp',
}

export function buildLevel(scene: THREE.Scene, world: World, photos?: Map<string, SurfaceSet> | null): BuiltWorld {
  const materials = createMaterials()
  const photoSlots = photos ? applySurfacePhotos(materials, photos) : 0
  const disposeDressing = addHospitalSetDressing(scene, world.rooms)
  const disposeVisualV3 = addVisualV3(scene, world.rooms)
  const disposeCinematicArtV3 = addCinematicArtV3(scene, world.rooms, world.props)
  const buckets = new Map<string, THREE.BufferGeometry[]>()
  const push = (key: string, geo: THREE.BufferGeometry) => {
    const list = buckets.get(key) ?? []
    list.push(geo)
    buckets.set(key, list)
  }

  for (const room of world.rooms) {
    const y = FLOOR_Y[room.floor]
    const floorKey = `${room.id}|${FLOOR_MAT[room.floorMat]}`
    for (const part of subtractRect(room, floorHoles(room.id, world))) {
      push(floorKey, slab(part.x, y + 0.02, part.z, part.w, 0.08, part.d))
    }
    if (!room.outdoors) {
      const ceilKey = `${room.id}|ceiling`
      const ch = y + WALL_H - 0.05
      for (const part of subtractRect(room, ceilingHoles(room.id, world))) {
        push(ceilKey, slab(part.x, ch, part.z, part.w, 0.08, part.d))
      }
    }
  }

  for (const wall of world.walls) {
    const room = world.rooms.find((r) => r.id === wall.roomId)
    const mat = room ? WALL_MAT[room.wallMat] : 'plaster'
    const y = FLOOR_Y[wall.floor]
    if (wall.axis === 'x') {
      push(`${wall.roomId}|${mat}`, slab(wall.coord - 0.11, y, wall.min, 0.22, WALL_H, wall.max - wall.min))
    } else {
      push(`${wall.roomId}|${mat}`, slab(wall.min, y, wall.coord - 0.11, wall.max - wall.min, WALL_H, 0.22))
    }
    // Baseboard, sitting just inside the walkable side is ambiguous; a dark
    // strip centered on the wall reads as a skirting from both corridors.
    const trimH = 0.16
    if (wall.axis === 'x') {
      push(`${wall.roomId}|trim`, slab(wall.coord - 0.13, y, wall.min, 0.08, trimH, wall.max - wall.min))
    } else {
      push(`${wall.roomId}|trim`, slab(wall.min, y, wall.coord - 0.13, wall.max - wall.min, trimH, 0.08))
    }
  }

  for (const door of world.doors) {
    frame(door, push)
  }

  const chairParts: THREE.Matrix4[] = []
  const crateParts: THREE.Matrix4[] = []
  const barrelParts: THREE.Matrix4[] = []
  let mannequin: THREE.Object3D = new THREE.Group()
  let pot: THREE.Object3D = new THREE.Group()
  let secretShelf: THREE.Object3D = new THREE.Group()

  for (const prop of world.props) {
    const room = world.rooms.find((r) => r.id === prop.room)
    if (!room) continue
    const y = FLOOR_Y[room.floor] + (prop.yOff ?? 0)
    if (prop.kind === 'chair') {
      chairParts.push(mat4(prop.x, y, prop.z, prop.rot))
      continue
    }
    if (prop.kind === 'crate') {
      crateParts.push(mat4(prop.x, y + 0.34, prop.z, prop.rot))
      continue
    }
    if (prop.kind === 'barrel') {
      barrelParts.push(mat4(prop.x, y + 0.42, prop.z, prop.rot))
      continue
    }
    const built = buildProp(prop.kind, prop.w, prop.h, prop.d)
    if (prop.kind === 'mannequin' || prop.kind === 'pot' || prop.id === 'secretshelf') {
      const g = new THREE.Group()
      for (const part of built) {
        const mat = materials[part.mat]
        if (!(mat instanceof THREE.Material)) continue
        const mesh = new THREE.Mesh(part.geo, mat)
        mesh.castShadow = true
        mesh.receiveShadow = true
        g.add(mesh)
      }
      g.position.set(prop.x, y, prop.z)
      g.rotation.y = prop.rot
      scene.add(g)
      if (prop.kind === 'mannequin') {
        mannequin = g
        g.visible = false
      } else if (prop.kind === 'pot') pot = g
      else secretShelf = g
      continue
    }
    for (const part of built) {
      part.geo.applyMatrix4(mat4(prop.x, y, prop.z, prop.rot))
      push(`${room.id}|${part.mat}`, part.geo)
    }
  }

  // Open, suspended stair construction rather than full-height concrete blocks.
  // The previous stair geometry filled every step down to the floor, producing
  // the giant solid wedge shown in the user's screenshot. The ramp and floor
  // cutouts continue to use the shared StairDef geometry.
  for (const stair of world.stairs) {
    const steps = 21
    const y0 = FLOOR_Y[stair.fromFloor]
    const y1 = FLOOR_Y[stair.toFloor]
    if (stair.axis !== 'z') continue
    const rise = y1 - y0
    const depth = stair.d / steps
    const x0 = stair.x + 0.18
    const width = stair.w - 0.36
    for (let i = 0; i < steps; i++) {
      const t1 = (i + 1) / steps
      const top = y0 + t1 * rise
      const z = stair.z + i * depth
      // Each tread is a thin slab: the space underneath stays truly open.
      const treadThickness = 0.105
      push('stairs|stone', slab(x0, top - treadThickness, z, width, treadThickness, depth * 1.005))
      // Short riser only between neighbouring step surfaces, never to ground.
      if (i > 0) {
        const prevTop = y0 + (i / steps) * rise
        push('stairs|stone', slab(x0 + 0.015, prevTop - 0.04, z, width - 0.03, top - prevTop + 0.04, 0.065))
      }
      // Thin dark edge makes each tread legible from above.
      push('stairs|trim', slab(x0 + 0.035, top - 0.020, z + depth * 0.85, width - 0.07, 0.026, depth * 0.13))
      // Narrow worn non-slip inlay, following each real tread.
      push('stairs|metal', slab(x0 + 0.12, top - 0.008, z + depth * 0.68, width - 0.24, 0.009, depth * 0.045))
    }

    // Two structural stringers under the treads: believable support without a
    // blank concrete wall covering the whole flight.
    const stringerSlope = -Math.atan2(rise, stair.d)
    const stringerRun = Math.hypot(stair.d, rise)
    for (const sx of [x0 + 0.13, x0 + width - 0.13]) {
      const beam = new THREE.BoxGeometry(0.13, 0.25, stringerRun)
      beam.rotateX(stringerSlope)
      beam.translate(sx, (y0 + y1) * 0.5 - 0.22, stair.z + stair.d * 0.5)
      push('stairs|metal', beam)
    }

    // Sloped handrails with posts follow the rise rather than cutting across
    // the steps as the former horizontal guard bars did.
    const slope = -Math.atan2(rise, stair.d)
    const run = Math.hypot(stair.d, rise)
    for (const railX of [stair.x + 0.18, stair.x + stair.w - 0.18]) {
      const rail = new THREE.BoxGeometry(0.085, 0.10, run)
      rail.rotateX(slope)
      rail.translate(railX, (y0 + y1) * 0.5 + 0.83, stair.z + stair.d * 0.5)
      push('stairs|metal', rail)
      for (let i = 0; i <= steps; i += 2) {
        const t = i / steps
        push('stairs|metal', slab(railX - 0.04, y0 + rise * t, stair.z + stair.d * t - 0.04, 0.08, 0.83, 0.08))
      }
    }
  }

  for (const decal of world.decals) {
    const room = world.rooms.find((r) => r.id === decal.room)
    if (!room) continue
    const y = FLOOR_Y[room.floor] + 0.06
    const geo = new THREE.PlaneGeometry(decal.w, decal.d)
    geo.rotateX(-Math.PI / 2)
    geo.applyMatrix4(mat4(decal.x, y, decal.z, decal.rot))
    const mesh = new THREE.Mesh(geo, decal.kind === 'blood' ? materials.blood : materials.concrete)
    mesh.receiveShadow = true
    scene.add(mesh)
  }

  const detail: THREE.Object3D[] = []
  const bottleGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.18, 6)
  const bottleMat = materials.glass
  for (const room of world.rooms) {
    if (room.outdoors || room.w < 5 || room.d < 5) continue
    const rng = hashString(room.id)
    const count = 1 + (rng % 3)
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(bottleGeo, bottleMat)
      const fx = ((rng >> (i * 3)) & 7) / 7
      const fz = ((rng >> (i * 5 + 2)) & 7) / 7
      mesh.position.set(room.x + 0.6 + fx * (room.w - 1.2), FLOOR_Y[room.floor] + 0.1, room.z + 0.6 + fz * (room.d - 1.2))
      mesh.userData.detail = true
      scene.add(mesh)
      detail.push(mesh)
    }
    if (rng % 2 === 0) {
      const web = cobweb()
      web.position.set(room.x + 0.35, FLOOR_Y[room.floor] + WALL_H - 0.45, room.z + 0.35)
      web.userData.detail = true
      scene.add(web)
      detail.push(web)
    }
  }

  // Windows on a few long exterior walls.
  let windows = 0
  for (const wall of world.walls) {
    if (!wall.exterior || windows > 14) continue
    const len = wall.max - wall.min
    if (len < 3.2) continue
    if (hashString(wall.roomId + wall.coord) % 3 !== 0) continue
    const y = FLOOR_Y[wall.floor] + 1.45
    const mid = (wall.min + wall.max) / 2
    const frameMat = materials.trim
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 1.5), materials.glass)
    if (wall.axis === 'x') {
      glass.position.set(wall.coord, y, mid)
      glass.rotation.y = Math.PI / 2
      push(`${wall.roomId}|trim`, slab(wall.coord - 0.08, y - 0.8, mid - 0.65, 0.08, 1.6, 0.08))
      push(`${wall.roomId}|trim`, slab(wall.coord - 0.08, y - 0.8, mid + 0.57, 0.08, 1.6, 0.08))
    } else {
      glass.position.set(mid, y, wall.coord)
      push(`${wall.roomId}|trim`, slab(mid - 0.65, y - 0.8, wall.coord - 0.08, 0.08, 1.6, 0.08))
      push(`${wall.roomId}|trim`, slab(mid + 0.57, y - 0.8, wall.coord - 0.08, 0.08, 1.6, 0.08))
    }
    glass.userData.window = true
    scene.add(glass)
    windows++
    void frameMat
  }

  const geos: THREE.BufferGeometry[] = []
  for (const [key, list] of buckets) {
    const matName = key.split('|')[1] as keyof Materials
    const merged = mergeGeometries(list, false)
    if (!merged) continue
    merged.computeVertexNormals()
    const mat = materials[matName]
    if (!(mat instanceof THREE.Material)) continue
    const mesh = new THREE.Mesh(merged, mat)
    mesh.castShadow = true
    mesh.receiveShadow = true
    scene.add(mesh)
    geos.push(merged)
    for (const g of list) g.dispose()
  }

  const chair = instanceOf(chairGeometry(), materials.wood, chairParts, scene)
  const crates = instanceOf(new THREE.BoxGeometry(0.68, 0.68, 0.68), materials.wood, crateParts, scene)
  const barrels = instanceOf(new THREE.CylinderGeometry(0.28, 0.3, 0.85, 8), materials.metal, barrelParts, scene)

  const doors = new Map<string, THREE.Group>()
  for (const door of world.doors) {
    if (door.kind === 'arch' || door.kind === 'hidden') continue
    const pivot = new THREE.Group()
    const doorMat = materials.door.clone()
    const panel = new THREE.Mesh(new THREE.BoxGeometry(door.width * 0.96, 2.42, 0.12), doorMat)
    panel.castShadow = true
    panel.receiveShadow = true
    // The hinges stay in the original place; inset panels only decorate the leaf.
    panel.position.set(door.width * 0.48, 1.21, 0)
    const inset = new THREE.MeshStandardMaterial({ color: '#1c2425', roughness: 0.96 })
    const brass = new THREE.MeshStandardMaterial({ color: '#554d3c', roughness: 0.53, metalness: 0.67 })
    const leafInset = door.width * 0.76
    for (const side of [-1, 1]) {
      for (const yy of [-0.56, 0.51]) {
        const backplate = new THREE.Mesh(new THREE.BoxGeometry(leafInset, 0.84, 0.012), inset)
        backplate.position.set(0, yy, side * 0.066)
        panel.add(backplate)
        // Four raised rails around every pressed steel/wood recess.
        for (const ry of [-0.39, 0.39]) {
          const rail = new THREE.Mesh(new THREE.BoxGeometry(leafInset, 0.034, 0.025), doorMat)
          rail.position.set(0, yy + ry, side * 0.084)
          panel.add(rail)
        }
        for (const rx of [-1, 1]) {
          const rail = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.79, 0.025), doorMat)
          rail.position.set(rx * leafInset * 0.48, yy, side * 0.084)
          panel.add(rail)
        }
      }
    }
    const brassPlate = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.26, 0.015), brass)
    brassPlate.position.set(door.width * 0.29, -0.09, 0.09)
    panel.add(brassPlate)
    for (const sign of [-1, 1]) {
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.043, 12, 10), brass)
      knob.position.set(door.width * 0.29, -0.09, sign * 0.13)
      panel.add(knob)
    }
    const kickPlate = new THREE.Mesh(new THREE.BoxGeometry(leafInset, 0.18, 0.017), brass)
    kickPlate.position.set(0, -1.04, 0.073)
    panel.add(kickPlate)
    pivot.add(panel)
    const y = FLOOR_Y[door.floor]
    if (door.axis === 'x') {
      // Wall is constant X, hole runs +Z. -PI/2 turns local +X onto +Z.
      pivot.position.set(door.coord, y, door.spanMin)
      pivot.rotation.y = -Math.PI / 2
    } else {
      pivot.position.set(door.spanMin, y, door.coord)
      pivot.rotation.y = 0
    }
    pivot.userData.closedYaw = pivot.rotation.y
    pivot.userData.swing = 1
    pivot.userData.panel = panel
    scene.add(pivot)
    doors.set(door.id, pivot)
    sign(scene, door, materials)
  }

  const pickups = new Map<string, THREE.Object3D>()
  for (const p of world.pickups) {
    const room = world.rooms.find((r) => r.id === p.room)
    if (!room) continue
    const mesh = pickupMesh(p.itemId, materials)
    mesh.position.set(p.x, FLOOR_Y[room.floor] + 0.85, p.z)
    scene.add(mesh)
    pickups.set(p.id, mesh)
  }

  const lights: BuiltWorld['lights'] = []
  for (const def of world.lights) {
    let light: THREE.Light
    if (def.room === 'hall') {
      const spot = new THREE.SpotLight(def.color, def.intensity, def.distance, 1.05, 0.55, 1.15)
      spot.position.set(def.x, def.y, def.z)
      spot.target.position.set(def.x, FLOOR_Y[0], def.z)
      spot.castShadow = true
      spot.shadow.mapSize.set(512, 512)
      spot.shadow.bias = -0.0004
      scene.add(spot, spot.target)
      light = spot
    } else {
      const pt = new THREE.PointLight(def.color, def.intensity, def.distance, 1.35)
      pt.position.set(def.x, def.y, def.z)
      scene.add(pt)
      light = pt
    }

    // 1980s twin-tube fluorescent fitting: long metal housing, cold diffuser,
    // end caps and visibly emissive tubes. Light level is driven by tickLights.
    const fixture = new THREE.Group()
    fixture.position.set(def.x, def.y + 0.14, def.z)
    const casing = new THREE.MeshStandardMaterial({color:'#333738',metalness:0.65,roughness:0.81})
    const diffuser = new THREE.MeshStandardMaterial({
      color: '#b8bdb6', emissive: def.color, emissiveIntensity: 0.55,
      roughness: 0.34, metalness: 0.04,
    })
    const cover = new THREE.Mesh(new THREE.BoxGeometry(1.42,0.12,0.31),casing)
    cover.castShadow = true
    fixture.add(cover)
    const panel = new THREE.Mesh(new THREE.BoxGeometry(1.27,0.026,0.24),materials.trim)
    panel.position.y = -0.073
    fixture.add(panel)
    for (const z of [-0.075,0.075]) {
      const tube = new THREE.Mesh(new THREE.BoxGeometry(1.22,0.036,0.066),diffuser)
      tube.position.set(0,-0.108,z)
      fixture.add(tube)
    }
    for (const x of [-0.64,0.64]) {
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.048,0.045,0.27),casing)
      cap.position.set(x,-0.105,0)
      fixture.add(cap)
    }
    scene.add(fixture)
    lights.push({ def, light, base: def.intensity, lens: diffuser })
  }

  const rainGeo = new THREE.BufferGeometry()
  const rainCount = 400
  const positions = new Float32Array(rainCount * 3)
  for (let i = 0; i < rainCount; i++) {
    positions[i * 3] = 30 + Math.random() * 8
    positions[i * 3 + 1] = Math.random() * 6
    positions[i * 3 + 2] = 28 + Math.random() * 8
  }
  rainGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const rain = new THREE.Points(
    rainGeo,
    new THREE.PointsMaterial({ color: '#9bb0c4', size: 0.035, transparent: true, opacity: 0.35, depthWrite: false }),
  )
  rain.visible = false
  scene.add(rain)

  return {
    materials,
    doors,
    pickups,
    lights,
    mannequin,
    pot,
    secretShelf,
    detail,
    rain,
    photoSlots,
    dispose() {
      disposeCinematicArtV3()
      disposeVisualV3()
      disposeDressing()
      materials.dispose()
      for (const g of geos) g.dispose()
      chair.geometry.dispose()
      crates.geometry.dispose()
      barrels.geometry.dispose()
      rainGeo.dispose()
      ;(rain.material as THREE.Material).dispose()
    },
  }
}

function floorHoles(id: string, world: World) {
  if (id === 'trappe1') return world.stairs.filter((s) => s.id === 'stair_01')
  if (id === 'trappe2') return world.stairs.filter((s) => s.id === 'stair_12')
  return []
}
function ceilingHoles(id: string, world: World) {
  if (id === 'trappe0') return world.stairs.filter((s) => s.id === 'stair_01')
  if (id === 'trappe1') return world.stairs.filter((s) => s.id === 'stair_12')
  return []
}

interface Rect {
  x: number
  z: number
  w: number
  d: number
}

function subtractRect(room: Rect, holes: { x: number; z: number; w: number; d: number }[]): Rect[] {
  let parts: Rect[] = [room]
  for (const hole of holes) {
    const next: Rect[] = []
    for (const part of parts) next.push(...minus(part, hole))
    parts = next
  }
  return parts.filter((p) => p.w > 0.05 && p.d > 0.05)
}

function minus(a: Rect, b: Rect): Rect[] {
  const ax1 = a.x + a.w
  const az1 = a.z + a.d
  const bx1 = b.x + b.w
  const bz1 = b.z + b.d
  const ix0 = Math.max(a.x, b.x)
  const iz0 = Math.max(a.z, b.z)
  const ix1 = Math.min(ax1, bx1)
  const iz1 = Math.min(az1, bz1)
  if (ix1 - ix0 < 0.05 || iz1 - iz0 < 0.05) return [a]
  const out: Rect[] = []
  if (iz0 > a.z) out.push({ x: a.x, z: a.z, w: a.w, d: iz0 - a.z })
  if (az1 > iz1) out.push({ x: a.x, z: iz1, w: a.w, d: az1 - iz1 })
  if (ix0 > a.x) out.push({ x: a.x, z: iz0, w: ix0 - a.x, d: iz1 - iz0 })
  if (ax1 > ix1) out.push({ x: ix1, z: iz0, w: ax1 - ix1, d: iz1 - iz0 })
  return out
}

function slab(x: number, y: number, z: number, w: number, h: number, d: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(Math.max(0.02, w), Math.max(0.02, h), Math.max(0.02, d))
  scaleUVs(g, Math.max(0.02, w), Math.max(0.02, h), Math.max(0.02, d))
  g.applyMatrix4(mat4(x + w / 2, y + h / 2, z + d / 2, 0))
  return g
}

function scaleUVs(geo: THREE.BufferGeometry, w: number, h: number, d: number) {
  const uv = geo.getAttribute('uv')
  const scales = [
    [d, h],
    [d, h],
    [w, d],
    [w, d],
    [w, h],
    [w, h],
  ]
  for (let f = 0; f < 6; f++) {
    const su = scales[f][0] * 0.42
    const sv = scales[f][1] * 0.42
    for (let i = 0; i < 4; i++) {
      const idx = f * 4 + i
      uv.setXY(idx, uv.getX(idx) * su, uv.getY(idx) * sv)
    }
  }
  uv.needsUpdate = true
}

function mat4(x: number, y: number, z: number, rot: number): THREE.Matrix4 {
  const m = new THREE.Matrix4()
  const q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rot)
  m.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(1, 1, 1))
  return m
}

function frame(door: DoorInst, push: (key: string, geo: THREE.BufferGeometry) => void) {
  const y = FLOOR_Y[door.floor]
  const h = 2.55
  const t = 0.08
  if (door.axis === 'x') {
    push(`frame|trim`, slab(door.coord - 0.06, y, door.spanMin - t, 0.12, h, t))
    push(`frame|trim`, slab(door.coord - 0.06, y, door.spanMax, 0.12, h, t))
    push(`frame|trim`, slab(door.coord - 0.06, y + h - t, door.spanMin, 0.12, t, door.width))
  } else {
    push(`frame|trim`, slab(door.spanMin - t, y, door.coord - 0.06, t, h, 0.12))
    push(`frame|trim`, slab(door.spanMax, y, door.coord - 0.06, t, h, 0.12))
    push(`frame|trim`, slab(door.spanMin, y + h - t, door.coord - 0.06, door.width, t, 0.12))
  }
}

interface Part {
  geo: THREE.BufferGeometry
  mat: keyof Materials
}

function part(w: number, h: number, d: number, x: number, y: number, z: number, mat: keyof Materials): Part {
  const geo = new THREE.BoxGeometry(w, h, d)
  scaleUVs(geo, w, h, d)
  geo.translate(x, y + h / 2, z)
  return { geo, mat }
}

function buildProp(kind: string, w: number, h: number, d: number): Part[] {
  switch (kind) {
    case 'pillar':
      return [part(w, h, d, 0, 0, 0, 'stone')]
    case 'bench':
      return [part(w, 0.08, d, 0, 0.42, 0, 'wood'), part(0.08, 0.42, d, -w / 2, 0, 0, 'wood'), part(0.08, 0.42, d, w / 2, 0, 0, 'wood')]
    case 'receptiondesk': {
      // Full-scale 1980s hospital registration counter, not a coffee table.
      // All surfaces remain inside the existing prop's collision footprint.
      const front = -d * 0.5
      const parts: Part[] = [
        part(w * 0.96, h * 0.84, d * 0.82, 0, 0.07, 0, 'wood'),
        part(w * 1.04, 0.075, d * 1.08, 0, h - 0.09, 0, 'trim'),
        // Raised writing ledge along the customer-facing side.
        part(w * 1.04, 0.10, d * 0.22, 0, h - 0.03, front + d * 0.09, 'wood'),
        part(w * 0.99, h * 0.72, 0.033, 0, 0.13, front - 0.012, 'wood'),
        part(w * 0.98, 0.115, 0.04, 0, 0.07, front - 0.05, 'metal'),
        part(w * 1.05, 0.065, 0.052, 0, h * 0.71, front - 0.052, 'trim'),
        // Two shallow inset desk drawers on the attendant side.
        part(w * 0.66, 0.034, 0.03, 0, h * 0.55, d * 0.49, 'metal'),
      ]
      for (let i = 0; i < 13; i++) {
        const x = (i / 12 - 0.5) * (w * 0.91)
        parts.push(part(0.023, h * (i % 4 === 0 ? 0.62 : 0.55), 0.052, x, 0.14, front - 0.057, i % 3 === 0 ? 'trim' : 'wood'))
      }
      for (const side of [-1, 1]) {
        parts.push(part(0.09, h * 0.84, d * 0.86, side * w * 0.47, 0.06, 0, 'wood'))
        parts.push(part(0.035, h * 0.58, 0.048, side * w * 0.48, 0.22, front - 0.045, 'metal'))
      }
      return parts
    }
    case 'desk':
    case 'table':
      return [
        part(w, 0.08, d, 0, h - 0.08, 0, 'wood'),
        part(0.08, h - 0.08, 0.08, -w / 2 + 0.08, 0, -d / 2 + 0.08, 'wood'),
        part(0.08, h - 0.08, 0.08, w / 2 - 0.08, 0, -d / 2 + 0.08, 'wood'),
        part(0.08, h - 0.08, 0.08, -w / 2 + 0.08, 0, d / 2 - 0.08, 'wood'),
        part(0.08, h - 0.08, 0.08, w / 2 - 0.08, 0, d / 2 - 0.08, 'wood'),
      ]
    case 'shelf':
    case 'bookshelf':
      return [
        part(w, h, 0.06, 0, 0, -d / 2, 'wood'),
        part(w, 0.05, d, 0, 0.15, 0, 'wood'),
        part(w, 0.05, d, 0, h * 0.45, 0, 'wood'),
        part(w, 0.05, d, 0, h * 0.75, 0, 'wood'),
      ]
    case 'locker':
      return [
        part(w, h, d, 0, 0, 0, 'metal'),
        part(w * 0.92, 0.055, 0.025, 0, h * 0.92, d / 2, 'trim'),
        part(w * 0.92, 0.055, 0.025, 0, h * 0.14, d / 2, 'trim'),
        part(0.04, h * 0.76, 0.03, -w * 0.035, h * 0.15, d / 2, 'trim'),
        part(0.025, 0.16, 0.05, w * 0.27, h * 0.51, d / 2, 'trim'),
        ...[-0.3, -0.18, -0.06].map(k => part(w * 0.56, 0.021, 0.027, -w * 0.03, h * (0.81 + k), d / 2, 'trim')),
      ]
    case 'recordcabinet':
      // Three visually distinct drawer fronts, with recessed borders and brass labels.
      // Their state is intentionally static until Cursor wires interaction.
      return [
        part(w, h, d, 0, 0, 0, 'wood'),
        part(w * 1.02, 0.06, d * 1.04, 0, h - 0.05, 0, 'trim'),
        part(w * 0.95, 0.095, d * 0.96, 0, 0, 0, 'trim'),
        ...[0, 1, 2].flatMap(i => {
          const y = h * (0.12 + i * 0.25)
          return [
            part(w * 0.86, h * 0.195, 0.027, 0, y, d * 0.512, 'trim'),
            part(w * 0.80, h * 0.163, 0.032, 0, y + h * 0.014, d * 0.534, 'wood'),
            part(w * 0.25, 0.055, 0.041, 0, y + h * 0.135, d * 0.566, 'metal'),
            part(w * 0.23, 0.023, 0.055, 0, y + h * 0.05, d * 0.57, 'trim'),
          ]
        }),
      ]
    case 'filing':
      return [
        part(w, h, d, 0, 0, 0, 'metal'),
        part(w * 1.035, 0.05, d * 1.03, 0, h - 0.055, 0, 'trim'),
        part(w * 0.93, 0.08, d * 0.96, 0, 0, 0, 'trim'),
        ...[0, 1, 2, 3].flatMap(i => {
          const y = h * (0.10 + i * 0.217)
          return [
            part(w * 0.85, h * 0.16, 0.024, 0, y, d * 0.516, 'trim'),
            part(w * 0.79, h * 0.125, 0.028, 0, y + h * 0.015, d * 0.535, 'metal'),
            part(w * 0.28, 0.047, 0.030, 0, y + h * 0.106, d * 0.556, 'trim'),
            part(w * 0.25, 0.031, 0.053, 0, y + h * 0.034, d * 0.562, 'metal'),
          ]
        }),
      ]
    case 'sideboard':
      return [
        part(w, h * 0.72, d, 0, h * 0.24, 0, 'wood'),
        part(w * 1.08, 0.064, d * 1.06, 0, h * 0.94, 0, 'wood'),
        ...[-0.22, 0.22].map(x => part(0.065, 0.026, 0.065, x * w, h * 0.57, d * 0.53, 'metal')),
        ...[-0.36, 0.36].map(x => part(0.09, h * 0.18, 0.1, x * w, 0, d * 0.37, 'wood')),
      ]
    case 'counter':
      return [part(w, h, d, 0, 0, 0, 'tileWall'), part(w, 0.06, d, 0, h - 0.06, 0, 'metal')]
    case 'pew':
      return [
        part(w, 0.095, d * 0.86, 0, 0.43, 0, 'wood'),
        part(w, 0.59, 0.095, 0, 0.40, -d * 0.51, 'wood'),
        ...[-1,1].flatMap(x => [
          part(0.10, 0.55, d * 0.89, x * w * 0.45, 0.01, 0, 'wood'),
          part(0.19, 0.12, d * 0.80, x * w * 0.45, 0.015, 0, 'trim'),
          part(0.055, 0.12, d * 0.54, x * w * 0.42, 0.54, -d * 0.28, 'trim'),
        ]),
        part(w * 0.83, 0.032, 0.20, 0, 0.30, -d * 0.12, 'wood'),
      ]
    case 'altar':
      return [part(w, h, d, 0, 0, 0, 'stone'), part(0.08, 0.35, 0.08, -0.3, h, 0, 'trim')]
    case 'sofa':
      return [
        part(w, 0.28, d, 0, 0.26, 0, 'fabric'),
        part(w, 0.5, 0.16, 0, 0.43, -d / 2 + 0.08, 'fabric'),
        ...[-1, 1].map(k => part(0.18, 0.36, d, k * (w / 2 - 0.09), 0.28, 0, 'fabric')),
        ...[-0.28, 0.28].map(k => part(w * 0.38, 0.08, d * 0.65, k * w * 0.7, 0.51, 0.06, 'fabric')),
      ]
    case 'medicalcart':
      return [
        part(w * 1.025, 0.066, d * 1.08, 0, h - 0.074, 0, 'metal'),
        part(w, 0.05, d, 0, 0.31, 0, 'metal'),
        ...[-1,1].flatMap(x => [-1,1].map(z =>
          part(0.035, h - 0.11, 0.035, x*(w/2-0.065), 0.11, z*(d/2-0.065), 'metal'))),
        ...[-1,1].flatMap(x => [-1,1].map(z =>
          part(0.11, 0.10, 0.11, x*(w/2-0.10), 0.02, z*(d/2-0.07), 'trim'))),
        part(w * 0.83, 0.033, d * 0.81, 0, h * 0.58, 0, 'metal'),
        ...[-1,1].map(z =>
          part(w * 0.98, 0.13, 0.034, 0, h - 0.16, z*d*0.54, 'trim')),
        ...[-1,1].map(x =>
          part(0.034, 0.13, d*0.86, x*w*0.52, h - 0.16, 0, 'trim')),
        part(w * 0.46, 0.055, 0.042, 0, h*0.61, d*0.52, 'trim'),
        part(w * 0.61, 0.045, 0.27, 0, 0.34, 0, 'glass'),
      ]
    case 'foldscreen':
      return [
        ...[-0.33, 0, 0.33].map(k => part(w * 0.31, h * 0.83, 0.038, w * k, 0.2, 0, 'fabric')),
        ...[-0.49, -0.16, 0.16, 0.49].map(k => part(0.031, h, 0.05, w * k, 0, 0, 'metal')),
        part(w, 0.04, 0.06, 0, h - 0.06, 0, 'metal'),
      ]
    case 'ivstand':
      return [
        part(0.045, h, 0.045, 0, 0, 0, 'metal'),
        part(w, 0.04, 0.045, 0, 0.03, 0, 'metal'),
        part(0.045, 0.04, d, 0, 0.03, 0, 'metal'),
        part(0.22, 0.035, 0.04, 0, h - 0.06, 0, 'metal'),
        part(0.08, 0.22, 0.045, w * 0.25, h - 0.38, 0, 'glass'),
      ]
    case 'bathtub':
      return [part(w, h, d, 0, 0, 0, 'tileWall')]
    case 'gurney':
      return [
        // Painted medical steel chassis and adjustable stretcher bed.
        part(w * 0.93, 0.075, d * 0.93, 0, 0.66, 0, 'metal'),
        part(w * 0.91, 0.11, d * 0.83, 0, 0.73, 0, 'fabric'),
        part(w * 0.84, 0.034, d * 0.77, 0, 0.84, 0, 'fabric'),
        part(w * 0.23, 0.085, d * 0.57, -w * 0.31, 0.86, 0, 'trim'),
        ...[-1, 1].flatMap(x => [-1, 1].map(z =>
          part(0.045, 0.68, 0.045, x * (w / 2 - 0.11), 0.03, z * (d / 2 - 0.12), 'metal'))),
        ...[-1, 1].map(z =>
          part(w * 0.73, 0.036, 0.04, 0, 0.51, z * d * 0.54, 'metal')),
        ...[-1, 1].map(z =>
          part(w * 0.63, 0.034, 0.042, 0, 0.84, z * d * 0.54, 'metal')),
        ...[-1, 1].map(z => [
          part(0.035, 0.17, 0.035, -w * 0.28, 0.67, z * d * 0.54, 'metal'),
          part(0.035, 0.17, 0.035, w * 0.28, 0.67, z * d * 0.54, 'metal'),
        ]).flat(),
        ...[-1, 1].flatMap(x => [-1, 1].map(z =>
          part(0.12, 0.12, 0.12, x * (w / 2 - 0.13), 0.005, z * (d / 2 - 0.13), 'trim'))),
        // Tucked-in patient sheet and rear storage tray.
        part(w * 0.49, 0.021, d * 0.62, w * 0.13, 0.87, 0, 'glass'),
        part(w * 0.47, 0.04, d * 0.46, 0, 0.27, 0, 'metal'),
      ]
    case 'cabinet':
      return [
        part(w, h, d, 0, 0, 0, 'wood'),
        part(w * 0.92, h * 0.78, 0.022, 0, h * 0.13, d * 0.52, 'trim'),
        ...[-1, 1].flatMap(side => [
          part(w * 0.44, h * 0.73, 0.029, side * w * 0.23, h * 0.155, d * 0.537, 'wood'),
          part(0.028, 0.14, 0.047, side * w * 0.08, h * 0.50, d * 0.568, 'metal'),
        ]),
      ]
    case 'dresser':
      return [
        part(w, h, d, 0, 0, 0, 'wood'),
        part(w * 1.04, 0.055, d * 1.06, 0, h - 0.05, 0, 'trim'),
        ...[0, 1, 2].flatMap(i => {
          const y = h * (0.14 + i * 0.252)
          return [
            part(w * 0.88, h * 0.18, 0.026, 0, y, d * 0.51, 'trim'),
            part(w * 0.82, h * 0.15, 0.031, 0, y + h * 0.013, d * 0.53, 'wood'),
            part(w * 0.30, 0.036, 0.045, 0, y + h * 0.06, d * 0.56, 'metal'),
          ]
        }),
      ]
    case 'stove':
      return [part(w, h, d, 0, 0, 0, 'metal')]
    case 'generator':
    case 'boiler':
      return [part(w, h, d, 0, 0, 0, 'metal'), part(0.2, 0.5, 0.2, 0, h, 0, 'trim')]
    case 'fridge':
      return [part(w, h, d, 0, 0, 0, 'metal')]
    case 'safe':
      return [
        part(w, h, d, 0, 0, 0, 'metal'),
        part(w * 0.78, h * 0.72, 0.03, 0, h * 0.06, d * 0.52, 'trim'),
        part(0.1, 0.1, 0.05, w * 0.18, h * 0.42, d * 0.55, 'metal'),
      ]
    case 'bed':
      return [
        part(w, 0.11, d, 0, 0.31, 0, 'metal'),
        part(w * 0.91, 0.17, d * 0.9, 0, 0.42, 0, 'fabric'),
        part(w * 0.36, 0.095, d * 0.77, -w * 0.27, 0.60, 0, 'trim'),
        part(w * 0.49, 0.052, d * 0.94, w * 0.18, 0.61, 0, 'glass'),
        part(0.065, 0.72, d * 1.05, -w * 0.51, 0.0, 0, 'metal'),
        part(0.065, 0.52, d * 1.05, w * 0.51, 0, 0, 'metal'),
        ...[-1,1].flatMap(side => [
          part(w * 0.82, 0.044, 0.048, 0, 0.82, side * d * 0.52, 'metal'),
          part(w * 0.80, 0.04, 0.06, 0, 0.62, side * d * 0.52, 'metal'),
        ]),
        ...[-1,1].flatMap(x => [-1,1].map(z =>
          part(0.047, 0.38, 0.047, x * w * 0.46, 0.0, z * d * 0.44, 'metal'))),
      ]
    case 'wheelchair': {
      // A real chair silhouette: large spoked rims, rear cushion and casters.
      const parts: Part[] = [
        part(w * 0.70, 0.085, d * 0.62, 0, 0.47, 0.015, 'fabric'),
        part(w * 0.72, 0.47, 0.065, 0, 0.57, -d * 0.37, 'fabric'),
        part(w * 0.80, 0.045, d * 0.65, 0, 0.39, 0, 'metal'),
        ...[-1,1].map(k => part(0.04, 0.25, d * 0.64, k * w * 0.45, 0.51, 0, 'metal')),
        ...[-1,1].map(k => part(0.20, 0.045, d * 0.48, k * w * 0.43, 0.72, -d * 0.10, 'fabric')),
        ...[-1,1].map(k => part(0.035, 0.47, 0.04, k * w * 0.43, 0.09, -d * 0.36, 'metal')),
        part(w * 1.04, 0.035, 0.04, 0, 0.34, d * 0.30, 'metal'),
      ]
      for (const side of [-1, 1]) {
        const rim = new THREE.TorusGeometry(0.27, 0.035, 8, 24)
        rim.rotateY(Math.PI / 2)
        rim.translate(side * w * 0.50, 0.34, -0.03)
        parts.push({ geo: rim, mat: 'metal' })
        const tire = new THREE.TorusGeometry(0.27, 0.016, 6, 24)
        tire.rotateY(Math.PI / 2)
        tire.translate(side * w * 0.50 + side * 0.001, 0.34, -0.03)
        parts.push({ geo: tire, mat: 'monster' })
        for (let k = 0; k < 6; k++) {
          const a = Math.PI * k / 3
          const spoke = new THREE.BoxGeometry(0.012, 0.42, 0.018)
          spoke.rotateX(a)
          spoke.translate(side * w * 0.50, 0.34, -0.03)
          parts.push({ geo: spoke, mat: 'trim' })
        }
      }
      return parts
    }
    case 'plant':
      return [part(0.22, 0.28, 0.22, 0, 0, 0, 'trim')]
    case 'beam':
      return [part(w, h, d, 0, 0, 0, 'wood')]
    case 'mannequin':
      return [
        part(0.32, 0.7, 0.16, 0, 0.85, 0, 'monster'),
        part(0.18, 0.22, 0.16, 0, 1.55, 0, 'monster'),
        part(0.1, 0.7, 0.1, -0.24, 0.85, 0, 'monster'),
        part(0.1, 0.7, 0.1, 0.24, 0.85, 0, 'monster'),
      ]
    case 'pot':
      return [part(0.22, 0.2, 0.22, 0, 0.7, 0, 'metal')]
    default:
      return [part(w, h, d, 0, 0, 0, 'trim')]
  }
}

function chairGeometry(): THREE.BufferGeometry {
  const parts = [
    part(0.4, 0.06, 0.4, 0, 0.46, 0, 'wood'),
    part(0.4, 0.42, 0.06, 0, 0.5, -0.17, 'wood'),
    part(0.05, 0.46, 0.05, -0.16, 0, -0.16, 'wood'),
    part(0.05, 0.46, 0.05, 0.16, 0, -0.16, 'wood'),
    part(0.05, 0.46, 0.05, -0.16, 0, 0.16, 'wood'),
    part(0.05, 0.46, 0.05, 0.16, 0, 0.16, 'wood'),
  ]
  const merged = mergeGeometries(parts.map((p) => p.geo), false)
  return merged ?? new THREE.BoxGeometry(0.4, 0.9, 0.4)
}

function instanceOf(geo: THREE.BufferGeometry, mat: THREE.Material, matrices: THREE.Matrix4[], scene: THREE.Scene) {
  const mesh = new THREE.InstancedMesh(geo, mat, Math.max(1, matrices.length))
  mesh.castShadow = true
  mesh.receiveShadow = true
  matrices.forEach((m, i) => mesh.setMatrixAt(i, m))
  if (!matrices.length) mesh.count = 0
  mesh.instanceMatrix.needsUpdate = true
  scene.add(mesh)
  return mesh
}

function cobweb(): THREE.Group {
  const g = new THREE.Group()
  const mat = new THREE.MeshBasicMaterial({
    color: '#c8c2b6',
    transparent: true,
    opacity: 0.18,
    side: THREE.DoubleSide,
    depthWrite: false,
  })
  const a = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), mat)
  const b = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.7), mat)
  b.rotation.y = 0.8
  g.add(a, b)
  return g
}

function sign(scene: THREE.Scene, door: DoorInst, materials: Materials) {
  const draw = (text: string, x: number, y: number, z: number, rotY: number) => {
    if (!text) return
    const c = document.createElement('canvas')
    c.width = 256
    c.height = 64
    const g = c.getContext('2d')
    if (!g) return
    g.fillStyle = '#2a241e'
    g.fillRect(0, 0, 256, 64)
    g.strokeStyle = '#8a7a66'
    g.strokeRect(3, 3, 250, 58)
    g.fillStyle = '#e6d7c4'
    g.font = '28px Georgia'
    g.textAlign = 'center'
    g.textBaseline = 'middle'
    g.fillText(text, 128, 34)
    const map = new THREE.CanvasTexture(c)
    map.colorSpace = THREE.SRGBColorSpace
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.72, 0.18),
      new THREE.MeshStandardMaterial({ map, roughness: 0.8, emissive: '#2a2118', emissiveIntensity: 0.25 }),
    )
    mesh.position.set(x, y, z)
    mesh.rotation.y = rotY
    scene.add(mesh)
    void materials
  }
  const y = FLOOR_Y[door.floor] + 2.15
  if (door.axis === 'x') {
    draw(door.signA ?? '', door.coord - 0.2, y, door.center, Math.PI / 2)
    draw(door.signB ?? '', door.coord + 0.2, y, door.center, -Math.PI / 2)
  } else {
    draw(door.signA ?? '', door.center, y, door.coord - 0.2, 0)
    draw(door.signB ?? '', door.center, y, door.coord + 0.2, Math.PI)
  }
}

function pickupMesh(itemId: string, materials: Materials): THREE.Object3D {
  const g = new THREE.Group()
  let mesh: THREE.Mesh
  if (itemId.includes('fuse')) {
    const color = itemId.includes('red') ? '#b4231c' : itemId.includes('blue') ? '#2458a8' : '#c6a227'
    mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.16, 8),
      new THREE.MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.3, emissive: color, emissiveIntensity: 0.2 }),
    )
  } else if (itemId === 'battery') {
    mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.16, 8), materials.metal)
  } else if (itemId.includes('key')) {
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.04, 0.05), materials.metal)
  } else if (itemId === 'medkit') {
    mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.1, 0.16),
      new THREE.MeshStandardMaterial({ color: '#f2f2f0', roughness: 0.5 }),
    )
  } else if (itemId === 'rosary') {
    mesh = new THREE.Mesh(new THREE.TorusGeometry(0.08, 0.015, 6, 12), materials.metal)
  } else if (itemId === 'crowbar') {
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.04), materials.metal)
    mesh.rotation.z = 0.4
  } else if (itemId === 'evidence') {
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.04, 0.2), materials.door)
  } else {
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.02, 0.16), materials.door)
  }
  g.add(mesh)
  return g
}
