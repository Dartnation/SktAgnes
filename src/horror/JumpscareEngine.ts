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
  private faceMesh: THREE.Mesh
  private behindMesh: THREE.Mesh
  private kindTimer = 0
  lastKind: ScareKind | null = null
  lastAt = -999

  constructor(
    camera: THREE.Camera,
    private audio: AudioEngine,
  ) {
    this.faceMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 1.15), new THREE.MeshBasicMaterial({ map: faceTexture(), transparent: true, depthTest: false }))
    this.faceMesh.position.set(0, 0, -0.42)
    this.faceMesh.visible = false
    this.faceMesh.renderOrder = 20
    this.behindMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 1.6),
      new THREE.MeshBasicMaterial({ color: '#050505', transparent: true, opacity: 0.92, depthTest: false, side: THREE.DoubleSide }),
    )
    this.behindMesh.position.set(0.15, -0.1, 0.55)
    this.behindMesh.visible = false
    this.behindMesh.renderOrder = 19
    camera.add(this.faceMesh)
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
    this.fx.flash = kind === 'flash' || kind === 'attack' ? 0.85 : 0.25
    this.fx.face = kind === 'face' || kind === 'attack' ? 1 : 0
    this.fx.behind = kind === 'behind' ? 1 : 0
    this.faceMesh.visible = this.fx.face > 0
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
    this.faceMesh.visible = false
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
      this.faceMesh.visible = false
      this.behindMesh.visible = false
      if (this.fx.subtitle) this.fx.subtitle = ''
    } else if (this.faceMesh.visible) {
      const k = 1 - this.kindTimer / 0.55
      const s = 0.4 + k * 1.5
      this.faceMesh.scale.set(s, s, 1)
      this.faceMesh.position.z = -0.55 + k * 0.2
    }
  }
}

function faceTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas')
  c.width = c.height = 512
  const g = c.getContext('2d')!
  g.fillStyle = '#0a0606'
  g.fillRect(0, 0, 512, 512)
  g.fillStyle = '#d7c3b2'
  g.beginPath()
  g.ellipse(256, 250, 150, 190, 0, 0, Math.PI * 2)
  g.fill()
  g.fillStyle = '#1a0a0a'
  g.beginPath()
  g.ellipse(190, 220, 28, 18, -0.2, 0, Math.PI * 2)
  g.ellipse(320, 230, 34, 16, 0.3, 0, Math.PI * 2)
  g.fill()
  g.fillStyle = '#6a1010'
  g.fillRect(168, 214, 18, 8)
  g.fillRect(308, 224, 22, 8)
  g.strokeStyle = '#4a2a28'
  g.lineWidth = 4
  g.beginPath()
  g.moveTo(200, 340)
  g.quadraticCurveTo(256, 390, 330, 330)
  g.stroke()
  g.strokeStyle = 'rgba(40,10,10,0.5)'
  g.beginPath()
  g.moveTo(256, 180)
  g.lineTo(248, 300)
  g.stroke()
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}
