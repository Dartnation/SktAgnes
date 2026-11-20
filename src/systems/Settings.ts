import type { StorageLike } from './SaveSystem'

export type Quality = 'low' | 'medium' | 'high'

export interface Settings {
  quality: Quality
  resolutionScale: number
  mouseSensitivity: number
  masterVolume: number
  musicVolume: number
  sfxVolume: number
  brightness: number
  /** 0 = uncapped (browser vsync). Otherwise a frame cap. */
  fpsCap: number
  fullscreen: boolean
  motionBlur: boolean
  cameraShake: boolean
  /** Softens fluorescent faults for players who are sensitive to flicker. */
  reduceFlicker: boolean
  /** Whisper and scare lines. On unless the player turns them off. */
  subtitles: boolean
  /** When true, mouse up looks down. Default is off: mouse up looks up. */
  invertY: boolean
}

const KEY = 'skt-agnes-settings'

export function defaultSettings(): Settings {
  const nav = typeof navigator !== 'undefined' ? navigator : undefined
  const mem = nav ? (nav as Navigator & { deviceMemory?: number }).deviceMemory : undefined
  const cores = nav?.hardwareConcurrency
  const quality: Quality = (mem !== undefined && mem <= 4) || (cores !== undefined && cores <= 4) ? 'low' : 'medium'
  return {
    quality,
    resolutionScale: 1,
    mouseSensitivity: 0.00095,
    masterVolume: 0.8,
    musicVolume: 0.7,
    sfxVolume: 0.85,
    brightness: 1,
    fpsCap: 60,
    fullscreen: false,
    motionBlur: false,
    cameraShake: true,
    reduceFlicker: false,
    subtitles: true,
    invertY: false,
  }
}

function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

export function sanitizeSettings(partial: Partial<Settings> | null | undefined): Settings {
  const d = defaultSettings()
  const p = partial ?? {}
  const quality: Quality = p.quality === 'low' || p.quality === 'high' || p.quality === 'medium' ? p.quality : d.quality
  const cap = p.fpsCap
  const fpsCap = cap === 0 || cap === 30 || cap === 60 || cap === 120 ? cap : d.fpsCap
  return {
    quality,
    resolutionScale: clamp(typeof p.resolutionScale === 'number' ? p.resolutionScale : d.resolutionScale, 0.5, 1.25),
    mouseSensitivity: clamp(typeof p.mouseSensitivity === 'number' ? p.mouseSensitivity : d.mouseSensitivity, 0.0004, 0.01),
    masterVolume: clamp(typeof p.masterVolume === 'number' ? p.masterVolume : d.masterVolume, 0, 1),
    musicVolume: clamp(typeof p.musicVolume === 'number' ? p.musicVolume : d.musicVolume, 0, 1),
    sfxVolume: clamp(typeof p.sfxVolume === 'number' ? p.sfxVolume : d.sfxVolume, 0, 1),
    brightness: clamp(typeof p.brightness === 'number' ? p.brightness : d.brightness, 0.55, 1.6),
    fpsCap,
    fullscreen: typeof p.fullscreen === 'boolean' ? p.fullscreen : d.fullscreen,
    motionBlur: typeof p.motionBlur === 'boolean' ? p.motionBlur : d.motionBlur,
    cameraShake: typeof p.cameraShake === 'boolean' ? p.cameraShake : d.cameraShake,
    reduceFlicker: typeof p.reduceFlicker === 'boolean' ? p.reduceFlicker : d.reduceFlicker,
    subtitles: typeof p.subtitles === 'boolean' ? p.subtitles : d.subtitles,
    invertY: typeof p.invertY === 'boolean' ? p.invertY : d.invertY,
  }
}

export function loadSettings(storage: StorageLike): Settings {
  const raw = storage.getItem(KEY)
  if (!raw) return defaultSettings()
  try {
    return sanitizeSettings(JSON.parse(raw) as Partial<Settings>)
  } catch {
    return defaultSettings()
  }
}

export function saveSettings(storage: StorageLike, settings: Settings): void {
  storage.setItem(KEY, JSON.stringify(sanitizeSettings(settings)))
}
