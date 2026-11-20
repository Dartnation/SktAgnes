# SKT. AGNES — VISUEL DESIGNPAKKE V3 (OFFLINE)

**Status:** Udkast gemt til senere; intet er installeret, publiceret eller ændret på GitHub.

**Grundlag:** `Dartnation/SktAgnes`, gren `cursor/pr-07-afslutninger`, commit `137e7fb7ce8ad6312d7502f4854156d972681b9d`.
**Udarbejdet:** 21. november 2026.

## Formål og designprincipper

Skt. Agnes skal føles som et sammenhængende dansk hospital fra 1987 — ikke som rum med tilfældige rekvisitter. Hvert rum skal have et visuelt hovedmotiv, en troværdig funktion, små spor efter mennesker, sin egen lyskarakter og få meningsfulde interaktioner. Designet må ikke fjerne brugerens eksisterende missioner eller fem slutninger.

**Visuel kvalitetslinje:** realistiske proportioner, genbrugelige PBR-materialer med normal-/roughness-kort, målrettet slid på kanter og omkring håndtag, læsbare silhuetter ved lommelygtelys, moderat støv og ingen overdrevne kamerafiltre. Store former først, derefter middelstore genstande, så små spor. Ingen billige 'tilfældige blodstænk overalt'.

**Praktisk fordeling:** ChatGPT designer rum/assetkrav og visuelle parametre; Cursor vælger sikre koordinater, integrerer modeller, kollision, gemning, interaktion, AI og performance. Professionelle 3D-modeller skal skaffes, modelleres eller licenseres særskilt: denne pakke indeholder præcise specifikationer, IKKE færdige GLB-modeller.

## Bekræftet status i kildekoden

- Der findes 12 primære rum, 3 trappeområder og udgangen `stilhed` i `src/world/data.ts`; alle optræder i denne plan.
- `PROPS` rummer eksisterende møbler. Mange objekter opbygges via simple geometrier i `src/world/LevelBuilder.ts`, mens `src/world/SetDressing.ts` tilføjer små non-interaktive detaljer.
- `DEVICES: DeviceDef[] = []` og `HIDES: HideDef[] = []` i PR-07-grenen. `src/game/Game.ts` har interaktionslogik til generator, pengeskab, radio og skjul; visuelle modeller og placeringer skal bindes korrekt, før de lover reel funktion.
- Fem slutninger og centrale genstands-ID'er er allerede i `src/systems/Story.ts` og `src/systems/catalog.ts`. Disse må ikke ændres blot for at skabe mere dekoration.
- Der har været et browsernedbrud under spil. Større grafikændringer bør vente på, at Cursor har undersøgt stabilitet, hukommelse og GPU-belastning.

## Designpakke – omfang

**134 kuraterede forslag** fordelt på 16 områder. De er ikke nye spillergenstande som standard. Mange er scene-rekvisitter, enkelte er mulige interaktioner eller skjulesteder.

### Designets fem niveauer

1. **Hero-assets:** 1–2 genkendelige kvalitetsobjekter pr. rum, særligt skranke, båre, alter, generator og udgang.
2. **Strukturelle detaljer:** Dørkarme, radiatorer, paneler, rør, loftarmaturer og afløb.
3. **Menneskelige spor:** kopper, mapper, håndskrift, en uafsluttet rutine og genstande der fortæller historie.
4. **Interaktion og skjul:** skuffer, skabe, apparater og sedler. Intet må fremstå klikbart uden virkelig funktion.
5. **Lys, lyd og atmosfære:** hver lyd har et fysisk sted; flimmer følger lysmesh; mørke bevarer orienteringspunkter.

## Rum-for-rum: præcis visuel retning og inventar

### Receptionen — `reception` (etage 0)

**Stemning:** Død indgang til hospitalet — menneskelig varme afbrudt på ét øjeblik. Slidt mørkegrønt træ, nikotingul maling, cremefarvet papir, kobber og koldt lys.
**Hovedmotiv:** Bemandet skranke fra 1987, forladt midt i nattevagten, tre defekte lysstofrør; Majas brev starter historien.
**Belysning:** Tre lysstofarmaturer blinker forskudt, ikke alle på én gang. Bordlampe kan danne varm kontrast. Klart fokus på skranken og brevet.
**Miljøhistorie:** Skranken er urørt siden sidste vagt: våd kop, åben vagtbog, telefonrør skævt på plads, friske skoaftryk der ikke passer til støvlaget.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Receptionsskranke i slidt eg | `wall_south` | hero, P0 | Udfræsede fronter, fingerfedt ved kassen, blanke hjørner af slid.. |
| Åben vagtbog | `table_existing:rec_desk` | story, P0 | Læselige danske dateringer, afrivning i sidste ark. Forslag: examine (eksisterende `note_log`). |
| Telefon med løftet rør | `table_existing:rec_desk` | interactive, P1 | Mørk bakelit, spiralledning og håndtaget løftet et par centimeter. Forslag: examine. |
| Hospitalets vægur | `wall_north` | set, P1 | Visere låst på 04:31, let glasrefleks. Forslag: examine. |
| Køsystem i messing | `wall_southeast` | set, P2 | To metalstolper med flosset snor, langt fra flugtpassagen.. |
| Ventestole med revnet vinyl | `wall_west` | set, P0 | Tre forskellige slidniveauer, én stol væltet.. |
| Registreringsmapper | `table_existing:rec_sideboard` | set, P1 | Pap med håndskrevne patientnumre, unikke rygge. Forslag: examine. |
| Fugtigt opslag om lukning | `wall_west` | story, P1 | Officiel lukning 1987, modstridende håndskrevet tilføjelse. Forslag: examine. |
| Knust glas i dørkarm | `door_side:door_rec_pat` | set, P2 | Glasstykker uden kollision; må ikke indfange spilleren.. |
| Loftsarmatur A med defekt ballast | `ceiling_north` | light, P0 | 1980er-rør, separat lys og emissive overflade.. |
| Loftsarmatur B med korroderet fatning | `ceiling_center` | light, P0 | Ujævn diffusor og uregelmæssigt lysudfald.. |
| Loftsarmatur C med mørk ende | `ceiling_south` | light, P0 | Kort blink efter strømdyk, mindre intens end A.. |

### Patientgangen — `patientgang` (etage 0)

**Stemning:** Lang, utryg patientgang med gentagne døre, skygger i hjørner og forladte spor efter beboelse. Støvede hvide fliser og sygeligt grønne skabslåger.
**Hovedmotiv:** En kørestol står skævt under et nedbrudt loftpanel; nummererede patientdøre og en båre får gangen til at se beboet ud.
**Belysning:** Uens loftlys: én svag stabil pære, ét udfald og én kold nødlysplet; resten forbliver mørkt.
**Miljøhistorie:** Plakater med regler, sengebåse og døre med kun ét navn overstreget. Spilleren lærer at undgå lyde her.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Patientnavneskilte | `wall_north` | story, P0 | Emaljeplader, flere overstreget med rustfarvet maling. Forslag: examine. |
| Forladt kørestol | `prop_existing:pat_wheelchair` | hero, P0 | Spænder på læderrem, støvede eger og slidte håndtag.. |
| Båre med sammenkrøllet lagen | `prop_existing:pat_gurney` | hero, P0 | Snavset vævet stof og mærker efter hjulene.. |
| Sengegitter mod væg | `wall_southwest` | set, P1 | Oxideret stål, fremspring undgår ganglinje.. |
| Skab til sengetøj | `prop_existing:pat_locker` | hide, P0 | Ridset dør, skjulte hængsler og plads til én spiller. Forslag: hide. |
| Håndvask og spejl | `wall_east` | interactive, P1 | Dryppende kalksten og mørkt spejl, ingen interaktiv vandfysik. Forslag: examine. |
| Slidt gulvmarkering | `floor_edge` | set, P1 | Håndmalet etagepil, afbrudt ved et blodspor.. |
| Rullende journalvogn | `wall_southeast` | set, P2 | Papirer og stofpose, lokal navmesh-fri passage.. |
| Kassen til patientalarmer | `wall_west` | interactive, P1 | Udslået ledning og svagt glødende knap. Forslag: examine. |
| Nødlygteholder uden lygte | `wall_north` | story, P2 | Tom metalholder, slidt beslag. Forslag: examine. |

### Operationsstuen — `operationsstue` (etage 0)

**Stemning:** Klinisk og brutal. Koldt metal, blågrønne fliser, tørrede desinfektionspletter og en operationslampe som det eneste præcise lys.
**Hovedmotiv:** Operationsbord med detaljeret læderbetræk, skarpe kanter, instrumentbakke og ophængt lampe.
**Belysning:** Loftslampen mister lyset i korte intervaller, men blænder aldrig hele skærmen; rødt indikatorlys ved døren.
**Miljøhistorie:** Udstyr står ordnet, som om operationen blev afbrudt. Bevar den eksisterende operationsnøgle.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Operationsbord med remme | `prop_existing:op_table` | hero, P0 | Stålfod, håndtag, læderremme, pletter uden overdrevet gore.. |
| Flerleddet operationslampe | `ceiling_center` | light, P0 | Tre reflektorskåle og mat glas, realistisk metalslitage.. |
| Rustfri instrumentbakke | `prop_existing:op_trolley` | interactive, P0 | Tænger, sakse og mærket bakke med håndtag. Forslag: examine. |
| Metalrullebord | `prop_existing:op_trolley` | set, P0 | Hjulophæng, skruehoveder, instrumenthylder.. |
| IV-stativ med tom flaske | `prop_existing:op_iv` | set, P1 | Gummislange og glasrefleks; ingen fysisk løs ophængning.. |
| Foldeskærm i misfarvet lærred | `prop_existing:op_screen` | set, P1 | Stoffolder og rustne aluminiumsrør.. |
| Steriliseringsskab | `wall_north` | interactive, P1 | Emaljeret låge og analogt trykmålerur. Forslag: open. |
| Operationsprotokol på holder | `wall_west` | story, P0 | Danske patientinitialer, én post overkrydset. Forslag: examine. |
| Nøgleholder med manglende kroge | `wall_southwest` | story, P0 | Visuelt spor til den eksisterende key_op-pickup. Forslag: examine (eksisterende `key_op`). |
| Affaldsspand i emalje | `wall_southeast` | set, P2 | Buler og små pletter.. |

### Slagterummet — `slagterum` (etage 0)

**Stemning:** Koldt, tungt og improviseret — tidligere depot anvendt til uofficielle formål. Mørkerødt nødbelysning må ikke fjerne alle farvenuancer.
**Hovedmotiv:** Rustne metalkroge og en stor hylde der skjuler tunnelvalget; robust, frygtindgydende silhuet.
**Belysning:** Dæmpet rød lampe som sekundær guide, koldt lys fra døren. Ingen konstant rød fuldskærmsfilter.
**Miljøhistorie:** Rummets ændringer bør få spilleren til at forstå, at den officielle historie er falsk.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Krogskinne og tunge kæder | `prop_existing:slag_hook` | hero, P0 | Rustløb, ophæng og tung skygge; hold over passage fri.. |
| Skjult hylde med mærkelig fuge | `prop_existing:slag_shelf` | interactive, P0 | Tydelig fuge ved gulv, hjulspor og mærker efter koben. Forslag: operate (eksisterende `crowbar`). |
| Rustent arbejdsbord | `prop_existing:slag_table` | hero, P1 | Stålramme og ridset overflade, få rustpletter.. |
| Opbevaringsskab | `prop_existing:slag_locker` | hide, P1 | Sikre indvendige mål hvis det bliver skjulested. Forslag: hide. |
| Defekt kompressor | `wall_north` | audio, P1 | Slange og ventilationsrist, lav rumlen fra fysisk kilde.. |
| Løs gulvrist | `floor_edge` | set, P1 | Rustnettet afløb med fugtkant.. |
| Inventarliste med slettede numre | `wall_west` | story, P1 | Håndskrevet liste over kasser, ikke nye nøgler. Forslag: examine. |
| Nedbrudt rørkobling | `ceiling_north` | set, P2 | Tynd kalkstribe og korrosion.. |
| Tung ståldør med låsearm | `door_side:door_op_slag` | set, P0 | Indfældet håndtag og synlige bolte uden ændring af navmesh.. |

### Arkivrummet — `arkiv` (etage 1)

**Stemning:** Tætte reoler, støvfingre, gule dokumenter, grønne bankerlamper og skyggefulde gyder. Lige akkurat nok plads til at flygte.
**Hovedmotiv:** En dramatisk lang reol og en læsepult med stiftelsesprotokollen.
**Belysning:** Én svag, varm skrivebordslampe. Støv er et kortvarigt effektlag kun i lyset.
**Miljøhistorie:** Arkivet skal få spor og koder til at føles logisk fundet, ikke tilfældigt placeret.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Journalreol med forskellig rygtykkelse | `prop_existing:ark_shelf` | hero, P0 | Unikke rygtekster, slidmærker og tomme pladser.. |
| Stiftelsesprotokol 1907 | `prop_existing:ark_table` | story, P0 | Bog med præget omslag og bladkanter, placer ved læsepult. Forslag: examine (eksisterende `note_code`). |
| Arkivskuffe med drejet greb | `prop_existing:ark_file` | interactive, P1 | Glidende skuffe, realistisk skinnelyd og ingen automatisk pickup. Forslag: open. |
| Direktørens gamle pengeskab | `wall_southwest` | interactive, P0 | Analogt kodehjul og tydeligt nummerfelt; fysisk interaktionspunkt til eksisterende kode og hovednøgle. Forslag: operate (eksisterende `master_key`). |
| Mikrofilm-apparat | `wall_north` | interactive, P2 | Blålig linse og en kassette med dato. Forslag: examine. |
| Skrivemaskine | `prop_existing:ark_table` | set, P1 | Mat metal, støv mellem taster og gulnet papir. Forslag: examine. |
| Journalmappe med rød snor | `prop_existing:ark_records` | story, P0 | Spillerens blik ledes til eksisterende journalspor. Forslag: examine. |
| Væghængt arkivoversigt | `wall_west` | interactive, P1 | Giver navigationshjælp uden skjulte rum. Forslag: examine. |
| Forstørrelsesglas på stativ | `table_edge` | set, P2 | Brunt glas og messing; ren dekorativ.. |
| Låst kasse med journalnummer | `wall_southwest` | interactive, P2 | Sideindhold kun kosmetisk eller nye valgfri spor. Forslag: open. |
| Rulletrappe til reoler | `wall_east` | set, P1 | Træstige boltet til reol, må ikke spærre midtergangen.. |

### Det aflåste laboratorium — `laboratorium` (etage 1)

**Stemning:** Sterilt møder forfald: grønne glasskabe, flækket white tile, analoge instrumenter, kemikalieskabe og én operationel kontrolpult.
**Hovedmotiv:** Kemisk arbejdsbænk med glasvarer, tørre pletter og laboratoriejournal.
**Belysning:** Koldt lys som kun aktiveres ved strøm; svag standby-glød på et instrument.
**Miljøhistorie:** Dokumenter er opdelt i observationer og beslutninger; uden nye obligatoriske missioner.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Laboratoriebord med bægerglas | `prop_existing:lab_bench` | hero, P0 | Moduler, glas, keramisk vaskeplads og stålarmatur.. |
| Kasse med prøverør | `prop_existing:lab_bench` | set, P1 | Forskellige etiketter og flydendevæske på lav effekt. Forslag: examine. |
| Analoge måleapparater | `wall_north` | interactive, P1 | Visere i fejlstilling, ingen avancerede skærme. Forslag: examine. |
| Kemikalieskab med rust | `wall_east` | interactive, P0 | Glastykke, lås og symboler i perioden. Forslag: open. |
| Støvet laboratoriejournal | `prop_existing:lab_bench` | story, P0 | En note der antyder forkert patientregistrering. Forslag: examine. |
| Desinfektionsdispenser | `wall_west` | set, P2 | Udslidt metalpumpe.. |
| Gasflaske med kæde | `wall_southeast` | set, P1 | Kæde gør flaske visuelt sikker og stationær.. |
| Defekt stinkskab | `wall_northwest` | hero, P1 | Mørk glasrude og fedtet frontliste.. |
| Smadret urglas | `table_edge` | set, P2 | Ingen simuleret fysik for løse skår.. |

### Obduktionssalen — `obduktion` (etage 1)

**Stemning:** Tung, fugtig og klinisk. Stål med matte reflekser, gulvafløb, keramiske vægge og værktøj efterladt i ordnet uorden.
**Hovedmotiv:** Obduktionsbord, ældre vægt og instrumentbakker i lyskeglen.
**Belysning:** En lampe gløder sent efter kontakt, en anden tikker ujævnt; ingen fuldskærmsflash.
**Miljøhistorie:** Skab en tydelig kontrast mellem officielle protokoller og det faktisk udførte.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Obduktionsbord i børstet stål | `prop_existing:obd_table` | hero, P0 | Riller, dræn og matte spejlinger, ingen spejlblank krom.. |
| Bordvægt med emaljeskål | `prop_existing:obd_trolley` | set, P1 | Følsom analog viser; gammel vægt. Forslag: examine. |
| Knogleværktøj i læderrulle | `prop_existing:obd_trolley` | set, P1 | Rustpletter og skygger fra skaft. Forslag: examine. |
| Patientlister i metalholder | `wall_north` | story, P0 | Initialer og datoer stemmer ikke med registreret død. Forslag: examine. |
| Kølekabinet med termometer | `wall_west` | hero, P0 | Små rektangulære låger og tydelig kompressor.. |
| Ridset ansigtsmaske | `prop_existing:obd_table` | set, P2 | Klassisk gummi, ikke moderne plastikfilter.. |
| Rullebåre | `wall_east` | set, P1 | Tænk i fri åbning omkring eksisterende obduktionsbord.. |
| Vask og håndklæde | `wall_south` | interactive, P2 | Fugtplet og papirhåndklæde; kun besigtigelse. Forslag: examine. |
| Mikrofonledning uden apparat | `ceiling_north` | story, P2 | En forladt kabelføring skaber tvivl. Forslag: examine. |

### Det forladte personalerum — `personalerum` (etage 1)

**Stemning:** Varm, menneskelig rest af hverdagen. Orange væglampe, brun vinyl, kaffe, knækkede cigaretter og radioens hvisken.
**Hovedmotiv:** Sofa, radio på sideboard og bord med nedskrevne vagtbytter.
**Belysning:** Varm, svag bordlampe; resten koldt og mørkt. Radioens lys er en lille, fokuseret detalje.
**Miljøhistorie:** Vagterne var bange, men prøvede at skjule det for hinanden.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Gammel bordradio med drejeknap | `prop_existing:pers_radio` | interactive, P0 | Analog skala, lys i vindue, patineret træside, knap. Forslag: operate (eksisterende `radio`). |
| Sofa med revnede puder | `prop_existing:pers_sofa` | hero, P0 | Stof med slidte kanter, én forskudt pude.. |
| Vagtplan og overlappende vagter | `wall_north` | story, P0 | To navne på samme vagt og en ufuldstændig underskrift. Forslag: examine. |
| Halvfuld kaffekop | `table_edge` | set, P1 | Keramisk ring på bordet og koppen ved stolen.. |
| Rød termokande | `prop_existing:pers_radio` | set, P2 | Skrammer og plastiklåg; ingen vandfysik.. |
| Skab med private ejendele | `wall_west` | hide, P0 | Dør med slør og klistermærke, plads til spiller. Forslag: hide. |
| Håndskrevet memo | `prop_existing:pers_filing` | interactive, P1 | En sætningsbrudt undskyldning. Forslag: examine. |
| Analog bordlampe | `prop_existing:pers_radio` | light, P1 | Mat glasskærm, kobberfarvet ledning.. |
| Ødelagt brætspil | `wall_southeast` | set, P2 | Få brikker som dekoration, ikke gameplayfysik.. |
| Batterikasse ved vagtbord | `wall_east` | interactive, P1 | Kun visuel ramme om eksisterende batteri; undgå dobbelt pickup. Forslag: examine (eksisterende `battery`). |

### Kældergangen — `kaeldergang` (etage 2)

**Stemning:** Fugt og industrielle installationer. Grov beton, kalk, vand, elektriske skabe, kedelrør og mekanisk vibrerende generator.
**Hovedmotiv:** Generatoren med tre tydelige sikringspladser. Dette er kritisk for missionen og må ikke forveksles med en ren dekorationsgenstand.
**Belysning:** En enkelt kold servicepære, skiftende skær fra aggregatet efter strømstart; ingen stroboskop.
**Miljøhistorie:** Tre farver sikringer og tekniske symboler bør kunne aflæses i lommelygten, så opgaven føles fair.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Nødgenerator med sikringspanel | `wall_southwest` | interactive, P0 | Tre keramiske sokler, tandhjul, kabelbundt og analoge målere. Forslag: operate (eksisterende `generator`). |
| Farvekodet sikringstavle | `prop_existing:kael_shelf` | story, P0 | Rød/blå/gul markering; må ikke skabe ekstra nøglekrav. Forslag: examine (eksisterende `fuse_red`). |
| Kraftige damp- og vandrør | `ceiling_north` | hero, P0 | Ægte beslag, fugtskjolder og afløbsstudse.. |
| Ventil med håndhjul | `wall_east` | interactive, P1 | Begrænset drejevinkel og metallic knirk. Forslag: operate. |
| Værktøjsvogn | `prop_existing:kael_cart` | set, P1 | Skruenøgler, oliekande og fedtfingre.. |
| Elskab med fareskilt | `prop_existing:kael_locker` | interactive, P1 | Gammeldags dansk højspændingsskilt og slidt drejelås. Forslag: examine. |
| Lille stige mod væg | `wall_west` | set, P2 | Fastgjort og uden vejblokering.. |
| Vandpyt med oliefilm | `floor_edge` | set, P0 | Kantmørke og lav spejling uden dyr realtidsspejling.. |
| Vedligeholdelseslog | `wall_north` | story, P1 | Strømsvigt noteret samme nat som vagtbogen. Forslag: examine. |
| Rørbanke-lydkilde | `wall_north` | audio, P1 | Lyd forankret ved fysisk rørknæ.. |

### Det mørke kapel — `kapel` (etage 2)

**Stemning:** Stille og helligt, men forladt. Slidte mørke træbænke, kold sten, flosset alterklæde og lys der næsten ikke når gulvet.
**Hovedmotiv:** Et centralt alter med rosenkrans, gammelt gitter og en svagt synlig stiftelsessten med 1907.
**Belysning:** Få meget svage flammer eller elektriske imitationer, som understøtter læsbarhed uden at oplyse hele rummet.
**Miljøhistorie:** Stiftelsesstenen og rosenkransen forbinder kirkehistorien med hospitalet og kodegåden.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Alter med udskåret ornament | `prop_existing:kap_altar` | hero, P0 | Træårer, slidte hjørner og stenplade.. |
| Stiftelsessten 1907 | `wall_north` | story, P0 | Tydelig læsbar indgravering, afgørende spor til pengeskabet. Forslag: examine (eksisterende `note_code`). |
| Rosenkrans i åbent skrin | `prop_existing:kap_altar` | story, P0 | Få keramiske perler og messingkors, genbrug eksisterende rosary-ID. Forslag: examine (eksisterende `rosary`). |
| Kirkebænke med poleret slid | `prop_existing:kap_pew1` | hero, P0 | Slid på siddesteder og bløde kanter.. |
| Kirkebænk 2 med afrevet betræk | `prop_existing:kap_pew2` | set, P1 | Skrå åretegning og knækket bogholder.. |
| Lille skriftemøbel | `wall_west` | hide, P1 | Muligt skjulested kun hvis det implementeres korrekt. Forslag: hide. |
| Slidte salmebøger | `floor_edge` | set, P2 | Papirkanter, en side foldet bagud. Forslag: examine. |
| Smalt farvet vindue | `wall_east` | light, P1 | Ingen overmættet farvetegning, forsigtig indirekte effekt.. |
| Lydkilde i kapelklokken | `ceiling_north` | audio, P0 | Synligt ophæng og lokal klokkeangivelse.. |
| Bevismappens skjul | `prop_existing:kap_filing` | story, P0 | Skal pege på eksisterende evidence, ingen ekstra påkrævet kopi. Forslag: examine (eksisterende `evidence`). |

### Observationsrummet — `observation` (etage 2)

**Stemning:** Klinisk overvågning og menneskeligt ubehag. Polstret loft, kikhul, retningsbestemte skygger og gammelt overvågningsudstyr.
**Hovedmotiv:** Seng med remme under en ensom observationslampe og et spejl med ridser.
**Belysning:** Næsten mørkt, kun et kort glimt fra defekt armatur og indirekte lys fra døren.
**Miljøhistorie:** Det skal føles, som om personalet engang så på patienterne herfra.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Observationsseng med fastholdelser | `prop_existing:obs_gurney` | hero, P0 | Læderremme og metalbeslag, mindre dramatisk end obduktion.. |
| Observationsspejl | `wall_west` | hero, P0 | Tydeligt spejlfelt med mørk bagkant; undgå dyr full-scene reflection. Forslag: examine. |
| Hånddrevet registreringsapparat | `prop_existing:obs_desk` | interactive, P1 | Rullende grafpapir og mekanisk arm. Forslag: examine. |
| Polstret dørpanel | `door_side:door_kapel_obs` | set, P0 | Striber fra håndtryk, ikke overpolstret hele rummet.. |
| Særskilt patientjournal | `prop_existing:obs_locker` | story, P0 | Note med tidspunkter der ikke hænger sammen. Forslag: examine. |
| Privacy screen med stofrevner | `prop_existing:obs_screen` | set, P1 | Små huller og mørke folder.. |
| Overvågningsmikrofon | `ceiling_center` | audio, P2 | Ældre kapsel på tynd ledning uden moderne kamera. Forslag: examine. |
| Defekt loftarmatur | `ceiling_north` | light, P0 | Langsomme udfald, ingen hurtig flimren.. |
| Kort påtrykt afdelingsplan | `wall_east` | set, P1 | Diskret klinisk instruks; ikke et afsløret minimap. Forslag: examine. |

### Det sidste kammer — `kammer` (etage 2)

**Stemning:** Følelsen af, at hospitalets historie samles her. Kold fugt, en ensom seng, låst skab og et rum hvor stilhed bliver betydningsfuld.
**Hovedmotiv:** Enkel seng og tømt kartotek. Udgangens silhuet må ses, men ikke være tilgængelig før kravene.
**Belysning:** Lille lokal lampe og indirekte lys fra dørsprækken. Ingen konstant rød/grøn farvelys.
**Miljøhistorie:** Spor peger tilbage til Maja og patienternes navne uden at afsløre slutningen for tidligt.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Isolationsseng med rust | `prop_existing:kam_bed` | hero, P0 | Sænkede metalender og snavset madras.. |
| Rids i sengestolpe | `prop_existing:kam_bed` | story, P0 | To sæt initialer, én mere frisk end den anden. Forslag: examine. |
| Tømt kartotek | `prop_existing:kam_dresser` | interactive, P1 | Åbne skuffer, støvfelter hvor mapper mangler. Forslag: open. |
| Afskallet patientnummer | `wall_north` | story, P0 | Nr. overstreget, et andet skrevet med blyant. Forslag: examine. |
| Lille sengelampe | `wall_east` | light, P1 | Varme glimt fra defekt glødetråd.. |
| Medicinvogn uden udstyr | `prop_existing:kam_cart` | set, P1 | Kun hjulspor og én tom glasflaske.. |
| Stol med slidspor på gulv | `prop_existing:kam_chair` | set, P2 | Stolens fødder efterlader spor.. |
| Udgangsdørens koldtrukne metal | `door_side:door_stilhed` | hero, P0 | Metalplade med fem boremærker og realistisk håndtag.. |
| Knap uden forbindelse | `wall_south` | interactive, P2 | Aldrig obligatorisk puzzle hvis den ikke får fuld logik. Forslag: examine. |

### Trappeopgang – stueetage — `trappe0` (etage 0)

**Stemning:** Våde betontrin, støv på gelænderet og lavtliggende skygger. Tydelig orientering uden at afsløre andre rum.
**Hovedmotiv:** Håndliste og væglampe med defekt gitter.
**Belysning:** En enkelt svag væglampe; ikke belyst hele trappen.
**Miljøhistorie:** Skridt skal høres, ikke spawne tilfældigt.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Slidt gelænder | `stair_rail` | hero, P0 | Grå maling med blankt slitagepunkt.. |
| Etagenummer på væg | `wall_north` | set, P1 | Emaljeskilt i mørke toner.. |
| Defekt gitterlampe | `wall_west` | light, P1 | Lampe uden overdrevent bloom.. |
| Vandløb i fuger | `wall_south` | set, P2 | Enkel decal med vådhed frem for vandpartikler.. |

### Trappeopgang – første sal — `trappe1` (etage 1)

**Stemning:** Rørstreger og smudstriber. Forskellige lækager giver troværdig etageforskel.
**Hovedmotiv:** Trappeafsats med mørk lampe og lidt løs puds.
**Belysning:** Næsten slukket, koldt indirekte lys.
**Miljøhistorie:** Monsteret skal kunne passere uden kollision.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Fastlåst brandtæppe | `wall_west` | set, P2 | Metalramme og falmet sikkerhedspiktogram.. |
| Revet etageskilt | `wall_north` | story, P1 | Én etageangivelse er ridset væk. Forslag: examine. |
| Blottet ledningsbakke | `ceiling_north` | set, P1 | Høj nok til uhindret passage.. |
| Væglampe i tungt bur | `wall_east` | light, P1 | Små blink med pauser og ens farvetone med andre lamper.. |

### Trappeopgang – kælder/øverste rumniveau — `trappe2` (etage 2)

**Stemning:** Kulsort indgang til den sidste del. Fugt og kraftige ristede beslag som lydbillede.
**Hovedmotiv:** Tung trappesektion med håndgreb som flugtmarkør.
**Belysning:** Næsten mørk, forsigtige refleksioner på våd beton.
**Miljøhistorie:** Rute til den låste udgang skal være synlig i lommelygtens lys.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Rustne beslag | `stair_rail` | set, P1 | Ensartet korrosion med metalmaterialer.. |
| Kalkstribe under rør | `wall_south` | set, P1 | Decal, ingen ekstra kollision.. |
| Nødbelysningskasse | `wall_north` | light, P1 | Tomt batteri, kun svag indikator.. |
| Aftrykte håndmærker | `wall_west` | story, P2 | Spor leder opad, uden nye opgaver. Forslag: examine. |

### Ud til stilheden — `stilhed` (etage 2)

**Stemning:** Udgangen er hverken triumferende eller varm. Tåget nat, fugtigt beton og mørkt metal i porten.
**Hovedmotiv:** Ståldør med tung lås og kun en smal stribe natligt lys.
**Belysning:** Udendørs indfaldslys må ikke ødelægge mørket i det foregående kammer.
**Miljøhistorie:** Respekter fem slutninger og den eksisterende hovednøgle-logik.

| Genstand | Placering | Rolle / prioritet | Visuel detalje og funktion |
|---|---|---|---|
| Massiv bagport og låsekasse | `door_side:door_stilhed` | hero, P0 | Mekanisk rigel og hul hvor hovednøglen passer.. |
| Udendørs regnsilhuet | `wall_north` | set, P1 | Kun lav pris på regneffekt, ikke partikelstorm.. |
| Næsten ulæselig flugttavle | `wall_west` | story, P2 | Ingen tidlig afsløring på minimap. Forslag: examine. |
| Dørkarm med fugtspor | `door_side:door_stilhed` | set, P1 | Fine detaljer uden ekstra kollision.. |

## Tre særligt vigtige designblokeringer

**A. Interaktive apparater er ikke placeret i `DEVICES`:** Brug `generator` i `kaeldergang`, `radio` i `personalerum` og et tydeligt `safe`-punkt i et rum der stemmer med historien. Før Cursor opretter punkterne skal de kontrolleres mod den eksisterende kode og faktiske missionsruter. Undgå at oprette nye genstands-ID'er eller flytte plotgenstande uden test.

**B. Skjulesteder findes ikke i `HIDES`:** Kandidater: `pat_locker` i `patientgang`, et personale-skab i `personalerum`, en egnet seng i `kammer` og et særskilt skjul i `kapel` hvis realistisk. Kun aktivér, hvis kamera, ind- og udgang, monsterets søgning og kollisionsafstand er verificeret. Tving ikke spilleren ind i vægge ved interaktion.

**C. Hylden i `slagterum` er et vigtigt slutningspunkt:** Bevar `slag_shelf`, kobenet og tunnelvalget. Detaljér hylden visuelt, men ændr ikke interaktions-ID, logikken for de fem slutninger eller dør-/navmesh-opsætningen. Et eventuelt fysisk tunnelniveau kræver en særskilt gameplayplan.

## Materialebibliotek V3

| Materiale | Udtryk | Shader-/performanceprincip |
|---|---|---|
| Aldret egetræ | Slid på greb og hjørner, mørke indfald | 1 basefarve + roughness + normal; fælles teksturatlas |
| Mat klinikflise | Gullige fuger, skrabemærker, få våde pletter | Tile-baseret, separate små decals; begrænset spejlning |
| Emaljeret metal | Afslag i lak og lokal rust ved bolte | PBR med høj roughness, metalness kun hvor bart metal ses |
| Børstet rustfrit stål | Ensrettede ridser, matte highlights | Normal map og roughness frem for realtidsrefleksion |
| Forvitret beton | Fugtstriber, kalk og mørkere underkant | Genbrug tileable base og 2–3 variationer via decals |
| Papir og karton | Fiberstruktur, krøllede hjørner og stempler | Små teksturatlas; skarpe tekster kun tæt på |
| Slidt vinyl og stof | Mat, revnet overflade og mønster | Delte materialer og normals; ingen dyre stof-simuleringer |
| Glasset i flasker | Støv, kalk, afdæmpede reflekser | Sparsom transparens og korrekt sortering |
| Våde områder | Lokal mørkhed og begrænset spejling | Undgå vandrefleksion over hele gulvet |

## Lysdesign og lommelygte

- Receptionen: tre lamper med selvstændig kurve og minimumspause mellem fejl; emissive materiale og reel lyskilde skal blinke sammen. Undgå fuldskærmsblink.
- Hvert rum: højst 1–2 primære læsbare kilder og en sekundær svag orienteringskilde ved behov. Ikke alle lyspunkter skal kaste dynamiske skygger.
- Lommelygte: fokuseret midte, blød kant, realistisk nær-fjern-aftrapning, målrettet skyggeskarphed og minimal støvlyseffekt tæt på kamera.
- Slukket lommelygte skal skabe frygt, ikke total utilgængelighed: nogle dørkarme og lyse genstande bør forblive synlige via indirekte lyskilder.
- Varme/kulde-kontrast: reception/personalerum varmere, laboratoriet/obduktion køligere, kapellet næsten farveløst med små varme accentpunkter.
- Tilgængelighed: reduceret flimmer og kamerarystelser. Ingen kraftigt synkrone lysglimt.

## Monsters visuelle retning

**Vogteren:** menneskelig men unaturlig silhuet, ældre hospitalsuniform med slidte syninger, skævt kropssprog og ansigt der først afsløres helt i lommelygten. Ingen konstante glødende røde øjne, der giver gratis lokalisering. PBR-stof, fugtig hud, slidt navneskilt og tynde fingre; læsbar silhuet i lavt lys.

**Animationskrav til Cursor:** brug rigget GLB eller kompatibelt Mixamo-skelet, `Idle`, `Walk`, `Run`, `Search`, `Attack`, `Stagger` og helst `Recover`. Ingen T-pose, fodglidning, synlig teleportering eller angreb igennem døre. Selve denne V3-pakke inkluderer IKKE en licenseret model eller animerede filer.

## Kamera, filmisk kvalitet og HUD

- Hold FOV nær nuværende baseline og test sprintvariation, inden du ændrer dette. Kameraets gynge og svaj skal være svagt og kun matche virkelig bevægelse.
- Skærmeffekter: diskret vignette, støj kun hvor det tilfører stemning, chromatic aberration ved korte stresshændelser – ikke konstant skarphedsforringelse.
- Dokumenter og læselige objekter bør få et nærmere inspektionskamera eller fokuseret UI-visning uden at ændre hele spillets æstetik.
- Hold minimap, objektivtekst og inventar rent og diskret; vis ikke skjulte rum før opdagelse.

## Ansvar og teknisk integrationskontrakt til Cursor

1. Lav først en sikker, adskilt design-integrationsgren fra seneste godkendte gameplay-gren; kontroller ukommittede ændringer. **Ingen direkte ændringer i main eller live.**
2. Byg kun `reception` som fuldt detaljeret prøve-rum først. Sammenlign med screenshots af den nuværende version ved samme kameravinkel, samme grafikindstilling og lommelygte til/fra.
3. Indfør et asset-manifest, og bind design-ID til `RoomDef`, nuværende `PropDef` og eventuel ny `DeviceDef`/`HideDef`. Manifestets ankernavne er konceptuelle, IKKE direkte spilkode eller koordinater.
4. Hvor et eksisterende møbel får en bedre model: **erstat eller opgrader**, dubler ikke. Respekter `PROPS` og kollisions-/navmesh-opbygningen.
5. Interaktive objekter skal være separate sceneobjekter med tydelig ID, raycast/selektionsadfærd og gemt tilstand. De må ikke forsvinde i statisk sammenflettet geometri.
6. Nye `catalog`-genstande kun efter beslutning om deres rolle i historien. Valgfrie spor må ikke gøre slutninger eller gamle gemninger utilgængelige.
7. Test dørsvingsradius, passagebredde, mindst 0,8–1,0 meter fri gangpassage som designmål, trapper og monsterets adgang. Den præcise kollisionsbredde fastsættes ved prøvning.
8. Lyd fra PR-06: behold én fysisk kilde pr. rum og prøv kildeplaceringen i de nye objekter, så lyd og model matcher.
9. Browseren er tidligere lukket uventet: stabilitetsfejl først, derefter V3. Test FPS, hukommelsesforbrug, WebGL-kontekst, skyggeantal og ressourceoprydning.
10. Test på lav/mellem/høj grafik. Brug instancing for gentagelser, LOD for detaljerede assetmodeller, genbrug teksturer, og undgå overdrevne skyggekastende lamper og tunge transparenser.
11. Gennemfør både automatiske tests og visuel browser-QA. Rapportér nye draw calls, teksturhukommelse og faktisk frame time, ikke kun `npm run build`.
12. Del V3 i mindre trin: V3-A reception, V3-B gange/trapper, V3-C operationsstue/laboratorium/obduktion, V3-D arkiv/personalerum/kapel, V3-E kælder/slutrum/udgang, V3-F monster og lyspolering, V3-G QA.

## Afgrænsning og næste startpunkt

Denne designpakke kan gennemgås eller overdrages til Cursor senere. Den er bevidst ikke kopieret ind i spillet, ikke skubbet til GitHub og ikke publiceret. **Når brugeren skriver 'Start SktAgnes V3',** skal den seneste kode, crashstatus og biblioteksfilerne kontrolleres igen før nogen implementering. Start med en sikker visuelt sammenlignelig Receptionen-prototype.