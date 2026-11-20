# Skt. Agnes

Et førstepersons gyserspil i browseren. Du er journalisten Emil Kragh. Din kollega Maja er gået ind i det forladte asyl Skt. Agnes ved Vesterhavet og er ikke kommet ud. Indenfor går Vogteren stadig rundgang.

Bygningen har tre etager med tolv rum, trapper du selv går op ad, et kort øverst til venstre og tre nøgler. Udgangen hedder UD TIL STILHEDEN. Den åbner kun, når alle tre nøgler er fundet.

`dist/` er committet med vilje, så spillet kan startes uden Node. `node_modules` er i `.gitignore` og skal ikke med.

Lydfilerne ligger i `public/assets/audio/` og kopieres med ind i `dist/assets/audio/` når du bygger. Baggrundssporet er optagelsen `baggrundslyd-hele-tiden-i-lav.mp3`, der looper lavt. Fodtrin, lygteklik, skrig, skygge, dyb lyd og metallisk lyd er de samme filer, afspillet uden et genereret støj-loop. Den fulde gennemgang står i [RAPPORT.md](RAPPORT.md).

## Spil uden at installere noget

Spillet er allerede bygget i mappen `dist/`. På Windows:

1. Dobbeltklik på `start-game.bat`
2. Browseren åbner [http://localhost:5173](http://localhost:5173)
3. Stop serveren med Ctrl+C i det sorte vindue

Samme server kan startes i PowerShell 5.1 eller PowerShell 7 uden administrator:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\start-game.ps1
```

Scriptet bruger `System.Net.HttpListener` på `localhost` (ingen admin-rettigheder) og sender de rigtige MIME-typer, blandt andet `application/javascript` for `.js`.

## Udvikling

Kræver Node.js.

```bash
npm install
npm run dev
```

Dev-serveren kører på [http://127.0.0.1:5173](http://127.0.0.1:5173).

```bash
npm test
npm run build
npm run test:e2e
npm run test:audio
```

`npm run test:audio` starter `start-game.ps1` og tjekker de syv lydfiler i Firefox og Chromium.

`npm run build` skriver en ny `dist/` med relativ base (`./`), så filerne kan åbnes via den statiske server.

## Styring

| Tast | Handling |
| --- | --- |
| W | Frem |
| S | Tilbage |
| A | Venstre |
| D | Højre |
| Shift | Løb (bruger udholdenhed) |
| Ctrl | Krøb |
| Mellemrum | Hop |
| Mus | Se dig omkring. Op kigger op, ned kigger ned. Klik først, så markøren låses |
| E | Brug, åbn eller luk en dør, saml op, gem dig |
| F | Tænd eller sluk lygten (ét tryk) |
| R | Sæt et batteri i (giver straks mere ladning) |
| Q | Hold rosenkransen frem |
| G | Smid et batteri (larmer) |
| Tab eller I | Inventar |
| Esc | Pause |
| F3 | Ydelse |

I et skab eller under en seng holder du Shift for at holde vejret. E for at komme ud.

## Hvad spillet indeholder

- Mørkt asyl i tre plan: kælder, stue og 1. sal, med kapel, arkiv, sygestuer, fyrrum, lighus, tunnel og et skjult rum
- Førstepersonsbevægelse med acceleration, hovedvip, stamina, hop, krøj og kollision
- Lygte med batteri: ca. 3,5 minutter ved konstant lys, langsom opladning når den er slukket, synlig procent på HUD, og ekstra ladning fra batterier i banen
- Fodtrin fra en optagelse, der følger tempoet og stopper når du står stille. Lygteklik, tomt batteri, skrig og rumlyde ligger som rigtige filer i `public/assets/audio/` og følger med i `dist/`
- Inventar: nøgler, sikringer, noter, journaler, koben, førstehjælp, kort og rosenkrans
- Gåder: tre sikringer til generatoren, kapelnøgle, en kode fra arkivet til pengeskabet, koben til den skjulte hylde
- Vogteren med tilstande: Idle, Patrol, Investigate, Search, Suspicious, Chase, Attack, LostPlayer, ReturnToPatrol
- Gitter-A* gennem huset, synskegle med sigtelinje, hørelse og reaktion på lygten
- Jumpscares (angreb, ansigt, lyd bag dig, dørsmæk, falske forskrækkelser med mere) styret af en director, så de ikke vælter ind over hinanden
- Gem og indlæs i localStorage (checkpoint + tre pladser)
- Flere slutninger: Vidnet, Sandheden, Den tomme port, Flugten og Optagelsen
- Grafikindstillinger, lydbusser (hoved, musik, effekter), lysstyrke, billedloft, fuldskærm og valgfri omvendt Y-akse (slået fra som standard)

## Historien i korte træk

Maja har efterladt et brev. Asylet lukkede officielt i 1987, men patienterne blev ikke flyttet — journalerne blev gemt, og Vogteren blev i huset. Du skal finde stiftelsesåret i arkivet, få strøm på generatoren, hente bevismappen i kapellet og åbne direktørens pengeskab. Bagporten kræver strøm og hovednøgle. Tunnellen under lighuset er den anden vej ud. Seks patientjournaler og Agnes' rosenkrans ændrer, hvilken slutning du får.

## Test

```bash
npm test          # Vitest: sti, AI, inventar, gem, director, døre, batteri, styring, lydgrænser
npm run test:e2e    # Playwright: menu, bane, bevægelse, monster, scare, dør, gem, genstart
npm run test:audio  # start-game.ps1, Firefox og Chromium, de syv lydfiler
```

## Fejlfinding i spillet

Tilføj `?debug=1` eller `?test=1` til adressen. Så virker:

| Tast | Handling |
| --- | --- |
| F4 | Lydstatus: om lyden kører, og de seneste lyde |
| F6 | Spol 30 sekunder frem (strømafbrydelsen ligger ved 2 minutter) |
| F7 | Kør skyggefiguren forbi den dør, du kigger på |

Ctrl er hug-sig, og C gør det samme, så browseren ikke lukker fanen med Ctrl+W mens du spiller. Tab eller knappen Inventar åbner tasken. Den viser nøglerne.

## Struktur

```
src/game        løkke, input
src/player      bevægelse
src/ai          sti, monster, director
src/horror      jumpscares, støv
src/audio       optagelser og en enkelt baggrundsloop
src/world       bane, materialer, meshes
src/physics     kollision og sigtelinje
src/ui          menuer og HUD
src/systems     inventar, gem, indstillinger, historie
dist/           færdig build
```

## Begrænsninger

- Huset er bygget af enkle former med procedurelle teksturer. Det er bevidst mørkt. Tænd lygten med F. Batteriet holder omkring tre et halvt minut og lader langsomt, mens lygten er slukket.
- Vogteren er stadig procedurel. Hovedet følger ansigtet fra jumpscaren: blegt ovalt ansigt, skrå øjne med røde pupiller, tynd næse og et tyndt smil.
- Billedloftet er et loft. Browseren styrer selv VSync, og det kan ikke slås fra.
- På høj grafik bruges Three.js' SSAO-pass og et retningsbestemt slør. Det er ikke en fuld dybdeskarphed.
- Rumfornemmelsen er en stereo-pan, ikke HRTF. Det er valgt, fordi Firefox knitrer med mange HRTF-pannere.
- Vogteren lægger en ny rute, hvis han sidder fast, og flyttes ud af syne, hvis det sker tre gange.
- `Afslut` kan kun lukke vinduet, hvis browseren tillader det. Ellers lukker du fanen selv.
- `start-game.ps1` er skrevet til Windows PowerShell 5.1 og 7. Den er ikke kørt på en Windows-maskine i dette miljø.
