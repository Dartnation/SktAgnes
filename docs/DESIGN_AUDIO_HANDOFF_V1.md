# SKT. AGNES — OVERDRAGELSE AF DESIGN OG LYD V1

**Projekt:** \`Dartnation/SktAgnes\`  
**Designgren:** \`design/horror-hud-audio-direction-v1\`  
**Grundlag:** \`fix/audio-mix-and-spatial-cues\`  
**Arbejdsfordeling:** ChatGPT har ansvaret for design, brugerfladens udtryk og lydaktiver. Cursor har ansvaret for kontroller, gameplay, tilstande, indlæsning af aktiver, rutenet og styringen af lyd- og lyshændelser.

## Færdige visuelle ændringer
- \`src/style.css\`: Ny titelmenu, missionsfelt, minimap-ramme, interaktionsbeskeder, sigtepunkt, udholdenhed/batteri, indstillinger og inventar.
- Inventaret har et responsivt feltlayout, som bruger de **eksisterende** genstandsknapper og funktioner. Designet ændrer ikke i sig selv reglerne for genstande eller gemning.
- Minimapet er flyttet til øverste højre hjørne, men selve tegningen på canvas skal programmeres af Cursor.
- Tastaturgenveje og gameplay blev ikke ændret i denne designgren.

## Cursor: Programmering og integration
1. **Inventar:** \`KeyI\` åbner allerede inventar under spillet, men lukning fra inventartilstand mangler. Få I til at åbne/lukke, Escape til at lukke; bevar \`selectItem\`, \`useItem\`, \`dropItem\` og \`closeInventory\`. Håndtér musens pointer lock korrekt, når spillet genoptages. Omdesign ikke \`src/style.css\`.
2. **Minimap:** \`src/ui/minimap.ts\` tegner i øjeblikket simple rum, tekst og spillerpil. Tilføj skarp canvas-tegning, korrekt pixelopløsning, spillerens synsretning, opdagede rum, døre og kendte missionsmål. Afslør ikke uudforskede hemmeligheder. Brug det eksisterende \`#minimap\`.
3. **Loftlys:** \`src/game/Game.ts::tickLights\` styrer blink. Programmer mere troværdig, ujævn styring af hver lampe, lange stabile perioder og korte udfald. Brug de tre lysarmaturer i Receptionen fra Design V2. Synkronisér elektrisk lyd og synlig lysstyrke. Ingen hurtig fuldskærmsstroboskop-effekt.
4. **Lydintegration:** Den originale \`SktAgnes_Original_Horror_SoundPack_V1.zip\` er leveret i samtalen. Brugeren skal give filen til Cursor. Kopiér WAV-filer til en egnet mappe under \`public/\`, opdatér lydmanifestet og indlæs/dekod i \`AudioEngine\`. Respekter master-, musik- og effektskyderne samt pause/genoptagelse. Hold afstand til overstyring og undgå overlappende skræmmelyde. Afspil aldrig automatiske spillerfodtrin i stilstand.
5. **Verdensinteraktioner:** Cursor må tilføje meningsfulde genstande og programmering af opsamling, inventar og gemning. Unikke ID'er og gamle gemte spil skal bevares.
6. **Trapper:** Ret navigation, kollision og fri passage, hvis brugeren oplever problemer. Det visuelle trappeudtryk hører under ChatGPTs designansvar.

## Oversigt over originale lydfiler
To 32-sekunders atmosfæreloops: \`amb_reception_dark_loop_32s.wav\` og \`amb_stairwell_void_loop_32s.wav\`.

Øvrige lyde:
- \`sfx_fluorescent_flicker.wav\`
- \`sfx_distant_door_slam.wav\`
- \`sfx_heavy_door_creak.wav\`
- \`sfx_inventory_open.wav\`
- \`sfx_inventory_close.wav\`
- \`sfx_item_pickup.wav\`
- \`sfx_dread_stinger.wav\`

**Foreslåede relative lydniveauer (skal lyttes igennem):** Miljølyd ca. 0,20; lampe ca. 0,20; hårde anslag ca. 0,35; døre ca. 0,25; inventar ca. 0,22; opsamling ca. 0,25; gyserstinger ca. 0,30. Mindst ti sekunder mellem kraftige stingers; mindst tre sekunder mellem lampehændelser for den enkelte lampe; to til tre sekunders krydsfade mellem rumlyde.

## Visuelle godkendelseskriterier
- Ved 1920×1080 og 1366×768 må HUD ikke skjule vigtige ruter eller mål.
- Ved smalle skærme må minimap og missionsfelt ikke overlappe; inventaret skal kunne rulles.
- Alle relevante funktioner skal kunne bruges med tastatur, synlig fokusmarkering og tilstrækkelig kontrast.
- \`I\` åbner og lukker inventaret, og eksisterende knapper virker uden dobbelte hændelseslyttere.
- F4-fejlsøgning må ikke dække det normale HUD.
- Lommelygtens og lampers lys skal understøtte både stemning og orientering.

## Git-arbejdsgang
**Nyt samlet arbejdsgrundlag:** \`plan/cursor-gameplay-overhaul-v1\` bygger allerede oven på Design V1 og V2. Cursor skal arbejde fra denne plangren eller en særskilt gren, der bygger videre på den. Hold UI-design i \`src/style.css\` under ChatGPTs ansvar. Ingen ændringer sammenflettes til \`main\` uden gennemgang.
