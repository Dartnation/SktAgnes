# SktAgnes – V5 Whole-Hospital Visual Quality Pass

> **Scope: all 16 playable zones, not the room shown in a single screenshot.**
> Base: \`design/v4-hero-objects-and-room-identity\` (PR26). New branch: \`design/v5-cinematic-complete-pass\`.

## Non-negotiable boundary

Visual-only. No changes to mission progression, scene triggers, monster behavior or pathfinding, level hitboxes, doors, code entries, pickups, item definitions, battery consumption, save/load, inventory handling, walking/crawling/jumping, scripted horror timing or audio triggers.

Visual-only files may construct or style meshes with new textures/materials and alter CSS layout without changing DOM events.

## Problem statement

The screenshots expose a **whole-project art-quality problem**:
- many props still use simple regular-box silhouettes, with missing real functional details;
- the torch viewmodel and hands overpower the frame and have an unreal plastic appearance;
- room signage and common props repeat too uniformly;
- pickup cards and text overlays cover too much of the scene;
- textures on surfaces can be good yet entire rooms still feel like unpopulated stage sets;
- some visuals are positioned using guessed coordinates rather than grounded furniture anchors;
- a passing build does not prove believable room composition, lighting, 3D material fidelity or clear navigation.

V5 starts with **all existing static furniture** using measured anchors and non-colliding instanced details:
reception bell, clipboards, ledger and desk lamp; archive folders, drawers and index cards; surgical table pads/rails; laboratory specimens; autopsy trays; technician's carts; patient-bed pillows and restraints; staff lounge furniture; worn chapel pews; and distinctive interaction-adjacent parts.

No detail is added to world.props or colliders. No move of mission props or interactive models.

## Room-specific visual acceptance matrix

| Area | Art direction | Need to inspect in live browser |
|---|---|---|
| Receptionen | 1987 hospital registry; paper records, brass bell, mail trays, worn desk lamp; believable waiting area | desk height, hand/torch occlusion, empty walls, readable notices |
| Patientgangen | used wheelchairs, stitched cushions, medicine trolley, distressed linen, rail hardware | corridor sightlines, large plain walls, door apparition silhouette |
| Operationsstuen | clinical 1970–80s stainless, mattress rails, IV bottles and instruments | operating lamp shadows, shelf collisions, material roughness |
| Slagterummet | industrial service wash area, hanging equipment, practical tooltray, rust stains | scripted blackout lighting preservation, silhouette legibility |
| Trappeopgang 1 | old safety fixtures, conduits, worn paint, stair hardware, believable landings | no wall clipping, handrails, tread visibility |
| Arkivrummet | heavy file cabinets, working safe facade, shelf binders, desk ledger, dim task lighting | drawer access, safe face, readable archives, no false geometry |
| Laboratoriet | specimen jars, accurate metal trays, old record equipment, tiled grout | shelf scale, meaningful color separation, interactive path |
| Obduktion | surgical steel, trolley trays, coffin-like sheet/mattress, filing cases | unsettling but believable; surfaces visible in low light |
| Personalerummet | old radio, staff lockers, worn leather seating, paperwork | radio visibility and materials, no extra duplicated radio |
| Trappeopgang 2 | same structure, different aging and older warning details | safe passage and good readability |
| Kældergangen | cable spools, service panels, spare trolleys, generator housing | generator access, true industrial scale, avoid prop collision |
| Kapellet | authentic altar detail, worn wooden pews, beeswax candleholders | restrained atmosphere, avoid whimsical glow |
| Observation | observation window, clipboard, case notes, patient bed/rail details | one-way glass should be visually convincing |
| Kammeret | isolation bed, bedstead, patient evidence, old medicine supplies | exit visibility and wheelchair/bed size relationships |
| Trappeopgang 3 | maintenance infrastructure, heavy steel and corrosion | landing height and clearance |
| Stilhed (udgang) | last gate, concrete moisture stains, outdoor transition | room read, real ending exit clear |

For each area: same-lens before/after screenshots from at least two angles at normal game brightness; daylight-free mood with legible shapes; verify mesh collisions visually and frame-time stability.

## Release acceptance

- Game builds and unit tests pass.
- No change in source \`src/world/data.ts\`, \`src/systems\`, \`src/horror\`, \`src/ai\`, \`src/audio\` and no change to gameplay logic functions.
- \`VisualDetailV5\` exposes batch and area stats for tests.
- No broken world-prop placement, movement, inventory or fog-of-war.
- Verify every room in a real browser; **browser visual status is currently NOT VERIFIED**.
- Screenshots from port 5196 should be provided by Cursor/owner; this tool session cannot access Windows localhost.
- Record FPS/draw calls and flag asset costs before considering a merge.
- No merge to main without explicit user approval.

## Actual CC0 scanned model integration – completed in code, visual review pending

Nine 1K models were downloaded through the official Poly Haven API using strict HTTPS host checks, official file-size/MD5 verification, per-file SHA256 manifests, and complete glTF `.bin`/image dependencies. All files ship locally in `public/models/polyhaven`, so the game never fetches remote content during play.

**Visually mounted via `ScannedAssetsV5.ts` and the current LevelBuilder:**
- [wheelchair_01](https://polyhaven.com/a/wheelchair_01): original patient-corridor wheelchair (`pat_wheelchair`)
- [vintage_wooden_drawer_01](https://polyhaven.com/a/vintage_wooden_drawer_01): reception/archives static record cabinets (`rec_records`, `ark_records`)
- [steel_frame_shelves_01](https://polyhaven.com/a/steel_frame_shelves_01): actual metal shelves (`op_sparecase`, `slag_shelf`, `kael_shelf`)
- [tool_cart](https://polyhaven.com/a/tool_cart): technical equipment trolleys (`slag_cart`, `lab_cart`, `kael_cart`)
- [utility_box_01](https://polyhaven.com/a/utility_box_01): industrial service cabinet (`kael_spares`)
- [desk_lamp_arm_01](https://polyhaven.com/a/desk_lamp_arm_01): authentic scanned reception desk lamp
- [vintage_crutches_01](https://polyhaven.com/a/vintage_crutches_01): period crutches in the patient corridor
- [hanging_industrial_lamp](https://polyhaven.com/a/hanging_industrial_lamp): real pendant model on all three stair levels, **no new gameplay light**
- [vintage_flashlight](https://polyhaven.com/a/vintage_flashlight): textured handheld torch scan. Procedural hand and the real flashlight spotlight/battery logic unchanged.

Existing procedural furniture is retained as a **fallback** if an optional glTF does not load. Interactions, collision footprints, saves, AI, script triggers and gameplay IDs are untouched. Scanned meshes are fitted to existing art anchors and can be fine-tuned after browser screenshot review. The current GLB/glTF scans are textured models but do not create new scripted drawer animation, and still need visual clearance checks.

**Licensing:** model entries are Poly Haven CC0 (source, metadata, license, hash references in `public/models/polyhaven/asset-manifest.json`). No purchase.

**Unfinished:** licensed rigged monster replacement, photographic replacements for *all* existing procedural furniture, audited browser screenshots of all 16 rooms, full performance benchmarking and local port5196 activation. A code build/test result does not verify visual appearance.

## Staged scope

1. **V5.0 foundation**: complete-world anchored props, UI pickup size/hierarchy, assets audit.
2. **V5.1 proper GLBs**: asset ingestion on separate design branch with corresponding build/tooling and license records. Priority: wheelchair, seating, storage, clinical equipment, monster character.
3. **V5.2 environment materials and postprocess**: normal maps, material aging, AO, practical lights and LOD, all measured from screenshots.
4. **V5.3 all 16 areas**: room-specific design pass, collision/sightlines QA, no screenshot-like guesswork.
5. **V5.4 final polish**: subtle lighting, flashlight model, monster material and intro/jumpscare aesthetics, responsive UI and accessibility, 20-minute performance test.

Mark each phase DONE/PARTIAL/NOT VERIFIED honestly.
