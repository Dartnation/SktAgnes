export interface Vec3 {
  x: number
  y: number
  z: number
}

export function v3(x = 0, y = 0, z = 0): Vec3 {
  return { x, y, z }
}

export function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function distXZ(a: Vec3, b: Vec3): number {
  const dx = a.x - b.x
  const dz = a.z - b.z
  return Math.hypot(dx, dz)
}

export function dist3(a: Vec3, b: Vec3): number {
  return Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)
}

export function len2(x: number, z: number): number {
  return Math.hypot(x, z)
}

/**
 * Yaw 0 looks toward +Z. Positive yaw turns left (toward +X).
 * The camera's right, when looking +Z, is world -X.
 */
export function forwardFromYaw(yaw: number): { x: number; z: number } {
  return { x: Math.sin(yaw), z: Math.cos(yaw) }
}

export function rightFromYaw(yaw: number): { x: number; z: number } {
  return { x: -Math.cos(yaw), z: Math.sin(yaw) }
}

/**
 * Mouse right turns right. Mouse down looks down unless invertY is set.
 * Positive pitch is look-up and is applied directly as camera.rotation.x.
 */
export function applyMouseLook(
  yaw: number,
  pitch: number,
  mouseX: number,
  mouseY: number,
  invertY = false,
): { yaw: number; pitch: number } {
  const dy = invertY ? -mouseY : mouseY
  return {
    yaw: yaw - mouseX,
    pitch: clamp(pitch - dy, -1.2, 1.2),
  }
}

export function wrapPi(a: number): number {
  let x = a
  while (x > Math.PI) x -= Math.PI * 2
  while (x < -Math.PI) x += Math.PI * 2
  return x
}

export function angDiff(from: number, to: number): number {
  return wrapPi(to - from)
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function hashString(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
