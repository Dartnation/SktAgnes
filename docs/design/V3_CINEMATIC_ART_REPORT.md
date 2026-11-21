# SktAgnes – Cinematic V3 Design Report

**Version:** Art Pass på den af brugeren foretrukne PR-15 (`cursor/pr-09-v3-logik`).  
**Gren:** `design/v3-cinematic-rooms-stairs-monster`  
**Status:** Uafhængig designkladde – ingen merge, ingen ændringer til main eller Cursors lokale port 5182.  
**Mål:** Markant stærkere rumidentitet og inventarfylde, mørke troværdige figurer og en reel trappekorrektion. **Ingen ny gameplay-/skuffelogik**.

## Ændret i kode

- `src/world/data.ts`: 24 ekstra møbler (2 pr. hovedrum); håndplaceret væk fra dørmidterlinjer og fra eksisterende møbler. De er registreret i original `PROPS`, så spiller- og monster-navigation får samme faste forhindringer.
- `src/world/LevelBuilder.ts`: original kartotek-/metalskabs-/kommodegeometri får 3D-synlige fronter, rammelister, håndtag og labelholdere. Før var mange af dem stort set én klods. Skufferne kan **ikke** åbnes endnu – de skal senere udskilles til bevægelige sceneobjekter af Cursor.
- `src/world/CinematicArtV3.ts`: nyt kurateret visuelt lag med dansk afdelingsskiltning, rum-specifikke vægobjekter og rekvisitter, medicinglas, gamle målere, vagtjournaler, mappehylder, rør, klokker, kirurgiske elementer, katolske genstande samt ekstra medicinartikler på eksisterende vogne og reoler. Instancing efter geometri/materiale og små procedurale slitagekort.
- `src/world/data.ts` + `LevelBuilder.ts`: trappeløb flyttet fysisk, ikke kun pyntet: nederste løb z=0,95–5,30 m, øverste z=6,70–11,05 m, således mindst 0,95 m fra endevæggene og 1,4 m fri landingsafstand. Gulvhuller, navmesh og højdebane bruger samme `STAIRS`-definition.
- `src/ai/MonsterAI.ts`: Vogteren får en ujævn stofhætte/indre mørke, mindre synlige sårfarver og ingen karikeret ansigtsmaske eller lysende prikøjne.
- `src/game/Game.ts`: endnu et tilbageværende hvidt ansigt i `buildLunge()` fjernet; erstattet med mørke glovede arme, som når ind i billedet ved angreb. Sekundær apparition får nedtonet ansigt og flere stofbandager.
- `tests/v3-cinematic-art.test.ts` og `tests/v3-room-layout.test.ts`: trappehøjde, endevægsafstand, navigationspunkter, inventarfordeling og fri dørzone.

## Rum for rum – ekstra inventar og visuel fortælling

| Rum | Nye store møbler | Ny visuel iscenesættelse |
|---|---|---|
| Reception | Vente-bænk og ekstra sorteringsreol | Brevhylder, nattevagtsskilt, læselige mapper og slidt opslagstavle |
| Patientgang | Medicinvogn og ekstra kartoteksskab | Patientkort, kaldepanel og udstrakte håndlister |
| Operationsstue | Operationsreol og assistentstol | Instrumentbakker, sterilskab, medicinbeholdere |
| Slagterum | Vaskekabinet og rusten spand | Kroge i skinner, rør og professionel rengøringszone |
| Arkiv | Ekstra metalskuffeskab og bogreol | Mikrofilmsspoler, stabile arkivhylder, mange mapper |
| Laboratorium | Journalarkivskab og laboratoriestol | Måleapparat, glasbeholdere og prøveregister |
| Obduktion | Ekstra kabinet og instrumentvogn | Rustfri bakker, journal og prøver |
| Personalerum | Bænk og høj garderobe | Ophængt vagtplan, papirer og kafferekvisitter |
| Kældergang | Servicekabinet og ekstra beholder | Målerpanel, rørgennemføringer og værktøj |
| Kapel | To ekstra bænke | Slidte votivlys, alterdetaljer og kirkeskilt |
| Observation | Forsyningsvogn og journalarkiv | Observationsvindue, procedurenoter, lægelige spor |
| Kammer | Natbord og opbevaringshylde | Patientkort, ordensregler, journaler og svage isolationsspor |

Trappeopgange får en mere læsbar trinliste, metalgelænder og orienteringsskilte. Udgangen er bevaret funktionelt.

## Æstetiske principper

1. Ét primært visuelt fokus pr. rum: skranken, sengebåren, operationsbordet, mikrofilm/journal, radioen, generatoren, alteret, observationssengen eller udgangen.
2. Brug materialekontrast frem for støj: mat porcelæn, fugtigt metal, slidt træ, mørke tekstiler og små varme punkter.
3. Ingen ekstremt lyse overflader, store ansigtsmasker eller LED-lignende røde øjne.
4. Placér rekvisitter ved eksisterende møbler og vægge. Hold den centrale korridor fri og bevar alle missioner, pickups og fem slutninger.
5. Samme lysbudget som PR-15; ingen nye dynamiske lys. 7 små slitagekort genbruges af mange objekter.
6. Fotoscannet PBR/rigget GLB er **ikke** en del af denne leverance. Det kræver licenserede eksterne assets og visuel prøvning.

## Kvalitetskontrol før godkendelse

- Test på localhost med separat port, uden at stoppe Cursors 5182.
- Hold samme skærmopløsning, grafikkvalitet og lommelygteposition ved før/efter-screenshots.
- Gennemgå alle 12 rum: svævende objekter, sammenfaldende vægskilte, nye props, collision og pickups.
- Test begge trappesektioner fra begge retninger, inkl. crouch, sprint, monsterets passage og den nye floor hole alignment. Hvis trappen stadig visuelt møder væggen, dokumentér konkret kamera/position inden yderligere koordinatændring.
- Verificér at intet 2D-ansigt vises ved angreb, og at sekundær apparition ikke ligner en tegneserie.
- Mål draw calls, aktive lys, fps og hukommelse ved mindst 20 minutters sammenhængende spil. **Build og unit-tests alene er ikke et grafisk kvalitetstjek.**

## Til Cursor – først når brugeren har godkendt designet

Cursor skal senere gøre skuffefronter til separate animerede render- og collision-objekter. Derudover er riggede lovlige GLB-monstre, materialeteksturer af høj kvalitet og lydfiler stadig åbne opgaver. Ingen logik-implementering i denne design-PR.
