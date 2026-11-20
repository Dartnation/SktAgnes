import * as THREE from 'three'
import { angDiff, forwardFromYaw, type Vec3 } from '../core/math'
import { findPath, type NavGrid, type PathQuery } from './Pathfinding'
import { createMonsterBB, stepMonster, type MonsterBB, type MonsterStateName } from './MonsterBrain'
import { beamHits, canHear, inVisionCone, noiseLoudness, type NoiseKind } from './senses'
import { resolveMovement, type AABB } from '../physics/Collision'
import type { DoorInst } from '../world/buildWorld'

const RADIUS = 0.36
const HEIGHT = 1.95
const COS = Math.cos((48 * Math.PI) / 180)

export interface MonsterHooks {
  dt: number
  playerPos: Vec3
  playerEye: Vec3
  hiding: boolean
  hideSpot: Vec3 | null
  holdBreath: boolean
  camPos: Vec3
  camDir: Vec3
  flashlightOn: boolean
  allowChase: boolean
  aggression: number
  waypoints: Vec3[]
  blockers: AABB[]
  colliders: AABB[]
  nav: NavGrid
  query: PathQuery
  doors: DoorInst[]
  openAmount: ReadonlyMap<string, number>
  floorAt: (x: number, z: number, y: number) => number | null
  requestOpen: (id: string) => void
  doorLocked: (id: string) => boolean
  noises: { kind: NoiseKind; pos: Vec3; floorDelta: number; occluded: boolean }[]
}

export class MonsterActor {
  readonly group = new THREE.Group()
  bb: MonsterBB = createMonsterBB()
  pos: Vec3 = { x: 18, y: 0, z: 24 }
  yaw = 0
  private path: Vec3[] = []
  private pathI = 0
  private repath = 0
  private goalKey = ''
  private phase = 0
  private stuckT = 0
  private stuckTries = 0
  private anchorX = 0
  private anchorZ = 0
  private pelvis: THREE.Object3D | null = null
  private spine: THREE.Object3D | null = null
  private neck: THREE.Object3D | null = null
  private head: THREE.Object3D | null = null
  private thighL: THREE.Object3D | null = null
  private thighR: THREE.Object3D | null = null
  private shinL: THREE.Object3D | null = null
  private shinR: THREE.Object3D | null = null
  private footL: THREE.Object3D | null = null
  private footR: THREE.Object3D | null = null
  private armL: THREE.Object3D | null = null
  private armR: THREE.Object3D | null = null
  private foreL: THREE.Object3D | null = null
  private foreR: THREE.Object3D | null = null
  private checked = new Set<string>()
  private glide = 0
  private watch = 0
  private lookAt = 0
  /** Beam is on the body: mesh, shadow and attacks are off until it relocates. */
  concealed = false

  constructor() {
    const skin = new THREE.MeshStandardMaterial({ color: '#3a3034', roughness: 0.86, metalness: 0.02 })
    const pale = new THREE.MeshStandardMaterial({ color: '#ddd4c8', roughness: 0.62, metalness: 0 })
    const dark = new THREE.MeshStandardMaterial({ color: '#100c0c', roughness: 0.45 })
    const pupil = new THREE.MeshStandardMaterial({ color: '#3a0000', emissive: '#ff2a18', emissiveIntensity: 1.4, roughness: 0.35 })
    const ink = new THREE.MeshStandardMaterial({ color: '#1a1412', roughness: 0.5 })
    const agedCloth = new THREE.MeshStandardMaterial({ color: '#403734', roughness: 1, side: THREE.DoubleSide })
    const blood = new THREE.MeshStandardMaterial({ color: '#3f1115', roughness: 0.9 })
    const bone = new THREE.MeshStandardMaterial({ color: '#a39882', roughness: 0.98 })

    const pelvis = new THREE.Group()
    pelvis.position.y = 0.96
    this.pelvis = pelvis
    pelvis.add(cast(new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 8), skin), 1.15, 0.72, 0.85))

    const spine = new THREE.Group()
    spine.position.y = 0.02
    spine.rotation.x = 0.38
    this.spine = spine
    pelvis.add(spine)
    const chest = cast(new THREE.Mesh(torsoShell(), skin))
    spine.add(chest)
    // Split hospital smock, frayed across a deformity in the chest.
    const smock = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.67), agedCloth)
    smock.position.set(0,-0.03,0.185)
    smock.rotation.z = -0.1
    spine.add(smock)
    for (let i=0; i<5; i++) {
      const rib = cast(new THREE.Mesh(new THREE.BoxGeometry(0.18+i*0.007,0.018,0.025),bone))
      rib.position.set((i%2 ? -0.08 : 0.08),0.23-i*0.107,0.208)
      rib.rotation.z = (i%2 ? 1 : -1)*0.21
      spine.add(rib)
    }
    const gore = cast(new THREE.Mesh(new THREE.SphereGeometry(0.10,8,6),blood))
    gore.scale.set(1.3,0.28,0.25)
    gore.position.set(0.02,-0.13,0.19)
    spine.add(gore)
    for (let i=0;i<5;i++) {
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.052,0.23+i*0.05),agedCloth)
      strip.position.set((i-2)*0.075,-0.43-(i%2)*0.045,0.13)
      strip.rotation.z=(i-2)*0.09
      spine.add(strip)
    }
    const yoke = cast(new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.22, 3, 6), skin))
    yoke.rotation.z = Math.PI / 2
    yoke.position.y = 0.4
    spine.add(yoke)

    const left = this.leg(skin, -1, 0.5, 0.46)
    const right = this.leg(skin, 1, 0.47, 0.44)
    pelvis.add(left.hip, right.hip)
    this.thighL = left.thigh
    this.thighR = right.thigh
    this.shinL = left.shin
    this.shinR = right.shin
    this.footL = left.foot
    this.footR = right.foot

    const armLeft = this.arm(skin, -1, 0.46, 0.4)
    const armRight = this.arm(skin, 1, 0.42, 0.38)
    spine.add(armLeft.shoulder, armRight.shoulder)
    this.armL = armLeft.upper
    this.armR = armRight.upper
    this.foreL = armLeft.fore
    this.foreR = armRight.fore

    const neck = new THREE.Group()
    neck.position.set(0, 0.52, 0.02)
    neck.rotation.x = -0.28
    this.neck = neck
    spine.add(neck)
    neck.add(hanging(0.14, 0.042, 0.036, skin, 1))
    const head = new THREE.Group()
    head.position.y = 0.14
    this.head = head
    neck.add(head)
    const face = cast(new THREE.Mesh(new THREE.SphereGeometry(0.15, 28, 18), pale))
    face.scale.set(0.9, 1.25, 0.62)
    face.position.y = 0.07
    const eyeL = almond(dark, pupil, -0.055, 0.09, 0.09, -0.38)
    const eyeR = almond(dark, pupil, 0.058, 0.085, 0.09, 0.42)
    const nose = cast(new THREE.Mesh(new THREE.BoxGeometry(0.003, 0.072, 0.004), ink))
    nose.position.set(0, 0.045, 0.1)
    const smile = new THREE.Mesh(smileCurve(), ink)
    head.add(face, eyeL, eyeR, nose, smile)
    // Cracked eye sockets, stitches, uneven teeth and clotted hair.
    for (let i=0; i<7; i++) {
      const tooth = cast(new THREE.Mesh(new THREE.ConeGeometry(0.011,0.036+(i%3)*0.009,4),bone))
      tooth.rotation.z = Math.PI
      tooth.position.set((i-3)*0.027,-0.043 + Math.abs(i-3)*0.005,0.105)
      head.add(tooth)
    }
    for (let i=0;i<6;i++) {
      const stitch = new THREE.Mesh(new THREE.BoxGeometry(0.007,0.036,0.007),ink)
      stitch.position.set(-0.065+i*0.027,-0.083+i*0.008,0.104)
      stitch.rotation.z=0.5
      head.add(stitch)
    }
    const eyeShade = cast(new THREE.Mesh(new THREE.BoxGeometry(0.34,0.047,0.03),ink))
    eyeShade.position.set(0,0.138,0.07)
    head.add(eyeShade)
    for(let i=0;i<6;i++) {
      const spike = cast(new THREE.Mesh(new THREE.ConeGeometry(0.043,0.14+(i%3)*0.035,5),dark))
      spike.position.set((i-2.5)*0.049,0.27, (i%2)*0.02-0.04)
      spike.rotation.z=(i-3)*0.26
      head.add(spike)
    }

    this.group.add(pelvis)
    this.group.visible = false
  }

  /** Hip at the pelvis, thigh then shin then foot. Each mesh starts in the parent joint. */
  private leg(mat: THREE.Material, side: number, thighLen: number, shinLen: number) {
    const hip = new THREE.Group()
    hip.position.set(side * 0.09, -0.02, 0)
    const thigh = new THREE.Group()
    hip.add(thigh)
    thigh.add(hanging(thighLen, 0.055, 0.042, mat))
    const shin = new THREE.Group()
    shin.position.y = -thighLen
    thigh.add(shin)
    shin.add(hanging(shinLen, 0.04, 0.03, mat))
    const foot = new THREE.Group()
    foot.position.y = -shinLen
    shin.add(foot)
    const sole = cast(new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.035, 0.16), mat))
    sole.position.set(0, -0.02, 0.05)
    foot.add(sole)
    foot.add(cast(new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 6), mat)))
    return { hip, thigh, shin, foot }
  }

  /** Shoulder on the chest, then upper arm, forearm, and three long fingers. */
  private arm(mat: THREE.Material, side: number, upperLen: number, foreLen: number) {
    const shoulder = new THREE.Group()
    shoulder.position.set(side * 0.2, 0.4, 0.02)
    shoulder.add(cast(new THREE.Mesh(new THREE.SphereGeometry(0.042, 8, 6), mat)))
    const upper = new THREE.Group()
    upper.rotation.z = side * 0.12
    shoulder.add(upper)
    upper.add(hanging(upperLen, 0.04, 0.032, mat))
    const fore = new THREE.Group()
    fore.position.y = -upperLen
    fore.rotation.x = 0.18
    upper.add(fore)
    fore.add(hanging(foreLen, 0.03, 0.022, mat))
    const hand = new THREE.Group()
    hand.position.y = -foreLen
    fore.add(hand)
    hand.add(cast(new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), mat)))
    for (let i = 0; i < 3; i++) {
      const finger = new THREE.Group()
      finger.position.set((i - 1) * 0.016, -0.01, (i - 1) * 0.01)
      finger.rotation.x = 0.25 + i * 0.04
      finger.rotation.z = side * (i - 1) * 0.12
      const len = 0.15 + (i === 1 ? 0.03 : 0)
      finger.add(hanging(len, 0.008, 0.005, mat, -1))
      hand.add(finger)
    }
    return { shoulder, upper, fore }
  }

  reveal(pos: Vec3): void {
    this.concealed = false
    this.pos = { ...pos }
    this.group.position.set(pos.x, pos.y, pos.z)
    this.group.visible = true
    this.path = []
    this.goalKey = ''
    this.glide = 0
    this.bb.state = 'Patrol'
    this.bb.goal = { ...pos }
  }

  face(yaw: number): void {
    this.yaw = yaw
    this.group.rotation.y = yaw
  }

  spawn(pos: Vec3, yaw: number, state: MonsterStateName): void {
    this.pos = { ...pos }
    this.yaw = yaw
    this.bb = createMonsterBB({ state })
    this.group.position.set(pos.x, pos.y, pos.z)
    this.group.visible = true
    this.path = []
    this.anchorX = pos.x
    this.anchorZ = pos.z
    this.stuckT = 0
  }

  update(h: MonsterHooks): { attack: boolean; foundHiding: boolean; state: MonsterStateName; entered: MonsterStateName | null } {
    const prev = this.bb.state
    const eye = { x: this.pos.x, y: this.pos.y + 1.7, z: this.pos.z }
    const fwd = forwardFromYaw(this.yaw)
    let hear: { pos: Vec3; loudness: number } | null = null
    for (const n of h.noises) {
      if (!canHear(eye, n.pos, n.kind, n.floorDelta, n.occluded)) continue
      const loudness = noiseLoudness(n.kind) * (n.occluded ? 0.7 : 1)
      if (!hear || loudness > hear.loudness) hear = { pos: n.pos, loudness }
    }
    const dist = Math.hypot(h.playerPos.x - this.pos.x, h.playerPos.z - this.pos.z)
    const dark = !h.flashlightOn
    const range = (dark ? 8.5 : 12.5) * (h.hiding ? 0.2 : 1)
    const canSee =
      !h.hiding &&
      inVisionCone(eye, fwd, h.playerEye, COS, range, h.blockers)
    const flash = beamHits(h.camPos, h.camDir, { x: this.pos.x, y: this.pos.y + 1.75, z: this.pos.z }, Math.cos(0.5), 16, h.blockers)
    if (h.flashlightOn && flash) this.concealed = true
    this.lookAt = angDiff(this.yaw, Math.atan2(h.playerPos.x - this.pos.x, h.playerPos.z - this.pos.z))
    const goal = this.bb.goal
    const atGoal = !!goal && Math.hypot(goal.x - this.pos.x, goal.z - this.pos.z) < 0.75
    const result = stepMonster(this.bb, {
      dt: h.dt,
      monsterPos: this.pos,
      playerPos: h.playerPos,
      canSee,
      hear,
      flashlightHit: flash,
      distance: dist,
      atGoal,
      hiding: h.hiding,
      hideSpot: h.hideSpot,
      holdBreath: h.holdBreath,
      allowChase: h.allowChase,
      aggression: h.aggression,
      rng: Math.random,
      waypoints: h.waypoints,
    })
    this.bb = result.bb
    if (this.concealed) {
      this.group.visible = false
      this.glide = 0
      this.animate(h.dt, 0)
      return { attack: false, foundHiding: false, state: this.bb.state, entered: this.bb.state !== prev ? this.bb.state : null }
    }
    this.group.visible = true
    if (!this.concealed && this.bb.state === 'Patrol' && this.bb.stateTime > 8 && Math.random() < h.dt * 0.04 && h.waypoints.length) {
      this.watch = 1.4 + Math.random() * 2.2
      this.bb.waypointIndex = (this.bb.waypointIndex + 1 + Math.floor(Math.random() * 3)) % h.waypoints.length
      this.bb.goal = { ...h.waypoints[this.bb.waypointIndex] }
      this.path = []
    }
    this.follow(h, result.speed)
    this.animate(h.dt, result.speed)
    this.group.position.set(this.pos.x, this.pos.y, this.pos.z)
    this.group.rotation.y = this.yaw
    return {
      attack: result.attackPulse,
      foundHiding: result.foundHiding,
      state: this.bb.state,
      entered: this.bb.state !== prev ? this.bb.state : null,
    }
  }

  private follow(h: MonsterHooks, speed: number): void {
    if (this.watch > 0) {
      this.watch = Math.max(0, this.watch - h.dt)
      this.glide += (0 - this.glide) * Math.min(1, h.dt * 6)
      return
    }
    const goal = this.bb.goal
    const chase = this.bb.state === 'Chase' || this.bb.state === 'Attack'
    const want = (goal && speed >= 0.05 ? speed : 0) * (chase ? 1.55 : 1)
    const accel = want > this.glide ? 2.2 : 5.5
    this.glide += (want - this.glide) * Math.min(1, h.dt * accel)
    if (!goal || this.glide < 0.05) return
    speed = this.glide
    const key = `${goal.x.toFixed(1)}|${goal.z.toFixed(1)}|${this.bb.state}`
    this.repath -= h.dt
    if (key !== this.goalKey || this.repath <= 0 || this.pathI >= this.path.length) {
      this.goalKey = key
      this.repath = this.bb.state === 'Chase' ? 0.35 : 0.8
      const path = findPath(h.nav, this.pos, goal, h.query)
      this.path = path ?? []
      this.pathI = 0
    }
    let tx = goal.x
    let tz = goal.z
    if (this.pathI < this.path.length) {
      const p = this.path[this.pathI]
      tx = p.x
      tz = p.z
      if (Math.hypot(p.x - this.pos.x, p.z - this.pos.z) < 0.4) this.pathI++
    }
    // A closed door in the way is opened; the body waits until it can pass.
    const ahead = this.blockingDoor(h, tx, tz)
    if (ahead) {
      h.requestOpen(ahead.id)
      const amount = h.openAmount.get(ahead.id) ?? 0
      if (amount < 0.4 && Math.hypot((ahead.axis === 'x' ? ahead.coord : ahead.center) - this.pos.x, (ahead.axis === 'z' ? ahead.coord : ahead.center) - this.pos.z) < 1.05) {
        return
      }
    }
    const dx = tx - this.pos.x
    const dz = tz - this.pos.z
    const len = Math.hypot(dx, dz) || 1
    const step = Math.min(speed * h.dt, len)
    const resolved = resolveMovement(this.pos, { x: (dx / len) * step, z: (dz / len) * step }, RADIUS, HEIGHT, false, h.colliders)
    this.pos.x = resolved.x
    this.pos.z = resolved.z
    const y = h.floorAt(this.pos.x, this.pos.z, this.pos.y)
    if (y !== null) this.pos.y = y
    const targetYaw = Math.atan2(dx, dz)
    this.yaw += angDiff(this.yaw, targetYaw) * Math.min(1, h.dt * 6)
    const progressed = Math.hypot(this.pos.x - this.anchorX, this.pos.z - this.anchorZ)
    if (progressed < 0.025) this.stuckT += h.dt
    else {
      this.stuckT = 0
      this.anchorX = this.pos.x
      this.anchorZ = this.pos.z
    }
    if (this.stuckT > 0.8 && h.waypoints.length) {
      this.stuckT = 0
      this.stuckTries++
      if (this.stuckTries >= 3) {
        this.stuckTries = 0
        this.concealed = true
        return
      }
      this.bb.waypointIndex = (this.bb.waypointIndex + 1) % h.waypoints.length
      this.bb.goal = { ...h.waypoints[this.bb.waypointIndex] }
      this.path = []
      this.goalKey = ''
    }
  }

  private blockingDoor(h: MonsterHooks, tx: number, tz: number): DoorInst | null {
    let best: DoorInst | null = null
    let bestD = 1.45
    for (const door of h.doors) {
      if (door.kind !== 'door') continue
      if (h.doorLocked(door.id)) continue
      if ((h.openAmount.get(door.id) ?? 0) > 0.7) continue
      const x = door.axis === 'x' ? door.coord : door.center
      const z = door.axis === 'z' ? door.coord : door.center
      const d = Math.hypot(x - this.pos.x, z - this.pos.z)
      if (d > bestD) continue
      const toDoor = Math.atan2(x - this.pos.x, z - this.pos.z)
      const toGoal = Math.atan2(tx - this.pos.x, tz - this.pos.z)
      if (Math.abs(angDiff(toDoor, toGoal)) > 1.2) continue
      best = door
      bestD = d
    }
    return best
  }

  private animate(dt: number, speed: number): void {
    const chasing = this.bb.state === 'Chase' || this.bb.state === 'Attack'
    const moving = speed > 0.2
    this.phase += dt * (moving ? 1.7 + Math.min(speed, 4) * 0.7 : 0.45)
    const s = moving ? Math.sin(this.phase) : 0
    const step = chasing ? 0.62 : 0.48
    if (this.thighL && this.shinL && this.footL) this.poseLeg(this.thighL, this.shinL, this.footL, s, step)
    if (this.thighR && this.shinR && this.footR) this.poseLeg(this.thighR, this.shinR, this.footR, -s, step)
    if (this.armL && this.foreL) this.poseArm(this.armL, this.foreL, -s, chasing, -1)
    if (this.armR && this.foreR) this.poseArm(this.armR, this.foreR, s, chasing, 1)
    if (this.spine) {
      const lean = chasing ? 0.62 : 0.36
      this.spine.rotation.x += (lean - this.spine.rotation.x) * Math.min(1, dt * 3)
    }
    if (this.neck && this.spine) this.neck.rotation.x = -this.spine.rotation.x * 0.7
    if (this.pelvis) {
      const bob = moving ? Math.abs(Math.sin(this.phase * 2)) * 0.02 : 0
      this.pelvis.position.y = 0.96 + bob
    }
    if (this.head) {
      this.head.rotation.x = (chasing ? 0.12 : 0.02) + Math.sin(this.phase * 0.37) * 0.04
      this.head.rotation.y = Math.max(-0.7, Math.min(0.7, this.lookAt)) * 0.35 + Math.sin(this.phase * 0.23) * 0.06
      this.head.rotation.z = Math.sin(this.phase * 0.51) * 0.04
    }
  }

  /** Thigh swings, the knee bends as the foot lifts, and the sole stays near level. */
  private poseLeg(thigh: THREE.Object3D, shin: THREE.Object3D, foot: THREE.Object3D, swing: number, amount: number): void {
    thigh.rotation.x = swing * amount
    const bend = 0.1 + Math.max(0, swing) * 0.95
    shin.rotation.x = bend
    foot.rotation.x = -bend * 0.75
  }

  private poseArm(upper: THREE.Object3D, fore: THREE.Object3D, swing: number, chasing: boolean, side: number): void {
    upper.rotation.x = (chasing ? 0.85 : 0.18) + swing * (chasing ? 0.35 : 0.5)
    upper.rotation.z = side * (chasing ? 0.05 : 0.12)
    fore.rotation.x = (chasing ? 0.45 : 0.22) + Math.abs(swing) * 0.2
  }

  forgetHides(): void {
    this.checked.clear()
  }
}

/** Tapered bone from the group origin toward -Y, with a ball at the joint. */
function hanging(length: number, r0: number, r1: number, mat: THREE.Material, dir = -1): THREE.Group {
  const g = new THREE.Group()
  const mesh = new THREE.Mesh(noisyCylinder(dir < 0 ? r0 : r1, dir < 0 ? r1 : r0, length), mat)
  mesh.position.y = (dir * length) / 2
  mesh.castShadow = true
  const ball = new THREE.Mesh(new THREE.SphereGeometry(r0, 8, 6), mat)
  ball.castShadow = true
  g.add(mesh, ball)
  return g
}

function cast(mesh: THREE.Mesh, sx = 1, sy = 1, sz = 1): THREE.Mesh {
  mesh.scale.set(sx, sy, sz)
  mesh.castShadow = true
  return mesh
}

function torsoShell(): THREE.BufferGeometry {
  const pts = [
    new THREE.Vector2(0.12, 0),
    new THREE.Vector2(0.15, 0.12),
    new THREE.Vector2(0.19, 0.28),
    new THREE.Vector2(0.17, 0.4),
    new THREE.Vector2(0.09, 0.52),
  ]
  const geo = new THREE.LatheGeometry(pts, 12)
  displace(geo, 0.008)
  return geo
}

function noisyCylinder(radiusTop: number, radiusBottom: number, height: number): THREE.BufferGeometry {
  const geo = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 7, 3)
  displace(geo, 0.004)
  return geo
}

function displace(geo: THREE.BufferGeometry, amount: number): void {
  const pos = geo.attributes.position
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const y = pos.getY(i)
    const z = pos.getZ(i)
    const n = Math.sin(x * 21 + y * 8) * Math.cos(z * 17 + y * 6) * amount
    const h = Math.hypot(x, z) || 1
    pos.setXYZ(i, x + (x / h) * n, y, z + (z / h) * n)
  }
  geo.computeVertexNormals()
}

function smileCurve(): THREE.BufferGeometry {
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.09, 0.028, 0.1),
    new THREE.Vector3(-0.045, 0.016, 0.104),
    new THREE.Vector3(0, 0.012, 0.106),
    new THREE.Vector3(0.045, 0.016, 0.104),
    new THREE.Vector3(0.09, 0.028, 0.1),
  ])
  return new THREE.TubeGeometry(curve, 18, 0.0024, 4, false)
}

function almond(socket: THREE.Material, pupilMat: THREE.Material, x: number, y: number, z: number, tilt: number): THREE.Group {
  const g = new THREE.Group()
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.026, 12, 8), socket)
  eye.scale.set(1.45, 0.48, 0.4)
  const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.008, 8, 6), pupilMat)
  pupil.position.z = 0.03
  g.add(eye, pupil)
  g.position.set(x, y, z)
  g.rotation.z = tilt
  return g
}
