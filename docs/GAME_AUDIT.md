# Spil-audit – 22. november 2026

Udgangspunkt: PR #22, commit `5382fea`, grenen `gameplay/v4-g3-monster-prep`. Nyere PR findes ikke. `main` er ikke rørt. Den lokale mappe `C:\Users\Momex\SktAgnes` stod på `cursor/pr-09-v3-logik` og var ren.

Statusord: **DONE**, **PARTIAL**, **NOT VERIFIED**, **BLOCKED**.

## Prioriteret

1. Overflader var ensfarvet støj. **PARTIAL** efter denne leverance: gulve, vægge, lofter, mursten og trin bruger CC0-fotos. Møblerne er stadig kasser.
2. Trappen er en åben trappe med trin, stødtrin og gelænder, ikke en massiv kile. Gelænderet er stadig simple kasser. Fuld gang op og ned er **NOT VERIFIED**.
3. Monsteret er en mørk kapsel uden rig og uden de nye animations. Hørememory fra PR #22 er ikke koblet på. **PARTIAL**.
4. Der findes crouch, ikke crawl. **PARTIAL**.
5. Lommelygten er en hård rund skive og lyser for fladt. **PARTIAL**.
6. Skuffer og skabe virker og blev kørt igen efter materialeændringen. **DONE** for den mekanik, **PARTIAL** for modellernes realisme.
7. Fuld kampagne, 20 minutters stabilitet og alle fem slutninger i én spilletime er **NOT VERIFIED**.

## Områder

| Område | Findes | Fungerer | Utilstrækkeligt | Årsag | Næste skridt | Filer | Forventet effekt | Bevis |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Rum og materialer | Ja, 15 rum | Man kan gå rundt | Flade farver og kassemøbler | `textures.ts` malede lærred | CC0-fotos er lagt på bygningsfladerne | `src/world/photoSurfaces.ts`, `public/textures/cc0/` | Årer, fuger og slid i lygten | Chromium-billeder i `docs/audit-shots/` |
| Trapper | Ja, to løb | Kollision og nav deler `StairDef` | Gelænder er kasser. Ikke gået til fods | Geometrien er bokse i `LevelBuilder.ts` | Rigtigt gelænder og en gåtur | `LevelBuilder.ts`, `buildWorld.ts` | Trappen både ses og gås | Tre vinkler i Chromium. Gang **NOT VERIFIED** |
| Spiller | Gå, sprint, hop, crouch | Stamina og regeneration findes | Ingen crawl. Ingen coyote time | `PlayerController.ts` har kun to højder | Crawl som egen højde | `PlayerController.ts` | Lav kravlen med egen støj | Kun kode. **NOT VERIFIED** |
| Skuffer | Ja, PR #20 og #21 | E, loot, lås, gem | Modellerne er egne kasser foran møblerne | De er ikke en del af møbelmeshen | Byg skuffen ind i møblet | `ContainerView.ts` | Skuffen sidder i møblet | `e2e/drawers.spec.ts` grøn efter denne ændring |
| Monster | State machine | Hører dørstøj og kan undersøge | Ingen rig, hukommelsen er ikke tilsluttet | PR #22 er ren og ukoblet | Kobel `perceptionMemory` på hjernen | `MonsterBrain.ts`, `perceptionMemory.ts` | Det går hen til lyden | Hukommelsestest grøn. Jagt i browser **NOT VERIFIED** i denne omgang |
| Lygte | SpotLight og hånd | Tænd, batteri, skygger | Hård cirkel, simpel model | Spot uden cookie-tekstur | Blød kegle og bedre model | `Game.ts` | Lyset falder naturligt | Set i billederne. Forbedring **NOT VERIFIED** |
| Lyd | Syntese plus to brugerfiler | Rumlig afspilning findes | Få rigtige optagelser | De fleste lyde er oscillatorer | CC0-optagelser med register | `AudioEngine.ts` | Materialeafhængige skridt | **NOT VERIFIED** som ny lyd |
| HUD og kort | Ja | Kortet viser fundne rum | Tekst kan klippes. Intet stort kort | Simpelt HTML | Typografi og etagekort | `ui/`, `minimap.ts` | Læsbart kort | **NOT VERIFIED** som redesign |
| Missioner og slutninger | m1–m7, fem slutninger | Koden har dem | Fuld spilletime mangler | Ikke kørt uden test-API | En rigtig gennemspilning | `missions.ts`, `Story.ts` | Ingen fastlåst mission | **NOT VERIFIED** |
| Gem | Version 1, skuffer med | Load genskaber loot | Halvåben skuffe bliver helt åben eller lukket | Bevidst i `ContainerLogic` | Behold den regel | `SaveSystem.ts` | Gammelt save dør ikke | Dækket af skuffetesten |
| Ydelse | Lysloft 8 | Bygget spil kører i Chromium | Ingen 20-minutters måling | Ikke kørt | Mål FPS på en navngiven maskine | `PERFORMANCE_REPORT.md` | **NOT VERIFIED** |

## Hvad denne leverance ændrer

Bygningsfladerne får rigtige CC0-fotos med ruhed og normal. Proceduren bruges stadig, hvis billederne mangler. Gameplay, historie og slutninger er ikke ændret.
