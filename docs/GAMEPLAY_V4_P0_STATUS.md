# Gameplay V4 – P0-status

Grundlag: `design/v3-cinematic-rooms-stairs-monster` ved `30ac873`. Denne gren ændrer ikke main. Port 5182 er ikke brugt her.

Statusord: **DONE** betyder koden findes og en test dækker den. **PARTIAL** betyder koden findes, men den er ikke en færdig spiloplevelse. **NOT VERIFIED** betyder det ikke er målt eller gennemspillet her.

## Hvad der faktisk virker

| Område | Status | Kilde |
| --- | --- | --- |
| Bevægelse, sprint, krøb, hop, udholdenhed | PARTIAL | `src/player/PlayerController.ts` |
| E-interaktion via sigtekorn, rækkevidde 2,35 m | PARTIAL | `selectInteract` i `src/physics/Collision.ts` |
| Døre, nøgler, generator, radio, pengeskab 1907, hylde/tunnel | PARTIAL | `Game.useDoor`, `useGenerator`, `openKeypad`, `useShelf` |
| Skjul i skab og under seng | PARTIAL | `HIDES` i `src/world/data.ts`, `Game.enterHide`. Vogteren sætter `canSee` fra, mens man gemmer sig (`MonsterAI.ts`) |
| Missioner m1–m7 og fem slutninger | PARTIAL | `src/systems/missions.ts`, `resolveEnding` i `src/systems/Story.ts` |
| Gemning version 1, plads 0–3 | PARTIAL | `src/systems/SaveSystem.ts` |
| Monster-tilstande og A* | PARTIAL | `MonsterBrain.ts`, `Pathfinding.ts`, `senses.ts` |
| Rumlyde, ikke på spilleren | PARTIAL | `src/audio/roomTone.ts` |
| Loftlys uden hvidt fuldskærmsblink | PARTIAL | `uFlash` er 0 i `Game.ts`. `JumpscareEngine` opretter ikke et ansigtsplan |
| Hændelsesbus, frø og dt-loft | DONE | `src/core/events.ts`, `rng.ts`, `clock.ts`, `tests/foundation.test.ts` |

## Hvad der kun er kosmetisk

- `src/world/CinematicArtV3.ts` og `VisualV3.ts` er instanserede detaljer. De kan ikke åbnes.
- Vogteren i `MonsterAI.ts` er en procedurel krop. `clipForState` vælger en positur. Der er ingen rigget GLB.
- Der findes ingen skuffe, der kører ud, og intet skab, hvis låge drejer om et hængsel.

## Fejl, der er læst i koden

- `applySnapshot` flytter monsteret til `(4, 0, 16)`, hvis det står under 3 m fra spilleren. Det er en teleport ved indlæsning, ikke under jagt.
- `DEVICES` og `HIDES` er få punkter. De fleste skabe og borde i scenen er ikke interaktive.
- Etagegættet i `Game.noise` bruger `y < 2`, `y < 6`, ellers etage 1. Kælderens gulv ligger på y = 8. Hørelse mellem etager er derfor ikke den samme som rummenes etager.
- Gemmeformatet er stadig version 1. Skuffetilstand findes ikke, så den kan ikke gemmes endnu.
- `Math.random` bruges stadig i monsterets hørelse. Det nye frø styrer ikke den sti endnu.

## Missioner og nøglegenstande

1. `m1_brev` – læs `note_maja`.
2. `m2_reception` – læs `note_log`.
3. `m3_generator` – `fuse_red`, `fuse_blue`, `fuse_yellow`, derefter generatoren.
4. `m4_arkiv` – læs `note_code`. Pengeskabskoden er 1907.
5. `m5_nogler` – `key_op`, `key_arkiv`, `key_kapel`.
6. `m6_beviser` – valgfri. `evidence`, seks `file_*` og rosenkrans ændrer slutningen. Den låser ikke udgangen.
7. `m7_udgang` – tre nøgler, generator og `master_key` eller åbent pengeskab, derefter stilhed.

Slutninger: `vidnet`, `sandheden`, `tom_port`, `flugten`, `optagelsen`.

## Testgrænser

Eksisterende Vitest dækker missioner, gemmemigrering af version 1, monsterets tilstande, trapper og V3-interaktionspunkter. De dækker ikke en rigtig gennemspilning, Firefox, 20 minutters hukommelse eller fps på en fysisk maskine.

**NOT VERIFIED** i denne fase: fps, frametime, A*-tid på den nye trappe, lydhukommelse, begge trapper med en spiller i browseren, og alle fem slutninger som almindeligt spil.

## Rollback

Grenen er `gameplay/v4-g1-engine-baseline` oven på `30ac873`. Den oprindelige mappe `C:\Users\Momex\SktAgnes` er ikke flyttet. Stash `pr-08 lokale blink- og introrettelser` er ikke rørt.
