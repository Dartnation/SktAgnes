# SKT. AGNES — CURSOR MASTER DEVELOPMENT SPECIFICATION V1
## Full gameplay, horror systems and production plan based on Design V2

Status: AUTHORED HANDOFF / NOT IMPLEMENTED. This is a development specification for Cursor, not a claim that the features are already in the game.
Repository: Dartnation/SktAgnes
**Implementation base branch: plan/cursor-gameplay-overhaul-v1**, itself descended from design/dark-world-props-and-audio-v2 → design/horror-hud-audio-direction-v1 → fix/audio-mix-and-spatial-cues.
Target: browser / Three.js 0.170 / TypeScript / Vite / Vitest / Playwright.
Product language: Danish.
Last reviewed: 2026-11-20.

## 0. Non-negotiable work agreement

The owner has explicitly divided the work:
- **ChatGPT owns** visual art direction, geometry/material design, sound design, original sound assets, lighting look, UI presentation and visual approval.
- **Cursor owns** all gameplay logic, gameplay architecture, inventory and interaction code, AI state/behavior, events, scheduling, mission logic, save/load, audio/lighting event integration, collision and pathfinding, unit/integration/e2e tests.
- Cursor may adjust integration code around art, but does not silently replace or erase art decisions. Propose visual deviations or coordinate through a PR.
- All gameplay features must use existing assets, or fall back gracefully when newer artwork/audio is not present. No dependency on expensive paid APIs or unavailable services at runtime.
- Do not change production/main directly; do not overwrite unstaged local user work; do not reset/clean/stash other people's work without inspection and consent.
- Never say "complete" just because TS compiles. Verify game behavior in browser.
- Do not replace an entire module merely to implement a small change if a targeted refactor suffices. Preserve stable APIs until callers and tests have migrated.
- Preserve story canon (Emil, Maja, Skt. Agnes 1987, Vogteren, journals, three keys, generator, evidence, rosary, archive code, multiple endings), current locations and all existing endings unless user approves story rewrite.
- Preserve all seven existing MP3 recordings, both art design branches and existing sound pack ownership. Integrate originals without distributing third-party copyright assets without verified licenses.

## 1. Product direction

**Fantasy**: You are investigative journalist Emil Kragh searching for missing colleague Maja in Skt. Agnes, a shut-down seaside institution. The asylum behaves as if someone still lives there. Information and sound are weapons. You are not meant to defeat the creature in combat; survive, observe, interpret and escape with proof.

**Four design pillars**:
1. Dread over constant noise: silence, discovery, ambiguous traces and anticipation matter as much as pursuit.
2. Understandable consequences: every noise/light/movement decision should have predictable risk; failure should feel fair.
3. Environmental storytelling: 1987 documents, medical traces, power failures, hidden records and room design should advance the same mystery.
4. Strong presentation: the V2 darkness, flashlight pools, creature silhouettes, detailed doors, room props and UI must be supported by intelligible interaction and reliable performance.

**Target experience**, to validate with playtest rather than claim as existing fact: first meaningful scare within ~5–8 min; a complete first run around 35–55 min; discoverable endings and clear optional secrets. Timing is a proposed design target, not an implemented fact. Never use a permanently repeating 10-second scare gimmick. Let fear alternate with exploration.

**Player experience arc**:
- Opening 0–8 min: arrive in Receptionen; notice unstable lights, a recording/letter, a door slam, recover flashlight, first low-risk environment puzzle. Monster is mostly inferred.
- Exploration 8–22 min: choose room order, map gradually, use notes/keys, perceive audio hints and deliberate glimpses. Discover that noise attracts danger.
- Threat 22–35 min: power and archive evidence change environment, unlocking progressively harder corridors. Monster gains a credible search behavior, not more random teleportation.
- Finale 35+ min: solve final chain, retrieve proof, make an informed route/ending choice, dramatic exit with paced cooldown and final consequence.
- Actual timestamps must respond to player progress. Never block advancement by an arbitrary wall-clock wait.

## 2. Verified baseline and concrete deficiencies

The current V2 branch is a tested code baseline: 55/55 Vitest assertions and a TypeScript/Vite build passed in GitHub Actions. This does NOT prove a full browser playthrough or final artistic quality.

Known module map:
- src/game/Game.ts — ~2k lines: render, input, movement, AI calls, interaction, Director, save, UI orchestration.
- src/game/Input.ts — keyboard edges, WASD, Ctrl/C, pointer lock.
- src/player/PlayerController.ts — movement/grounding/crouch; smoothing helper exists.
- src/ai/MonsterAI.ts + MonsterBrain.ts — model, paths and AI finite-state machine.
- src/ai/senses.ts + Pathfinding.ts + presence.ts — noise, vision/LOS, A* and flashlight banishment.
- src/ai/HorrorDirector.ts, src/horror/JumpscareEngine.ts, ScareLogic.ts, ScriptedEvents.ts — randomized/scheduled soft and hard events.
- src/world/data.ts, buildWorld.ts, LevelBuilder.ts, SetDressing.ts, textures.ts — 3-floor environment, props and doors.
- src/ui/UI.ts, minimap.ts, src/style.css — presentation; Design V1/V2 styling exists.
- src/systems/Story.ts, Inventory.ts, catalog.ts, SaveSystem.ts, Settings.ts, battery.ts — persistent story/game state.
- src/audio/AudioEngine.ts, clips.ts, mix.ts, steps.ts, voice.ts — Web Audio; MP3 recordings and original generated environmental cues.
- src/render/PostFX.ts — SSAO/bloom/color pass.
- tests/ and e2e/ — unit tests and Playwright tests, latter NOT yet verified in the new V2 branch.

Code-grounded gaps to fix:
- **I / Tab only reliably opens** inventory in Game.updatePlaying; opening inventory exits playing updates so key closing must be handled outside updatePlaying or via UI state routing.
- **Objective UI reports mostly the 3 keys** through Story.objectives(), despite the much larger narrative puzzle chain.
- **The map is an older small canvas**, with only visited/room/battery/monster information. Current design changed its CSS, not the underlying drawing.
- **Director and scripted scares are separated** with cooldowns, but lack one coherent event reservation/cancellation policy, consequences and context budgets.
- **Flashlight currently banishes/stops the visible monster** when beamHits succeeds; gameplay must distinguish repel, temporarily stun, and retreat with fairness, rather than assume infinite hard counter.
- **Battery automatically recharges when turned off** at a fraction of drain. A proposed survival economy should intentionally balance spare cells and this mechanic, not accidentally make darkness meaningless.
- **GameSnapshot/save version currently 1**. Added gameplay state must migrate and old saves must remain loadable.
- **Some environment hooks are incomplete or disconnected** (e.g. setRadio is a no-op; Atmosphere currently has intentionally disabled dust/lightning). Do not try to fix these by scattering timers.
- **AudioEngine.setTension currently clamps a 0–100 tension signal directly into a 0–1 normalized value**: adjust with explicit normalization before using it as a volume/probability input. Check whether chasing adds the intended small bias.
- **Current sound source spatialization uses stereo panning**, not genuine HRTF; do not claim perfect 3D. Favor clarity and browser reliability.
- **Old e2e scripts save screenshots to /opt/cursor/artifacts**, which is not portable to the owner's Windows PowerShell workstation.
- New V2 furniture is present in PROPS and the world collision/nav generation; adding more must not block doorways, stair landings, secrets or softlock the monster.
- Check hard-coded room aliases such as old r102 / morgue / chapel references when working with actual Danish room IDs in world/data.ts. Verify every event can happen in the real map, with diagnostics for unreachable branches.

## 3. Technical architecture: new modules, small safe seams

Keep Game.ts as a compatibility composition root while gradually extracting pure logic, instead of rewriting the renderer/AI/UI in a single PR.

Proposed modules, names may vary if existing conventions suggest better:
- src/game/GameEvents.ts: typed event union, in-memory dispatcher and epoch/time metadata.
- src/game/GameClock.ts: frame-time scheduling, deterministic game time and cancellation.
- src/game/ModeController.ts: menu/playing/inventory/examine/paused transitions and focus/pointer lock.
- src/game/InteractionSystem.ts: proximity, line-of-sight, targets, priority, range, actions and prompts.
- src/game/ObjectiveSystem.ts: declarative story graph, prerequisites, journal entries and hint levels.
- src/game/EventScheduler.ts: deterministic, room-aware ambient/horror event placement.
- src/game/PerceptionSystem.ts: player-generated noises, visibility, occlusion and AI sensory facts.
- src/game/ResourceSystem.ts: battery/stamina/healing tuning and item consumption.
- src/game/WorldState.ts: persistent interactive-object and room changes.
- src/game/GameplayTelemetry.ts: debug counters available only for test/debug builds.
- src/audio/AudioCueAdapter.ts: translates typed game events into sounds without duplicating mixer logic.
- src/ui/MinimapRenderer.ts or revise src/ui/minimap.ts: pure vector drawing from state.

A minimal typed event contract (illustrative TypeScript, implement fully and test):

    type GameEvent =
      | { type: 'PLAYER_STEP'; surface: 'tile'|'wood'|'metal'|'concrete'; distance: number; playerPos: Vec3 }
      | { type: 'DOOR_MOVED'; doorId: string; from: number; to: number; position: Vec3 }
      | { type: 'PICKUP_TAKEN'; pickupId: string; itemId: string; position: Vec3 }
      | { type: 'LAMP_CHANGED'; lightId: string; level: number; position: Vec3 }
      | { type: 'OBJECTIVE_COMPLETED'; objectiveId: string }
      | { type: 'MONSTER_SENSE'; sense: 'noise'|'sight'|'flash'; position: Vec3 }
      | { type: 'SCARE_REQUEST'; id: string; roomId: string; severity: 'soft'|'hard' }

All events get runtime metadata: eventId, sourceId, gameTime, epoch, position/floor, and optional correlationId.
- Emit a single event for each confirmed state transition, not each render frame.
- Components subscribe with explicit unsubscribe/dispose, no accumulating event listeners on save reload.
- Do not mutate snapshots from inside render callbacks.
- Inject deterministic RNG/clock into Director/AI tests. Use a game-time clock, not wall time for story sequences.
- Event/audio jobs have scene/mode epoch tokens so stale cues are canceled on load/new game/menu.
- Buffer input edges and handle mode transitions once per frame. Never fire gameplay actions when inventory, pause or keypad owns keyboard focus.
- For collision-critical changes always test both static and opened doors, crouched and standing player, stairs, AI nav and old saves.

## 4. Ordered execution: P0 foundations (ship before new mechanics)

P0-01. Branch and baseline.
- Start a new branch from this plan branch, e.g. feature/cursor-gameplay-v1. Do not work in main or overwrite visual PRs.
- Verify clean tree with git status and log. If local changes exist, preserve them by a new worktree or independently committed branch, not force checkout.
- Run npm ci, npm test, npm run build, npm run test:e2e and npm run test:audio. Record passes, failures and why; e2e browsers may require npx playwright install.
- Set deterministic test fixture and output screenshots via Playwright testInfo.outputPath(), not the hard-coded /opt/cursor/artifacts path.
- Inspect browser errors, missing audio requests, asset decoding, GPU FPS and start-room visuals.
Acceptance: current story/menu/door/audio/save behavior baseline recorded, before refactoring.

P0-02. Inventory mode and input focus.
- I and Tab toggle inventory open and closed; Escape closes it and returns to playing (or parent screen as appropriate).
- New inventory layout continues to show keys, notes, batteries and items with real descriptions/counts.
- Keep selection stable by itemId rather than array index when items are removed.
- In inventory/paused/examine/keypad, player movement and monster simulation remain paused according to current modal semantics.
- Pointer lock should exit on open and only request re-lock on permitted user gesture; show a graceful click-to-resume prompt if browser denies auto relock.
- Never consume Ctrl/keyboard shortcuts while typing in inputs or focused controls.
- Test inventory from playing, pause, examine and return; no duplicate item consumption, no escape trap.

P0-03. Audio/visual event integrity.
- Preserve single-stride footstep playback from actual displacement only (never phantom footstep or input keydown). Stop live sound on stop, hiding, pause and load.
- Normalize tension 0–100 to 0–1 before driving sound gain. Example: clamp01(tension/100 + (chasing ? 0.2 : 0)).
- Event audio obeys master/music/effects sliders, including absolute zero; use limiter and headroom.
- Stale queued sounds must expire; linked light/door sounds only play when corresponding event actually occurs.
- No phantom footsteps disguised as ambient loops. Distant noises can be metal, vent, door creak or a deliberate scripted character sound clearly distinct from player steps.
- Browser AudioContext resume must follow trusted click/key gesture; fetch/decode failures show in F4 diagnostics without crashing.
- Define asset manifest with optional content URLs and fallback procedural cues. ChatGPT-supplied original WAV pack can be imported into public/assets/audio after user gives Cursor the zip. Avoid loading every big WAV twice.
Acceptance: 20 seconds stationary produces zero footsteps, moving begins steps at correct travel distance, pause cancels, SFX 0 mutes all effects, no queued scream after restore.

P0-04. Save safety and stable transitions.
- Keep existing GameSnapshot v1 readable. Add v2 migration only if additional persisted fields are essential.
- Design one parse/validate/migrate/sanitize path (untrusted localStorage, no arbitrary trust in corrupted values).
- Store objective flags and event-history IDs so one-time scares, pickups and opened passages do not respawn.
- Keep saves atomic from gameplay perspective and include sensible fallback for a missing/invalid object ID.
- Restore player near an obstructed object to nearest safe nav point, without teleporting through a locked gate.
Acceptance: old save, new save, reload, restart and death all behave; inventory and monster reset once; test malformed/partial save.

## 5. P1 primary gameplay features

P1-01. Progression and objectives — actually use the asylum story.
Build a declarative quest graph rather than only "3 keys":
- M1: Read Maja's message / establish why Emil came.
- M2: Explore Receptionen, find flashlight clue and first map landmark.
- M3: Discover generator need; locate and install three fuses.
- M4: Follow archive clue, reconstruct founding year / safe code.
- M5: Recover keys via chapel, operating room and archive, preserving current unlock semantics.
- M6: Discover secret passage or documents that implicate the asylum.
- M7: Retrieve evidence and decide exit route; optional journals/rosary affect ending.
Requirements:
- Each node: id, stage, prerequisites, trigger events, UI text, optionalHint, completion consequences and save version.
- Show a single human-readable current task + short contextual subtask, not a raw checklist of all secrets.
- No objective activates before it becomes knowable; no spoilers for hidden wing/ending.
- Door labels, room names and item descriptions must use actual world/data IDs/catalog.
- Optional clues/revisitable rooms prevent players from being stuck because they missed one note.
Acceptance: scripted playthrough proves every mandatory progression route and each ending condition remains reachable.

P1-02. Interaction and exploration.
- Center-screen target selection by LOS, reachable distance, visible prompt, interactable state and priority.
- Explicit states for doors: closed, opening, open, closing, locked, jammed, blocked. State changes can animate leaf/handle and output paired audio.
- Doors must never hit the player's collision capsule, be blocked by set dressing, or clip through a solid wall after opening.
- Cabinets/drawers may expose existing items/papers; no invented procedural loot that bypasses key progression.
- Individual props use stable IDs; define art-only versus interactable. Decorative jars should not unexpectedly block narrow walkways.
- Add inspection view for meaningful documents (rotate/zoom optional) and a simple clue notebook. Avoid complex item combining unless puzzle demands it.
- A held item action must be explicit and reversible; consuming unique clues accidentally is unacceptable.
Acceptance: keyboard/mouse controller complete interactions; cannot pick an item twice; cannot interact through closed door; no object disappears from save after reload.

P1-03. Monster behavior that scares but is beatable.
Reuse MonsterBrain finite-state machine and pathfinding.
- Behavior layers: Patrol → Suspicious/Investigate → Search → Chase → LostPlayer → Return. Do not make the creature omniscient.
- Noise investigation uses origin, loudness, floor, occlusion and age. Running/doors/drops generate stronger noise than crouching.
- Hearing draws an uncertainty region, not perfectly pinned player coordinates after every quiet sound; clue age degrades.
- Sight requires floor-correct LOS and peripheral detection time. Briefly crossing a corridor must not cause instantaneous perfect tracking.
- Suspense cues: distant visible outline, head turn, pause at doorway, deliberate search by bed/closet, audible breathing, lantern/metal scrape.
- Flashlight interaction is a *limited tactical counter*, not permanent invulnerability: short stagger or forced glance/retreat with cooldown, depending on difficulty. Preserve visibility fairness and original design.
- Search/hiding: closet/bed safety is conditional; monster reacts to witnessed entry, recent noise, breath-holding and dwell time, but may abandon search.
- Cooldowns, speed and attack recovery must be tuned to avoid stunlocks or impossible escapes. Avoid unfair spawn inside player's FOV, on top of player or directly behind an in-use door.
- Reinforce separation of visual silhouette from AI. ChatGPT owns monster look; Cursor only adjusts rig/hitbox if needed for fairness.
- Use fixed AI tick or time-budgeted updates with interpolation; re-path at bounded intervals and after real blockers change.
Acceptance: test no-line-of-sight aggression, hearing through wall attenuation, stairs + doors, recovery, chase escape, flashlight response and no patrol stuck > threshold.

P1-04. Central horror dramaturgy / dynamic pacing.
Keep existing HorrorDirector, ScareLogic, ScriptedEvents and JumpscareEngine but let one scheduler arbitrate all cues:
- Director input: room visited history, progress stage, elapsed calm time, light conditions, noise made, monster proximity/visibility, recent cues, hiding, player health and audio.
- A five-stage emotional loop: calm → anticipation → implication → encounter → recovery. No sudden chain of three loud scares.
- Minimum quiet/recovery window after major scare; avoid overlapping hard scares with attacks, puzzle completion, objective overlays or paused inventory.
- Hard scares should be limited, authored and distinctive: first broken fixture, reflected orderly, patient chart with new name, wardrobe breath, disappearing body in surgery, bell ringing at the wrong floor, corridor that briefly seems occupied.
- Soft events are room-specific and plausible, not arbitrary scream anywhere. Never invoke telephone sound at a location the player cannot plausibly hear.
- Add a per-room budget and event-history IDs; the same unique apparition occurs once per save unless explicitly authored as repeatable.
- Weighted selection must depend on what the player has already witnessed. Use deterministic seeded RNG in tests.
- Reserve/defer/cancel events at scene transition boundaries; obey max overlapping source count and per-category cooldown.
- Environmental changes can tell a story: shifted records, door left ajar, chair slightly moved, fresh wet footprints as **visual decals** (not fake audio footsteps), faded radio voice. Tie occurrence to progress, persist them.
Suggested tuning START POINTS, not guarantees:
  - 5–12 seconds of relatively calm transition before any first special event.
  - Soft moment about every 25–75 seconds when conditions permit, sometimes none.
  - Major encounters about 3–7 minutes apart, always with progression and recovery exceptions.
  - Never run a probabilistic jump-trigger independently every rendered frame without time-based gating.
Acceptance: 20-minute AI-seeded automated run has no overlapping hard events, no event during inventory, no repeating unique scare and no impossible chase.

P1-05. Flashlight, darkness and limited resources.
- Tune the V2 lighting after actual visual capture. Player needs flashlight to inspect corners, but can still orient using silhouettes and a few genuine practical lamps.
- Battery should present clear decisions. Existing passive off-state recharge may remain if intentionally balanced; otherwise switch to scarce cell replacement with explicit difficulty settings and migration. Do NOT silently remove recharge.
- Flashlight beam has battery-dependent intensity/flicker and meaningful visual reach; avoid blinding white walls.
- Dark adaptation and readable outlines should preserve navigation and accessibility; no screen-wide full-black strobing.
- Monster sees the flashlight **source** differently from player seen in ambient light, but not through walls/floors.
- Physical fuse/generator changes should affect world lamps and sound in persistent states.
- Light flicker and electrical buzzing should share sourceId/eventId and visual envelope. A purely sine-based light shouldn't generate many separate noise cues.
Acceptance: side-by-side 30s visual/audio test in Receptionen flashlight ON/OFF; room paths navigable, outside beam still genuinely dark, no epilepsy-risk fast strobe.

P1-06. Minimap and inventory UI behavior.
- Keep ChatGPT CSS art direction. Cursor handles rendering logic and interactions only.
- Current floor, only discovered rooms, coherent walls/doors, objective waypoint if discoverable, orientation cone, accurate player location and floor transitions.
- Never reveal locked secret rooms before a clue or discovery. Monster indicator must have diegetic justification (e.g. scarce journal/trace) rather than permanent GPS.
- High-DPI canvas: CSS pixel sizes vs canvas backing width/height; round pixel values for sharp strokes, avoid stretching. Test at scale 1 / 1.5 / 2.
- Inventory keyboard navigation, type/category filtering only if warranted, meaningful item icons/labels, and a clearly selected item; no duplicating interaction handlers.
- Keys usable in place only, documents inspectable, batteries consumable, fragile clues not droppable. Avoid inventing real-time inventory crafting.
- Focus management, Escape/I closing, pointer lock and paused simulation must work reliably.
Acceptance: keyboard-only open/select/inspect/close, saves maintain selection when practical, minimap does not expose unvisited floor.

## 6. P2 meaningful extras once P0/P1 work

P2-01. Three signature cinematic sequences using existing spaces, all driven by state and sound:
- **Receptionen — the hospital wakes**: three fixtures dim in asymmetric sequence, electrical buzz drops out, one distant door closes, objective changes and Maja message hints at the archive. Not a full-screen jump face.
- **Arkivet — names and dates**: loose files reveal 1987 contradictions, a flickering desk corner shows a silhouette only after inspection; the player can choose to leave and return, not a forced unavoidable grab.
- **Operationsstuen/Obduktion — the witness**: a gurney shifts, medical trolley rattles, emergency lamp dies, masked orderly appears in a framed doorway then vanishes if observed too long. Unique, persist completed flag.
Each sequence needs authored prerequisites, staging positions, escape route, recovery, audio cues, save identifier, and screenshot test.

P2-02. Environmental behavior with low computation:
- Ambient drips and hum local to a real position and room; door creaks only if a relevant door moves, pipes only near geometry; sounds obey distance/occlusion and cooldown.
- Clock or music box, telephone, old radio, ventilation fan, water leak and occasional distant bell only where appropriate. Use verified source positions and no phantom player steps.
- Small object changes: flicker, swinging curtain, displaced paper, intermittent reflection, changing framed portrait. These should be seeded and deterministic/persistent if player can inspect them.
- Few but meaningful room interactions beat hundreds of generic pickup items. Every major room should contribute clue, risk, character or payoff.

P2-03. Accessibility and player comfort.
- Separate volume sliders, subtitles for meaningful environmental dialogue, readable Danish fonts, safe contrast, configurable mouse sensitivity and invert-Y.
- Reduced flashes, low/no camera shake, reduced chromatic effects, headbob control, motion blur opt-in, brightness calibration image and key remap if feasible.
- Paused game releases pointer lock and all gameplay actions; no sensory overload or unavoidable repeated sudden loud screams.
- Optional hint mode vs immersive exploration; don't spoil hidden content by default.

P2-04. Performance and load.
- Aim at smooth 60 FPS at 1366x768 medium on a sensible Windows laptop, with explicit measured floor. Don't declare that target already achieved.
- High-quality LOD/instancing for repetitive furniture, bound room lights and dynamic shadows; cap draw calls and light counts. Avoid cloning many unique materials per door if material sharing possible; dispose geometry/textures on reset.
- Lazy load/decode room-specific audio and render content where helpful, without blocking first-room experience.
- Precache first-room assets; avoid decode audio on main frame; guarantee fallbacks for fetch failure.
- A simple visible performance overlay / console counters for draw calls, triangles, audio nodes, events and AI path recalculations only in test/debug.

## 7. Engineering contracts and deterministic algorithms

A. Scheduling and event gating
- Use gameTime seconds; avoid polling Date.now for game events.
- A scheduler entry has id, kind, dueTime, roomId, epoch, priority, exclusiveGroup, duration, conditions and canceled boolean.
- If mode is not playing, do not advance gameTime; hold pending tasks without letting past wall clock events "catch up".
- For any save/new game: increment epoch; discard all old-epoch audio/light/interaction callbacks.
- Scheduler picks highest-priority eligible event and atomically reserves exclusiveGroup e.g. HARD_SCARE, DOOR_SEQUENCE, OBJECTIVE_CINEMATIC.
- Never enqueue more than one hard scare or multiple dialogue voice events at once.
- Use a pseudo-random function with explicit seed. Expose seed in debug but not release UI.

B. Inventory transactions
- State transitions are pure: given inventory + command, return nextState + typed event(s).
- Reject unknown IDs, insufficient quantities, duplicate pickups and non-droppable story keys.
- Commit the state update before publishing pickup/use audio and UI events, so reloads are idempotent.
- On save restore, rebuild visible pickups from pickedUp list and never consume the same pickup twice.

C. AI detection loop
- Sensors generate observations {source,type,position,confidence,gameTime}.
- Observations decay based on age, occlusion, floors and source confidence.
- MonsterBrain chooses action; Pathfinding resolves route; actor controls leg animation and transform.
- No direct mutation of monster state from UI rendering or audio callbacks.
- Define a reachability guard and recover if route blocked. No instant warp onscreen.

D. World object transitions
- All interactable objects have stable IDs with states persisted only if needed.
- Doors and props share world coordinates and collision, not independent hard-coded lists.
- Generated art-only objects must not acquire collision accidentally. Recheck door swing clearance.
- Clamp camera/light geometry within valid bounds and update door occlusion when opening.

E. Rendering and graphics
- Keep existing renderer postprocessing and V2 styling; expose tuning parameters for ambient/exposure but avoid putting game mechanics in shader.
- Brightness control must not undermine intended flashlight challenge at max setting; don't remove accessibility option.
- Distant darkness via fog and low practical light, rather than simply a black screen.
- All dynamic fixtures must set actual light intensity and matching emissive material level.

## 8. Specific source-file change plan

Do not edit everything at once. Review file ownership:
- Game.ts: call new gameplay services and keep orchestration, no second giant switch statement. Split by subsystem in incremental PRs.
- Input.ts: mode-aware routing, I/Tab/Escape toggle and focus safety.
- UI.ts: bind inventory selections and already existing hooks. Preserve element IDs and src/style.css.
- ui/minimap.ts: replace renderer, expose pure state-dependent draw, pixel ratio handling.
- systems/Story.ts: authoritative declarative objective graph and status; adapt ending conditions only when tested.
- systems/Inventory.ts / catalog.ts: strictly validated item commands and persistent inventory semantics.
- systems/SaveSystem.ts: migrations and atomic restore; schema tests.
- ai/MonsterBrain.ts / MonsterAI.ts / senses.ts: sensory history, fair chase/lose target, path query, flashlight costs; visual meshes left intact.
- horror/HorrorDirector.ts / ScriptedEvents.ts / ScareLogic.ts: coordinate event scheduler, reduce RNG spam, persistent history.
- audio/AudioEngine.ts: normalize tension, integrate ChatGPT art assets/manifest and event-based playback; never rewrite the mix graph without tests.
- world/buildWorld.ts / data.ts: stable room/door/prop IDs, collision/nav checks and interaction metadata; do not overwrite dressing art.
- render/PostFX.ts: leave visuals to ChatGPT unless quality/compatibility fix required, then isolate and document.
- e2e/game.spec.ts, events.spec.ts and new e2e specs: cross-platform screenshots and full interactions.
- Add docs for controls, gameplay state, save migration, benchmarks and changed event contracts.

## 9. Minimum test matrix (must be automated where feasible)

S0: npm test, npm run build, e2e Chromium, e2e Firefox when browser environment supports it. Stop when any baseline regression is unexplained.
S1: I/Tab open-close inventory; Esc handling; pointer lock; menu/paused/keypad/examine focus.
S2: Stationary, walk, sprint, crouch, jump, hide, pause, save and reload: no phantom footsteps, no overlapping step burst.
S3: Three floors and stairwell: accessible via both directions, no teleport or clip; every required pickup and door reachable with and without new props.
S4: Monster patrol/investigate/search/chase + hearing and LOS; remains fair and can lose player, not trapped by new furniture.
S5: All 3 keys, generator, safe, evidence, journal notes, rosary and exit routes persist. All 5 ending branches remain available.
S6: Director event replay: 10 seeded timelines with correct cooldowns, no event while paused, no double unique jumps.
S7: Audio 0/master 0/music 0/effects 0, resume after mute, SFX peaks, stale cue drop, broken or absent WAV fallback.
S8: Saves v1 and v2 (if introduced), corrupt JSON, incomplete fields, duplicate item IDs, invalid room and missing pickup.
S9: Lighting stress: darkness enough to need flashlight, but game routes visible. Fixture buzz sync, no synchronized rapid blackout.
S10: UI: 1920x1080 / 1366x768 / small mobile width for layout, though gameplay itself is desktop-first. No map/objective overlap.
S11: Performance: 5 minutes roaming with FPS counters, heap/audio-node growth, repeated reload/restart memory leak.
S12: Browser tests confirm no console errors or asset responses 404 and all exit/collision states.

Proposed test fixture design:
- Unit: pure rules, seed and state reducers, event budget, snapshots, item transactions, objective graphs.
- Integration: fake AudioClock/GameClock + fake adapters for UI/audio, check sequence and side-effect counts.
- E2E: use the existing test-mode API window.__AGNES__ for controlled teleport/movement/monster, but validate real keyboard events and player-visible UI as well.
- Screenshot evidence to testInfo.outputPath('scene-name.png') on all platforms, not /opt/cursor/artifacts.
- Readme should state exactly which checks were run and which were skipped (browser or actual audio monitoring unavailable).

## 10. PR delivery strategy: short, independently reviewable milestones

PR-01 Foundation: baseline logs, portable E2E, normalize tension, mode I/Tab/Escape, safe audio cancellation and source events.
PR-02 Objectives + inventory persistence/interaction (no redesign of CSS).
PR-03 Fair monster sensory behavior and flashlight tradeoff, verified against pathfinding.
PR-04 Unified Director + three authored horror sequences; event IDs, cooldowns, save recovery.
PR-05 Minimap actual renderer + accessibility + input focus.
PR-06 Room interactions / extra environmental systems + audio pack adapters.
PR-07 End-to-end campaign tests, performance/balance pass and polished handoff.

Each PR includes: summary, source files changed, tests run, screenshots where visible, audio samples/links if relevant, measured FPS when claiming perf, risk/rollback, and migration notes. No auto-merge to main; ask for visual approval of large presentation changes. Avoid invisible "trust me" claims.

## 11. Clear prohibitions and guardrails
- Never use invasive browser automation to log users in or change their personal system settings.
- Never rename global item IDs or room IDs without explicit migration.
- Never remove the original story route, puzzle requirements or endings to make tests easier.
- Never scatter procedural audio footsteps because player requested "more sounds".
- Never add teleporting adversaries visibly within view solely to make play scarier.
- Never use mystery 3D assets without provenance, attribution/licensing verification and a low-cost fallback.
- Never call npm audit fix --force as a shortcut; investigate vulnerabilities separately and use tested dependency updates.
- Never treat a green TypeScript build as proof of gameplay/visual correctness.
- No Git force push, hard reset, clean, destructive stash pops, overwriting users' work or editing main.

## 12. Definition of done and report format

A milestone is COMPLETE only if:
- all relevant tests pass on its commit, real browser evidence is attached where appropriate;
- new interactions are integrated into the existing game rather than isolated unused classes;
- old saves and endings still work;
- there are no debug-only dependencies in the release path;
- visuals and audio correspond to world events and maintain intended direction;
- README/manual controls updated;
- user receives the exact GitHub branch/PR and safe PowerShell commands to test.

Final Cursor status should always contain:
- WHAT CHANGED (plain language);
- FILES AND COMMITS;
- WHAT WAS ACTUALLY TESTED vs NOT TESTED;
- VISUAL/AMBIENT EVIDENCE (screenshots);
- RISKS / KNOWN BUGS / BACKOUT;
- NEXT SMALL PR with prioritized rationale.

## 13. Cursor's FIRST instruction (start immediately, no unnecessary questions)

1. Inspect current GitHub branch and local status; use this plan branch as the base or a clean worktree.
2. Produce a small baseline audit: route inventory modes, live dialogue/loop hooks, known room IDs, save format and CI.
3. Implement **PR-01** (I/Tab/Escape toggle and focus, normalized audio tension, old event cancellation, portable E2E screenshots) WITHOUT changing the art.
4. Run npm test and npm run build; run Playwright in browsers supported by the computer, recording exact results. Fix failures until green or report objective blocker.
5. Open a draft PR and summarize source-level evidence to the owner. Then proceed in the milestone order above. The owner has authorized implementation; do not keep asking them to re-approve routine implementation details.

This handoff is not a request to replace the SktAgnes game or redesign it from zero. The design and original audio assets remain under ChatGPT's ownership, and Cursor should make the underlying systems work like a coherent, professional horror game.
