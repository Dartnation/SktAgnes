import * as THREE from 'three'
import type { AudioEngine } from '../audio/AudioEngine'
import { canPlayScare, emptyScareMemory, markScare, pickDynamicScare, type ScareContext, type ScareKind, type ScareMemory } from './ScareLogic'

export interface ScareFx {
  trauma: number
  flash: number
  chroma: number
  face: number
  behind: number
  subtitle: string
}

/**
 * Separate from the monster's pathing. Visual scares are camera-space overlays
 * or short world cues; they never move the hunter through a wall.
 */
export class JumpscareEngine {
  memory: ScareMemory = emptyScareMemory()
  fx: ScareFx = { trauma: 0, flash: 0, chroma: 0, face: 0, behind: 0, subtitle: '' }
  private behindMesh: THREE.Mesh
  private kindTimer = 0
  lastKind: ScareKind | null = null
  lastAt = -999

  constructor(
    camera: THREE.Camera,
    private audio: AudioEngine,
  ) {
    this.behindMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 1.6),
      new THREE.MeshBasicMaterial({ color: '#050505', transparent: true, opacity: 0.92, depthTest: false, side: THREE.DoubleSide }),
    )
    this.behindMesh.position.set(0.15, -0.1, 0.55)
    this.behindMesh.visible = false
    this.behindMesh.renderOrder = 19
    camera.add(this.behindMesh)
  }

  trigger(kind: ScareKind, now: number, force = false): boolean {
    if (!canPlayScare(this.memory, kind, now, force)) return false
    this.memory = markScare(this.memory, kind, now)
    this.lastKind = kind
    this.lastAt = now
    this.kindTimer = kind === 'attack' || kind === 'face' ? 0.55 : 0.7
    this.fx.trauma = kind === 'fake' || kind === 'whisper' ? 0.25 : kind === 'attack' ? 1 : 0.65
    this.fx.chroma = kind === 'attack' || kind === 'face' ? 2.4 : 1
    this.fx.flash = 0 // V3: never overlay a white full-screen flash
    this.fx.face = 0 // V3: cartoon mask permanently removed
    this.fx.behind = kind === 'behind' ? 1 : 0
    this.behindMesh.visible = this.fx.behind > 0
    if (kind === 'attack' || kind === 'face') this.audio.play('scream')
    else if (kind === 'whisper' || kind === 'behind') this.audio.play('whisper')
    else if (kind === 'fake') this.audio.play('door', undefined, { volume: 0.4 })
    else this.audio.play('sting')
    if (kind === 'whisper') this.fx.subtitle = '…gå herfra…'
    if (kind === 'behind') this.fx.subtitle = '…bag dig.'
    return true
  }

  dynamic(now: number, ctx: ScareContext): ScareKind | null {
    const kind = pickDynamicScare(ctx)
    return this.trigger(kind, now) ? kind : null
  }

  dismiss(): void {
    this.kindTimer = 0
    this.fx = { trauma: 0, flash: 0, chroma: 0.35, face: 0, behind: 0, subtitle: '' }
    this.behindMesh.visible = false
  }

  update(dt: number): void {
    this.kindTimer -= dt
    this.fx.trauma = Math.max(0, this.fx.trauma - dt * 0.8)
    this.fx.flash = Math.max(0, this.fx.flash - dt * 2.5)
    this.fx.chroma = Math.max(0.35, this.fx.chroma - dt * 1.5)
    if (this.kindTimer <= 0) {
      this.fx.face = 0
      this.fx.behind = 0
        this.behindMesh.visible = false
      if (this.fx.subtitle) this.fx.subtitle = ''
    }
  }
}

