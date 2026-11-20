import { clamp, forwardFromYaw, rightFromYaw } from '../core/math'
import { mustCrouch, resolveMovement, type AABB } from '../physics/Collision'

export const PLAYER_RADIUS = 0.3
export const STAND_H = 1.7
export const CROUCH_H = 1.05
export const EYE_STAND = 1.62
export const EYE_CROUCH = 1.0

export interface SimPlayer {
  x: number
  y: number
  z: number
  yaw: number
  pitch: number
  vy: number
  vx: number
  vz: number
  stamina: number
  health: number
  crouching: boolean
  grounded: boolean
  justLanded: boolean
  battery: number
  flashlightOn: boolean
}

export interface MoveWish {
  forward: number
  strafe: number
  sprint: boolean
  crouch: boolean
  jump: boolean
  dt: number
}

export function simulatePlayer(
  p: SimPlayer,
  wish: MoveWish,
  colliders: AABB[],
  floorAt: (x: number, z: number, currentY: number) => number | null,
): SimPlayer {
  const dt = Math.min(0.05, Math.max(0, wish.dt))
  const next: SimPlayer = { ...p, justLanded: false }
  if (dt <= 0) return next

  let crouching = wish.crouch || mustCrouch(next.y, next.x, next.z, STAND_H, colliders)
  const moving = Math.abs(wish.forward) + Math.abs(wish.strafe) > 0.01
  const sprinting = wish.sprint && !crouching && next.stamina > 5 && moving && next.grounded
  const speed = crouching ? 1.18 : sprinting ? 4.35 : 2.32

  if (sprinting) next.stamina = clamp(next.stamina - 16.5 * dt, 0, 100)
  else next.stamina = clamp(next.stamina + (crouching ? 7 : 13) * dt, 0, 100)

  if (wish.jump && next.grounded && !crouching && next.stamina > 14) {
    next.vy = 4.25
    next.stamina = clamp(next.stamina - 16, 0, 100)
    next.grounded = false
  }

  const f = forwardFromYaw(next.yaw)
  const r = rightFromYaw(next.yaw)
  let wx = f.x * wish.forward + r.x * wish.strafe
  let wz = f.z * wish.forward + r.z * wish.strafe
  const wm = Math.hypot(wx, wz)
  if (wm > 1) {
    wx /= wm
    wz /= wm
  }
  const targetVx = wx * speed
  const targetVz = wz * speed
  const rate = next.grounded ? 14 : 3.2
  const blend = 1 - Math.exp(-rate * dt)
  next.vx += (targetVx - next.vx) * blend
  next.vz += (targetVz - next.vz) * blend

  const resolved = resolveMovement(
    next,
    { x: next.vx * dt, z: next.vz * dt },
    PLAYER_RADIUS,
    crouching ? CROUCH_H : STAND_H,
    crouching,
    colliders,
  )
  const floor = floorAt(resolved.x, resolved.z, next.y)
  if (floor === null) {
    next.vx = 0
    next.vz = 0
  } else {
    next.x = resolved.x
    next.z = resolved.z
    next.vx = (next.x - p.x) / dt
    next.vz = (next.z - p.z) / dt
  }

  const ground = floorAt(next.x, next.z, next.y)
  if (ground !== null) {
    next.vy -= 12.5 * dt
    next.y += next.vy * dt
    if (next.y <= ground) {
      next.justLanded = next.vy < -3.4
      next.y = ground
      next.vy = 0
      next.grounded = true
    } else {
      next.grounded = false
    }
  }

  if (mustCrouch(next.y, next.x, next.z, STAND_H, colliders)) crouching = true
  next.crouching = crouching
  next.pitch = clamp(next.pitch, -1.25, 1.25)
  return next
}

export function eyeHeight(crouching: boolean): number {
  return crouching ? EYE_CROUCH : EYE_STAND
}
