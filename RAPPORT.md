# Skt. Agnes — rapport

Dette er gennemgangen af hele projektet: hvad spillet er, hvordan det er bygget, hvordan lyden blev tavs, og hvad der er rettet. Rapporten hører til kildekoden, så en anden kan fortsætte arbejdet uden at gætte.

## Spillet

Skt. Agnes er et førstepersons gyserspil i browseren. Du er journalisten Emil Kragh. Din kollega Maja er gået ind i det forladte asyl Skt. Agnes ved Vesterhavet og er ikke kommet ud. Indenfor går Vogteren stadig rundgang.

Spillet kører i Vite, TypeScript og Three.js. Der er ingen installation for den der bare vil spille: `dist/` er bygget og ligger i projektet, og `start-game.ps1` serverer den mappe.

## Historien

Maja har efterladt et brev i inventaret fra start. Asylet lukkede officielt i 1987, men patienterne blev ikke flyttet. Journalerne blev gemt, og Vogteren blev i huset. Han kan lide mørke og hader lys i øjnene.

Undervejs ligger noter, vagtbog, stiftelsesprotokol, nødstrømsnote og journaler. Pengeskabet i den ældre del af historien bruger stiftelsesåret, som står i arkivnoten. Årstallet står ikke her, så det ikke bliver spoilet i en oversigt.

Der er flere slutninger, valgt i `src/systems/Story.ts`:

| Id | Titel | Hvornår |
| --- | --- | --- |
| `tom_port` | Den tomme port | Du går ud gennem UD TIL STILHEDEN uden det fulde bevismateriale |
| `sandheden` | Sandheden | Du har bevismappen |
| `vidnet` | Vidnet | Bevismappe, rosenkrans og alle seks journaler |
| `flugten` | Flugten | Tunnel-slutningen |
| `optagelsen` | Optagelsen | Du dør |

I den nuværende bane er den spillbare udgang døren UD TIL STILHEDEN fra Det sidste kammer. Den kræver tre nøgler. Når døren er åben og du står i rummet bag den, spilles slutningen.

## Styring

| Tast | Handling |
| --- | --- |
| W A S D | Gå. A er venstre, D er højre |
| Skift | Løb, bruger udholdenhed |
| Ctrl eller C | Krøj. Ctrl sluges mens spillet har fokus, så Ctrl+W ikke lukker fanen |
| Mellemrum | Hop |
| Mus | Se dig omkring. Op kigger op. Omvendt Y er slået fra som standard og kan tændes i indstillinger |
| E | Åbn, luk, saml op |
| F | Tænd eller sluk lygten. Ét tryk |
| R | Sæt et batteri i |
| Q | Rosenkrans |
| G | Smid et batteri |
| Tab eller I | Inventar. Der er også en knap på skærmen |
| Esc | Pause |
| F3 | Ydelse |
| F4 | Lydstatus, kun med `?debug=1` eller `?test=1` |
| F6 | Spol 30 sekunder frem. Strømafbrydelsen ligger ved 2 minutter |
| F7 | Kør skyggefiguren forbi den dør du kigger på |

F6 og F7 virker kun når adressen har `?debug=1` eller `?test=1`. `?test=1` springer desuden muselåsen over, så automatiske tests kan styre figuren.

## Bygningen

Tre etager. Gulvhøjden er 0, 4 og 8. Hver etage har fire rum og en trappeopgang mod øst. Trapperne er ramper du selv går på, ikke en teleport.

Etage 1 (stue, y = 0):

| Id | Navn |
| --- | --- |
| `reception` | Receptionen. Her starter du |
| `patientgang` | Patientgangen |
| `operationsstue` | Operationsstuen |
| `slagterum` | Slagterummet |
| `trappe0` | Trappeopgang |

Etage 2 (y = 4):

| Id | Navn |
| --- | --- |
| `arkiv` | Arkivrummet |
| `laboratorium` | Det aflåste laboratorium |
| `obduktion` | Obduktionssalen |
| `personalerum` | Det forladte personalerum |
| `trappe1` | Trappeopgang |

Etage 3 (y = 8):

| Id | Navn |
| --- | --- |
| `kaeldergang` | Kældergangen |
| `kapel` | Det mørke kapel |
| `observation` | Observationsrummet |
| `kammer` | Det sidste kammer |
| `trappe2` | Trappeopgang |
| `stilhed` | Ud til stilheden, bag udgangsdøren |

Dørene mellem rummene står i `src/world/data.ts`. Laboratoriet er låst med nøglen fra operationsstuen. Udgangsdøren `door_stilhed` hedder UD TIL STILHEDEN og bliver ved med at være låst, indtil alle tre nøgler er i tasken. Så siger den hvilke nøgler der mangler. Med alle tre går låsen op.

Fire rum har ustabile loftslamper: operationsstuen, obduktionssalen, kapellet og observationsrummet. De flimrer som lamper, ikke som hvide prikker på skærmen. Støvprikker og det gamle hvide blink er taget ud.

## Mission, nøgler, batterier, kort

Opgaven på skærmen er først `Find de tre nøgler (N/3)` og derefter `Åbn UD TIL STILHEDEN`.

Nøglerne ligger fast:

| Genstand | Rum |
| --- | --- |
| Nøgle fra operationsstuen | Operationsstuen |
| Nøgle fra arkivet | Arkivrummet |
| Nøgle fra kapellet | Kapellet |

Der er præcis to batterier. Et i patientgangen, et i personalerummet. De vises på kortet først når du har været i rummet. Når du samler et op, forsvinder det, og lygten får +50, aldrig over 100. De kan kun samles én gang.

Kortet sidder øverst til venstre. Det viser den etage du står på, dit mærke og retning, besøgte rum med deres rigtige navn og de andre som `?`. Vogteren blinker rødt i cirka 3,6 sekunder når han skifter rum, og han kan lægge en ny rute efter cirka to minutter. Han tegnes ikke som en teleport på kortet: ruten sættes som et mål, og han går den.

Inventaret åbnes med Tab, I eller knappen. Linjen `Nøgler fundet: N/3` følger tasken.

## Vogteren

Kroppen er et sammenhængende hierarki: bækken, foroverbøjet bryst, skuldre, arme med underarm og fingre, ben med knæ og fod, hals og et blegt ansigt. Ansigtet er den ovale maske med skrå mørke øjne, røde pupiller, en tynd næse og et tyndt smil.

Tilstandsmaskinen i `src/ai/MonsterBrain.ts` har Idle, Patrol, Investigate, Search, Suspicious, Chase, Attack, LostPlayer og ReturnToPatrol. Synskegle og hørelse ligger i `src/ai/senses.ts`. Stien er A* på et gitter i `src/ai/Pathfinding.ts`. Møbler blokerer både kollision og de celler stien må bruge.

Hvis lygten rammer kroppen, og der er frit sigte, skjules han: intet net, ingen skygge, intet angreb. Kort efter sættes han et sted du ikke kigger, og ikke et sted han lige har været.

Hvis han ikke flytter sig, lægger han en ny rute. Bliver det ved, skjules han og sættes ud af syne. Det er en nødbremse, ikke et bevis for at han aldrig sidder fast i en reol. Den lange simulering på 30 minutter er ikke kørt i denne omgang. Se begrænsningerne.

## Hændelser

Hændelserne ligger i `src/horror/ScriptedEvents.ts` og affyres fra `Game.ts`. De gemmes med spillet.

| Hændelse | Udløser | Hvad der sker |
| --- | --- | --- |
| Indgangsskræk i operationsstuen | Du går ind med lygten tændt. Sker én gang | Bleg maske i cirka to sekunder og `skrig.mp3` |
| Indgangsskræk i arkivet | Du går ind. Sker én gang | Samme maske og skrig, uden krav om lys |
| Skygge i døren | Du står i gangen, døren er åben, og du kigger ind. Ikke oftere end hvert 24. sekund | En figur løber inde i rummet langs karmen. Lyden er `pludselig-skygge-monster.mp3` ved figuren |
| Slagterummet | Første gang du går derind | Rummet dæmpes, `dyb-lyd.mp3` fra hjørnet, en figur under krogene. Kig væk, sluk lygten, eller vent, så er han væk, og der kommer skridt bag dig |
| Strømafbrydelse | Cirka 120 sekunder inde, én gang, og flaget gemmes | Lys og lygte slukkes, `metallic.mp3`, skærmen er sort i 3,6 sekunder, og du står i Slagterummet når lyset vender tilbage |
| Hoved i karmen | Du står stille og kigger på en dør. Sjældent, og med pause bagefter | Et hoved læner sig ud, ser på dig og trækker sig tilbage |
| Direktørens småting | Løbende, med afstand | Hvisken, banken, telefon, knirk, lys der dør et øjeblik |

F6 lægger 30 sekunder til spilletiden, så afbrydelsen kan prøves uden at vente. F7 tvinger skyggefiguren.

## Lyd

### Sådan er den bygget nu

Alle syv filer ligger i `public/assets/audio/` og kopieres til `dist/assets/audio/` når du bygger:

| Fil | Brug |
| --- | --- |
| `baggrundslyd-hele-tiden-i-lav.mp3` | Den eneste løkke. 110 sekunder, 32 kHz stereo. Afspilles med `AudioBufferSourceNode` og `loop`, ikke et `<audio>`-element |
| `fodtrin-gaaende.mp3` | Skæres i enkelte skridt når filen er dekoderet. Ét skridt pr. skridtlængde |
| `lommelygte-taend-sluk.mp3` | Både tænd og sluk, i normalt tempo |
| `skrig.mp3` | Jumpscares |
| `pludselig-skygge-monster.mp3` | Figuren i døren |
| `dyb-lyd.mp3` | Slagterummet |
| `metallic.mp3` | Tom lygte og strømafbrydelsen |

Grafen er: kategori (baggrund, skridt, effekt, skræk) → master → en blid begrænser → højttalere. Begrænseren ligger på cirka −3 dB og rører ikke den normale blanding. Der er ingen drone, ingen savtak, ingen støj-løkke og ingen foldning.

Baggrunden sigter mod cirka −24 dBFS og måles lavere i praksis, fordi analysatoren midler et vindue. Skrigene er de højeste. Afstand dæmper ikke de fire store lyde ned i tavshed. De planlægges på `currentTime` og kun mens konteksten kører. Hvis du trykker før filen er dekoderet, eller før Firefox har genoptaget lyden, lægges kaldet i kø og spilles bagefter.

`ctx.resume()` kaldes synkront i selve klikket eller tastetrykket (Ny kampagne er et klik). Når konteksten går fra suspenderet til kørende, startes baggrundsløkken igen. Den startes ikke mens konteksten stadig er suspenderet.

Fodtrin: energitoppe i optagelsen findes ved indlæsning. Hvert skridt er et udsnit med en kort fade i begge ender, så klippet ikke klikker. Tempo følger skridtlængden (gå, løb, krøj). Tonehøjden rykker højst ±3 procent og sættes med det samme, ikke med en glidende `playbackRate`. Der er ingen løkke af hele filen.

Fejl ved hentning eller dekodning skrives med `console.error` og vises i F4-oversigten.

Døre og små klik der ikke har deres egen optagelse, er et kort forudlavet bank, ikke en løbende støj.

### Hvorfor lyden var tavs eller dårlig

Det her er målt i koden fra den build brugeren hørte (`adeba52`), ikke gættet.

1. **Optagelserne blev kørt gennem en envelope beregnet til et kort syntetisk bip.** Gain startede på 0, steg på 12 ms og faldt eksponentielt mod 0,0001 over hele filens længde. En fil på 1,5 til 6 sekunder var næsten væk efter det første sekund. Derfor manglede skrig, skygge, dyb lyd, metallic og lygteklik, selv om `play()` blev kaldt og loggen sagde at lyden var "spillet".

2. **Baggrunden blev startet for tidligt og aldrig igen.** `ensureBed()` kaldte `source.start()` i det øjeblik `decodeAudioData` blev færdig. På det tidspunkt er Firefoxs `AudioContext` ofte stadig suspenderet. En kilde der startes dér, kommer ikke pålideligt i gang når konteksten senere kører. Funktionen returnerede med det samme næste gang, fordi kilden allerede fandtes. Klik på Ny kampagne kaldte godt nok `resume()`, men løkken blev ikke startet om.

3. **Et syntetisk skrig optog pladsen.** Ved opstart blev der lagt en genereret skrig-buffer i samme nøgle som `skrig.mp3`. Det første kald kunne derfor spille det forkerte, og stemmebegrænseren (14 sekunders hul) kunne smide det rigtige kald væk bagefter.

4. **Gang lød skævt.** Hele `fodtrin-gaaende.mp3` kørte i løkke, og `playbackRate` blev trukket mod et nyt tempo med `setTargetAtTime`. Det giver en hørbar toneglidning, og pauserne mellem skridtene i optagelsen bliver en udtværet støj.

5. **Begrænseren pumpede.** Master-kompressoren stod på −14 dB og forhold 10. Samtidig trak hvert skrig musikbussen, hvor baggrunden sad, ned til 15 procent. De to ting oven i hinanden får baggrunden til at dukke og komme tilbage i stød.

6. **Der lå stadig genereret lyd under optagelsen.** Tre sinus-oscillatorer, en savtak til jagt og en 60 Hz-brum. Det er den mudrede bund under filen.

7. **Lygteklikket er en stille optagelse.** Filen topper omkring 0,16. Den blev spillet med en lille fast gain oven i envelope'en, så den forsvandt. Den bliver nu løftet til et tydeligt klik, uden filter og uden at hele filen fades ud.

8. **Serveren svarede ikke på Range.** `fetch` + `decodeAudioData` kan nøjes med et helt svar på HTTP 200, og det er ikke dét der gjorde Web Audio tavs. Firefoxs medieelementer kræver derimod `206` med `Content-Range`. `start-game.ps1` sender nu `Accept-Ranges: bytes`, `206` på `Range`, `Content-Length` for det udsnit der sendes, `Content-Type: audio/mpeg` og `Cache-Control`.

### Hvad der blev målt

Testen `e2e/launcher-audio.spec.ts` kører mod den rigtige `start-game.ps1` (PowerShell, HttpListener, port 5173), ikke mod Vite. Firefox var headed på Xvfb med `media.autoplay.default = 0` og en PulseAudio null-sink, så `AudioContext` faktisk kørte. Chromium kørte i samme opsætning. Ny kampagne blev klikket som en rigtig brugerhandling.

Begge browsere dekodede alle syv filer. Varighederne i Firefox var 3,27 s, 0,42 s, 6 s, 1,50 s, 6 s, 2,8 s og 110 s.

Firefox, kontekst `running`. Tal er lineære, målt på masteren med en analysator. Baggrunden var tændt alene. De andre lyde blev målt med baggrunden dæmpet, så tallet er selve filen.

| Lyd | RMS | Peak |
| --- | --- | --- |
| Baggrund | 0,040 | 0,152 |
| Skrig | 0,101 | 0,520 |
| Skygge | 0,084 | 0,422 |
| Dyb lyd | 0,087 | 0,393 |
| Metallic | 0,104 | 0,540 |
| Lygteklik | 0,039 | 0,341 |
| Ét skridt | 0,013 | 0,192 |

Chromium gav samme billede: baggrund RMS 0,040 og peak 0,104, skrig peak 0,520, metallic peak 0,651, klik peak 0,356, skridt peak 0,162. Ingen af dem var tavse. Skrigene ligger klart over baggrunden.

HTTP for hver fil, begge browsere: status 200, `content-type` indeholder `audio/mpeg`, `content-length` over 1000, `accept-ranges: bytes`, en cache-header, og `Range: bytes=0-15` giver 206 med `content-range: bytes 0-15/…` og 16 bytes krop.

Det her er ikke en lytning på brugerens Windows-maskine. Det er den samme serverkode og den samme Firefox-motor med en rigtig lyd-sink. Hvis en fil senere byttes ud, skal gainen måles igen, for niveauerne regnes ud fra filens egen top og RMS.

## Arkitektur

| Fil | Rolle |
| --- | --- |
| `index.html` | Skal. I dev peger scriptet på `/src/main.ts`. Bygget `dist/index.html` bruger relative stier |
| `src/main.ts` | Starter UI og spil |
| `src/game/Game.ts` | Løkke, kamera, lygte, døre, hændelser, gem, debug-API `window.__AGNES__` |
| `src/game/Input.ts` | Tastatur og mus. A/D, omvendt Y fra, Ctrl sluges |
| `src/player/PlayerController.ts` | Gang, hop, krøj, tyngde |
| `src/physics/Collision.ts` | Vægge, døre, sigtelinje |
| `src/world/data.ts` | Rum, døre, trapper, møbler, nøgler, batterier |
| `src/world/buildWorld.ts` | Kollision, navigationsgitter, gulvhøjde på ramperne |
| `src/world/LevelBuilder.ts` | Meshes, lamper, dørblade |
| `src/world/textures.ts` | Procedurelle flader |
| `src/ai/Pathfinding.ts` | A* |
| `src/ai/MonsterBrain.ts` | Tilstande |
| `src/ai/MonsterAI.ts` | Krop, sti, skjul i lygten |
| `src/ai/senses.ts` | Syn og hørelse |
| `src/ai/HorrorDirector.ts` | Tempo for de små hændelser |
| `src/ai/presence.ts` | Hjælp til hvor væsenet må stå |
| `src/horror/ScriptedEvents.ts` | De gemte skræk-forløb |
| `src/horror/JumpscareEngine.ts` | Masken foran kameraet |
| `src/horror/ScareLogic.ts` | Valg af skræktype |
| `src/horror/Atmosphere.ts` | Vejr og rum. Ingen støvprikker |
| `src/render/PostFX.ts` | Farve, korn holdt nede, vignette |
| `src/audio/AudioEngine.ts` | Graf, indlæsning, kø, baggrund, måling |
| `src/audio/clips.ts` | Filnavne og URL ud fra sidens adresse |
| `src/audio/steps.ts` | Find skridt, fade, løkke-samling |
| `src/audio/voice.ts` | Grænse for hvor tæt smålyde må ligge. Skrigene går uden om den |
| `src/ui/UI.ts` | Menuer, HUD, inventar, F4 |
| `src/ui/minimap.ts` | Kortet |
| `src/systems/Story.ts` | Nyt spil, mål, slutninger |
| `src/systems/catalog.ts` | Ting og noter |
| `src/systems/Inventory.ts` | Taske |
| `src/systems/battery.ts` | Afladning og +50 |
| `src/systems/SaveSystem.ts` | localStorage |
| `src/systems/Settings.ts` | Lyd, mus, grafik. Omvendt Y er fra |
| `src/core/math.ts` | Retning. Yaw 0 kigger mod +Z |
| `tests/` | Vitest |
| `e2e/game.spec.ts` | Menu, gang, dør, gem, genstart |
| `e2e/events.spec.ts` | Filer, fodtrin, lygte, skræk, skygge, slagter, tom lygte |
| `e2e/firefox-audio.spec.ts` | Ældre mix-tjek mod Vite. Tillader stadig at en headless Firefox uden lydkort bliver suspenderet |
| `e2e/launcher-audio.spec.ts` | Den nye test mod `start-game.ps1`. Fejler hvis en af de syv lyde er tavs |
| `playwright.config.ts` | Vite preview på port 4173. Springer launcher-testen over |
| `playwright.audio.config.ts` | PowerShell på port 5173, headed Firefox og Chromium |
| `start-game.ps1` / `start-game.bat` | Windows-server uden Node. Virker fra sin egen mappe |
| `public/assets/audio/` | De syv optagelser |
| `dist/` | Den byggede udgave. Den skal committes, så spillet kan startes uden `npm install` |

## Sådan kører man det

Uden Node, på Windows:

1. Dobbeltklik `start-game.bat`, eller kør `powershell -NoProfile -ExecutionPolicy Bypass -File .\start-game.ps1`
2. Åbn http://localhost:5173
3. Stop med Ctrl+C

Scriptet er skrevet til Windows PowerShell 5.1 og 7: ingen ternær operator, ingen `??`, ingen `?.`. Det bruger `HttpListener` uden administrator. Det er parset med PowerShell 7 i dette miljø og kørt her som den server testene rammer. Det er ikke kørt på en fysisk Windows-pc i denne omgang.

Med Node:

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm test         # Vitest
npm run build    # skriver dist/
npm run test:e2e # Playwright mod den byggede preview
npm run test:audio
```

`npm run test:audio` kræver PowerShell (`pwsh`) og Playwrights Firefox og Chromium. Den sætter `SKT_NO_BROWSER=1`, så serveren ikke selv prøver at åbne en browser.

## Debug

`?debug=1` eller `?test=1`.

| Tast eller kald | Betydning |
| --- | --- |
| F4 | Kontekstens tilstand, sample rate, seneste linjer, og fejl hvis en fil ikke kunne hentes |
| F6 | +30 sekunder |
| F7 | Skyggefigur |
| `window.__AGNES__` | Bruges af testene: `start`, `setMove`, `teleport`, `audition`, `measureBed`, `audioLog`, `save`, `load` og flere |

`audition('scream')` spiller filen med baggrunden nede og returnerer RMS og peak. Den findes så testen kan fejle på tavshed i stedet for at nøjes med en loglinje.

## Tests, og hvad der er verificeret

Kørt i denne omgang:

- Vitest: 44 tests, alle grønne. Sti, kollision, monsterets tilstande, batteri, døre, skridt-udsnit.
- `e2e/launcher-audio.spec.ts` i Firefox og Chromium mod `start-game.ps1`. Begge grønne. Tallene står i tabellen ovenfor.

Ikke kørt igen i denne omgang, og derfor ikke påstået:

- Den ældre Playwright-suite mod Vite (`e2e/game.spec.ts`, `e2e/events.spec.ts`, `e2e/firefox-audio.spec.ts`).
- Strømafbrydelsen spillet igennem i en browser: lys og lygte af, metallic, cirka 3,6 sekunder sort, du ender i Slagterummet, kun én gang, og det overlever gem og læs.
- Hovedet i karmen: betingelser, kig på spilleren, tilbage, pause.
- Skyggefiguren inde i rummet set fra gangen, med lydpositionen logget ved figuren.
- En spiller der går trapperne fra etage 1 til etage 3 og ned igen.
- Hoppets kurve, landing og loft, og krøj under en lav forhindring.
- En lang simulering af Vogteren (mange seed, åbne og lukkede døre) med krav om nul fastsidning over 2 sekunder, og at han ikke klipper ind i reoler.
- Hele kort-løbet: navn efter besøg, blink i 3–4 sekunder, flytning efter cirka 2 minutter, batterier efter opdagelse, begge +50, tre nøgler åbner UD TIL STILHEDEN og slutningen spiller.
- 30 sekunders spektrum af en stille blanding (fladhed, støjgulv, klik) og et særskilt tjek af løkkens samling over de 110 sekunder. Samlingen er lavet i bufferen (de sidste 20 ms trækkes mod første sample), men den er ikke målt i en optagelse i denne omgang.

Enheds- og stitestene dækker stadig at man kan gå fra receptionen op ad begge trapper til det sidste kammer når dørene er åbne, og at udgangen er låst uden nøglerne. Det er ikke det samme som at en spiller har gået turen i browseren.

## Kendte begrænsninger

- Huset er enkle former og procedurelle flader. Det er mørkt med vilje. Tænd lygten.
- Vogteren er ikke en skulptureret figur. Gangarten er led der drejer, ikke en fuld ik.
- Grafikloftet er et loft. Browseren styrer VSync.
- Retningen er stereo-pan, ikke HRTF. Det er valgt fordi mange HRTF-pannere knitrer i Firefox.
- Små lyde uden egen fil (dør, hvisken, knurren) er et kort bank, ikke en optagelse.
- Baggrundens målte RMS i Firefox var 0,040 (omkring −28 dBFS i det vindue analysatoren så), ikke præcis −24. Den er hørbar og ligger under skrigene. Peak var 0,15.
- Løkken er gjort samlingsfri i de sidste 20 millisekunder. Resten af filen er urørt. En studieløkke uden nogen redigering er det ikke.
- `Afslut` kan kun lukke vinduet hvis browseren tillader det.
- `start-game.ps1` er skrevet til Windows PowerShell 5.1. Her er den kørt med PowerShell 7.

## Videre

1. Kør de otte gameplay-punkter ovenfor i Playwright med de debug-kald der allerede findes, og ret det der fejler. Især strømafbrydelsen, hovedet, skyggen set fra gangen, trapperne begge veje, hop og krøj, og slutningen med tre nøgler.
2. En ren simulering af Vogteren i 30 minutter over mange seed, med døre åbne og lukkede, og et mål om at han ikke står stille i over to sekunder og ikke står inde i et møbel.
3. Optag 30 sekunder af den kørende blanding uden hændelser, og mål spektral fladhed og klik. Mål også løkkesamlingen ved at starte bufferen to sekunder før dens slutning.
4. Egne fodtrin pr. gulv (flise, træ, beton) når der findes optagelser. Indtil da er det samme skridt, bare i forskelligt tempo og styrke.
5. Hvis en ny optagelse er meget stille eller meget høj, så regn gainen om fra filens peak. Det sker allerede ved indlæsning, men det bør tjekkes med `npm run test:audio` efter hver udskiftning.
