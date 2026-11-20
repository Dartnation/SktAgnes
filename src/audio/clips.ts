/** Real recordings shipped in public/assets/audio and copied into dist. */
export const CLIP_FILES = {
  step: 'fodtrin-gaaende.mp3',
  flash: 'lommelygte-taend-sluk.mp3',
  metallic: 'metallic.mp3',
  scream: 'skrig.mp3',
  shadow: 'pludselig-skygge-monster.mp3',
  deep: 'dyb-lyd.mp3',
  bed: 'baggrundslyd-hele-tiden-i-lav.mp3',
} as const

export type ClipKey = keyof typeof CLIP_FILES

export const RECORDED: ReadonlySet<string> = new Set(Object.keys(CLIP_FILES))

export function clipUrl(file: string): string {
  return new URL(`assets/audio/${file}`, document.baseURI).href
}
