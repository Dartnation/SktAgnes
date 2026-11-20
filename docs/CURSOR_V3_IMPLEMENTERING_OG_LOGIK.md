# SKT. AGNES – V3 VISUELT DESIGN OG CURSOR-PROGRAMMERING

**Status:** Kladde, ikke merge / ikke live. **Udgangspunkt:** PR-08 `cursor/pr-08-stemning`. **V3 PR:** #14 `design/v3-environment-creatures`.

## 1. Hvad er allerede ændret i V3

- `src/horror/JumpscareEngine.ts`: det store, lyse 2D-ansigt fjernet helt fra kameraet. Det er ikke en farvejustering. Jumpscares bruger fortsat rumlige lyde, rystelser og situationsbaserede hændelser.
- `src/horror/ScareLogic.ts`: tilfældige `face`-hændelser deaktiveret som grafik; eventtypen bibeholdes af kompatibilitetshensyn.
- `src/game/Game.ts`: det lille hvide kiggehoved skiftet til en anonym mørk skygge. Hvidt fuldskærmsflash i efterbehandlingen er slået fra.
- `src/ai/MonsterAI.ts`: den eksisterende procedurelle Vogter har fået mørk hætte, beskedent øjenskær og en ikke-karikeret ansigtsform. **Dette er en midlertidig 3D-model, ikke et færdigt rigget væsen.**
- `src/world/VisualV3.ts`: nyt detaljeringslag for hospitalets 16 områder. Det lægger journaler, medicinbeholdere, telefon, radio, instrumenter, operationsarmatur, vægtavler, rør, uret, sikringspanel og meget mere ved eksisterende møbler. Geometrien grupperes i `InstancedMesh` efter form/materiale for at begrænse draw calls.
- `src/world/LevelBuilder.ts`: V3-laget oprettes og ryddes op sammen med de eksisterende rum. Ingen nye dynamiske lyskilder, kollisionsbokse, navmesh-forhindringer eller nye lydsløjfer.
- `docs/design/V3_INVENTAR_MANIFEST.json`: 134 konkrete assetforslag med rum, anker, rolle, krav til placering og foreslået interaktion.
- `docs/design/V3_VISUEL_MASTERPLAN.md`: komplet rum-for-rum visuel retning og referencer.

**Afgrænsning:** Geometrierne i første V3-kladde er håndbyggede detailmodeller. Det kan forbedre rumfølelsen, men ikke alene opnå fotorealistisk/AAA-kvalitet. Ingen tredjepartsmodeller, licenserede teksturpakker eller riggede GLB'er er indført.

## 2. Cursor: programmeringsopgaver i anbefalet rækkefølge

### G0 – Stabilitet før tungere grafik (P0)
1. Undersøg det tidligere fanenedbrud. Skeln dokumenteret mellem JS-fejl, render-process-crash, GPU-reset og hukommelsesudmattelse. Se `Game.onFrame`, `PostFX`, skyggekort, tekstur/geometry disposal og lange jagtsekvenser.
2. Test V3 på `low`, `medium` og `high`. Spor hukommelse, frame time, aktive lyskilder og draw calls. Ingen 20+ minutters vækst uden forklaring.
3. Registrér WebGL context lost/restored, `pageerror`, `page.on('crash')`, `console.error` og browserprocessens exitcode i Playwright. Ret dokumenterede fejl; påstå ikke, at det oprindelige nedbrud er løst uden reproduktion.
4. Ingen pludselige hvide skærmblink. Kontrollér også eventuelle blink fra `Atmosphere` (lynnedslag) og lysstofrør, ikke kun postprocessing.
5. Brug sikker performancepolitik: GPU-budget, synligheds-/afstandsklip for detaljer, LOD, delte materialer, komprimerede teksturer. Prioritér indstillingen Reduceret lysflimmer.

### G1 – Sceneintegration og rumkvalitet (P0)
1. Gennemgå `docs/design/V3_INVENTAR_MANIFEST.json` objekt for objekt. `placement_anchor` er DESIGNDATA, ikke garanterede koordinater.
2. Undgå dobbelt geometri: før en model tilføjes, kontrollér `src/world/data.ts` -> `PROPS` og eksisterende `SetDressing.ts`.
3. Brug `VisualV3.ts` som statisk detail-lag, men brug særskilte sceneobjekter til alt, spilleren skal kunne åbne, flytte, undersøge, gemme sig i eller samle op.
4. Bevar fri dørrotation, navgrid og trappepassager. Fysiske kollisioner skal kun tilføjes, når navigation og monster-AI er testet.
5. **Start med Receptionen** som visuel standard; tag samme kameravinkel, samme grafikniveau og samme lys før/efter. Justér læsbarheden af Majas brev og introduktion. Derefter patientgang, operationsstue, arkiv og resten af hospitalet.
6. Rum for rum: gennemtænkt lysretning, materialevariation, støv/fugt, tegn på forladt personale, ældre apparater, dokumenter og dørmærkning. Variation skal være kunstnerisk begrundet, ikke tilfældig støj.
7. Erstat de midlertidige primitive hero-modeller gradvist med korrekt licenserede GLB-assets. Brug PBR-teksturer (base color, normal, roughness, metalness, AO efter behov), passende farverum og teksturkomprimering. Gem licens/kilde i assetregistret.

### G2 – Interaktive omgivelser, integration med logik (P1)
**Kritisk kodefund:** `DEVICES` og `HIDES` i `src/world/data.ts` er tomme i PR-08, selv om `Game.candidates()`, `useGenerator()`, `openKeypad()`, `enterHide()` og monsterets søgeadfærd allerede findes.

- Tilføj positioner for generator, pengeskab, radio og ægte skjulesteder, men kun efter visuel/navmesh-kontrol. Verificér eventuelle allerede eksisterende separate interaktioner før du tilføjer en ny: hylden i slagterummet styres også direkte i `Game.candidates()`.
- **Generatoren i V3 er foreløbig kun en synlig rekvisit** i kældergangen. Tilslut `DeviceDef` og tre sikringspladser. Opgavemål, tekst, lyd og faktiske verdenspositioner skal pege samme sted. Kontroller hardcoded koordinater i `useGenerator()`.
- Opret en entydig model/scene-reference for radioen på personalerummets sideboard; behold eksisterende 3D-positioneret lyd, tilføj lille lampedims ved tænd/sluk uden ny lydsløjfe.
- Tilføj reelle `HideDef` for skabe/senge, indsæt animationer, dæmpet lyd og kollisionskontrol; test at Vogteren ikke kan se gennem lukkede skjul.
- Interaktionstyper: undersøge papir/journal, åbne skuffe, flytte vogn, holde dør på klem, tænde lampe, betjene generator, skjule sig under seng. Nye obligatoriske missioner må ikke blokere eksisterende fem slutninger.
- Gem tilstand for væsentlige interaktioner uden at ødelægge gamle gemte spil. Migrér snapshots forsigtigt.

### G3 – Professionel Vogter og animation (P1)
1. Erstat den nuværende modellerede hættefigur med **én professionel, lovligt anvendelig rigget GLB**. Forvent ikke, at `MonsterAI.ts`' håndbyggede mesh i sig selv bliver realistisk nok.
2. Acceptkrav: mørk, sammenhængende silhuet, realistisk hospitalsdragt/forfald, asymmetri, ikke hvid maske, ikke smilende tegneserieansigt, ikke lysende røde prikøjne.
3. Animationer: `Idle`, `Walk`, `Run`, `Search`, `Attack` – valgfrit `Stagger` og `DoorInspect`. Samme skelet, ens orientering/skala og `in-place` bevægelse; ingen utilsigtet root motion.
4. Integrér med `GLTFLoader`, `THREE.AnimationMixer`, tydelige animationsstate-maps og bløde crossfades. AI'en bestemmer adfærd; animationslaget viser den. Animationer må ikke teleportere kroppen eller bryde pathfinding.
5. Fallback-model vises kun, hvis GLB ikke er indlæst. Nedbrud i assetindlæsning skal logges og lade spillet køre.

### G4 – Lys, kamera, lyd og horrorscene (P1)
- Lommelygte: blød penumbra, naturlig intensitetsfordeling, skygger og dæmpet batterivisning; undgå flad hvid cirkel og fuldskærmsflash.
- Loftlamper: individuelt, ikke-synkront fejllys med subtil tilhørende el-summen. Brugerindstillingen `reduceFlicker` skal respekteres.
- Rumlige lyde må ikke følge spilleren; bevar PR-06-roomTone og volumengrænsen.
- Genstande bør kunne afsløre historie, men undgå overforklaring og billige jumpscares. Ingen 2D-maske direkte foran kameraet.

### G5 – Test, lokal kørsel og integration (P0 før merge)
```powershell
git fetch origin
git switch design/v3-environment-creatures
npm ci
npm test
npm run build
npm run dev
```
Åbn `http://127.0.0.1:5173/` på den samme pc. **Switch ikke på en arbejdsmappe med ikke-gemte ændringer**; brug hellere en separat `git worktree` eller ny klon. Bland ikke lokal 5173 med den tidligere separate 5181-test uden at kontrollere portene.

- Playwright serielt i Chromium, efterfølgende Firefox; intro, UI, monster, døre, missioner, fem slutninger, save/reload, pause, lommelygte og skjul.
- Længerevarende scenetest med V3 både før og efter aktivering, log 1% low FPS, CPU/RAM, GPU if available og stable frame times.
- Dæk med tests, at det tidligere store jumpscare-face-objekt ikke oprettes, og at hvidt `uFlash`-overlay ikke bruges.
- Screenshot-acceptance ved kendte kameraankre i mindst Reception, patientgang, operationsstue, arkiv, kapel, kældergang og møde med Vogteren.
- Behold alle eksisterende gameplay-PR'er og deres fem slutninger; intet ændres i main uden brugerens udtrykkelige godkendelse.

## 3. Tekniske valg

Spillet er allerede bygget i **TypeScript + Three.js + Vite** med moderne ES2022-moduler og WebGL. Bevar platformen og localhost. Brug typesikre deklarative data, modulopdelt scene- og assetmanagement, `dispose()` og testbare rene hjælpefunktioner. Vælg kun afhængighedsopgraderinger efter dokumenteret kompatibilitet, CI og ydelsestest. Et automatisk hop til en anden spilmotor eller et nyt framework er **ikke** en del af V3.

## 4. Aflevering til brugeren

Cursor afleverer én dansk status for hver etape: præcis filændring, hvad der blev visuelt anderledes, hvad der blev interaktivt, performance før/efter, screenshots, kendte problemer, testresultater og link til separat PR. **Ingen løfter om 100% realistisk grafik, før de faktiske 3D-assets, lys og spilscener er testet visuelt.**
