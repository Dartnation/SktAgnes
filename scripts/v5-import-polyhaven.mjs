/**
 * Fetch vetted 1k CC0 glTF models directly from the official Poly Haven API.
 * This script is for a narrow GitHub Actions staging workflow on a design branch.
 * Every byte is verified against the md5 provided by Poly Haven.
 * There are NO executables, archives, installers, scripts or arbitrary domains.
 */
import crypto from 'node:crypto'
import path from 'node:path'
import fs from 'node:fs/promises'
import os from 'node:os'

const IDs = ['wheelchair_01', 'vintage_wooden_drawer_01', 'vintage_flashlight']
const OUTPUT = path.resolve('public/models/polyhaven')
const AGENT = 'SktAgnes-CC0-AssetImporter/1.0 (https://github.com/Dartnation/SktAgnes)'

async function getBuffer(url) {
  const u = new URL(url)
  if (u.protocol !== 'https:' ||
      !['api.polyhaven.com', 'dl.polyhaven.org'].includes(u.hostname)) {
    throw new Error('Untrusted URL: ' + url)
  }
  const response = await fetch(u, { headers: { 'User-Agent': AGENT }, signal: AbortSignal.timeout(45000) })
  if (!response.ok) throw new Error('HTTP ' + response.status + ' ' + u.toString())
  const buf = Buffer.from(await response.arrayBuffer())
  if (buf.byteLength > 30_000_000) throw new Error('Unexpected large model dependency')
  return buf
}
function safePath(relative) {
  if (typeof relative !== 'string' ||
      !/^(?:textures\/)?[a-zA-Z0-9_.-]+\.(?:gltf|bin|jpg|jpeg|png)$/i.test(relative) ||
      relative.includes('..')) {
    throw new Error('Unsafe asset dependency ' + relative)
  }
  return relative
}
function checkMD5(bytes, meta, relative) {
  if (meta.size != null && bytes.length !== meta.size) throw new Error('Bad size: ' + relative)
  const md5 = crypto.createHash('md5').update(bytes).digest('hex')
  if (meta.md5 && md5.toLowerCase() !== meta.md5.toLowerCase()) {
    throw new Error('Bad official md5 for ' + relative)
  }
}
async function importAsset(id) {
  const body = await getBuffer('https://api.polyhaven.com/files/' + id)
  const json = JSON.parse(body.toString('utf8'))
  const candidate = json.gltf?.['1k']?.gltf
  if (!candidate?.url || !candidate.include) throw new Error('No 1K glTF for ' + id)
  const files = {
    [id + '_1k.gltf']: {
      size: candidate.size, url: candidate.url, md5: candidate.md5,
    },
    ...candidate.include,
  }
  const parent = await fs.mkdtemp(path.join(os.tmpdir(), 'skt-v5-cc0-'))
  try {
    const hashes = {}
    for (const [name, info] of Object.entries(files)) {
      safePath(name)
      const bytes = await getBuffer(info.url)
      checkMD5(bytes, info, name)
      const target = path.join(parent, name)
      await fs.mkdir(path.dirname(target), { recursive: true })
      await fs.writeFile(target, bytes, { flag: 'wx' })
      hashes[name] = crypto.createHash('sha256').update(bytes).digest('hex')
    }
    const gltf = JSON.parse((await fs.readFile(path.join(parent, id + '_1k.gltf'))).toString('utf8'))
    for (const file of [
      ...(gltf.buffers || []), ...(gltf.images || []),
    ]) {
      if (!file.uri || file.uri.startsWith('data:')) continue
      safePath(file.uri)
      await fs.access(path.join(parent, file.uri))
    }
    const target = path.join(OUTPUT, id)
    await fs.mkdir(OUTPUT, { recursive: true })
    // Repo branch is dedicated to art; refuse to overwrite any prior version.
    try {
      await fs.access(target)
      throw new Error('Asset directory already exists: ' + target)
    } catch (err) {
      if (err.code !== 'ENOENT') throw err
    }
    await fs.rename(parent, target)
    console.log('IMPORTED', id, 'files', Object.keys(hashes).length)
    return { id, source: 'https://polyhaven.com/a/' + id, license: 'CC0', resolution: '1k', hashes }
  } catch (err) {
    await fs.rm(parent, { recursive: true, force: true })
    throw err
  }
}
const manifest = []
for (const id of IDs) manifest.push(await importAsset(id))
await fs.writeFile(path.join(OUTPUT, 'asset-manifest.json'), JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' })
