# SktAgnes · V4 Visual Polish Only

Gren: design/v4-visual-polish-only
Oprettet fra: PR #24, gameplay/v4-horror-sequences, commit b6450da765d63f100095892e929f8c295d7a4bcf.
Status: separat design-eksperiment; ikke merged, ikke visuelt godkendt.

## Skarpe grænser

Denne PR må IKKE ændre input, AI-state, horror triggers, missioner, pathfinding, save/load, item-IDs, loot, genstandskapacitet, dørlåse, skuffernes åbne-/lukketiming eller monsternes scripted bevægelsesforløb.

Lommelygtens optiske udseende, minimappets canvas-tegning, skuffemesh og monsterets visuelle krop må gerne ændres. Grafikarbejdet må gerne foregå i Game.ts, men kun i konstruktører for visuelle modeller / render-indstillinger, ikke i spiltick eller eventafviklingen.

## Hvad er udført

| Del | Leverance |
|---|---|
| Inventory | Originale lokale vektorillustrationer til eksisterende danske genstandsnavne. Ingen nye gameplay-item-IDs. |
| Pickup | Større og mere læsbart centreret fundkort med genstandsillustration. Den eksisterende found()-trigger og varighed er uændret. |
| HUD | Samlet rolig palet, kontrast, spacing, interaktionsprompt og batteri-/udholdenhedsmåler. |
| Minimap | Tyndt kartografisk gitter, clipping af lange rumlabels, tydelig aktuel etage/dør/markører; de eksisterende afsløringsregler og målkoordinater er uændrede. |
| Skuffer | Hollow-korpus, separate skuffebunde og sidevægge, beslag, greb, labelholdere og visuelle genstandsformer. Samme mover-node og applyContainerPose. |
| Skabe | Reelle indvendige hylder, hængsler og dørpaneler. Samme rotations-pivot og logiske container. |
| Lommelygte | Bedre frontoptik, metalringe, greb, lille rem og delvis trøjeærme. Kun blødere optisk spot/skyggeskarphed. |
| Dørspøgelse | Ændret enkel geometri til mørkere lagdelt hospitalsdragt, frakke, hætte, uens kanter og bandager. Scriptets passage og timing ændres ikke. |
| Rum | Visuel fodliste, diskret loftkant og gammelt vægbeslag i indvendige rum; ikke registreret som collision. |
| Tests | Test af item-illustrationer samt skuffe-/skabsmodeller mod eksisterende poseringskontrakt. |

## Bevidste begrænsninger

- Der er ingen ny licenseret rigget GLB-monstermodel eller eksternt hentede lyde. Originale SVG-illustrationer i repo og eksisterende CC0-PBR-materialer genbruges.
- Der er ikke tilføjet store nye 3D-møbler; tidligere problemer med overlap gør, at vi ikke skal sprede mere geometri i gangarealer uden browserkontrol.
- Visual-only skuffemodeller og rumliste skal gennemgås fra hver vinkel. Automatiske tests er ikke tilstrækkelig visuel godkendelse.
- En professionel erstatning af alle modeller vil kræve selvstændig asset-kuratering, licenslog og GLB-loaders; denne runde er et fokuseret art/UX pass uden ændring af gameplay.

## Test- og godkendelsesplan

1. Start projektet på separat localhost-port 5194, og åbn en ny kampagne.
2. Sammenlign samme rum/kamera/lys med PR #24 (reception, patientgang, trappe og arkiv).
3. Kontrollér hvert rum for svævende væglister, tab af materialer, forkerte labels og FPS-fald.
4. Test minimap for ukendte rum, trapper, målmarkører, lang dansk tekst samt små vinduer.
5. Åbn/skift inventar og tag både batteri, sikring, journal og nøgle: kontrollér ikon, tydelig tekst og tastaturfunktion.
6. Åbn/luk 3 forskellige skuffer og 2 skabe: animation skal være identisk i timing og interaktionsafstand. Intet loot må dubleres.
7. Se dørspøgelse i rum 2/3: timing og triggere skal være identiske med PR24; kun model er ændret.
8. Se lommelygten tændt/slukket, skygger og lysmodulationsniveau. Ingen ændring i batteriforbrug.
9. Gem, indlæs og gennemfør missioner. Denne PR ændrer ikke logik, men regressionsprøve er nødvendig.
10. Kør npm test og npm run build; log tests, screenshots og observeret FPS i PR.

Stopkriterium: Hvis en visuel forbedring skaber konflikt med eksisterende behavior, revertér den visuelle ændring. Rør ikke gameplaykoden for at tilpasse den til en dekorativ mesh.

Rollback: Designgrenen er isoleret; PR24 og main forbliver intakte, og intet er merged.
