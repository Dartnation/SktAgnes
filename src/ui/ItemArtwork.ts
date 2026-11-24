/**
 * Original presentation-only item icons. Does not alter IDs, loot, actions or
 * quantities; the result is a small static offline SVG for the existing UI.
 */
export type ItemArt = 'battery' | 'key' | 'fuse' | 'document' | 'folder' | 'map'
  | 'medicine' | 'tool' | 'rosary' | 'unknown'

export function artworkKind(name: string): ItemArt {
  const s = name.toLocaleLowerCase('da-DK')
  if (/batteri/.test(s)) return 'battery'
  if (/sikring/.test(s)) return 'fuse'
  if (/nøgle/.test(s)) return 'key'
  if (/rosenkrans/.test(s)) return 'rosary'
  if (/førstehjælp/.test(s)) return 'medicine'
  if (/koben/.test(s)) return 'tool'
  if (/bygningsplan/.test(s)) return 'map'
  if (/bevismappe/.test(s)) return 'folder'
  if (/brev|journal|note|vagtbog|protokol|seddel/.test(s)) return 'document'
  return 'unknown'
}
const strokes: Record<ItemArt, string> = {
  battery: '<rect x="18" y="27" width="44" height="28" rx="4"/><path d="M62 35h6v12h-6M25 34h16v14H25zM33 29v-5M42 39h13m-6-6v12"/><path d="M22 52h36" opacity=".35"/>',
  key: '<circle cx="27" cy="33" r="11"/><circle cx="27" cy="33" r="4"/><path d="M37 40l23 23m-10-9 6-6m-2 10 6-6m-9-4-4 4"/>',
  fuse: '<path d="M30 19h22v43H30zM33 23h16v34H33z"/><path d="M26 17h30v6H26zM26 58h30v6H26z"/><path d="M38 32h6l-5 9h7l-7 10" stroke-width="2.4"/>',
  document: '<path d="M24 14h27l10 10v42H24zM51 14v11h10"/><path d="M32 34h22M32 40h22M32 46h18M32 52h21M32 58h13" opacity=".7"/><path d="M33 26h11" stroke-width="2.5"/>',
  folder: '<path d="M13 27h25l7 7h26v30H13z"/><path d="M16 26v-7h27l7 9M19 42h46M23 53h25" opacity=".7"/><rect x="33" y="37" width="20" height="7" rx="1"/>',
  map: '<path d="M15 24l18-8 16 8 18-8v47l-18 8-16-8-18 8z"/><path d="M33 16v47M49 24v47M22 34l9-5 14 10 14-9" opacity=".55"/><circle cx="43" cy="47" r="4"/>',
  medicine: '<rect x="18" y="20" width="49" height="46" rx="5"/><path d="M34 20v-6h17v6M36 30h13v26H36zM29 43h27" stroke-width="3"/>',
  tool: '<path d="M51 13c-9-1-14 8-12 15l-24 27 12 12 27-24c7 2 16-3 15-12l-9 5-8-7z"/><path d="M22 57l5 5M42 33l7 7" opacity=".55"/>',
  rosary: '<path d="M42 16c-17 0-22 14-21 23 2 15 10 20 20 20 12 0 21-10 21-22 0-12-7-21-20-21z" stroke-dasharray="2 5" stroke-width="7"/><path d="M41 59v14m-7-7h14"/>',
  unknown: '<rect x="20" y="25" width="44" height="41" rx="3"/><path d="M20 35h44M32 25v-8h20v8M38 48h9m-5-4v10M25 61h34" opacity=".7"/>',
}
export function itemArtwork(name: string): string {
  const art = artworkKind(name)
  return '<svg class="item-illustration" viewBox="0 0 84 84" width="76" height="76" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + strokes[art] + '</g></svg>'
}
