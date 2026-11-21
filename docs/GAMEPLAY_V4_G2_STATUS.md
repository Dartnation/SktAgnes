# Gameplay V4 – G2 skuffer og skabe

Gren: `gameplay/v4-g2-drawers`. Bygger på PR #20 (`ContainerLogic.ts`) og ændrer ikke main.

## Det der virker

- Skuffer glider ud og ind. Skabe åbner om et hængsel. Bevægelsen kommer fra `containerTransform` i PR #20.
- E vælger skuffen eller skabet foran blikket. Animationen kan ikke afbrydes med endnu et tryk.
- Indhold: vagtjournal, kodeark, generatornotat, journaler, batterier, de tre sikringer, tomme skuffer og et arkivskab, der kræver arkivnøglen.
- Lyd: knirken eller dør ved åbning og lukning, låselyd ved et låst skab, papir eller opsamling når noget tages.
- Åbning og lukning sender en dørlyd, som den eksisterende monsterhjerne kan høre. I browsertesten gik monsteret til Investigate eller Chase.
- Åbnet tilstand og allerede taget indhold gemmes i save version 1 og kommer tilbage ved load. Et gammelt save uden feltet starter lukket og urørt.
- Samme genstand kan ikke tages to gange.
- De fire skjulesteder er uændrede. Skufferne har ingen kollision, så en åben skuffe ikke spærrer døre eller ruter. De står væk fra dørlinjen omkring z = 6.

## Det der stadig mangler

- Skufferne er egne 3D-kasser med håndtag og inderside, sat foran de eksisterende møbler. De erstatter ikke designets møbelmodeller.
- I de mørke rum er et åbent skab svært at se. Receptionens arkivskuffer er tydelige.
- Sikringer og de tre noter lå ikke som world pickups. De ligger nu i skuffer. Nøglerne på gulvet er ikke flyttet. En fuld gennemspilning af missionerne er ikke kørt.
- Halvåben animation gemmes ikke. Load viser enten lukket eller helt åben. Det følger PR #20.
- Monsteret blev set reagere på lyden. Det er ikke vist, at det går helt hen til skuffen og gennemsøger stedet.
- G3, den store monster-AI, er ikke en del af denne PR.

## Det der er afprøvet

- Vitest: 118 tests, heraf placering, lås, dobbelt loot og save-roundtrip.
- Chromium via Playwright mod den byggede `dist`, ikke Cursor-browseren. Testen åbnede skuffer i Reception, Arkiv og Personalerum, tog journal og batteri én gang, afviste det låste arkivskab uden nøgle, gemte og indlæste, åbnede skuffen i Operationsstuen, sigtede på kælder, obduktion, observation og kammer, gemte sig i patientgangens skab og fik monsteret til at reagere på E. Ingen pageerror.
- Ikke afprøvet: en fuld spilletime i Michaels egen browser, Firefox, eller 20 minutters hukommelsesløb.
