import * as THREE from 'three'
import { angDiff, forwardFromYaw, type Vec3 } from '../core/math'
import { findPath, type NavGrid, type PathQuery } from './Pathfinding'
import { createMonsterBB, stepMonster, type MonsterBB, type MonsterStateName } from './MonsterBrain'
import { beamEffect, bodyLean, clipForState } from './MonsterAnim'
import { decorateMonsterV5 } from './MonsterLookV5'
import { approximateHearing, beamHits, canHear, hearingScale, inVisionCone, noiseLoudness, type NoiseKind } from './senses'
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
  searchSpots: { id: string; pos: Vec3 }[]
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
  private beamTime = 0
  private beamImmune = 0
  /** Beam is on the body: mesh, shadow and attacks are off until it relocates. */
  concealed = false

  constructor() {
    const skin = new THREE.MeshStandardMaterial({ color: '#353332', roughness: 0.94, metalness: 0.01 })
    const pale = new THREE.MeshStandardMaterial({ color: '#232525', roughness: 0.99, metalness: 0 })
    const dark = new THREE.MeshStandardMaterial({ color: '#100c0c', roughness: 0.45 })
        const ink = new THREE.MeshStandardMaterial({ color: '#1a1412', roughness: 0.5 })
    const agedCloth = new THREE.MeshStandardMaterial({ color: '#373a37', roughness: 1, side: THREE.DoubleSide })
    const blood = new THREE.MeshStandardMaterial({ color: '#321e20', roughness: 0.98 })
    const bone = new THREE.MeshStandardMaterial({ color: '#5d5953', roughness: 0.98 })

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
    // V3 cinematic silhouette: a sewn cowl with no pale face, teeth, or glowing eyes.
    const skull = cast(new THREE.Mesh(new THREE.SphereGeometry(0.144, 17, 12), pale))
    skull.scale.set(0.86, 1.15, 0.68)
    skull.position.y = 0.07
    const hood = new THREE.Mesh(tornCowl(), agedCloth)
    hood.position.set(0, 0.045, -0.015)
    hood.rotation.z = 0.07
    hood.castShadow = true
    const faceVoid = new THREE.Mesh(new THREE.SphereGeometry(0.125, 14, 10), dark)
    faceVoid.scale.set(0.85, 1.17, 0.27)
    faceVoid.position.set(0, 0.06, 0.155)
    head.add(skull, faceVoid, hood)
    // Uneven wraps and sutures imply a human history without a cartoon mouth.
    for (let i = 0; i < 6; i++) {
      const wrap = new THREE.Mesh(
        new THREE.PlaneGeometry(0.18 + (i % 3) * 0.028, 0.035),
        agedCloth,
      )
      wrap.position.set((i % 2 ? -0.013 : 0.013), 0.20 - i * 0.05, 0.205)
      wrap.rotation.z = (i % 3 - 1) * 0.18
      head.add(wrap)
    }
    for (let i = 0; i < 4; i++) {
      const suture = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.027, 0.006), ink)
      suture.position.set(-0.038 + i * 0.025, -0.12, 0.205)
      suture.rotation.z = i % 2 ? 0.35 : -0.30
      head.add(suture)
    }
    // A ragged hospital restraint hangs below the neck and sways with the spine.
    const restraint = new THREE.Mesh(new THREE.PlaneGeometry(0.31, 0.64, 4, 4), agedCloth)
    restraint.position.set(0.15, -0.35, 0.228)
    restraint.rotation.z = -0.17
    spine.add(restraint)

    // Purely visual cloth and cowl details, attached to the current rig joints.
    // No AI, hitbox, chase logic or pose update is changed.
    decorateMonsterV5(spine, head, pelvis)
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
      const loudness = noiseLoudness(n.kind) * hearingScale(n.floorDelta, n.occluded)
      if (!hear || loudness > hear.loudness) {
        hear = { pos: approximateHearing(n.pos, eye, loudness, Math.random), loudness }
      }
    }
    const dist = Math.hypot(h.playerPos.x - this.pos.x, h.playerPos.z - this.pos.z)
    const dark = !h.flashlightOn
    const range = (dark ? 8.5 : 12.5) * (h.hiding ? 0.2 : 1)
    const canSee =
      !h.hiding &&
      inVisionCone(eye, fwd, h.playerEye, COS, range, h.blockers)
    const flash = h.flashlightOn && beamHits(h.camPos, h.camDir, { x: this.pos.x, y: this.pos.y + 1.75, z: this.pos.z }, Math.cos(0.5), 16, h.blockers)
    this.beamImmune = Math.max(0, this.beamImmune - h.dt)
    if (flash && this.beamImmune <= 0) this.beamTime += h.dt
    else this.beamTime = Math.max(0, this.beamTime - h.dt * 1.5)
    const spot = h.hideSpot
    const nearSpot = (p: Vec3 | null, limit: number) => !!spot && !!p && Math.hypot(p.x - spot.x, p.z - spot.z) < limit
    const knowsHide = nearSpot(this.bb.lastSeen, 2.4) || nearSpot(this.bb.lastHeard, 3.2) || nearSpot(hear?.pos ?? null, 3.2)
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
      knowsHide,
      searchSpots: h.searchSpots,
      checkedIds: this.checked,
    })
    this.bb = result.bb
    const light = beamEffect(this.beamTime, this.beamImmune)
    if (light === 'blind' || light === 'banish') {
      this.bb.blindTime = Math.max(this.bb.blindTime, 1.2)
      if (this.bb.state === 'Chase' || this.bb.state === 'Attack') {
        this.bb.state = 'LostPlayer'
        this.bb.goal = this.bb.lastSeen ? { ...this.bb.lastSeen } : { ...this.pos }
      }
    }
    if (light === 'banish') {
      this.concealed = true
      this.beamTime = 0
      this.beamImmune = 12
    }
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
    const raw = (goal && speed >= 0.05 ? speed : 0) * (chase ? 1.05 : 1)
    const want = chase ? Math.min(4.05, raw) : raw
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
    const pose = clipForState(this.bb.state, speed)
    const chasing = pose.clip === 'Run' || pose.clip === 'Attack'
    const searching = pose.clip === 'Search'
    const moving = pose.clip === 'Walk' || pose.clip === 'Run'
    this.phase += dt * (moving ? (1.7 + Math.min(speed, 4) * 0.7) * pose.timeScale : 0.45)
    const s = moving ? Math.sin(this.phase) : searching ? Math.sin(this.phase * 0.45) * 0.35 : 0
    const step = pose.clip === 'Run' ? 0.62 : 0.48
    if (this.thighL && this.shinL && this.footL) this.poseLeg(this.thighL, this.shinL, this.footL, s, step)
    if (this.thighR && this.shinR && this.footR) this.poseLeg(this.thighR, this.shinR, this.footR, -s, step)
    if (this.armL && this.foreL) this.poseArm(this.armL, this.foreL, -s, chasing, -1)
    if (this.armR && this.foreR) this.poseArm(this.armR, this.foreR, s, chasing, 1)
    if (this.spine) {
      const lean = bodyLean(pose.clip)
      this.spine.rotation.x += (lean - this.spine.rotation.x) * Math.min(1, dt * 3)
    }
    if (this.neck && this.spine) this.neck.rotation.x = -this.spine.rotation.x * 0.7
    if (this.pelvis) {
      const bob = moving ? Math.abs(Math.sin(this.phase * 2)) * 0.02 : 0
      this.pelvis.position.y = 0.96 + bob
    }
    if (this.head) {
      const scan = searching ? Math.sin(this.phase * 0.55) * 0.55 : 0
      this.head.rotation.x = (chasing ? 0.12 : searching ? 0.2 : 0.02) + Math.sin(this.phase * 0.37) * 0.04
      this.head.rotation.y = Math.max(-0.7, Math.min(0.7, this.lookAt)) * 0.35 + scan + Math.sin(this.phase * 0.23) * 0.06
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


/** Uneven hospital-cloth hood with a rounded crown and torn open lower hem. */
function tornCowl(): THREE.BufferGeometry {
  const segments = 18
  const rings = [
    { y: -0.26, r: 0.26 },
    { y: -0.12, r: 0.22 },
    { y: 0.06, r: 0.19 },
    { y: 0.22, r: 0.185 },
    { y: 0.37, r: 0.13 },
    { y: 0.43, r: 0.018 },
  ]
  const positions: number[] = []
  const indices: number[] = []
  for (let j = 0; j < rings.length; j++) {
    const { r, y } = rings[j]
    for (let i = 0; i < segments; i++) {
      const a = (i / segments) * Math.PI * 2
      const fray = j === 0 ? Math.sin(i * 3.7) * 0.045 : 0
      const uneven = 1 + 0.09 * Math.sin(i * 1.61 + j * 2.3)
      positions.push(
        Math.cos(a) * r * uneven,
        y + fray,
        Math.sin(a) * r * uneven - (i % 3) * 0.002,
      )
    }
  }
  for (let j = 0; j < rings.length - 1; j++) {
    for (let i = 0; i < segments; i++) {
      const a = j * segments + i
      const next = j * segments + ((i + 1) % segments)
      indices.push(a, next, a + segments, next, next + segments, a + segments)
    }
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  return geometry
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

