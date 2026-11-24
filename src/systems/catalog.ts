export type ItemKind =
  | 'note'
  | 'key'
  | 'fuse'
  | 'battery'
  | 'consumable'
  | 'collectible'
  | 'story'
  | 'special'
  | 'tool'
  | 'map'

export interface ItemDef {
  id: string
  name: string
  description: string
  kind: ItemKind
  stack: number
  droppable: boolean
  text?: string
  heal?: number
}

export const SAFE_CODE = '1907'

const note = (id: string, name: string, description: string, text: string): ItemDef => ({
  id,
  name,
  description,
  kind: 'note',
  stack: 1,
  droppable: false,
  text,
})

export const CATALOG: Record<string, ItemDef> = {
  note_maja: note(
    'note_maja',
    'Caspers efterlysning',
    'Billedet på væggen er ham. Michael Sørensen skal finde ham.',
    `EFTERSØGT

Casper Jørgensen er skurken.
Michael Sørensen — legenden fra Løsning — er den, der skal finde ham.

Han er eftersøgt for at være halvovervægtig. Sporene går gennem Horsens, Vejle, Aarhus, Odense, Aalborg og København.

Tre ting, hvis døren ikke vil give sig:

Hvis lyset dør, så stå stille. Løb ikke. Råb ikke.
Skt. Agnes lukkede officielt i 1987. Ikke 1978. Ikke 1991.
Kapelnøglen skulle ligge på første sal. Ikke i receptionen. Ikke under lighuset.

Koden er årstallet på stifterens sten. Bagporten er død uden strøm.

— Sagen er din, Michael.`,
  ),
  note_log: note(
    'note_log',
    'Vagtbog',
    'Sidste side i receptionens bog.',
    `VAGTBLOG — 12. november 1987

03:10  Østfløjen mørk. Sikringerne er sprunget igen.
03:40  Lyd fra kapellet. Ingen nøgle i skranken.
04:05  Dr. Holm beordrer kælderen aflåst.
04:20  Jeg slukker ikke lyset i gangen. Jeg slukker ikke lyset.
04:31  Nogen står i døren. Det er ikke en patient.

Siden er revet over. Resten mangler.`,
  ),
  note_code: note(
    'note_code',
    'Stiftelsesprotokol',
    'Et arkivark med årstal og en henvisning.',
    `STIFTELSESPROTOKOL (uddrag)

Skt. Agnes Asyl grundlagt 1907 af Agnes Holm.
Direktørens pengeskab er sat til stiftelsesåret.
Nøglerne til kapellet opbevares på sygeplejerskekontoret — 1. sal.

"Det der skrives ned, kan ikke begraves."`,
  ),
  note_generator: note(
    'note_generator',
    'Nødstrømsnote',
    'En falmet instruktion ved generatoren.',
    `NØDSTRØM — KUN FOR VEDLIGEHOLD

Tre sikringer skal sidde samtidigt:
  RØD  — køkkenet, ved komfuret
  BLÅ  — fyrrummet
  GUL  — kælderdepotet

Uden strøm forbliver bagportens lås død.
Hylden i lighuset kan brydes med kobenet fra fyrrummet.
Tunnellen bagved er ikke tegnet færdig. Kravl, hvor loftet knækker.`,
  ),
  note_nurse: note(
    'note_nurse',
    'Seddel fra vagten',
    'Skrevet med en hånd der ryster.',
    `Til den næste vagt —

Kapelnøglen ligger i øverste skuffe. Jeg lægger den der, fordi mine hænder ryster for meget til at bede.

Lad være med at tælle sengene på 1. sal. Der er altid én for meget.

— Søster`,
  ),
  note_director: note(
    'note_director',
    'Holms brev',
    'Fundet i pengeskabet. Papiret er tungt.',
    `Fortroligt. Dr. E. Holm.

Forsøgene i kælderen skulle kun vare vinteren over. Agnes' navn holdt bestyrelsen rolig. Det gjorde Vogteren ikke.

Han var ansat til at holde orden. Nu holder han huset. Hvis nogen finder mapperne i kapellet, så brænd porten — ikke journalerne.

Journalerne er husets hukommelse. Uden dem er han bare en mand i en uniform der ikke passer mere.`,
  ),
  note_secret: note(
    'note_secret',
    'Uafrystelig note',
    'Ikke stemplet. Ikke arkiveret.',
    `Ikke arkiveret.

Patienterne i fløj B blev ført ned efter lukketid. De der ikke kom op igen, står ikke i de officielle tal.

Rosenkransen lå om Agnes' hånd, da de murede nichen til. Den får ham til at tøve. Kun et øjeblik. Det er nok, hvis du allerede er i bevægelse.`,
  ),
  file_1: note(
    'file_1',
    'Journal 12',
    'Patientjournal. Navnet er streget over.',
    `JOURNAL 12 — indlagt 1979

Patienten beskriver en vagt der står stille for enden af sengen, også når lyset er tændt. Anbefaling: ingen nattevagter alene i østfløjen.

Overført til kælderobservation 2. marts 1986. Ingen udskrivelse.`,
  ),
  file_2: note(
    'file_2',
    'Journal 19',
    'Mappen lugter af fugt og jern.',
    `JOURNAL 19 — "stilleperioden"

Efter tre døgn uden søvn holdt patienten op med at blinke. Dr. Holm noterede det som fremgang. Sygeplejersken noterede det ikke.

Sidste linje, anden håndskrift: Han tæller stadig med.`,
  ),
  file_3: note(
    'file_3',
    'Journal 27',
    'Et barnefoto er hæftet bagpå. Det vender forkert.',
    `JOURNAL 27 — stue 101

Familien fik at vide, at patienten var overført til et andet amt. Der findes intet modtagebrev.

På bagsiden af fotografiet, med blyant: "tæl ikke vinduerne."`,
  ),
  file_4: note(
    'file_4',
    'Journal 33',
    'Blækket er tværet ud, som om siden har ligget i vand.',
    `JOURNAL 33 — stue 102

Patienten nægtede at sove med ryggen til døren. Natten efter var sengen flyttet, ikke patienten.

Margen: Hvis du ser én der står helt stille, så er det ikke en patient. Patienter trækker vejret.`,
  ),
  file_5: note(
    'file_5',
    'Journal 41',
    'Et ark fra lighuset. Hjørnet er brændt.',
    `JOURNAL 41 — kælder

Dødstidspunkt udeladt. Årsag udeladt. Underskrift: Holm.

Under stregen, ikke med maskine: Vi løb tør for plads i skufferne, så vi begyndte at bruge nicherne.`,
  ),
  file_6: note(
    'file_6',
    'Journal 44',
    'Den sidste mappe. Den har aldrig haft et stempel.',
    `JOURNAL 44 — ikke oprettet

Navn: Agnes Holm. Status: stifter, ikke patient. Alligevel ligger journalen her.

"Hun bad os huske hende som et hus. Huse husker tilbage."

Hvis alle seks journaler forlader grunden sammen med bevismappen, er der noget at trykke. Ellers er det kun en historie.`,
  ),
  battery: {
    id: 'battery',
    name: 'Batteri',
    description: 'Et slidt batteri til lygten. Tryk R for at skifte.',
    kind: 'battery',
    stack: 8,
    droppable: true,
  },
  fuse_red: {
    id: 'fuse_red',
    name: 'Rød sikring',
    description: 'Keramik og kobber. Hører til i generatoren.',
    kind: 'fuse',
    stack: 1,
    droppable: false,
  },
  fuse_blue: {
    id: 'fuse_blue',
    name: 'Blå sikring',
    description: 'Mærket med et blåt bånd. Fyrrummet.',
    kind: 'fuse',
    stack: 1,
    droppable: false,
  },
  fuse_yellow: {
    id: 'fuse_yellow',
    name: 'Gul sikring',
    description: 'Den sidste af de tre. Depotet.',
    kind: 'fuse',
    stack: 1,
    droppable: false,
  },
  key_gang: {
    id: 'key_gang',
    name: 'Nøgle til patientgangen',
    description: 'Den lå i svaret. Døren ud af receptionen vil have den.',
    kind: 'key',
    stack: 1,
    droppable: false,
  },
  key_op: {
    id: 'key_op',
    name: 'Nøgle fra operationsstuen',
    description: 'En af tre. Uden den forbliver vejen ud lukket.',
    kind: 'key',
    stack: 1,
    droppable: false,
  },
  key_arkiv: {
    id: 'key_arkiv',
    name: 'Nøgle fra arkivet',
    description: 'En af tre. Den lå mellem journalerne.',
    kind: 'key',
    stack: 1,
    droppable: false,
  },
  key_slag: {
    id: 'key_slag',
    name: 'Nøgle fra boksen',
    description: 'Lå i boksen. Den passer i døren ud af rummet.',
    kind: 'key',
    stack: 1,
    droppable: false,
  },
  key_kapel: {
    id: 'key_kapel',
    name: 'Nøgle fra kapellet',
    description: 'En af tre. Kold som alteret.',
    kind: 'key',
    stack: 1,
    droppable: false,
  },
  chapel_key: {
    id: 'chapel_key',
    name: 'Kapelnøgle',
    description: 'Tung, kold messing. Passer til kapeldøren.',
    kind: 'key',
    stack: 1,
    droppable: false,
  },
  master_key: {
    id: 'master_key',
    name: 'Hovednøgle',
    description: 'Direktørens nøgle. Bagporten vil have den — og strøm.',
    kind: 'key',
    stack: 1,
    droppable: false,
  },
  evidence: {
    id: 'evidence',
    name: 'Bevismappe',
    description: 'Kapellets mappe. Uden den er flugten kun en flugt.',
    kind: 'story',
    stack: 1,
    droppable: false,
    text: `BEVISMAPPE — kapellet, Skt. Agnes

Korrespondance mellem Dr. Holm og amtet, 1984–1987.
Overførsler uden modtager.
En liste over navne der ikke optræder i de offentlige dødsbøger.

Det er nok til en artikel. Det er ikke nok til at gøre huset færdigt.
Seks journaler mangler, hvis nogen skal tro på det hele.`,
  },
  rosary: {
    id: 'rosary',
    name: 'Agnes’ rosenkrans',
    description: 'Perlerne er varme. Tryk Q for at holde den frem. To gange.',
    kind: 'special',
    stack: 1,
    droppable: false,
    text: `Perlerne er slidt skæve. Når du holder den frem, standser skridtene et øjeblik — ikke af ærbødighed, af genkendelse.`,
  },
  crowbar: {
    id: 'crowbar',
    name: 'Koben',
    description: 'Rustent. Nok til at rokke en hylde der ikke vil flytte sig.',
    kind: 'tool',
    stack: 1,
    droppable: false,
  },
  medkit: {
    id: 'medkit',
    name: 'Førstehjælp',
    description: 'Gazebind og en halv flaske sprit. Bruges fra inventaret.',
    kind: 'consumable',
    stack: 4,
    droppable: true,
    heal: 48,
  },
  blueprint: {
    id: 'blueprint',
    name: 'Bygningsplan',
    description: 'En gulnet plantegning. Rum du har besøgt, er tydeligere.',
    kind: 'map',
    stack: 1,
    droppable: false,
    text: `SKT. AGNES — PLANTEGNING
Kælder, stueetage, 1. sal.
Hemmelige rum er ikke tegnet. Tunnellen er kun en stiplet streg.`,
  },
}

export const FILE_IDS = ['file_1', 'file_2', 'file_3', 'file_4', 'file_5', 'file_6'] as const

export function itemDef(id: string): ItemDef {
  const d = CATALOG[id]
  if (!d) throw new Error(`Ukendt genstand: ${id}`)
  return d
}
