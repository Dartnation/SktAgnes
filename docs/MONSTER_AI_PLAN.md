# Monster-AI

## Nu – PARTIAL

Hjernen har Idle, Patrol, Investigate, Search, Suspicious, Chase, Attack, LostPlayer og ReturnToPatrol. Den kan se gennem `lineOfSight`, høre med afstand og etagedæmpning og gå på samme navmesh som spilleren, inklusive trapperne. En dørlyd kan sende den i Investigate i samme frame. Næste frame sletter lydlisten.

PR #22 tilføjer `perceptionMemory`, som husker en høj lyd i 8 sekunder. Den er ikke koblet på hjernen. Derfor glemmer monsteret stadig skuffen, når framen er slut.

Udseendet er en mørk kapsel. Der er ikke et rigget CC0-monster. Ingen Mixamo-animationer. Ingen hvide ansigter.

## Næste PR

1. Lad hjernen læse `investigateGoal`, når den ikke ser spilleren.
2. Behold jagt, når den faktisk ser.
3. Vis i browseren, at den går til skuffen, mister spilleren bag en dør og bruger begge trapper.
4. Vurder et lovligt rigget monster bagefter. Ikke før hukommelsen virker.

Ingen netværksmodel. Ingen ny slutning.
