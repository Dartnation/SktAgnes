import type { Vec3 } from '../core/math'
import { beamHits } from './senses'
import type { AABB } from '../physics/Collision'

/**
 * The beam banishes Vogteren only when the lamp is on, the body is inside the
 * cone, and a wall does not block the ray. Any missing part leaves it in the world.
 */
export function flashlightBanishes(
  on: boolean,
  origin: Vec3,
  dir: Vec3,
  target: Vec3,
  blockers: AABB[],
): boolean {
  if (!on) return false
  return beamHits(origin, dir, target, Math.cos(0.5), 16, blockers)
}

export interface RelocateQuery {
  cells: Vec3[]
  player: Vec3
  forward: { x: number; z: number }
  recent: Vec3[]
  from: Vec3
  /** True when the player could see this point right now. */
  visible: (point: Vec3) => boolean
  rng: () => number
}

/** A cell the player cannot see, not a recent spawn, and not on top of them. */
export function pickRelocate(q: RelocateQuery): Vec3 | null {
  const options = q.cells.filter((c) => {
    const dist = Math.hypot(c.x - q.player.x, c.z - q.player.z)
    if (dist < 7 || dist > 26) return false
    if (Math.abs(c.y - q.player.y) > 5) return false
    if (q.recent.some((r) => Math.hypot(r.x - c.x, r.z - c.z) < 3.5)) return false
    if (Math.hypot(c.x - q.from.x, c.z - q.from.z) < 4) return false
    const dx = c.x - q.player.x
    const dz = c.z - q.player.z
    const h = Math.hypot(dx, dz) || 1
    const inFront = (q.forward.x * dx + q.forward.z * dz) / h > 0.2
    if (inFront && q.visible(c)) return false
    if (q.visible(c)) return false
    return true
  })
  if (!options.length) return null
  const farther = options.filter((c) => Math.hypot(c.x - q.player.x, c.z - q.player.z) > Math.hypot(q.from.x - q.player.x, q.from.z - q.player.z))
  const pool = farther.length ? farther : options
  return pool[Math.floor(q.rng() * pool.length) % pool.length]
}
