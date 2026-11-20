import type { Vec3 } from '../core/math'
import { admitVoice, VOICE_LIMITS } from './voice'
import { CLIP_FILES, clipUrl, type ClipKey } from './clips'
import { fadeEdges, seamlessTail, signalPeak, signalRms, stepMarks } from './steps'
import { clampVolume, cueIsFresh, musicBedGain, normalisedGain, REFERENCE_MUSIC, REFERENCE_SFX } from './mix'

type Kind =
  | 'step'
  | 'stepMonster'
  | 'door'
  | 'doorSlam'
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

interface PlayReq {
  kind: Kind
  pos?: Vec3
  volume: number
  occluded?: boolean
  rate?: number
  queuedAt: number
}

const SCARE: ReadonlySet<string> = new Set(['scream', 'shadow', 'deep', 'metallic'])
const SYNTHETIC_KINDS: Kind[] = [
  'door', 'doorSlam', 'locked', 'pickup', 'click', 'fail', 'whisper', 'growl',
  'sting', 'key', 'generator', 'creak', 'thunder', 'paper', 'heartbeat', 'breath',
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
  private slices: AudioBuffer[] = []
  private bed: AudioBufferSourceNode | null = null
  private bedRunning = false
  private bedBase = 0.4
  private prevState = ''
  private queue: PlayReq[] = []
  private voices: { kind: string; until: number }[] = []
  private lastPlayed = new Map<string, number>()
  private trackedPan: StereoPannerNode | null = null
  private trackNext = false
  private heartbeatLevel = 0
  private breathLevel = 0
  private nextHeartbeat = 0
  private nextBreath = 0
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
    })
  }

  async loadClips(): Promise<void> {
    this.ensure()
    const ctx = this.ctx
    if (!ctx) return
    await Promise.all(
      (Object.keys(CLIP_FILES) as ClipKey[]).map(async (key) => {
        const file = CLIP_FILES[key]
        try {
          const res = await fetch(clipUrl(file))
          if (!res.ok) throw new Error(`HTTP ${res.status} ${res.headers.get('content-type') ?? ''}`)
          const raw = await res.arrayBuffer()
          if (raw.byteLength < 64) throw new Error(`tom fil (${raw.byteLength} bytes)`)
          const audio = await ctx.decodeAudioData(raw.slice(0))
          if (audio.length < 32) throw new Error('decode gav stilhed')
          if (key === 'bed') {
            for (let c = 0; c < audio.numberOfChannels; c++) seamlessTail(audio.getChannelData(c), audio.sampleRate)
            this.buffers.set('bed', audio)
            this.tuneBed()
            this.bedRunning = false
            this.ensureBed()
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
      }),
    )
  }

  /**
   * Movement starts and stops the step cadence.
   * The first step is immediate. Later steps come from playFootstep on each stride.
   */
  setLocomotion(moving: boolean, sprint: boolean, crouch: boolean): void {
    this.ensure()
    if (!moving) {
      if (this.moving) {
        this.moving = false
        this.mark('step-stop')
      }
      return
    }
    if (!this.moving) {
      this.moving = true
      this.mark('step-start')
      this.playFootstep(sprint, crouch)
    }
  }

  /** One recorded footfall. No loop, no pitch slide. */
  playFootstep(sprint: boolean, crouch: boolean, pos?: Vec3, volume = 1): void {
    this.ensure()
    const ctx = this.ctx
    // No delayed burst of footsteps after audio unlock or a slow decode.
    if (!ctx || ctx.state !== 'running' || !this.slices.length) return
    const slice = this.slices[Math.floor(Math.random() * this.slices.length)]
    const target = (crouch ? 0.09 : sprint ? 0.2 : 0.15) * (0.92 + Math.random() * 0.16)
    const gain = Math.min(3, normalisedGain(bufferPeak(slice), target) * Math.max(0, volume))
    const rate = 0.97 + Math.random() * 0.06
    if (this.fire(slice, this.stepGain, gain, rate, pos, false)) this.mark(pos ? 'stepMonster' : 'step')
  }

  play(kind: Kind, pos?: Vec3, opts?: { occluded?: boolean; volume?: number; rate?: number }): void {
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
    g.gain.linearRampToValueAtTime(Math.max(0.0001, this.bedBase * 0.6), t + 0.05)
    g.gain.linearRampToValueAtTime(this.bedBase, t + Math.max(0.4, seconds))
    this.mark('hush')
  }

  setVolumes(master: number, music: number, sfx: number): void {
    this.masterVol = master
    this.musicVol = music
    this.sfxVol = sfx
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

  /** Kept so the director can call in. No generated drone. */
  setTension(tension: number, chasing: boolean): void {
    void tension
    void chasing
  }

  setHeartbeat(level: number): void {
    void level
  }

  setBreath(level: number): void {
    void level
  }

  setHum(on: boolean, pos: Vec3): void {
    void on
    void pos
  }

  setRadio(on: boolean, pos: Vec3): void {
    void on
    void pos
  }

  setZone(zone: string): void {
    void zone
  }

  update(_dt: number): void {
    /* levels are set on events, not every frame */
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

  private emit(kind: Kind, pos: Vec3 | undefined, volume: number, occluded: boolean): void {
    const ctx = this.ctx
    if (!ctx || ctx.state !== 'running') {
      this.enqueue({ kind, pos, volume })
      return
    }
    const scare = SCARE.has(kind)
    const through = scare ? 1 : this.sfxVol
    if (!scare) {
      const wall = performance.now() / 1000
      this.voices = this.voices.filter((v) => v.until > wall)
      const limit = VOICE_LIMITS[kind] ?? { cap: 2, gap: 0.05 }
      const since = wall - (this.lastPlayed.get(kind) ?? -999)
      const active = this.voices.filter((v) => v.kind === kind).length
      if (!admitVoice(active, limit.cap, since, limit.gap)) return
    }
    const recorded = RECORDED_KIND[kind]
    let buffer: AudioBuffer | undefined
    if (recorded && recorded !== 'step') {
      buffer = this.buffers.get(recorded)
      if (!buffer) {
        this.enqueue({ kind, pos, volume })
        this.mark(`defer:${kind}`)
        return
      }
    } else {
      buffer = this.buffers.get('tap')
    }
    if (!buffer) {
      this.enqueue({ kind, pos, volume })
      this.fail(`ingen buffer til ${kind}`)
      return
    }
    const peak = bufferPeak(buffer)
    const bus = scare ? this.scareGain : this.sfxGain
    const target = (scare ? 0.52 : kind === 'flash' ? 0.28 : 0.12) * Math.max(0.35, Math.min(1.4, volume))
    const gain = Math.min(8, target / Math.max(0.01, peak * through * Math.max(0.2, this.masterVol)))
    const heard = this.fire(buffer, bus, gain * (occluded ? 0.8 : 1), 1, pos, scare)
    if (!scare && heard) {
      const wall = performance.now() / 1000
      this.lastPlayed.set(kind, wall)
      this.voices.push({ kind, until: wall + buffer.duration })
    }
    this.mark(kind)
  }

  /** Schedule at currentTime, never in the past. Returns false if the context is not running. */
  private fire(
    buffer: AudioBuffer,
    bus: GainNode | null,
    gain: number,
    rate: number,
    pos: Vec3 | undefined,
    scare: boolean,
  ): boolean {
    const ctx = this.ctx
    if (!ctx || !bus || ctx.state !== 'running') return false
    const t = ctx.currentTime
    const src = ctx.createBufferSource()
    src.buffer = buffer
    src.playbackRate.value = rate
    const amp = ctx.createGain()
    const dur = Math.max(0.05, buffer.duration / rate)
    const attack = Math.min(0.012, dur * 0.1)
    const release = Math.min(0.02, dur * 0.15)
    amp.gain.setValueAtTime(0, t)
    amp.gain.linearRampToValueAtTime(Math.max(0.0001, gain), t + attack)
    amp.gain.setValueAtTime(Math.max(0.0001, gain), t + Math.max(attack, dur - release))
    amp.gain.linearRampToValueAtTime(0.0001, t + dur)
    src.connect(amp)
    if (pos && !scare) {
      const pan = ctx.createStereoPanner()
      pan.pan.value = this.panOf(pos)
      amp.connect(pan)
      pan.connect(bus)
      this.lastPan = pan
    } else if (pos && scare) {
      const pan = ctx.createStereoPanner()
      pan.pan.value = this.panOf(pos) * 0.55
      amp.connect(pan)
      pan.connect(bus)
      this.lastPan = pan
    } else {
      amp.connect(bus)
    }
    src.start(t)
    src.stop(t + dur + 0.03)
    src.onended = () => {
      try {
        src.disconnect()
        amp.disconnect()
      } catch {
        /* already stopped */
      }
    }
    return true
  }

  private panOf(pos: Vec3): number {
    const dx = pos.x - this.listenPos.x
    const dz = pos.z - this.listenPos.z
    const side = (dx * this.listenRight.x + dz * this.listenRight.z) / (Math.hypot(dx, dz) || 1)
    return Math.max(-0.7, Math.min(0.7, side))
  }

  private enqueue(req: PlayReq): void {
    if (SCARE.has(req.kind) || req.kind === 'flash') this.queue = this.queue.filter((q) => q.kind !== req.kind)
    this.queue.push(req)
    if (this.queue.length > 8) this.queue.shift()
  }

  private flush(): void {
    if (!this.ctx || this.ctx.state !== 'running') return
    const batch = this.queue.splice(0)
    for (const req of batch) {
      if (req.kind === 'step' || req.kind === 'stepMonster') {
        if (!this.slices.length) {
          this.queue.push(req)
          continue
        }
        this.playFootstep(req.volume > 1, req.volume < 0.7)
        continue
      }
      const key = RECORDED_KIND[req.kind]
      if (key && key !== 'step' && !this.buffers.get(key)) {
        this.queue.push(req)
        continue
      }
      this.emit(req.kind, req.pos, req.volume, false)
    }
  }

  private ensureBed(): void {
    if (this.bedRunning) return
    const ctx = this.ctx
    const buf = this.buffers.get('bed')
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
    const buf = this.buffers.get('bed')
    if (!buf) return
    const rms = bufferRms(buf)
    const want = 0.063 * (this.musicVol / 0.7)
    let gain = want / Math.max(0.001, rms * Math.max(0.2, this.masterVol))
    const peak = bufferPeak(buf)
    if (peak * gain * this.masterVol > 0.45) gain = 0.45 / Math.max(0.001, peak * this.masterVol)
    this.bedBase = gain
    if (this.bedGain && this.ctx) {
      const t = this.ctx.currentTime
      this.bedGain.gain.cancelScheduledValues(t)
      this.bedGain.gain.setValueAtTime(gain, t)
    }
  }

  private applyGains(): void {
    const m = this.muted ? 0.4 : 1
    if (this.master) this.master.gain.value = this.masterVol * m
    if (this.stepGain) this.stepGain.gain.value = 1
    if (this.sfxGain) this.sfxGain.gain.value = 1
    if (this.scareGain) this.scareGain.gain.value = 1
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

function bufferPeak(buffer: AudioBuffer): number {
  let peak = 0
  for (let c = 0; c < buffer.numberOfChannels; c++) peak = Math.max(peak, signalPeak(buffer.getChannelData(c)))
  return peak
}

function bufferRms(buffer: AudioBuffer): number {
  let rms = 0
  for (let c = 0; c < buffer.numberOfChannels; c++) rms = Math.max(rms, signalRms(buffer.getChannelData(c)))
  return rms
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
