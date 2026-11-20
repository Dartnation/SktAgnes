import * as THREE from 'three'
import { AudioEngine } from '../audio/AudioEngine'
import { MonsterActor } from '../ai/MonsterAI'
import { createDirector, stepDirector, type DirectorState } from '../ai/HorrorDirector'
import { Atmosphere } from '../horror/Atmosphere'
import { JumpscareEngine } from '../horror/JumpscareEngine'
import type { ScareKind } from '../horror/ScareLogic'
import { EYE_STAND, eyeHeight, PLAYER_RADIUS, simulatePlayer, smoothEyeHeight, STAND_H, type SimPlayer } from '../player/PlayerController'
import { applyMouseLook, rightFromYaw, type Vec3 } from '../core/math'
import { flashlightBanishes, pickRelocate } from '../ai/presence'
import { emptyScript, stepScript } from '../horror/ScriptedEvents'
import { lineOfSight, overlapsSolid, selectInteract, type InteractCandidate } from '../physics/Collision'
import { activeColliders, buildWorld, doorBlocksNav, inZone, patrolPoints, roomAt, sampleFloorY, type World } from '../world/buildWorld'
import { buildLevel, type BuiltWorld } from '../world/LevelBuilder'
import { EXIT_DOOR, FLOOR_Y, ZONES } from '../world/data'
import { Input } from './Input'
import { GAMEPLAY_EDGES, MODAL_KEYS, modeAction, type GameMode } from './modalInput'
import { UI } from '../ui/UI'
import { addItem, dropOne, hasItem, removeItem, useConsumable } from '../systems/Inventory'
import { batteryBand, boostBattery, stepBattery } from '../systems/battery'
import { itemDef, SAFE_CODE, FILE_IDS } from '../systems/catalog'
import { browserStorage, latestSave, listSaves, loadGame, saveGame, type StorageLike } from '../systems/SaveSystem'
import { loadSettings, sanitizeSettings, saveSettings, type Settings } from '../systems/Settings'
import {
  SPAWN,
  createNewGame,
  currentObjective,
  fileCount,
  keysFound,
  missingKeyNames,
  resolveEnding,
  storyProgress,
  type GameSnapshot,
} from '../systems/Story'
import { PostFX } from '../render/PostFX'
import { paintMinimap, roomsOf } from '../ui/minimap'
import type { NoiseKind } from '../ai/senses'

type Mode = GameMode

interface RuntimePickup {
  id: string
  itemId: string
  x: number
  y: number
  z: number
  mesh: THREE.Object3D
}

export class Game {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera = new THREE.PerspectiveCamera(72, 1, 0.08, 80)
  private world: World
  private built: BuiltWorld
  private post: PostFX
  private audio = new AudioEngine()
  private input: Input
  private monster: MonsterActor
  private atmo: Atmosphere
  private scares: JumpscareEngine
  private director: DirectorState = createDirector()
  private settings: Settings
  private storage: StorageLike
  private mode: Mode = 'menu'
  private settingsFrom: Mode = 'menu'
  private slotMode: 'load' | 'save' = 'load'
  private snap = createNewGame()
  private sim: SimPlayer = blankSim()
  private open = new Map<string, number>()
  private desired = new Map<string, number>()
  private unlocked = new Set<string>()
  private hiding: string | null = null
  private holdBreath = false
  private cameraEye = EYE_STAND
  private bob = 0
  private trauma = 0
  private damage = 0
  private fade = 0
  private flash = 0
  private message = ''
  private messageT = 0
  private toast = ''
  private toastT = 0
  private subtitleT = 0
  private lastObjective = ''
  private autosavedIntro = false
  private invIndex = 0
  private code = ''
  private showPerf = false
  private fps = 60
  private fpsAcc = 0
  private fpsFrames = 0
  private acc = 0
  private noises: { kind: NoiseKind; pos: { x: number; y: number; z: number }; floorDelta: number; occluded: boolean }[] = []
  private runtime: RuntimePickup[] = []
  private rosaryCd = 0
  private stepDist = 0
  private batteryWarned = false
  private creepIn = 12
  private aimedDoor = ''
  private prevRoom = ''
  private prevFlash = false
  private lungeT = 0
  private lunge!: THREE.Group
  private shadowMesh!: THREE.Mesh
  private shadowT = 0
  private shadowFrom = new THREE.Vector3()
  private shadowTo = new THREE.Vector3()
  private butcher!: THREE.Group
  private recentSpawns: Vec3[] = []
  private hideWait = 0
  private knocks: { at: number; pos: Vec3 }[] = []
  private showAudio = false
  private lookSX = 0
  private lookSY = 0
  private blackout = 0
  private peekT = 0
  private peekCool = 12
  private monsterShown = 0
  private monsterRoom = ''
  private monsterRoomUntil = 0
  private peek!: THREE.Group
  private spawnCells: Vec3[] = []
  private mannequinT = 0
  private looked = 0
  private lightCut = new Map<string, number>()
  private spot: THREE.SpotLight
  private cone: THREE.Mesh
  private viewmodel!: THREE.Group
  private shadow: THREE.Mesh
  private clock = 0
  private aggression = 0
  private camDir = new THREE.Vector3()
  private testMode = new URLSearchParams(location.search).has('test')
  private ended = false
  private frozen = false
  private rafId = 0

  constructor(canvas: HTMLCanvasElement, private ui: UI, storage?: StorageLike) {
    this.storage = storage ?? browserStorage()
    this.settings = loadSettings(this.storage)
    const test = new URLSearchParams(location.search).has('test')
    this.testMode = test
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
      failIfMajorPerformanceCaveat: false,
      stencil: true,
    })
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.shadowMap.enabled = this.settings.quality !== 'low'
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setClearColor(0x07060a)
    this.scene.background = new THREE.Color(0x07060a)
    this.scene.fog = new THREE.FogExp2(0x0a0b0f, 0.028)
    // Keep a trace of moonlight for orientation, but darkness must matter.
    this.scene.add(new THREE.AmbientLight(0x20262d, 0.028))
    const hemi = new THREE.HemisphereLight(0x243343, 0x0d0c0b, 0.075)
    this.scene.add(hemi)
    const moon = new THREE.DirectionalLight(0x899baa, 0.018)
    moon.position.set(-20, 40, -10)
    this.scene.add(moon)

    this.world = buildWorld()
    this.built = buildLevel(this.scene, this.world)
    this.monster = new MonsterActor()
    this.scene.add(this.monster.group)
    this.atmo = new Atmosphere(this.scene, 24)
    this.scene.add(this.camera)
    this.spot = new THREE.SpotLight('#f5ead7', 0, 21, 0.49, 0.57, 1.15)
    this.spot.castShadow = this.settings.quality !== 'low'
    this.spot.shadow.mapSize.set(this.settings.quality === 'high' ? 1024 : 512, this.settings.quality === 'high' ? 1024 : 512)
    this.spot.shadow.bias = -0.00025
    this.spot.shadow.camera.near = 0.1
    this.spot.shadow.camera.far = 18
    this.camera.add(this.spot)
    this.spot.position.set(0.18, -0.16, -0.55)
    this.spot.target.position.set(0.18, -0.14, -12)
    this.camera.add(this.spot.target)
    this.viewmodel = this.buildViewmodel()
    this.camera.add(this.viewmodel)
    this.lunge = this.buildLunge()
    this.camera.add(this.lunge)
    this.shadowMesh = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.22, 1.1, 3, 6),
      new THREE.MeshBasicMaterial({ color: '#2a241f' }),
    )
    this.shadowMesh.visible = false
    this.scene.add(this.shadowMesh)
    this.butcher = this.buildButcher()
    this.scene.add(this.butcher)
    this.peek = new THREE.Group()
    const peekHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 18, 12),
      new THREE.MeshStandardMaterial({ color: '#e6ddd2', roughness: 0.55 }),
    )
    peekHead.scale.set(0.86, 1.25, 0.5)
    const smile = new THREE.Mesh(
      new THREE.TorusGeometry(0.07, 0.006, 6, 16, Math.PI),
      new THREE.MeshStandardMaterial({ color: '#2a1814' }),
    )
    smile.position.set(0, -0.04, 0.08)
    smile.rotation.z = Math.PI
    this.peek.add(peekHead, smile)
    this.peek.visible = false
    this.scene.add(this.peek)
    this.spawnCells = this.world.nav.nodes
      .filter((n) => !n.doorId && !n.stair && n.links.length > 0 && (n.ix + n.iz) % 3 === 0)
      .map((n) => ({ x: n.x, y: n.y, z: n.z }))
    const coneGeo = new THREE.CylinderGeometry(0.05, 1.15, 7, 16, 1, true)
    coneGeo.translate(0, -3.5, 0)
    coneGeo.rotateX(Math.PI / 2)
    this.cone = new THREE.Mesh(
      coneGeo,
      new THREE.MeshBasicMaterial({
        color: '#ffe6c2',
        transparent: true,
        opacity: 0.045,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      }),
    )
    this.camera.add(this.cone)
    this.shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 2.2),
      new THREE.MeshBasicMaterial({ color: '#050505', transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }),
    )
    this.scene.add(this.shadow)
    this.post = new PostFX(this.renderer, this.scene, this.camera)
    this.post.applyQuality(this.settings.quality)
    this.scares = new JumpscareEngine(this.camera, this.audio)
    this.input = new Input(canvas)
    this.input.setSensitivity(this.settings.mouseSensitivity)
    const unlockAudio = () => {
      this.audio.ensure()
      void this.audio.resume()
    }
    window.addEventListener('pointerdown', unlockAudio)
    window.addEventListener('keydown', unlockAudio)
    canvas.addEventListener('click', () => {
      unlockAudio()
      if (this.mode === 'playing') this.input.lock()
    })
    this.resize()
    window.addEventListener('resize', () => this.resize())
    this.applyVolumes()
    this.ui.continueEnabled(!!latestSave(this.storage))
    this.ui.fillSettings(this.settings)
    this.installApi()
  }

  start(): void {
    this.ui.show('menu')
    this.mode = 'menu'
    this.clock = performance.now()
    this.rafId = requestAnimationFrame(this.onFrame)
  }

  private onFrame = (now: number): void => {
    if (this.frozen) return
    const dt = Math.min(0.05, (now - this.clock) / 1000 || 0)
    this.clock = now
    this.fpsAcc += dt
    this.fpsFrames++
    if (this.fpsAcc >= 0.5) {
      this.fps = this.fpsFrames / this.fpsAcc
      this.fpsAcc = 0
      this.fpsFrames = 0
    }
    const cap = this.settings.fpsCap
    if (cap > 0) {
      this.acc += dt
      const step = 1 / cap
      if (this.acc >= step - 0.0001) {
        const used = Math.min(0.05, this.acc)
        this.acc = 0
        this.advance(used)
      }
    } else {
      this.advance(dt)
    }
    this.rafId = requestAnimationFrame(this.onFrame)
  }

  private setFrozen(v: boolean): void {
    this.frozen = v
    if (v) cancelAnimationFrame(this.rafId)
    else {
      this.clock = performance.now()
      this.rafId = requestAnimationFrame(this.onFrame)
    }
  }

  private advance(dt: number): void {
    this.applyModalKeys()
    if (this.mode === 'playing') this.updatePlaying(dt)
    else if (this.mode === 'menu' || this.mode === 'credits' || this.mode === 'exit') this.updateIdle(dt)
    this.render(dt)
    this.audio.update(dt)
  }

  private updateIdle(dt: number): void {
    const t = performance.now() * 0.00012
    const z = 2.2 + Math.sin(t) * 0.35
    this.camera.position.set(5.2, 1.55, z)
    this.camera.lookAt(10, 1.35, 6)
    this.viewmodel.visible = false
    this.lunge.visible = false
    this.cone.visible = false
    this.spot.intensity = 0
    this.atmo.update(dt, this.camera.position, new THREE.Vector3(0, 0, 1), false)
    this.tickRain(dt)
    this.tickLights(performance.now() / 1000, false)
  }

  private updatePlaying(dt: number): void {
    this.snap.playTime += dt
    this.snap.iFrame = Math.max(0, this.snap.iFrame - dt)
    this.rosaryCd = Math.max(0, this.rosaryCd - dt)
    this.messageT = Math.max(0, this.messageT - dt)
    this.toastT = Math.max(0, this.toastT - dt)
    this.subtitleT = Math.max(0, this.subtitleT - dt)
    this.damage = Math.max(0, this.damage - dt * 0.8)
    this.noises.length = 0

    this.stepPower(dt)
    if (!this.snap.flags.introDone && this.snap.playTime > 4.2) {
      this.snap.flags.introDone = true
      this.trauma = Math.max(this.trauma, 0.45)
      this.audio.play('doorSlam', { x: this.sim.x, y: this.sim.y, z: this.sim.z - 2 })
      this.say('Døren faldt i bag dig.')
    }
    if (!this.autosavedIntro && this.snap.playTime > 2) {
      this.autosavedIntro = true
      this.persist(0)
    }

    const look = this.input.consumeLook()
    this.lookSX = this.lookSX * 0.4 + look.x * 0.6
    this.lookSY = this.lookSY * 0.4 + look.y * 0.6
    const aimed = applyMouseLook(this.sim.yaw, this.sim.pitch, this.lookSX, this.lookSY, this.settings.invertY)
    this.sim.yaw = aimed.yaw
    this.sim.pitch = aimed.pitch
    const wish = this.input.wish()
    this.holdBreath = !!this.hiding && wish.sprint

    if (this.input.pressed('F3')) this.showPerf = !this.showPerf
    if (this.input.pressed('F4')) this.showAudio = !this.showAudio
    if ((this.testMode || new URLSearchParams(location.search).has('debug')) && this.input.pressed('F6')) this.snap.playTime += 30
    if ((this.testMode || new URLSearchParams(location.search).has('debug')) && this.input.pressed('F7')) this.runShadow()
    if (this.input.pressed('KeyF')) this.toggleFlash()
    if (this.input.pressed('KeyR')) this.swapBattery()
    if (this.input.pressed('KeyG')) this.dropBattery()
    if (this.input.pressed('KeyQ')) this.useRosary()
    if (this.input.pressed('KeyE')) this.interact()

    const cols = activeColliders(this.world, this.unlocked, this.open)
    if (!this.hiding) {
      const before = this.sim.grounded
      const px = this.sim.x
      const pz = this.sim.z
      this.sim = simulatePlayer(this.sim, { ...wish, dt }, cols, (x, z, y) => sampleFloorY(this.world, x, z, y))
      const moved = Math.hypot(this.sim.x - px, this.sim.z - pz)
      if (wish.jump && before && !this.sim.grounded) this.noise('jump')
      if (this.sim.justLanded) this.noise('landing')
      const sprinting = wish.sprint && this.sim.stamina > 5 && !this.sim.crouching
      const inputMove = Math.abs(wish.forward) + Math.abs(wish.strafe) > 0.01
      const walking = inputMove && this.sim.grounded && moved > 0.002
      this.audio.setLocomotion(walking, sprinting, this.sim.crouching)
      if (walking) {
        this.stepDist += moved
        const stride = this.sim.crouching ? 0.72 : sprinting ? 1.45 : 1.05
        if (this.stepDist >= stride) {
          this.stepDist -= stride
          this.audio.playFootstep(sprinting, this.sim.crouching)
          this.noise(this.sim.crouching ? 'crouch' : sprinting ? 'sprint' : 'walk')
          const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
          if (room?.floorMat === 'wood' && Math.random() < 0.12) this.audio.play('creak', this.feet(), { volume: 0.35 })
        }
      } else {
        this.stepDist = 0
      }
      this.separateFromMonster(cols)
    } else {
      // Hiding means there is no walking, regardless of the keys still held.
      this.audio.setLocomotion(false, false, true)
      this.stepDist = 0
    }

    this.placeCamera(wish, dt)
    this.camera.getWorldDirection(this.camDir)

    const allowChase = this.computeChase()
    const tick = this.monster.update({
      dt,
      playerPos: { x: this.sim.x, y: this.sim.y, z: this.sim.z },
      playerEye: this.eyePos(),
      hiding: !!this.hiding,
      hideSpot: this.hidePos(),
      holdBreath: this.holdBreath,
      camPos: { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
      camDir: { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z },
      flashlightOn: this.sim.flashlightOn && this.sim.battery > 0,
      allowChase,
      aggression: this.aggression,
      waypoints: patrolPoints(this.world, (f) => this.floorAllowed(f), this.snap.flags.secretOpen),
      blockers: cols,
      colliders: cols,
      nav: this.world.nav,
      query: {
        allowFloor: (f) => this.floorAllowed(f),
        blockDoor: (id) => {
          const door = this.world.doors.find((d) => d.id === id)
          return door ? doorBlocksNav(door, this.unlocked) : false
        },
      },
      doors: this.world.doors,
      openAmount: this.open,
      floorAt: (x, z, y) => sampleFloorY(this.world, x, z, y),
      requestOpen: (id) => this.desired.set(id, 1),
      doorLocked: (id) => {
        const door = this.world.doors.find((d) => d.id === id)
        return door ? doorBlocksNav(door, this.unlocked) : false
      },
      noises: this.noises,
      searchSpots: this.world.hides.map((hide) => {
        const room = this.world.rooms.find((item) => item.id === hide.room)
        return { id: hide.id, pos: { x: hide.x, y: room ? FLOOR_Y[room.floor] : this.sim.y, z: hide.z } }
      }),
    })
    if (tick.entered === 'Chase') this.audio.play('growl', this.monster.pos, { volume: 0.8 })
    if (tick.attack) this.hurt(36, true)
    if (tick.foundHiding) {
      this.hiding = null
      this.hurt(28, true)
      this.say('Den fandt dig.')
    }
    // No footsteps are emitted by the monster: only the player's actual
    // movement generates walking sounds. Monster threats use growls and cues.

    this.herdMonster()
    this.relocateMonster(dt, cols)
    this.stepEvents(dt)
    this.stepKnocks()
    this.stepDirector(dt)
    this.animateDoors(dt)
    this.drainLight(dt)
    this.visit()
    this.checkEnding()
    this.syncHud(wish)
    this.copySim()
  }

  private stepDirector(dt: number): void {
    const dist = this.monsterDist()
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    const inDark = !(this.sim.flashlightOn && this.sim.battery > 1) && !this.roomLit(room?.id)
    const step = stepDirector(this.director, {
      dt,
      health: this.snap.player.health,
      monsterDist: dist,
      inDark,
      sprinting: this.input.wish().sprint && !this.sim.crouching,
      hiding: !!this.hiding,
      tookDamage: this.damage > 0.85,
      story: storyProgress(this.snap),
      rng: Math.random,
    })
    this.director = step.state
    this.aggression = step.aggression
    if (step.event?.type === 'scare') {
      const kind = this.scares.dynamic(this.snap.playTime, {
        inDark,
        monsterNear: dist < 10,
        doorOpenNear: [...this.open.values()].some((v) => v > 0.5),
        inMannequinRoom: room?.id === 'r102',
        tension: this.director.tension,
        rng: Math.random,
      })
      if (kind) this.applyScare(kind)
    } else if (step.event?.type === 'soft') {
      this.soft(step.event.kind)
    }
    this.scares.update(dt)
    this.trauma = Math.max(this.trauma, this.settings.cameraShake ? this.scares.fx.trauma : 0)
    this.flash = Math.max(this.flash, this.scares.fx.flash)
    if (this.scares.fx.subtitle) {
      this.ui.subtitle(this.scares.fx.subtitle)
      this.subtitleT = 1.5
    }
    const chasing = this.monster.bb.state === 'Chase' || this.monster.bb.state === 'Attack'
    this.audio.setTension(this.director.tension, chasing)
    const stress = (100 - this.snap.player.health) / 140 + (dist < 8 ? 0.35 : 0) + (this.sim.stamina < 30 ? 0.2 : 0)
    this.audio.setHeartbeat(this.hiding || this.snap.player.health < 55 || dist < 7 ? stress : 0)
    this.audio.setBreath(this.holdBreath ? 0.05 : this.sim.stamina < 25 ? 0.5 : dist < 6 ? 0.25 : 0.05)
    const nearLight = this.nearestLight()
    this.audio.setHum(!!nearLight && this.lightLevel(nearLight.def) > 0.2, nearLight ? { x: nearLight.def.x, y: nearLight.def.y, z: nearLight.def.z } : this.feet())
    this.audio.setRadio(this.snap.flags.radioOn, { x: 53.4, y: 5, z: 2.3 })
    this.audio.setZone(this.zoneFor(room?.id))
    this.creepIn -= dt
    if (this.creepIn <= 0 && this.mode === 'playing') {
      this.creepIn = 16 + Math.random() * 18 - this.director.tension * 0.05
      const far = 6 + Math.random() * 6
      const ang = Math.random() * Math.PI * 2
      const kind = this.director.tension > 55 && Math.random() < 0.35 ? 'scream' : 'whisper'
      this.audio.play(kind, { x: this.sim.x + Math.cos(ang) * far, y: this.sim.y, z: this.sim.z + Math.sin(ang) * far }, { volume: 0.55, occluded: true })
    }
    this.audio.setListener(
      { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
      { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z },
      { x: 0, y: 1, z: 0 },
    )
  }

  private applyScare(kind: ScareKind): void {
    if (kind === 'door') this.slamNearest()
    if (kind === 'still') {
      this.built.mannequin.visible = true
      this.mannequinT = 8
      this.snap.flags.mannequinOn = true
    }
    if (kind === 'fake') this.built.pot.position.y = FLOOR_Y[-1] ? this.built.pot.position.y : this.built.pot.position.y
    if (kind === 'ceiling') this.trauma = Math.max(this.trauma, 0.5)
    if (kind === 'flash') this.flash = 1
    if (kind === 'shadow') {
      this.shadow.position.set(this.sim.x + this.camDir.x * 3, this.sim.y + 1.2, this.sim.z + this.camDir.z * 3)
      ;(this.shadow.material as THREE.MeshBasicMaterial).opacity = 0.85
    }
  }

  private soft(kind: string): void {
    if (kind === 'flicker' || kind === 'lightOut') {
      const lit = this.built.lights.filter((l) => this.lightLevel(l.def) > 0.2)
      const pick = lit[Math.floor(Math.random() * lit.length)]
      if (pick) this.lightCut.set(pick.def.id, this.snap.playTime + (kind === 'lightOut' ? 5 : 1.2))
    } else if (kind === 'whisper' || kind === 'breath') {
      const behind = kind === 'breath' ? 1.2 : 2.4
      this.audio.play('whisper', { x: this.sim.x - this.camDir.x * behind, y: this.sim.y + 1.4, z: this.sim.z - this.camDir.z * behind }, { volume: kind === 'breath' ? 0.85 : 0.6 })
      this.ui.subtitle(kind === 'breath' ? '…åndedræt, lige bag dig.' : '…Agnes…')
      this.subtitleT = 1.8
      if (kind === 'breath') this.audio.setHeartbeat(0.55)
    } else if (kind === 'knock') {
      this.queueKnocks()
    } else if (kind === 'phone') {
      this.audio.play('sting', { x: 16, y: 5, z: 22 }, { volume: 0.8 })
      this.ui.subtitle('En telefon ringer et sted i fløjen.')
      this.subtitleT = 2.2
    } else if (kind === 'creak') {
      this.audio.play('creak', { x: this.sim.x + 2, y: this.sim.y, z: this.sim.z + 1 }, { volume: 0.5 })
    } else if (kind === 'thunder') {
      this.audio.play('thunder')
      this.atmo.strike()
      this.flash = 0.55
    } else if (kind === 'drop') {
      this.audio.play('door', { x: 49, y: 4, z: 36 }, { volume: 0.5 })
    } else if (kind === 'shadow') {
      this.applyScare('shadow')
    } else if (kind === 'radio') {
      this.audio.play('whisper', { x: 53, y: 5, z: 2 }, { volume: 0.4 })
    } else if (kind === 'mannequin' && !this.snap.flags.mannequinUsed) {
      this.built.mannequin.visible = true
      this.mannequinT = 10
    }
  }

  private hurt(amount: number, scare: boolean): void {
    if (this.snap.iFrame > 0 || this.ended) return
    this.snap.player.health = Math.max(0, this.snap.player.health - amount)
    this.sim.health = this.snap.player.health
    this.snap.iFrame = 1.2
    this.damage = 1
    this.trauma = 0.9
    if (scare) this.scares.trigger('attack', this.snap.playTime, true)
    if (this.snap.player.health <= 0) this.finish('death')
  }

  private finish(cause: 'yard' | 'tunnel' | 'death'): void {
    if (this.ended) return
    this.ended = true
    const id = resolveEnding(this.snap, cause)
    this.ui.ending(id, cause === 'death')
    this.setMode('ending')
    this.fade = cause === 'death' ? 0.65 : 0.35
    this.audio.play(cause === 'death' ? 'scream' : 'sting')
  }

  private checkEnding(): void {
    if (this.ended) return
    if (inZone(ZONES.yard, this.sim.x, this.sim.z, this.sim.y)) this.finish('yard')
    else if (inZone(ZONES.tunnel, this.sim.x, this.sim.z, this.sim.y)) this.finish('tunnel')
  }

  private interact(): void {
    if (this.hiding) {
      this.hiding = null
      this.audio.play('door', this.feet(), { volume: 0.4 })
      return
    }
    const hit = selectInteract(this.eyePos(), { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z }, this.candidates())
    if (!hit) return
    if (hit.kind === 'door') this.useDoor(hit.id)
    else if (hit.kind === 'pickup') this.take(hit.id)
    else if (hit.kind === 'hide') this.enterHide(hit.id)
    else if (hit.kind === 'generator') this.useGenerator()
    else if (hit.kind === 'safe') this.openKeypad()
    else if (hit.kind === 'bookshelf') this.useShelf()
    else if (hit.kind === 'radio') {
      this.snap.flags.radioOn = !this.snap.flags.radioOn
      this.audio.play('click')
      this.noise('voice')
    }
  }

  private useDoor(id: string): void {
    const door = this.world.doors.find((d) => d.id === id)
    if (!door) return
    if (doorBlocksNav(door, this.unlocked)) {
      if (door.id === EXIT_DOOR) {
        const missing = missingKeyNames(this.snap)
        if (missing.length) {
          this.say(`UD TIL STILHEDEN er låst. Mangler: ${missing.join(', ')}.`)
          this.audio.play('locked', this.doorPos(door), { volume: 0.7 })
          return
        }
        this.unlocked.add(door.id)
        this.desired.set(door.id, 1)
        this.audio.play('door', this.doorPos(door))
        this.audio.play('key')
        this.say('Låsene giver sig.')
        return
      }
      if (door.needsPower && !this.snap.flags.generatorOn) this.say('Låsen er død. Generatoren mangler strøm.')
      else if (door.keyId === 'chapel_key' && !hasItem(this.snap.inventory, 'chapel_key')) this.say('Låst. Nøglen ligger på sygeplejerskekontoret.')
      else if (door.keyId === 'master_key' && !hasItem(this.snap.inventory, 'master_key')) this.say('Kræver hovednøglen fra pengeskabet.')
      else if (door.keyId && hasItem(this.snap.inventory, door.keyId) && (!door.needsPower || this.snap.flags.generatorOn)) {
        this.unlocked.add(door.id)
        this.desired.set(door.id, 1)
        this.audio.play('door', this.doorPos(door))
        this.noise('door')
        return
      } else {
        this.say('Låst.')
      }
      this.audio.play('locked', this.doorPos(door), { volume: 0.6 })
      this.noise('door')
      return
    }
    const amt = this.open.get(door.id) ?? 0
    this.desired.set(door.id, amt > 0.4 ? 0 : 1)
    this.audio.play('door', this.doorPos(door))
    this.noise('door')
  }

  private take(id: string): void {
    if (this.snap.pickedUp.includes(id)) return
    const found = this.world.pickups.find((p) => p.id === id) || this.runtime.find((p) => p.id === id)
    if (!found) return
    const res = addItem(this.snap.inventory, found.itemId, 1)
    if (!res.added) {
      this.say('Du kan ikke bære flere.')
      return
    }
    this.snap.inventory = res.slots
    if ('room' in found) this.snap.pickedUp.push(id)
    const mesh = this.built.pickups.get(id) || this.runtime.find((p) => p.id === id)?.mesh
    if (mesh) mesh.visible = false
    this.runtime = this.runtime.filter((p) => p.id !== id)
    this.audio.play(found.itemId.startsWith('note') || found.itemId.startsWith('file') ? 'paper' : 'pickup')
    const def = itemDef(found.itemId)
    if (def.kind === 'note' || def.kind === 'story' || def.kind === 'map' || def.kind === 'collectible') this.openExamine(found.itemId)
    if (found.itemId === 'battery') {
      this.sim.battery = boostBattery(this.sim.battery, 50)
      this.say('Batteri. +50%.')
    }
    if (found.itemId.startsWith('key_')) this.say(`${def.name}. Nøgler ${keysFound(this.snap)}/3.`)
    if (found.itemId === 'rosary') this.snap.rosaryCharges = 2
    this.refreshObjective()
  }

  private useGenerator(): void {
    const need = ['fuse_red', 'fuse_blue', 'fuse_yellow']
    if (this.snap.flags.generatorOn) {
      this.say('Generatoren kører allerede.')
      return
    }
    if (!need.every((id) => hasItem(this.snap.inventory, id))) {
      const missing = need.filter((id) => !hasItem(this.snap.inventory, id)).map((id) => itemDef(id).name)
      this.say(`Mangler ${missing.join(', ')}.`)
      return
    }
    for (const id of need) this.snap.inventory = removeItem(this.snap.inventory, id, 1)
    this.snap.flags.generatorOn = true
    this.audio.play('generator', { x: 8, y: 1, z: 35 }, { volume: 0.9 })
    this.say('Nødstrømmen vågner. Bagportens lås har strøm.')
    this.trauma = 0.3
    this.refreshObjective()
  }

  private openKeypad(): void {
    if (this.snap.flags.safeOpen) {
      this.say('Pengeskabet er tomt.')
      return
    }
    this.code = ''
    this.ui.keypad(this.code, hasItem(this.snap.inventory, 'note_code') ? 'Stiftelsesåret.' : 'Du kender ikke koden endnu.')
    this.setMode('keypad')
  }

  submitCode(): void {
    if (this.code === SAFE_CODE) {
      this.snap.flags.safeOpen = true
      if (!hasItem(this.snap.inventory, 'master_key')) this.snap.inventory = addItem(this.snap.inventory, 'master_key').slots
      if (!hasItem(this.snap.inventory, 'note_director')) this.snap.inventory = addItem(this.snap.inventory, 'note_director').slots
      this.audio.play('key')
      this.setMode('playing')
      this.openExamine('note_director')
      this.refreshObjective()
    } else {
      this.audio.play('fail')
      this.noise('door')
      this.code = ''
      this.ui.keypad(this.code, 'Forkert. Lyden bar langt.')
    }
  }

  private useShelf(): void {
    if (this.snap.flags.secretOpen) return
    if (!hasItem(this.snap.inventory, 'crowbar')) {
      this.say('Hylden rokker sig ikke. Du mangler noget at bryde med.')
      this.audio.play('locked')
      return
    }
    this.snap.flags.secretOpen = true
    this.unlocked.add('door_secret')
    this.audio.play('doorSlam', { x: 37, y: 1, z: 24 }, { volume: 0.8 })
    this.noise('door')
    this.say('Hylden giver sig. Der er et rum bagved.')
  }

  private enterHide(id: string): void {
    const spot = this.world.hides.find((h) => h.id === id)
    if (!spot) return
    this.hiding = id
    this.sim.x = spot.x
    this.sim.z = spot.z
    this.sim.vx = 0
    this.sim.vz = 0
    this.audio.play('door', this.feet(), { volume: 0.3 })
    this.say(spot.kind === 'bed' ? 'Under sengen. Hold Shift for at holde vejret.' : 'I skabet. Hold Shift for at holde vejret. E for at komme ud.')
  }

  private toggleFlash(): void {
    if (this.sim.battery <= 1) {
      this.audio.play('fail')
      this.sim.flashlightOn = false
      this.say('Batteriet er tomt. Det lader langsomt, mens lygten er slukket.')
      return
    }
    const turningOn = !this.sim.flashlightOn
    this.sim.flashlightOn = turningOn
    this.audio.play('flash', undefined, { rate: turningOn ? 1 : 0.88 })
    if (!turningOn) this.say('Lygten er slukket. Batteriet lader.')
  }

  private swapBattery(): void {
    if (!hasItem(this.snap.inventory, 'battery')) {
      this.audio.play('fail')
      this.say('Ingen reservebatterier.')
      return
    }
    this.snap.inventory = removeItem(this.snap.inventory, 'battery', 1)
    this.sim.battery = boostBattery(this.sim.battery)
    this.sim.flashlightOn = true
    this.batteryWarned = false
    this.audio.play('click')
    this.say('Batteri skiftet.')
  }

  private dropBattery(): void {
    const dropped = dropOne(this.snap.inventory, 'battery')
    if (!dropped.dropped) {
      this.say('Ikke noget du kan smide.')
      return
    }
    this.snap.inventory = dropped.slots
    const id = `drop_${Math.floor(Math.random() * 1e6)}`
    const mesh = this.built.pickups.get('p_bat1')?.clone() ?? new THREE.Mesh(new THREE.SphereGeometry(0.08), new THREE.MeshStandardMaterial({ color: '#888' }))
    mesh.visible = true
    mesh.position.set(this.sim.x, this.sim.y + 0.2, this.sim.z)
    this.scene.add(mesh)
    this.runtime.push({ id, itemId: 'battery', x: this.sim.x, y: this.sim.y + 0.4, z: this.sim.z, mesh })
    this.audio.play('pickup', this.feet(), { volume: 0.4 })
    this.noise('drop')
  }

  private useRosary(): void {
    if (!hasItem(this.snap.inventory, 'rosary') || this.snap.rosaryCharges <= 0 || this.rosaryCd > 0) {
      if (hasItem(this.snap.inventory, 'rosary') && this.snap.rosaryCharges <= 0) this.say('Perlerne er kolde. Den virker ikke igen.')
      return
    }
    this.snap.rosaryCharges--
    this.rosaryCd = 6
    this.monster.bb.blindTime = 2.8
    this.monster.bb.hesitate = 2.8
    if (this.monster.bb.state === 'Chase' || this.monster.bb.state === 'Attack') this.monster.bb.state = 'LostPlayer'
    this.audio.play('key', this.feet(), { volume: 0.5 })
    this.say('Han tøver.')
  }

  private drainLight(dt: number): void {
    const step = stepBattery(this.sim.battery, this.sim.flashlightOn, dt)
    this.sim.battery = step.charge
    this.sim.flashlightOn = step.on
    if (step.died) {
      this.audio.play('metallic')
      this.say('Lygten gik ud. Den lader langsomt op, når den er slukket.')
      this.batteryWarned = false
    } else if (this.sim.flashlightOn && batteryBand(this.sim.battery) === 'critical' && !this.batteryWarned) {
      this.batteryWarned = true
      this.say('Batteriet er næsten tomt.')
    } else if (this.sim.battery > 30) {
      this.batteryWarned = false
    }
  }

  private syncView(): void {
    this.placeCamera({ sprint: false }, 1)
    this.camera.getWorldDirection(this.camDir)
  }

  private placeCamera(wish: { sprint: boolean }, dt = 1 / 60): void {
    const targetEye = this.hiding && this.world.hides.find((h) => h.id === this.hiding)?.kind === 'bed' ? 0.32 : eyeHeight(this.sim.crouching || !!this.hiding)
    this.cameraEye = dt >= 1 ? targetEye : smoothEyeHeight(this.cameraEye, targetEye, dt)
    const eye = this.cameraEye
    const speed = Math.hypot(this.sim.vx, this.sim.vz)
    if (speed > 0.4 && this.sim.grounded && !this.hiding) this.bob += speed * 0.016
    const amp = this.hiding ? 0 : this.sim.crouching ? 0.01 : wish.sprint ? 0.04 : 0.025
    const r = rightFromYaw(this.sim.yaw)
    const shake = this.settings.cameraShake ? this.trauma * this.trauma : 0
    this.camera.position.set(
      this.sim.x + r.x * Math.cos(this.bob) * amp + (Math.random() - 0.5) * shake * 0.12,
      this.sim.y + eye + Math.sin(this.bob * 2) * amp + (Math.random() - 0.5) * shake * 0.08,
      this.sim.z + r.z * Math.cos(this.bob) * amp,
    )
    this.camera.rotation.order = 'YXZ'
    this.camera.rotation.y = this.sim.yaw + Math.PI
    this.camera.rotation.x = this.sim.pitch
    this.camera.rotation.z = (Math.random() - 0.5) * shake * 0.05
    const sway = Math.sin(this.bob)
    this.viewmodel.position.set(0.2 + sway * 0.008, -0.16 - Math.abs(Math.sin(this.bob * 2)) * 0.008, -0.36)
    this.viewmodel.rotation.z = sway * 0.04
    this.viewmodel.rotation.x = Math.sin(this.bob * 2) * 0.02
    const fov = 72 + (wish.sprint && speed > 3 ? 3 : 0)
    if (Math.abs(this.camera.fov - fov) > 0.1) {
      this.camera.fov = fov
      this.camera.updateProjectionMatrix()
    }
  }

  private render(dt: number): void {
    const t = performance.now() / 1000
    this.tickLights(t, this.mode === 'playing')
    this.tickRain(dt)
    if (this.mode === 'playing') this.atmo.update(dt, this.camera.position, this.camDir, this.sim.flashlightOn && this.sim.battery > 0)
    const on = this.mode === 'playing' && this.sim.flashlightOn && this.sim.battery > 0
    const band = batteryBand(this.sim.battery)
    const flicker = on && band === 'critical' && Math.sin(t * 18) > 0.55 ? 0.45 : 1
    const dim = band === 'low' ? 0.72 : band === 'critical' ? 0.5 : 1
    const charge = Math.max(0.2, this.sim.battery / 100)
    this.spot.intensity = on ? 53 * charge * dim * flicker : 0
    const lamp = this.viewmodel.position
    this.spot.position.set(lamp.x, lamp.y + 0.02, lamp.z - 0.2)
    this.spot.target.position.set(lamp.x, lamp.y + 0.02, -12)
    this.cone.visible = false
    if (this.mannequinT > 0) {
      this.mannequinT -= dt
      this.built.mannequin.visible = true
      const look = this.camDir.dot(new THREE.Vector3(27.4 - this.camera.position.x, 1.5, 26.4 - this.camera.position.z).normalize())
      if (look > 0.82 && this.monsterDistTo(27.4, 26.4) < 8) this.looked += dt
      else this.looked = 0
      if (this.looked > 1.15) {
        this.built.mannequin.visible = false
        this.mannequinT = 0
        this.snap.flags.mannequinUsed = true
        this.scares.trigger('face', this.snap.playTime, true)
        this.looked = 0
      }
    } else if (!this.snap.flags.mannequinOn) {
      /* stays as the event left it */
    }
    if ((this.shadow.material as THREE.MeshBasicMaterial).opacity > 0) {
      const m = this.shadow.material as THREE.MeshBasicMaterial
      m.opacity = Math.max(0, m.opacity - dt)
      this.shadow.position.x += this.camDir.z * dt
      this.shadow.position.z -= this.camDir.x * dt
    }
    if (this.snap.flags.secretOpen) {
      this.built.secretShelf.position.x += (36.0 - this.built.secretShelf.position.x) * Math.min(1, dt * 2)
    }
    const u = this.post.uniforms
    const blur = this.settings.motionBlur ? Math.min(0.02, Math.hypot(this.sim.vx, this.sim.vz) * 0.002) : 0
    u.uExposure.value = 0.87 * this.settings.brightness
    u.uDamage.value = this.damage
    u.uFade.value = this.fade
    u.uGrain.value = 0
    u.uChroma.value = 0.08 + this.scares.fx.chroma * 0.05
    u.uTime.value = t
    u.uLow.value = this.sim.health < 40 ? (40 - this.sim.health) / 40 : 0
    u.uFlash.value = Math.max(this.flash, this.atmo.lightning * 0.35)
    u.uBlur.value.set(this.camDir.x * blur, this.camDir.y * blur)
    if (this.mode === 'playing' && this.blackout <= 0) this.fade = Math.max(0, this.fade - dt * 0.45)
    this.trauma = Math.max(0, this.trauma - dt)
    this.flash = Math.max(0, this.flash - dt * 1.5)
    const fog = this.scene.fog as THREE.FogExp2
    fog.density = 0.025 + this.director.tension * 0.00007
    this.post.render()
    if (this.subtitleT <= 0 && this.mode === 'playing') this.ui.subtitle('')
  }

  private tickLights(t: number, playing: boolean): void {
    for (const entry of this.built.lights) {
      let level = this.lightLevel(entry.def)
      const cut = this.lightCut.get(entry.def.id) ?? 0
      if (playing && cut > this.snap.playTime) level *= 0.05
      if (entry.def.flicker && level > 0) {
        // Asynchronous low-frequency variation; short faults are independent
        // for each lamp. Avoid constant high-rate strobing.
        const seed = entry.def.x * 0.59 + entry.def.z * 0.31
        const slow = 0.88 + 0.12 * Math.sin(t * 0.57 + seed)
        const faulty = Math.sin(t * 0.71 + seed) + 0.52 * Math.sin(t * 1.19 + seed * 2.8)
        const failed = faulty > (entry.def.room === 'reception' ? 0.98 : 1.24)
        const dip = failed ? 0.17 + 0.18 * (0.5 + 0.5 * Math.sin(t * 3.1 + seed)) : 1
        level *= Math.max(0.06, slow * dip)
      }
      if (entry.lens) entry.lens.emissiveIntensity = Math.max(0.012, level * 1.1)
      if (entry.light instanceof THREE.SpotLight || entry.light instanceof THREE.PointLight) {
        entry.light.intensity = entry.base * level
        entry.light.castShadow = this.settings.quality !== 'low' && entry.def.room === 'hall'
      }
    }
    const max = this.settings.quality === 'low' ? 4 : this.settings.quality === 'medium' ? 8 : 16
    const ranked = [...this.built.lights].sort(
      (a, b) => Math.hypot(a.def.x - this.camera.position.x, a.def.z - this.camera.position.z) - Math.hypot(b.def.x - this.camera.position.x, b.def.z - this.camera.position.z),
    )
    ranked.forEach((entry, i) => {
      if (i >= max && entry.light instanceof THREE.PointLight) entry.light.intensity = 0
    })
  }

  private lightLevel(def: { mode: string }): number {
    if (def.mode === 'power') return this.snap.flags.generatorOn ? 1 : 0
    if (def.mode === 'secret') return this.snap.flags.secretOpen ? 1 : 0
    return 1
  }

  private roomLit(id?: string): boolean {
    if (!id) return false
    return this.built.lights.some((l) => l.def.room === id && this.lightLevel(l.def) > 0.4)
  }

  private nearestLight() {
    let best: (typeof this.built.lights)[number] | null = null
    let d = 8
    for (const l of this.built.lights) {
      const dd = Math.hypot(l.def.x - this.sim.x, l.def.z - this.sim.z)
      if (dd < d) {
        d = dd
        best = l
      }
    }
    return best
  }

  private tickRain(dt: number): void {
    const attr = this.built.rain.geometry.getAttribute('position') as THREE.BufferAttribute
    const arr = attr.array as Float32Array
    for (let i = 0; i < arr.length; i += 3) {
      arr[i + 1] -= dt * 6
      if (arr[i + 1] < 0.2) arr[i + 1] = 6
    }
    attr.needsUpdate = true
  }

  private animateDoors(dt: number): void {
    for (const door of this.world.doors) {
      if (door.kind !== 'door') continue
      const target = this.desired.get(door.id) ?? 0
      const cur = this.open.get(door.id) ?? 0
      const next = cur + Math.sign(target - cur) * Math.min(Math.abs(target - cur), dt * 8)
      this.open.set(door.id, next)
      const pivot = this.built.doors.get(door.id)
      if (!pivot) continue
      const base = Number.isFinite(pivot.userData.closedYaw) ? (pivot.userData.closedYaw as number) : 0
      const swing = (pivot.userData.swing as number) || 1
      pivot.rotation.y = base + next * 1.7 * swing
      const panel = pivot.userData.panel as THREE.Mesh | undefined
      const mat = panel?.material
      if (mat instanceof THREE.MeshStandardMaterial) {
        const hot = this.aimedDoor === door.id
        mat.emissive.set(hot ? '#6a3028' : '#000000')
        mat.emissiveIntensity = hot ? 0.35 : 0
      }
    }
  }

  private slamNearest(): void {
    let best: string | null = null
    let d = 12
    for (const door of this.world.doors) {
      if ((this.open.get(door.id) ?? 0) < 0.4) continue
      const p = this.doorPos(door)
      const dd = Math.hypot(p.x - this.sim.x, p.z - this.sim.z)
      if (dd < d) {
        d = dd
        best = door.id
      }
    }
    if (!best) return
    this.desired.set(best, 0)
    this.open.set(best, 0)
    const door = this.world.doors.find((x) => x.id === best)!
    this.audio.play('doorSlam', this.doorPos(door), { volume: 0.9 })
    this.noise('door')
    if (d < 4) this.trauma = Math.max(this.trauma, 0.45)
  }

  private candidates(): InteractCandidate[] {
    const list: InteractCandidate[] = []
    for (const door of this.world.doors) {
      if (door.kind !== 'door') continue
      const p = this.doorPos(door)
      const openAmt = this.open.get(door.id) ?? 0
      const locked = doorBlocksNav(door, this.unlocked)
      const prompt = locked ? 'Låst dør' : openAmt > 0.4 ? 'Luk dør' : 'Åbn dør'
      list.push({ id: door.id, kind: 'door', x: p.x, y: p.y + 1, z: p.z, radius: 1.15, prompt })
    }
    for (const p of this.world.pickups) {
      if (this.snap.pickedUp.includes(p.id)) continue
      const room = this.world.rooms.find((r) => r.id === p.room)
      if (!room) continue
      list.push({
        id: p.id,
        kind: 'pickup',
        x: p.x,
        y: FLOOR_Y[room.floor] + 0.8,
        z: p.z,
        radius: 0.55,
        prompt: itemDef(p.itemId).name,
      })
    }
    for (const p of this.runtime) {
      list.push({ id: p.id, kind: 'pickup', x: p.x, y: p.y, z: p.z, radius: 0.5, prompt: 'Batteri' })
    }
    for (const d of this.world.devices) {
      const room = this.world.rooms.find((r) => r.id === d.room)!
      const prompts: Record<string, string> = {
        generator: 'Generator',
        safe: 'Pengeskab',
        bookshelf: 'Hylde',
        radio: 'Radio',
      }
      list.push({
        id: d.id,
        kind: d.kind,
        x: d.x,
        y: FLOOR_Y[room.floor] + 1,
        z: d.z,
        radius: 0.9,
        prompt: prompts[d.kind],
      })
    }
    for (const h of this.world.hides) {
      const room = this.world.rooms.find((r) => r.id === h.room)!
      list.push({
        id: h.id,
        kind: 'hide',
        x: h.x,
        y: FLOOR_Y[room.floor] + 1,
        z: h.z,
        radius: 0.8,
        prompt: h.kind === 'bed' ? 'Gem dig under sengen' : 'Gem dig i skabet',
      })
    }
    return list
  }

  private syncHud(wish: { sprint: boolean }): void {
    const hit = this.hiding
      ? null
      : selectInteract(this.eyePos(), { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z }, this.candidates())
    this.aimedDoor = hit?.kind === 'door' ? hit.id : ''
    const obj = currentObjective(this.snap)
    if (obj.id !== this.lastObjective) {
      if (this.lastObjective) {
        this.toast = obj.text
        this.toastT = 3.5
        this.persist(0)
      }
      this.lastObjective = obj.id
    }
    const files = fileCount(this.snap)
    this.ui.hud({
      objective: obj.text,
      files: files ? `Journaler ${files}/${FILE_IDS.length}` : '',
      prompt: this.messageT > 0 ? this.message : this.hiding ? 'Forlad gemmested' : hit ? hit.prompt : '',
      stamina: this.sim.stamina,
      battery: this.sim.battery,
      batteryText: `${Math.round(this.sim.battery)}%${batteryBand(this.sim.battery) === 'critical' && this.sim.flashlightOn ? ' · lavt' : ''}`,
      low: this.sim.health < 40 || batteryBand(this.sim.battery) !== 'ok',
      lockHint: this.mode === 'playing' && !this.input.pointerLocked,
    })
    this.ui.hurt(this.damage * 0.85 + (this.sim.health < 35 ? 0.25 : 0))
    this.paintMap()
    this.ui.toast(this.toastT > 0 ? this.toast : '')
    const dbg = this.audio.debug()
    this.ui.audioDebug(
      `Lyd ${dbg.state}  ${dbg.sampleRate} Hz\nStemmer ${dbg.voices}\n${dbg.failures.length ? `FEJL ${dbg.failures.join(' | ')}\n` : ''}${dbg.last.join('\n')}`,
      this.showAudio && this.mode === 'playing',
    )
    if (this.showPerf) {
      const info = this.renderer.info.render
      this.ui.perf(
        `FPS ${this.fps.toFixed(0)}\nKald ${info.calls}  Trekanter ${info.triangles}\n${this.monster.bb.state}  spænding ${this.director.tension.toFixed(0)}\n${this.sim.x.toFixed(1)} ${this.sim.y.toFixed(1)} ${this.sim.z.toFixed(1)}`,
        true,
      )
    } else this.ui.perf('', false)
    void wish
  }

  private visit(): void {
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (!room) return
    if (!this.snap.visited.includes(room.id)) {
      this.snap.visited.push(room.id)
      const floors = new Set(this.snap.visited.map((id) => this.world.rooms.find((r) => r.id === id)?.floor))
      if (floors.size > 1) this.persist(0)
    }
  }

  private refreshObjective(): void {
    const id = currentObjective(this.snap).id
    if (id !== this.lastObjective && this.lastObjective) this.persist(0)
  }

  private floorAllowed(_f: number): boolean {
    return true
  }

  private computeChase(): boolean {
    const dist = this.monsterDist()
    let allow = this.snap.playTime > 46 || hasItem(this.snap.inventory, 'note_code') || dist < 4.2
    if (this.director.suppress > 0 && dist > 2.6) allow = false
    return allow
  }

  private noise(kind: NoiseKind): void {
    const my = this.sim.y < 2 ? -1 : this.sim.y < 6 ? 0 : 1
    const ey = this.monster.pos.y < 2 ? -1 : this.monster.pos.y < 6 ? 0 : 1
    const occluded = !lineOfSight(this.eyePos(), { x: this.monster.pos.x, y: this.monster.pos.y + 1.5, z: this.monster.pos.z }, activeColliders(this.world, this.unlocked, this.open))
    this.noises.push({ kind, pos: this.feet(), floorDelta: Math.abs(my - ey), occluded })
  }

  private separateFromMonster(cols: ReturnType<typeof activeColliders>): void {
    if (this.hiding || this.monster.concealed) return
    const dx = this.sim.x - this.monster.pos.x
    const dz = this.sim.z - this.monster.pos.z
    const d = Math.hypot(dx, dz)
    const min = 0.66
    if (d > 0.001 && d < min && Math.abs(this.sim.y - this.monster.pos.y) < 1.5) {
      this.sim.x += (dx / d) * (min - d)
      this.sim.z += (dz / d) * (min - d)
      const again = sampleFloorY(this.world, this.sim.x, this.sim.z, this.sim.y)
      if (again === null) {
        this.sim.x -= (dx / d) * (min - d)
        this.sim.z -= (dz / d) * (min - d)
      }
    }
    void cols
  }

  private newGame(): void {
    this.snap = createNewGame()
    this.ended = false
    this.autosavedIntro = false
    this.lastObjective = ''
    this.fade = 1
    this.sim = simFrom(this.snap.player)
    this.unlocked = new Set(this.snap.doorsUnlocked)
    this.open.clear()
    this.desired.clear()
    this.hiding = null
    this.runtime.forEach((p) => p.mesh.visible = false)
    this.runtime = []
    for (const [id, mesh] of this.built.pickups) mesh.visible = !this.snap.pickedUp.includes(id)
    this.monster.spawn(this.snap.monster, this.snap.monster.yaw, 'Patrol')
    this.director = createDirector()
    this.creepIn = 12
    this.scares.dismiss()
    this.audio.beginScene()
    this.built.mannequin.visible = false
    this.built.secretShelf.position.x = 37.32
    this.viewmodel.visible = true
    this.lunge.visible = false
    this.setMode('playing')
    this.audio.ensure()
  }

  private applySnapshot(snap: GameSnapshot): void {
    this.snap = snap
    this.ended = false
    this.sim = simFrom(snap.player)
    this.unlocked = new Set(snap.doorsUnlocked)
    this.open.clear()
    this.desired.clear()
    for (const id of snap.doorsOpen) {
      this.open.set(id, 1)
      this.desired.set(id, 1)
    }
    this.hiding = null
    if (!this.snap.readIds) this.snap.readIds = []
    this.settleLoadedBody()
    for (const [id, mesh] of this.built.pickups) mesh.visible = !snap.pickedUp.includes(id)
    if (!snap.events) snap.events = emptyScript()
    this.monster.spawn(snap.monster, snap.monster.yaw, snap.monster.state)
    if (this.monsterDist() < 3) {
      this.monster.pos = { x: 4, y: 0, z: 16 }
      this.monster.group.position.set(4, 0, 16)
    }
    this.built.secretShelf.position.x = snap.flags.secretOpen ? 36 : 37.32
    this.built.mannequin.visible = false
    this.fade = 0.4
    this.viewmodel.visible = true
    this.lunge.visible = false
    this.creepIn = 12
    this.scares.dismiss()
    this.audio.beginScene()
    this.setMode('playing')
    this.audio.ensure()
  }

  private settleLoadedBody(): void {
    const floor = sampleFloorY(this.world, this.sim.x, this.sim.z, this.sim.y)
    const stuck = floor !== null && overlapsSolid(
      this.sim.x,
      floor,
      this.sim.z,
      PLAYER_RADIUS,
      STAND_H,
      this.sim.crouching,
      activeColliders(this.world, this.unlocked, this.open),
    )
    if (floor === null || stuck) {
      this.sim.x = SPAWN.x
      this.sim.y = SPAWN.y
      this.sim.z = SPAWN.z
      return
    }
    this.sim.y = floor
  }

  private persist(slot: number): void {
    if (this.snap.player.health <= 0) return
    this.copySim()
    this.snap.doorsOpen = this.world.doors.filter((d) => (this.open.get(d.id) ?? 0) > 0.6).map((d) => d.id)
    this.snap.doorsUnlocked = [...this.unlocked]
    this.snap.monster = {
      x: this.monster.pos.x,
      y: this.monster.pos.y,
      z: this.monster.pos.z,
      yaw: this.monster.yaw,
      state: this.monster.bb.state,
      waypointIndex: this.monster.bb.waypointIndex,
      suspicion: this.monster.bb.suspicion,
      blindTime: this.monster.bb.blindTime,
    }
    saveGame(this.storage, slot, this.snap)
    this.ui.continueEnabled(true)
  }

  private copySim(): void {
    this.snap.player = {
      x: this.sim.x,
      y: this.sim.y,
      z: this.sim.z,
      yaw: this.sim.yaw,
      pitch: this.sim.pitch,
      health: this.sim.health,
      stamina: this.sim.stamina,
      battery: this.sim.battery,
      flashlightOn: this.sim.flashlightOn,
      crouching: this.sim.crouching,
    }
  }

  private setMode(mode: Mode): void {
    const previous = this.mode
    this.mode = mode
    if (mode !== 'playing') {
      this.input.unlock()
      this.audio.setLocomotion(false, false, false)
      this.stepDist = 0
      if (previous === 'playing') this.audio.suspendTransient()
    } else if (previous !== 'playing' && !this.testMode) {
      this.input.lock()
    }
    const screen = mode === 'paused' ? 'pause' : mode
    this.ui.show(screen === 'playing' ? 'playing' : screen)
    this.audio.duck(mode !== 'playing' && mode !== 'menu')
    if (mode === 'inventory') this.refreshInv()
  }

  private applyModalKeys(): void {
    const focused = this.input.formFocused()
    if (this.mode !== 'playing' || focused) this.input.discard(GAMEPLAY_EDGES)
    const key = this.input.takeFirst(focused ? ['Escape'] : MODAL_KEYS)
    const action = modeAction(this.mode, key)
    if (action.type === 'mode') this.setMode(action.mode)
    else if (action.type === 'back') this.backFromOverlay()
  }

  private backFromOverlay(): void {
    if (this.mode === 'settings') this.setMode(this.settingsFrom === 'slots' ? 'menu' : this.settingsFrom)
    else if (this.mode === 'slots') this.setMode(this.slotMode === 'save' ? 'paused' : 'menu')
    else if (this.mode === 'credits' || this.mode === 'exit') this.setMode('menu')
  }

  private refreshInv(): void {
    const items = this.snap.inventory.map((s) => {
      const d = itemDef(s.itemId)
      return { name: d.name, count: s.count, desc: d.description }
    })
    if (this.invIndex >= items.length) this.invIndex = 0
    this.ui.keysLine(`Nøgler fundet: ${keysFound(this.snap)}/3`)
    this.ui.inventory(items, this.invIndex)
  }

  private openExamine(itemId: string): void {
    if (!this.snap.readIds.includes(itemId)) {
      this.snap.readIds.push(itemId)
      this.refreshObjective()
    }
    const def = itemDef(itemId)
    let map = ''
    if (itemId === 'blueprint') {
      map = this.world.rooms
        .filter((r) => r.id !== 'secret' || this.snap.visited.includes('secret'))
        .map((r) => `<i class="${this.snap.visited.includes(r.id) ? 'on' : ''}">${r.name}</i>`)
        .join('')
    }
    this.ui.examine(def, map)
    this.setMode('examine')
  }

  private zoneFor(roomId?: string): string {
    // Sound-only acoustic palette. No gameplay or navigation effects.
    if (!roomId) return 'hall'
    if (roomId === 'kapel') return 'chapel'
    if (roomId === 'slagterum' || roomId === 'obduktion') return 'slagter'
    if (roomId.startsWith('trappe') || roomId === 'patientgang') return 'corridor'
    if (roomId === 'observation' || roomId === 'kammer' || roomId === 'stilhed') return 'dark'
    if (roomId === 'kaeldergang') return 'cellar'
    if (this.sim.y > 6) return 'upper'
    return 'hall'
  }

  private relocateMonster(dt: number, cols: ReturnType<typeof activeColliders>): void {
    if (!this.monster.concealed) {
      this.hideWait = 0
      return
    }
    this.hideWait += dt
    if (this.hideWait < 1.2) return
    const player = { x: this.sim.x, y: this.sim.y, z: this.sim.z }
    const spot = pickRelocate({
      cells: this.spawnCells,
      player,
      forward: { x: this.camDir.x, z: this.camDir.z },
      recent: this.recentSpawns,
      from: { ...this.monster.pos },
      visible: (p) => lineOfSight(this.eyePos(), { x: p.x, y: p.y + 1.4, z: p.z }, cols),
      rng: Math.random,
    })
    if (!spot) return
    const exposed = flashlightBanishes(
      this.sim.flashlightOn && this.sim.battery > 0,
      this.eyePos(),
      { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z },
      { x: spot.x, y: spot.y + 1.6, z: spot.z },
      cols,
    )
    if (exposed) return
    this.monster.reveal(spot)
    this.recentSpawns.push(spot)
    if (this.recentSpawns.length > 6) this.recentSpawns.shift()
    this.hideWait = 0
    this.audio.trace.push('relocate')
  }

  private stepEvents(dt: number): void {
    if (!this.snap.events) this.snap.events = emptyScript()
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)?.id ?? ''
    const hit = selectInteract(this.eyePos(), { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z }, this.candidates())
    const openAmt = hit && hit.kind === 'door' ? (this.open.get(hit.id) ?? 0) : 0
    const atDoor = !!hit && hit.kind === 'door' && openAmt > 0.55 && hit.id !== EXIT_DOOR
    const fig = this.butcher.position
    const toFig = new THREE.Vector3(fig.x - this.camera.position.x, 0, fig.z - this.camera.position.z).normalize()
    const lookedAway = this.camDir.x * toFig.x + this.camDir.z * toFig.z < 0.25
    const stepped = stepScript(this.snap.events, {
      dt,
      time: this.snap.playTime,
      room,
      prevRoom: this.prevRoom,
      flashlight: this.sim.flashlightOn,
      prevFlash: this.prevFlash,
      lookedAway: this.snap.events.slagter === 2 && lookedAway,
      atDoor,
    })
    this.maybePeek(hit)
    this.snap.events = stepped.state
    this.prevRoom = room
    this.prevFlash = this.sim.flashlightOn
    for (const cue of stepped.cues) this.fireCue(cue, hit?.id)
    if (this.lungeT > 0) {
      this.lungeT = Math.max(0, this.lungeT - dt)
      this.lunge.visible = this.lungeT > 0
      const k = 1 - this.lungeT / 2
      this.lunge.position.z = -0.9 + k * 0.5
    } else this.lunge.visible = false
    if (this.shadowT > 0) {
      this.shadowT = Math.max(0, this.shadowT - dt)
      const u = 1 - this.shadowT / 1.1
      this.shadowMesh.position.lerpVectors(this.shadowFrom, this.shadowTo, Math.min(1, u))
      this.shadowMesh.position.y = this.shadowFrom.y + 1
      this.shadowMesh.visible = this.shadowT > 0
      this.audio.moveTracked(this.shadowMesh.position)
    }
  }

  private fireCue(cue: string, doorId?: string): void {
    if (cue.startsWith('jump:')) {
      this.lungeT = 2
      this.lunge.visible = true
      this.trauma = 1
      this.audio.play('scream')
      this.say('Noget var lige foran dig.')
      return
    }
    if (cue === 'silence') {
      this.audio.hush(3.5)
      return
    }
    if (cue === 'deep') {
      this.audio.play('deep', { x: 40, y: 1.2, z: 3 }, { volume: 1 })
      return
    }
    if (cue === 'figure') {
      this.butcher.visible = true
      return
    }
    if (cue === 'hide-figure') {
      this.butcher.visible = false
      return
    }
    if (cue === 'steps') {
      // Scripted phantom footsteps were heard even while the player stood still.
      return
    }
    if (cue === 'shadow') this.runShadow(doorId)
  }

  private runShadow(doorId?: string): void {
    const door = this.world.doors.find((d) => d.id === doorId) ?? this.world.doors.find((d) => d.id === 'door_rec_pat')
    if (!door) return
    const y = FLOOR_Y[door.floor]
    const dir = Math.random() < 0.5 ? 1 : -1
    const span = 1.6
    const intoX = Math.sign(door.coord - this.sim.x || 1)
    const intoZ = Math.sign(door.coord - this.sim.z || 1)
    if (door.axis === 'z') {
      const z = door.coord + intoZ * 0.85
      this.shadowFrom.set(door.center - dir * span, y, z)
      this.shadowTo.set(door.center + dir * span, y, z)
    } else {
      const x = door.coord + intoX * 0.85
      this.shadowFrom.set(x, y, door.center - dir * span)
      this.shadowTo.set(x, y, door.center + dir * span)
    }
    this.shadowT = 1.1
    this.shadowMesh.position.copy(this.shadowFrom)
    this.shadowMesh.position.y = y + 1
    this.shadowMesh.visible = true
    const at = { x: (this.shadowFrom.x + this.shadowTo.x) / 2, y: y + 1.2, z: (this.shadowFrom.z + this.shadowTo.z) / 2 }
    this.audio.playTracked('shadow', at)
    this.audio.play('creak', at, { volume: 0.7 })
    this.audio.setHeartbeat(0.7)
    this.flash = 0.4
    for (const lit of this.built.lights) {
      if (Math.hypot(lit.def.x - at.x, lit.def.z - at.z) < 8) this.lightCut.set(lit.def.id, this.snap.playTime + 0.7)
    }
  }

  private paintMap(): void {
    const canvas = this.ui.root.querySelector('#minimap') as HTMLCanvasElement | null
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    const floor = room?.floor ?? 0
    const showMonster = this.snap.playTime < this.monsterShown
    paintMinimap(ctx, canvas.width, canvas.height, {
      rooms: roomsOf(this.world.rooms),
      floor,
      px: this.sim.x,
      pz: this.sim.z,
      yaw: this.sim.yaw,
      visited: new Set(this.snap.visited),
      monster: showMonster ? { x: this.monster.pos.x, z: this.monster.pos.z, show: true } : null,
      batteries: this.world.pickups
        .filter((p) => p.itemId === 'battery' && this.snap.visited.includes(p.room) && !this.snap.pickedUp.includes(p.id))
        .map((p) => ({ x: p.x, z: p.z, floor: this.world.rooms.find((r) => r.id === p.room)?.floor ?? 0 })),
    })
  }

  private herdMonster(): void {
    const here = roomAt(this.world, this.monster.pos.x, this.monster.pos.z, this.monster.pos.y)
    if (here && here.id !== this.monsterRoom) {
      this.monsterRoom = here.id
      this.monsterShown = this.snap.playTime + 3.6
      this.monsterRoomUntil = this.snap.playTime + 120
    }
    if (this.monsterRoomUntil > 0 && this.snap.playTime > this.monsterRoomUntil && !this.monster.concealed) {
      const options = this.world.rooms.filter((r) => !r.id.startsWith('trappe') && r.id !== 'stilhed' && r.id !== this.monsterRoom)
      const next = options[Math.floor(Math.random() * options.length)]
      if (!next) return
      this.monsterRoomUntil = this.snap.playTime + 120
      this.monster.bb.state = 'Patrol'
      this.monster.bb.goal = { x: next.x + next.w * 0.5, y: FLOOR_Y[next.floor], z: next.z + next.d * 0.5 }
      this.monsterShown = this.snap.playTime + 3.6
    }
  }

  private maybePeek(hit: { id: string; kind: string } | null): void {
    if (this.peekT > 0 || this.peekCool > 0 || !hit || hit.kind !== 'door') return
    if (Math.hypot(this.sim.vx, this.sim.vz) > 0.4) return
    if (Math.random() > 0.012) return
    const door = this.world.doors.find((d) => d.id === hit.id)
    if (!door) return
    const y = FLOOR_Y[door.floor]
    const intoX = Math.sign(door.coord - this.sim.x || 1)
    const intoZ = Math.sign(door.coord - this.sim.z || 1)
    this.peek.position.set(
      door.axis === 'x' ? door.coord + intoX * 0.42 : door.spanMin + 0.15,
      y,
      door.axis === 'z' ? door.coord + intoZ * 0.42 : door.spanMin + 0.15,
    )
    this.peek.lookAt(this.camera.position.x, this.peek.position.y + 1.5, this.camera.position.z)
    this.peek.visible = true
    this.peekT = 1.25
    this.peekCool = 26
    this.audio.play('whisper', { x: this.peek.position.x, y: y + 1.5, z: this.peek.position.z }, { volume: 0.55 })
    this.audio.trace.push('peek')
  }

  private stepPower(dt: number): void {
    if (!this.snap.flags.powerCut && this.snap.playTime >= 120) {
      this.snap.flags.powerCut = true
      this.blackout = 3.6
      this.fade = 1
      this.sim.flashlightOn = false
      this.sim.x = 42
      this.sim.y = 0
      this.sim.z = 8
      this.sim.vx = 0
      this.sim.vz = 0
      this.sim.vy = 0
      this.audio.play('metallic')
      this.audio.trace.push('power-cut')
    }
    if (this.blackout > 0) {
      this.blackout = Math.max(0, this.blackout - dt)
      this.fade = 1
    }
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (room?.id === 'stilhed' && keysFound(this.snap) >= 3) this.finish('yard')
    this.peekCool = Math.max(0, this.peekCool - dt)
    if (this.peekT > 0) {
      this.peekT = Math.max(0, this.peekT - dt)
      this.peek.visible = this.peekT > 0
      const k = this.peekT > 0.8 ? (1.3 - this.peekT) / 0.5 : Math.min(1, this.peekT / 0.35)
      this.peek.position.y = FLOOR_Y[Math.round(this.sim.y / 4)] + 1.45
      this.peek.scale.setScalar(0.2 + 0.8 * Math.max(0, Math.min(1, k)))
    }
  }

  private stepKnocks(): void {
    if (!this.knocks.length) return
    const now = this.snap.playTime
    this.knocks = this.knocks.filter((k) => {
      if (k.at > now) return true
      this.audio.play('door', k.pos, { volume: 0.75 })
      this.audio.trace.push('knock')
      return false
    })
  }

  private queueKnocks(): void {
    const back = { x: -this.camDir.x, z: -this.camDir.z }
    for (let i = 0; i < 3; i++) {
      const dist = 7 - i * 2.2
      this.knocks.push({
        at: this.snap.playTime + 0.35 + i * 0.7,
        pos: { x: this.sim.x + back.x * dist, y: this.sim.y + 1, z: this.sim.z + back.z * dist },
      })
    }
  }

  private buildViewmodel(): THREE.Group {
    const root = new THREE.Group()
    const skin = new THREE.MeshStandardMaterial({ color: '#e0c2a4', roughness: 0.62, emissive: '#5c4030', emissiveIntensity: 0.22, depthTest: false })
    const bodyMat = new THREE.MeshStandardMaterial({ color: '#3a3734', roughness: 0.4, metalness: 0.7, emissive: '#141312', emissiveIntensity: 0.18, depthTest: false })
    const headMat = new THREE.MeshStandardMaterial({ color: '#d5d0c8', roughness: 0.28, metalness: 0.8, emissive: '#2a2926', emissiveIntensity: 0.2, depthTest: false })
    const lensMat = new THREE.MeshBasicMaterial({ color: '#fff6df', depthTest: false })
    const mark = (mesh: THREE.Object3D) => {
      mesh.frustumCulled = false
      mesh.renderOrder = 3
      mesh.traverse((child) => {
        child.frustumCulled = false
        child.renderOrder = 3
      })
      return mesh
    }
    // Cylinder axis is local Y. Rotating X by 90° sends the head toward -Z, into the scene.
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.03, 0.2, 16), bodyMat)
    body.rotation.x = Math.PI / 2
    body.position.z = -0.02
    const bezel = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.034, 0.06, 16), headMat)
    bezel.rotation.x = Math.PI / 2
    bezel.position.z = -0.15
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.034, 20), lensMat)
    lens.position.z = -0.182
    lens.rotation.y = Math.PI
    const nub = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.018, 8), headMat)
    nub.position.set(0, 0.032, 0.02)
    const forearm = rod(v(0.12, -0.14, 0.16), v(0.03, -0.04, 0.04), 0.04, 0.028, skin)
    const palm = ball(v(0.02, -0.02, -0.01), 0.034, skin)
    const thumb = rod(v(0.04, -0.01, 0.02), v(0.01, 0.03, -0.06), 0.013, 0.01, skin)
    root.add(mark(body), mark(bezel), mark(lens), mark(nub), mark(forearm), mark(palm), mark(thumb))
    for (let i = 0; i < 3; i++) {
      const z = -0.01 - i * 0.04
      root.add(mark(rod(v(0.03, -0.01, z), v(-0.015, 0.028, z - 0.015), 0.011, 0.008, skin)))
    }
    root.renderOrder = 3
    return root
  }

  private buildLunge(): THREE.Group {
    const g = new THREE.Group()
    const pale = new THREE.MeshBasicMaterial({ color: '#e7ddd2', depthTest: false })
    const ink = new THREE.MeshBasicMaterial({ color: '#140c0c', depthTest: false })
    const face = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 16), pale)
    face.scale.set(0.88, 1.22, 0.5)
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), ink)
    eyeL.scale.set(1.4, 0.45, 0.4)
    eyeL.position.set(-0.06, 0.03, 0.08)
    const eyeR = eyeL.clone()
    eyeR.position.x = 0.065
    const pupil = new THREE.MeshBasicMaterial({ color: '#ac281d' })
    const pL = new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), pupil)
    pL.position.set(-0.06, 0.03, 0.1)
    const pR = pL.clone()
    pR.position.x = 0.065
    g.add(face, eyeL, eyeR, pL, pR)
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.17,0.042,0.016),ink)
    mouth.position.set(0,-0.075,0.097)
    g.add(mouth)
    const wound = new THREE.MeshBasicMaterial({color:'#4f1715',depthTest:false})
    for (let i=0;i<5;i++) {
      const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.009,0.035,4),pale)
      tooth.position.set((i-2)*0.031,-0.073,0.111)
      tooth.rotation.z=Math.PI
      g.add(tooth)
      const scar = new THREE.Mesh(new THREE.BoxGeometry(0.008,0.06+(i%2)*0.028,0.006),wound)
      scar.position.set(-0.115+i*0.04,-0.12+i*0.008,0.089)
      scar.rotation.z=0.3
      g.add(scar)
    }
    g.position.set(0, 0, -0.7)
    g.visible = false
    g.renderOrder = 20
    return g
  }

  private buildButcher(): THREE.Group {
    // Second apparition: a ruined orderly with an apron and a worn mask.
    // Visual only — scripted appearances and collision remain unchanged.
    const g = new THREE.Group()
    g.position.set(40, 0, 3)
    const coat = new THREE.MeshStandardMaterial({ color: '#292628', roughness: 0.99, side: THREE.DoubleSide })
    const cloth = new THREE.MeshStandardMaterial({ color: '#665b4e', roughness: 0.98, side: THREE.DoubleSide })
    const blood = new THREE.MeshStandardMaterial({ color: '#481919', roughness: 0.87 })
    const mask = new THREE.MeshStandardMaterial({ color: '#a69e8d', roughness: 0.88 })
    const iron = new THREE.MeshStandardMaterial({ color: '#66615b', metalness: 0.7, roughness: 0.52 })
    const skin = new THREE.MeshStandardMaterial({ color: '#5e4d46', roughness: 0.96 })
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.76, 6, 12), coat)
    body.position.y = 1.11
    body.castShadow = true
    g.add(body)
    for (const side of [-1,1]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.13,0.105,0.84,8),coat)
      leg.position.set(side*0.14,0.44,0)
      g.add(leg)
      const boot = new THREE.Mesh(new THREE.BoxGeometry(0.24,0.16,0.39),coat)
      boot.position.set(side*0.14,0.08,0.095)
      g.add(boot)
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.085,0.065,0.81,8),coat)
      arm.position.set(side*0.38,1.18,0.02)
      arm.rotation.z=side*0.18
      g.add(arm)
      const glove = new THREE.Mesh(new THREE.SphereGeometry(0.09,10,8),skin)
      glove.position.set(side*0.46,0.76,0.04)
      g.add(glove)
    }
    const apron = new THREE.Mesh(new THREE.PlaneGeometry(0.52,0.95),cloth)
    apron.position.set(0,1.0,0.29)
    apron.rotation.z=0.045
    g.add(apron)
    for (let i=0; i<5; i++) {
      const stain = new THREE.Mesh(new THREE.BoxGeometry(0.045,0.22+(i%3)*0.06,0.01),blood)
      stain.position.set((i-2)*0.09,1.01-(i%2)*0.16,0.304)
      stain.rotation.z=(i-2)*0.1
      g.add(stain)
    }
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.19,18,14),skin)
    head.scale.set(0.87,1.14,0.8)
    head.position.set(0,1.78,0.02)
    head.castShadow = true
    g.add(head)
    const surgicalMask = new THREE.Mesh(new THREE.BoxGeometry(0.30,0.14,0.035),mask)
    surgicalMask.position.set(0,1.71,0.17)
    g.add(surgicalMask)
    const eyes = new THREE.MeshStandardMaterial({color:'#17100e',roughness:0.95})
    for (const side of [-1,1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.048,10,8),eyes)
      eye.position.set(side*0.08,1.845,0.165)
      eye.scale.set(1.1,0.48,0.65)
      g.add(eye)
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.034,0.72,0.032),cloth)
      strap.position.set(side*0.235,1.26,0.29)
      g.add(strap)
    }
    const cleaver = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.42,0.018),iron)
    cleaver.position.set(0.48,0.52,0.17)
    cleaver.rotation.z=-0.2
    g.add(cleaver)
    for (let i=0;i<4;i++) {
      const hook = new THREE.Mesh(new THREE.TorusGeometry(0.07,0.013,6,12,Math.PI*1.65),iron)
      hook.position.set(-1.18+i*0.72,2.4,-0.25)
      hook.rotation.x=Math.PI/2
      g.add(hook)
    }
    g.visible=false
    return g
  }

  private say(text: string): void {
    this.message = text
    this.messageT = 2.6
  }

  private eyePos() {
    return { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z }
  }
  private feet() {
    return { x: this.sim.x, y: this.sim.y, z: this.sim.z }
  }
  private hidePos() {
    const h = this.world.hides.find((x) => x.id === this.hiding)
    return h ? { x: h.x, y: this.sim.y, z: h.z } : null
  }
  private doorPos(door: { axis: 'x' | 'z'; coord: number; center: number; floor: number }) {
    return {
      x: door.axis === 'x' ? door.coord : door.center,
      y: FLOOR_Y[door.floor] + 1,
      z: door.axis === 'z' ? door.coord : door.center,
    }
  }
  private monsterDist(): number {
    return Math.hypot(this.monster.pos.x - this.sim.x, this.monster.pos.z - this.sim.z)
  }
  private monsterDistTo(x: number, z: number): number {
    return Math.hypot(this.camera.position.x - x, this.camera.position.z - z)
  }

  private resize(): void {
    const w = window.innerWidth
    const h = window.innerHeight
    this.camera.aspect = w / Math.max(1, h)
    this.camera.updateProjectionMatrix()
    const cap = this.settings.quality === 'low' ? 1 : this.settings.quality === 'high' ? 1.5 : 1.25
    const pr = Math.min(window.devicePixelRatio || 1, cap) * this.settings.resolutionScale
    this.renderer.setPixelRatio(pr)
    this.renderer.setSize(w, h, false)
    this.post.setSize(Math.floor(w * pr), Math.floor(h * pr))
  }

  private applyVolumes(): void {
    this.audio.setVolumes(this.settings.masterVolume, this.settings.musicVolume, this.settings.sfxVolume)
  }

  applyPatch(partial: Partial<Settings>): void {
    const prev = this.settings.quality
    this.settings = sanitizeSettings({ ...this.settings, ...partial })
    saveSettings(this.storage, this.settings)
    this.ui.fillSettings(this.settings)
    this.applyVolumes()
    this.input.setSensitivity(this.settings.mouseSensitivity)
    if (partial.quality && partial.quality !== prev) {
      this.post.applyQuality(this.settings.quality)
      this.renderer.shadowMap.enabled = this.settings.quality !== 'low'
      this.spot.castShadow = this.settings.quality !== 'low'
      for (const d of this.built.detail) d.visible = this.settings.quality !== 'low'
    }
    if (partial.fullscreen !== undefined) {
      if (this.settings.fullscreen) document.documentElement.requestFullscreen?.().catch(() => undefined)
      else if (document.fullscreenElement) document.exitFullscreen?.().catch(() => undefined)
    }
    this.resize()
  }

  bindUi(): void {
    /* hooks are passed at construction via a late bind in main */
  }

  /** Called by main with the real UI hooks already constructed around this game. */
  handle(action: string, extra?: number | string): void {
    if (action === 'new') this.newGame()
    else if (action === 'continue') {
      const save = latestSave(this.storage)
      if (save) this.applySnapshot(save.snapshot)
    } else if (action === 'openLoad') {
      this.slotMode = 'load'
      this.ui.slots(listSaves(this.storage), 'INDLÆS')
      this.setMode('slots')
    } else if (action === 'openSave') {
      this.slotMode = 'save'
      this.ui.slots(listSaves(this.storage), 'GEM')
      this.setMode('slots')
    } else if (action === 'slot' && typeof extra === 'number') {
      if (this.slotMode === 'save') {
        this.persist(extra)
        this.say('Gemt.')
        this.setMode('paused')
      } else {
        const data = loadGame(this.storage, extra)
        if (data) this.applySnapshot(data.snapshot)
      }
    } else if (action === 'closeSlots') this.setMode(this.slotMode === 'save' ? 'paused' : 'menu')
    else if (action === 'settings') {
      this.settingsFrom = this.mode === 'playing' ? 'paused' : this.mode
      this.ui.fillSettings(this.settings)
      this.setMode('settings')
    } else if (action === 'closeSettings') this.setMode(this.settingsFrom === 'slots' ? 'menu' : this.settingsFrom)
    else if (action === 'resume') this.setMode('playing')
    else if (action === 'restart') this.newGame()
    else if (action === 'menu') {
      if (!this.ended && this.snap.playTime > 1) this.persist(0)
      this.setMode('menu')
    } else if (action === 'exit') {
      this.setMode('exit')
      window.close()
    } else if (action === 'exitBack') this.setMode('menu')
    else if (action === 'credits') this.setMode('credits')
    else if (action === 'creditsBack') this.setMode('menu')
    else if (action === 'closeInv') this.setMode('playing')
    else if (action === 'inventory') {
      if (this.mode === 'playing' || this.mode === 'paused') this.setMode('inventory')
    }
    else if (action === 'select' && typeof extra === 'number') {
      this.invIndex = extra
      this.refreshInv()
    } else if (action === 'use') this.useSelected()
    else if (action === 'drop') this.dropSelected()
    else if (action === 'closeEx') this.setMode(this.snap.playTime > 0 && !this.ended ? 'playing' : 'menu')
    else if (action === 'digit' && typeof extra === 'string') {
      if (this.code.length < 4) this.code += extra
      this.ui.keypad(this.code, 'Stiftelsesåret.')
    } else if (action === 'keyOk') this.submitCode()
    else if (action === 'keyClear') {
      this.code = ''
      this.ui.keypad(this.code, 'Stiftelsesåret.')
    } else if (action === 'keyClose') this.setMode('playing')
    else if (action === 'patch') {
      /* unused */
    } else if (action === 'endMenu') this.setMode('menu')
    else if (action === 'endRetry') {
      const save = loadGame(this.storage, 0)
      if (save) this.applySnapshot(save.snapshot)
      else this.newGame()
    } else if (action === 'endNew') this.newGame()
  }

  private useSelected(): void {
    const slot = this.snap.inventory[this.invIndex]
    if (!slot) return
    const def = itemDef(slot.itemId)
    if (def.kind === 'consumable') {
      const used = useConsumable(this.snap.inventory, slot.itemId)
      if (used.heal) {
        this.snap.inventory = used.slots
        this.sim.health = Math.min(100, this.sim.health + used.heal)
        this.snap.player.health = this.sim.health
        this.audio.play('pickup')
        this.refreshInv()
      }
      return
    }
    if (def.text || def.kind === 'map' || def.kind === 'note' || def.kind === 'story' || def.kind === 'collectible') this.openExamine(slot.itemId)
  }

  private dropSelected(): void {
    const slot = this.snap.inventory[this.invIndex]
    if (!slot) return
    const dropped = dropOne(this.snap.inventory, slot.itemId)
    if (!dropped.dropped) {
      this.say('Den skal du beholde.')
      return
    }
    this.snap.inventory = dropped.slots
    this.refreshInv()
  }

  private installApi(): void {
    const game = this
    window.__AGNES__ = {
      ready: true,
      mode: () => game.mode,
      start: () => game.newGame(),
      snapshot: () => {
        game.copySim()
        return JSON.parse(JSON.stringify(game.snap)) as GameSnapshot
      },
      setMove: (m) => {
        game.input.virtual = m
      },
      look: (x: number, y: number) => {
        const aimed = applyMouseLook(game.sim.yaw, game.sim.pitch, x, y, game.settings.invertY)
        game.sim.yaw = aimed.yaw
        game.sim.pitch = aimed.pitch
        game.syncView()
      },
      act: (name: string) => {
        if (name === 'interact') game.interact()
        else if (name === 'flashlight') game.toggleFlash()
        else if (name === 'pause') game.setMode('paused')
        else if (name === 'inventory') game.setMode('inventory')
        else if (name === 'reload') game.swapBattery()
        else game.handle(name)
      },
      teleport: (x: number, y: number, z: number) => {
        game.sim.x = x
        game.sim.y = y
        game.sim.z = z
        const floor = sampleFloorY(game.world, x, z, y)
        if (floor !== null) game.sim.y = floor
        game.syncView()
      },
      freeze: (v: boolean) => game.setFrozen(v),
      give: (id: string) => {
        game.snap.inventory = addItem(game.snap.inventory, id).slots
      },
      setFlag: (key: string, value: boolean) => {
        ;(game.snap.flags as unknown as Record<string, boolean>)[key] = value
        if (key === 'secretOpen' && value) game.unlocked.add('door_secret')
        if (key === 'generatorOn') game.snap.flags.generatorOn = value
      },
      unlock: (id: string) => game.unlocked.add(id),
      forceMonster: (state: string) => {
        game.monster.bb.state = state as typeof game.monster.bb.state
      },
      faceMonster: (yaw: number) => game.monster.face(yaw),
      placeMonster: (x: number, y: number, z: number) => {
        game.monster.pos = { x, y, z }
        game.monster.group.position.set(x, y, z)
        game.monster.bb.state = 'Idle'
        game.monster.face(Math.PI)
        game.snap.iFrame = 8
        game.scares.fx.face = 0
        game.scares.update(10)
      },
      scare: (kind: string) => game.scares.trigger(kind as ScareKind, game.snap.playTime, true),
      save: (slot: number) => game.persist(slot),
      load: (slot: number) => {
        const data = loadGame(game.storage, slot)
        if (data) game.applySnapshot(data.snapshot)
        return !!data
      },
      restart: () => game.newGame(),
      fps: () => game.fps,
      monster: () => ({ x: game.monster.pos.x, y: game.monster.pos.y, z: game.monster.pos.z, state: game.monster.bb.state }),
      doorOpen: (id: string) => (game.open.get(id) ?? 0) > 0.6,
      aim: () => {
        const hit = selectInteract(game.eyePos(), { x: game.camDir.x, y: game.camDir.y, z: game.camDir.z }, game.candidates())
        return hit ? { id: hit.id, kind: hit.kind, prompt: hit.prompt } : null
      },
      tension: () => game.director.tension,
      lastScare: () => game.scares.lastKind,
      audioLog: () => game.audio.trace.slice(),
      monsterHidden: () => game.monster.concealed,
      events: () => game.snap.events,
      emptyLight: () => {
        game.sim.battery = 0.15
      },
      ping: (kind: string) => {
        game.audio.play(kind as 'flash', { x: game.sim.x + 1.5, y: game.sim.y + 1, z: game.sim.z + 1.5 }, { volume: 1 })
      },
      probe: (ms: number) => game.audio.sampleMix(ms),
      audition: (kind: string) => game.audio.audition(kind),
      measureBed: () => game.audio.measureBed(),
    }
  }
}

function v(x: number, y: number, z: number): THREE.Vector3 {
  return new THREE.Vector3(x, y, z)
}

function rod(a: THREE.Vector3, b: THREE.Vector3, r0: number, r1: number, mat: THREE.Material): THREE.Mesh {
  const dir = new THREE.Vector3().subVectors(b, a)
  const len = Math.max(0.001, dir.length())
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r0, r1, len, 12), mat)
  mesh.position.copy(a).lerp(b, 0.5)
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize())
  return mesh
}

function ball(p: THREE.Vector3, r: number, mat: THREE.Material): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 8), mat)
  mesh.position.copy(p)
  return mesh
}

function blankSim(): SimPlayer {
  return simFrom(createNewGame().player)
}

function simFrom(p: GameSnapshot['player']): SimPlayer {
  return { ...p, vy: 0, vx: 0, vz: 0, grounded: true, justLanded: false }
}

declare global {
  interface Window {
    __AGNES__?: {
      ready: boolean
      mode: () => string
      start: () => void
      snapshot: () => GameSnapshot
      setMove: (m: { forward?: number; strafe?: number; sprint?: boolean; crouch?: boolean; jump?: boolean } | null) => void
      look: (x: number, y: number) => void
      act: (name: string) => void
      teleport: (x: number, y: number, z: number) => void
      freeze: (paused: boolean) => void
      give: (id: string) => void
      setFlag: (key: string, value: boolean) => void
      unlock: (id: string) => void
      forceMonster: (state: string) => void
      faceMonster: (yaw: number) => void
      placeMonster: (x: number, y: number, z: number) => void
      scare: (kind: string) => void
      save: (slot: number) => void
      load: (slot: number) => boolean
      restart: () => void
      fps: () => number
      monster: () => { x: number; y: number; z: number; state: string }
      doorOpen: (id: string) => boolean
      aim: () => { id: string; kind: string; prompt: string } | null
      tension: () => number
      lastScare: () => string | null
      audioLog: () => string[]
      monsterHidden: () => boolean
      events: () => GameSnapshot['events']
      emptyLight: () => void
      ping: (kind: string) => void
      probe: (ms: number) => Promise<{ peak: number; jumps: number; state: string }>
      audition: (kind: string) => Promise<{ rms: number; peak: number; state: string; played: boolean }>
      measureBed: () => Promise<{ rms: number; peak: number; state: string }>
    }
  }
}
