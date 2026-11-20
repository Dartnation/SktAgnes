import * as THREE from 'three'

/** Screen-space specks were the white blinks. Dust is gone; lamps flicker on their own. */
export class Atmosphere {
  readonly dust: THREE.Points
  lightning = 0

  constructor(_scene: THREE.Scene, _count = 0) {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3))
    this.dust = new THREE.Points(geo, new THREE.PointsMaterial({ transparent: true, opacity: 0, size: 0.01 }))
    this.dust.visible = false
  }

  update(_dt: number, _origin: THREE.Vector3, _forward: THREE.Vector3, _flashlight: boolean): void {
    this.dust.visible = false
    this.lightning = 0
  }

  strike(): void {
    this.lightning = 0
  }
}
