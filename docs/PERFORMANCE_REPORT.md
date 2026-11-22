# Ydelse

## Målt i denne omgang

- Produktionsbuild: ét JS-bundt på 770 kB, gzip 216 kB, plus 14 MB CC0-JPEG, som browseren kun henter når spillet starter.
- 122 enhedstests på under 3 sekunder.
- Chromium headless med SwiftShader kørte materiale- og skuffetesten uden sidefejl. FPS er ikke et ærligt tal på SwiftShader og rapporteres ikke som 60.

## Ikke målt

- 20 minutters spil.
- GPU-hukommelse på en navngiven maskine.
- Draw calls efter fototilføjelsen. Det tidligere loft på 8 synlige lamper er uændret.
- Om 1K-normalerne koster noget mærkbart. De er valgt i stedet for 2K eller 4K netop for at holde vægten nede.

Stabil 60 FPS på en almindelig computer er **NOT VERIFIED**.
