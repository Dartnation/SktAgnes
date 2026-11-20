# SKT. AGNES — MØRKERE SPILVERDEN, MØBLER OG LYDDESIGN V2

Dette er en **design- og lydgren**, som skal danne grundlag for Cursors gameplayprogrammering. Den erstatter ikke gameplaylogikken.

## Gennemførte ændringer
- Grundbelysning, himmellys, måneskær og efterfølgende eksponering er dæmpet. Loftlampernes lys falder i mindre områder, så lommelygten er vigtigere.
- Receptionen har tre separate lysstofarmaturer i stil med 1980'erne. De har forskudt og ujævnt blink. Den synlige diffusor følger den enkelte lampes lysstyrke.
- 37 ekstra større hospitalsmøbler er placeret gennem verdens eksisterende genstands- og kollisionssystem: skabe, senge, båre, reoler, afskærmninger, vogne, kirkebænke, stole og medicinsk udstyr.
- Døre og møbler har flere detaljer, blandt andet metalbeslag, forsænkede dørpaneler, arkivskuffer, kørestol, medicinvogne og undersøgelsesudstyr.
- Ikke-interaktiv pynt: Hospitalskilte med årstal, loftsrør, patientpapirer, medicinflasker, foldet stof og misfarvninger. Disse små ting har med vilje ingen kollision.
- Mere detaljerede visuelle udgaver af Vogteren, den maskerede skikkelse og nærbilledet ved skræmmehændelser. Der er ikke ændret i AI-tilstandene.
- Nye, originale procedurale miljølyde: dybe rumlyde, rørbanken, vanddryp, klokker og elektrisk summen. Spredte hændelser med pauser, **ingen falske fodtrin**.
- Begge trappeløb er centreret med omtrent 2,1 meters plads fra de yderste sidevægge, mens den oprindelige logik for bevægelse på trapperne er bevaret.

## Hvem gør hvad?
**ChatGPT:** Udseende, materialer, modeller, lysenes visuelle udtryk og lyddesign.

**Cursor:** Monsterets adfærd, inventartaster, gåder, lydtriggere, fysik, navigation, verdensinteraktioner, animationer og gemmesystem.

Cursor må ikke ukritisk overskrive `src/world/SetDressing.ts`, 3D-modellerne i `src/ai/MonsterAI.ts` eller geometri/materialer i `src/world/LevelBuilder.ts`. Nødvendige ændringer beskrives i en særskilt PR.

## Godkendelse og test
- Test Receptionen med lommelygten både slukket og tændt: mørke hjørner skal have betydning, men væsentlige ruter skal kunne findes.
- Kontroller at tre loftarmaturer kan ses, og at hver lampes diffusor følger lysstyrken.
- Kontroller dørhåndtag, skilte og møbler fra forskellige vinkler. Passagen ved Personalerum og trappen må ikke blokeres.
- Gå på alle tre etager. Test både spillerens kollision og monsterets navigation.
- Gennemgå monsterets nye udseende uden at ændre dets patruljering eller jagt som en utilsigtet bivirkning.
- Fodtrinslyd må kun følge spillerens **virkelige bevægelse**, ikke tilfældige miljøhændelser.
- Musik- og effektlydstyrke på 0 skal gøre de tilsvarende kanaler helt stille.
- Kontroller brugerfladen ved 1366×768, 1920×1080 og smal bredde.
- De nuværende rumaktiver er skabt af Three.js-former og de eksisterende materialer; der er ikke importeret eksterne tredjeparts-3D-modeller i denne gren.

## Lokal test i PowerShell
Stop den aktive Vite-server først, og undersøg `git status`, hvis der er lokale ændringer:

```powershell
cd "$env:USERPROFILE\Documents\SktAgnes-AudioTest"
git fetch origin "refs/heads/design/dark-world-props-and-audio-v2:refs/remotes/origin/design/dark-world-props-and-audio-v2"
git switch --track origin/design/dark-world-props-and-audio-v2
npm test
npm run build
npm run dev
```

**Bemærk:** Hvis den lokale gren allerede findes, bruges almindelig `git switch` i stedet for `--track`. Hvis port 5173 er optaget, kan spillet startes med `npx vite --host 127.0.0.1 --port 5174 --strictPort`. Skift ikke gren hen over ikke-gemte ændringer.
