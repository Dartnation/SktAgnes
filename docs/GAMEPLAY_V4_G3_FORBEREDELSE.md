# Gameplay V4 – G3 forberedelse

Denne PR ændrer ikke, hvordan monsteret går. Den lægger et rent hukommelsesmodul, som den næste AI-PR kan koble på `MonsterBrain`.

## Hvad der allerede findes

`MonsterBrain` har tilstandene Idle, Patrol, Investigate, Search, Suspicious, Chase, Attack, LostPlayer og ReturnToPatrol. En lyd, der er høj nok, kan sende det i Investigate i samme frame. `Game` sletter lydlisten i starten af næste frame, så monsteret ikke husker skuffen bagefter.

## Hvad dette modul gør

`src/ai/perceptionMemory.ts` gemmer den seneste lyd over 0,38 i op til 8 sekunder. Pause fryser tiden. `investigateGoal` giver positionen, eller ingenting når lyden er glemt. Det flytter ikke monsteret og kalder ikke netværk.

## Næste skridt, ikke i denne PR

- Lad hjernen læse `investigateGoal`, når den ikke kan se spilleren, i stedet for at glemme lyden ved frame-skift.
- Behold den nuværende jagt, når den faktisk ser spilleren.
- Vis i en browser, at det går hen til skuffen, mister spilleren bag en dør, reagerer på lygten og kan bruge begge trapper.
- Ingen ny white-face, ingen LLM og ingen ændring af de fem slutninger.

## Afprøvet

Vitest dækker en husket skuffelyd, en ignoreret stille lyd, glemsel efter 8 sekunder og pause. Ikke afprøvet i browseren, fordi monsterets opførsel endnu er den gamle.
