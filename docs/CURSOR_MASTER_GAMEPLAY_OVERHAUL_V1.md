# SKT. AGNES — KOMPLET DANSK UDVIKLINGSPLAN TIL CURSOR V1

## Gameplay, gyserhændelser, monster-AI, historie, lydintegration og kvalitetssikring med Design V2 som grundlag

**Status:** Programmeringsspecifikation og overdragelse til Cursor. De foreslåede funktioner er ikke alle implementeret endnu.  
**Projekt:** `Dartnation/SktAgnes`  
**Arbejdsgren:** `plan/cursor-gameplay-overhaul-v1`  
**Designgrundlag:** `design/dark-world-props-and-audio-v2` → `design/horror-hud-audio-direction-v1` → `fix/audio-mix-and-spatial-cues`  
**Teknologi:** Three.js, TypeScript, Vite, Vitest og Playwright.  
**Sprog i spil og dokumentation:** Dansk. Engelske kodeidentifikatorer og biblioteksnavne bevares.  
**Gennemgået:** 20. november 2026.

> **Til Cursor:** Læs HELE dette dokument, før du ændrer noget. Gennemgå den eksisterende kode, bevar det nye design og lydene, og begynd programmeringen i små, testbare opgaver. Undlad at bygge projektet om fra bunden. Spørg kun brugeren, hvis en virkelig væsentlig beslutning ikke kan løses sikkert.

---

## 0. Arbejdsfordeling og ufravigelige regler

Brugeren har aftalt følgende ansvarsfordeling:

**ChatGPT står for:** Visuelt udtryk, horror-stil, UI og HUD, materialer, udseendet af monstre, døre og rum, originale 3D- og lydaktiver, lyddesign og den visuelle retning for belysningen.

**Cursor står for:** Al gameplayprogrammering, tilstandsmodeller, interaktioner, inventar, taster, missioner, gåder, monstrets AI, animationsstyring, gem/indlæs, hændelsesplanlægning, synkronisering af lyd og lys, kollision, navigation og automatiske tests.

**Sikkerhedsregler:**
- Bevar de eksisterende figurer, miljøer, original lydpakke og Design V2. Erstat ikke ChatGPTs design uden at beskrive og begrunde ændringen.
- Brug en særskilt udviklingsgren eller Git-worktree. Ændr ikke `main` direkte.
- Kontrollér altid `git status`, inden der skiftes gren. Brugerens lokale ændringer og Cursors eksisterende arbejde må aldrig overskrives.
- Ingen `git reset --hard`, `git clean`, tvunget push eller ukontrolleret `stash pop`.
- Bevar historien om journalisten Emil Kragh, Maja, det lukkede Skt. Agnes, 1987, Vogteren, tre nøgler, sikringer/generator, journaler, kodegåden, rosenkransen og de fem eksisterende slutninger.
- Gamle gemte spil skal fortsat kunne indlæses.
- Eksterne aktiver kræver lovlig brugsret og dokumenteret oprindelse. Ingen betalte API-tjenester må være nødvendige for at spille.
- En grøn TypeScript-build beviser IKKE, at gameplay, 3D-animation, lyd eller oplevelse fungerer. Test i en rigtig browser.
- Del arbejdet i mindre pull requests, som kan gennemgås og rulles tilbage.

## 1. Vision: Et sammenhængende, professionelt gyserspil

**Spilleroplevelse:** Emil Kragh leder efter Maja i et forladt, havnært hospital. Bygningen virker forladt, men et væsen patruljerer gangene. Spilleren overlever ved at være opmærksom, undersøge dokumenter, vælge sine ruter og kontrollere lys og støj — ikke ved at skyde sig igennem spillet.

**Fire principper:**
1. **Forventning frem for konstant larm.** Stilhed, spor og antydninger er vigtige. Undgå vedvarende tilfældige skrig og jumpscares.
2. **Forståelige konsekvenser.** Løb, åbne døre, lys, støj og skjulesteder skal have logiske følger. Spillet skal være skræmmende, men retfærdigt.
3. **Fortælling gennem omgivelserne.** Patientjournaler, medicinudstyr, fotografier, beskeder og rummenes tilstand afslører historien.
4. **Design og funktion skal passe sammen.** Mørket gør lommelygten vigtig; lyde afslører, hvad der sker; monstre skal bevæge sig fysisk troværdigt.

**Foreløbige mål til afprøvning, ikke færdige funktioner:** Første væsentlige uhyggelige hændelse efter ca. 5–8 minutter og en gennemspilning på omkring 35–55 minutter. Forløbet skal styres af spillerens opdagelser, ikke tvinges af timere.

**Foreslået dramatisk forløb:**
- **Indledning:** Receptionen med ustabilt loftlys, Majas besked, lommelygte, et spor og lyden af en dør, der smækker. Monsteret antydes, men angriber ikke straks.
- **Udforskning:** Spilleren vælger rute, samler dokumenter, finder nøgler, bruger kortet og lærer, hvilke lyde der er farlige.
- **Opbygning:** Strøm, arkivfund og beviser ændrer bygningen. Vogteren bliver mere opmærksom, men er stadig bundet af syn og hørelse.
- **Finale:** Sidste gåder, valg af udgang og konsekvenser af de beviser, som spilleren har fundet.

## 2. Bekræftet teknisk grundlag og fundne mangler

Den tidligere Design V2-version bestod senest 55/55 Vitest-tests og en TypeScript/Vite-build. Det er **ikke** dokumentation for en fuld manuel gennemspilning.

**Eksisterende systemer:**
- `src/game/Game.ts`: Samlingspunkt på omkring 2.000 linjer med input, interaktion, opdatering, AI, UI, lyd og lagring.
- `src/game/Input.ts`: WASD, Ctrl/C, tastetryk og pointer lock.
- `src/player/PlayerController.ts`: Bevægelse, hop, kollision, krybning og glidende kamerahøjde.
- `src/ai/MonsterAI.ts`, `MonsterBrain.ts`, `Pathfinding.ts`, `senses.ts`, `presence.ts`: Vogteren, tilstandsmodel, sti, syn, hørelse og lommelygtens påvirkning.
- `src/ai/HorrorDirector.ts`, `src/horror/JumpscareEngine.ts`, `ScareLogic.ts`, `ScriptedEvents.ts`: Spænding, hændelser og skræmmeeffekter.
- `src/world/data.ts`, `buildWorld.ts`, `LevelBuilder.ts`, `SetDressing.ts`: Rum, døre, trapper, møbler, kollision og set-dressing.
- `src/ui/UI.ts`, `minimap.ts`, `src/style.css`: Brugerflade, inventar og minimap.
- `src/systems/Story.ts`, `Inventory.ts`, `catalog.ts`, `SaveSystem.ts`, `Settings.ts`, `battery.ts`: Historie, genstande, gemninger, indstillinger og ressourcer.
- `src/audio/AudioEngine.ts`, `clips.ts`, `mix.ts`, `steps.ts`, `voice.ts`: Optagelser, procedurale miljølyde, lydstyring og fodtrin.
- `src/render/PostFX.ts`: Bloom, farver, skygge-/omgivelseseffekter.
- `tests/` og `e2e/`: Vitest- og Playwright-tests.

**Vigtige problemer at løse:**
- `I`/`Tab` åbner inventaret i `Game.updatePlaying`, men lukningen skal håndteres, selv om gameplayopdateringen er sat på pause.
- Missionsvisningen i `Story.objectives()` fokuserer primært på tre nøgler, selvom spillet indeholder sikringer, arkiv, beviser og flere slutninger.
- Minimapet er stadig tegnet som en enkel canvas-visning. CSS alene gør det ikke til et professionelt kort.
- Flere gysersystemer kan udløse hændelser. De skal koordineres, så de ikke skaber gentagelser, overlappende effekter eller ulogiske situationer.
- Lommelygten påvirker Vogteren; den bør ikke være et ubegrænset værn.
- Batteriet genoplades langsomt, når lyset er slukket. Det skal balanceres bevidst.
- Gemmeformatet er stadig version 1 og kræver eventuelt migration ved større nye systemer.
- `AudioEngine.setTension` modtager et 0–100-tal, men behandler det som et 0–1-niveau. Det skal normaliseres.
- `setRadio` er endnu ikke en virkelig radioafspilning; nogle atmosfærefunktioner er bevidst deaktiveret.
- Ældre rum-ID'er som `r102` skal kontrolleres mod de aktuelle rumdata, så planlagte hændelser faktisk kan udløses.
- Playwright gemmer enkelte screenshots i `/opt/cursor/artifacts`; gør testen kompatibel med Windows via Playwrights output-stier.
- Nye møbler kan ændre ganglinjer og AI-ruter. Test alle vigtige passager, især trapper og døråbninger.

## 3. Arkitektur: Opdel logikken uden at starte forfra

Behold `Game.ts` som samlingspunkt, men flyt gradvist ansvar til små, testbare moduler.

**Foreslåede moduler:**
- `src/game/GameEvents.ts`: Typebestemte hændelser og abonnementer.
- `src/game/GameClock.ts`: Spiltid, planlagte handlinger, pauser og aflysning.
- `src/game/ModeController.ts`: Menu, spil, pause, inventar, undersøgelse og fokus.
- `src/game/InteractionSystem.ts`: Synslinje, afstand, prioriteret objekt og handling.
- `src/game/ObjectiveSystem.ts`: Missionsgraf med afhængigheder.
- `src/game/EventScheduler.ts`: Samlet hændelsesstyring for gys og historie.
- `src/game/PerceptionSystem.ts`: Hørelse, syn, observationer og skjul.
- `src/game/ResourceSystem.ts`: Batteri, udholdenhed og helbred.
- `src/game/WorldState.ts`: Vedvarende dør-, rum- og objekttilstand.
- `src/game/GameplayTelemetry.ts`: Testmålinger.
- `src/audio/AudioCueAdapter.ts`: Forbinder hændelser til lyde uden at erstatte lydmixeren.

**Eksempel på typebestemte hændelser:**

```typescript
type GameEvent =
  | { type: 'PLAYER_STEP'; surface: 'tile' | 'wood' | 'metal' | 'concrete'; distance: number; pos: Vec3 }
  | { type: 'DOOR_MOVED'; doorId: string; from: number; to: number; pos: Vec3 }
  | { type: 'PICKUP_TAKEN'; pickupId: string; itemId: string; pos: Vec3 }
  | { type: 'LAMP_CHANGED'; lightId: string; level: number; pos: Vec3 }
  | { type: 'OBJECTIVE_COMPLETED'; objectiveId: string }
  | { type: 'MONSTER_SENSE'; sense: 'noise' | 'sight' | 'flash'; pos: Vec3 }
  | { type: 'SCARE_REQUEST'; id: string; roomId: string; severity: 'soft' | 'hard' }
```

Alle hændelser skal have entydigt ID, kilde-ID, spiltid, scene-`epoch` og eventuelt `correlationId`. En hændelse udsendes **én gang ved en faktisk tilstandsændring**, ikke for hvert renderet billede.

**Tekniske krav:**
- Afmeld event-lyttere ved oprydning og indlæsning. Undgå dobbelte listeners.
- Brug deterministisk tilfældighed og et kontrollerbart ur i tests.
- Ved nyt spil/indlæsning ændres `epoch`, så gamle hændelser og lydjobs afvises.
- Tastaturinput håndteres efter aktiv spiltilstand. Ingen gameplaytaster under et aktivt tekstfelt eller inventarmodal.
- Kollision og navigation skal testes efter hver større ændring i rum, døre eller props.
- Refaktorér trinvis; lav ikke en gigantisk omskrivning af motoren.

## 4. P0 — Grundlæggende stabilitet, før nye funktioner

### P0-01: Sikker start og førmåling
1. Opret arbejdsgren fra denne plangren uden at overskrive lokale ændringer.
2. Kontrollér `git status` og notér aktuelle commits.
3. Kør `npm ci`, `npm test`, `npm run build`, `npm run test:e2e` og `npm run test:audio`.
4. Hvis Playwright mangler browsere, dokumentér behovet for `npx playwright install`.
5. Flyt screenshots til `testInfo.outputPath('billede.png')`.
6. Gem baselineresultater, browserfejl, manglende assets, billedmateriale og målte FPS.

**Godkendelseskriterium:** Førtilstanden er dokumenteret, før systemerne ændres.

### P0-02: Inventar med I/Tab/Escape
- `I` og `Tab` åbner og lukker inventaret. `Escape` lukker det eller går tilbage til korrekt overordnet skærm.
- Spilleren må ikke bevæge sig eller udføre andre handlinger, når inventar, pause eller kodefelt har fokus.
- Genstande identificeres stabilt ved `itemId`, ikke kun listeposition.
- Frigiv pointer lock ved åbning; gendan det kun efter en brugerhandling, som browseren accepterer.
- Keyboard-input i tekstfelter må ikke aktivere spilgenveje.
- Ingen genstand må blive brugt to gange via dobbelt eventhåndtering.

**Test:** Inventar åbner/lukker, musen fungerer, pause/undersøgelse fungerer, og ingen tastaturfælde opstår.

### P0-03: Pålidelig lyd
- Spillerfodtrin må **kun** komme fra tilbagelagt afstand, ikke tastetryk eller tilfældige gyserhændelser.
- Stop aktive skridt ved stilstand, skjul, pause, død, indlæsning og sceneskift.
- Normalisér spændingsniveauet før lydstyring, eksempelvis `clamp01(tension / 100 + (chasing ? 0.2 : 0))`.
- Master, musik og effekter skal alle kunne stilles helt til 0. Skrig må ikke omgå effektvolumen.
- Undgå for høje toppe, overlap af stingers og gamle lyde, der afspilles efter resume.
- Kobl dør-, lampe- og genstandslyde til den faktiske hændelse.
- AudioContext startes efter en gyldig brugerhandling. Registrér og vis manglende lydfiler.

**Test:** 20 sekunder stille = ingen fodtrin. Effektvolumen 0 = ingen effektlyd. Pause/indlæsning = ingen forsinkede skrig.

### P0-04: Sikker gemning
- Bevar gamle v1-gemte spil.
- Tilføj kun v2-felter med kontrolleret migrering og validering.
- Gem færdige engangshændelser, opsamlede genstande, åbne døre, missioner og nødvendige rumbegivenheder.
- Ukendt eller ødelagt lokal JSON må ikke få spillet til at bryde sammen.
- Indlæst position må ikke være inde i vægge, inventar eller en låst passage.
- Ved nyt spil skal midlertidige monstre, lyde, planlagte jobs og interaktionsdata nulstilles præcist én gang.

**Test:** Gamle/nye gemninger, genstart, dødsfald, fejlbehæftede data og alle slutningsforløb.

## 5. P1 — Bedre gameplay, monstre og historie

### P1-01: Et rigtigt missionssystem

Udvid den eksisterende historie med en deklarativ missionsgraf:

- **M1:** Læs Majas besked og forstå, hvorfor Emil er kommet.
- **M2:** Undersøg Receptionen og få de første oplysninger om bygningen.
- **M3:** Find tre sikringer, og få generatoren i gang.
- **M4:** Undersøg arkivet og forstå datoerne/koden til pengeskabet.
- **M5:** Find nøglerne fra kapel, operationsstue og arkiv.
- **M6:** Find den skjulte forbindelse, journalerne og beviserne.
- **M7:** Åbn en udgang; valgfri dokumentation, journaler og rosenkrans påvirker slutningen.

Hver mission skal have stabilt `id`, forudsætninger, trigger, dansk tekst, valgfri hjælp og gemt status. Vis kun kendte mål. Undgå spoilers for skjulte rum. Tillad, at spilleren vender tilbage efter oversete dokumenter.

### P1-02: Døre, genstande og undersøgelse
- Vælg objekt ud fra synslinje, afstand og central sigteretning.
- Skeln mellem dørtilstande: lukket, åbner, åben, lukker, låst, klemt og blokeret.
- Håndtag, dørblad, kollision og lyd skal følge samme tilstand.
- Låste døre og rekvisitter må ikke klippe gennem spilleren eller spærre en kritisk passage.
- Skuffer, skabe og journalmapper kan undersøges; unikke nøgler må ikke dukke op tilfældigt.
- Genstande har vedvarende ID'er og kan ikke samles op to gange.
- Dokumenter vises tydeligt, eventuelt i en særskilt undersøgelsesvisning.
- Genstande, der er vigtige for historien, må ikke kunne destrueres ved en fejl.

### P1-03: Vogteren skal være intelligent, skræmmende og til at undslippe

Brug den eksisterende `MonsterBrain`, `MonsterAI`, `Pathfinding` og `senses`.

**Tilstandsforløb:** Patrulje → Mistanke → Undersøgelse → Søgning → Jagt → Mistet spor → Tilbagevenden.

- Lyd giver et omtrentligt område, ikke spillerens præcise position.
- Hørelse afhænger af lydtype, distance, etage, lukkede døre og lydens alder.
- Syn afhænger af faktisk synslinje, synsvinkel og observationstid. Ingen syn gennem vægge.
- Monsteret kan stoppe ved døråbninger, lytte, kigge sig omkring, undersøge skabe/senge og lede efter spilleren.
- Skjul skal have konsekvenser. Monsteret kan undersøge et skjulested, hvis det så spilleren gå derind eller hørte støj.
- Spilleren skal kunne miste monsteret ved at bruge afstand, mørke, lyd og rutevalg.
- Lommelygte kan give en kortvarig taktisk fordel, men må ikke skabe permanent usårlighed.
- Undgå synlig teleportering til spilleren, angreb gennem vægge, ustoppelig kædejagt eller monster, der låser sig fast på en trappe.
- Opdater ruter ved relevante hændelser og med begrænset frekvens, ikke for hvert billede.

**Test:** Synslinje, høreafstand, trapper, døre, skjul, jagt, tabt spor, cooldown og fair flugt.

### P1-04: Animation af riggede monstre fra Mixamo

Brugeren kan levere et rigget monster og særskilte Mixamo-animationer. Cursor skal kontrollere filernes indhold før import.

**Anbefalet filpakke:**
- Grundmonster med skelet og mesh, gerne T-pose, downloadet én gang med **With Skin**.
- `Idle`, `Walk`, `Run`, `Search`, `Investigate`, `Attack`, `Stagger`, `Recover` og eventuelt `Hide`, `Death` eller `Disappear`.
- Yderligere animationer downloades med **Without Skin**, når de er beregnet til det samme Mixamo-skelet.
- Vælg **In Place** ved loopende gang/løb, når muligheden er tilgængelig, så den eksisterende AI styrer figurens position og rodanimation ikke bevæger karakteren en ekstra gang.
- Vælg samme billedhastighed, eksempelvis 30 FPS, og dokumentér afvigelser.

**Programmeringskrav:**
1. Kontrollér rigs, skinning, teksturer, animationsklip og lovlig brugsret.
2. Konvertér ved behov FBX til `.glb`/`.gltf` og indlæs med Three.js `GLTFLoader`.
3. Anvend `THREE.AnimationMixer` og separate `AnimationAction`-objekter. Bind hvert klip til den korrekte rig.
4. Lad `MonsterBrain` vælge **tilstand**. Lad animationssystemet vælge, afspille og krydsfade klippene ud fra tilstanden.
5. Skift gradvist mellem animationer med startværdier omkring 0,15–0,35 sekunder, og afprøv resultatet visuelt.
6. Synkronisér gang- og løbeklippets hastighed med den faktiske fremdrift. Monsteret må ikke glide på gulvet eller skøjte gennem sving.
7. Vrid karakteren naturligt mod den planlagte rute; brug separate hovedbevægelser, hvis riggen tillader det.
8. På trapper skal animation, kropshøjde og kollision passe. Ingen fod gennem trin eller hovede ind i loft.
9. Hvis monsterfodtrin skal bruges, afspilles de ud fra reel fodkontakt/animation, ikke i en tilfældig løkke og ikke gennem spillerens fodtrinskanal.
10. Brug én tydelig, stabil kollisionskapsel uafhængigt af det dekorative skelet.
11. Ved manglende eller fejlagtigt 3D-asset falder spillet tilbage på det nuværende monster uden at stoppe.
12. Animationer til et andet skelet kræver korrekt retargeting, ikke blind tilknytning.

**Test:** Idle → Walk → Run → Search → Attack → Recover, stop/start, 90° og 180° sving, trapper, døre, skjul, pause og indlæsning. Ingen fastlåst T-pose.

### P1-05: Central horror-director og spændingsstyring

Brug én fælles planlægger til at koordinere `HorrorDirector`, `ScriptedEvents`, `ScareLogic` og `JumpscareEngine`.

**Dramatisk kurve:** Ro → Forventning → Antydning → Konfrontation → Restitution.

Beslutninger skal tage højde for:
- Spillerens aktuelle rum og tidligere besøg.
- Historisk fase, observerede spor og tidligere hændelser.
- Lommelygtens tilstand, nylig støj og monsterets placering.
- Spillerens helbred, skjul og aktuelle aktivitet.
- Hvor længe der har været ro.

**Krav:**
- Ingen større skræmmehændelse samtidig med en anden stor hændelse, et monsterangreb, et vigtigt tekstpanel eller aktiv pause.
- Hver unik hændelse får sit eget gemte ID.
- Rumhændelser skal passe til stedet; radio, telefon, operationsudstyr og kapelklokke har reelle eller plausible lydkilder.
- Lad små tegn varsle fare: papir ændrer plads, en stol står forskudt, en ny patientjournal findes, et skab står åbent.
- Respekter en restitutionsperiode efter voldsomme hændelser.
- Aflys forældede planlagte hændelser ved sceneskift eller gemmeindlæsning.

**Foreløbige balancemål til afprøvning:** Betydelige mindre hændelser med omtrent 25–75 sekunders mellemrum, når forholdene tillader det; store oplevelser typisk flere minutter fra hinanden. Stilhed er også en vigtig del af gyset.

### P1-06: Mørke, lommelygte og ressourcer
- Spillet skal være mørkt, men der skal findes genkendelige silhuetter og enkelte praktiske lyskilder.
- Lommelygtens lys skal være nyttigt til at opdage spor, men kan også afsløre spilleren for monsteret.
- Batteriforbrug, eventuel passiv genopladning, fundne batterier og fjendens reaktion balanceres samlet.
- Lampens lysintensitet og elektriske summen skal følge samme hændelse.
- Undgå hyppige fuldskærmsblink, der er ubehagelige eller utilgængelige.
- Generatoren og strømtilstande skal være gemt og påvirke verden konsekvent.
- Giv mulighed for mindre flimmer, mindre kamerarystelser og tilgængelig lysstyrke.

### P1-07: Minimap, inventar og brugeroplevelse
- Bevar ChatGPTs visuelle design i `src/style.css`. Cursor implementerer korttegning, taster og inventarlogik.
- Minimap viser korrekt etage, spillerposition, orientering, opdagede rum, døre og kendte mål.
- Afslør aldrig hemmelige rum på kortet, før spilleren har opdaget dem.
- Monsteret skal ikke vises som permanent GPS-prik uden en forklaring i spillets verden.
- Tegn kortet skarpt ved forskellig skærmskalering (korrekt forhold mellem CSS-pixels og canvas-opløsning).
- Inventar skal kunne betjenes med tastatur; markeret genstand og beskrivelse skal passe sammen.
- Nøgler bruges på relevante døre, dokumenter kan læses, batterier kan bruges, og unikke spor må ikke smides væk ved en fejl.
- Test skift mellem inventar, spil, menu, pause, tekstfelter og musefangst.

## 6. P2 — Store gysersekvenser og ekstra funktioner

### P2-01: Tre gennemtænkte, filmiske sekvenser
**Receptionen — hospitalet vågner:** Tre lysarmaturer blinker forskudt. Den elektriske summen forsvinder. En dør høres længere væk. Majas besked peger mod arkivet. Ingen tilfældig fuldskærmsansigtsskræm.

**Arkivet — navnene og datoerne:** Dokumenter modsiger hospitalets officielle historie. En skikkelse kan skimtes ved et skrivebord eller i en glasrefleksion efter spilleren har undersøgt et spor. Det skal være muligt at forlade rummet og vende tilbage.

**Operationsstuen/Obduktionen — vidnet:** En båre forskydes, medicinudstyr rasler, lyset falder, og den maskerede skikkelse viser sig kort i døråbningen. Sekvensen sker kun én gang og gemmes.

Hver sekvens har forudsætninger, placering, flugtvej, konsekvens, lydplan, gemt hændelses-ID og browsertest.

### P2-02: Levende miljø med mening
- Lokaliseret vanddryp, ventilation, rørbanken, klokke og en radio, når det passer til rummet.
- Dørknirken afspilles, når en dør faktisk bevæger sig.
- Papirer, gardiner, portrætter, våde fodspor som **visuelle spor** og små ændringer i miljøet kan forstærke historien.
- Undgå falske spillerfodtrin eller uhæmmede tilfældige lyde.
- Hvert væsentligt rum bør bidrage med mindst én opdagelse, en ledetråd, en fare eller en meningsfuld fortælling.

### P2-03: Tilgængelighed
- Separat master-/musik-/effektlydstyrke og undertekster til meningsbærende stemmer.
- Justérbar musefølsomhed, inverteret Y, mindre kamerarystelse, reducerede lysblink og valgfrie post-effekter.
- Vis tydeligt fokus og læsbare danske tekster.
- Pause skal frigive musen og stoppe gameplayhændelser.
- Frivillige hints kan hjælpe spillere, der sidder fast, uden at afsløre alle hemmeligheder.

### P2-04: Ydelse og assethåndtering
- Mål efter stabil oplevelse på en almindelig Windows-computer; 60 FPS ved 1366×768 på mellemindstillinger er et **mål, ikke et verificeret resultat**.
- Begræns samtidige skyggekastende lys, tegningskald, geometrier og materialekopier.
- Brug instancing eller andre teknikker til gentagne møbler, når det kan dokumenteres, at ydelsen forbedres.
- Indlæs/dekod kun nødvendige lyd- og 3D-aktiver. Undgå lyddekodning, der fryser billedet.
- Første rum skal kunne vises hurtigt; manglende assets skal have en stabil reservevisning.
- Sørg for korrekt `dispose()` ved genstart, load og sceneskift.
- Udvid debugvisningen med målinger af draw calls, lydstemmer, planlagte hændelser og AI-ruteberegninger.

## 7. Præcise programmeringskontrakter

### A. Hændelsesplanlægning
- Brug spiltid, ikke `Date.now()`, til historierelaterede begivenheder.
- En opgave har `id`, type, `dueTime`, `roomId`, `epoch`, prioritet, eventuel eksklusiv gruppe, betingelser og mulighed for annullering.
- Pauseret gameplay skal ikke indhente gamle hændelser som et kæmpe udbrud, når man fortsætter.
- Ved nyt spil/indlæsning ændres `epoch`, og gamle jobs afvises.
- Kun én stor skræmmehændelse og én meningsbærende dialog ad gangen.
- Pseudo-tilfældighed skal kunne genskabes i tests.

### B. Inventarhandlinger
- Behandl genstandshandlinger som kontrollerede tilstandsovergange.
- Afvis ukendte genstands-ID'er, for mange anvendelser og gentagen opsamling.
- Opdatér tilstanden **før** tilhørende lyd og UI-event udsendes.
- Gendan synlige pickups ud fra gemte `pickedUp`-ID'er.
- Historiekritiske genstande må ikke blive ugyldige ved et fejltryk.

### C. Monsterets opfattelse
- Sensorer leverer observationer med `type`, position, tillid, tidspunkt og kilde.
- Observationer mister værdi over tid og ved afstand/forhindringer.
- `MonsterBrain` vælger handling; `Pathfinding` vælger rute; figurcontroller og animation udfører den.
- UI, renderer og lydcallbacks må ikke direkte omskrive monsterets adfærdstilstand.
- Brug rutevalidering og genfinding, hvis en dør eller et møbel blokerer.

### D. Verdens tilstand
- Hvert interaktivt objekt har et stabilt ID og en afgrænset tilstand.
- Døre, rekvisitter og kollision bruger fælles verdenskoordinater.
- Rent dekorative objekter skal ikke have utilsigtet kollision.
- Åbne døre påvirker synslinje og lydafskærmning korrekt.
- Undersøg råderum omkring trappe, dørblad og loft ved enhver geometrisk ændring.

### E. Grafik og lyshændelser
- Bevar V2-rendering og den eksisterende visuelle retning.
- Lad belysningens reelle intensitet følge lampehændelserne; emissive materialer skal stemme overens.
- Spillets udfordring må ikke fjernes ved en fejl med skærmlysindstillinger, men tilgængeligheden skal bevares.
- Skab mørke gennem lys, materialer og tåge — ikke blot ved at gøre hele skærmen sort.

## 8. Filansvar for Cursor

| Eksisterende fil | Hvad Cursor skal gøre |
|---|---|
| `Game.ts` | Behold som samlingspunkt, flyt regler til moduler og forbind dem her |
| `Input.ts` | Modalstyring, I/Tab/Escape og fokus |
| `UI.ts` | Forbind eksisterende knapper til faktiske inventar- og undersøgelseshandlinger |
| `ui/minimap.ts` | Implementér kortets funktionelle tegning uden at ændre visuel CSS-retning |
| `systems/Story.ts` | Missionsgraf med afhængigheder og korrekt slutningslogik |
| `systems/Inventory.ts`, `catalog.ts` | Validerede genstandshandlinger, entydige ID'er |
| `systems/SaveSystem.ts` | Migration, robust indlæsning og gemning |
| `ai/MonsterBrain.ts`, `MonsterAI.ts`, `senses.ts` | Fair sansning, jagt, eftersøgning og bevægelse |
| Nyt monster-animationsmodul | `GLTFLoader`, `AnimationMixer`, overgange, skalering og skeletbinding |
| `horror/HorrorDirector.ts`, `ScriptedEvents.ts`, `ScareLogic.ts` | Fælles hændelsesplanlægning og gemt historik |
| `audio/AudioEngine.ts` | Normaliser spænding, forbind lydaktiver og håndhæv kanal-/hændelsesregler |
| `world/buildWorld.ts`, `data.ts` | Rum-ID'er, kollision, navigation og interaktionsmetadata |
| `render/PostFX.ts` | Bevar designet; kun dokumenterede kompatibilitets-/ydelsesrettelser |
| `e2e/` og `tests/` | Genkendelige og gentagelige tests, Windows-kompatible billeder |

**Vigtigt:** ChatGPT ejer `src/style.css` og de visuelle geometri-/materialeændringer, medmindre der aftales en konkret integrationsrettelse.

## 9. Obligatorisk testplan

1. **T0 – Bygning og baseline:** `npm test`, `npm run build`, Playwright i Chromium, eventuelt Firefox, og lydtest.
2. **T1 – Tastatur:** I/Tab åbner/lukker, Esc, fokus, pause, kodefelt og pointer lock.
3. **T2 – Bevægelse:** Stilstand, gang, løb, Ctrl, hop, skjul, pause og indlæsning uden uønskede fodtrin.
4. **T3 – Rum:** Alle tre etager, trapper begge veje, møbler og kritiske døre uden fastlåsning.
5. **T4 – AI:** Monsteret reagerer på lyd/syn, kan lede, miste spilleren og navigere rundt om forhindringer.
6. **T5 – Historie:** Tre nøgler, sikringer/generator, kode, beviser, journaler, rosenkrans og fem slutninger.
7. **T6 – Horror:** Gentagelige simulationsforløb med cooldown, ingen dobbelt engangshændelse, ingen større skræm under pause.
8. **T7 – Lyd:** Kanaler på 0, genoptagelse, fejlende filer, forældede cues, korrekt lyd ved kilder og ingen falske fodtrin.
9. **T8 – Gemning:** Gamle versioner, beskadiget JSON, ugyldige genstands-ID'er og genstart.
10. **T9 – Lys:** Lommelygte til/fra, tre receptionlamper, korrekt lyd, mørke uden ubrugelige ruter.
11. **T10 – Brugerflade:** 1920×1080, 1366×768 og smalle vinduer; kortet må ikke overlappe vigtige beskeder.
12. **T11 – Ydelse:** Mindst fem minutters spil med FPS, GPU-/RAM- og lydnodeforbrug; ingen vækst ved gentagne genstarter.
13. **T12 – Browser:** Ingen kritiske konsolfejl, 404-aktiver eller ødelagte mål/afslutninger.
14. **T13 – Monsteranimation:** Idle, Walk, Run, Search, Attack, vendinger, døre, trapper og 3D-kollisionskapsel. Ingen T-pose eller fodglidning.

**Testmetode:** Renkodet logik testes i Vitest. Integration testes med kontrolleret ur og lydadapter. Playwright tester virkelige input og skærmbilleder samt test-API'et `window.__AGNES__`. Screenshots gemmes med `testInfo.outputPath()` og må ikke bruge en hårdkodet Linux-mappe.

Rapportér præcis hvilke tests der er kørt; spring ikke stiltiende over, hvis browser eller lydudstyr mangler.

## 10. Udviklingsrækkefølge: Syv overskuelige pull requests

**PR-01 – Fundament og kontroller:** Førmåling, Windows-kompatibel Playwright, I/Tab/Escape, lydspænding, ugyldige hændelser og tests.

**PR-02 – Missioner og inventar:** Missionsgraf, ledetråde, genstandshandlinger og sikker gemning.

**PR-03 – Monster-AI og animationer:** Fair sansning, søgning, jagt, skjul, lommelygte og korrekt rigget figur med animationer. Hvis brugeren endnu ikke har givet model-/animationsfiler, skal koden kunne fungere med det eksisterende monster.

**PR-04 – Dynamisk horror:** Samlet director, tidsstyring, hændelseshistorik og de tre store rumsekvenser.

**PR-05 – Minimap og betjening:** Rigtigt kort, navigation, fokus, undertekster og relevante tilgængelighedsfunktioner.

**PR-06 – Levende rum og lyd:** Interaktive miljøelementer, logiske verdensændringer og integration af ChatGPTs originale lydfiler.

**PR-07 – Færdiggørelse:** Alle story paths, performance, tilgængelighed, full-playthrough og stabilitet.

Hver PR skal indeholde ændrede filer, commits, tests, eventuelle screenshots/lydbeviser, kendte begrænsninger og plan for tilbagerulning. Ingen automatisk sammenfletning til `main`.

## 11. Forbud og kvalitetskrav

- Ingen reelt meningsløse eller evigt gentagne skræmmelyde.
- Ingen falske spillerfodtrin, når spilleren står stille.
- Ingen synlig monsterteleportering, der bare skal gøre spillet mere svært.
- Ingen tilfældige monstermodeller eller lydfiler uden lovlig anvendelsesret.
- Ingen fjernelse af gamle missioner, gemninger eller slutninger for at få tests til at bestå.
- Ingen ukontrolleret `npm audit fix --force`; undersøg afhængigheder og test opgraderinger.
- Ingen omskrivning af hele spillet på én gang.
- Ingen overdrevet skræmmespam, hyppige stærke lysglimt eller lydniveauer, der overstyrer brugerens indstillinger.
- Ingen færdigmelding uden test af både kode og faktisk spiloplevelse.

## 12. Definition af færdigt arbejde og rapportering

En fase er først færdig, når:
- Ændringerne er integreret i den eksisterende spiloplevelse og ikke kun ligger i ubrugte filer.
- Relevante tests passerer på den præcise commit.
- Browseroplevelsen er prøvet, hvor ændringen kræver visuel/adfærdsmæssig kontrol.
- Gamle gemninger, vigtige gåder og slutninger ikke er ødelagt.
- Design og lyd er respekteret.
- Nye kontroller er dokumenteret.
- Brugeren har fået en sikker GitHub-gren, PR-link og PowerShell-instruks til lokal test.

**Hver statusrapport til brugeren skal have:**
- Hvad blev ændret?
- Hvilke filer og commits?
- Hvad blev virkelig testet, og hvad blev ikke testet?
- Screenshots eller lydbevis, hvis relevant.
- Kendte fejl og risiko.
- Den næste konkrete udviklingsopgave.

## 13. Den første opgave til Cursor — begynd nu

1. Undersøg lokal projektmappe, nuværende Git-gren, ikke-gemte ændringer og den seneste plangren.
2. Opret en separat sikker arbejdsgren/worktree fra `plan/cursor-gameplay-overhaul-v1`.
3. Kør de eksisterende tests og dokumentér førtilstanden.
4. Implementér **PR-01**: I/Tab/Escape-inventar, korrekt fokus/musefangst, normalisering af lydspænding og beskyttelse mod gamle hændelseslyde efter load/pause.
5. Gør Playwright-billeder kompatible med Windows og tilføj tests til de rettede funktioner.
6. Kør `npm test`, `npm run build` og relevante browsertests; ret fejl og dokumentér eventuelle hindringer.
7. Opret en **kladde-PR** med beskrivelse af resultaterne. Fortsæt derefter efter rækkefølgen ovenfor.

**Brugeren har godkendt, at Cursor udfører programmeringsarbejdet. Der er ikke behov for at stoppe og spørge om hver almindelig delopgave.** Større ændringer, der vil ødelægge eller overskrive design/lyde/brugerkode, kræver derimod en tydelig aftale.

**Målet er ikke endnu en løs plan. Målet er at udvikle SktAgnes til et sammenhængende, skræmmende og stabilt førstepersons-gyserspil, mens ChatGPT fortsat står for design og lyd.**
