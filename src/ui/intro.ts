export interface IntroBeat {
  at: number
  title: string
  body: string
}

export const INTRO_BEATS: IntroBeat[] = [
  {
    at: 0.7,
    title: 'SKT. AGNES – 1987',
    body: 'Hospitalet blev lukket efter en række uforklarlige hændelser. Siden har bygningen stået tom. I hvert fald ifølge de officielle oplysninger.',
  },
  {
    at: 7.4,
    title: '',
    body: 'Jeg hedder Michael Sørensen. Legenden fra Løsning. Jeg er her som den, der finder ham.',
  },
  {
    at: 13.4,
    title: '',
    body: 'Casper Jørgensen er skurken. Han er eftersøgt for at være halvovervægtig i byer over hele Danmark.',
  },
  {
    at: 19.2,
    title: 'NYT MÅL',
    body: 'Find og læs efterlysningen. Billedet på væggen er Casper.',
  },
]

export const INTRO_END = 24.4

export function introFrame(time: number): { beat: IntroBeat | null; done: boolean } {
  if (time >= INTRO_END) return { beat: INTRO_BEATS[INTRO_BEATS.length - 1] ?? null, done: true }
  let beat: IntroBeat | null = null
  for (const item of INTRO_BEATS) {
    if (time >= item.at) beat = item
  }
  return { beat, done: false }
}

/** A loaded game never replays the opening, even if the old save never marked it done. */
export function shouldPlayIntro(reason: 'new' | 'load'): boolean {
  return reason === 'new'
}
