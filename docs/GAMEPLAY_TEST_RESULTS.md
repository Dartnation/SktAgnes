# Testresultater – materiale-fasen

## Automatisk

- `npx tsc --noEmit` uden fejl.
- Vitest 122/122, inklusive det nye register over Poly Haven-filerne, skuffelogik, navigation og fundament.
- Chromium, `e2e/drawers.spec.ts`: skuffer i Reception, Arkiv og Personalerum, lås, gem/load, skjul og monsterreaktion. Grøn efter materialeændringen.
- Chromium, `e2e/materials.spec.ts`: 13 materiale-slots er aktive. Billeder gemt i `docs/audit-shots/`.

## Set i browseren

- Receptionens gulv er slidte træplanker med årer og ridser. Væggen bag skranken er træ.
- Patientgangens gulv er gammel linoleum med ottekantede fliser.
- Kældergulvet er ridset beton.
- Personalerummets tæppe er et fint vævet foto. Første udgave lignede grus, fordi billedet var et nærbillede. Det gentages nu tættere.
- Trappen nedefra, fra midten og fra siden er en åben trappe med trin, gelænder og mursten. Den er ikke en massiv kile.
- Lygten er stadig en hård cirkel.
- Møblerne er stadig enkle former, nu med træets foto på de træfarvede dele.

## Ikke kørt

- En fuld kampagne uden teleport og uden `give`.
- Gang op og ned ad trappen med tastaturet.
- Crawl. Den findes ikke.
- Alle fem slutninger.
- 20 minutter.
- Firefox.
- Michaels egen skærm. Billederne er fra headless Chromium.

En grøn test er ikke en gennemspilning.
