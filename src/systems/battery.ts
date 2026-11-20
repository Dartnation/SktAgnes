/** 100 charge lasts about 3.5 minutes of continuous light. Recharge is much slower. */
export const BATTERY_MAX = 100
export const BATTERY_DRAIN_PER_SEC = 100 / 170
export const BATTERY_RECHARGE_PER_SEC = BATTERY_DRAIN_PER_SEC * 0.18
export const BATTERY_PICKUP = 45

export interface BatteryStep {
  charge: number
  on: boolean
  /** True on the frame the cell hits empty and the lamp is forced off. */
  died: boolean
}

export function stepBattery(charge: number, on: boolean, dt: number): BatteryStep {
  const step = Math.max(0, dt)
  let next = charge
  let lit = on
  let died = false
  if (lit) {
    next = Math.max(0, next - BATTERY_DRAIN_PER_SEC * step)
    if (next <= 0) {
      lit = false
      died = true
    }
  } else {
    next = Math.min(BATTERY_MAX, next + BATTERY_RECHARGE_PER_SEC * step)
  }
  return { charge: next, on: lit, died }
}

export function boostBattery(charge: number, amount = BATTERY_PICKUP): number {
  return Math.min(BATTERY_MAX, Math.max(0, charge) + amount)
}

export function batteryBand(charge: number): 'ok' | 'low' | 'critical' | 'empty' {
  if (charge <= 0.5) return 'empty'
  if (charge < 12) return 'critical'
  if (charge < 25) return 'low'
  return 'ok'
}
