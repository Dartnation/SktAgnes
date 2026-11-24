import * as THREE from 'three'
import { AudioEngine } from '../audio/AudioEngine'
import { MonsterActor } from '../ai/MonsterAI'
import { createDirector, stepDirector, type DirectorState } from '../ai/HorrorDirector'
import { Atmosphere } from '../horror/Atmosphere'
import { JumpscareEngine } from '../horror/JumpscareEngine'
import type { ScareKind } from '../horror/ScareLogic'
import { EYE_STAND, eyeHeight, PLAYER_RADIUS, simulatePlayer, smoothEyeHeight, STAND_H, type SimPlayer } from '../player/PlayerController'
import { clampDt } from '../core/clock'
import { createBus, type GameBus, type GameSignal } from '../core/events'
import { applyMouseLook, rightFromYaw, type Vec3 } from '../core/math'
import { createRng, type Rng } from '../core/rng'
import { flashlightBanishes, pickRelocate } from '../ai/presence'
import { canLeaveCloset, emptyCloset, enterCloset, leaveCloset, passerAlong, stepCloset, type ClosetState } from '../horror/ClosetSequence'
import { emptyScript, stepScript } from '../horror/ScriptedEvents'
import { advanceEpoch, createSchedule, markRecovery, offerSequences, planBeat, stepSchedule, type ScheduleState } from '../horror/Schedule'
import { createTone, doorStartedMoving, RADIO_SOURCE, radioPulse, stepRoomTone as advanceRoomTone, type ToneState } from '../audio/roomTone'
import { lineOfSight, overlapsSolid, selectInteract, type InteractCandidate } from '../physics/Collision'
import { activeColliders, buildWorld, doorBlocksNav, patrolPoints, roomAt, sampleFloorY, type World } from '../world/buildWorld'
import { buildLevel, type BuiltWorld } from '../world/LevelBuilder'
import type { SurfaceSet } from '../world/photoSurfaces'
import { EXIT_DOOR, FLOOR_Y } from '../world/data'
import { ContainerHost } from './ContainerHost'
import { Input } from './Input'
import { GAMEPLAY_EDGES, inventoryKey, MODAL_KEYS, modeAction, type GameMode } from './modalInput'
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
  gateBlock,
  leaveCause,
  resolveEnding,
  storyProgress,
  type GameSnapshot,
} from '../systems/Story'
import { PostFX } from '../render/PostFX'
import { backingStore, objectiveRoom, paintMinimap, roomsOf, type MiniGoal } from '../ui/minimap'
import { introFrame } from '../ui/intro'
import { FLICKER_ROOMS, fixtureFlicker, visibleLightCount } from '../world/flicker'
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
  private schedule: ScheduleState = createSchedule()
  private tone: ToneState = createTone()
  private radioAt = -99
  private extraCueAt = 28
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
  private closet: ClosetState = emptyCloset()
  private closetBox: THREE.Group | null = null
  private closetYaw = 0
  private whisperSlot = -1
  private foundT = 0
  private ambient!: THREE.AmbientLight
  private hemi!: THREE.HemisphereLight
  private moon!: THREE.DirectionalLight
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
  private containers: ContainerHost
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
  private passT = 0
  private passFrom = new THREE.Vector3()
  private passTo = new THREE.Vector3()
  private beamHold = 0
  private butcherHit = false
  private monsterShown = 0
  private monsterRoom = ''
  private monsterRoomUntil = 0
  private peek!: THREE.Group
  private spawnCells: Vec3[] = []
  private mannequinT = 0
  private looked = 0
  private lightCut = new Map<string, number>()
  private lampShown = new Map<string, number>()
  private lampClock = -1
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
  private introTime = -1
  private introBeat = -1
  private frameError = false
  private contextLost = false
  private readonly wantsIntro: boolean
  private readonly bus: GameBus = createBus()
  private rng: Rng = createRng(1)

  constructor(canvas: HTMLCanvasElement, private ui: UI, storage?: StorageLike, photos?: Map<string, SurfaceSet> | null) {
    this.storage = storage ?? browserStorage()
    this.settings = loadSettings(this.storage)
    const params = new URLSearchParams(location.search)
    const test = params.has('test')
    this.testMode = test
    this.wantsIntro = !test || params.has('intro')
    const seedParam = Number(params.get('seed'))
    const seed = Number.isFinite(seedParam) && seedParam > 0 ? Math.floor(seedParam) : test ? 1 : (Date.now() % 2147483646) + 1
    this.rng = createRng(seed)
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
    this.scene.fog = new THREE.FogExp2(0x0d1013, 0.024)
    // Keep a trace of moonlight for orientation, but darkness must matter.
    this.ambient = new THREE.AmbientLight(0x28313b, 0.043)
    this.hemi = new THREE.HemisphereLight(0x32404b, 0x15130e, 0.112)
    this.moon = new THREE.DirectionalLight(0x899baa, 0.027)
    this.moon.position.set(-20, 40, -10)
    this.scene.add(this.ambient, this.hemi, this.moon)
    this.closetBox = this.buildClosetBox()

    this.world = buildWorld()
    this.built = buildLevel(this.scene, this.world, photos)
    this.containers = new ContainerHost(this.scene)
    this.monster = new MonsterActor()
    this.scene.add(this.monster.group)
    this.atmo = new Atmosphere(this.scene, 24)
    this.scene.add(this.camera)
    this.spot = new THREE.SpotLight('#f1e4ca', 0, 21, 0.49, 0.87, 1.25)
    this.spot.castShadow = this.settings.quality !== 'low'
    this.spot.shadow.mapSize.set(this.settings.quality === 'high' ? 1024 : 512, this.settings.quality === 'high' ? 1024 : 512)
    this.spot.shadow.bias = -0.00025
    this.spot.shadow.normalBias = 0.014
    this.spot.shadow.radius = 1.8
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
    // V3: a distant featureless shadow instead of a bright cartoon head.
    this.peek = this.buildPasser()
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
    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault()
      this.contextLost = true
      this.ui.fatal('Grafikkortet slap spillet. Genindlæs siden.')
    })
    canvas.addEventListener('webglcontextrestored', () => {
      this.contextLost = false
      this.ui.fatal('Grafikkortet kom tilbage. Genindlæs siden for at fortsætte.')
    })
    this.ui.root.querySelector('#intro')?.addEventListener('click', () => {
      if (this.introTime >= 0) this.finishIntro()
    })
  }

  start(): void {
    this.audio.enableRoomTones()
    this.ui.show('menu')
    this.mode = 'menu'
    this.clock = performance.now()
    this.rafId = requestAnimationFrame(this.onFrame)
  }

  private onFrame = (now: number): void => {
    if (this.frozen || this.contextLost) return
    try {
      const dt = clampDt((now - this.clock) / 1000 || 0)
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
          const used = clampDt(this.acc)
          this.acc = 0
          this.advance(used)
        }
      } else {
        this.advance(dt)
      }
    } catch (err) {
      if (!this.frameError) {
        this.frameError = true
        console.error(err)
      }
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
    if (this.introTime >= 0) {
      this.stepIntro(dt)
      return
    }
    this.containers.step(dt, false)
    this.viewmodel.visible = true
    this.snap.playTime += dt
    this.snap.iFrame = Math.max(0, this.snap.iFrame - dt)
    this.rosaryCd = Math.max(0, this.rosaryCd - dt)
    this.messageT = Math.max(0, this.messageT - dt)
    this.toastT = Math.max(0, this.toastT - dt)
    this.foundT = Math.max(0, this.foundT - dt)
    this.subtitleT = Math.max(0, this.subtitleT - dt)
    this.damage = Math.max(0, this.damage - dt * 0.8)
    this.noises.length = 0

    this.stepPower(dt)
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
    if (this.closet.phase === 'inside') {
      const turn = Math.atan2(Math.sin(this.sim.yaw - this.closetYaw), Math.cos(this.sim.yaw - this.closetYaw))
      this.sim.yaw = this.closetYaw + Math.max(-0.42, Math.min(0.42, turn))
      this.sim.pitch = Math.max(-0.3, Math.min(0.24, this.sim.pitch))
    }
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

    const allowChase = this.computeChase() && this.closet.phase !== 'inside'
    if (!this.huntUnlocked()) this.holdGuardianBack()
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
      waypoints: this.earlyPatrol(patrolPoints(this.world, (f) => this.floorAllowed(f), this.snap.flags.secretOpen)),
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
      noises: this.huntUnlocked() ? this.noises : [],
      searchSpots: this.world.hides.map((hide) => {
        const room = this.world.rooms.find((item) => item.id === hide.room)
        return { id: hide.id, pos: { x: hide.x, y: room ? FLOOR_Y[room.floor] : this.sim.y, z: hide.z } }
      }),
    })
    if (tick.entered === 'Chase' && this.huntUnlocked()) this.audio.play('growl', this.monster.pos, { volume: 0.8 })
    if (tick.attack && this.huntUnlocked()) this.hurt(36, true)
    if (tick.foundHiding && this.huntUnlocked()) {
      this.hiding = null
      this.hurt(28, true)
      this.say('Den fandt dig.')
    }
    // No footsteps are emitted by the monster: only the player's actual
    // movement generates walking sounds. Monster threats use growls and cues.

    this.monster.group.visible = this.huntUnlocked() || passerAlong(this.closet.locked) !== null
    this.stepCloset(dt)
    if (this.huntUnlocked()) {
      this.herdMonster()
      this.relocateMonster(dt, cols)
    }
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
      blocked: this.monster.bb.state === 'Attack' || this.lungeT > 0 || this.scares.fx.face > 0
        || ((this.snap.events?.slagter ?? 0) > 0 && (this.snap.events?.slagter ?? 0) < 4)
        || (!this.huntUnlocked() && (room?.id === 'patientgang' || room?.id === 'operationsstue')),
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
      this.caption(this.scares.fx.subtitle, 1.5)
    }
    const chasing = this.monster.bb.state === 'Chase' || this.monster.bb.state === 'Attack'
    this.audio.setTension(this.director.tension, chasing)
    const stress = (100 - this.snap.player.health) / 140 + (dist < 8 ? 0.35 : 0) + (this.sim.stamina < 30 ? 0.2 : 0)
    this.audio.setHeartbeat(this.hiding || this.snap.player.health < 55 || dist < 7 ? stress : 0)
    const tired = this.sim.stamina < 22 ? (22 - this.sim.stamina) / 28 : 0
    this.audio.setBreath(this.holdBreath ? 0.05 : Math.max(tired, dist < 6 ? 0.25 : 0.05))
    const nearLight = this.nearestLight()
    this.audio.setHum(!!nearLight && this.lightLevel(nearLight.def) > 0.2, nearLight ? { x: nearLight.def.x, y: nearLight.def.y, z: nearLight.def.z } : this.feet())
    this.audio.setRadio(this.snap.flags.radioOn, RADIO_SOURCE)
    this.audio.setZone(this.zoneFor(room?.id))
    this.stepRoomTone(room, dt)
    this.creepIn -= dt
    const quietStart = !this.huntUnlocked() && (room?.id === 'patientgang' || room?.id === 'operationsstue')
    if (quietStart) this.creepIn = 12
    else if (this.creepIn <= 0 && this.mode === 'playing') {
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
      this.caption(kind === 'breath' ? '…åndedræt, lige bag dig.' : '…Agnes…', 1.8)
      if (kind === 'breath') this.audio.setHeartbeat(0.55)
    } else if (kind === 'knock') {
      this.queueKnocks()
    } else if (kind === 'phone') {
      this.audio.play('sting', { x: 16, y: 5, z: 22 }, { volume: 0.8 })
      this.caption('En telefon ringer et sted i fløjen.', 2.2)
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
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)?.id ?? ''
    const cause = leaveCause(this.snap, room, false)
    if (cause) this.finish(cause)
  }

  private interact(): void {
    if (this.hiding) {
      const spot = this.world.hides.find((item) => item.id === this.hiding)
      if (spot?.kind === 'locker') {
        if (!canLeaveCloset(this.closet)) {
          this.say('Du tør ikke åbne endnu...')
          return
        }
        this.exitCloset()
        return
      }
      this.hiding = null
      this.bus.emit({ type: 'playerRevealed' })
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
      this.say(this.snap.flags.radioOn ? 'Radioen knitrer.' : 'Radioen er slukket.')
    } else if (hit.kind === 'container') this.useContainer(hit.id)
  }

  private useDoor(id: string): void {
    const door = this.world.doors.find((d) => d.id === id)
    if (!door) return
    if (doorBlocksNav(door, this.unlocked)) {
      if (door.id === EXIT_DOOR) {
        const blocked = gateBlock(this.snap)
        if (blocked) {
          this.say(blocked)
          this.audio.play('locked', this.doorPos(door), { volume: 0.7 })
          return
        }
        this.unlocked.add(door.id)
        this.desired.set(door.id, 1)
        this.bus.emit({ type: 'doorOpened', id: door.id })
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
        this.bus.emit({ type: 'doorOpened', id: door.id })
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
    const opening = amt <= 0.4
    this.desired.set(door.id, opening ? 1 : 0)
    if (opening) this.bus.emit({ type: 'doorOpened', id: door.id })
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
    this.showFound(found.itemId, res.slots.find((slot) => slot.itemId === found.itemId)?.count ?? 1)
    const def = itemDef(found.itemId)
    if (def.kind === 'note' || def.kind === 'story' || def.kind === 'map' || def.kind === 'collectible') this.openExamine(found.itemId)
    if (found.itemId === 'battery') {
      this.sim.battery = boostBattery(this.sim.battery, 50)
      this.say('Batteri. +50%.')
    }
    if (found.itemId.startsWith('key_')) this.say(`${def.name}. Nøgler ${keysFound(this.snap)}/3.`)
    if (found.itemId === 'rosary') this.snap.rosaryCharges = 2
    this.bus.emit({ type: 'itemFound', id: found.itemId })
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
    this.bus.emit({ type: 'powerOn' })
    const gen = this.world.devices.find((d) => d.kind === 'generator')
    const genRoom = gen ? this.world.rooms.find((r) => r.id === gen.room) : undefined
    this.audio.play('generator', {
      x: gen?.x ?? 8.8,
      y: genRoom ? FLOOR_Y[genRoom.floor] + 1 : 9,
      z: gen?.z ?? 8.35,
    }, { volume: 0.9 })
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
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)?.id ?? ''
    if (this.snap.flags.secretOpen) {
      const cause = leaveCause(this.snap, room, true)
      if (cause) this.finish(cause)
      return
    }
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
    this.bus.emit({ type: 'playerHidden', id })
    this.sim.x = spot.x
    this.sim.z = spot.z
    this.sim.vx = 0
    this.sim.vz = 0
    if (spot.kind === 'bed') {
      this.audio.play('door', this.feet(), { volume: 0.3 })
      this.say('Under sengen. Hold Shift for at holde vejret.')
      return
    }
    const room = this.world.rooms.find((item) => item.id === spot.room)
    const mid = room ? room.z + room.d * 0.5 : spot.z + 1
    this.closetYaw = spot.z < mid ? 0 : Math.PI
    this.sim.yaw = this.closetYaw
    this.sim.pitch = 0
    this.sim.flashlightOn = false
    this.closet = enterCloset(id)
    this.whisperSlot = -1
    this.snap.closet = this.closet
    this.placeClosetBox(spot.x, spot.z)
    this.viewmodel.visible = false
    this.audio.play('door', this.feet(), { volume: 0.45 })
    this.audio.hush(1.5)
    this.say('Lågen lukker.')
  }

  private exitCloset(): void {
    const spot = this.world.hides.find((item) => item.id === this.closet.hideId)
    const room = spot ? this.world.rooms.find((item) => item.id === spot.room) : undefined
    const dir = this.closetYaw === 0 ? 1 : -1
    if (spot && room) {
      const y = FLOOR_Y[room.floor]
      let x = spot.x
      let z = spot.z + dir * 0.95
      if (sampleFloorY(this.world, x, z, y) === null) {
        x = spot.x + 0.4
        z = spot.z + dir * 0.7
      }
      this.sim.x = x
      this.sim.y = y
      this.sim.z = z
    }
    this.sim.vx = 0
    this.sim.vz = 0
    this.hiding = null
    this.closet = leaveCloset(this.closet)
    this.whisperSlot = -1
    this.snap.closet = this.closet
    if (this.closetBox) this.closetBox.visible = false
    this.viewmodel.visible = true
    this.parkAfterCloset(spot?.room)
    this.bus.emit({ type: 'playerRevealed' })
    this.audio.play('door', this.feet(), { volume: 0.4 })
    this.say('Du træder ud.')
  }

  private stepCloset(dt: number): void {
    if (this.closet.phase === 'idle') return
    const stepped = stepCloset(this.closet, this.mode === 'playing' ? dt : 0)
    this.closet = stepped.state
    this.snap.closet = this.closet
    for (const cue of stepped.cues) {
      if (cue === 'scream') {
        const at = this.closetMouth()
        this.audio.play('scream', at, { volume: 0.62 })
        if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.2)
      } else if (cue === 'free') {
        this.say('Du kan åbne lågen.')
      }
    }
    this.driveClosetPasser()
    if (this.closet.phase === 'inside') {
      this.sim.flashlightOn = false
      this.viewmodel.visible = false
    }
    if (this.closet.phase === 'whispers') {
      const slot = Math.floor((10 - this.closet.whisper) / 1.8)
      if (slot !== this.whisperSlot) {
        this.whisperSlot = slot
        const right = rightFromYaw(this.sim.yaw)
        const side = slot % 2 === 0 ? 1.3 : -1.3
        this.audio.play('whisper', {
          x: this.sim.x + right.x * side,
          y: this.sim.y + 1.5,
          z: this.sim.z + right.z * side,
        }, { volume: 0.26 })
      }
    }
  }

  private driveClosetPasser(): void {
    const along = this.closet.phase === 'inside' ? passerAlong(this.closet.locked) : null
    if (along === null) {
      if (this.closet.phase === 'inside' && this.closet.locked >= 16) {
        const spot = this.world.hides.find((item) => item.id === this.closet.hideId)
        this.parkAfterCloset(spot?.room)
      }
      return
    }
    const spot = this.world.hides.find((item) => item.id === this.closet.hideId)
    const room = spot ? this.world.rooms.find((item) => item.id === spot.room) : undefined
    if (!spot || !room) return
    const facing = this.closetYaw === 0 ? 1 : -1
    const x = spot.x - 1.7 + along * 3.4
    const z = spot.z + facing * 1.2
    const y = FLOOR_Y[room.floor]
    this.monster.pos = { x, y, z }
    this.monster.group.position.set(x, y, z)
    this.monster.group.visible = true
    this.monster.face(Math.PI / 2)
    this.monster.bb.state = 'Patrol'
    if (Math.floor(this.closet.locked * 2) !== Math.floor((this.closet.locked - 0.05) * 2)) {
      this.audio.play('creak', { x, y: y + 0.2, z }, { volume: 0.22 })
    }
  }

  private parkAfterCloset(roomId?: string): void {
    const room = this.world.rooms.find((item) => item.id === roomId)
    const y = room ? FLOOR_Y[room.floor] : 0
    const x = room ? room.x + room.w - 1.4 : 46.2
    const z = room ? room.z + 1.4 : 10.2
    this.monster.pos = { x, y, z }
    this.monster.group.position.set(x, y, z)
    this.monster.bb.state = 'Patrol'
  }

  private closetMouth(): { x: number; y: number; z: number } {
    const spot = this.world.hides.find((item) => item.id === this.closet.hideId)
    const room = spot ? this.world.rooms.find((item) => item.id === spot.room) : undefined
    const facing = this.closetYaw === 0 ? 1 : -1
    return {
      x: spot?.x ?? this.sim.x,
      y: (room ? FLOOR_Y[room.floor] : this.sim.y) + 1.4,
      z: (spot?.z ?? this.sim.z) + facing * 1.6,
    }
  }

  private placeClosetBox(x: number, z: number): void {
    if (!this.closetBox) return
    const room = roomAt(this.world, x, z, this.sim.y)
    this.closetBox.position.set(x, room ? FLOOR_Y[room.floor] : this.sim.y, z)
    this.closetBox.rotation.y = this.closetYaw
    this.closetBox.visible = true
  }

  private buildClosetBox(): THREE.Group {
    const g = new THREE.Group()
    const wood = new THREE.MeshStandardMaterial({ color: '#6a5340', roughness: 0.84, side: THREE.BackSide })
    const panel = (w: number, h: number, d: number, x: number, y: number, z: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wood)
      mesh.position.set(x, y, z)
      g.add(mesh)
    }
    panel(0.05, 1.9, 0.72, -0.32, 0.95, -0.02)
    panel(0.05, 1.9, 0.72, 0.32, 0.95, -0.02)
    panel(0.68, 0.05, 0.72, 0, 1.88, -0.02)
    panel(0.68, 0.05, 0.72, 0, 0.04, -0.02)
    panel(0.68, 1.9, 0.05, 0, 0.95, -0.36)
    panel(0.68, 0.42, 0.04, 0, 1.64, 0.26)
    panel(0.68, 0.42, 0.04, 0, 0.26, 0.26)
    const lamp = new THREE.PointLight('#c2a078', 0.45, 1.8, 2)
    lamp.position.set(0, 1.45, -0.12)
    g.add(lamp)
    g.visible = false
    this.scene.add(g)
    return g
  }

  private showFound(itemId: string, count: number): void {
    const def = itemDef(itemId)
    const important = def.kind === 'key' || def.kind === 'fuse' || def.kind === 'note' || def.kind === 'story' || def.kind === 'map'
    this.ui.found(def.name, def.description, count, important)
    this.foundT = important ? 3.2 : 2.3
  }

  private toggleFlash(): void {
    if (this.closet.phase === 'inside') {
      this.sim.flashlightOn = false
      this.say('Lygten bliver i lommen.')
      return
    }
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
    const bed = this.hiding && this.world.hides.find((h) => h.id === this.hiding)?.kind === 'bed'
    const targetEye = bed ? 0.32 : this.closet.phase === 'inside' ? 1.02 : eyeHeight(this.sim.crouching || !!this.hiding)
    this.cameraEye = dt >= 1 ? targetEye : smoothEyeHeight(this.cameraEye, targetEye, dt)
    const eye = this.cameraEye
    const speed = Math.hypot(this.sim.vx, this.sim.vz)
    if (speed > 0.4 && this.sim.grounded && !this.hiding) this.bob += speed * 0.016
    const amp = this.hiding ? 0 : this.sim.crouching ? 0.01 : wish.sprint ? 0.04 : 0.025
    const r = rightFromYaw(this.sim.yaw)
    const tired = this.sim.stamina < 18 && this.settings.cameraShake ? (18 - this.sim.stamina) / 18 : 0
    const fatigue = Math.sin(performance.now() / 1000 * 1.7) * tired * 0.012
    const shake = this.settings.cameraShake ? this.trauma * this.trauma : 0
    this.camera.position.set(
      this.sim.x + r.x * Math.cos(this.bob) * amp + (Math.random() - 0.5) * shake * 0.12,
      this.sim.y + eye + Math.sin(this.bob * 2) * amp + fatigue + (Math.random() - 0.5) * shake * 0.08,
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
    const flicker = on && band === 'critical' ? 0.7 + 0.12 * Math.sin(t * 1.3) : 1
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
    u.uFlash.value = 0 // V3: no sudden white screen flashes
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
    const dt = this.lampClock < 0 ? 0 : Math.min(0.05, Math.max(0, t - this.lampClock))
    this.lampClock = t
    for (const entry of this.built.lights) {
      let level = this.lightLevel(entry.def)
      const cut = this.lightCut.get(entry.def.id) ?? 0
      if (playing && cut > this.snap.playTime) level *= 0.55
      if (level > 0 && FLICKER_ROOMS.has(entry.def.room)) {
        const seed = entry.def.x * 0.59 + entry.def.z * 0.31
        level *= fixtureFlicker(t, seed, this.settings.reduceFlicker)
      }
      if (this.snap.flags.radioOn && entry.def.room === 'personalerum') level *= 1.12
      const shown = this.lampShown.get(entry.def.id)
      const black = this.snap.flags.powerCut && !this.snap.flags.generatorOn
      if (black) level = 0
      else if (shown !== undefined && dt > 0) level = shown + (level - shown) * (1 - Math.exp(-dt * 1.4))
      this.lampShown.set(entry.def.id, level)
      if (entry.lens) entry.lens.emissiveIntensity = Math.max(0.012, level * 1.1)
      if (entry.light instanceof THREE.SpotLight || entry.light instanceof THREE.PointLight) {
        entry.light.intensity = entry.base * level
      }
    }
    const max = visibleLightCount(this.settings.quality)
    const ranked = [...this.built.lights].sort(
      (a, b) => Math.hypot(a.def.x - this.camera.position.x, a.def.z - this.camera.position.z) - Math.hypot(b.def.x - this.camera.position.x, b.def.z - this.camera.position.z),
    )
    ranked.forEach((entry, i) => {
      const shown = i < max
      entry.light.visible = shown
      if (!shown) entry.light.intensity = 0
    })
    const black = this.snap.flags.powerCut && !this.snap.flags.generatorOn
    this.ambient.intensity = black ? 0.004 : 0.028
    this.hemi.intensity = black ? 0.008 : 0.075
    this.moon.intensity = black ? 0.004 : 0.018
    const near = ranked.find((entry) => entry.light.visible)
    if (near && playing) {
      const dipped = near.light.intensity < near.base * 0.4
      this.audio.setHum(!dipped && this.lightLevel(near.def) > 0.2, { x: near.def.x, y: near.def.y, z: near.def.z })
    }
  }

  private lightLevel(def: { mode: string }): number {
    if (this.snap.flags.powerCut && !this.snap.flags.generatorOn) return 0
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
      if (doorStartedMoving(cur, next)) this.audio.play('creak', this.doorPos(door), { volume: 0.35 })
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
    const shelf = this.world.props.find((prop) => prop.id === 'slag_shelf')
    if (shelf) {
      const shelfRoom = this.world.rooms.find((item) => item.id === shelf.room)
      if (shelfRoom) {
        list.push({
          id: shelf.id,
          kind: 'bookshelf',
          x: shelf.x,
          y: FLOOR_Y[shelfRoom.floor] + 1,
          z: shelf.z,
          radius: 1.1,
          prompt: this.snap.flags.secretOpen ? 'Kravl ind i tunnellen' : 'Hylde',
        })
      }
    }
    for (const d of this.world.devices) {
      const room = this.world.rooms.find((r) => r.id === d.room)!
      const prompts: Record<string, string> = {
        generator: 'Generator',
        safe: 'Pengeskab',
        bookshelf: this.snap.flags.secretOpen ? 'Kravl ind i tunnellen' : 'Hylde',
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
    list.push(...this.containers.candidates())
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
      prompt: this.messageT > 0 ? this.message : this.closet.phase === 'inside'
        ? (canLeaveCloset(this.closet) ? 'Åbn lågen' : 'Du tør ikke åbne endnu...')
        : this.hiding ? 'Forlad gemmested' : hit ? hit.prompt : '',
      stamina: this.sim.stamina,
      battery: this.sim.battery,
      batteryText: `${Math.round(this.sim.battery)}%${batteryBand(this.sim.battery) === 'critical' && this.sim.flashlightOn ? ' · lavt' : ''}`,
      low: this.sim.health < 40 || batteryBand(this.sim.battery) !== 'ok',
      lockHint: this.mode === 'playing' && !this.input.pointerLocked,
    })
    this.ui.hurt(this.damage * 0.85 + (this.sim.health < 35 ? 0.25 : 0))
    this.paintMap()
    this.ui.toast(this.toastT > 0 ? this.toast : '')
    if (this.foundT <= 0) this.ui.found('', '', 1, false)
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
    if (id !== this.lastObjective && this.lastObjective) {
      this.bus.emit({ type: 'objectiveCompleted', id: this.lastObjective })
      this.persist(0)
    }
  }

  private floorAllowed(_f: number): boolean {
    return true
  }

  private huntUnlocked(): boolean {
    return (this.snap.events?.slagter ?? 0) >= 4
  }

  /** Before the butcher sequence, Vogteren stays in that room and does not hunt. */
  private earlyPatrol(points: { x: number; y: number; z: number }[]): { x: number; y: number; z: number }[] {
    if (this.huntUnlocked()) return points
    const kept = points.filter((point) => point.x >= 36 && point.x <= 48 && point.y < 2)
    return kept.length ? kept : points
  }

  private holdGuardianBack(): void {
    if (this.huntUnlocked() || passerAlong(this.closet.locked) !== null) return
    const nearPlayer = Math.hypot(this.monster.pos.x - this.sim.x, this.monster.pos.z - this.sim.z) < 4
    const outside = this.monster.pos.x < 36 || this.monster.pos.y > 2 || nearPlayer
    if (outside) {
      this.monster.pos = { x: 46.2, y: 0, z: 10.2 }
      this.monster.group.position.set(46.2, 0, 10.2)
    }
    if (this.monster.bb.state === 'Chase' || this.monster.bb.state === 'Attack' || this.monster.bb.state === 'Investigate') {
      this.monster.bb.state = 'Patrol'
    }
  }

  private computeChase(): boolean {
    if (!this.huntUnlocked()) return false
    const dist = this.monsterDist()
    let allow = this.snap.playTime > 46 || hasItem(this.snap.inventory, 'note_code') || dist < 4.2
    if (this.director.suppress > 0 && dist > 2.6) allow = false
    return allow
  }

  private noise(kind: NoiseKind, at?: { x: number; y: number; z: number }): void {
    const pos = at ?? this.feet()
    const my = pos.y < 2 ? -1 : pos.y < 6 ? 0 : 1
    const ey = this.monster.pos.y < 2 ? -1 : this.monster.pos.y < 6 ? 0 : 1
    const occluded = !lineOfSight(pos, { x: this.monster.pos.x, y: this.monster.pos.y + 1.5, z: this.monster.pos.z }, activeColliders(this.world, this.unlocked, this.open))
    this.noises.push({ kind, pos, floorDelta: Math.abs(my - ey), occluded })
    this.bus.emit({ type: 'noiseEmitted', kind, x: pos.x, y: pos.y, z: pos.z })
  }

  private useContainer(id: string): void {
    const result = this.containers.use(
      id,
      this.eyePos(),
      (itemId) => hasItem(this.snap.inventory, itemId),
      (itemId) => addItem(this.snap.inventory, itemId, 1).added > 0,
      activeColliders(this.world, this.unlocked, this.open),
    )
    const at = { x: result.x, y: result.y, z: result.z }
    if (result.effect === 'opening' || result.effect === 'closing') {
      this.audio.play(result.kind === 'cabinet' ? 'door' : 'creak', at, { volume: 0.62 })
      this.noise('door', at)
      this.say(result.effect === 'opening'
        ? (result.kind === 'cabinet' ? 'Lågen giver sig.' : 'Skuffen glider ud.')
        : (result.kind === 'cabinet' ? 'Lågen går i.' : 'Skuffen går i.'))
    } else if (result.effect === 'locked') {
      this.audio.play('locked', at, { volume: 0.7 })
      this.noise('door', at)
      this.say('Låst. Du mangler den rigtige nøgle.')
    } else if (result.effect === 'busy') {
      this.say('Den bevæger sig stadig.')
    } else if (result.effect === 'occluded') {
      this.say('Du kan ikke nå den.')
    } else if (result.effect === 'no_space') {
      this.say('Du kan ikke bære flere.')
    } else if (result.effect === 'taken' && result.itemId) {
      this.grantContainerItem(result.itemId)
    } else if (result.effect === 'already_taken') {
      this.say('Der er ikke mere.')
    }
  }

  private grantContainerItem(itemId: string): void {
    const res = addItem(this.snap.inventory, itemId, 1)
    if (!res.added) {
      this.say('Du kan ikke bære flere.')
      return
    }
    this.snap.inventory = res.slots
    const paper = itemId.startsWith('note') || itemId.startsWith('file')
    this.audio.play(paper ? 'paper' : itemId.startsWith('key') ? 'key' : 'pickup')
    const def = itemDef(itemId)
    this.showFound(itemId, res.slots.find((slot) => slot.itemId === itemId)?.count ?? 1)
    if (def.kind === 'note' || def.kind === 'story' || def.kind === 'map' || def.kind === 'collectible') this.openExamine(itemId)
    if (itemId === 'battery') this.sim.battery = boostBattery(this.sim.battery, 50)
    this.bus.emit({ type: 'itemFound', id: itemId })
    this.refreshObjective()
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

  private beginIntro(): void {
    if (!this.wantsIntro) {
      this.introTime = -1
      this.ui.hideIntro()
      return
    }
    this.introTime = 0
    this.introBeat = -1
    this.snap.flags.introDone = false
    this.ui.setIntro('', '')
    this.ui.cinematic(true)
    this.viewmodel.visible = false
    this.audio.play('sting', undefined, { volume: 0.22 })
  }

  private stepIntro(dt: number): void {
    this.introTime += dt
    const frame = introFrame(this.introTime)
    if (frame.done) {
      this.finishIntro()
      return
    }
    if (frame.beat && frame.beat.at !== this.introBeat) {
      this.introBeat = frame.beat.at
      this.ui.setIntro(frame.beat.title, frame.beat.body)
      if (frame.beat.title === 'NYT MÅL') this.audio.play('paper', undefined, { volume: 0.3 })
    }
    this.viewmodel.visible = false
    this.lunge.visible = false
    this.cone.visible = false
    this.placeCamera({ sprint: false }, dt)
  }

  private finishIntro(): void {
    if (this.introTime < 0) return
    this.introTime = -1
    this.introBeat = -1
    this.snap.flags.introDone = true
    this.viewmodel.visible = true
    this.ui.hideIntro()
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
    this.closet = emptyCloset()
    if (this.closetBox) this.closetBox.visible = false
    this.runtime.forEach((p) => p.mesh.visible = false)
    this.runtime = []
    this.containers.reset()
    for (const [id, mesh] of this.built.pickups) mesh.visible = !this.snap.pickedUp.includes(id)
    this.monster.spawn(this.snap.monster, this.snap.monster.yaw, 'Patrol')
    this.director = createDirector()
    this.schedule = createSchedule()
    this.tone = createTone()
    this.radioAt = -99
    this.beginIntro()
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
    this.closet = snap.closet?.phase === 'inside' || snap.closet?.phase === 'whispers' ? { ...emptyCloset(), ...snap.closet } : emptyCloset()
    if (this.closet.phase === 'inside') {
      this.hiding = this.closet.hideId
      const spot = this.world.hides.find((item) => item.id === this.closet.hideId)
      const room = spot ? this.world.rooms.find((item) => item.id === spot.room) : undefined
      this.closetYaw = spot && room && spot.z >= room.z + room.d * 0.5 ? Math.PI : 0
      if (spot) this.placeClosetBox(spot.x, spot.z)
    } else if (this.closetBox) this.closetBox.visible = false
    this.containers.load(snap.containers)
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
    this.schedule = advanceEpoch(this.schedule)
    this.tone = createTone()
    this.radioAt = -99
    this.introTime = -1
    this.introBeat = -1
    this.ui.hideIntro()
    this.scares.dismiss()
    this.audio.beginScene()
    this.setMode('playing')
    this.audio.ensure()
    this.bus.emit({ type: 'saveLoaded', slot: -1 })
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
    this.snap.containers = this.containers.save()
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
    } else if (previous !== 'playing' && !this.testMode && this.introTime < 0) {
      this.input.lock()
    }
    const screen = mode === 'paused' ? 'pause' : mode
    this.ui.show(screen === 'playing' ? 'playing' : screen)
    if (this.introTime >= 0) {
      this.viewmodel.visible = false
      this.ui.cinematic(true)
    }
    this.audio.duck(mode !== 'playing' && mode !== 'menu')
    if (mode === 'inventory') this.refreshInv()
  }

  private applyModalKeys(): void {
    const focused = this.input.formFocused()
    if (this.mode !== 'playing' || focused || this.introTime >= 0) this.input.discard(GAMEPLAY_EDGES)
    if (this.introTime >= 0 && !focused) {
      const skip = this.input.takeFirst(['Escape', 'Enter', 'Space'])
      if (skip) this.finishIntro()
      return
    }
    if (this.mode === 'inventory' && !focused) {
      const choice = inventoryKey(this.input.takeFirst(['ArrowUp', 'ArrowDown', 'KeyW', 'KeyS', 'Enter', 'KeyE']))
      if (choice === 'up') this.invIndex = Math.max(0, this.invIndex - 1)
      if (choice === 'down') this.invIndex = Math.min(Math.max(0, this.snap.inventory.length - 1), this.invIndex + 1)
      if (choice === 'up' || choice === 'down') this.refreshInv()
      if (choice === 'use') this.useSelected()
    }
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

  private stepRoomTone(room: ReturnType<typeof roomAt>, dt: number): void {
    const box = room
      ? { id: room.id, x: room.x, z: room.z, w: room.w, d: room.d, floorY: FLOOR_Y[room.floor] }
      : null
    const stepped = advanceRoomTone(this.tone, { time: this.snap.playTime, dt, room: box })
    this.tone = stepped.state
    if (stepped.cue) {
      const cue = stepped.cue
      this.audio.play(cue.kind, { x: cue.x, y: cue.y, z: cue.z }, { volume: 0.22, occluded: false })
    }
    if (radioPulse(this.snap.flags.radioOn, this.snap.playTime, this.radioAt)) {
      this.radioAt = this.snap.playTime
      this.audio.play('whisper', RADIO_SOURCE, { volume: 0.2, occluded: true })
    }
    // Player-supplied recordings are rare environmental one-shots, not loops.
    // No new gameplay/noise events are generated for monster AI.
    if (room && this.snap.playTime >= this.extraCueAt) {
      const babyRoom = ['patientgang', 'observation', 'kammer'].includes(room.id)
      const pigRoom = ['slagterum', 'obduktion', 'kaeldergang'].includes(room.id)
      if (babyRoom || pigRoom) {
        const kind = babyRoom ? 'babyLaugh' : 'pigRhythm'
        const position = {
          x: room.x + Math.min(room.w - 1, 3.0),
          y: FLOOR_Y[room.floor] + 1.25,
          z: room.z + room.d - 1.1,
        }
        this.audio.playUserScare(kind, position)
        this.extraCueAt = this.snap.playTime + 65 + (room.id.length % 5) * 11
      }
    }
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
    const toFig = new THREE.Vector3(fig.x - this.camera.position.x, fig.y + 1.5 - this.camera.position.y, fig.z - this.camera.position.z)
    const figDist = Math.max(0.001, toFig.length())
    const lookingAtFigure = (this.camDir.x * toFig.x + this.camDir.y * toFig.y + this.camDir.z * toFig.z) / figDist > 0.62
    const lamp = this.sim.flashlightOn && this.sim.battery > 0
    const onFigure = lamp && flashlightBanishes(
      true,
      this.eyePos(),
      { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z },
      { x: fig.x, y: fig.y + 1.5, z: fig.z },
      activeColliders(this.world, this.unlocked, this.open),
    )
    this.beamHold = onFigure ? this.beamHold + dt : 0
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
      powerCut: this.snap.flags.powerCut,
      lookingAtFigure: this.snap.events.slagter === 2 && lookingAtFigure,
      beam: this.snap.events.slagter === 3 && this.beamHold > 0.28,
    })
    if (this.huntUnlocked()) this.maybePeek(hit)
    this.snap.events = stepped.state
    this.prevRoom = room
    this.prevFlash = this.sim.flashlightOn
    for (const cue of stepped.cues) this.fireCue(cue, hit?.id)
    this.stepPasser(dt)
    this.stepButcherCharge(dt)
    if (stepped.cues.some((cue) => cue.startsWith('jump') || cue === 'figure')) {
      this.schedule = markRecovery(this.schedule, this.snap.playTime, 20)
      this.director = { ...this.director, suppress: Math.max(this.director.suppress, 6) }
    }
    this.runSchedule(room, dt)
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

  private runSchedule(room: string, dt: number): void {
    if (!this.snap.events.beats) this.snap.events.beats = []
    for (const beat of offerSequences({
      time: this.snap.playTime,
      room,
      readIds: this.snap.readIds,
      fired: this.snap.events.beats,
    })) {
      this.schedule = planBeat(this.schedule, beat)
    }
    const stepped = stepSchedule(this.schedule, {
      dt,
      time: this.snap.playTime,
      room,
      blocked: this.monster.bb.state === 'Attack' || this.lungeT > 0 || this.scares.fx.face > 0,
      firedIds: this.snap.events.beats,
    })
    this.schedule = stepped.state
    for (const beat of stepped.fired) this.playBeat(beat.id)
  }

  private playBeat(id: string): void {
    if (!this.snap.events.beats.includes(id)) this.snap.events.beats.push(id)
    this.director = { ...this.director, suppress: Math.max(this.director.suppress, 8), sinceScare: 0 }
    if (id === 'reception_wake') {
      this.lightCut.set('reception_0', this.snap.playTime + 0.45)
      this.lightCut.set('reception_1', this.snap.playTime + 1.15)
      this.lightCut.set('reception_2', this.snap.playTime + 1.9)
      this.audio.play('door', { x: 14, y: 0, z: 6 }, { volume: 0.45, occluded: true })
      this.caption('Majas brev peger mod arkivet.', 2.4)
      return
    }
    if (id === 'arkiv_names') {
      this.shadowFrom.set(6, this.sim.y, 3.4)
      this.shadowTo.copy(this.shadowFrom)
      this.shadowT = 1.1
      this.audio.play('paper', { x: 6, y: this.sim.y + 1, z: 3.4 }, { volume: 0.7 })
      this.caption('Navnene stemmer ikke med journalen.', 2.4)
      return
    }
    if (id === 'obduktion_witness') {
      const y = this.sim.y
      this.audio.play('metallic', { x: this.sim.x, y: y + 0.8, z: this.sim.z }, { volume: 0.65 })
      for (const lit of this.built.lights) {
        if (lit.def.room === 'operationsstue' || lit.def.room === 'obduktion') {
          this.lightCut.set(lit.def.id, this.snap.playTime + 2.4)
        }
      }
      this.shadowFrom.set(this.sim.x + this.camDir.x * 2.8, y, this.sim.z + this.camDir.z * 2.8)
      this.shadowTo.copy(this.shadowFrom)
      this.shadowT = 1.1
      this.caption('Noget står i døråbningen.', 2.2)
    }
  }

  private fireCue(cue: string, doorId?: string): void {
    if (cue === 'pass:patient') {
      this.beginPass('door_pat_op', 1.15, 1)
      this.audio.play('whisper', this.passFrom, { volume: 0.45 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.16)
      return
    }
    if (cue === 'pass:operation') {
      this.beginPass('door_op_slag', 0.72, 0.86)
      this.audio.play('creak', this.passFrom, { volume: 0.55 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.2)
      return
    }
    if (cue === 'archive') {
      this.passFrom.set(3.1, 4, 9.6)
      this.passTo.set(8.8, 4, 9.6)
      this.passT = 1.35
      this.peek.scale.set(1, 1.05, 1)
      this.peek.position.copy(this.passFrom)
      this.peek.visible = true
      this.audio.play('paper', { x: 6, y: 5, z: 8.4 }, { volume: 0.8 })
      this.audio.play('whisper', { x: 6, y: 5.4, z: 8.4 }, { volume: 0.5 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.28)
      this.say('Noget bevægede sig mellem reolerne.')
      return
    }
    if (cue === 'blackout') {
      this.butcher.position.set(42, 0, 2.4)
      this.butcher.visible = false
      this.butcherHit = false
      this.beamHold = 0
      this.audio.play('metallic', { x: 42, y: 1, z: 6 }, { volume: 0.55 })
      return
    }
    if (cue === 'await-turn') {
      this.audio.play('deep', { x: 42, y: 1.2, z: 2.4 }, { volume: 0.45 })
      return
    }
    if (cue === 'charge') {
      this.butcher.visible = true
      this.butcher.position.set(42, 0, 2.4)
      this.audio.play('scream', { x: 42, y: 1.6, z: 3 }, { volume: 0.72 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.34)
      return
    }
    if (cue === 'banish') {
      this.butcher.visible = false
      this.audio.play('whisper', { x: this.butcher.position.x, y: 1.4, z: this.butcher.position.z }, { volume: 0.4 })
      this.say('Lyset jog den væk.')
      return
    }
    if (cue === 'strike') {
      if (!this.butcherHit) {
        this.butcherHit = true
        this.hurt(18, false)
      }
      this.butcher.visible = false
      this.say('Den ramte dig og var væk.')
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
    const cssW = canvas.clientWidth || canvas.width
    const cssH = canvas.clientHeight || canvas.height
    const store = backingStore(cssW, cssH, window.devicePixelRatio || 1)
    if (canvas.width !== store.width || canvas.height !== store.height) {
      canvas.width = store.width
      canvas.height = store.height
    }
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    const floor = room?.floor ?? 0
    const missionRoom = objectiveRoom(currentObjective(this.snap).id)
    const goals: MiniGoal[] = []
    const target = this.world.rooms.find((item) => item.id === missionRoom)
    if (target && this.snap.visited.includes(target.id)) {
      goals.push({
        id: currentObjective(this.snap).id,
        roomId: target.id,
        x: target.x + target.w * 0.5,
        z: target.z + target.d * 0.5,
        floor: target.floor,
      })
    }
    const monsterFloor = Math.round(this.monster.pos.y / 4)
    const nearMonster = Math.hypot(this.monster.pos.x - this.sim.x, this.monster.pos.z - this.sim.z) < 16
    const showMonster = nearMonster && monsterFloor === floor && !this.monster.concealed && this.snap.playTime < this.monsterShown
    paintMinimap(ctx, canvas.width, canvas.height, {
      rooms: roomsOf(this.world.rooms),
      floor,
      px: this.sim.x,
      pz: this.sim.z,
      yaw: this.sim.yaw,
      visited: new Set(this.snap.visited),
      monster: { x: this.monster.pos.x, z: this.monster.pos.z, floor: monsterFloor, show: showMonster },
      batteries: this.world.pickups
        .filter((p) => p.itemId === 'battery' && this.snap.visited.includes(p.room) && !this.snap.pickedUp.includes(p.id))
        .map((p) => ({ x: p.x, z: p.z, floor: this.world.rooms.find((r) => r.id === p.room)?.floor ?? 0 })),
      doors: this.world.doors.map((door) => ({
        id: door.id,
        floor: door.floor,
        axis: door.axis,
        coord: door.coord,
        center: door.center,
        a: door.a,
        b: door.b,
        locked: door.locked,
      })),
      goals,
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

  private beginPass(doorId: string, seconds: number, scale: number): void {
    const door = this.world.doors.find((item) => item.id === doorId)
    if (!door) return
    const y = FLOOR_Y[door.floor]
    this.desired.set(door.id, 1)
    this.open.set(door.id, 1)
    const toward = door.axis === 'x' ? Math.sign(this.sim.x - door.coord) || -1 : Math.sign(this.sim.z - door.coord) || -1
    if (door.axis === 'x') {
      const x = door.coord + toward * 0.62
      this.passFrom.set(x, y, door.center - 0.95)
      this.passTo.set(x, y, door.center + 0.95)
    } else {
      const z = door.coord + toward * 0.62
      this.passFrom.set(door.center - 0.95, y, z)
      this.passTo.set(door.center + 0.95, y, z)
    }
    this.passT = seconds
    this.peek.scale.set(scale, scale, scale)
    this.peek.position.copy(this.passFrom)
    this.peek.rotation.set(0, Math.atan2(this.passTo.x - this.passFrom.x, this.passTo.z - this.passFrom.z), 0)
    this.peek.visible = true
  }

  private stepPasser(dt: number): void {
    if (this.passT <= 0) return
    const total = this.peek.scale.y < 0.95 ? 0.72 : this.passFrom.y > 2 ? 1.35 : 1.15
    const u = 1 - this.passT / total
    this.peek.position.lerpVectors(this.passFrom, this.passTo, Math.max(0, Math.min(1, u)))
    this.peek.rotation.set(0, Math.atan2(this.passTo.x - this.passFrom.x, this.passTo.z - this.passFrom.z), 0)
    this.passT = Math.max(0, this.passT - dt)
    this.peek.visible = this.passT > 0
  }

  private stepButcherCharge(dt: number): void {
    if ((this.snap.events?.slagter ?? 0) !== 3 || !this.butcher.visible) return
    const dx = this.sim.x - this.butcher.position.x
    const dz = this.sim.z - this.butcher.position.z
    const dist = Math.hypot(dx, dz) || 0.001
    const step = Math.min(dist - 1.7, 5.6 * dt)
    if (step > 0) {
      this.butcher.position.x += (dx / dist) * step
      this.butcher.position.z += (dz / dist) * step
    }
    this.butcher.lookAt(this.sim.x, 1.4, this.sim.z)
    if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.12)
  }

  private maybePeek(hit: { id: string; kind: string } | null): void {
    if (this.passT > 0 || this.peekT > 0 || this.peekCool > 0 || !hit || hit.kind !== 'door') return
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
      this.blackout = 0.8
      this.fade = 0.92
      this.sim.flashlightOn = false
      this.sim.x = 42
      this.sim.y = 0
      this.sim.z = 8
      this.sim.yaw = 0
      this.sim.vx = 0
      this.sim.vz = 0
      this.sim.vy = 0
      this.audio.play('metallic')
      this.audio.trace.push('power-cut')
    }
    if (this.blackout > 0) {
      this.blackout = Math.max(0, this.blackout - dt)
      this.fade = this.blackout / 0.8
    }
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
    const skin = new THREE.MeshStandardMaterial({ color: '#988176', roughness: 0.91, emissive: '#332a23', emissiveIntensity: 0.08, depthTest: false })
    const bodyMat = new THREE.MeshStandardMaterial({ color: '#363b3a', roughness: 0.68, metalness: 0.48, emissive: '#111211', emissiveIntensity: 0.05, depthTest: false })
    const headMat = new THREE.MeshStandardMaterial({ color: '#747874', roughness: 0.44, metalness: 0.72, emissive: '#171716', emissiveIntensity: 0.05, depthTest: false })
    const lensMat = new THREE.MeshPhysicalMaterial({ color: '#ddd6c0', roughness: 0.22, metalness: 0.10, clearcoat: 0.85, clearcoatRoughness: 0.18, depthTest: false })
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
    // Visual-only torch polish: machined aluminium collars, a rubber
    // knurled grip, glass optic, mount screws and wrist strap. None of these
    // meshes participate in picking, physics, light state or game rules.
    const gripMat = new THREE.MeshStandardMaterial({
      color: '#242728', metalness: 0.18, roughness: 0.93, depthTest: false,
    })
    const collarMat = new THREE.MeshStandardMaterial({
      color: '#8d8471', metalness: 0.85, roughness: 0.40, depthTest: false,
    })
    const opticMat = new THREE.MeshPhysicalMaterial({
      color: '#dad3b9', metalness: 0.08, roughness: 0.22,
      transparent: true, opacity: 0.86, depthTest: false,
    })
    for (let i = 0; i < 5; i++) {
      const rib = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 0.011, 24), gripMat)
      rib.rotation.x = Math.PI / 2
      rib.position.z = 0.0 + i * 0.020
      root.add(mark(rib))
    }
    for (const [z, radius, width] of [
      [-0.125, 0.036, 0.015],
      [-0.173, 0.044, 0.010],
      [-0.117, 0.031, 0.009],
    ] as const) {
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 24), collarMat)
      collar.rotation.x = Math.PI / 2
      collar.position.z = z
      root.add(mark(collar))
    }
    const optic = new THREE.Mesh(new THREE.CircleGeometry(0.028, 24), opticMat)
    optic.rotation.y = Math.PI
    optic.position.z = -0.187
    root.add(mark(optic))
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2
      const screw = new THREE.Mesh(new THREE.SphereGeometry(0.0032, 7, 5), gripMat)
      screw.position.set(Math.cos(angle) * 0.037, Math.sin(angle) * 0.037, -0.182)
      root.add(mark(screw))
    }
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.037, 0.004, 5, 18), gripMat)
    strap.rotation.y = Math.PI / 2
    strap.position.set(0.002, -0.037, 0.085)
    root.add(mark(strap))
    const wrist = rod(v(0.18, -0.19, 0.17), v(0.115, -0.145, 0.135), 0.057, 0.049, gripMat)
    root.add(mark(wrist))
    // Visually less intrusive on a 16:9 viewport; the spotlight position and
    // gameplay battery/brightness calculations remain unchanged.
    root.scale.setScalar(0.81)
    root.renderOrder = 3
    return root
  }

  private buildLunge(): THREE.Group {
    // V3 art pass: an attack is represented by reaching, uneven gloved arms.
    // Never place the former pale smiling face directly against the camera.
    const g = new THREE.Group()
    const sleeve = new THREE.MeshStandardMaterial({ color: '#292928', roughness: 0.97 })
    const glove = new THREE.MeshStandardMaterial({ color: '#191a1a', roughness: 0.92 })
    const seam = new THREE.MeshStandardMaterial({ color: '#4c4741', roughness: 1 })
    for (const side of [-1, 1]) {
      const arm = new THREE.Group()
      arm.position.set(side * 0.34, -0.18, -0.08)
      arm.rotation.z = -side * 0.24
      const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.095, 0.38, 10), sleeve)
      forearm.rotation.z = -side * 0.28
      arm.add(forearm)
      const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.063, 0.07, 0.045, 10), seam)
      cuff.position.set(-side * 0.045, 0.18, 0.025)
      arm.add(cuff)
      const palm = new THREE.Mesh(new THREE.SphereGeometry(0.077, 10, 7), glove)
      palm.position.set(-side * 0.09, 0.27, 0.08)
      arm.add(palm)
      for (let i = 0; i < 4; i++) {
        const finger = new THREE.Mesh(
          new THREE.CylinderGeometry(0.014, 0.022, 0.15 + (i % 3) * 0.035, 7),
          glove,
        )
        finger.position.set(-side * (0.12 + i * 0.039), 0.37 + (i % 2) * 0.025, 0.085)
        finger.rotation.z = -side * (0.2 + i * 0.08)
        arm.add(finger)
      }
      g.add(arm)
    }
    g.position.set(0, -0.16, -0.7)
    g.visible = false
    g.renderOrder = 20
    return g
  }

  private buildPasser(): THREE.Group {
    // A silent, fleeting hospital apparition. The game still owns precisely
    // when, where and how it crosses a doorway; this is appearance only.
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
      mesh.castShadow = true
      g.add(mesh)
      return mesh
    }
    // Uneven layered garment with an interrupted silhouette instead of a cone.
    const coat = new THREE.CylinderGeometry(0.245, 0.405, 1.36, 18, 8, true)
    const pos = coat.getAttribute('position') as THREE.BufferAttribute
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i)
      const uneven = 1 + 0.052 * Math.sin(i * 1.43) + 0.036 * Math.sin(i * 3.3)
      pos.setXYZ(i, x * uneven, y + (y < -0.46 ? 0.066 * Math.sin(i * 0.61) : 0), z * uneven)
    }
    coat.computeVertexNormals()
    shadowMesh(coat, gownMat, 0, 0.80, 0)
    const torso = shadowMesh(new THREE.CapsuleGeometry(0.17, 0.33, 5, 12), gownMat, 0, 1.37, 0)
    torso.scale.set(1.17, 1, 0.84)
    // Shoulder-length, frayed seam strips make the outline distinct in low light.
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
    // Dense hood with no white face or bright pupils.
    const faceVoid = shadowMesh(new THREE.SphereGeometry(0.123, 15, 12), voidMat, 0, 1.75, 0.098)
    faceVoid.scale.set(0.87, 1.28, 0.48)
    const hood = shadowMesh(new THREE.SphereGeometry(0.19, 17, 12, 0, Math.PI * 2, 0, Math.PI * 0.76),
      gownMat, 0, 1.83, -0.025)
    hood.scale.set(1.06, 1.16, 0.93)
    for (let i = 0; i < 4; i++) {
      const bandage = shadowMesh(new THREE.PlaneGeometry(0.275, 0.052), bandageMat,
        0.005 * (i % 2 ? 1 : -1), 1.84 - i * 0.065, 0.160)
      bandage.rotation.z = -0.12 + i * 0.06
    }
    // Deep veil hanging from the left cheek, visible in silhouette when it crosses.
    const veil = shadowMesh(new THREE.PlaneGeometry(0.21, 0.62, 2, 3), gownMat, -0.14, 1.49, 0.045)
    veil.rotation.z = -0.14
    g.visible = false
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
    const mask = new THREE.MeshStandardMaterial({ color: '#44413d', roughness: 0.98 })
    const iron = new THREE.MeshStandardMaterial({ color: '#66615b', metalness: 0.7, roughness: 0.52 })
    const skin = new THREE.MeshStandardMaterial({ color: '#34312f', roughness: 0.96 })
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
    // Eyes deliberately obscured under the worn surgical bandage.
    for (const side of [-1,1]) {
      const strap = new THREE.Mesh(new THREE.BoxGeometry(0.034,0.72,0.032),cloth)
      strap.position.set(side*0.235,1.26,0.29)
      g.add(strap)
      for (let i = 0; i < 3; i++) {
        const wornStrip = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.047, 0.019), cloth)
        wornStrip.position.set(side * 0.012, 1.83 - i * 0.06, 0.182 + 0.006 * i)
        wornStrip.rotation.z = side * 0.08 + i * 0.045
        g.add(wornStrip)
      }
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

  private caption(text: string, seconds: number): void {
    if (!this.settings.subtitles) return
    this.ui.subtitle(text)
    this.subtitleT = seconds
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
      introOn: () => game.introTime >= 0,
      seed: () => game.rng.seed,
      photos: () => game.built.photoSlots,
      signals: () => game.bus.recent(),
      hiding: () => game.hiding,
      closet: () => ({ phase: game.closet.phase, locked: game.closet.locked, whisper: game.closet.whisper }),
      roomPower: () => game.built.lights.reduce((sum, entry) => sum + entry.light.intensity, 0),
      face: (yaw: number) => {
        game.sim.yaw = yaw
        game.syncView()
      },
      gfx: () => {
        const info = game.renderer.info.render
        return {
          fps: game.fps,
          calls: info.calls,
          triangles: info.triangles,
          lights: game.built.lights.filter((entry) => entry.light.visible).length,
          flash: 0,
          face: game.scares.fx.face,
        }
      },
      lamps: () => game.built.lights.filter((entry) => entry.def.room === 'reception').map((entry) => entry.light.intensity),
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
      container: (id: string) => game.containers.state(id),
      aim: () => {
        const hit = selectInteract(game.eyePos(), { x: game.camDir.x, y: game.camDir.y, z: game.camDir.z }, game.candidates())
        return hit ? { id: hit.id, kind: hit.kind, prompt: hit.prompt } : null
      },
      tension: () => game.director.tension,
      lastScare: () => game.scares.lastKind,
      audioLog: () => game.audio.trace.slice(),
      monsterHidden: () => game.monster.concealed,
      events: () => game.snap.events,
      advance: (seconds: number) => {
        if (game.testMode) game.snap.playTime += seconds
      },
      tick: (seconds: number) => {
        if (!game.testMode) return
        let left = seconds
        while (left > 0.0001) {
          const dt = Math.min(0.05, left)
          if (game.mode === 'playing') game.updatePlaying(dt)
          left -= dt
        }
        game.render(0.05)
      },
      figure: () => ({
        passer: game.peek.visible,
        passerX: game.peek.position.x,
        passerZ: game.peek.position.z,
        butcher: game.butcher.visible,
        butcherX: game.butcher.position.x,
        butcherZ: game.butcher.position.z,
      }),
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
      introOn: () => boolean
      seed: () => number
      photos: () => number
      signals: () => GameSignal[]
      hiding: () => string | null
      closet: () => { phase: string; locked: number; whisper: number }
      roomPower: () => number
      face: (yaw: number) => void
      gfx: () => { fps: number; calls: number; triangles: number; lights: number; flash: number; face: number }
      lamps: () => number[]
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
      container: (id: string) => { progress: number; target: string; takenIds: readonly string[] } | null
      aim: () => { id: string; kind: string; prompt: string } | null
      tension: () => number
      lastScare: () => string | null
      audioLog: () => string[]
      monsterHidden: () => boolean
      events: () => GameSnapshot['events']
      advance: (seconds: number) => void
      tick: (seconds: number) => void
      figure: () => { passer: boolean; passerX: number; passerZ: number; butcher: boolean; butcherX: number; butcherZ: number }
      emptyLight: () => void
      ping: (kind: string) => void
      probe: (ms: number) => Promise<{ peak: number; jumps: number; state: string }>
      audition: (kind: string) => Promise<{ rms: number; peak: number; state: string; played: boolean }>
      measureBed: () => Promise<{ rms: number; peak: number; state: string }>
    }
  }
}
