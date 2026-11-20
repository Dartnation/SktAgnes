import type { Vec3 } from '../core/math'

/** Axis-aligned box. Y is up. standOnly blocks a standing capsule but not a crouching one. */
export interface AABB {
  minX: number
  minY: number
  minZ: number
  maxX: number
  maxY: number
  maxZ: number
  standOnly?: boolean
  id?: string
  /** Removed from the world once this door id is unlocked (secret bookshelf). */
  blocksUntilUnlock?: string
}

const EPS = 1e-4

function overlapsHeight(feet: number, height: number, crouching: boolean, box: AABB): boolean {
  if (box.standOnly && crouching) return false
  const top = feet + height
  return top > box.minY + 0.02 && feet < box.maxY - 0.02
}

/**
 * Move a vertical capsule on XZ. Walls are resolved per axis so the body
 * slides and cannot tunnel through thin doors. Y is left to the caller.
 */
/** True when a standing or crouching capsule is already inside a solid. */
export function overlapsSolid(
  x: number,
  y: number,
  z: number,
  radius: number,
  height: number,
  crouching: boolean,
  boxes: AABB[],
): boolean {
  const top = y + height
  for (const box of boxes) {
    if (box.standOnly && crouching) continue
    if (top <= box.minY + 0.02 || y >= box.maxY - 0.02) continue
    if (x <= box.minX - radius || x >= box.maxX + radius) continue
    if (z <= box.minZ - radius || z >= box.maxZ + radius) continue
    return true
  }
  return false
}

export function resolveMovement(
  pos: { x: number; y: number; z: number },
  delta: { x: number; z: number },
  radius: number,
  height: number,
  crouching: boolean,
  boxes: AABB[],
): { x: number; y: number; z: number; hit: boolean } {
  let x = pos.x
  let z = pos.z
  let hit = false
  const relevant = boxes.filter((b) => overlapsHeight(pos.y, height, crouching, b))

  const move = (axis: 'x' | 'z', amount: number) => {
    if (amount === 0) return
    if (axis === 'x') x += amount
    else z += amount
    // Two passes so a corner clamp from one box is rechecked against the next.
    for (let pass = 0; pass < 2; pass++) {
      for (const box of relevant) {
        const ex0 = box.minX - radius
        const ex1 = box.maxX + radius
        const ez0 = box.minZ - radius
        const ez1 = box.maxZ + radius
        if (axis === 'x') {
          if (z <= ez0 + EPS || z >= ez1 - EPS) continue
          if (amount > 0 && pos.x <= ex0 + EPS && x > ex0) {
            x = ex0
            hit = true
          } else if (amount < 0 && pos.x >= ex1 - EPS && x < ex1) {
            x = ex1
            hit = true
          } else if (x > ex0 && x < ex1 && z > ez0 && z < ez1 && pos.x > ex0 && pos.x < ex1) {
            x = x - ex0 < ex1 - x ? ex0 : ex1
            hit = true
          }
        } else {
          if (x <= ex0 + EPS || x >= ex1 - EPS) continue
          if (amount > 0 && pos.z <= ez0 + EPS && z > ez0) {
            z = ez0
            hit = true
          } else if (amount < 0 && pos.z >= ez1 - EPS && z < ez1) {
            z = ez1
            hit = true
          } else if (z > ez0 && z < ez1 && x > ex0 && x < ex1 && pos.z > ez0 && pos.z < ez1) {
            z = z - ez0 < ez1 - z ? ez0 : ez1
            hit = true
          }
        }
      }
    }
  }

  // Use the original position as the "started outside" reference for each axis,
  // but the second axis must see the already-resolved first axis. We snapshot
  // the pre-move coordinate inside move() via pos.*, so X is resolved against
  // the original X and Z against the original Z. That is what makes sliding stable.
  move('x', delta.x)
  move('z', delta.z)
  return { x, y: pos.y, z, hit }
}

/** True when a standing capsule at this XZ would intersect a crouch-only blocker. */
export function mustCrouch(feetY: number, x: number, z: number, heightStand: number, boxes: AABB[]): boolean {
  for (const box of boxes) {
    if (!box.standOnly) continue
    if (x <= box.minX || x >= box.maxX || z <= box.minZ || z >= box.maxZ) continue
    const top = feetY + heightStand
    if (top > box.minY + 0.02 && feetY < box.maxY - 0.02) return true
  }
  return false
}

export function segmentHitsAABB(a: Vec3, b: Vec3, box: AABB): boolean {
  const dx = b.x - a.x
  const dy = b.y - a.y
  const dz = b.z - a.z
  let tMin = 0
  let tMax = 1
  const axes: [number, number, number, number][] = [
    [dx, a.x, box.minX, box.maxX],
    [dy, a.y, box.minY, box.maxY],
    [dz, a.z, box.minZ, box.maxZ],
  ]
  for (const [d, o, min, max] of axes) {
    if (Math.abs(d) < 1e-8) {
      if (o < min || o > max) return false
      continue
    }
    let t1 = (min - o) / d
    let t2 = (max - o) / d
    if (t1 > t2) {
      const s = t1
      t1 = t2
      t2 = s
    }
    if (t1 > tMin) tMin = t1
    if (t2 < tMax) tMax = t2
    if (tMin > tMax) return false
  }
  // Ignore a graze that only touches an endpoint (the viewer or the target).
  return tMax > 0.02 && tMin < 0.98
}

export function lineOfSight(a: Vec3, b: Vec3, boxes: AABB[]): boolean {
  for (const box of boxes) {
    if (segmentHitsAABB(a, b, box)) return false
  }
  return true
}

/** Ray from origin along dir (not required to be unit). Returns t or null. */
export function rayAABB(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  box: AABB,
  maxT: number,
): number | null {
  let tMin = 0
  let tMax = maxT
  const dims: [number, number, number, number][] = [
    [dx, ox, box.minX, box.maxX],
    [dy, oy, box.minY, box.maxY],
    [dz, oz, box.minZ, box.maxZ],
  ]
  for (const [d, o, min, max] of dims) {
    if (Math.abs(d) < 1e-8) {
      if (o < min || o > max) return null
      continue
    }
    let t1 = (min - o) / d
    let t2 = (max - o) / d
    if (t1 > t2) {
      const s = t1
      t1 = t2
      t2 = s
    }
    if (t1 > tMin) tMin = t1
    if (t2 < tMax) tMax = t2
    if (tMin > tMax) return null
  }
  if (tMax < 0 || tMin > maxT) return null
  const t = tMin >= 0 ? tMin : tMax
  if (t < 0 || t > maxT) return null
  return t
}

export interface InteractCandidate {
  id: string
  kind: string
  x: number
  y: number
  z: number
  radius: number
  prompt: string
}

/** Prefer whatever the crosshair ray meets; otherwise a generous forward cone. */
export function selectInteract(
  origin: Vec3,
  dir: Vec3,
  candidates: InteractCandidate[],
  maxDist = 2.35,
): InteractCandidate | null {
  let best: InteractCandidate | null = null
  let bestT = maxDist
  const dirLen = Math.hypot(dir.x, dir.y, dir.z) || 1
  const dx = dir.x / dirLen
  const dy = dir.y / dirLen
  const dz = dir.z / dirLen
  for (const c of candidates) {
    // Ray-sphere.
    const ox = c.x - origin.x
    const oy = c.y - origin.y
    const oz = c.z - origin.z
    const t = ox * dx + oy * dy + oz * dz
    if (t < 0 || t > maxDist) continue
    const cx = origin.x + dx * t
    const cy = origin.y + dy * t
    const cz = origin.z + dz * t
    const miss = Math.hypot(cx - c.x, cy - c.y, cz - c.z)
    if (miss <= c.radius && t < bestT) {
      best = c
      bestT = t
    }
  }
  if (best) return best
  let bestDot = 0.35
  let bestD = maxDist
  for (const c of candidates) {
    const ox = c.x - origin.x
    const oy = c.y - origin.y
    const oz = c.z - origin.z
    const d = Math.hypot(ox, oy, oz)
    if (d > maxDist || d < 0.001) continue
    const dot = (ox * dx + oy * dy + oz * dz) / d
    if (dot > bestDot && d < bestD + 0.4) {
      best = c
      bestDot = dot
      bestD = d
    }
  }
  return best
}
