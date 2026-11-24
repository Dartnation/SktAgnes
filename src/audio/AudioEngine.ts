import type { Vec3 } from '../core/math'
import { admitVoice, VOICE_LIMITS } from './voice'
import { CLIP_FILES, clipUrl, type ClipKey } from './clips'
import { fadeEdges, signalPeak, signalRms, stepMarks, trimLoop } from './steps'
import { acceptQueuedCue, clampVolume, musicBedGain, normalisedGain, normaliseTension, REFERENCE_MUSIC, REFERENCE_SFX } from './mix'

type Kind =
  | 'step'
  | 'stepMonster'
  | 'door'
  | 'doorSlam'
  | 'knock'
  | 'hideScream'
  | 'locked'
  | 'pickup'
  | 'click'
  | 'flash'
  | 'fail'
  | 'whisper'
  | 'growl'
  | 'scream'
  | 'sting'
  | 'key'
  | 'generator'
  | 'creak'
  | 'thunder'
  | 'paper'
  | 'heartbeat'
  | 'breath'
  | 'metallic'
  | 'shadow'
  | 'deep'
  | 'lampBuzz'
  | 'pipeKnock'
  | 'distantBell'
  | 'waterDrop'
  | 'airRumble'

interface PlayReq {
  kind: Kind
  pos?: Vec3
  volume: number
  occluded?: boolean
  rate?: number
  queuedAt: number
  epoch: number
}

const SCARE: ReadonlySet<string> = new Set(['scream', 'shadow', 'deep', 'metallic', 'hideScream'])
const SYNTHETIC_KINDS: Kind[] = [
  'door', 'doorSlam', 'locked', 'pickup', 'click', 'fail', 'whisper', 'growl',
  'sting', 'key', 'generator', 'creak', 'thunder', 'paper', 'heartbeat', 'breath',
  'lampBuzz', 'pipeKnock', 'distantBell', 'waterDrop', 'airRumble',
]
const RECORDED_KIND: Partial<Record<Kind, ClipKey>> = {
  step: 'step',
  stepMonster: 'step',
  flash: 'flash',
  metallic: 'metallic',
  scream: 'scream',
  shadow: 'shadow',
  deep: 'deep',
}

/**
 * The seven shipped recordings play as themselves.
 * Graph: category gain -> master -> gentle limiter -> speakers.
 * Nothing else loops. Footsteps are single slices, one per stride.
 */
export class AudioEngine {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private bedGain: GainNode | null = null
  private stepGain: GainNode | null = null
  private sfxGain: GainNode | null = null
  private scareGain: GainNode | null = null
  private analyser: AnalyserNode | null = null
  private buffers = new Map<string, AudioBuffer>()
  // Uploaded clips supplied by the player; placed under public/audio via the
  // companion sound pack (kept optional for development branches without media).
  private extras = new Map<'babyLaugh' | 'pigRhythm', AudioBuffer>()
  private extraTried = false
  private knockReady = false
  private hideReady = false
  private chaseReady = false
  private hangLoaded = false
  private chasePan: StereoPannerNode | null = null
  private chaseUntil = 0
  private heldQuiet = false
  private quietFade = 0
  private slices: AudioBuffer[] = []
  private activeSteps = new Set<{ source: AudioBufferSourceNode; amp: GainNode }>()
  private bed: AudioBufferSourceNode | null = null
  private bedRunning = false
  private bedKind: 'menu' | 'game' = 'menu'
  private bedBase = 0.4
  private gameBedBase = 0.4
  private menuBedBase = 0.4
  private prevState = ''
  private queue: PlayReq[] = []
  private epoch = 1
  private liveSources = new Set<AudioBufferSourceNode>()
  private voices: { kind: string; until: number }[] = []
  private lastPlayed = new Map<string, number>()
  private trackedPan: StereoPannerNode | null = null
  private cornerSrc: AudioBufferSourceNode | null = null
  private cornerPan: StereoPannerNode | null = null
  private cornerAmp: GainNode | null = null
  private cornerBase = 0.2
  private softSrc: AudioBufferSourceNode | null = null
  private softPan: StereoPannerNode | null = null
  private softAmp: GainNode | null = null
  private softBase = 0.08
  private trackNext = false
  private heartbeatLevel = 0
  private breathLevel = 0
  private nextHeartbeat = 0
  private nextBreath = 0
  private envZone = 'hall'
  private envSequence = 0
  private nextEnvironmentalCue = 0
  private nextElectricalCue = 0
  private humActive = false
  private humPosition: Vec3 = {x:0,y:0,z:0}
  private tension = 0
  private listenPos: Vec3 = { x: 0, y: 0, z: 0 }
  private listenRight: { x: number; z: number } = { x: -1, z: 0 }
  private moving = false
  readonly trace: string[] = []
  readonly failures: string[] = []
  masterVol = 0.8
  musicVol = 0.7
  sfxVol = 0.85
  muted = false

  ensure(): void {
    if (this.ctx) return
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) {
      this.fail('Ingen AudioContext i denne browser')
      return
    }
    const ctx = new AC()
    this.ctx = ctx
    const master = ctx.createGain()
    const bed = ctx.createGain()
    const steps = ctx.createGain()
    const sfx = ctx.createGain()
    const scare = ctx.createGain()
    const limiter = ctx.createDynamicsCompressor()
    limiter.threshold.value = -3
    limiter.knee.value = 6
    limiter.ratio.value = 12
    limiter.attack.value = 0.003
    limiter.release.value = 0.08
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 2048
    analyser.channelCount = 1
    analyser.channelCountMode = 'explicit'
    analyser.channelInterpretation = 'speakers'
    bed.connect(master)
    steps.connect(master)
    sfx.connect(master)
    scare.connect(master)
    master.connect(analyser)
    master.connect(limiter)
    limiter.connect(ctx.destination)
    this.master = master
    this.bedGain = bed
    this.stepGain = steps
    this.sfxGain = sfx
    this.scareGain = scare
    this.analyser = analyser
    this.applyGains()
    this.buffers.set('tap', tapBuffer(ctx))
    for (const kind of SYNTHETIC_KINDS) this.buffers.set(`cue:${kind}`, cueBuffer(ctx, kind))
    this.prevState = ctx.state
    ctx.onstatechange = () => {
      const now = ctx.state
      this.mark(`state:${now}`)
      if (now === 'running' && this.prevState !== 'running') {
        this.bedRunning = false
        this.ensureBed()
        this.flush()
      }
      if (now !== 'running') {
        this.bedRunning = false
        this.stopBed()
      }
      this.prevState = now
    }
    void this.loadClips()
      .then(() => this.loadHang())
      .then(() => this.loadKnock())
      .then(() => this.loadHideScream())
      .then(() => this.loadChase())
      .then(() => this.loadUserScares())
      .then(() => this.warmPeaks())
  }

  /** Scan clip levels while the loading screen is up, so a scare does not freeze to measure them. */
  private warmPeaks(): void {
    for (const buffer of this.buffers.values()) bufferPeak(buffer)
    for (const buffer of this.extras.values()) bufferPeak(buffer)
  }

  private async loadUserScares(): Promise<void> {
    if (this.extraTried || !this.ctx) return
    this.extraTried = true
    const ctx = this.ctx
    const files = {
      babyLaugh: 'kilde%20baby%20grin.mp3',
      pigRhythm: 'rytme%20griselyd.mp3',
    } as const
    await Promise.all((Object.keys(files) as Array<keyof typeof files>).map(async kind => {
      try {
        const path = import.meta.env.BASE_URL + 'audio/' + files[kind]
        const response = await fetch(path)
        if (!response.ok || !response.headers.get('content-type')?.includes('audio')) return
        const bytes = await response.arrayBuffer()
        if (bytes.byteLength < 256) return
        const decoded = await ctx.decodeAudioData(bytes)
        if (decoded.duration < 0.5) return
        this.extras.set(kind, decoded)
        this.mark('load-ok:extra:' + kind)
      } catch {
        // The separate sound pack may not be installed yet.
      }
    }))
  }

  private async loadKnock(): Promise<void> {
    const ctx = this.ctx
    if (!ctx || this.knockReady) return
    try {
      const path = import.meta.env.BASE_URL + 'audio/banker-paa-doeren.mp3'
      const response = await fetch(path)
      if (!response.ok) return
      const bytes = await response.arrayBuffer()
      if (bytes.byteLength < 1000) return
      const decoded = await ctx.decodeAudioData(bytes.slice(0))
      if (decoded.duration < 0.08) return
      this.buffers.set('knock', decoded)
      this.mark('load-ok:knock')
    } catch {
      this.mark('load-fail:knock')
    } finally {
      this.knockReady = true
    }
  }

  private async loadHideScream(): Promise<void> {
    const ctx = this.ctx
    if (!ctx || this.hideReady) return
    try {
      const path = import.meta.env.BASE_URL + 'audio/gemme-monstre-skrig.mp3'
      const response = await fetch(path)
      if (!response.ok) return
      const bytes = await response.arrayBuffer()
      if (bytes.byteLength < 1000) return
      const decoded = await ctx.decodeAudioData(bytes.slice(0))
      if (decoded.duration < 0.08) return
      this.buffers.set('hideScream', decoded)
      this.mark('load-ok:hideScream')
    } catch {
      this.mark('load-fail:hideScream')
    } finally {
      this.hideReady = true
    }
  }

  private async loadChase(): Promise<void> {
    const ctx = this.ctx
    if (!ctx || this.chaseReady) return
    try {
      const path = import.meta.env.BASE_URL + 'audio/loebe-efter-en.mp3'
      const response = await fetch(path)
      if (!response.ok) return
      const bytes = await response.arrayBuffer()
      if (bytes.byteLength < 1000) return
      const decoded = await ctx.decodeAudioData(bytes.slice(0))
      if (decoded.duration < 0.2) return
      this.buffers.set('chase', decoded)
      this.mark('load-ok:chase')
    } catch {
      this.mark('load-fail:chase')
    } finally {
      this.chaseReady = true
    }
  }

  /**
   * Footsteps from the chase recording, looped for three seconds.
   * The last hit is a door closing, so the loop stops before it.
   * Returns false when the file is not ready yet.
   */
  playChaseSteps(pos: Vec3, hardStop = false): boolean {
    this.ensure()
    const ctx = this.ctx
    const buffer = this.buffers.get('chase')
    const bus = this.sfxGain
    if (!ctx || ctx.state !== 'running' || !buffer || !bus) return false
    const t = ctx.currentTime
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.loop = true
    src.loopStart = 0
    src.loopEnd = Math.min(1.25, Math.max(0.4, buffer.duration - 0.7))
    const amp = ctx.createGain()
    const pan = ctx.createStereoPanner()
    const gain = normalisedGain(bufferPeak(buffer), 0.62)
    amp.gain.setValueAtTime(0.0001, t)
    amp.gain.linearRampToValueAtTime(Math.max(0.0001, gain * (hardStop ? 0.55 : 1)), t + 0.03)
    if (hardStop) amp.gain.linearRampToValueAtTime(Math.max(0.0001, gain), t + 2.9)
    else {
      amp.gain.setValueAtTime(Math.max(0.0001, gain), t + 2.78)
      amp.gain.linearRampToValueAtTime(0.0001, t + 3)
    }
    src.connect(amp)
    amp.connect(pan)
    pan.connect(bus)
    pan.pan.value = this.panOf(pos)
    src.start(t)
    src.stop(t + (hardStop ? 3 : 3.04))
    this.liveSources.add(src)
    this.chasePan = pan
    this.chaseUntil = t + 3
    src.onended = () => {
      this.liveSources.delete(src)
      try { src.disconnect(); amp.disconnect(); pan.disconnect() } catch { /* already stopped */ }
      if (this.chasePan === pan) this.chasePan = null
    }
    this.mark('chase')
    return true
  }

  private async loadHang(): Promise<void> {
    const ctx = this.ctx
    if (!ctx || this.hangLoaded) return
    this.hangLoaded = true
    const files = {
      hangDrop: 'haeng-fald.mp3',
      cornerCry: 'graeder-hjoerne.mp3',
      creakDoor: 'knirkende-doer.mp3',
      jumpScare: 'jumpscare.mp3',
      hangScream: 'skrig-haengt-mand.mp3',
      stairGhost: 'spoegelse-trappe.mp3',
      hangLaugh: 'griner-og-loeber.mp3',
      stairLaugh: 'trappe-grin.mp3',
    } as const
    for (const id of Object.keys(files) as Array<keyof typeof files>) {
      try {
        const response = await fetch(import.meta.env.BASE_URL + 'audio/' + files[id])
        if (!response.ok) continue
        const bytes = await response.arrayBuffer()
        if (bytes.byteLength < 1000) continue
        const decoded = await ctx.decodeAudioData(bytes.slice(0))
        if (decoded.duration < 0.2) continue
        this.buffers.set(id, decoded)
        this.mark('load-ok:' + id)
      } catch {
        this.mark('load-fail:' + id)
      }
      await new Promise((resolve) => setTimeout(resolve, 0))
    }
  }

  /** One recorded clip, placed in the room. Returns its length, or 0 until it can play. */
  playClip(id: 'hangDrop' | 'cornerCry' | 'creakDoor' | 'jumpScare' | 'hangScream' | 'stairGhost' | 'hangLaugh' | 'stairLaugh', pos: Vec3, volume = 1, track = false): number {
    this.ensure()
    const ctx = this.ctx
    const buffer = this.buffers.get(id)
    const shock = id === 'hangDrop' || id === 'jumpScare' || id === 'hangScream'
    const overhead = id === 'stairGhost'
    const bus = shock || id === 'stairLaugh' ? (this.scareGain ?? this.sfxGain) : this.sfxGain
    if (!ctx || ctx.state !== 'running' || !buffer || !bus) return 0
    const distance = Math.hypot(pos.x - this.listenPos.x, pos.z - this.listenPos.z)
    const placed = shock || overhead || id === 'stairLaugh' ? 1 : 1 / (1 + Math.max(0, distance - 0.8) * 0.16)
    const loud = id === 'stairLaugh' ? 2.15 : shock ? 1.25 : overhead ? 1.85 : id === 'hangLaugh' ? 1.35 : 0.62
    const gain = normalisedGain(bufferPeak(buffer), loud * Math.max(0, volume)) * placed
    if (shock || id === 'stairLaugh') this.shockBed(id === 'hangDrop' ? 3.2 : id === 'stairLaugh' ? 2.8 : 2.4)
    if (overhead) this.hush(Math.min(7, buffer.duration + 0.4))
    this.trackNext = track
    const played = this.fire(buffer, bus, gain, 1, pos, shock || id === 'stairLaugh', undefined, overhead ? 0.08 : 1, id === 'hangScream')
    this.trackNext = false
    if (!played) return 0
    return buffer.duration
  }

  /** Plays a clip, holds it, then turns it down. `centered` keeps it in the middle of the headphones. */
  playFading(id: 'creakDoor' | 'jumpScare', pos: Vec3, volume: number, hold: number, fade: number, centered = false): boolean {
    this.ensure()
    const ctx = this.ctx
    const buffer = this.buffers.get(id)
    const shock = id === 'jumpScare'
    const bus = shock ? (this.scareGain ?? this.sfxGain) : this.sfxGain
    if (!ctx || ctx.state !== 'running' || !buffer || !bus) return false
    if (shock) this.shockBed(3.2)
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.loop = centered && buffer.duration + 0.05 < hold + fade
    const amp = ctx.createGain()
    const distance = Math.hypot(pos.x - this.listenPos.x, pos.z - this.listenPos.z)
    const placed = shock || centered ? 1 : 1 / (1 + Math.max(0, distance - 0.8) * 0.12)
    const peak = shock ? 1.7 : 0.85
    const gain = normalisedGain(bufferPeak(buffer), peak * Math.max(0, volume)) * placed
    const t = ctx.currentTime
    const dur = src.loop ? hold + fade : Math.min(buffer.duration, hold + fade)
    const fadeFrom = Math.max(0.04, Math.min(hold, Math.max(0.04, dur * 0.5)))
    amp.gain.setValueAtTime(Math.max(0.0001, gain), t)
    amp.gain.setValueAtTime(Math.max(0.0001, gain), t + fadeFrom)
    amp.gain.linearRampToValueAtTime(0.0001, t + Math.max(fadeFrom + 0.08, dur))
    if (centered) {
      const channels = Math.max(1, buffer.numberOfChannels)
      const split = ctx.createChannelSplitter(channels)
      const mono = ctx.createGain()
      mono.gain.value = 1 / channels
      src.connect(split)
      for (let c = 0; c < channels; c++) split.connect(mono, c)
      mono.connect(amp)
      amp.connect(bus)
    } else {
      const pan = ctx.createStereoPanner()
      pan.pan.value = this.panOf(pos, 1)
      src.connect(amp)
      amp.connect(pan)
      pan.connect(bus)
    }
    src.start(t)
    src.stop(t + dur + 0.04)
    return true
  }

  /**
   * Loops the cry on the hanging figure. Turning the head moves it with that body.
   */
  startBodyCry(pos: Vec3): boolean {
    this.ensure()
    const ctx = this.ctx
    const buffer = this.buffers.get('cornerCry')
    const bus = this.sfxGain
    if (!ctx || ctx.state !== 'running' || !buffer || !bus || this.cornerSrc) return !!this.cornerSrc
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.loop = true
    const amp = ctx.createGain()
    const gain = normalisedGain(bufferPeak(buffer), 0.62 * 0.85)
    this.cornerBase = Math.max(0.0001, gain)
    amp.gain.value = this.cornerBase
    const pan = ctx.createStereoPanner()
    pan.pan.value = this.panOf(pos, 1)
    src.connect(amp)
    amp.connect(pan)
    pan.connect(bus)
    src.start(ctx.currentTime)
    src.onended = () => {
      if (this.cornerSrc === src) {
        this.cornerSrc = null
        this.cornerPan = null
        this.cornerAmp = null
      }
    }
    this.cornerSrc = src
    this.cornerPan = pan
    this.cornerAmp = amp
    this.tickBodyCry(pos)
    return true
  }

  /** Keeps the cry on the hanging figure while the player moves. */
  tickBodyCry(pos: Vec3): void {
    if (!this.cornerPan || !this.cornerAmp) return
    this.cornerPan.pan.value = this.panOf(pos, 1)
    const distance = Math.hypot(pos.x - this.listenPos.x, pos.z - this.listenPos.z)
    const placed = 1 / (1 + Math.max(0, distance - 1.1) * 0.28)
    this.cornerAmp.gain.value = Math.max(0.0001, this.cornerBase * placed)
  }

  stopLeftCry(): void {
    const src = this.cornerSrc
    this.cornerSrc = null
    this.cornerPan = null
    this.cornerAmp = null
    if (!src) return
    try { src.stop() } catch { /* already ended */ }
  }

  /**
   * A quiet, muffled cry behind a door. It stays under the knocks
   * and does not use the hanging figure's cry.
   */
  startSoftCry(pos: Vec3): boolean {
    this.ensure()
    const ctx = this.ctx
    const buffer = this.buffers.get('cornerCry')
    const bus = this.sfxGain
    if (!ctx || ctx.state !== 'running' || !buffer || !bus) return false
    if (this.softSrc && this.softPan && this.softAmp) {
      this.moveSoftCry(pos)
      return true
    }
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.loop = true
    src.playbackRate.value = 0.92
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = 980
    filter.Q.value = 0.45
    const amp = ctx.createGain()
    const gain = normalisedGain(bufferPeak(buffer), 0.34)
    this.softBase = Math.max(0.0001, gain)
    amp.gain.value = this.softBase
    const pan = ctx.createStereoPanner()
    pan.pan.value = this.panOf(pos, 0.85)
    src.connect(filter)
    filter.connect(amp)
    amp.connect(pan)
    pan.connect(bus)
    src.start(ctx.currentTime)
    src.onended = () => {
      if (this.softSrc === src) {
        this.softSrc = null
        this.softPan = null
        this.softAmp = null
      }
    }
    this.softSrc = src
    this.softPan = pan
    this.softAmp = amp
    this.moveSoftCry(pos)
    return true
  }

  moveSoftCry(pos: Vec3): void {
    if (!this.softPan || !this.softAmp) return
    this.softPan.pan.value = this.panOf(pos, 0.85)
    const distance = Math.hypot(pos.x - this.listenPos.x, pos.z - this.listenPos.z)
    const placed = 1 / (1 + Math.max(0, distance - 1.4) * 0.22)
    this.softAmp.gain.value = Math.max(0.0001, this.softBase * placed)
  }

  stopSoftCry(): void {
    const src = this.softSrc
    this.softSrc = null
    this.softPan = null
    this.softAmp = null
    if (!src) return
    try { src.stop() } catch { /* already ended */ }
  }

  /** Stops a knock or any other one-shot that is still ringing. */
  cutOneShots(): void {
    this.stopLive()
    this.chasePan = null
    this.chaseUntil = 0
  }

  /** Keeps the running steps behind the listener for as long as they play. */
  followChase(pos: Vec3): void {
    if (!this.chasePan || !this.ctx || this.ctx.currentTime > this.chaseUntil) {
      this.chasePan = null
      return
    }
    this.chasePan.pan.value = this.panOf(pos)
  }

  /** Turns the room down over a short fade, then holds the silence. */
  fadeQuiet(seconds = 0.8): void {
    const ctx = this.ctx
    if (this.heldQuiet || this.quietFade > 0) return
    if (!ctx || ctx.state !== 'running') {
      this.quiet(true)
      return
    }
    const t = ctx.currentTime
    const dur = Math.max(0.45, seconds)
    for (const node of [this.bedGain, this.sfxGain, this.stepGain]) {
      if (!node) continue
      node.gain.cancelScheduledValues(t)
      node.gain.setValueAtTime(Math.max(0.0001, node.gain.value), t)
      node.gain.linearRampToValueAtTime(0.0001, t + dur)
    }
    this.quietFade = t + dur
    this.mark('fade-quiet')
  }

  private settleFade(): void {
    if (this.quietFade <= 0 || !this.ctx || this.ctx.currentTime < this.quietFade) return
    this.quietFade = 0
    this.quiet(true)
  }

  /** Stops the bed and every one-shot. The closet scream is the only sound allowed through. */
  quiet(on: boolean): void {
    this.heldQuiet = on
    if (on) {
      this.queue = this.queue.filter((item) => item.kind === 'hideScream')
      this.stopLive()
      this.stopBed()
      this.holdAmbience(30)
      this.mark('quiet')
      return
    }
    this.quietFade = 0
    this.applyGains()
    const back = (this.ctx?.currentTime ?? 0) + 0.25
    this.nextEnvironmentalCue = back
    this.nextHeartbeat = back
    this.nextBreath = back
    this.nextElectricalCue = back
    this.ensureBed()
    this.mark('quiet-off')
  }

  /** Sparse positional accents; never a loop or a full-volume jumpscare. */
  playUserScare(kind: 'babyLaugh' | 'pigRhythm', pos: Vec3): boolean {
    const ctx = this.ctx
    const buffer = this.extras.get(kind)
    if (!ctx || ctx.state !== 'running' || !buffer) return false
    const now = performance.now() / 1000
    const gap = kind === 'babyLaugh' ? 95 : 75
    if (now - (this.lastPlayed.get(kind) ?? -999) < gap) return false
    const distance = Math.hypot(pos.x - this.listenPos.x, pos.z - this.listenPos.z)
    if (distance > 15) return false
    const distanceGain = 1 / (1 + (distance / 4) ** 2)
    const volume = (kind === 'babyLaugh' ? 0.10 : 0.12) * distanceGain
    const output = this.fire(buffer, this.sfxGain, volume, 1, pos, false)
    if (output) {
      this.lastPlayed.set(kind, now)
      this.mark('extra:' + kind)
    }
    return output
  }

  /** Call this synchronously inside the click or key that starts the game. */
  resume(): Promise<void> {
    this.ensure()
    const ctx = this.ctx
    if (!ctx) return Promise.resolve()
    const pending = ctx.resume()
    this.mark(`resume:${ctx.state}`)
    return pending.then(() => {
      this.mark(`state:${ctx.state}`)
      if (ctx.state === 'running') {
        this.ensureBed()
        this.flush()
      }
    }).catch((e: unknown) => this.fail(`Kunne ikke starte lyd: ${String(e)}`))
  }

  async loadClips(): Promise<void> {
    this.ensure()
    const ctx = this.ctx
    if (!ctx) return
    const keys = (Object.keys(CLIP_FILES) as ClipKey[]).sort((a, b) => {
      const rank = (key: ClipKey) => (key === 'menuBed' || key === 'bed' ? 0 : 1)
      return rank(a) - rank(b)
    })
    for (const key of keys) {
        const file = CLIP_FILES[key]
        try {
          const res = await fetch(clipUrl(file))
          if (!res.ok) throw new Error(`HTTP ${res.status} ${res.headers.get('content-type') ?? ''}`)
          const raw = await res.arrayBuffer()
          if (raw.byteLength < 64) throw new Error(`tom fil (${raw.byteLength} bytes)`)
          const audio = await ctx.decodeAudioData(raw.slice(0))
          if (audio.length < 32) throw new Error('decode gav stilhed')
          if (key === 'bed' || key === 'menuBed') {
            if (key === 'menuBed') this.buffers.set('menuBed', trimLoop(ctx, audio, 11, 2.2))
            else this.buffers.set('bed', audio)
            this.tuneBed()
            const active = this.bedKind === 'menu' ? 'menuBed' : 'bed'
            if (key === active) {
              this.bedRunning = false
              this.ensureBed()
            }
          } else if (key === 'step') {
            this.buffers.set('step', audio)
            this.slices = this.cutSteps(audio)
            this.mark(`steps:${this.slices.length}`)
          } else {
            this.buffers.set(key, audio)
          }
          this.mark(`load-ok:${file}`)
          this.flush()
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err)
          this.fail(`${file}: ${message}`)
          this.mark(`load-fail:${file}`)
        }
        await new Promise((resolve) => setTimeout(resolve, 0))
    }
  }

  /**
   * Movement starts and stops the step cadence.
   * The first step is immediate. Later steps come from playFootstep on each stride.
   */
  setLocomotion(moving: boolean, sprint: boolean, crouch: boolean): void {
    this.ensure()
    void sprint
    void crouch
    if (!moving) {
      if (this.moving || this.activeSteps.size > 0) {
        this.stopFootsteps()
        this.mark('step-stop')
      }
      this.moving = false
      return
    }
    if (!this.moving) {
      this.moving = true
      this.mark('step-start')
    }
    // The game emits steps from distance travelled. Never play on key-down.
  }

  private stopFootsteps(): void {
    const ctx = this.ctx
    if (!ctx) return
    const t = ctx.currentTime
    for (const step of this.activeSteps) {
      step.amp.gain.cancelScheduledValues(t)
      step.amp.gain.setValueAtTime(step.amp.gain.value, t)
      step.amp.gain.linearRampToValueAtTime(0.0001, t + 0.035)
      try { step.source.stop(t + 0.045) } catch { /* already stopped */ }
    }
    this.activeSteps.clear()
  }

  /** One recorded footfall. No loop, no pitch slide. */
  playFootstep(sprint: boolean, crouch: boolean, pos?: Vec3, volume = 1, rate?: number): void {
    if (this.heldQuiet) return
    this.ensure()
    const ctx = this.ctx
    // No delayed burst of footsteps after audio unlock or a slow decode.
    if (!ctx || ctx.state !== 'running' || !this.slices.length) return
    const slice = this.slices[Math.floor(Math.random() * this.slices.length)]
    const target = (crouch ? 0.09 : sprint ? 0.2 : 0.15) * (0.92 + Math.random() * 0.16)
    const gain = Math.min(3, normalisedGain(bufferPeak(slice), target) * Math.max(0, volume))
    const playback = rate ?? (0.97 + Math.random() * 0.06)
    if (this.fire(slice, this.stepGain, gain, playback, pos, false)) this.mark(pos ? 'stepMonster' : 'step')
  }

  play(kind: Kind, pos?: Vec3, opts?: { occluded?: boolean; volume?: number; rate?: number }): void {
    if (this.heldQuiet && kind !== 'hideScream') return
    this.ensure()
    const volume = Math.max(0, Math.min(2, opts?.volume ?? 1))
    const ctx = this.ctx
    if (kind === 'step' || kind === 'stepMonster') {
      if (kind === 'stepMonster') {
        const now = performance.now() / 1000
        if (now - (this.lastPlayed.get(kind) ?? -999) < VOICE_LIMITS.stepMonster.gap) return
        this.lastPlayed.set(kind, now)
      }
      this.playFootstep(kind === 'stepMonster', false, pos, volume)
      return
    }
    if (kind === 'knock' && !this.buffers.has('knock') && (!this.knockReady || !ctx || ctx.state !== 'running')) {
      this.enqueue({ kind, pos, volume, occluded: opts?.occluded, rate: opts?.rate })
      this.mark('defer:knock')
      return
    }
    if (kind === 'hideScream' && !this.buffers.has('hideScream') && (!this.hideReady || !ctx || ctx.state !== 'running')) {
      this.enqueue({ kind, pos, volume, occluded: opts?.occluded, rate: opts?.rate })
      this.mark('defer:hideScream')
      return
    }
    const recorded = RECORDED_KIND[kind]
    if ((recorded && !this.buffers.has(recorded)) || !ctx || ctx.state !== 'running') {
      this.enqueue({ kind, pos, volume, occluded: opts?.occluded, rate: opts?.rate })
      this.mark(`defer:${kind}`)
      return
    }
    this.emit(kind, pos, volume, !!opts?.occluded, opts?.rate ?? 1)
  }

  playTracked(kind: 'shadow' | 'deep', pos: Vec3): void {
    this.trackNext = true
    try {
      this.play(kind, pos, { volume: 1 })
    } finally {
      this.trackNext = false
    }
  }

  moveTracked(pos: Vec3): void {
    const pan = this.trackedPan
    if (!pan) return
    const side = this.panOf(pos)
    pan.pan.value = side
  }

  hush(seconds = 2): void {
    const ctx = this.ctx
    const g = this.bedGain
    if (!ctx || !g || ctx.state !== 'running') return
    const t = ctx.currentTime
    g.gain.cancelScheduledValues(t)
    g.gain.setValueAtTime(Math.max(0.0001, g.gain.value), t)
    const base = this.bedBase * this.musicVol / REFERENCE_MUSIC
    g.gain.linearRampToValueAtTime(Math.max(0, base * 0.35), t + 0.05)
    g.gain.linearRampToValueAtTime(base, t + Math.max(0.4, seconds))
    this.mark('hush')
  }

  /** Drops the bed under a shock so the hit sits clearly above the music. */
  shockBed(seconds = 2.6): void {
    const ctx = this.ctx
    const g = this.bedGain
    if (!ctx || !g || ctx.state !== 'running') return
    const t = ctx.currentTime
    const base = this.bedBase * this.musicVol / REFERENCE_MUSIC
    const hold = Math.max(0.7, seconds * 0.45)
    g.gain.cancelScheduledValues(t)
    g.gain.setValueAtTime(Math.max(0.0001, g.gain.value), t)
    g.gain.linearRampToValueAtTime(Math.max(0.0001, base * 0.06), t + 0.03)
    g.gain.setValueAtTime(Math.max(0.0001, base * 0.06), t + hold)
    g.gain.linearRampToValueAtTime(base, t + Math.max(hold + 0.4, seconds))
    this.mark('shock-bed')
  }

  setVolumes(master: number, music: number, sfx: number): void {
    this.masterVol = clampVolume(master)
    this.musicVol = clampVolume(music)
    this.sfxVol = clampVolume(sfx)
    this.tuneBed()
    this.applyGains()
  }

  duck(on: boolean): void {
    this.muted = on
    this.applyGains()
  }

  setListener(pos: Vec3, forward: Vec3, _up: Vec3): void {
    this.listenPos = pos
    const fl = Math.hypot(forward.x, forward.z) || 1
    this.listenRight = { x: -forward.z / fl, z: forward.x / fl }
  }

  /** Environmental beds respond softly to scene tension, without extra footsteps. */
  setTension(tension: number, chasing: boolean): void {
    this.tension = normaliseTension(tension, chasing)
  }

  /** Drop queued and in-flight one-shots when a save loads or a new game starts. */
  beginScene(): void {
    this.epoch += 1
    this.queue = []
    this.heldQuiet = false
    this.heartbeatLevel = 0
    this.breathLevel = 0
    this.stopLive()
    this.holdAmbience(2.4)
    this.bedRunning = false
    this.ensureBed()
    this.mark(`scene:${this.epoch}`)
  }

  /** Pause, inventory and other overlays must not finish a scare that already ended. */
  suspendTransient(): void {
    this.queue = []
    this.heartbeatLevel = 0
    this.breathLevel = 0
    this.stopLive()
    this.holdAmbience(1.6)
    this.mark('suspend')
  }

  setHeartbeat(level: number): void { this.heartbeatLevel = clampVolume(level) }

  setBreath(level: number): void { this.breathLevel = clampVolume(level) }

  setHum(on: boolean, pos: Vec3): void {
    this.humActive = on
    this.humPosition = pos
  }

  setRadio(on: boolean, pos: Vec3): void {
    void on
    void pos
  }

  private roomTones = false

  /** Room cues are placed by the game. The old zone loop would double them. */
  enableRoomTones(): void {
    this.roomTones = true
  }

  setZone(zone: string): void {
    if (zone === this.envZone) return
    this.envZone = zone
    this.nextEnvironmentalCue = (this.ctx?.currentTime ?? 0) + 3.2
  }

  update(_dt: number): void {
    this.settleFade()
    const ctx = this.ctx
    if (!ctx || ctx.state !== 'running' || this.muted) return
    const t = ctx.currentTime
    if (this.heartbeatLevel > 0.15 && t >= this.nextHeartbeat) {
      const beat = this.buffers.get('cue:heartbeat')
      if (beat) this.fire(beat, this.sfxGain, this.heartbeatLevel * 0.24, 1, undefined, false)
      this.nextHeartbeat = t + 1 - 0.3 * this.heartbeatLevel
    }
    if (this.breathLevel > 0.3 && t >= this.nextBreath) {
      const breath = this.buffers.get('cue:breath')
      if (breath) this.fire(breath, this.sfxGain, this.breathLevel * 0.25, 1, undefined, false)
      this.nextBreath = t + 3.2
    }
    // Rare low-frequency ambience is less tiring than constant rattling. Only
    // environmental audio is generated here; no player/phantom footsteps.
    if (!this.roomTones && t >= this.nextEnvironmentalCue) {
      const seq = this.envSequence++
      const zoneKinds: Record<string, Kind[]> = {
        hall: ['airRumble','pipeKnock','waterDrop'],
        corridor: ['airRumble','pipeKnock','waterDrop'],
        cellar: ['pipeKnock','waterDrop','airRumble'],
        chapel: ['distantBell','airRumble','pipeKnock'],
        upper: ['airRumble','distantBell','waterDrop'],
        dark: ['pipeKnock','airRumble','distantBell'],
        slagter: ['pipeKnock','airRumble','waterDrop'],
      }
      const options = zoneKinds[this.envZone] ?? zoneKinds.hall
      const kind = options[seq % options.length]
      this.play(kind, undefined, { volume: 0.18 + this.tension * 0.12 })
      this.nextEnvironmentalCue = t + 9.5 + (seq * 7 % 8) - this.tension * 2
    }
    if (this.humActive && t >= this.nextElectricalCue) {
      const buf = this.buffers.get('cue:lampBuzz')
      if (buf) this.fire(buf, this.sfxGain, 0.065, 0.94 + 0.1*Math.sin(t), this.humPosition, false)
      this.nextElectricalCue = t + 5.0 + (this.envSequence * 3 % 5)
    }
  }

  debug(): { state: string; voices: number; sampleRate: number; last: string[]; failures: string[] } {
    return {
      state: this.ctx?.state ?? 'none',
      voices: this.voices.filter((v) => v.until > performance.now() / 1000).length,
      sampleRate: this.ctx?.sampleRate ?? 0,
      last: this.trace.slice(-8),
      failures: this.failures.slice(),
    }
  }

  sampleMix(ms: number): Promise<{ peak: number; jumps: number; state: string }> {
    this.ensure()
    const ctx = this.ctx
    const analyser = this.analyser
    if (!ctx || !analyser) return Promise.resolve({ peak: 0, jumps: 0, state: 'none' })
    void ctx.resume()
    const data = new Float32Array(analyser.fftSize)
    let peak = 0
    let jumps = 0
    const start = performance.now()
    return new Promise((resolve) => {
      const tick = () => {
        analyser.getFloatTimeDomainData(data)
        let prev = data[0] ?? 0
        for (let i = 0; i < data.length; i++) {
          const s = data[i] ?? 0
          const a = Math.abs(s)
          if (a > peak) peak = a
          if (i > 0 && Math.abs(s - prev) > 0.5) jumps++
          prev = s
        }
        if (performance.now() - start < ms) setTimeout(tick, 16)
        else resolve({ peak, jumps, state: ctx.state })
      }
      tick()
    })
  }

  /** Bed alone, after the context is running. */
  async measureBed(): Promise<{ rms: number; peak: number; state: string }> {
    await this.resume()
    const ctx = this.ctx
    if (!ctx || ctx.state !== 'running') return { rms: 0, peak: 0, state: ctx?.state ?? 'none' }
    this.ensureBed()
    const level = await this.capture(900)
    return { ...level, state: ctx.state }
  }

  /**
   * Play one real file with the bed muted and report its level.
   * Used by the Firefox test so a silent trigger fails the build.
   */
  async audition(kind: string): Promise<{ rms: number; peak: number; state: string; played: boolean }> {
    await this.resume()
    const ctx = this.ctx
    if (!ctx || ctx.state !== 'running') {
      return { rms: 0, peak: 0, state: ctx?.state ?? 'none', played: false }
    }
    const g = this.bedGain
    const prev = this.bedBase
    if (g) {
      g.gain.cancelScheduledValues(ctx.currentTime)
      g.gain.setValueAtTime(0, ctx.currentTime)
    }
    await wait(90)
    const before = this.trace.length
    if (kind === 'step') this.playFootstep(false, false)
    else this.play(kind as Kind, undefined, { volume: 1 })
    const played = this.trace.length > before && !this.trace[this.trace.length - 1].startsWith('defer:')
    const ms = kind === 'flash' || kind === 'step' ? 550 : 1400
    const level = await this.capture(ms)
    if (g) {
      g.gain.cancelScheduledValues(ctx.currentTime)
      g.gain.setValueAtTime(prev, ctx.currentTime)
    }
    return { ...level, state: ctx.state, played }
  }

  private emit(kind: Kind, pos: Vec3 | undefined, volume: number, occluded: boolean, rate = 1): void {
    const ctx = this.ctx
    if (!ctx || ctx.state !== 'running') { this.enqueue({ kind, pos, volume, occluded, rate }); return }
    const wall = performance.now() / 1000
    this.voices = this.voices.filter(v => v.until > wall)
    const limit = VOICE_LIMITS[kind] ?? { cap: 2, gap: 0.05 }
    if (!admitVoice(this.voices.filter(v => v.kind === kind).length, limit.cap, wall - (this.lastPlayed.get(kind) ?? -999), limit.gap)) return
    const recorded = RECORDED_KIND[kind]
    const knock = kind === 'knock' ? this.buffers.get('knock') : undefined
    const hide = kind === 'hideScream' ? this.buffers.get('hideScream') ?? this.buffers.get('scream') : undefined
    const buffer = knock ?? hide ?? (recorded ? this.buffers.get(recorded) : this.buffers.get(`cue:${kind}`)) ?? (kind === 'knock' ? this.buffers.get('cue:doorSlam') : undefined) ?? this.buffers.get('tap')
    if (!buffer) return
    const scare = SCARE.has(kind)
    const shock = kind === 'scream' || kind === 'hideScream' || (kind === 'doorSlam' && volume >= 1.3)
    const loud = shock ? 1.15 : knock ? 0.62 : scare ? 0.7 : kind === 'flash' ? 0.28 : 0.12
    const span = shock ? Math.max(1, Math.min(1.5, volume)) : Math.max(0, Math.min(knock ? 1.7 : 1.4, volume))
    const target = loud * span
    let placed = 1
    if (pos && kind === 'knock') {
      const d = Math.hypot(pos.x - this.listenPos.x, pos.z - this.listenPos.z)
      placed = 1 / (1 + Math.max(0, d - 1) * 0.28)
    }
    const gain = normalisedGain(bufferPeak(buffer), target) * (occluded ? 0.65 : 1) * placed
    const cut = kind === 'knock' ? 0.46 : undefined
    if (shock) this.shockBed(kind === 'hideScream' ? 2.2 : 2.6)
    const scream = kind === 'scream' || kind === 'hideScream'
    if (this.fire(buffer, shock || scare ? this.scareGain : this.sfxGain, gain, rate, pos, shock || scare, cut, kind === 'knock' ? 1 : 0.7, scream)) {
      this.lastPlayed.set(kind, wall)
      this.voices.push({kind, until: wall + (cut ?? buffer.duration) / Math.max(0.2, rate)})
      this.mark(kind)
    }
  }

  /** Schedule at currentTime, never in the past. Returns false if the context is not running. */
  private fire(
    buffer: AudioBuffer,
    bus: GainNode | null,
    gain: number,
    rate: number,
    pos: Vec3 | undefined,
    scare: boolean,
    cut?: number,
    panLimit = 0.7,
    dark = false,
  ): boolean {
    const ctx = this.ctx
    if (!ctx || !bus || ctx.state !== 'running') return false
    const t = ctx.currentTime
    const played = dark ? rate * 0.88 : rate
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.playbackRate.value = played
    const amp = ctx.createGain()
    const dur = Math.max(0.05, Math.min(buffer.duration, cut ?? buffer.duration) / played)
    const attack = dark ? 0.028 : cut ? 0.003 : Math.min(0.012, dur * 0.1)
    const release = Math.min(0.02, dur * 0.15)
    amp.gain.setValueAtTime(0, t)
    amp.gain.linearRampToValueAtTime(Math.max(0.0001, gain), t + attack)
    amp.gain.setValueAtTime(Math.max(0.0001, gain), t + Math.max(attack, dur - release))
    amp.gain.linearRampToValueAtTime(0.0001, t + dur)
    let filter: BiquadFilterNode | null = null
    if (dark) {
      filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.value = 2100
      filter.Q.value = 0.6
      src.connect(filter)
      filter.connect(amp)
    } else src.connect(amp)
    let pan: StereoPannerNode | null = null
    if (pos) {
      pan = ctx.createStereoPanner()
      pan.pan.value = this.panOf(pos, panLimit) * (scare ? 0.55 : 1)
      amp.connect(pan)
      pan.connect(bus)
      if (this.trackNext) this.trackedPan = pan
    } else amp.connect(bus)
    if (bus === this.stepGain) this.activeSteps.add({ source: src, amp })
    this.liveSources.add(src)
    src.start(t)
    src.stop(t + dur + 0.03)
    src.onended = () => {
      this.liveSources.delete(src)
      for (const item of this.activeSteps) {
        if (item.source === src) this.activeSteps.delete(item)
      }
      try {
        src.disconnect()
        filter?.disconnect()
        amp.disconnect()
        pan?.disconnect()
      } catch {
        /* already stopped */
      }
      if (this.trackedPan === pan) this.trackedPan = null
    }
    return true
  }

  private panOf(pos: Vec3, limit = 0.7): number {
    const dx = pos.x - this.listenPos.x
    const dz = pos.z - this.listenPos.z
    const side = (dx * this.listenRight.x + dz * this.listenRight.z) / (Math.hypot(dx, dz) || 1)
    return Math.max(-limit, Math.min(limit, side))
  }

  private enqueue(req: Omit<PlayReq, 'queuedAt' | 'epoch'>): void {
    if (SCARE.has(req.kind) || req.kind === 'flash') this.queue = this.queue.filter(q => q.kind !== req.kind)
    this.queue.push({ ...req, queuedAt: performance.now(), epoch: this.epoch })
    if (this.queue.length > 8) this.queue.shift()
  }

  private flush(): void {
    if (!this.ctx || this.ctx.state !== 'running') return
    const batch = this.queue.splice(0)
    for (const req of batch) {
      if (!acceptQueuedCue(req.epoch, this.epoch, performance.now() - req.queuedAt, req.kind)) {
        this.mark(`expired:${req.kind}`)
        continue
      }
      if (req.kind === 'step' || req.kind === 'stepMonster') continue
      const key = RECORDED_KIND[req.kind]
      if (key && !this.buffers.has(key)) { this.queue.push(req); continue }
      this.emit(req.kind, req.pos, req.volume, !!req.occluded, req.rate ?? 1)
    }
  }

  private holdAmbience(seconds: number): void {
    const t = (this.ctx?.currentTime ?? 0) + Math.max(0, seconds)
    this.nextEnvironmentalCue = Math.max(this.nextEnvironmentalCue, t)
    this.nextHeartbeat = Math.max(this.nextHeartbeat, t)
    this.nextBreath = Math.max(this.nextBreath, t)
    this.nextElectricalCue = Math.max(this.nextElectricalCue, t)
  }

  private stopLive(): void {
    for (const src of this.liveSources) {
      try { src.stop() } catch { /* already ended */ }
    }
    this.liveSources.clear()
    this.activeSteps.clear()
  }

  /** The new loop stays on the title screen. The old loop is the one inside the game. */
  useMenuBed(menu: boolean): void {
    const next = menu ? 'menu' : 'game'
    const same = next === this.bedKind
    this.bedKind = next
    this.bedBase = next === 'menu' ? this.menuBedBase : this.gameBedBase
    if (same && this.bedRunning) {
      this.applyGains()
      return
    }
    this.bedRunning = false
    this.stopBed()
    this.applyGains()
    this.ensureBed()
  }

  private ensureBed(): void {
    if (this.heldQuiet || this.bedRunning) return
    const ctx = this.ctx
    const buf = this.buffers.get(this.bedKind === 'menu' ? 'menuBed' : 'bed')
    if (!ctx || ctx.state !== 'running' || !buf || !this.bedGain) return
    this.stopBed()
    const src = ctx.createBufferSource()
    src.buffer = buf
    src.loop = true
    src.connect(this.bedGain)
    src.start(ctx.currentTime)
    this.bed = src
    this.bedRunning = true
    this.mark('bed-start')
  }

  private stopBed(): void {
    if (!this.bed) return
    try {
      this.bed.stop()
    } catch {
      /* not started */
    }
    try {
      this.bed.disconnect()
    } catch {
      /* already gone */
    }
    this.bed = null
    this.bedRunning = false
  }

  private tuneBed(): void {
    const game = this.buffers.get('bed')
    if (game) this.gameBedBase = musicBedGain(bufferRms(game), bufferPeak(game)) * 0.84
    const menu = this.buffers.get('menuBed')
    if (menu) this.menuBedBase = musicBedGain(bufferRms(menu), bufferPeak(menu))
    this.bedBase = this.bedKind === 'menu' ? this.menuBedBase : this.gameBedBase
    this.applyGains()
  }

  private applyGains(): void {
    const t = this.ctx?.currentTime ?? 0
    const set = (node: GainNode | null, target: number) => {
      if (!node) return
      node.gain.cancelScheduledValues(t)
      node.gain.setTargetAtTime(target, t, 0.025)
    }
    set(this.master, this.masterVol * (this.muted ? 0.4 : 1))
    set(this.bedGain, this.bedBase * this.musicVol / REFERENCE_MUSIC)
    set(this.stepGain, this.sfxVol / REFERENCE_SFX)
    set(this.sfxGain, this.sfxVol / REFERENCE_SFX)
    set(this.scareGain, this.sfxVol / REFERENCE_SFX)
  }

  private cutSteps(buffer: AudioBuffer): AudioBuffer[] {
    const ctx = this.ctx
    if (!ctx) return []
    const mono = new Float32Array(buffer.length)
    const nch = buffer.numberOfChannels
    for (let c = 0; c < nch; c++) {
      const src = buffer.getChannelData(c)
      for (let i = 0; i < src.length; i++) mono[i] += src[i] / nch
    }
    const marks = stepMarks(mono, buffer.sampleRate)
    return marks.map((mark) => {
      const a = Math.max(0, Math.floor(mark.start * buffer.sampleRate))
      const b = Math.min(buffer.length, Math.max(a + 8, Math.floor(mark.end * buffer.sampleRate)))
      const out = ctx.createBuffer(nch, b - a, buffer.sampleRate)
      for (let c = 0; c < nch; c++) {
        const slice = out.getChannelData(c)
        buffer.copyFromChannel(slice, c, a)
        fadeEdges(slice, buffer.sampleRate, 0.008)
      }
      return out
    })
  }

  private capture(ms: number): Promise<{ rms: number; peak: number }> {
    const analyser = this.analyser
    if (!analyser) return Promise.resolve({ rms: 0, peak: 0 })
    const data = new Float32Array(analyser.fftSize)
    const start = performance.now()
    let peak = 0
    let sum = 0
    let n = 0
    return new Promise((resolve) => {
      const tick = () => {
        analyser.getFloatTimeDomainData(data)
        for (let i = 0; i < data.length; i++) {
          const s = data[i] ?? 0
          const a = Math.abs(s)
          if (a > peak) peak = a
          sum += s * s
          n++
        }
        if (performance.now() - start < ms) setTimeout(tick, 20)
        else resolve({ rms: Math.sqrt(sum / Math.max(1, n)), peak })
      }
      tick()
    })
  }

  private mark(line: string): void {
    this.trace.push(line)
    if (this.trace.length > 100) this.trace.splice(0, this.trace.length - 80)
  }

  private fail(message: string): void {
    this.failures.push(message)
    if (this.failures.length > 12) this.failures.shift()
    this.mark(`fejl:${message}`)
    console.error(`[Skt. Agnes] Lyd: ${message}`)
  }
}

const peakCache = new WeakMap<AudioBuffer, number>()

function bufferPeak(buffer: AudioBuffer): number {
  const cached = peakCache.get(buffer)
  if (cached !== undefined) return cached
  let peak = 0
  for (let c = 0; c < buffer.numberOfChannels; c++) peak = Math.max(peak, signalPeak(buffer.getChannelData(c)))
  peakCache.set(buffer, peak)
  return peak
}

function bufferRms(buffer: AudioBuffer): number {
  let rms = 0
  for (let c = 0; c < buffer.numberOfChannels; c++) rms = Math.max(rms, signalRms(buffer.getChannelData(c)))
  return rms
}

function cueBuffer(ctx: AudioContext, kind: Kind): AudioBuffer {
  const specs: Partial<Record<Kind, [number, number, number]>> = {
    door: [0.26,95,55], doorSlam: [0.46,82,38],
    locked: [0.22,220,155], pickup: [0.21,410,520],
    click: [0.10,420,280], fail: [0.21,135,65],
    whisper: [1.4,330,160], growl: [0.75,72,45],
    sting: [0.8,260,64], key: [0.18,630,740],
    generator: [1.1,54,85], creak: [0.75,130,68],
    thunder: [1.6,74,25], paper: [0.2,270,190],
    heartbeat: [0.3,58,42], breath: [1.25,185,120],
    lampBuzz: [0.54,80,97], pipeKnock: [0.72,110,48],
    distantBell: [2.2,185,169], waterDrop: [0.21,600,210],
    airRumble: [2.8,49,63],
  }
  const [duration, startHz, endHz] = specs[kind] ?? [0.1,180,180]
  const sr = ctx.sampleRate
  const len = Math.max(64, Math.floor(sr * duration))
  const buffer = ctx.createBuffer(1,len,sr)
  const data = buffer.getChannelData(0)
  let phase = 0
  for (let i = 0; i < len; i++) {
    const u = i / len
    phase += 2 * Math.PI * (startHz + (endHz - startHz) * u) / sr
    const env = Math.pow(Math.sin(Math.PI*u), 1.3)
    const pulse = kind === 'heartbeat' ? (u < 0.35 ? 1 : u > 0.48 && u < 0.78 ? 0.55 : 0) : 1
    data[i] = (Math.sin(phase) * 0.76 + Math.sin(phase*1.98)*0.18)*env*pulse*0.45
  }
  return buffer
}

function tapBuffer(ctx: AudioContext): AudioBuffer {
  const sr = ctx.sampleRate
  const len = Math.floor(sr * 0.09)
  const buf = ctx.createBuffer(1, len, sr)
  const d = buf.getChannelData(0)
  for (let i = 0; i < len; i++) {
    const env = Math.sin((Math.PI * i) / (len - 1))
    d[i] = Math.sin((2 * Math.PI * 180 * i) / sr) * env * 0.4
  }
  return buf
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
