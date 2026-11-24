/**
 * Inspect official, public Poly Haven model metadata; never download here.
 * Run only from a trusted environment with internet access.
 */
const ids = ['wheelchair_01', 'vintage_wooden_drawer_01', 'vintage_flashlight',
  'steel_frame_shelves_01', 'tool_cart', 'utility_box_01',
  'hanging_industrial_lamp', 'desk_lamp_arm_01', 'vintage_crutches_01']
for (const id of ids) {
  const res = await fetch('https://api.polyhaven.com/files/' + id, {
    headers: { 'User-Agent': 'SktAgnes-AssetReview/1.0 (asset metadata only)' },
    signal: AbortSignal.timeout(20000),
  })
  if (!res.ok) throw new Error(id + ' HTTP ' + res.status)
  const files = await res.json()
  console.log('ASSET', id, 'TOP', Object.keys(files))
  const gltf = files.gltf || files.glTF || files.GLTF
  console.log('GLTF_KEYS', id, gltf && typeof gltf === 'object' ? Object.keys(gltf) : 'missing')
  for (const [format, variants] of Object.entries(files)) {
    if (!/gltf|blend|fbx/i.test(format)) continue
    for (const [resolution, item] of Object.entries(variants || {})) {
      if (!/1k|2k/i.test(resolution)) continue
      if (/gltf/i.test(format)) console.log('FORMAT_VARIANT',id,format,resolution,
        JSON.stringify({size:item?.gltf?.size,include:Object.keys(item?.gltf?.include || {})}).slice(0,1000))
    }
  }
}
