/** How hard the reception door is knocked, from how long the question has been open. */

export interface HallKnock {
  gap: number
  volume: number
  /** Kept near 1 so the recording stays a real knock. Speed lives in the gap. */
  rate: number
  hard: boolean
  /** A quiet, uneasy hold between two knocking speeds. */
  pause: boolean
}

/** `knocking` is seconds since the first knock, after the silent wait. */
export function hallKnockLevel(knocking: number): HallKnock {
  // The first knocks wait. Later ones come sooner, still one knock at a time.
  const band = knocking < 10.5 ? 0 : knocking < 14 ? 1 : knocking < 16.2 ? -1 : knocking < 26 ? 2 : knocking < 28 ? -1 : 3
  if (band < 0) return { gap: 2.1, volume: 0, rate: 1, hard: true, pause: true }
  const gaps = [3.5, 2.4, 1.7, 1.2]
  const vols = [1.02, 1.12, 1.24, 1.36]
  return { gap: gaps[band] ?? 0.6, volume: vols[band] ?? 1.36, rate: 1, hard: band >= 2, pause: false }
}

export const HALL_KNOCK_DELAY = 10

export interface HallChoice {
  id: string
  label: string
}

export interface HallQuestion {
  prompt: string
  choices: HallChoice[]
  answer: string
}

/** Three questions whose answers are written in Majas brev. */
export const HALL_QUESTIONS: HallQuestion[] = [
  {
    prompt: 'Hvis lyset dør, hvad gør du så?',
    choices: [
      { id: 'still', label: 'Stå stille' },
      { id: 'run', label: 'Løbe' },
      { id: 'shout', label: 'Råbe' },
    ],
    answer: 'still',
  },
  {
    prompt: 'Hvornår lukkede Skt. Agnes officielt?',
    choices: [
      { id: 'y1978', label: '1978' },
      { id: 'y1987', label: '1987' },
      { id: 'y1991', label: '1991' },
    ],
    answer: 'y1987',
  },
  {
    prompt: 'Hvor skulle kapelnøglen ligge?',
    choices: [
      { id: 'desk', label: 'I receptionen' },
      { id: 'floor1', label: 'På første sal' },
      { id: 'morgue', label: 'Under lighuset' },
    ],
    answer: 'floor1',
  },
]
