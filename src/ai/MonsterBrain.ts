import { distXZ, v3, type Vec3 } from '../core/math'

export type MonsterStateName =
  | 'Idle'
  | 'Patrol'
  | 'Investigate'
  | 'Search'
  | 'Suspicious'
  | 'Chase'
  | 'Attack'
  | 'LostPlayer'
  | 'ReturnToPatrol'

export interface MonsterBB {
  state: MonsterStateName
  stateTime: number
  waypointIndex: number
  goal: Vec3 | null
  lastSeen: Vec3 | null
  lastHeard: Vec3 | null
  suspicion: number
  attackCooldown: number
  unseenTime: number
  searchLeft: number
  blindTime: number
  hesitate: number
  speedMul: number
}

export interface SenseInput {
  dt: number
  monsterPos: Vec3
  playerPos: Vec3
  /** Clear vision cone and line of sight. Hiding players are not visible. */
  canSee: boolean
  hear: { pos: Vec3; loudness: number } | null
  flashlightHit: boolean
  distance: number
  atGoal: boolean
  hiding: boolean
  hideSpot: Vec3 | null
  holdBreath: boolean
  allowChase: boolean
  aggression: number
  rng: () => number
  waypoints: Vec3[]
}

export interface BrainResult {
  bb: MonsterBB
  speed: number
  attackPulse: boolean
  foundHiding: boolean
}

export function createMonsterBB(over: Partial<MonsterBB> = {}): MonsterBB {
  return {
    state: 'Patrol',
    stateTime: 0,
    waypointIndex: 0,
    goal: null,
    lastSeen: null,
    lastHeard: null,
    suspicion: 0,
    attackCooldown: 0,
    unseenTime: 0,
    searchLeft: 0,
    blindTime: 0,
    hesitate: 0,
    speedMul: 1,
    ...over,
  }
}

function cloneBB(bb: MonsterBB): MonsterBB {
  return {
    ...bb,
    goal: bb.goal ? { ...bb.goal } : null,
    lastSeen: bb.lastSeen ? { ...bb.lastSeen } : null,
    lastHeard: bb.lastHeard ? { ...bb.lastHeard } : null,
  }
}

/**
 * Explicit horror-monster state machine.
 * Vision and loud sounds preempt the current action, but an attack swing
 * is allowed to finish. First contact from a calm state hesitates in
 * Suspicious for a short, random beat so the creature does not feel scripted.
 * Hiding is resolved here as a chance per second, not a teleport.
 */
export function stepMonster(bb: MonsterBB, sense: SenseInput): BrainResult {
  const s = cloneBB(bb)
  const dt = Math.max(0, sense.dt)
  s.stateTime += dt
  s.attackCooldown = Math.max(0, s.attackCooldown - dt)
  s.blindTime = Math.max(0, s.blindTime - dt)
  s.hesitate = Math.max(0, s.hesitate - dt)
  s.suspicion = Math.max(0, s.suspicion - dt * 0.045)

  const blinded = s.blindTime > 0
  const see = sense.canSee && !blinded && !sense.hiding
  if (see) {
    s.unseenTime = 0
    s.lastSeen = { ...sense.playerPos }
    s.suspicion = Math.min(1, s.suspicion + dt * 0.7)
  } else {
    s.unseenTime += dt
  }
  if (sense.flashlightHit && !blinded) {
    s.suspicion = Math.min(1, s.suspicion + dt * 1.1)
    s.lastSeen = s.lastSeen ?? { ...sense.playerPos }
  }
  if (sense.hear && sense.hear.loudness > 0.12) {
    s.lastHeard = { ...sense.hear.pos }
    s.suspicion = Math.min(1, s.suspicion + sense.hear.loudness * 0.25)
  }

  let attackPulse = false
  let foundHiding = false

  const enter = (next: MonsterStateName, goal?: Vec3 | null) => {
    if (s.state !== next) {
      s.state = next
      s.stateTime = 0
      s.speedMul = 0.88 + sense.rng() * 0.24
      if (next === 'Search') s.searchLeft = 6.5 + sense.rng() * 3
      if (next === 'Attack') {
        s.attackCooldown = 1.5
        attackPulse = true
      }
    }
    if (goal) s.goal = { ...goal }
  }

  if (
    sense.hiding &&
    sense.hideSpot &&
    (s.state === 'Search' || s.state === 'Suspicious' || s.state === 'Chase' || s.state === 'Investigate')
  ) {
    const d = distXZ(sense.monsterPos, sense.hideSpot)
    if (d < 1.75) {
      const rate = (sense.holdBreath ? 0.055 : 0.26) * (0.35 + s.suspicion)
      if (sense.rng() < rate * dt) foundHiding = true
    }
  }

  const canAttack = see && sense.allowChase && sense.distance <= 1.32 && s.attackCooldown <= 0
  if (s.state !== 'Attack') {
    if (canAttack) {
      enter('Attack', sense.playerPos)
    } else if (see && sense.allowChase) {
      if (s.state === 'Chase') {
        s.goal = { ...sense.playerPos }
      } else if (s.state === 'LostPlayer') {
        enter('Chase', sense.playerPos)
      } else if (s.state === 'Suspicious') {
        s.goal = { ...sense.playerPos }
        if (s.hesitate <= 0) enter('Chase', sense.playerPos)
      } else {
        enter('Suspicious', sense.playerPos)
        s.hesitate = 0.45 + sense.rng() * 1.15
      }
    } else if (see && !sense.allowChase) {
      enter('Suspicious', sense.playerPos)
    } else if (
      sense.flashlightHit &&
      !blinded &&
      (s.state === 'Idle' || s.state === 'Patrol' || s.state === 'ReturnToPatrol' || s.state === 'Investigate')
    ) {
      enter('Suspicious', sense.playerPos)
    } else if (
      sense.hear &&
      sense.hear.loudness > 0.38 &&
      s.state !== 'Chase' &&
      s.state !== 'LostPlayer' &&
      s.state !== 'Suspicious'
    ) {
      if (sense.hear.loudness > 0.84 && sense.distance < 6.5 && sense.allowChase && sense.rng() < 0.55) {
        enter('Chase', sense.hear.pos)
      } else {
        enter('Investigate', sense.hear.pos)
      }
    }
  }

  const nextWp = (): Vec3 | null => {
    const wp = sense.waypoints
    if (!wp.length) return s.goal
    s.waypointIndex = (s.waypointIndex + 1) % wp.length
    return { ...wp[s.waypointIndex] }
  }
  const nearestWp = (): Vec3 | null => {
    const wp = sense.waypoints
    if (!wp.length) return s.goal
    let best = 0
    let bestD = Infinity
    for (let i = 0; i < wp.length; i++) {
      const d = distXZ(sense.monsterPos, wp[i])
      if (d < bestD) {
        bestD = d
        best = i
      }
    }
    s.waypointIndex = best
    return { ...wp[best] }
  }

  switch (s.state) {
    case 'Idle':
      if (s.stateTime > 1.5 + sense.rng() * 2) enter('Patrol', nextWp() ?? sense.monsterPos)
      break
    case 'Patrol':
      if (!s.goal && sense.waypoints.length) s.goal = { ...sense.waypoints[s.waypointIndex % sense.waypoints.length] }
      if (sense.atGoal) {
        if (sense.rng() < 0.16) enter('Idle', sense.monsterPos)
        else s.goal = nextWp()
      }
      break
    case 'Investigate':
      if (sense.atGoal || s.stateTime > 11) enter('Search', s.goal ?? sense.monsterPos)
      break
    case 'Search':
      s.searchLeft -= dt
      if (sense.atGoal) {
        const base = s.lastHeard ?? s.lastSeen ?? sense.monsterPos
        const ang = sense.rng() * Math.PI * 2
        const radius = 1.4 + sense.rng() * 1.8
        s.goal = v3(base.x + Math.cos(ang) * radius, base.y, base.z + Math.sin(ang) * radius)
      }
      if (s.searchLeft <= 0) enter('ReturnToPatrol', nearestWp() ?? sense.monsterPos)
      break
    case 'Suspicious':
      if (!see && (sense.atGoal && s.stateTime > 2.2 || s.stateTime > 8)) enter('Search', s.goal ?? sense.monsterPos)
      break
    case 'Chase':
      s.goal = { ...sense.playerPos }
      if (!see && s.unseenTime > 0.55) enter('LostPlayer', s.lastSeen ? { ...s.lastSeen } : { ...sense.playerPos })
      break
    case 'Attack':
      if (s.stateTime > 0.82) {
        if (see && sense.distance < 2.4) enter('Chase', sense.playerPos)
        else enter('LostPlayer', s.lastSeen ? { ...s.lastSeen } : { ...sense.playerPos })
      }
      break
    case 'LostPlayer':
      if (sense.atGoal || s.stateTime > 6.2) enter('Search', s.goal ?? sense.monsterPos)
      break
    case 'ReturnToPatrol':
      if (!s.goal) s.goal = nearestWp()
      if (sense.atGoal || s.stateTime > 16) enter('Patrol', s.goal ?? nextWp())
      break
    default:
      break
  }

  const baseSpeed: Record<MonsterStateName, number> = {
    Idle: 0,
    Patrol: 1.48,
    Investigate: 2.2,
    Search: 1.22,
    Suspicious: 1.28,
    Chase: 3.7 + sense.aggression * 0.85,
    Attack: 0.85,
    LostPlayer: 2.35,
    ReturnToPatrol: 1.6,
  }
  let speed = baseSpeed[s.state] * s.speedMul
  if (s.hesitate > 0 && s.state === 'Suspicious') speed *= 0.72
  if (blinded) speed *= 0.45
  return { bb: s, speed, attackPulse, foundHiding }
}

/** Pick a hiding spot the monster has not already checked, else a random offset. */
export function chooseSearchPoint(
  origin: Vec3,
  spots: { id: string; pos: Vec3 }[],
  checked: ReadonlySet<string>,
  rng: () => number,
): { id: string | null; pos: Vec3 } {
  const near = spots.filter((s) => !checked.has(s.id) && distXZ(origin, s.pos) < 8)
  if (near.length) {
    const pick = near[Math.floor(rng() * near.length) % near.length]
    return { id: pick.id, pos: { ...pick.pos } }
  }
  const ang = rng() * Math.PI * 2
  return { id: null, pos: v3(origin.x + Math.cos(ang) * 2, origin.y, origin.z + Math.sin(ang) * 2) }
}
