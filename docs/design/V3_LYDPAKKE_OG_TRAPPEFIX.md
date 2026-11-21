# SktAgnes V3 – de to leverede lydfiler

Brugerleverede originaler:

- `kilde baby grin.mp3` (3,08 sek., MP3, 44,1 kHz stereo): sjælden fjern latter i Patientgang, Observation og Kammer
- `rytme griselyd.mp3` (4,47 sek., MP3, 44,1 kHz stereo): afdæmpet organisk cue i Slagterum, Obduktion og Kælder

## Integration

Koden i `src/audio/AudioEngine.ts` og `src/game/Game.ts` er **integreret** i designgrenen.

For at få rigtig lyd lokalt skal de brugerleverede originaler kopieres til

- `public/audio/kilde baby grin.mp3`
- `public/audio/rytme griselyd.mp3`

De to lydfiler er samlet i `SktAgnes_V3_lydpakke.zip`, leveret særskilt i samtalen. Pak arkivet ud i projektroden, så mappestrukturen ovenfor opstår.

**Vigtigt:** Selve MP3-filerne er endnu **ikke committet til GitHub**. Designgrenen kan bygges og startes uden dem; lydkoden springer filerne over, hvis de mangler. Derfor er lydintegration først afprøvet fuldt, når lydpakken er installeret og lydene er hørt i browseren.

## Sikker lydafspilning

- WebAudio afspiller ikke før brugeren aktiverer lyd gennem spillets normale input.
- Lydene afspilles én gang som geografisk placerede hændelser, ikke i løkker.
- Afspilning dæmpes med afstanden og en lav volumen.
- Cooldown i audio-engine: baby 95 sekunder; gris 75 sekunder. Spilmotoren har yderligere 65–109 sekunders spacing.
- Spændingscues producerer ingen nye monster-lydsansningshændelser.
- Eventuelle manglende filer fører ikke til en fejl i startmenuen.

## Trappen: efter brugerens screenshot

Tidligere trin bestod af fuld-højde solide betonblokke ned til gulvet og så derfor ud som en stor betonvæg. Ændret til 0,15 m tykke åbne trin med korte stigrør og to skrå, bærende stringere, uden at påvirke den fælles nav-/floor-hole-definition.

**Rettelsen skal kontrolleres visuelt i browseren** i samme position som screenshot. At unit-tests og build består, er ikke bevis på, at den oplevede geometri nu er rigtig.
