# SKT AGNES — DESIGN & AUDIO HANDOFF V1

**Project:** `Dartnation/SktAgnes`  
**Visual branch:** `design/horror-hud-audio-direction-v1`  
**Base:** `fix/audio-mix-and-spatial-cues`  
**Ownership:** ChatGPT = design, UI presentation, sound design/assets. Cursor = controls, gameplay, state, asset loading, pathfinding, event/lighting logic.  

## Finished visual changes
- `src/style.css`: redesigned title menu, mission card, minimap container, prompts, crosshair, stamina/battery indicators, settings, and fullscreen inventory presentation.
- Inventory uses an accessible responsive card/grid built around the **existing** item buttons and callbacks. It does NOT change item behavior or save state.
- Map has a repositioned panel on top right; the underlying canvas drawing has deliberately been left unchanged for Cursor to implement.
- Keyboard shortcuts remain unchanged in this branch. No gameplay code was touched.

## Handoff for Cursor — logic only
1. **Inventory controls.** `KeyI` already opens inventory while playing. It currently does not reliably toggle it closed from inventory. Make I open/close, Esc close, preserve existing hooks `selectItem`, `useItem`, `dropItem`, `closeInventory`, ensure pointer locking resumes only after returning to play. Do not restyle `src/style.css`.
2. **Minimap.** `src/ui/minimap.ts` currently renders room rectangles, text and player pointer at 220×150. Rework *drawing logic* in canvas to crisp vector linework at device-pixel ratio, directional field-of-view cone, visited rooms, doors and objective marker when known. Avoid exposing unexplored secrets. Reuse the existing `#minimap` container and avoid adding a second widget.
3. **Light flicker.** `src/game/Game.ts::tickLights` currently uses repeated sine flicker. Implement a seeded irregular per-lamp envelope with long stable periods plus brief dips. Enable extra visible ceiling fixtures in `reception`, the first room. Sync the electrical sound to actual visible flicker. Keep light intensity comfortable, no rapid full-screen strobing.
4. **Sound integration.** The original sound pack `SktAgnes_Original_Horror_SoundPack_V1.zip` is delivered in the chat; user should attach it to Cursor. Copy WAVs into `public/audio/` or another dedicated asset directory, update manifest and decode/cache in `AudioEngine`. Observe music/effects/master sliders and pause/unlock. Keep audio headroom and prevent overlapping stingers. Do NOT make automatic footstep triggers while standing or on keydown.
5. **World interaction.** Cursor may add additional meaningful pickups/props and handle inventory persistence/interaction. Ensure pickup ownership, uniqueness and backward-compatible saves.
6. **Stairs.** Improve nav/collision/clearance if user reports obstruction. The appearance is a design task, physics and NPC routing are Cursor-owned.

## Original audio asset cue sheet
Two seamless 32s low-frequency room beds: `amb_reception_dark_loop_32s.wav`, `amb_stairwell_void_loop_32s.wav`.  
Additional event samples:
`sfx_fluorescent_flicker.wav`,
`sfx_distant_door_slam.wav`,
`sfx_heavy_door_creak.wav`,
`sfx_inventory_open.wav`,
`sfx_inventory_close.wav`,
`sfx_item_pickup.wav`,
`sfx_dread_stinger.wav`.

Default relative gains: ambient ~0.20, lamp ~0.20, impacts ~0.35, doors ~0.25, inventory ~0.22, pickup ~0.25, stinger ~0.30. These are starting points: tune by ear at a normal output level. Stinger cooldown >10s, flicker event cooldown >3s per lamp, crossfade between room beds 2–3s.

## Visual design acceptance criteria
- Desktop 1920×1080 and laptop 1366×768: HUD must not obscure objectives or critical routes.
- Small widths: map and objective don't overlap; inventory scrolls within viewport.
- Full keyboard navigation and visible focus, contrast checked.
- Inventory `I` opens and closes; existing buttons remain functional; no duplicated event handlers.
- F4 debug readout doesn't overlap or replace core HUD.
- Flashlight/lighting effect should preserve visibility for gameplay and accessibility.

## Git workflow
Cursor should branch from latest `design/horror-hud-audio-direction-v1` **or** merge it into Cursor's active branch, then add logic changes separately. Leave `src/style.css` to ChatGPT to avoid conflicting UI implementations. Do not merge design branch to `main` until visual review.
