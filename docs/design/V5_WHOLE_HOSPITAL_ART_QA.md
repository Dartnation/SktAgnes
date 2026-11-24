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

## Professional asset upgrade, separate from this current procedural pass

Realism cannot be reached by merely adding cylinders and cuboids. The next material milestone must import vetted **real-world GLB/glTF scan-quality assets** from known, commercially permitted sources, with attribution and technical metadata and optimized textures.

Initial CC0 candidates:
- Poly Haven Wheelchair 01 – https://polyhaven.com/a/wheelchair_01 – patient corridor model replacement
- Poly Haven Vintage Crutches 01 – https://polyhaven.com/a/vintage_crutches_01 – patient corridors / storage

These were researched but are **not yet downloaded or integrated**. Official public Poly Haven API supports fetching dependencies and lists CC0 content. For GLTF use full dependency set; never assume single .gltf is complete. No commercial purchase or extra paid model-generation requested.

For all model replacements: licencing record, triangulation/polycount, true scale, pivot alignment, lightmap/material validation, interactive hitbox unchanged, screenshot review, rollback. Source links alone DO NOT mean an asset is in the game.

## Staged scope

1. **V5.0 foundation**: complete-world anchored props, UI pickup size/hierarchy, assets audit.
2. **V5.1 proper GLBs**: asset ingestion on separate design branch with corresponding build/tooling and license records. Priority: wheelchair, seating, storage, clinical equipment, monster character.
3. **V5.2 environment materials and postprocess**: normal maps, material aging, AO, practical lights and LOD, all measured from screenshots.
4. **V5.3 all 16 areas**: room-specific design pass, collision/sightlines QA, no screenshot-like guesswork.
5. **V5.4 final polish**: subtle lighting, flashlight model, monster material and intro/jumpscare aesthetics, responsive UI and accessibility, 20-minute performance test.

Mark each phase DONE/PARTIAL/NOT VERIFIED honestly.
