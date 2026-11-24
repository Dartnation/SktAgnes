# SktAgnes – V4.1 Hero Art / Whole-Hospital Identity

**Base:** PR #25 / `design/v4-visual-polish-only`. **Branch:** `design/v4-hero-objects-and-room-identity`.

This is a **visual-only** batch intended to make a substantially greater visible difference than the earlier UI polish. It is NOT a final photorealistic overhaul or a gameplay change. No merges to main. The game and Cursor's work on port 5196 cannot be started remotely from this GitHub branch.

## Visual problem visible in the owner screenshot (Archive)

The archive's safe looked like a nondescript gray block. Its tiny face hardware was actually placed on **positive Z**, while the interaction device/player is on **negative Z** (safe at z9.55, device at z8.55). The player saw the wrong side. The top-center clue and room map also competed for attention. The same underlying model problem affected basic workbenches and shelves in multiple rooms.

## Implemented visual changes

1. **Safe – actual recognizable metal cabinet:** player-facing front (-Z), cast plinth, welded surround, door panel, hinges, 24-mark combination dial, 3-spoke opening wheel, corner bolts, serial plaque and ventilation. Safe ID, position, gameplay keypad, code and collision AABB remain untouched.
2. **Recurring furniture:** existing tables/desks rebuilt with metal aprons, framed top, additional joinery and braced legs. Existing shelves rebuilt with sides, four levels and dozens of visually varied folders/binders within the original footprint. Existing lockers rebuilt with stamped panel doors, vents, handles and hinges on both visible faces.
3. **Chapel:** more detailed stone altar with front relief, runner, cross and candleholders using the current material palette; no collision or triggers change.
4. **Every principal department:** a new **purely decorative** front-wall visual identity layer (`VisualIdentityV4.ts`) with large engraved-style department sign, secondary wall board, clinical dials / file shelves / maintenance panel or chapel fixture and visible conduit; 12 main rooms plus the three stair areas. Geometry lives against the interior wall, not in the route center; **no registration in world.props**, no new lights and no nav/collision changes.
5. **World pickup models:** batteries have caps, contacts and labels; fuses have colored ceramic cartridges and conductive caps; keys have bored bow and blade teeth; medkits have a cross; rosaries have individual beads; crowbars have curved hook; paper files have folded documents. All existing item IDs, pickup positions and quantities remain unchanged.
6. **Minimap:** on the small map, show a single clear current-room name next to ETAGE header and omit unreadable ellipsis labels in tiny room cells. The fog-of-war and gameplay marker rules are unchanged.
7. **Flashlight:** original metal housing, hand, and beam remain functional as before. The camera model is 19% smaller to take less of the screenshot; unrealistic emissive red-orange skin and permanently glowing bright-white lens are replaced by subdued material settings. Spotlight gameplay intensity, battery drain and cast-shadows setting are untouched.
8. **Lighting:** small visual-only adjustment to weak global bounce light, atmospheric fog color and density so PBR material relief is visible in dark rooms. Does not change `roomLit`, power/blackout logic, monster perception, AI, times or battery rules.
9. **Text overlays:** more legible, restrained hint/subtitle panels; no message triggers or timings changed.
10. **Tests:** added visual-layer isolation and static world/schema assertions. All existing gameplay tests must pass before browser test.

## Key acceptance checks on the owner's port 5196

- **Archive:** stand between safe and aisle at z approx 8.55 and face the safe at z9.55. Now its combination dial and wheel should be on the near-facing side. Compare to the supplied 24 Nov. screenshot.
- **Archive:** compare its shelves; actual folders and shelves should be conspicuous. Inspect for floating labels, mesh overlaps, excess darkening.
- **Rooms:** look for large readable department signs and technical wall instruments along the front walls (z≈0).
- **Minimap:** no unreadable strings like “Recepti...Patient...”. Current-room name must be in header.
- **Items:** locate a physical battery, fuse, key, note, medkit and rosary. They should be recognizable without opening inventory.
- **Flashlight:** hand/casing smaller and less artificially red, beam still turns on/off with same controls and battery behavior.
- **Trappe:** only wall decorations changed here, **not the stair mesh, collision, pathfinding or logic**. Physical stair architecture still requires its own focused review with Cursor.
- **Performance:** compare draw calls, FPS, GPU memory, shadows and shader compile time at 3 quality presets. Restore the previous visual branch if any regression is severe.
- **Inventory, doors, skuffer and monster:** no interaction, pursuit, scripted timing, save/load or story changes allowed.

## Not yet delivered

- Full licensed **rigged** GLB monster animations; current procedural monster is not a professional scanned/rigged model.
- A photogrammetric furniture replacement for every prop; existing polyhaven CC0 photographic surface materials are reused.
- Professionally authenticated individual audio cues.
- Screenshots or empirical FPS on the owner's real computer. GitHub CI does **not** prove the appearance on localhost.
- Definitive fix for stair geometry/pathfinding, as logic modifications are explicitly outside this art-only PR.

## Safety and integration

Base on PR #25, which itself bases on PR #24 and the earlier stacked drafts. **Do not merge** or silently switch the player's local Windows worktree. If Cursor is still using `C:\Users\Momex\SktAgnes-seq`, verify its git status first, use a backup or isolated worktree when necessary, and only then show the updated art build on port 5196 with the owner's approval. No force-push, reset, stash/drop or modification of `main`.

Before any claim of completion, collect before/after screenshots of **every** area at identical camera and graphics settings, plus a room-by-room defect log. The present art batch is a visible foundation for that process, not its end.
