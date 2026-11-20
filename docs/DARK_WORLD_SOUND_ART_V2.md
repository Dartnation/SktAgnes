# SktAgnes — Dark World / Set-Dressing / Sound Art V2

This branch is **visual and audio art**. It is intended to feed Cursor's logic work, not replace it.

## What changed
- Darkened global ambient/hemi/moon lighting and the post-exposure; redistributed room lights into smaller pools. The flashlight is now intentionally much more useful.
- Three separate 1980s fluorescent fittings in the opening **Receptionen**, with deliberately irregular, asynchronous low-rate flicker. Diffuser emission follows the actual individual light level.
- 37 curated large props in rooms (cabinets, stretchers, gurneys, shelves, screen partitions, carts, pews, chairs, medical equipment) registered through the existing world props/collision pipeline.
- Hand-built geometry for heavier hospital doors, metal fittings, inset panels, cabinets, filing drawers, wheelchair, hospital trolley and examination furnishings.
- Noninteractive background room decoration: 1987 plaques, ceiling pipes, paperwork, medical vials, folded cloth and aged stains. These small props have no physical collision by design.
- Improved appearance for the active stalker, scripted masked orderly, and face close-up, with no AI behavior or state-machine changes.
- Soft original, procedurally generated environmental audio: distant low rumbles, pipes, drips, bell resonances and fluorescent hum. Sparse events at 7–17 second intervals; **no fake footsteps**.

- Both stair runs are re-centered with approximately 2.1m clearance from each outside wall, while their original climb logic is preserved.

## Responsibility boundary
**ChatGPT:** visual assets, lighting appearance/fluorescent art, environmental audio design and procedural sound cues.

**Cursor:** AI and monster behavior, inventory/keybindings, puzzle progression, sound-event triggers, physics/nav/interaction and saving.

Cursor should not overwrite `src/world/SetDressing.ts`, the visual constructor edits in `src/ai/MonsterAI.ts`, or the material/geometry changes in `src/world/LevelBuilder.ts` without review.

## Acceptance / QA
- Check opening Receptionen with flashlight OFF vs ON: room should be dim enough that unlit corners matter, but primary routes are distinguishable.
- Inspect the three ceiling light fixtures visually and confirm diffusers dim with each light.
- Verify door handles, wall signs and furniture are visible from both sides. Verify stairwell and Personalerum are not obstructed.
- Walk through all three floors; verify pathfinding and collision/navigation tests.
- Inspect monster visuals without changing its patrol/chase behavior.
- Keep footstep audio strictly tied to **actual player movement**, not environmental cues.
- Confirm SFX and music sliders fully silence their own channels.
- Confirm 1366×768, 1920×1080, and 320px UI.
- No external third-party 3D assets have been imported; the scene parts are generated from Three.js primitives and existing material textures.

## Local preview
From the existing clone (after stopping Vite):

```powershell
cd "$env:USERPROFILE\Documents\SktAgnes-AudioTest"
git fetch origin "refs/heads/design/dark-world-props-and-audio-v2:refs/remotes/origin/design/dark-world-props-and-audio-v2"
git switch --track origin/design/dark-world-props-and-audio-v2
npm test
npm run build
npm run dev
```

If port 5173 is already occupied, use `npx vite --host 127.0.0.1 --port 5174 --strictPort`.
