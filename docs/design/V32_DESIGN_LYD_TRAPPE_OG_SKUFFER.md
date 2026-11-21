# SKT. AGNES – DESIGNRUNDE V3.2

Status: **kunstnerisk kladde, ikke sammenflettet og ikke live**. Baseline: PR-15 (commit `84df8df97`). 
Designgren: `design/v3-room-detail-pass-2`.

## Hvad der er lavet i denne første iteration

- Særskilt modul `src/world/VisualV32Furniture.ts`, indlæst af `LevelBuilder.ts`.
- Drawer-dressing til alle eksisterende `filing`, `recordcabinet`, `dresser`, `cabinet`, `sideboard`-rekvisitter. Hver skuffefront har navngiven `THREE.Group`, trækgreb, labelholder og materialeforskel. `userData` indeholder det eksisterende møbel-id og skuffeindeks, som Cursor senere kan anvende til rigtig animation.
- Små journalstakke placeret på eksisterende borde i reception, arkiv, laboratorium, obduktion, personalerum og observation.
- Trappens *synlige trin* er trukket 0,15 m længere ind fra hver side af flyvningens afgrænsning (nu 0,30 m inset); gelændere tilsvarende. **Bemærk:** fysisk trappesektion, floor holes, navmesh og kollisionsrampen er uændrede. Dette giver mere luft visuelt, men en eventuel reel flytning af hele trappen skal udføres synkront i `STAIRS` og pathfinding efter screenshot-test. Påstå ikke at brugerrapporteret kollision er løst uden gennemspilning.
- Ingen nye punktlys, lyde eller fysiske hindringer. Ingen nye dependencies.

## Rum-for-rum videre designretning

| Område | Større visuel fylde uden at blokere ruten | Interaktioner Cursor kan bygge |
|---|---|---|
| Reception | Skranke med vagtbog, spredte journaler, kartotek, telefon og klokke; slidte overflader | Åbne arkivskuffer, læse vagtsedler, telefonhændelser |
| Patientgang | Nummererede døre, sengeborde, kørestol, medicinvogn, patientsko og beskadiget linoleum | Skjul i skabe, undersøge patientjournal, skubbe vogn |
| Operationsstue | Udbygget lampesæt, instrumentbakker, affaldsspande, remme, medicinreol | Undersøge instrumentbord, skuffe og lampearm |
| Slagterum | Rustne kroge, rengøringsstation, gulvafløb, mærkede beholdere | Flytte hylde med eksisterende koben, undersøge beholdere |
| Arkiv | Fyldte kartoteker, sorteringsbord, bunker i forskellige højder og støv | Flere navngivne skuffer, pengeskab og journaler |
| Laboratorium | Glasvarer, analoge målere, afskallede etiketter, kemibakker | Åbne kabinet og læse målerregistreringer |
| Obduktion | Metalkumme, instrumentbræt, kliniske skabe og utilstrækkeligt lys | Undersøge instrument-/journal-skuffer |
| Personalerum | Kaffesæt, vagtplan, radio, personlige ejendele og slidt sofa | Radio, skuffer, private optegnelser |
| Kældergang | Sikringspanel, rør, servicekasser, generatorgitter og værktøj | Generatorens tre sikringer, værktøjskasse |
| Kapel | Stiftelsessten, votivlys, gitter, støvede bænke og rosenkrans | Læse årstal og undersøgelse, ikke nye nødvendige låse |
| Observation | Spejlglas, fikseringsremme, observationstavler og kabinet | Skjul og indblik i patienthistorie |
| Kammer | Isolation, seng, kartotek, tungt udgangsbeslag og personlige spor | Skjul under seng, undersøge skuffer |
| Trapper 0–2 | Frilagte gelændere, slidte trin, skiltning, fugt og kabelføringer langs væg | Døre, opgangslyde, sikker passage uden at sidde fast |
| Udgangen | Slidt mekanisk lås, fugtspor, natligt lys i dørsprækken | Bevar eksisterende krav om strøm/nøgler/beviser |

## Lyd – kvalitetsplan (afventer brugerens filer)

Eksisterende `AudioEngine.ts` har WebAudio-master, gain-kategorier og limiter, og `roomTone.ts` har én lokaliseret lydkilde pr. rum. **Undgå at indføre en ny konkurrerende lydsløjfe.**

1. Når lydfiler kommer: dokumentér kilde, licens, originale sample rate/kanaler, varighed, peak/clipping, ægte stilhed og evt. klik i loopovergange. Lav ikke påstande om kvalitet uden lytning og måling.
2. Prioritér professionelle optagelser til: kabinet-/skuffetræk i metal og træ; dørhængsler; langsomt vanddryp; rørsuk og ventilation; forskellig gang på træ/fliser/beton; radio med troværdig hvisken; Vogterens nærlyd, jagtlyd og fjernlyd; bænkens knirken; sikringspanel.
3. Lav en dæmpet lydmæssig hierarchy: ambient bed lavt, interaktion tydelig, monster bevidst placeret og høj lydstyrke kun i plotmæssigt berettigede øjeblikke. Undgå gentagen tilfældig scream.
4. Brug positionslyd og afstandsafhængig dæmpning; særlige væg-/dørfiltre kræver simulation og test. Lyd fra skuffe skal være bundet til møblets world-position, ikke kameraet.
5. Ved nye samples: opbyg ét `AssetRegistry` med navngivet `soundId`, `roomId`, trigger, afspilningskontrol, gain og cooldown. Test unlock af AudioContext, pauser, genindlæsning og at lyde ikke bliver ved efter menu.
6. Normalisér på oplevet loudness uden at knuse dynamikken og uden at øge max peak; implementér crossfade ved loops. A/B-lyt på hovedtelefoner og højtalere.
7. Tilgængelighed: separat kontrol for SFX og musik, valgfri undertekst og reduceret intense scare/høje spikes.

## Cursor – senere programmeringsopgaver (IKKE igangsat)

- [ ] Udskift statisk `buildProp`-kabinetkrop med en skuffe-kompatibel scenegraph. De synlige skuffefronter i V3.2 er forberedelse, **ikke en reel indvendig skuffemodel**. Undgå at animere en front ind i statisk geometri.
- [ ] Tilføj interaktionsafstand, raycast/valg, åbne-/lukkebegrænsning, anim + lyd + påvirkning af monsterhørelse; undgå at spamme interaktion.
- [ ] Gem interaktive tilstande med versioneret migration, så eksisterende saves stadig virker.
- [ ] Åbne skuffer må ikke få player/monster til at sidde fast; collision toggles med navmesh-tjek.
- [ ] Undersøg trappefejl visuelt i browseren, og flyt om nødvendigt **hele** den faktiske trappe inklusive åbninger, collision og monster-navigation – ikke kun designlaget.
- [ ] Implementér nye professionelle lydklip efter at brugeren har leveret dem og licenserne er tjekket.
- [ ] Test på localhost, verificer 20+ minutters hukommelsesforbrug; ingen merge til main uden godkendelse.

## Kvalitetskrav

Afsæt særlige screenshotankre i Reception, Arkiv, Patientgang og Trapper. Bevar PR-08 til PR-15 gameplay. Intet nyt animations- eller lydsystem må ubevidst udløse endnu et browsercrash.
