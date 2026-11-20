/** Onset marks in seconds, used to cut the walking recording into single steps. */
export interface StepMark {
  start: number
  end: number
}

/**
 * Find footfalls in a mono walk recording.
 * A step is a local energy peak, not a continuous loop.
 * If the take has no clear hits, fall back to even slices so a step still exists.
 */
export function stepMarks(channel: Float32Array, sampleRate: number): StepMark[] {
  const dur = channel.length / Math.max(1, sampleRate)
  if (dur < 0.05 || channel.length < 8) return [{ start: 0, end: dur }]
  const hop = Math.max(1, Math.floor(sampleRate * 0.01))
  const win = Math.max(hop, Math.floor(sampleRate * 0.02))
  const env: number[] = []
  for (let i = 0; i + win <= channel.length; i += hop) {
    let e = 0
    for (let j = 0; j < win; j++) {
      const v = channel[i + j]
      e += v * v
    }
    env.push(Math.sqrt(e / win))
  }
  const times: number[] = []
  const radius = 8
  for (let i = 0; i < env.length; i++) {
    if (env[i] < 0.08) continue
    let louder = false
    const a = Math.max(0, i - radius)
    const b = Math.min(env.length - 1, i + radius)
    for (let k = a; k <= b; k++) {
      if (env[k] > env[i]) {
        louder = true
        break
      }
    }
    if (louder) continue
    const t = (i * hop) / sampleRate
    if (times.length && t - times[times.length - 1] < 0.28) continue
    times.push(t)
  }
  if (env.length && env[0] >= 0.08 && (times.length === 0 || times[0] > 0.2)) times.unshift(0)
  if (times.length < 2) return evenSlices(dur)
  return times.map((t, i) => {
    const start = Math.max(0, t - 0.028)
    const next = times[i + 1] ?? t + 0.42
    const end = Math.min(dur, Math.max(t + 0.16, Math.min(t + 0.4, next - 0.02)))
    return { start, end: Math.max(start + 0.08, end) }
  })
}

function evenSlices(dur: number): StepMark[] {
  const marks: StepMark[] = []
  const slice = 0.36
  for (let t = 0; t + 0.1 < dur; t += slice) marks.push({ start: t, end: Math.min(dur, t + slice) })
  if (!marks.length) marks.push({ start: 0, end: Math.min(dur, 0.4) })
  return marks
}

/** Short fades so a cut does not click. */
export function fadeEdges(data: Float32Array, sampleRate: number, fadeSec = 0.008): void {
  const n = Math.min(Math.floor(sampleRate * fadeSec), Math.floor(data.length / 3))
  if (n < 2) return
  for (let i = 0; i < n; i++) {
    const w = i / n
    data[i] *= w
    data[data.length - 1 - i] *= w
  }
}

/**
 * Pull the last few milliseconds toward the first sample so a loop
 * join does not click. The body of the recording is left alone.
 */
export function seamlessTail(data: Float32Array, sampleRate: number, fadeSec = 0.02): void {
  const n = Math.min(Math.floor(sampleRate * fadeSec), Math.floor(data.length / 8))
  if (n < 8) return
  const head = data[0]
  for (let i = 0; i < n; i++) {
    const w = (i + 1) / n
    const idx = data.length - n + i
    data[idx] = data[idx] * (1 - w) + head * w
  }
}

export function signalPeak(data: Float32Array): number {
  let peak = 0
  for (let i = 0; i < data.length; i++) {
    const a = Math.abs(data[i])
    if (a > peak) peak = a
  }
  return peak
}

export function signalRms(data: Float32Array): number {
  if (!data.length) return 0
  let s = 0
  const step = Math.max(1, Math.floor(data.length / 200000))
  let n = 0
  for (let i = 0; i < data.length; i += step) {
    const v = data[i]
    s += v * v
    n++
  }
  return Math.sqrt(s / Math.max(1, n))
}
