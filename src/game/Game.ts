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
import { angDiff, applyMouseLook, rightFromYaw, type Vec3 } from '../core/math'
import { createRng, type Rng } from '../core/rng'
import { flashlightBanishes, pickRelocate } from '../ai/presence'
import { canLeaveCloset, CLOSET_PASS_END, emptyCloset, enterCloset, leaveCloset, passerAlong, passerPose, stepCloset, type ClosetState } from '../horror/ClosetSequence'
import { emptyScript, stepHallDark, stepScript } from '../horror/ScriptedEvents'
import { advanceEpoch, createSchedule, markRecovery, offerSequences, planBeat, stepSchedule, type ScheduleState } from '../horror/Schedule'
import { createTone, doorStartedMoving, RADIO_SOURCE, radioPulse, stepRoomTone as advanceRoomTone, type ToneState } from '../audio/roomTone'
import { lineOfSight, overlapsSolid, selectInteract, type InteractCandidate } from '../physics/Collision'
import { activeColliders, buildWorld, doorBlocksNav, patrolPoints, roomAt, sampleFloorY, type World } from '../world/buildWorld'
import { buildHanged, mountCasperPortrait, mountMichaelPortrait } from '../world/casperPortrait'
import { buildDoorGhost } from '../world/doorGhost'
import { buildLevel, type BuiltWorld } from '../world/LevelBuilder'
import type { SurfaceSet } from '../world/photoSurfaces'
import { EXIT_DOOR, FLOOR_Y } from '../world/data'
import { ContainerHost } from './ContainerHost'
import { Input } from './Input'
import { GAMEPLAY_EDGES, inventoryKey, MODAL_KEYS, modeAction, type GameMode } from './modalInput'
import { UI } from '../ui/UI'
import { addItem, dropOne, hasItem, removeItem, useConsumable } from '../systems/Inventory'
import { batteryBand, boostBattery, stepBattery } from '../systems/battery'
import { HALL_KNOCK_DELAY, HALL_QUESTIONS, hallKnockLevel } from '../systems/hallAsk'
import { BODY_CODE, HALL_CODE, roomDoorBlock, roomMission, roomOnwardDoor, roomSealedDoors, type RoomSnap } from '../systems/roomGates'
import { itemDef, SAFE_CODE, FILE_IDS } from '../systems/catalog'
import { browserStorage, latestSave, listSaves, loadGame, saveGame, type StorageLike } from '../systems/SaveSystem'
import { loadSettings, sanitizeSettings, saveSettings, type Settings } from '../systems/Settings'
import {
  SPAWN,
  createNewGame,
  currentObjective,
  fileCount,
  keysFound,
  MISSION_KEYS,
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
  private closetLooked = false
  private closetRoar = false
  private closetPassHeard = false
  private foundT = 0
  private ambient!: THREE.AmbientLight
  private hemi!: THREE.HemisphereLight
  private moon!: THREE.DirectionalLight
  private holdBreath = false
  private cameraEye = EYE_STAND
  private bob = 0
  private trauma = 0
  private scareDim = 0
  private damage = 0
  private fade = 0
  private flash = 0
  private message = ''
  private messageT = 0
  private toast = ''
  private toastT = 0
  private subtitleT = 0
  private lastObjective = ''
  private lastShown = ''
  private autosavedIntro = false
  private invIndex = 0
  private code = ''
  private codeFor: 'safe' | 'hall' | 'body' = 'safe'
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
  private stairWait = -1
  private stairPlayed = false
  private stairFig: THREE.Object3D | null = null
  private stairLook = 0
  private stairPhase: 'wait' | 'cue' | 'run' | 'gone' = 'wait'
  private stairPath: THREE.Vector3[] = []
  private stairPathI = 0
  private sheetCloth: THREE.Mesh | null = null
  private sheetMark: THREE.Object3D | null = null
  private sheetU = -1
  private corpseUpper: THREE.Object3D | null = null
  private corpseLook = 0
  private corpseSit: 'off' | 'up' | 'hold' | 'down' | 'done' = 'off'
  private corpseSitT = 0
  private bodyLid: THREE.Object3D | null = null
  private bodyLidU = -1
  private bodyKeyMesh: THREE.Object3D | null = null
  private bodyKeyTaken = false
  private homoLetters: {
    id: string
    letter: string
    x: number
    y: number
    z: number
    state: 'idle' | 'green' | 'red'
    face: THREE.MeshStandardMaterial
  }[] = []
  private homoStep = 0
  private homoOrder: string[] = []
  private readonly homoWord = ['H', 'O', 'M', 'O']
  private lungeT = 0
  private lunge!: THREE.Group
  private shadowMesh!: THREE.Mesh
  private shadowT = 0
  private shadowFrom = new THREE.Vector3()
  private shadowTo = new THREE.Vector3()
  private butcher!: THREE.Group
  private recentSpawns: Vec3[] = []
  private hideWait = 0
  private showAudio = false
  private lookSX = 0
  private lookSY = 0
  private blackout = 0
  private room2Dark = false
  private coverLeft = 0
  private peekT = 0
  private peekCool = 12
  private passT = 0
  private passKind: 'cross' | 'stare' = 'cross'
  private passPhase: 'stand' | 'shown' | 'pass' | 'corner' | 'watch' | 'wind' | 'veer' | 'run' | 'face' = 'stand'
  private passClock = 0
  private passStep = 0
  private runScreamed = false
  private hallLive = false
  private patrolKey = ''
  private patrolCache: { x: number; y: number; z: number }[] = []
  private searchCache: { id: string; pos: { x: number; y: number; z: number } }[] | null = null
  private hallWalk = 0
  private hallLit = false
  private hallStop = 0
  private hallStops: THREE.Vector3[] = []
  private hallLamp: THREE.PointLight | null = null
  private closetQuiet = false
  private closetBedAt = 0
  private passFrom = new THREE.Vector3()
  private passTo = new THREE.Vector3()
  private runFrom = new THREE.Vector3()
  private hallKnockNext = 0
  private opKnockWait = -1
  private opKnockNext = 0
  private opChasePlayed = false
  private opChaseLeft = 0
  private opChaseHard = false
  private opKnocksCut = false
  private pendingSlam: { id: string; room: string; at: number } | null = null
  private hangPhase: 'off' | 'fall' | 'hung' | 'feet' | 'stare' | 'flee' = 'off'
  private hangFlee: THREE.Vector3[] = []
  private hangFleeI = 0
  private hangFleeShut = false
  private hangT = 0
  private hangX = 42
  private hangZ = 6
  private hangSound = 0
  private hangCryIn = -1
  private hangCryOn = false
  private hangCryDone = false
  private hangBang = false
  private hangFallIn = -1
  private hangRunIn = -1
  private hangBody: THREE.Group | null = null
  private hangRope: THREE.Mesh | null = null
  private watchPhase: 'off' | 'ask' | 'seek' | 'play' | 'fade' | 'creak' | 'quiet' | 'scare' | 'hold' = 'off'
  private doorWeep = false
  private doorKnockAt = 0
  private doorHangBody: THREE.Group | null = null
  private doorHangRope: THREE.Mesh | null = null
  private doorHangX = 4
  private doorHangZ = 6
  private doorHangBang = false
  private creakTries = 0
  private hangRunner: THREE.Group | null = null
  private hangChase: 'off' | 'wait' | 'behind' | 'run' | 'face' | 'done' = 'off'
  private hangPath: THREE.Vector3[] = []
  private hangPathI = 0
  private hangAim = false
  private hangChaseT = 0
  private hangChaseSound = false
  private hangRoared = false
  private watchDone = false
  private watchLeft = 3
  private watchMark: THREE.Group | null = null
  private tapeGroup: THREE.Group | null = null
  private tapeScreen: THREE.Mesh | null = null
  private tapeBezel: THREE.Mesh | null = null
  private tapeCaption: THREE.Mesh | null = null
  private tapeVideo: HTMLVideoElement | null = null
  private readonly watchStand = { x: 3.15, z: 6.7 }
  private readonly watchYaw = -Math.PI / 2
  private beamHold = 0
  private butcherHit = false
  private butcherRoar = 0
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
  private lightRankAt = -1
  private lightCamX = 1e9
  private lightCamZ = 1e9
  private lightKey = ''
  private mapAt = 0
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
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setClearColor(0x07060a)
    this.scene.background = new THREE.Color(0x07060a)
    this.scene.fog = new THREE.FogExp2(0x0a0b0f, 0.02)
    // Dim enough to stay a hospital at night, bright enough to read a room.
    this.ambient = new THREE.AmbientLight(0x2a2624, 0.1)
    this.hemi = new THREE.HemisphereLight(0x243343, 0x0d0c0b, 0.12)
    this.moon = new THREE.DirectionalLight(0x899baa, 0.018)
    this.moon.position.set(-20, 40, -10)
    this.scene.add(this.ambient, this.hemi, this.moon)
    this.closetBox = this.buildClosetBox()

    this.world = buildWorld()
    this.built = buildLevel(this.scene, this.world, photos)
    this.containers = new ContainerHost(this.scene)
    this.monster = new MonsterActor()
    this.scene.add(this.monster.group)
    const faceLamp = this.monster.detachFaceLamp()
    if (faceLamp) this.scene.add(faceLamp)
    this.hallLamp = new THREE.PointLight('#c4b49a', 0, 3.2, 2)
    this.hallLamp.position.set(0, 2.05, 0.12)
    this.hallLamp.visible = true
    this.scene.add(this.hallLamp)
    this.atmo = new Atmosphere(this.scene, 24)
    this.scene.add(this.camera)
    this.spot = new THREE.SpotLight('#f1e4ca', 0, 21, 0.49, 0.87, 1.25)
    this.spot.castShadow = true
    this.spot.shadow.mapSize.set(1024, 1024)
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
    const hanged = buildHanged()
    this.hangBody = hanged.body
    this.hangRope = hanged.rope
    this.scene.add(hanged.body, hanged.rope)
    const doorHang = buildHanged()
    this.doorHangBody = doorHang.body
    this.doorHangRope = doorHang.rope
    this.scene.add(doorHang.body, doorHang.rope)
    const runner = buildHanged()
    runner.body.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (mesh.geometry instanceof THREE.TorusGeometry) mesh.visible = false
    })
    const runnerHead = runner.body.getObjectByName('hang-head')
    if (runnerHead) runnerHead.rotation.z = 0.06
    runner.body.visible = false
    this.hangRunner = runner.body
    this.scene.add(runner.body)
    mountCasperPortrait(this.scene)
    mountMichaelPortrait(this.scene)
    this.mountClosetLamp()
    this.mountHallPuzzle()
    this.mountWallWord()
    this.mountStairFigure()
    this.mountMorgue()
    this.mountWatch()
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
    document.addEventListener('fullscreenchange', () => this.syncFullscreen())
    this.applyVolumes()
    this.ui.continueEnabled(!!latestSave(this.storage))
    this.ui.fillSettings(this.settings)
    this.installApi()
    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault()
      this.contextLost = true
    })
    canvas.addEventListener('webglcontextrestored', () => {
      this.contextLost = false
      this.resize()
      if (this.mode === 'playing' || this.mode === 'examine' || this.mode === 'inventory') this.ui.show('hud')
      else this.ui.show(this.mode)
    })
    this.ui.root.querySelector('#intro')?.addEventListener('click', () => {
      if (this.introTime >= 0) this.finishIntro()
    })
  }

  start(): void {
    this.audio.enableRoomTones()
    this.ui.show('loading')
    this.ui.status('Tænder lygterne')
    this.mode = 'menu'
    requestAnimationFrame(() => {
      this.resize()
      try { this.warmHall() } catch (err) { console.error(err) }
      this.ui.show('menu')
      this.clock = performance.now()
      this.rafId = requestAnimationFrame(this.onFrame)
    })
  }

  private onFrame = (now: number): void => {
    if (this.frozen) return
    if (this.contextLost) {
      this.rafId = requestAnimationFrame(this.onFrame)
      return
    }
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
      if (cap === 30) {
        this.acc += dt
        if (this.acc >= 1 / 30) {
          const used = clampDt(this.acc)
          this.acc = 0
          this.advance(used)
        }
      } else {
        this.acc = 0
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
    if ((this.mode === 'playing' || this.mode === 'examine') && this.watchPhase !== 'ask') {
      if (this.hallOpen()) this.stepHallKnocks(dt)
      this.stepOpKnocks(dt)
    }
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
    if (this.watchPhase === 'ask') {
      this.ui.watchAsk(true)
      return
    }
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
    const watchLookLock = this.watchPhase === 'play'
    const watchLock = this.watchPhase === 'play' || this.watchPhase === 'fade' || this.watchPhase === 'creak' || this.watchPhase === 'quiet' || this.watchPhase === 'scare' || this.watchPhase === 'hold'
    const chaseLock = this.hangAim
    const hallLock = this.hallLive && (this.passPhase === 'run' || this.passPhase === 'face')
    if (chaseLock) {
      this.lookSX = 0
      this.lookSY = 0
      this.aimAtHangRunner()
    } else if (hallLock) {
      this.lookSX = 0
      this.lookSY = 0
      this.aimAtHallMonster()
    } else if (!watchLookLock) {
      this.lookSX = this.lookSX * 0.4 + look.x * 0.6
      this.lookSY = this.lookSY * 0.4 + look.y * 0.6
      const aimed = applyMouseLook(this.sim.yaw, this.sim.pitch, this.lookSX, this.lookSY, this.settings.invertY)
      this.sim.yaw = aimed.yaw
      this.sim.pitch = aimed.pitch
    } else {
      this.lookSX = 0
      this.lookSY = 0
    }
    if (this.closet.phase === 'inside') {
      const turn = Math.atan2(Math.sin(this.sim.yaw - this.closetYaw), Math.cos(this.sim.yaw - this.closetYaw))
      const loom = passerPose(this.closet.locked)
      const lunging = !!loom && loom.lunge > 0
      if (lunging) {
        this.sim.yaw += angDiff(this.sim.yaw, this.closetYaw) * Math.min(1, loom.lunge * 5)
        this.sim.pitch += (-0.22 - this.sim.pitch) * Math.min(1, loom.lunge * 5)
        this.sim.pitch = Math.max(-0.48, Math.min(0.12, this.sim.pitch))
      } else {
        this.sim.yaw = this.closetYaw + Math.max(-0.42, Math.min(0.42, turn))
        this.sim.pitch = Math.max(-0.3, Math.min(0.24, this.sim.pitch))
      }
    }
    const hereRoom = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    const rawWish = this.input.wish()
    const wish = watchLock
      ? { forward: 0, strafe: 0, sprint: false, crouch: false, jump: false }
      : { ...rawWish, sprint: hereRoom?.id === 'reception' ? false : rawWish.sprint }
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
    cols.push({ id: 'morgue-bed', minX: 39.05, maxX: 41.4, minY: 0, maxY: 1.2, minZ: 7.02, maxZ: 8.1 })
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
    this.stepWatch(dt)
    this.stepDoorWeep(dt)
    this.stepWatchAfter(dt)
    this.stepHangChase(dt)

    const allowChase = this.computeChase() && this.closet.phase !== 'inside'
    const passing = this.closet.phase === 'inside' ? passerPose(this.closet.locked) : null
    const hall = this.hallLive
    this.monster.scripted = this.closet.phase === 'inside' || hall
    this.monster.scriptWalk = hall ? this.hallWalk : passing && passing.face < 0.2 ? 1.15 : 0
    if (!this.huntUnlocked() && !hall) this.holdGuardianBack()
    if (this.huntUnlocked() || this.monster.scripted) {
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
      waypoints: this.cachedPatrol(),
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
      searchSpots: this.cachedSearch(),
    })
    if (tick.entered === 'Chase' && this.huntUnlocked()) this.audio.play('growl', this.monster.pos, { volume: 0.8 })
    if (tick.attack && this.huntUnlocked()) this.hurt(36, true)
    if (tick.foundHiding && this.huntUnlocked()) {
      this.hiding = null
      this.hurt(28, true)
      this.say('Den fandt dig.')
    }
    }
    // No footsteps are emitted by the monster: only the player's actual
    // movement generates walking sounds. Monster threats use growls and cues.

    this.stepCloset(dt)
    if (!this.huntUnlocked() && !this.hallLive && this.closet.phase !== 'inside') {
      this.monster.group.visible = false
    }
    if (this.huntUnlocked()) {
      this.herdMonster()
      this.relocateMonster(dt, cols)
    }
    this.stepEvents(dt)
    this.lightHallFigure()
    this.stepOpChase(dt)
    this.sealMissionDoors()
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
      sprinting: this.input.wish().sprint && !this.sim.crouching && room?.id !== 'reception',
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
      if (this.hiding === 'hide_op') {
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
    else if (hit.kind === 'hallcode') this.openHallCode()
    else if (hit.kind === 'sheet') this.pullSheet()
    else if (hit.kind === 'bodycode') this.openBodyCode()
    else if (hit.kind === 'bodykey') this.takeBodyKey()
    else if (hit.kind === 'gurney') this.inspectGurney()
    else if (hit.kind === 'letter') this.pressHomoLetter(hit.id)
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
    const behind = roomAt(
      this.world,
      this.sim.x - Math.sin(this.sim.yaw) * 0.9,
      this.sim.z - Math.cos(this.sim.yaw) * 0.9,
      this.sim.y,
    )
    const here = behind ?? roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (
      door.id === 'door_rec_pat' &&
      here?.id === 'reception' &&
      !this.watchDone &&
      hasItem(this.snap.inventory, 'key_gang')
    ) {
      this.openWatchAsk()
      return
    }
    if (door.id === 'door_rec_pat' && here?.id === 'reception' && this.watchDone) this.markRecDoor()
    const held = here ? roomDoorBlock(here.id, door.id, this.roomSnap()) : null
    if (held) {
      this.ui.presentMission()
      if (!this.scareOffTheDoor(here?.id)) this.audio.play('locked', this.doorPos(door), { volume: 0.7 })
      return
    }
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
      else if (door.id === 'door_rec_pat' && !hasItem(this.snap.inventory, 'key_gang')) this.say('Låst. Svar på efterlysningen først.')
      else if (door.keyId === 'chapel_key' && !hasItem(this.snap.inventory, 'chapel_key')) this.say('Låst. Nøglen ligger på sygeplejerskekontoret.')
      else if (door.keyId === 'master_key' && !hasItem(this.snap.inventory, 'master_key')) this.say('Kræver hovednøglen fra pengeskabet.')
      else if (door.keyId && hasItem(this.snap.inventory, door.keyId) && (!door.needsPower || this.snap.flags.generatorOn)) {
        this.unlocked.add(door.id)
        this.desired.set(door.id, 1)
        this.bus.emit({ type: 'doorOpened', id: door.id })
        if (door.id === 'door_rec_pat') {
          this.stopDoorWeep()
          this.beginHallFigure()
        }
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
    if (opening) {
      this.bus.emit({ type: 'doorOpened', id: door.id })
      if (door.id === 'door_rec_pat') this.beginHallFigure()
    }
    this.audio.play('door', this.doorPos(door))
    this.noise('door')
  }

  private pickupVisible(id: string): boolean {
    if (this.snap.pickedUp.includes(id)) return false
    return !(id === 'letter_maja' && hasItem(this.snap.inventory, 'note_maja'))
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
    this.codeFor = 'safe'
    this.code = ''
    this.paintCodePad()
    this.setMode('keypad')
  }

  private openBodyCode(): void {
    if ((this.snap.events?.beats ?? []).includes('slag_code')) {
      this.say('Boksen er allerede åben.')
      return
    }
    if (!(this.snap.events?.beats ?? []).includes('slag_sheet')) {
      this.say('Lagenet ligger stadig på sengen.')
      return
    }
    this.codeFor = 'body'
    this.code = ''
    this.paintCodePad()
    this.setMode('keypad')
  }

  private openHallCode(): void {
    if (this.snap.readIds.includes('code_1243')) {
      this.say('Koden er allerede indtastet. Gå hen til døren.')
      return
    }
    this.codeFor = 'hall'
    this.code = ''
    this.paintCodePad()
    this.setMode('keypad')
  }

  private paintCodePad(wrong = false): void {
    const title = this.codeFor === 'safe' ? 'PENGESKAB' : 'KODEBOKS'
    const hint = wrong
      ? (this.codeFor === 'safe' ? 'Forkert. Lyden bar langt.' : 'Forkert.')
      : this.codeFor === 'hall'
        ? 'Koden fra væggen.'
        : this.codeFor === 'body'
          ? 'Tallet fra maven.'
          : hasItem(this.snap.inventory, 'note_code') ? 'Stiftelsesåret.' : 'Du kender ikke koden endnu.'
    this.ui.keypad(this.code, hint, title)
  }

  private inspectGurney(): void {
    const beats = this.snap.events?.beats
    if (beats && !beats.includes('op_gurney')) {
      beats.push('op_gurney')
      this.refreshObjective()
    }
    this.audio.play('paper', { x: 33.2, y: 1.1, z: 8.15 }, { volume: 0.35 })
    this.say('Båren er tom. Lagenet er mørkt af blod.')
  }

  submitCode(): void {
    if (this.codeFor === 'body') {
      if (this.code === BODY_CODE) {
        const beats = this.snap.events?.beats
        if (beats && !beats.includes('slag_code')) beats.push('slag_code')
        this.bodyLidU = 0
        if (this.bodyKeyMesh) this.bodyKeyMesh.visible = true
        this.audio.play('key')
        this.setMode('playing')
        this.say('Låget giver sig. Nøglen ligger i boksen.')
        this.refreshObjective()
      } else {
        this.audio.play('fail')
        this.code = ''
        this.paintCodePad(true)
      }
      return
    }
    if (this.codeFor === 'hall') {
      if (this.code === HALL_CODE) {
        if (!this.snap.readIds.includes('code_1243')) this.snap.readIds.push('code_1243')
        this.audio.play('key')
        this.setMode('playing')
        this.say('Låsen giver sig.')
        this.beginHallVeer()
        this.refreshObjective()
      } else {
        this.audio.play('fail')
        this.code = ''
        this.paintCodePad(true)
      }
      return
    }
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
      this.paintCodePad(true)
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
    if (spot.id !== 'hide_op') {
      this.audio.play('door', this.feet(), { volume: 0.35 })
      this.say(spot.kind === 'bed' ? 'Under sengen. Hold Shift for at holde vejret.' : 'Du klemmer dig ind. E for at gå ud.')
      return
    }
    const room = this.world.rooms.find((item) => item.id === spot.room)
    const mid = room ? room.z + room.d * 0.5 : spot.z + 1
    this.closetYaw = spot.z < mid ? 0 : Math.PI
    this.sim.yaw = this.closetYaw
    this.sim.pitch = 0
    this.sim.flashlightOn = false
    this.closet = enterCloset(id)
    this.closetLooked = false
    this.closetRoar = false
    this.closetPassHeard = false
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
    if (this.closetQuiet || this.closetBedAt > 0) {
      this.closetQuiet = false
      this.closetBedAt = 0
      this.audio.quiet(false)
    }
    this.audio.play('door', this.feet(), { volume: 0.4 })
    this.say('Du træder ud.')
  }

  private stepCloset(dt: number): void {
    if (this.closet.phase === 'idle') return
    const stepped = stepCloset(this.closet, this.mode === 'playing' ? dt : 0)
    this.closet = stepped.state
    this.snap.closet = this.closet
    for (const cue of stepped.cues) {
      if (cue === 'face') {
        if (this.snap.events) this.snap.events.hallCloset = true
        this.closetBedAt = performance.now() + 1800
      } else if (cue === 'free') {
        this.say('Du kan åbne lågen.')
        if (this.closet.hideId === 'hide_op') this.beginOpMission()
      }
    }
    this.driveClosetPasser()
    if (this.closetBedAt > 0 && performance.now() >= this.closetBedAt) {
      this.closetBedAt = 0
      this.closetQuiet = false
      this.audio.quiet(false)
    }
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
    const pose = this.closet.phase === 'inside' ? passerPose(this.closet.locked) : null
    if (!pose || pose.hidden) {
      this.monster.presentSmile(0, 0)
      this.monster.loomOver(0)
      this.monster.group.rotation.x = 0
      this.monster.group.scale.set(1, 1, 1)
      if (pose?.hidden) {
        const parked = this.world.hides.find((item) => item.id === this.closet.hideId)
        const parkedRoom = parked ? this.world.rooms.find((item) => item.id === parked.room) : undefined
        if (parked && parkedRoom) {
          const floor = FLOOR_Y[parkedRoom.floor]
          this.monster.pos = { x: parked.x, y: floor - 6, z: parked.z }
          this.monster.group.position.set(parked.x, floor - 6, parked.z)
          this.monster.group.visible = true
        }
        if (!this.closetQuiet) {
          this.closetQuiet = true
          this.audio.fadeQuiet(0.8)
        }
      }
      if (!pose && this.closet.phase === 'inside' && this.closet.locked >= CLOSET_PASS_END) {
        const spot = this.world.hides.find((item) => item.id === this.closet.hideId)
        this.parkAfterCloset(spot?.room)
      }
      if (!pose?.hidden && !this.huntUnlocked()) this.monster.group.visible = false
      return
    }
    const spot = this.world.hides.find((item) => item.id === this.closet.hideId)
    const room = spot ? this.world.rooms.find((item) => item.id === spot.room) : undefined
    if (!spot || !room) return
    const facing = this.closetYaw === 0 ? 1 : -1
    const lunging = pose.lunge > 0
    const floor = FLOOR_Y[room.floor]
    let x: number
    let y: number
    let z: number
    if (lunging) {
      // Drop from above the slit into its upper middle. Feet can sit in the locker floor.
      const drop = pose.lunge
      x = spot.x
      y = floor + (0.7 * (1 - drop) - 0.09 * drop)
      z = spot.z + facing * (1.12 - drop * 0.12)
    } else {
      const along = pose.along
      x = spot.x - 1.7 + along * 3.4
      y = floor
      z = spot.z + facing * 1.2
    }
    this.monster.pos = { x, y, z }
    this.monster.group.position.set(x, y, z)
    this.monster.group.scale.setScalar(1)
    this.monster.group.visible = true
    this.monster.group.rotation.x = 0
    const toward = this.closetYaw === 0 ? Math.PI : 0
    this.monster.face(Math.PI / 2 + angDiff(Math.PI / 2, toward) * (lunging ? 1 : pose.face))
    if (lunging) this.monster.loomOver(Math.min(1, pose.lunge * 1.45))
    else {
      this.monster.loomOver(0)
      this.monster.presentSmile(pose.smile, pose.face)
    }
    if (lunging && pose.lunge >= 0.72 && !this.closetRoar) {
      this.closetRoar = true
      const at = this.closetMouth()
      this.audio.play('hideScream', at, { volume: 1 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.62)
    } else if (!lunging && pose.along > 0.18 && !this.closetPassHeard) {
      this.closetPassHeard = true
      this.audio.play('scream', { x, y: y + 1.5, z }, { volume: 0.62 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.2)
    }
    this.monster.bb.state = 'Patrol'
    if (pose.face > 0.85 && !this.closetLooked) {
      this.closetLooked = true
      this.audio.play('whisper', { x, y: y + 1.5, z }, { volume: 0.16 })
    }
    if (pose.face < 0.2 && Math.floor(this.closet.locked * 2) !== Math.floor((this.closet.locked - 0.05) * 2)) {
      this.audio.play('creak', { x, y: y + 0.2, z }, { volume: 0.18 })
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
    const wood = new THREE.MeshStandardMaterial({
      color: '#c4a07a',
      emissive: '#5a3d28',
      emissiveIntensity: 0.28,
      roughness: 0.78,
      side: THREE.BackSide,
    })
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
    const lamp = new THREE.PointLight('#ffe4c4', 4.2, 4.8, 2)
    lamp.position.set(0, 1.42, 0.05)
    g.add(lamp)
    const crack = new THREE.PointLight('#f3d7b6', 2.8, 3.6, 2)
    crack.position.set(0, 1.05, 0.46)
    g.add(crack)
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
    const shake = (this.settings.cameraShake ? this.trauma * this.trauma : 0) + (this.coverLeft > 0 ? 0.55 : 0)
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
    this.spot.intensity = on ? 28 * charge * dim * flicker : 0
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
    u.uChroma.value = this.scares.fx.chroma > 0.2 ? 0.08 + this.scares.fx.chroma * 0.05 : 0
    u.uTime.value = t
    u.uLow.value = this.sim.health < 40 ? (40 - this.sim.health) / 40 : 0
    u.uFlash.value = 0 // V3: no sudden white screen flashes
    u.uBlur.value.set(this.camDir.x * blur, this.camDir.y * blur)
    if (this.mode === 'playing' && this.blackout <= 0) this.fade = Math.max(0, this.fade - dt * 0.45)
    this.trauma = Math.max(0, this.trauma - dt)
    this.scareDim = Math.max(0, this.scareDim - dt * 0.32)
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
      if (entry.def.room === 'patientgang') level *= 1.6
      level *= 1 - this.scareDim * 0.5
      const shown = this.lampShown.get(entry.def.id)
      const black = this.room2Dark
      if (black) level = 0
      else if (shown !== undefined && dt > 0) level = shown + (level - shown) * (1 - Math.exp(-dt * 1.4))
      this.lampShown.set(entry.def.id, level)
      if (entry.lens) entry.lens.emissiveIntensity = Math.max(0.012, level * 1.1)
      if (entry.light instanceof THREE.SpotLight || entry.light instanceof THREE.PointLight) {
        entry.light.intensity = entry.light.visible ? entry.base * level : 0
      }
    }
    const cx = this.camera.position.x
    const cz = this.camera.position.z
    const moved = Math.hypot(cx - this.lightCamX, cz - this.lightCamZ) > 2.5
    if (this.lightRankAt < 0 || t - this.lightRankAt > 0.45 || moved) {
      this.lightRankAt = t
      this.lightCamX = cx
      this.lightCamZ = cz
      const max = visibleLightCount(this.settings.quality)
      const ranked = [...this.built.lights].sort(
        (a, b) => Math.hypot(a.def.x - cx, a.def.z - cz) - Math.hypot(b.def.x - cx, b.def.z - cz),
      )
      const key = ranked.slice(0, max).map((entry) => entry.def.id).join('|')
      if (key !== this.lightKey) {
        this.lightKey = key
        ranked.forEach((entry, i) => {
          entry.light.visible = i < max
          if (i >= max) entry.light.intensity = 0
        })
      }
    }
    const black = this.room2Dark
    const dim = 1 - this.scareDim * 0.5
    this.ambient.intensity = (black ? 0.004 : 0.028) * dim
    this.hemi.intensity = (black ? 0.008 : 0.075) * dim
    this.moon.intensity = (black ? 0.004 : 0.018) * dim
    const near = this.built.lights.find((entry) => entry.light.visible)
    if (near && playing) {
      const dipped = near.light.intensity < near.base * 0.4
      this.audio.setHum(!dipped && this.lightLevel(near.def) > 0.2, { x: near.def.x, y: near.def.y, z: near.def.z })
    }
  }

  private lightLevel(def: { mode: string }): number {
    if (this.room2Dark) return 0
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
    if (!this.built.rain.visible) return
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
      const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
      const sealed = here ? roomDoorBlock(here.id, door.id, this.roomSnap()) : null
      const locked = doorBlocksNav(door, this.unlocked) || !!sealed
      const prompt = locked ? 'Låst dør' : openAmt > 0.4 ? 'Luk dør' : 'Åbn dør'
      list.push({ id: door.id, kind: 'door', x: p.x, y: p.y + 1, z: p.z, radius: 1.15, prompt })
    }
    for (const p of this.world.pickups) {
      if (!this.pickupVisible(p.id)) continue
      const room = this.world.rooms.find((r) => r.id === p.room)
      if (!room) continue
      list.push({
        id: p.id,
        kind: 'pickup',
        x: p.x,
        y: FLOOR_Y[room.floor] + (p.y ?? 0.8),
        z: p.z,
        radius: p.itemId === 'note_maja' ? 0.28 : 0.55,
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
    list.push({
      id: 'hall_code',
      kind: 'hallcode',
      x: 23.62,
      y: 1.22,
      z: 4.15,
      radius: 0.7,
      prompt: this.snap.readIds.includes('code_1243') ? 'Koden er indtastet' : 'Indtast koden',
    })
    const sheetDone = (this.snap.events?.beats ?? []).includes('slag_sheet')
    const boxOpen = (this.snap.events?.beats ?? []).includes('slag_code')
    if (!sheetDone && this.sheetU < 0) {
      list.push({ id: 'sheet', kind: 'sheet', x: 40.2, y: 1.05, z: 7.55, radius: 1.15, prompt: 'for at trække lagenet af' })
    }
    if (sheetDone && !boxOpen) {
      list.push({ id: 'body_box', kind: 'bodycode', x: 40.6, y: 1.05, z: 2.7, radius: 0.7, prompt: 'for at indtaste koden' })
    }
    if (boxOpen && !this.bodyKeyTaken) {
      list.push({ id: 'body_key', kind: 'bodykey', x: 40.6, y: 1.12, z: 2.7, radius: 0.65, prompt: 'for at tage nøglen' })
    }
    if ((this.snap.events?.beats ?? []).includes('op_mission')) {
      for (const plate of this.homoLetters) {
        list.push({
          id: plate.id,
          kind: 'letter',
          x: plate.x,
          y: plate.y,
          z: plate.z,
          radius: 0.75,
          prompt: plate.state === 'idle' ? 'for at aktivere' : 'for at slå farven fra',
        })
      }
    }
    const gurney = this.world.props.find((prop) => prop.id === 'op_table')
    if (gurney) {
      list.push({
        id: gurney.id,
        kind: 'gurney',
        x: gurney.x,
        y: 1.05,
        z: gurney.z,
        radius: 0.9,
        prompt: 'Undersøg båren',
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
        radius: h.id === 'hide_op' ? 1.5 : 0.8,
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
    const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    const local = here ? roomMission(here.id, this.roomSnap()) : null
    const stairRoom = !!here?.id.startsWith('trappe')
    const shownId = local ? (local.done ? `${local.id}:door` : local.id) : stairRoom ? 'stair-go' : obj.id
    const shownText = local
      ? (local.done ? 'Gå hen til døren.' : local.text)
      : stairRoom
        ? 'Gå op ad trappen.'
        : obj.text
    const missionChanged = shownId !== this.lastShown && shownId !== ''
    if (shownId !== this.lastShown) {
      // The persistent card already shows the line. A second toast covered the view.
      if (this.toast === shownText) {
        this.toast = ''
        this.toastT = 0
      }
      this.lastShown = shownId
    }
    if (obj.id !== this.lastObjective) this.lastObjective = obj.id
    const files = fileCount(this.snap)
    this.ui.hud({
      objective: shownText,
      missionRoom: here?.name ?? '',
      missionNote: '',
      files: files ? `Journaler ${files}/${FILE_IDS.length}` : '',
      prompt: this.messageT > 0 ? this.message : this.closet.phase === 'inside'
        ? (canLeaveCloset(this.closet) ? 'Åbn lågen' : 'Du tør ikke åbne endnu...')
        : this.hiding ? 'Forlad gemmested' : hit ? hit.prompt : '',
      stamina: this.sim.stamina,
      battery: this.sim.battery,
      batteryText: `${Math.round(this.sim.battery)}%${batteryBand(this.sim.battery) === 'critical' && this.sim.flashlightOn ? ' · lavt' : ''}`,
      keys: MISSION_KEYS.filter((key) => hasItem(this.snap.inventory, key.id)).map((key) => key.id),
      low: this.sim.health < 40 || batteryBand(this.sim.battery) !== 'ok',
      lockHint: this.mode === 'playing' && !this.input.pointerLocked,
    })
    this.ui.closetView(this.closet.phase === 'inside')
    const filming = this.watchPhase === 'play' || this.watchPhase === 'fade' || this.watchPhase === 'creak' || this.watchPhase === 'quiet' || this.watchPhase === 'scare' || this.watchPhase === 'hold'
    this.ui.shoutMission(!filming && local?.id === 'room_operations_hide' && !local.done && this.closet.phase !== 'inside')
    if (filming) this.ui.hideMission()
    else if (missionChanged) this.ui.presentMission()
    else this.ui.showMission()
    this.ui.hurt(this.damage * 0.85 + (this.sim.health < 35 ? 0.25 : 0))
    const nowMs = performance.now()
    if (nowMs - this.mapAt > 140) {
      this.mapAt = nowMs
      this.paintMap()
    }
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

  private cachedPatrol(): { x: number; y: number; z: number }[] {
    const key = `${this.floorAllowed(-1)}:${this.floorAllowed(0)}:${this.floorAllowed(1)}:${this.snap.flags.secretOpen}:${this.huntUnlocked()}`
    if (key !== this.patrolKey) {
      this.patrolKey = key
      this.patrolCache = this.earlyPatrol(patrolPoints(this.world, (f) => this.floorAllowed(f), this.snap.flags.secretOpen))
    }
    return this.patrolCache
  }

  private cachedSearch(): { id: string; pos: { x: number; y: number; z: number } }[] {
    if (!this.searchCache) {
      this.searchCache = this.world.hides.map((hide) => {
        const room = this.world.rooms.find((item) => item.id === hide.room)
        return { id: hide.id, pos: { x: hide.x, y: room ? FLOOR_Y[room.floor] : 0, z: hide.z } }
      })
    }
    return this.searchCache
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
      if (result.effect === 'opening') this.markDrawerOpened(id)
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

  /** Opening the drawer is the task. The battery inside does not open the next door. */
  private markDrawerOpened(id: string): void {
    const beat = id === 'obs_shelf_drawer' ? 'obs_cabinet' : ''
    if (!beat) return
    const beats = this.snap.events?.beats
    if (!beats || beats.includes(beat)) return
    beats.push(beat)
    this.refreshObjective()
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
    if (itemId === 'rosary') this.snap.rosaryCharges = 2
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
    if (!hasItem(this.snap.inventory, 'note_maja')) this.say('Efterlysningen ligger på skranken.')
  }

  private newGame(): void {
    this.snap = createNewGame()
    this.ended = false
    this.autosavedIntro = false
    this.lastObjective = ''
    this.lastShown = ''
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
    for (const [id, mesh] of this.built.pickups) mesh.visible = this.pickupVisible(id)
    this.monster.spawn(this.snap.monster, this.snap.monster.yaw, 'Patrol')
    this.director = createDirector()
    this.schedule = createSchedule()
    this.tone = createTone()
    this.radioAt = -99
    this.beginIntro()
    this.creepIn = 12
    this.scares.dismiss()
    this.audio.useMenuBed(false)
    this.audio.beginScene()
    this.audio.stopLeftCry()
    this.hangPhase = 'off'
    if (this.hangBody) this.hangBody.visible = false
    if (this.hangRope) this.hangRope.visible = false
    if (this.doorHangBody) this.doorHangBody.visible = false
    if (this.doorHangRope) this.doorHangRope.visible = false
    this.hangChase = 'off'
    if (this.hangRunner) this.hangRunner.visible = false
    this.hallLive = false
    this.hallWalk = 0
    if (this.hallLamp) this.hallLamp.intensity = 0
    this.stairWait = -1
    this.stairPlayed = false
    this.resetWatch()
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
    if (!Number.isFinite(this.snap.hallWait)) this.snap.hallWait = -1
    if (!Number.isInteger(this.snap.hallStep)) this.snap.hallStep = 0
    this.armHallKnocks()
    if (!this.snap.readIds) this.snap.readIds = []
    this.settleLoadedBody()
    for (const [id, mesh] of this.built.pickups) mesh.visible = this.pickupVisible(id)
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
    this.audio.useMenuBed(false)
    this.audio.beginScene()
    this.audio.stopLeftCry()
    this.hangPhase = 'off'
    if (this.hangBody) this.hangBody.visible = false
    if (this.hangRope) this.hangRope.visible = false
    if (this.doorHangBody) this.doorHangBody.visible = false
    if (this.doorHangRope) this.doorHangRope.visible = false
    this.hangChase = 'off'
    if (this.hangRunner) this.hangRunner.visible = false
    this.hallLive = false
    this.hallWalk = 0
    if (this.hallLamp) this.hallLamp.intensity = 0
    this.stairWait = -1
    this.stairPlayed = false
    this.resetWatch()
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
    if (mode === 'menu' || mode === 'credits' || mode === 'exit') this.audio.useMenuBed(true)
    else if (mode === 'playing') this.audio.useMenuBed(false)
    const screen = mode === 'paused' ? 'pause' : mode
    this.ui.show(screen === 'playing' ? 'playing' : screen)
    if (this.introTime >= 0) {
      this.viewmodel.visible = false
      this.ui.cinematic(true)
    }
    const tape = this.watchPhase === 'play'
    if (tape && this.tapeVideo) {
      if (mode === 'playing') void this.tapeVideo.play().catch(() => undefined)
      else this.tapeVideo.pause()
    }
    this.audio.duck((mode !== 'playing' && mode !== 'menu') || tape)
    if (mode === 'inventory') this.refreshInv()
    const dense = (name: Mode) => name === 'playing' || name === 'examine' || name === 'inventory'
    if (dense(previous) !== dense(mode)) this.resize()
  }

  private applyModalKeys(): void {
    if (this.watchPhase === 'ask') {
      this.input.discard(GAMEPLAY_EDGES)
      if (this.input.takeFirst(['Escape'])) this.declineWatch()
      return
    }
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
      return { name: d.name, count: s.count, desc: d.description, kind: d.kind }
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
    const ask = itemId === 'note_maja' && !hasItem(this.snap.inventory, 'key_gang')
    if (ask && this.snap.hallWait < 0) {
      this.snap.hallWait = 0
      this.snap.hallStep = 0
      this.armHallKnocks()
    }
    this.ui.examine(def, map, ask)
    if (ask) this.ui.ask(this.hallQuestion(), this.snap.hallStep, HALL_QUESTIONS.length)
    this.setMode('examine')
  }

  private hallQuestion() {
    return HALL_QUESTIONS[Math.min(this.snap.hallStep, HALL_QUESTIONS.length - 1)]
  }

  private armHallKnocks(): void {
    if (this.snap.hallWait < HALL_KNOCK_DELAY) this.hallKnockNext = HALL_KNOCK_DELAY
    else this.hallKnockNext = this.snap.hallWait + hallKnockLevel(this.snap.hallWait).gap
  }

  private hallOpen(): boolean {
    return this.snap.hallWait >= 0 && !hasItem(this.snap.inventory, 'key_gang')
  }

  /** After the letter is answered, the door knocks while someone cries quietly behind it. */
  private stepDoorWeep(dt: number): void {
    if (!this.wantsDoorWeep()) {
      if (this.doorWeep) this.stopDoorWeep()
      return
    }
    const at = this.knockFromDoor('reception')
    if (!this.doorWeep) {
      this.doorWeep = true
      this.doorKnockAt = 0.4
    }
    this.audio.startSoftCry(at)
    this.doorKnockAt -= dt
    if (this.doorKnockAt > 0) return
    this.hearFromHere()
    this.audio.play('knock', at, { volume: 1.02, rate: 0.93 + Math.random() * 0.06 })
    this.doorKnockAt = 2.15 + Math.random() * 1.15
  }

  private wantsDoorWeep(): boolean {
    if (!hasItem(this.snap.inventory, 'key_gang')) return false
    if (this.unlocked.has('door_rec_pat')) return false
    if (this.watchPhase !== 'off') return false
    if (this.hiding) return false
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (room?.id !== 'reception') return false
    const door = this.world.doors.find((item) => item.id === 'door_rec_pat')
    if (!door) return false
    const at = this.doorPos(door)
    const dx = at.x - this.sim.x
    const dz = at.z - this.sim.z
    const dist = Math.hypot(dx, dz)
    if (dist > 7.2 || dist < 0.35) return false
    if (dist < 3.4) return true
    const moving = Math.hypot(this.sim.vx, this.sim.vz) > 0.25
    const toward = (Math.sin(this.sim.yaw) * dx + Math.cos(this.sim.yaw) * dz) / dist
    return moving && toward > 0.4
  }

  private stopDoorWeep(): void {
    this.doorWeep = false
    this.doorKnockAt = 0
    this.audio.stopSoftCry()
  }

  private stepHallKnocks(dt: number): void {
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (room?.id !== 'reception') return
    this.snap.hallWait += Math.max(0, dt)
    if (this.snap.hallWait < this.hallKnockNext) return
    const knocking = Math.max(0, this.snap.hallWait - HALL_KNOCK_DELAY)
    const level = hallKnockLevel(knocking)
    const at = this.knockFromDoor('reception')
    this.hearFromHere()
    if (level.pause) this.audio.play('breath', at, { volume: 0.22 })
    else this.audio.play('knock', at, { volume: level.volume, rate: 0.97 + Math.random() * 0.06 })
    this.hallKnockNext = this.snap.hallWait + level.gap
  }

  /** A knock sits on the room's own door, just inside the leaf. */
  private knockFromDoor(roomId: string): { x: number; y: number; z: number } {
    const id = roomOnwardDoor(roomId)
    const door = (id ? this.world.doors.find((item) => item.id === id) : undefined)
      ?? this.world.doors.find((item) => item.a === roomId || item.b === roomId)
    if (!door) return { x: this.sim.x, y: this.sim.y + 1.3, z: this.sim.z }
    const at = this.doorPos(door)
    const dx = this.sim.x - at.x
    const dz = this.sim.z - at.z
    const len = Math.hypot(dx, dz) || 1
    const pull = Math.min(0.42, len * 0.45)
    return { x: at.x + (dx / len) * pull, y: at.y + 0.28, z: at.z + (dz / len) * pull }
  }

  private hearFromHere(): void {
    this.camera.getWorldDirection(this.camDir)
    this.audio.setListener(
      { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
      { x: this.camDir.x, y: this.camDir.y, z: this.camDir.z },
      { x: 0, y: 1, z: 0 },
    )
  }

  /** Shut every door of the current room until its task is finished. */
  private sealMissionDoors(): void {
    if (this.passKind === 'stare') return
    if (this.hangPhase === 'flee' && !this.hangFleeShut) return
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (!room) return
    for (const id of roomSealedDoors(room.id, this.roomSnap())) {
      const door = this.world.doors.find((item) => item.id === id)
      if (!door) continue
      const at = this.doorPos(door)
      if (Math.hypot(at.x - this.sim.x, at.z - this.sim.z) < 0.55) continue
      if (id === 'door_rec_pat' && this.hangChase === 'run') continue
      if (id === 'door_pers_trappe' && this.stairPhase === 'run') continue
      if ((this.desired.get(id) ?? 0) > 0 || (this.open.get(id) ?? 0) > 0.02) this.desired.set(id, 0)
    }
  }

  private roomSnap(): RoomSnap {
    return {
      inventory: this.snap.inventory,
      readIds: this.snap.readIds,
      pickedUp: this.snap.pickedUp,
      containers: this.snap.containers,
      beats: this.snap.events?.beats ?? [],
    }
  }

  /** The search in the operating room starts when the locker can open. Door knocks stay in room 1. */
  private beginOpMission(): void {
    const beats = this.snap.events?.beats
    if (!beats || beats.includes('op_mission')) return
    beats.push('op_mission')
    this.opKnockWait = 0
    this.opKnockNext = 10
  }

  private stepOpKnocks(dt: number): void {
    const started = (this.snap.events?.beats ?? []).includes('op_mission')
    if (!started || this.snap.pickedUp.includes('bat_op')) {
      this.opKnockWait = -1
      return
    }
    if (this.opKnocksCut) return
    if (this.opKnockWait < 0) {
      this.opKnockWait = 0
      this.opKnockNext = 10
    }
    this.opKnockWait += Math.max(0, dt)
    if (this.opKnockWait < this.opKnockNext) return
    const level = hallKnockLevel(Math.max(0, this.opKnockWait - HALL_KNOCK_DELAY))
    this.opKnockNext = this.opKnockWait + level.gap
  }

  /** After the battery is found, running steps and a scream follow behind. Nothing is shown. */
  private stepOpChase(dt: number): void {
    if (this.opChaseLeft > 0) {
      this.opChaseLeft = Math.max(0, this.opChaseLeft - dt)
      const lookX = Math.sin(this.sim.yaw)
      const lookZ = Math.cos(this.sim.yaw)
      const close = this.opChaseHard ? 3.15 - (1 - this.opChaseLeft / 3) * 2.2 : 1.7
      this.audio.followChase({
        x: this.sim.x - lookX * close,
        y: this.sim.y + 0.15,
        z: this.sim.z - lookZ * close,
      })
    }
    if (this.opChasePlayed || !this.snap.pickedUp.includes('bat_op')) return
    if (this.hiding || this.closet.phase === 'inside') return
    const room = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (room?.id !== 'operationsstue') return
    const dx = 36 - this.sim.x
    const dz = 6 - this.sim.z
    const dist = Math.hypot(dx, dz) || 1
    const fx = Math.sin(this.sim.yaw)
    const fz = Math.cos(this.sim.yaw)
    const moving = Math.hypot(this.sim.vx, this.sim.vz) > 0.35
    if (!moving || (fx * dx + fz * dz) / dist < 0.45) return
    const behind = { x: this.sim.x - fx * 1.7, y: this.sim.y + 0.15, z: this.sim.z - fz * 1.7 }
    if (!this.audio.playChaseSteps(behind, false)) return
    this.opChasePlayed = true
    this.opChaseHard = false
    this.opChaseLeft = 3
    this.audio.play('scream', { x: behind.x, y: this.sim.y + 1.45, z: behind.z }, { volume: 1 })
  }

  /** Trying the locked door while it knocks cuts the knocks and starts the chase. */
  private scareOffTheDoor(roomId?: string): boolean {
    if (roomId !== 'operationsstue' || this.opChasePlayed) return false
    if (!this.opKnocksCut && this.opKnockWait < HALL_KNOCK_DELAY) return false
    if (this.snap.pickedUp.includes('bat_op')) return false
    if (!(this.snap.events?.beats ?? []).includes('op_mission')) return false
    this.opKnocksCut = true
    this.audio.cutOneShots()
    const fx = Math.sin(this.sim.yaw)
    const fz = Math.cos(this.sim.yaw)
    const behind = { x: this.sim.x - fx * 3.1, y: this.sim.y + 0.2, z: this.sim.z - fz * 3.1 }
    if (!this.audio.playChaseSteps(behind, true)) return true
    this.opChasePlayed = true
    this.opChaseHard = true
    this.opChaseLeft = 3
    this.audio.play('scream', { x: behind.x, y: this.sim.y + 1.5, z: behind.z }, { volume: 1.15 })
    return true
  }

  private answerHall(choice: string): void {
    if (hasItem(this.snap.inventory, 'key_gang')) return
    const question = this.hallQuestion()
    if (choice !== question.answer) {
      this.audio.play('knock', { x: 12, y: 1.3, z: 6 }, { volume: 1.6, rate: 1 })
      this.hallKnockNext = this.snap.hallWait
      this.say('Det står på efterlysningen. Læs den igen.')
      return
    }
    if (this.snap.hallStep < HALL_QUESTIONS.length - 1) {
      this.snap.hallStep += 1
      this.ui.ask(this.hallQuestion(), this.snap.hallStep, HALL_QUESTIONS.length)
      this.say('Det passer.')
      return
    }
    const res = addItem(this.snap.inventory, 'key_gang', 1)
    this.snap.inventory = res.slots
    this.snap.hallWait = -1
    this.ui.ask(null)
    this.showFound('key_gang', 1)
    this.audio.play('key')
    this.say('Nøglen er din. Døren til patientgangen kan åbnes.')
    this.refreshObjective()
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
      flashlight: lamp,
      prevFlash: this.prevFlash,
      lookedAway: this.snap.events.slagter === 2 && lookedAway,
      atDoor,
      powerCut: this.snap.flags.powerCut,
      lookingAtFigure: this.snap.events.slagter === 2 && lookingAtFigure,
      beam: this.snap.events.slagter === 3 && this.beamHold > 0.28,
    })
    if (this.huntUnlocked()) this.maybePeek(hit)
    this.snap.events = stepped.state
    if (room === 'operationsstue' && this.prevRoom !== room && !(this.snap.events.beats ?? []).includes('op_cover')) {
      if (!this.snap.events.beats) this.snap.events.beats = []
      this.snap.events.beats.push('op_cover')
      this.peek.visible = false
      this.passT = 0
      this.say('Gem dig i skabet.')
      this.ui.shoutMission(true)
      this.ui.presentMission()
    }
    if (room === 'slagterum') {
      this.peek.visible = false
      this.passT = 0
      this.butcher.visible = false
      if (!this.huntUnlocked()) this.monster.group.visible = false
    }
    if (room.startsWith('trappe') && !this.stairPlayed && this.stairWait < 0 && room !== this.prevRoom) {
      this.stairWait = 3
    }
    if (this.stairWait >= 0) {
      if (!room.startsWith('trappe')) this.stairWait = -1
      else {
        this.stairWait = Math.max(0, this.stairWait - dt)
        if (this.stairWait === 0) {
          const played = this.audio.playClip('stairGhost', { x: this.sim.x, y: this.sim.y + 4.2, z: this.sim.z }, 1.7)
          if (played > 0) {
            this.stairPlayed = true
            this.stairWait = -1
          } else this.stairWait = 0.35
        }
      }
    }
    this.stepStairGrin(dt)
    this.stepSheet(dt)
    if (this.prevRoom && room && this.prevRoom !== room) this.slamEntered(this.prevRoom, room)
    this.stepPendingSlam()
    this.prevRoom = room
    this.prevFlash = this.sim.flashlightOn
    for (const cue of stepped.cues) {
      if (room === 'slagterum' && (cue === 'shadow' || cue.startsWith('pass'))) continue
      if (room === 'patientgang' && cue === 'shadow') continue
      this.fireCue(cue, hit?.id)
    }
    this.stepPasser(dt)
    if (room === 'patientgang') {
      this.peek.visible = false
      this.butcher.visible = false
      this.shadowMesh.visible = false
      this.shadowT = 0
      if (this.passKind !== 'stare') this.passT = 0
    }
    if (room === 'operationsstue' && this.closet.phase !== 'inside') {
      this.peek.visible = false
      if (this.passKind !== 'stare') this.passT = 0
    }
    if (room === 'slagterum') {
      this.peek.visible = false
      this.passT = 0
      this.butcher.visible = false
      this.shadowT = 0
      this.shadowMesh.visible = false
      if (!this.huntUnlocked()) this.monster.group.visible = false
    }
    this.stepHang(dt)
    const hall = stepHallDark(this.snap.events, dt, room)
    this.snap.events = hall.state
    this.room2Dark = hall.state.hallDark > 0 && room === 'patientgang'
    if (hall.cue === 'out') {
      this.sim.flashlightOn = false
      this.butcher.visible = false
      this.audio.play('metallic', { x: this.sim.x, y: this.sim.y + 1, z: this.sim.z }, { volume: 0.7 })
    } else if (hall.cue === 'back') {
      this.audio.play('metallic', { x: this.sim.x, y: this.sim.y + 1, z: this.sim.z }, { volume: 0.22 })
    }
    if (this.coverLeft > 0) {
      this.coverLeft = Math.max(0, this.coverLeft - dt)
      this.trauma = Math.max(this.trauma, 0.72)
      if (this.coverLeft === 0) {
        if (!this.snap.events.beats.includes('op_cover')) this.snap.events.beats.push('op_cover')
        this.say('Gem dig i skabet.')
        this.ui.shoutMission(true)
        this.ui.presentMission()
      }
    }
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
      this.caption('Efterlysningen peger videre ind i huset.', 2.4)
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
      if (!this.hallLive && !this.snap.events?.hallDoor) {
        this.beginHallFigure()
        this.audio.play('whisper', this.passFrom, { volume: 0.45 })
      }
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.16)
      return
    }
    if (cue === 'pass:operation') {
      this.peek.visible = false
      this.passT = 0
      return
    }
    if (cue === 'archive') {
      this.passFrom.set(3.1, 4, 9.6)
      this.passTo.set(8.8, 4, 9.6)
      this.passKind = 'cross'
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
      this.butcherRoar = 2
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

  /**
   * The dark hunter crosses the doorway and runs to the far right corner.
   * It does not attack until the room task is done and the player is at the next door.
   */
  private beginHallFigure(): void {
    if (this.hallLive || this.snap.events?.hallDoor) return
    this.passKind = 'stare'
    this.passPhase = 'pass'
    this.passClock = 0
    this.passStep = 0
    this.passT = 1
    this.hallStop = 0
    this.runScreamed = false
    this.hallLive = true
    this.hallWalk = 3.6
    this.monster.bb.state = 'Patrol'
    this.monster.group.scale.setScalar(1)
    this.peek.visible = false
    this.butcher.visible = false
    this.hallStops = [
      new THREE.Vector3(15.4, 0, 4.15),
      new THREE.Vector3(19.1, 0, 3.85),
      new THREE.Vector3(23.15, 0, 1.05),
    ]
    this.placeHallMonster(13.15, 10.7, 0)
  }

  /** Compile the hall once behind the loading screen. Extra full-frame renders were closing the graphics driver. */
  private warmHall(): void {
    const pos = this.camera.position.clone()
    const quat = this.camera.quaternion.clone()
    const monsterVis = this.monster.group.visible
    const parked = this.monster.group.position.clone()
    this.monster.group.visible = true
    this.monster.group.position.set(12, 0, 6)
    this.monster.loomOver(1)
    this.camera.position.set(10.2, 1.6, 6)
    this.camera.lookAt(16, 1.4, 6)
    this.camera.updateMatrixWorld()
    this.renderer.compile(this.scene, this.camera)
    this.monster.loomOver(0)
    this.monster.group.position.copy(parked)
    this.monster.group.visible = monsterVis
    this.camera.position.copy(pos)
    this.camera.quaternion.copy(quat)
    this.camera.updateMatrixWorld()
  }

  private hallMissionDone(): boolean {
    return roomMission('patientgang', this.roomSnap())?.done === true
  }

  private placeHallMonster(x: number, z: number, yaw: number): void {
    this.monster.pos = { x, y: 0, z }
    this.monster.yaw = yaw
    this.monster.group.position.set(x, 0, z)
    this.monster.group.rotation.y = yaw
    this.monster.group.visible = true
    this.peek.visible = false
  }

  private faceHallMonster(): void {
    const dx = this.sim.x - this.monster.pos.x
    const dz = this.sim.z - this.monster.pos.z
    this.placeHallMonster(this.monster.pos.x, this.monster.pos.z, Math.atan2(dx, dz))
  }

  private moveHallMonster(target: THREE.Vector3, speed: number, dt: number): boolean {
    const dx = target.x - this.monster.pos.x
    const dz = target.z - this.monster.pos.z
    const dist = Math.hypot(dx, dz)
    const yaw = Math.atan2(dx, dz)
    if (dist < 0.08) {
      this.placeHallMonster(target.x, target.z, yaw)
      return true
    }
    const step = Math.min(dist, speed * dt)
    this.placeHallMonster(this.monster.pos.x + (dx / dist) * step, this.monster.pos.z + (dz / dist) * step, yaw)
    return false
  }

  private parkHallMonster(): void {
    this.hallLive = false
    this.hallWalk = 0
    this.passPhase = 'stand'
    if (this.hallLamp) this.hallLamp.intensity = 0
    this.monster.bb.state = 'Patrol'
    this.monster.group.scale.setScalar(1)
    this.monster.group.visible = false
    this.monster.pos = { x: 46.2, y: 0, z: 10.2 }
    this.monster.group.position.set(46.2, 0, 10.2)
  }

  /** After the code: left across the hall, down toward the entrance, then the sprint. */
  private beginHallVeer(): void {
    if (!this.hallLive) return
    if (this.passPhase === 'veer' || this.passPhase === 'run' || this.passPhase === 'face') return
    this.passPhase = 'veer'
    this.passClock = 0
    this.hallStop = 0
    this.hallWalk = 4.2
    this.hallStops = [
      new THREE.Vector3(16.6, 0, 9.05),
      new THREE.Vector3(13.7, 0, 4.7),
    ]
    this.monster.bb.state = 'Chase'
    this.monster.group.visible = true
  }

  private beginHallCharge(): void {
    this.passPhase = 'run'
    this.passClock = 0
    this.passStep = 0
    this.runScreamed = false
    this.hallWalk = 4.2
    this.monster.bb.state = 'Chase'
    this.runFrom.set(this.monster.pos.x, 0, this.monster.pos.z)
  }

  /** Same forced look as the reception chase, aimed at the hall hunter. */
  private aimAtHallMonster(): void {
    const dx = this.monster.pos.x - this.sim.x
    const dz = this.monster.pos.z - this.sim.z
    const dist = Math.hypot(dx, dz) || 0.001
    this.sim.yaw = Math.atan2(dx, dz)
    const eye = this.sim.y + 1.62
    this.sim.pitch = Math.max(-0.35, Math.min(0.2, Math.atan2(1.5 - eye, dist)))
  }

  /** A short lamp on the hunter, only while room 2 is dark and this sequence is playing. */
  private lightHallFigure(): void {
    if (!this.hallLamp) return
    const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    const lamp = this.sim.flashlightOn && this.sim.battery > 0.2
    const charging = this.passPhase === 'run' || this.passPhase === 'face'
    const dark = this.hallLive && here?.id === 'patientgang' && charging && !lamp
    this.hallLamp.intensity = dark ? 1.15 : 0
    this.hallLamp.visible = true
    this.hallLamp.position.set(this.monster.pos.x, this.monster.pos.y + 1.6, this.monster.pos.z)
    if (dark === this.hallLit) return
    this.hallLit = dark
    this.monster.group.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (!mesh.isMesh) return
      const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
      for (const mat of list) {
        if (!(mat instanceof THREE.MeshStandardMaterial)) continue
        const data = mat.userData as { hallBase?: number }
        if (data.hallBase === undefined) data.hallBase = mat.emissiveIntensity
        mat.emissive.set('#000000')
        mat.emissiveIntensity = data.hallBase
      }
    })
  }

  private stepDoorStare(dt: number): void {
    if (this.passT <= 0) return
    this.passClock += dt
    this.peek.visible = false
    if (
      this.hallLive &&
      this.hallMissionDone() &&
      (this.passPhase === 'pass' || this.passPhase === 'corner' || this.passPhase === 'watch' || this.passPhase === 'shown')
    ) {
      this.beginHallVeer()
    }
    if (this.passPhase === 'shown') {
      this.hallWalk = 0
      this.monster.bb.state = 'Patrol'
      this.monster.group.scale.setScalar(1)
      this.faceHallMonster()
      return
    }
    if (this.passPhase === 'pass' || this.passPhase === 'corner') {
      const target = this.hallStops[this.hallStop]
      const last = this.hallStop >= this.hallStops.length - 1
      const speed = this.hallLive ? (last ? 5.6 : 7.2) : last ? 2.3 : 2.8
      this.hallWalk = this.hallLive ? 3.6 : last ? 1.5 : 1.8
      this.monster.bb.state = 'Patrol'
      this.stepFigureFeet(dt, speed, 0.9)
      if (!target || this.moveHallMonster(target, speed, dt)) {
        this.hallStop += 1
        this.passStep = 0
        if (this.hallStop >= this.hallStops.length) {
          this.passPhase = 'watch'
          this.passClock = 0
          this.hallWalk = 0
          this.faceHallMonster()
        }
      }
    } else if (this.passPhase === 'watch') {
      this.hallWalk = 0
      this.monster.bb.state = 'Patrol'
      this.faceHallMonster()
    } else if (this.passPhase === 'veer') {
      const target = this.hallStops[this.hallStop]
      const speed = 8.6
      this.hallWalk = 4.2
      this.monster.bb.state = 'Chase'
      this.stepFigureFeet(dt, speed, 1.25)
      if (!target || this.moveHallMonster(target, speed, dt)) {
        this.hallStop += 1
        if (this.hallStop >= this.hallStops.length) this.beginHallCharge()
      }
    } else if (this.passPhase === 'run') {
      const speed = 15.2
      this.hallWalk = 4.2
      this.monster.bb.state = 'Chase'
      const dx = this.sim.x - this.monster.pos.x
      const dz = this.sim.z - this.monster.pos.z
      const dist = Math.hypot(dx, dz) || 0.001
      const stop = 0.82
      if (!this.runScreamed) {
        this.runScreamed = true
        const at = { x: this.monster.pos.x, y: 1.5, z: this.monster.pos.z }
        this.audio.play('scream', at, { volume: 2 })
        this.audio.play('deep', { x: at.x, y: at.y - 0.3, z: at.z }, { volume: 1.15 })
        if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.7)
      }
      if (dist < 4) this.aimAtHallMonster()
      if (dist <= stop + 0.05) {
        this.passPhase = 'face'
        this.passClock = 0
        this.hallWalk = 0
        this.monster.group.scale.setScalar(1.2)
        this.placeHallMonster(this.monster.pos.x, this.monster.pos.z, Math.atan2(dx, dz))
      } else {
        const step = Math.min(dist - stop, speed * dt)
        const nx = this.monster.pos.x + (dx / dist) * step
        const nz = this.monster.pos.z + (dz / dist) * step
        const traveled = Math.hypot(nx - this.runFrom.x, nz - this.runFrom.z)
        const total = Math.max(0.4, Math.hypot(this.sim.x - this.runFrom.x, this.sim.z - this.runFrom.z) - stop)
        this.monster.group.scale.setScalar(1 + Math.min(1, traveled / total) * 0.2)
        this.placeHallMonster(nx, nz, Math.atan2(dx, dz))
        this.stepFigureFeet(dt, speed, 1.7)
        this.audio.followChase({ x: nx, y: 0.3, z: nz })
      }
    } else {
      this.hallWalk = 0
      const dx = this.sim.x - this.monster.pos.x
      const dz = this.sim.z - this.monster.pos.z
      this.aimAtHallMonster()
      this.monster.group.scale.setScalar(1.2)
      this.placeHallMonster(this.monster.pos.x, this.monster.pos.z, Math.atan2(dx, dz))
      if (this.passClock >= 0.85) {
        this.passT = 0
        this.passKind = 'cross'
        if (this.snap.events) this.snap.events.hallDoor = true
        this.parkHallMonster()
      }
    }
  }

  /** One footfall per stride, so the steps stay in time with the run. */
  private stepFigureFeet(dt: number, speed: number, volume: number): void {
    const stride = speed > 10 ? 1.2 : speed > 4 ? 1.05 : 0.62
    this.passStep -= dt
    if (this.passStep > 0) return
    this.passStep = stride / speed
    const at = this.hallLive
      ? { x: this.monster.pos.x, y: 0, z: this.monster.pos.z }
      : { x: this.peek.position.x, y: this.peek.position.y, z: this.peek.position.z }
    this.audio.playFootstep(speed > 4, false, at, volume, speed > 10 ? 1.18 : speed > 4 ? 1.28 : 0.94)
  }

  private stepPasser(dt: number): void {
    const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (here?.id === 'patientgang' && this.passKind !== 'stare') {
      this.peek.visible = false
      this.passT = 0
      return
    }
    if (this.passKind === 'stare') {
      this.stepDoorStare(dt)
      return
    }
    if (this.passT <= 0) return
    const total = this.peek.scale.y < 0.95 ? 0.72 : this.passFrom.y > 2 ? 1.35 : 1.15
    const u = 1 - this.passT / total
    this.peek.position.lerpVectors(this.passFrom, this.passTo, Math.max(0, Math.min(1, u)))
    const walk = Math.atan2(this.passTo.x - this.passFrom.x, this.passTo.z - this.passFrom.z)
    this.peek.rotation.set(0, walk, 0)
    const glance = this.peek.getObjectByName('glance')
    if (glance) {
      const mid = Math.sin(Math.max(0, Math.min(1, u)) * Math.PI)
      const toPlayer = Math.atan2(this.sim.x - this.peek.position.x, this.sim.z - this.peek.position.z)
      let diff = toPlayer - walk
      while (diff > Math.PI) diff -= Math.PI * 2
      while (diff < -Math.PI) diff += Math.PI * 2
      glance.rotation.y = Math.max(-1.05, Math.min(1.05, diff)) * mid
    }
    this.passT = Math.max(0, this.passT - dt)
    this.peek.visible = this.passT > 0
  }

  /** A warm lamp on the operating-room locker, so the hiding place reads from the door. */
  private mountClosetLamp(): void {
    const lamp = new THREE.PointLight('#ffd7a4', 7.5, 6.5, 2)
    lamp.position.set(29, 2.35, 9.85)
    this.scene.add(lamp)
    const shade = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 10, 8),
      new THREE.MeshBasicMaterial({ color: '#ffe3b8' }),
    )
    shade.position.copy(lamp.position)
    this.scene.add(shade)
  }

  /** The sum hangs on the north wall. 8 × 150 + 43 = 1243. */
  private mountHallPuzzle(): void {
    const paper = document.createElement('canvas')
    paper.width = 900
    paper.height = 1100
    const g = paper.getContext('2d')
    if (g) {
      g.fillStyle = '#efe4d2'
      g.fillRect(0, 0, 900, 1100)
      g.strokeStyle = '#6d5c48'
      g.lineWidth = 16
      g.strokeRect(26, 26, 848, 1048)
      g.fillStyle = '#2a2118'
      g.textAlign = 'center'
      g.font = '600 52px Georgia'
      g.fillText('SKT. AGNES', 450, 150)
      g.font = 'italic 38px Georgia'
      g.fillText('Stue 2  ·  aftenmedicin', 450, 220)
      g.font = '700 96px Georgia'
      g.fillText('8  ×  150', 450, 460)
      g.fillText('+  43', 450, 590)
      g.strokeStyle = '#2a2118'
      g.lineWidth = 5
      g.beginPath()
      g.moveTo(240, 650)
      g.lineTo(660, 650)
      g.stroke()
      g.font = 'italic 42px Georgia'
      g.fillText('Summen er koden', 450, 790)
      g.fillText('ved døren.', 450, 860)
    }
    const map = new THREE.CanvasTexture(paper)
    map.colorSpace = THREE.SRGBColorSpace
    const board = new THREE.Mesh(
      new THREE.PlaneGeometry(1.15, 1.4),
      new THREE.MeshStandardMaterial({ map, roughness: 0.86, emissive: '#4a3b2c', emissiveIntensity: 0.28 }),
    )
    board.position.set(20.6, 2.2, 11.68)
    board.rotation.y = Math.PI
    this.scene.add(board)

    const box = new THREE.Group()
    box.position.set(23.72, 1.22, 4.15)
    const metal = new THREE.MeshStandardMaterial({ color: '#2c2926', roughness: 0.42, metalness: 0.4 })
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.36, 0.28), metal)
    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(0.02, 0.07, 0.16),
      new THREE.MeshStandardMaterial({ color: '#12160e', emissive: '#7d8a4e', emissiveIntensity: 0.4, roughness: 0.4 }),
    )
    screen.position.set(-0.055, 0.09, 0)
    box.add(housing, screen)
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 3; col++) {
        const nub = new THREE.Mesh(
          new THREE.BoxGeometry(0.016, 0.02, 0.026),
          new THREE.MeshStandardMaterial({ color: '#d5c7b0', roughness: 0.38 }),
        )
        nub.position.set(-0.058, -0.1 + row * 0.04, -0.055 + col * 0.055)
        box.add(nub)
      }
    }
    this.scene.add(box)
  }

  /** Four framed letters on open wall, clear of the cabinets. Order is H, O, M, O. */
  private mountWallWord(): void {
    const plates: { id: string; letter: string; x: number; y: number; z: number; rot: number }[] = [
      { id: 'H', letter: 'H', x: 26.15, y: 1.72, z: 11.67, rot: Math.PI },
      { id: 'O', letter: 'O', x: 35.62, y: 1.72, z: 8.4, rot: -Math.PI / 2 },
      { id: 'M', letter: 'M', x: 28.15, y: 1.72, z: 0.33, rot: 0 },
      { id: 'O2', letter: 'O', x: 24.42, y: 1.72, z: 3.6, rot: Math.PI / 2 },
    ]
    for (const plate of plates) {
      const canvas = document.createElement('canvas')
      canvas.width = 512
      canvas.height = 680
      const g = canvas.getContext('2d')
      if (!g) continue
      g.fillStyle = '#1a1612'
      g.fillRect(0, 0, 512, 680)
      g.fillStyle = '#efe6d8'
      g.fillRect(28, 28, 456, 624)
      g.strokeStyle = '#6a5344'
      g.lineWidth = 10
      g.strokeRect(40, 40, 432, 600)
      g.fillStyle = 'rgba(110, 28, 22, 0.22)'
      g.beginPath()
      g.ellipse(390, 560, 90, 36, 0.4, 0, Math.PI * 2)
      g.fill()
      g.fillStyle = '#140f0d'
      g.font = '600 430px Georgia'
      g.textAlign = 'center'
      g.textBaseline = 'middle'
      g.fillText(plate.letter, 256, 340)
      const map = new THREE.CanvasTexture(canvas)
      map.colorSpace = THREE.SRGBColorSpace
      const faceMat = new THREE.MeshStandardMaterial({
        map,
        roughness: 0.72,
        emissive: '#6a5844',
        emissiveIntensity: 0.55,
      })
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(0.98, 1.24, 0.05),
        new THREE.MeshStandardMaterial({ color: '#2c241c', roughness: 0.62 }),
      )
      const face = new THREE.Mesh(new THREE.PlaneGeometry(0.86, 1.1), faceMat)
      face.position.z = 0.03
      const group = new THREE.Group()
      group.add(frame, face)
      group.position.set(plate.x, plate.y, plate.z)
      group.rotation.y = plate.rot
      this.scene.add(group)
      this.homoLetters.push({
        id: plate.id,
        letter: plate.letter,
        x: plate.x,
        y: plate.y,
        z: plate.z,
        state: 'idle',
        face: faceMat,
      })
    }
  }

  private paintHomo(plate: (typeof this.homoLetters)[number]): void {
    if (plate.state === 'green') {
      plate.face.color.set('#e7ffe9')
      plate.face.emissive.set('#1c8f46')
      plate.face.emissiveIntensity = 1.15
    } else if (plate.state === 'red') {
      plate.face.color.set('#ffe4e4')
      plate.face.emissive.set('#b41c1c')
      plate.face.emissiveIntensity = 1.15
    } else {
      plate.face.color.set('#ffffff')
      plate.face.emissive.set('#6a5844')
      plate.face.emissiveIntensity = 0.55
    }
  }

  /** A second press puts the plate back to paper, and drops any letters accepted after it. */
  private extinguishHomo(plate: (typeof this.homoLetters)[number]): void {
    if (plate.state === 'green') {
      const at = this.homoOrder.indexOf(plate.id)
      const drop = at >= 0 ? this.homoOrder.slice(at) : [plate.id]
      for (const id of drop) {
        const item = this.homoLetters.find((entry) => entry.id === id)
        if (!item) continue
        item.state = 'idle'
        this.paintHomo(item)
      }
      this.homoOrder = at >= 0 ? this.homoOrder.slice(0, at) : this.homoOrder.filter((id) => id !== plate.id)
      this.homoStep = this.homoOrder.length
      const beats = this.snap.events?.beats
      const mark = beats?.indexOf('op_homo') ?? -1
      if (beats && mark >= 0) beats.splice(mark, 1)
      this.refreshObjective()
    } else {
      plate.state = 'idle'
      this.paintHomo(plate)
    }
    this.audio.play('click')
  }

  /** Green only for the next letter. A second press turns the colour off. */
  private pressHomoLetter(id: string): void {
    if (!(this.snap.events?.beats ?? []).includes('op_mission')) {
      this.say('Gem dig først.')
      return
    }
    const plate = this.homoLetters.find((item) => item.id === id)
    if (!plate) return
    if (plate.state !== 'idle') {
      this.extinguishHomo(plate)
      return
    }
    if (plate.letter === this.homoWord[this.homoStep]) {
      plate.state = 'green'
      this.paintHomo(plate)
      this.homoOrder.push(plate.id)
      this.homoStep = this.homoOrder.length
      this.audio.play('click')
      if (this.homoStep < this.homoWord.length) return
      const beats = this.snap.events?.beats
      if (beats && !beats.includes('op_homo')) beats.push('op_homo')
      this.refreshObjective()
      this.say('Døren giver sig.')
      return
    }
    plate.state = 'red'
    this.paintHomo(plate)
    this.audio.play('locked', { x: plate.x, y: plate.y, z: plate.z }, { volume: 0.55 })
  }

  /** A covered figure on a bed, and the box the number opens. */
  private mountMorgue(): void {
    const bed = new THREE.Group()
    bed.position.set(40.2, 0, 7.55)
    const iron = new THREE.MeshStandardMaterial({ color: '#4a433c', roughness: 0.46, metalness: 0.55 })
    const linen = new THREE.MeshStandardMaterial({ color: '#cfc6b6', roughness: 1 })
    const mattressMat = new THREE.MeshStandardMaterial({ color: '#8a7968', roughness: 0.94 })
    const shirt = new THREE.MeshStandardMaterial({ color: '#3c4650', roughness: 0.9 })
    const trousers = new THREE.MeshStandardMaterial({ color: '#2a2826', roughness: 0.92 })
    const skin = new THREE.MeshStandardMaterial({ color: '#6b5648', roughness: 0.86 })
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2.16, 0.06, 0.96), iron)
    deck.position.y = 0.46
    const mattress = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.12, 0.84), mattressMat)
    mattress.position.y = 0.55
    const headboard = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.62, 0.9), iron)
    headboard.position.set(-1.05, 0.78, 0)
    const footboard = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.36, 0.86), iron)
    footboard.position.set(1.04, 0.64, 0)
    bed.add(deck, mattress, headboard, footboard)
    for (const x of [-0.92, 0.92]) {
      for (const z of [-0.4, 0.4]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.46, 0.06), iron)
        leg.position.set(x, 0.23, z)
        bed.add(leg)
      }
    }
    for (const z of [-0.46, 0.46]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.05, 0.03), iron)
      rail.position.set(0.02, 0.72, z)
      bed.add(rail)
    }
    const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.08, 0.52), linen)
    pillow.position.set(-0.78, 0.66, 0)
    bed.add(pillow)
    const legs = new THREE.Group()
    for (const z of [-0.09, 0.09]) {
      const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.62, 4, 8), trousers)
      leg.rotation.z = Math.PI / 2
      leg.position.set(0.48, 0.72, z)
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.09), trousers)
      foot.position.set(0.86, 0.68, z)
      legs.add(leg, foot)
    }
    bed.add(legs)
    const upper = new THREE.Group()
    upper.position.set(0.02, 0.74, 0)
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.38, 4, 8), shirt)
    torso.rotation.z = Math.PI / 2
    torso.position.set(-0.24, 0.04, 0)
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.08, 8), skin)
    neck.rotation.z = Math.PI / 2
    neck.position.set(-0.48, 0.06, 0)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 16, 12), skin)
    head.scale.set(1.05, 0.92, 0.95)
    head.position.set(-0.64, 0.08, 0)
    upper.add(torso, neck, head)
    for (const z of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.42, 3, 6), shirt)
      arm.rotation.z = Math.PI / 2
      arm.position.set(-0.22, 0.0, z * 0.2)
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), skin)
      hand.position.set(-0.02, -0.01, z * 0.2)
      upper.add(arm, hand)
    }
    const paper = document.createElement('canvas')
    paper.width = 512
    paper.height = 200
    const g = paper.getContext('2d')
    if (g) {
      g.fillStyle = '#e4d8c6'
      g.fillRect(0, 0, 512, 200)
      g.fillStyle = '#1a120e'
      g.font = '700 132px Georgia'
      g.textAlign = 'center'
      g.textBaseline = 'middle'
      g.fillText(BODY_CODE, 256, 104)
    }
    const map = new THREE.CanvasTexture(paper)
    map.colorSpace = THREE.SRGBColorSpace
    const mark = new THREE.Mesh(
      new THREE.PlaneGeometry(0.42, 0.16),
      new THREE.MeshStandardMaterial({ map, roughness: 0.72, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -4 }),
    )
    mark.position.set(-0.1, 0.22, 0.02)
    mark.rotation.x = -1.05
    mark.visible = false
    upper.add(mark)
    bed.add(upper)
    this.corpseUpper = upper
    this.sheetMark = mark
    const sheet = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.035, 0.8), linen)
    sheet.position.set(0.06, 0.9, 0)
    bed.add(sheet)
    this.sheetCloth = sheet
    this.scene.add(bed)

    const box = new THREE.Group()
    box.position.set(40.6, 0.72, 2.7)
    const housing = new THREE.Mesh(
      new THREE.BoxGeometry(0.46, 0.28, 0.34),
      new THREE.MeshStandardMaterial({ color: '#2a2724', roughness: 0.48, metalness: 0.4 }),
    )
    housing.position.y = 0.14
    const lid = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.04, 0.32),
      new THREE.MeshStandardMaterial({ color: '#3a3530', roughness: 0.42, metalness: 0.45 }),
    )
    lid.position.set(0, 0.3, 0)
    lid.geometry.translate(0, 0.02, -0.16)
    const key = new THREE.Group()
    const brass = new THREE.MeshStandardMaterial({ color: '#b08a45', roughness: 0.4, metalness: 0.6 })
    const bow = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.008, 6, 12), brass)
    bow.rotation.x = Math.PI / 2
    const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.012, 0.012), brass)
    shaft.position.x = 0.06
    key.add(bow, shaft)
    key.position.set(0, 0.2, 0)
    key.rotation.y = 0.4
    key.visible = false
    box.add(housing, lid, key)
    this.bodyLid = lid
    this.bodyKeyMesh = key
    this.scene.add(box)
  }

  private pullSheet(): void {
    if (this.sheetU >= 0) return
    if ((this.snap.events?.beats ?? []).includes('slag_sheet')) return
    this.sheetU = 0
    this.audio.play('paper', { x: 40.2, y: 1, z: 7.55 }, { volume: 0.45 })
  }

  private takeBodyKey(): void {
    if (this.bodyKeyTaken) return
    if (!(this.snap.events?.beats ?? []).includes('slag_code')) return
    const res = addItem(this.snap.inventory, 'key_slag', 1)
    if (!res.added) {
      this.say('Du kan ikke bære flere.')
      return
    }
    this.snap.inventory = res.slots
    this.bodyKeyTaken = true
    if (this.bodyKeyMesh) this.bodyKeyMesh.visible = false
    const beats = this.snap.events?.beats
    if (beats && !beats.includes('slag_key')) beats.push('slag_key')
    this.audio.play('key')
    this.say('Nøglen passer i døren.')
    this.refreshObjective()
  }

  private stepSheet(dt: number): void {
    if (this.bodyLid && this.bodyLidU >= 0 && this.bodyLidU < 1) {
      this.bodyLidU = Math.min(1, this.bodyLidU + dt / 0.7)
      const u = 1 - Math.pow(1 - this.bodyLidU, 3)
      this.bodyLid.rotation.x = -u * 1.35
    }
    const beats = this.snap.events?.beats
    const sheet = this.sheetCloth
    if (sheet && this.sheetU < 0 && beats?.includes('slag_sheet')) {
      this.placeSheet(1)
    }
    if (sheet && this.sheetU >= 0 && this.sheetU < 1) {
      this.sheetU = Math.min(1, this.sheetU + dt / 1.7)
      this.placeSheet(this.sheetU)
      if (this.sheetU >= 1) {
        if (beats && !beats.includes('slag_sheet')) beats.push('slag_sheet')
        this.refreshObjective()
        this.say('Tallet står på maven.')
      }
    }
    if (this.hangFallIn > 0) this.hangFallIn = Math.max(0, this.hangFallIn - dt)
    this.stepCorpse(dt)
  }

  /** Pulls the linen toward the feet so it folds there instead of sliding off as a board. */
  private placeSheet(t: number): void {
    const sheet = this.sheetCloth
    if (!sheet) return
    const u = t * t * (3 - 2 * t)
    const scale = 1 - u * 0.78
    sheet.scale.x = scale
    sheet.position.x = 0.92 - 0.86 * scale
    sheet.position.y = 0.9 + u * 0.05
    if (this.sheetMark) this.sheetMark.visible = u > 0.5
  }

  /** After the sheet is off, looking at the number makes him sit up once, then lie still. */
  private stepCorpse(dt: number): void {
    if (this.corpseSit === 'done') return
    const upper = this.corpseUpper
    if (!upper) return
    const beats = this.snap.events?.beats ?? []
    if (!beats.includes('slag_sheet')) return
    if (this.corpseSit === 'off') {
      const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
      const mark = this.sheetMark
      if (!mark) return
      mark.updateWorldMatrix(true, false)
      const spot = mark.getWorldPosition(new THREE.Vector3())
      const dx = spot.x - this.camera.position.x
      const dy = spot.y - this.camera.position.y
      const dz = spot.z - this.camera.position.z
      const dist = Math.hypot(dx, dy, dz) || 1
      const dot = (this.camDir.x * dx + this.camDir.y * dy + this.camDir.z * dz) / dist
      if (here?.id === 'slagterum' && dot > 0.9 && dist < 2.1) this.corpseLook += dt
      else this.corpseLook = 0
      if (this.corpseLook < 1) return
      if (this.hangPhase === 'off') {
        this.beginHang()
        this.hangFallIn = 2
      }
      this.corpseSit = 'up'
      this.corpseSitT = 0
      this.audio.playClip('hangDrop', { x: 40.2, y: 1.15, z: 7.55 }, 1)
    }
    this.corpseSitT += dt
    const rise = 0.22
    const hold = 0.4
    const fall = 0.5
    const lean = -1.15
    if (this.corpseSit === 'up') {
      const u = Math.min(1, this.corpseSitT / rise)
      upper.rotation.z = lean * u * u
      if (u >= 1) {
        this.corpseSit = 'hold'
        this.corpseSitT = 0
      }
      return
    }
    if (this.corpseSit === 'hold') {
      upper.rotation.z = lean
      if (this.corpseSitT >= hold) {
        this.corpseSit = 'down'
        this.corpseSitT = 0
      }
      return
    }
    const u = Math.min(1, this.corpseSitT / fall)
    upper.rotation.z = lean * (1 - u * u)
    if (u >= 1) {
      upper.rotation.z = 0
      this.corpseSit = 'done'
    }
  }

  /** The hanged man waits at the top of the ground-floor stairs. */
  private mountStairFigure(): void {
    const made = buildHanged()
    const fig = made.body
    fig.name = 'stair-man'
    fig.visible = true
    fig.position.set(52.02, FLOOR_Y[1] + 1.28, 5.72)
    fig.rotation.set(0, Math.PI, 0)
    fig.traverse((obj) => {
      obj.castShadow = false
      const mesh = obj as THREE.Mesh
      if (mesh.geometry instanceof THREE.TorusGeometry) mesh.visible = false
    })
    const head = fig.getObjectByName('hang-head')
    if (head) head.rotation.z = 0.08
    made.rope.visible = false
    this.scene.add(fig)
    this.stairFig = fig
  }

  private stepStairGrin(dt: number): void {
    const fig = this.stairFig
    if (!fig || this.stairPhase === 'gone') return
    if (this.stairPhase === 'run') {
      const target = this.stairPath[this.stairPathI]
      if (!target) {
        fig.visible = false
        this.stairPhase = 'gone'
        this.desired.set('door_pers_trappe', 0)
        return
      }
      const dx = target.x - fig.position.x
      const dy = target.y - fig.position.y
      const dz = target.z - fig.position.z
      const dist = Math.hypot(dx, dz) || 0.001
      const step = Math.min(dist, 7.2 * dt)
      fig.position.x += (dx / dist) * step
      fig.position.z += (dz / dist) * step
      fig.position.y += dy * Math.min(1, step / dist)
      fig.rotation.y = Math.atan2(dx, dz)
      if (fig.position.x < 48.4) this.desired.set('door_pers_trappe', 1)
      if (dist < 0.2) this.stairPathI += 1
      return
    }
    if (this.stairPhase === 'cue') {
      const mouth = { x: fig.position.x, y: fig.position.y + 0.15, z: fig.position.z }
      this.audio.tickBodyCry(mouth)
      this.stairLook += dt
      if (this.stairLook < 2) return
      this.audio.stopLeftCry()
      this.beginStairRun()
      return
    }
    if (!this.atStairOverview()) return
    const mouth = { x: fig.position.x, y: fig.position.y + 0.2, z: fig.position.z }
    this.audio.playClip('stairLaugh', mouth, 1)
    this.audio.startBodyCry(mouth)
    this.stairLook = 0
    this.stairPhase = 'cue'
  }

  /** The foot of the lower flight, where the whole stair fills the view. */
  private atStairOverview(): boolean {
    const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (here?.id !== 'trappe0' || this.sim.y > 1.35) return false
    if (this.sim.x < 50.5 || this.sim.x > 53.55 || this.sim.z < 0.2 || this.sim.z > 2.35) return false
    const fig = this.stairFig
    if (!fig) return false
    const dx = fig.position.x - this.camera.position.x
    const dy = fig.position.y - this.camera.position.y
    const dz = fig.position.z - this.camera.position.z
    const dist = Math.hypot(dx, dy, dz) || 1
    const dot = (this.camDir.x * dx + this.camDir.y * dy + this.camDir.z * dz) / dist
    return dot > 0.42
  }

  private beginStairRun(): void {
    const neck = FLOOR_Y[1] + 1.28
    this.stairPath = [
      new THREE.Vector3(52.02, neck, 6.35),
      new THREE.Vector3(49.15, neck, 6.05),
      new THREE.Vector3(46.4, neck, 6.3),
      new THREE.Vector3(42.6, neck, 8.8),
    ]
    this.stairPathI = 0
    this.stairPhase = 'run'
  }

  private slamEntered(from: string, to: string): void {
    const door = this.world.doors.find((item) =>
      item.kind === 'door' && ((item.a === from && item.b === to) || (item.a === to && item.b === from)),
    )
    if (!door) return
    if (this.pendingSlam?.id === door.id && this.pendingSlam.at >= 0) return
    this.pendingSlam = { id: door.id, room: to, at: -1 }
  }

  /** The two seconds start only once the player is clear of the doorway. */
  private stepPendingSlam(): void {
    const pending = this.pendingSlam
    if (!pending) return
    const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (!here || here.id !== pending.room) {
      this.pendingSlam = null
      return
    }
    const door = this.world.doors.find((item) => item.id === pending.id)
    if (!door) {
      this.pendingSlam = null
      return
    }
    const px = door.axis === 'x' ? door.coord : door.center
    const pz = door.axis === 'x' ? door.center : door.coord
    const dist = Math.hypot(this.sim.x - px, this.sim.z - pz)
    if (dist < 1.15) {
      pending.at = -1
      return
    }
    if (pending.at < 0) pending.at = this.snap.playTime + 2
    if (this.snap.playTime < pending.at) return
    this.pendingSlam = null
    if (dist > 0.9) this.slamDoor(door.id)
  }

  /** A flat square on the reception floor, and the monitor on the west wall. */
  private mountWatch(): void {
    const floorMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      polygonOffset: true,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    })
    const mark = new THREE.Group()
    // The floor slab tops out at y 0.10, so the mark has to sit above it.
    mark.position.set(this.watchStand.x, 0.12, this.watchStand.z)
    const rim = new THREE.Mesh(
      new THREE.PlaneGeometry(1.85, 1.85),
      new THREE.MeshBasicMaterial({ color: '#1c140e' }),
    )
    rim.rotation.x = -Math.PI / 2
    rim.position.y = -0.012
    const square = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.5), floorMat)
    square.rotation.x = -Math.PI / 2
    square.renderOrder = 2
    mark.add(rim, square)
    mark.visible = false
    this.scene.add(mark)
    this.watchMark = mark

    const video = document.createElement('video')
    video.src = import.meta.env.BASE_URL + 'video/frederik-the-g.mp4'
    video.preload = 'auto'
    video.playsInline = true
    video.setAttribute('playsinline', '')
    video.volume = 1
    video.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none'
    document.body.appendChild(video)
    video.addEventListener('loadedmetadata', () => this.fitTape())
    video.addEventListener('ended', () => this.finishTape())
    this.tapeVideo = video

    const tex = new THREE.VideoTexture(video)
    tex.colorSpace = THREE.SRGBColorSpace
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }),
    )
    screen.position.z = 0.061
    screen.visible = false
    const bezel = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 0.105),
      new THREE.MeshStandardMaterial({ color: '#242523', roughness: 0.65, metalness: 0.55 }),
    )
    const group = new THREE.Group()
    group.position.set(0.16, 1.78, this.watchStand.z)
    group.rotation.y = Math.PI / 2
    const caption = this.tapeLabel()
    group.add(bezel, screen, caption)
    group.visible = false
    this.scene.add(group)
    this.tapeGroup = group
    this.tapeScreen = screen
    this.tapeBezel = bezel
    this.tapeCaption = caption
    this.fitTape()
  }

  private tapeLabel(): THREE.Mesh {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 230
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#171918'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#a28b69'
      ctx.lineWidth = 3
      ctx.strokeRect(12, 12, 1000, 206)
      ctx.fillStyle = '#bfaa87'
      ctx.font = '500 34px sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('SKT. AGNES  /  OVERVÅGNING', 512, 62)
      ctx.fillStyle = '#f4e7d2'
      ctx.font = '500 66px Georgia, serif'
      ctx.fillText('Frederik på fri fod', 512, 145)
    }
    const map = new THREE.CanvasTexture(canvas)
    map.colorSpace = THREE.SRGBColorSpace
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map, toneMapped: false }),
    )
    mesh.visible = false
    mesh.name = 'tape-caption'
    return mesh
  }

  private fitTape(): void {
    const screen = this.tapeScreen
    const bezel = this.tapeBezel
    const video = this.tapeVideo
    if (!screen || !bezel) return
    const aspect = video && video.videoWidth > 0 ? video.videoWidth / video.videoHeight : 16 / 9
    let height = 2.25
    let width = height * aspect
    if (width > 3.7) {
      width = 3.7
      height = width / aspect
    }
    if (height > 2.45) {
      height = 2.45
      width = height * aspect
    }
    screen.scale.set(width, height, 1)
    bezel.scale.set(width + 0.14, height + 0.14, 1)
    if (this.tapeCaption) {
      const labelWidth = Math.max(1.05, width + 0.14)
      const labelHeight = labelWidth * 230 / 1024
      this.tapeCaption.scale.set(labelWidth, labelHeight, 1)
      this.tapeCaption.position.set(0, -(height / 2) - 0.10 - labelHeight / 2, 0.061)
    }
  }

  private resetWatch(): void {
    this.watchPhase = 'off'
    this.watchDone = false
    this.watchLeft = 3
    if (this.watchMark) this.watchMark.visible = false
    if (this.tapeScreen) this.tapeScreen.visible = false
    if (this.tapeCaption) this.tapeCaption.visible = false
    if (this.tapeGroup) this.tapeGroup.visible = false
    if (this.tapeVideo) {
      this.tapeVideo.pause()
      try { this.tapeVideo.currentTime = 0 } catch { /* not loaded yet */ }
    }
    this.ui.watchAsk(false)
    this.ui.watchGuide('', null, null)
    this.ui.cinematic(this.introTime >= 0)
  }

  private openWatchAsk(): void {
    if (this.watchDone || this.watchPhase === 'ask') return
    this.stopDoorWeep()
    this.watchPhase = 'ask'
    this.input.unlock()
    this.ui.cinematic(true)
    this.ui.watchAsk(true)
    this.ui.watchGuide('', null, null)
    this.audio.play('paper', undefined, { volume: 0.32 })
  }

  private declineWatch(): void {
    if (this.watchPhase !== 'ask') return
    this.watchPhase = 'off'
    this.ui.watchAsk(false)
    this.ui.cinematic(false)
    if (this.mode === 'playing' && this.introTime < 0 && !this.testMode) this.input.lock()
  }

  private acceptWatch(): void {
    if (this.watchPhase !== 'ask') return
    this.watchPhase = 'seek'
    this.watchLeft = 3
    this.ui.watchAsk(false)
    this.ui.cinematic(false)
    if (this.watchMark) this.watchMark.visible = true
    if (this.tapeGroup) this.tapeGroup.visible = true
    if (this.tapeScreen) this.tapeScreen.visible = false
    const video = this.tapeVideo
    if (video) {
      video.muted = false
      video.volume = 0
      void video.play().then(() => {
        if (this.watchPhase === 'seek') {
          try { video.currentTime = 0 } catch { /* metadata still loading */ }
        }
      }).catch(() => undefined)
    }
    if (this.mode === 'playing' && !this.testMode) this.input.lock()
  }

  private stepWatch(dt: number): void {
    if (this.watchPhase !== 'seek') return
    const video = this.tapeVideo
    if (video && !video.paused && video.currentTime > 0.05) {
      try { video.currentTime = 0 } catch { /* keeps the clip ready without playing out loud */ }
    }
    const inside = Math.abs(this.sim.x - this.watchStand.x) < 0.72 && Math.abs(this.sim.z - this.watchStand.z) < 0.72
    if (inside) {
      this.watchLeft = Math.max(0, this.watchLeft - dt)
      const shown = Math.max(1, Math.ceil(this.watchLeft))
      this.ui.watchGuide('', null, this.watchLeft <= 0 ? null : shown)
      if (this.watchLeft <= 0) this.startTape()
      return
    }
    this.watchLeft = 3
    const fx = Math.sin(this.sim.yaw)
    const fz = Math.cos(this.sim.yaw)
    const rx = Math.cos(this.sim.yaw)
    const rz = -Math.sin(this.sim.yaw)
    const tx = this.watchStand.x - this.sim.x
    const tz = this.watchStand.z - this.sim.z
    const arrow = Math.atan2(tx * rx + tz * rz, tx * fx + tz * fz) * 180 / Math.PI
    this.ui.watchGuide('Følg pilen, og stil dig i den hvide firkant.', arrow, null)
  }

  private startTape(): void {
    if (this.watchPhase !== 'seek') return
    this.watchPhase = 'play'
    this.sim.yaw = this.watchYaw
    this.sim.pitch = 0
    this.ui.watchGuide('', null, null)
    if (this.watchMark) this.watchMark.visible = false
    if (this.tapeScreen) this.tapeScreen.visible = true
    if (this.tapeCaption) this.tapeCaption.visible = true
    const video = this.tapeVideo
    if (!video) {
      this.finishTape()
      return
    }
    video.muted = false
    video.volume = 1
    try { video.currentTime = 0 } catch { /* starts when the file is ready */ }
    this.audio.duck(true)
    void video.play().catch(() => {
      this.say('Båndet ville ikke starte.')
      this.finishTape()
    })
  }

  private finishTape(): void {
    if (this.watchPhase !== 'play' || this.watchDone) return
    this.watchPhase = 'fade'
    this.watchLeft = 0.55
    this.ui.watchGuide('', null, null)
    const mat = this.tapeScreen?.material
    if (mat instanceof THREE.MeshBasicMaterial) {
      mat.transparent = true
      mat.opacity = 1
    }
  }

  /** After the picture fades: a creaking door, a short quiet, then the drop. The player stays still. */
  private stepWatchAfter(dt: number): void {
    if (this.watchPhase === 'fade') {
      this.watchLeft = Math.max(0, this.watchLeft - dt)
      const left = this.watchLeft / 0.55
      const mat = this.tapeScreen?.material
      if (mat instanceof THREE.MeshBasicMaterial) mat.opacity = left
      if (this.tapeVideo) this.tapeVideo.volume = left
      if (this.watchLeft > 0) return
      if (this.tapeCaption) this.tapeCaption.visible = false
      if (this.tapeGroup) this.tapeGroup.visible = false
      if (this.tapeVideo) this.tapeVideo.pause()
      this.watchPhase = 'creak'
      this.watchLeft = 0.7
      return
    }
    if (this.watchPhase === 'creak') {
      this.watchLeft = Math.max(0, this.watchLeft - dt)
      if (this.watchLeft > 0) return
      const fx = Math.sin(this.sim.yaw)
      const fz = Math.cos(this.sim.yaw)
      const at = { x: this.sim.x - fx * 0.8, y: this.sim.y + 1.3, z: this.sim.z - fz * 0.8 }
      if (!this.audio.playFading('creakDoor', at, 1.25, 3.4, 1.2, true)) {
        this.creakTries += 1
        if (this.creakTries < 10) return
      }
      this.creakTries = 0
      this.audio.duck(false)
      this.audio.hush(3)
      this.watchPhase = 'quiet'
      this.watchLeft = 3.4 + 1.2 + 0.45
      return
    }
    if (this.watchPhase === 'quiet') {
      this.watchLeft = Math.max(0, this.watchLeft - dt)
      if (this.watchLeft > 0) return
      this.beginDoorHang()
      return
    }
    if (this.watchPhase === 'scare') this.stepDoorHang(dt)
    else if (this.watchPhase === 'hold') {
      this.watchLeft = Math.max(0, this.watchLeft - dt)
      if (this.watchLeft === 0) this.releaseWatch()
    }
  }

  /** One spot in front of the mouse, kept for the whole drop. */
  private placeDoorHangInFront(): void {
    const fx = Math.sin(this.sim.yaw)
    const fz = Math.cos(this.sim.yaw)
    this.doorHangX = Math.min(11.05, Math.max(0.95, this.sim.x + fx * 1.7))
    this.doorHangZ = Math.min(11.05, Math.max(0.95, this.sim.z + fz * 1.7))
  }

  private beginDoorHang(): void {
    this.placeDoorHangInFront()
    this.doorHangBang = false
    this.scareDim = 1
    this.watchPhase = 'scare'
    this.watchLeft = 0
    if (this.doorHangBody) {
      this.doorHangBody.visible = true
      this.doorHangBody.position.set(this.doorHangX, 3.15, this.doorHangZ)
      this.doorHangBody.rotation.y = Math.atan2(this.sim.x - this.doorHangX, this.sim.z - this.doorHangZ)
      const head = this.doorHangBody.getObjectByName('hang-head')
      if (head) head.rotation.z = 0.42
    }
    if (this.doorHangRope) this.doorHangRope.visible = true
  }

  /** The room 4 drop, in front of the player. The mouse can look. The body stays put. */
  private stepDoorHang(dt: number): void {
    if (!this.doorHangBody || !this.doorHangRope) return
    this.watchLeft += dt
    const body = this.doorHangBody
    const rope = this.doorHangRope
    const fall = 0.18
    const start = 3.15
    const end = 1.84
    let neck = end
    if (this.watchLeft < fall) {
      const u = this.watchLeft / fall
      neck = start + (end - start) * u * u * u
    } else if (!this.doorHangBang) {
      this.doorHangBang = true
      this.audio.play('doorSlam', { x: this.doorHangX, y: 1.2, z: this.doorHangZ }, { volume: 1.6 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.55)
    }
    body.position.set(this.doorHangX, neck, this.doorHangZ)
    const length = Math.max(0.25, 3.42 - neck)
    rope.visible = true
    rope.scale.set(1, length, 1)
    rope.position.set(this.doorHangX, neck + length / 2, this.doorHangZ)
    if (!this.doorHangBang) return
    this.audio.playClip('hangDrop', { x: this.doorHangX, y: neck, z: this.doorHangZ }, 1)
    this.releaseWatch()
  }

  private releaseWatch(): void {
    this.watchDone = true
    this.watchPhase = 'off'
    this.watchLeft = 3
    this.hangChase = 'wait'
    this.hangChaseT = 0
    this.hangChaseSound = false
    this.audio.duck(this.mode !== 'playing' && this.mode !== 'menu')
    this.say('Gå hen til døren.')
    this.refreshObjective()
  }

  private markRecDoor(): void {
    if (this.snap.readIds.includes('rec_door')) return
    this.snap.readIds.push('rec_door')
    const beats = this.snap.events?.beats
    if (beats && !beats.includes('rec_door')) beats.push('rec_door')
    this.refreshObjective()
  }

  /** After the drop stays put, the sprint starts just before the door will open. */
  private stepHangChase(dt: number): void {
    if (this.hangChase === 'off' || this.hangChase === 'done' || !this.hangRunner) return
    const door = this.world.doors.find((item) => item.id === 'door_rec_pat')
    if (!door) return
    const at = this.doorPos(door)
    if (this.hangChase === 'wait') {
      const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
      if (here?.id !== 'reception') return
      if (Math.hypot(this.sim.x - at.x, this.sim.z - at.z) > 2.7) return
      this.beginHangChase(at.x, at.z)
      return
    }
    this.advanceHangChase(dt)
  }

  private beginHangChase(doorX: number, doorZ: number): void {
    this.hangChase = 'behind'
    this.hangChaseT = 0
    if (!this.hangRunner) return
    this.hangRunner.visible = false
    this.hangRunner.scale.setScalar(1)
    this.hangRunner.position.set(this.doorHangX, 1.38, this.doorHangZ)
    this.hangRunner.rotation.y = Math.atan2(this.sim.x - this.doorHangX, this.sim.z - this.doorHangZ)
    this.hangPath = [
      new THREE.Vector3(this.sim.x, 1.38, this.sim.z),
      new THREE.Vector3(doorX + 0.35, 1.38, doorZ),
      new THREE.Vector3(15.4, 1.38, doorZ),
      new THREE.Vector3(18.6, 1.38, 8.4),
    ]
    this.hangPathI = 0
    this.hangAim = false
    const fromHim = { x: this.doorHangX, y: 0.3, z: this.doorHangZ }
    this.hangChaseSound = this.audio.playChaseSteps(fromHim, false)
    this.audio.hush(3.2)
  }

  private aimAtHangRunner(): void {
    const runner = this.hangRunner
    if (!runner) return
    const dx = runner.position.x - this.sim.x
    const dz = runner.position.z - this.sim.z
    const dist = Math.hypot(dx, dz) || 0.001
    this.sim.yaw = Math.atan2(dx, dz)
    const eye = this.sim.y + 1.62
    this.sim.pitch = Math.max(-0.35, Math.min(0.2, Math.atan2(1.48 - eye, dist)))
  }

  private advanceHangChase(dt: number): void {
    const runner = this.hangRunner
    if (!runner || this.hangChase === 'done') return
    const dx = this.sim.x - runner.position.x
    const dz = this.sim.z - runner.position.z
    const dist = Math.hypot(dx, dz) || 0.001
    if (this.hangChase === 'behind') {
      this.hangChaseT += dt
      const fromHim = { x: this.doorHangX, y: 0.3, z: this.doorHangZ }
      if (!this.hangChaseSound) this.hangChaseSound = this.audio.playChaseSteps(fromHim, false)
      this.audio.followChase(fromHim)
      if (this.hangChaseT >= 1.5) {
        this.hangChase = 'run'
        this.hangChaseT = 0
        this.hangRoared = false
        if (this.doorHangBody) this.doorHangBody.visible = false
        if (this.doorHangRope) this.doorHangRope.visible = false
        runner.position.set(this.doorHangX, 1.38, this.doorHangZ)
        if (this.hangPath[0]) this.hangPath[0].set(this.sim.x, 1.38, this.sim.z)
        runner.visible = true
        this.hangAim = true
        this.aimAtHangRunner()
      }
      return
    }
    this.hangChaseT += dt
    if (this.hangChase === 'run' && !this.hangRoared) {
      this.hangRoared = true
      const at = { x: runner.position.x, y: 1.5, z: runner.position.z }
      if (!this.audio.playClip('hangScream', at, 1.8)) this.audio.play('scream', at, { volume: 1.7 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.7)
    }
    const target = this.hangPath[this.hangPathI]
    if (!target) {
      runner.visible = false
      runner.scale.setScalar(1)
      this.hangAim = false
      this.hangChase = 'done'
      this.desired.set('door_rec_pat', 0)
      return
    }
    const tx = target.x - runner.position.x
    const tz = target.z - runner.position.z
    const td = Math.hypot(tx, tz) || 0.001
    const speed = 13.5
    const step = Math.min(td, speed * dt)
    runner.position.x += (tx / td) * step
    runner.position.z += (tz / td) * step
    runner.position.y = 1.38 + Math.abs(Math.sin((this.hangChaseT * speed / 1.2) * Math.PI)) * 0.07
    runner.scale.setScalar(this.hangPathI === 0 ? 1.12 : 1)
    if (td < 0.22) {
      this.hangPathI += 1
      if (this.hangPathI === 1) this.desired.set('door_rec_pat', 1)
      if (this.hangPathI === 2) this.slamDoor('door_rec_pat')
    }
    this.hangAim = this.hangPathI === 0 && dist < 3.4
    runner.visible = true
    runner.rotation.y = Math.atan2(tx, tz)
    this.audio.followChase({ x: runner.position.x, y: 0.3, z: runner.position.z })
  }

  /** Five seconds after the butcher room, a figure drops on a short rope and stays there. */
  private beginHang(): void {
    const fx = Math.sin(this.sim.yaw)
    const fz = Math.cos(this.sim.yaw)
    this.hangX = Math.min(47.15, Math.max(36.85, this.sim.x + fx * 1.5))
    this.hangZ = Math.min(11.15, Math.max(0.85, this.sim.z + fz * 1.5))
    this.scareDim = 1
    this.hangPhase = 'fall'
    this.hangT = 0
    this.hangSound = 1.6
    this.hangCryIn = -1
    this.hangCryOn = false
    this.hangCryDone = false
    this.hangBang = false
    if (this.hangBody) {
      this.hangBody.visible = true
      this.hangBody.position.set(this.hangX, 3.15, this.hangZ)
      this.hangBody.rotation.y = Math.atan2(this.sim.x - this.hangX, this.sim.z - this.hangZ)
    }
    if (this.hangRope) this.hangRope.visible = true
  }

  private stepHang(dt: number): void {
    if (this.hangPhase === 'off' || !this.hangBody || !this.hangRope) return
    this.hangT += Math.max(0, dt)
    if (this.hangPhase === 'feet') {
      this.stepHangFeet()
      return
    }
    if (this.hangPhase === 'stare') {
      this.stepHangStare(dt)
      return
    }
    if (this.hangPhase === 'flee') {
      this.stepHangFlee(dt)
      return
    }
    const fall = 0.18
    const start = 3.2
    const end = 1.84
    let neck = end
    if (this.hangT < fall) {
      const u = this.hangT / fall
      neck = start + (end - start) * u * u * u
    } else if (!this.hangBang) {
      this.hangBang = true
      this.hangPhase = 'hung'
      const at = { x: this.hangX, y: 1.2, z: this.hangZ }
      this.audio.play('doorSlam', at, { volume: 1.6 })
      if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.55)
    }
    this.hangBody.position.set(this.hangX, neck, this.hangZ)
    const length = Math.max(0.25, 3.42 - neck)
    this.hangRope.visible = true
    this.hangRope.scale.set(1, length, 1)
    this.hangRope.position.set(this.hangX, neck + length / 2, this.hangZ)
    if (this.hangSound > 0) {
      this.hangSound = Math.max(0, this.hangSound - dt)
      const dur = this.audio.playClip('hangDrop', { x: this.hangX, y: neck, z: this.hangZ }, 1)
      if (dur > 0) {
        this.hangSound = 0
        this.hangCryIn = dur + 5
      } else if (this.hangSound === 0) this.hangCryIn = 5
    }
    if (this.hangCryIn >= 0 && !this.hangCryDone) {
      this.hangCryIn = Math.max(0, this.hangCryIn - dt)
      if (this.hangCryIn === 0 && this.audio.startBodyCry({ x: this.hangX, y: 1.7, z: this.hangZ })) {
        this.hangCryDone = true
        this.hangCryOn = true
      }
    }
    if (this.hangCryOn) this.audio.tickBodyCry({ x: this.hangX, y: this.hangBody.position.y + 0.15, z: this.hangZ })
    if (this.hangPhase === 'hung' && this.hangFallIn === 0) this.beginHangFeet()
  }

  /** Drops off the rope onto both feet, then faces the player. */
  private beginHangFeet(): void {
    if (!this.hangBody || !this.hangRope || this.hangPhase !== 'hung') return
    this.hangPhase = 'feet'
    this.hangT = 0
    this.hangCryOn = false
    this.audio.stopLeftCry()
    this.hangRope.visible = false
  }

  private stepHangFeet(): void {
    if (!this.hangBody) return
    const drop = 0.28
    const u = Math.min(1, this.hangT / drop)
    const ease = u * u
    const neck = 1.84 + (1.28 - 1.84) * ease
    this.hangBody.position.set(this.hangX, neck, this.hangZ)
    const head = this.hangBody.getObjectByName('hang-head')
    if (head) head.rotation.z = 0.42 * (1 - ease)
    this.faceHang()
    if (u < 1) return
    this.hangPhase = 'stare'
    this.hangRunIn = 2
    this.audio.play('doorSlam', { x: this.hangX, y: 0.35, z: this.hangZ }, { volume: 1.9, rate: 0.55 })
    if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.9)
  }

  private stepHangStare(dt: number): void {
    if (!this.hangBody) return
    this.hangBody.position.set(this.hangX, 1.28, this.hangZ)
    this.faceHang()
    if (this.hangRunIn < 0) return
    this.hangRunIn = Math.max(0, this.hangRunIn - dt)
    if (this.hangRunIn === 0) this.beginHangFlee()
  }

  /** After the stare, the figure sprints through the locked stair door and up the flight. */
  private beginHangFlee(): void {
    if (!this.hangBody || this.hangPhase === 'flee') return
    const door = this.world.doors.find((item) => item.id === 'door_slag_trappe')
    const at = door ? this.doorPos(door) : { x: 48, y: 1, z: 6 }
    this.hangPhase = 'flee'
    this.hangT = 0
    this.hangFleeI = 0
    this.hangFleeShut = false
    this.hangFlee = [
      new THREE.Vector3(at.x - 0.85, 1.28, at.z),
      new THREE.Vector3(at.x + 1.35, 1.28, at.z),
      new THREE.Vector3(52.05, 1.7, 2.4),
      new THREE.Vector3(52.05, 4.15, 5.15),
    ]
    if (this.hangRope) this.hangRope.visible = false
    this.desired.set('door_slag_trappe', 1)
    const mouth = { x: this.hangBody.position.x, y: 1.5, z: this.hangBody.position.z }
    this.audio.playClip('hangLaugh', mouth, 1.6, true)
    this.audio.hush(5)
  }

  private stepHangFlee(dt: number): void {
    if (!this.hangBody) return
    const target = this.hangFlee[this.hangFleeI]
    if (!target) {
      this.hangBody.visible = false
      this.hangPhase = 'off'
      this.desired.set('door_slag_trappe', 0)
      return
    }
    const dx = target.x - this.hangBody.position.x
    const dy = target.y - this.hangBody.position.y
    const dz = target.z - this.hangBody.position.z
    const dist = Math.hypot(dx, dz) || 0.001
    const step = Math.min(dist, 7.4 * dt)
    const x = this.hangBody.position.x + (dx / dist) * step
    const z = this.hangBody.position.z + (dz / dist) * step
    const y = this.hangBody.position.y + dy * Math.min(1, step / dist)
    this.hangBody.position.set(x, y, z)
    this.hangBody.rotation.y = Math.atan2(dx, dz)
    this.audio.moveTracked({ x, y: y + 0.3, z })
    if (!this.hangFleeShut && this.hangFleeI >= 1) {
      this.hangFleeShut = true
      this.desired.set('door_slag_trappe', 0)
      const door = this.world.doors.find((item) => item.id === 'door_slag_trappe')
      const at = door ? this.doorPos(door) : { x, y: 1, z }
      this.audio.play('doorSlam', at, { volume: 1.8 })
    }
    if (dist < 0.18) this.hangFleeI += 1
  }

  private slamDoor(id: string): void {
    const door = this.world.doors.find((item) => item.id === id)
    if (!door) return
    this.desired.set(id, 0)
    this.audio.play('doorSlam', this.doorPos(door), { volume: 1.85 })
  }

  private faceHang(): void {
    if (!this.hangBody) return
    this.hangBody.rotation.y = Math.atan2(this.sim.x - this.hangX, this.sim.z - this.hangZ)
  }

  private stepButcherCharge(dt: number): void {
    if (this.butcherRoar > 0) {
      if (!this.butcher.visible) this.butcherRoar = 0
      else {
        this.butcherRoar -= 1
        if (this.butcherRoar === 0) {
          this.audio.play('scream', { x: this.butcher.position.x, y: 1.6, z: this.butcher.position.z }, { volume: 0.72 })
          if (this.settings.cameraShake) this.trauma = Math.max(this.trauma, 0.34)
        }
      }
    }
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
    const here = roomAt(this.world, this.sim.x, this.sim.z, this.sim.y)
    if (here?.id === 'patientgang' || this.hallLive) return
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

  private buildViewmodel(): THREE.Group {
    const root = new THREE.Group()
    const housing = new THREE.Group()
    housing.name = 'TorchShell_ProceduralFallback'
    root.add(housing)
    const skin = new THREE.MeshStandardMaterial({ color: '#c9aa90', roughness: 0.72, emissive: '#3a2a22', emissiveIntensity: 0.08, depthTest: false })
    const bodyMat = new THREE.MeshStandardMaterial({ color: '#2c2a28', roughness: 0.46, metalness: 0.55, emissive: '#0c0b0a', emissiveIntensity: 0.04, depthTest: false })
    const headMat = new THREE.MeshStandardMaterial({ color: '#8d8983', roughness: 0.34, metalness: 0.72, emissive: '#1a1917', emissiveIntensity: 0.05, depthTest: false })
    const lensMat = new THREE.MeshStandardMaterial({ color: '#d9c7a4', roughness: 0.18, metalness: 0.15, emissive: '#f0ddb8', emissiveIntensity: 0.35, depthTest: false })
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
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.028, 0.22, 16), bodyMat)
    body.rotation.x = Math.PI / 2
    body.position.z = 0.01
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.029, 0.029, 0.07, 12), headMat)
    grip.rotation.x = Math.PI / 2
    grip.position.z = 0.04
    const bezel = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.032, 0.07, 20), headMat)
    bezel.rotation.x = Math.PI / 2
    bezel.position.z = -0.13
    const lens = new THREE.Mesh(new THREE.CircleGeometry(0.036, 24), lensMat)
    lens.position.z = -0.168
    lens.rotation.y = Math.PI
    const nub = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.02, 0.018), headMat)
    nub.position.set(0, 0.03, 0.02)
    const forearm = rod(v(0.12, -0.14, 0.16), v(0.038, -0.064, 0.055), 0.036, 0.025, skin)
    const palm = ball(v(0.033, -0.045, 0.045), 0.033, skin)
    palm.scale.set(0.75, 0.92, 1.45)
    housing.add(mark(body), mark(grip), mark(bezel), mark(lens), mark(nub))
    root.add(mark(forearm), mark(palm))
    // Articulated fingers curl around the compact grip instead of crossing its core.
    for (let i = 0; i < 4; i++) {
      const z = 0.083 - i * 0.021
      const radius = 0.039
      const points = Array.from({length: 7}, (_, j) => {
        const a = -0.72 - j * 0.39
        return v(Math.cos(a) * radius, Math.sin(a) * radius, z)
      })
      const finger = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 14, 0.009 - i * 0.0006, 10, false), skin)
      root.add(mark(finger), mark(ball(points[6], 0.008 - i * 0.0005, skin)))
    }
    const thumbCurve = new THREE.CatmullRomCurve3([v(0.053,-0.029,0.075),v(0.049,0.003,0.045),v(0.028,0.035,0.018),v(0.005,0.039,0.002)])
    root.add(mark(new THREE.Mesh(new THREE.TubeGeometry(thumbCurve, 18, 0.012, 12, false), skin)), mark(ball(v(0.005,0.039,0.002),0.011,skin)))
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
      housing.add(mark(rib))
    }
    for (const [z, radius, width] of [
      [-0.125, 0.036, 0.015],
      [-0.173, 0.044, 0.010],
      [-0.117, 0.031, 0.009],
    ] as const) {
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 24), collarMat)
      collar.rotation.x = Math.PI / 2
      collar.position.z = z
      housing.add(mark(collar))
    }
    const optic = new THREE.Mesh(new THREE.CircleGeometry(0.028, 24), opticMat)
    optic.rotation.y = Math.PI
    optic.position.z = -0.187
    housing.add(mark(optic))
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2
      const screw = new THREE.Mesh(new THREE.SphereGeometry(0.0032, 7, 5), gripMat)
      screw.position.set(Math.cos(angle) * 0.037, Math.sin(angle) * 0.037, -0.182)
      housing.add(mark(screw))
    }
    const strap = new THREE.Mesh(new THREE.TorusGeometry(0.037, 0.004, 5, 18), gripMat)
    strap.rotation.y = Math.PI / 2
    strap.position.set(0.002, -0.037, 0.085)
    housing.add(mark(strap))
    const wrist = rod(v(0.18, -0.19, 0.17), v(0.115, -0.145, 0.135), 0.057, 0.049, gripMat)
    root.add(mark(wrist))
    // Visually less intrusive on a 16:9 viewport; the spotlight position and
    // gameplay battery/brightness calculations remain unchanged.
    root.scale.setScalar(0.81)
    // Asynchronously replace ONLY the metal shell with a vetted local
    // scanned 3D model. Player hands, movement, light and battery are unchanged.
    // Keep the compact housing matched to the authored finger grip.
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
    return buildDoorGhost()
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

  private caption(_text: string, _seconds: number): void {
    this.ui.subtitle('')
    this.subtitleT = 0
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
    const budget = this.settings.quality === 'high' ? 1920 * 1200 : 1920 * 1080
    let pr = (this.settings.resolutionScale || 1)
    if (w * h * pr * pr > budget) pr *= Math.sqrt(budget / (w * h * pr * pr))
    const bw = Math.max(1, Math.floor(w * pr))
    const bh = Math.max(1, Math.floor(h * pr))
    this.renderer.setPixelRatio(1)
    this.renderer.setSize(bw, bh, false)
    this.post.setSize(bw, bh)
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
      const shadows = this.settings.quality !== 'low'
      this.renderer.shadowMap.enabled = shadows
      this.spot.castShadow = shadows
      for (const d of this.built.detail) d.visible = this.settings.quality !== 'low'
    }
    if (partial.fullscreen !== undefined) this.applyFullscreen()
    this.resize()
  }

  private applyFullscreen(): void {
    const want = this.settings.fullscreen
    const on = !!document.fullscreenElement
    if (want === on) {
      this.ui.fullscreenLabel(on)
      return
    }
    if (want) {
      const ask = document.documentElement.requestFullscreen?.()
      if (!ask) {
        this.revertFullscreen()
        return
      }
      ask.catch(() => this.revertFullscreen())
      return
    }
    document.exitFullscreen?.().catch(() => this.revertFullscreen())
  }

  private revertFullscreen(): void {
    this.settings = sanitizeSettings({ ...this.settings, fullscreen: !!document.fullscreenElement })
    saveSettings(this.storage, this.settings)
    this.ui.fillSettings(this.settings)
    this.resize()
  }

  private syncFullscreen(): void {
    const on = !!document.fullscreenElement
    if (on !== this.settings.fullscreen) {
      this.settings = sanitizeSettings({ ...this.settings, fullscreen: on })
      saveSettings(this.storage, this.settings)
      this.ui.fillSettings(this.settings)
    } else this.ui.fullscreenLabel(on)
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
    else if (action === 'fullscreen') this.applyPatch({ fullscreen: !document.fullscreenElement })
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
    else if (action === 'hall' && typeof extra === 'string') this.answerHall(extra)
    else if (action === 'digit' && typeof extra === 'string') {
      if (this.code.length < 4) this.code += extra
      this.paintCodePad()
    } else if (action === 'keyOk') this.submitCode()
    else if (action === 'keyClear') {
      this.code = ''
      this.paintCodePad()
    } else if (action === 'keyClose') this.setMode('playing')
    else if (action === 'patch') {
      /* unused */
    } else if (action === 'endMenu') this.setMode('menu')
    else if (action === 'endRetry') {
      const save = loadGame(this.storage, 0)
      if (save) this.applySnapshot(save.snapshot)
      else this.newGame()
    } else if (action === 'endNew') this.newGame()
    else if (action === 'watchYes') this.acceptWatch()
    else if (action === 'watchNo') this.declineWatch()
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
