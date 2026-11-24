# SktAgnes V5 – CC0 model short-list, verified sources

Real scanned/photorealistic objects are required to replace most primitive cubes. **These are researched candidate sources only, NOT downloaded/implemented.** Check exact files, dependencies, axis, scale and license in the import run before enabling any model.

All links below are actual public Poly Haven asset pages; their site states CC0 for these models. The API is public. Preserve model author and asset URL in the in-game credits and repository manifest even though CC0 does not legally require attribution. Use 1K or 2K materials for the browser first, not original 4–8K.

| Asset ID / official source | Original author / description | In-game anchor and art use | Integration concern |
|---|---|---|---|
| [wheelchair_01](https://polyhaven.com/a/wheelchair_01) | worn hospital folding wheelchair | `pat_wheelchair`, patient corridor | keep existing collision, correct front orientation and caster scale |
| [vintage_crutches_01](https://polyhaven.com/a/vintage_crutches_01) | old wooden crutches | patient corridor against wall, storage | do not block door or path |
| [vintage_wooden_drawer_01](https://polyhaven.com/a/vintage_wooden_drawer_01) | James Ray Cock, old six-drawer filing cabinet, ~5K triangles | reception, archive `rec_filing` / `ark_file` | **static display** only; existing interactive drawer meshes remain separate unless rigged |
| [desk_lamp_arm_01](https://polyhaven.com/a/desk_lamp_arm_01) | Kuutti Siitonen / Yann Kervran, articulated desk lamp, ~26K triangles | reception, archives, laboratory | art-only lamp, no new dynamic light; optimize/polyreduce |
| [steel_frame_shelves_01](https://polyhaven.com/a/steel_frame_shelves_01) | James Ray Cock, steel storage shelf, ~4K triangles | boiler room, surgical supplies, basement | no overlap with existing shelf contents/interactive anchors |
| [tool_cart](https://polyhaven.com/a/tool_cart) | Savva Zakharov, worn green metal trolley | medical/service trolleys where period-appropriate | may have non-working drawers; no falsely interactive handles |
| [utility_box_01](https://polyhaven.com/a/utility_box_01) | James Ray Cock, worn electric cabinet, ~4K triangles | basement service panels | no power-state changes |
| [hanging_industrial_lamp](https://polyhaven.com/a/hanging_industrial_lamp) | Kuutti Siitonen, cage pendant, ~10K triangles | basement, stairwell | no duplicate real-time light/shadow |
| [vintage_flashlight](https://polyhaven.com/a/vintage_flashlight) | Omar M. El-Safy, weathered hand torch | hero hand/flashlight replacement candidate | must align to camera grip and existing spot; no battery/state changes |
| [old_bed_frame](https://polyhaven.com/models/furniture/beds) | Luca B, old bed frame – verify exact asset link | isolation chamber/patient wards | original dimensions, bed hiding and collision |
| [hospital_room](https://polyhaven.com/a/hospital_room) | Oliksiy Yakovlyev HDRI clinical room | *reflection/reference*, not replacement skybox | don't brighten the blackout or add invisible light source |

## Browser import protocol

1. Before downloading, fetch `https://api.polyhaven.com/files/{asset_id}` with a descriptive User-Agent; select low-resolution glTF with **every documented dependency**, including bin and material maps.
2. Download through official links using standard TLS. Validate content type, extension, actual bytes, checksums when available, and reject unexpected executables/HTML/redirects.
3. Convert glTF to a single optimized GLB in an **isolated staging directory** using Blender or a documented glTF tool. No binary asset is committed until it previews successfully.
4. Inspect triangles, draw calls, uv/material, normals and file size. Target <=2K textures for hero items, 1K for frequent props, and LOD/instancing for repeats.
5. Measure realistic dimensions and align to existing `PROPS` positions, rotations and footprints. Allow no new collision boxes, quest flags, scripts, pathfinding changes or ambient lights.
6. Load with `GLTFLoader` as a **visual replacement only**, with a procedural fallback if an asset is missing or fails to load. Do not hide existing geometry until new model has loaded successfully.
7. Test screenshot of each replacement at identical camera/light settings and verify no overlaps, no false interaction cues and stable frame times.
8. Record source, author, URL, CC0 confirmation, downloaded version/file hash, tris, texture sizes, glTF dependencies, local path, attribution and screenshot in `docs/design/ASSET_REGISTER_V5.csv`.

No paid purchases, AI-asset charges or new cloud dependencies without owner approval. The URL shortlist is **not evidence that a model is already in the game**.

### Separate issue: realistic creatures

A professional rigged monster needs a licensed character with skeleton and animation clips. The existing procedural appearance remains a placeholder until a matching licenced rigged GLB is actually integrated and tested. Do not claim that procedural hood/fabric meshes are photorealism.
