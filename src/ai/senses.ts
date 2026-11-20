import type { Vec3 } from '../core/math'
import { lineOfSight, type AABB } from '../physics/Collision'

export type NoiseKind = 'sprint' | 'walk' | 'crouch' | 'door' | 'drop' | 'jump' | 'landing' | 'voice'

const RADIUS: Record<NoiseKind, number> = {
  sprint: 13,
  walk: 4.3,
  crouch: 1.15,
  door: 16,
  drop: 11,
  jump: 8,
  landing: 6,
  voice: 9,
}

export function noiseRadius(kind: NoiseKind): number {
  return RADIUS[kind]
}

export function noiseLoudness(kind: NoiseKind): number {
  switch (kind) {
    case 'sprint':
      return 0.92
    case 'door':
      return 0.88
    case 'drop':
      return 0.7
    case 'jump':
      return 0.58
    case 'landing':
      return 0.5
    case 'voice':
      return 0.64
    case 'walk':
      return 0.42
    case 'crouch':
      return 0.14
  }
}

/** Floors and closed doors soak up sound. 1 = clear, lower = harder to hear. */
export function hearingScale(floorDelta: number, occluded: boolean): number {
  const floorM = Math.pow(0.52, Math.abs(floorDelta))
  return floorM * (occluded ? 0.38 : 1)
}

export function canHear(
  listener: Vec3,
  source: Vec3,
  kind: NoiseKind,
  floorDelta: number,
  occluded: boolean,
): boolean {
  const reach = noiseRadius(kind) * hearingScale(floorDelta, occluded)
  const d = Math.hypot(listener.x - source.x, listener.y - source.y, listener.z - source.z)
  return d <= reach
}

export function inVisionCone(
  eye: Vec3,
  forward: { x: number; z: number },
  target: Vec3,
  cosHalfAngle: number,
  maxDist: number,
  blockers: AABB[],
): boolean {
  const dx = target.x - eye.x
  const dy = target.y - eye.y
  const dz = target.z - eye.z
  const dist = Math.hypot(dx, dy, dz)
  if (dist > maxDist) return false
  if (dist < 0.2) return true
  const hlen = Math.hypot(dx, dz) || 0.0001
  const dot = (forward.x * dx + forward.z * dz) / hlen
  if (dot < cosHalfAngle) return false
  // Steep vertical gaps (through a floor) are not "seen" unless the target is close.
  if (Math.abs(dy) > 2.6 && dist > 3.5) return false
  return lineOfSight(eye, target, blockers)
}

/** Flashlight beam striking the monster's head. */
export function beamHits(
  origin: Vec3,
  dir: Vec3,
  target: Vec3,
  cosAngle: number,
  maxDist: number,
  blockers: AABB[],
): boolean {
  const dx = target.x - origin.x
  const dy = target.y - origin.y
  const dz = target.z - origin.z
  const dist = Math.hypot(dx, dy, dz)
  if (dist > maxDist || dist < 0.05) return false
  const dlen = Math.hypot(dir.x, dir.y, dir.z) || 1
  const dot = (dir.x * dx + dir.y * dy + dir.z * dz) / (dlen * dist)
  if (dot < cosAngle) return false
  return lineOfSight(origin, target, blockers)
}
