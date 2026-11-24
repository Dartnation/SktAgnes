import * as THREE from 'three'

const paper = new THREE.MeshStandardMaterial({ color: '#d8c7a4', roughness: 0.92 })
const leather = new THREE.MeshStandardMaterial({ color: '#4a3428', roughness: 0.78 })
const brass = new THREE.MeshStandardMaterial({ color: '#b9a27a', metalness: 0.72, roughness: 0.32 })
const iron = new THREE.MeshStandardMaterial({ color: '#6a6762', metalness: 0.65, roughness: 0.42 })
const darkIron = new THREE.MeshStandardMaterial({ color: '#2c2b29', metalness: 0.5, roughness: 0.48 })
const cloth = new THREE.MeshStandardMaterial({ color: '#efe8dc', roughness: 0.7 })
const red = new THREE.MeshStandardMaterial({ color: '#9d2a24', roughness: 0.55 })

/** A small prop that reads as the real object, for the floor and for open drawers. */
export function itemProp(itemId: string): THREE.Group {
  if (itemId === 'battery') return battery()
  if (itemId.includes('fuse')) return fuse(itemId)
  if (itemId.includes('key')) return key()
  if (itemId === 'medkit') return medkit()
  if (itemId === 'rosary') return rosary()
  if (itemId === 'crowbar') return crowbar()
  if (itemId === 'evidence') return folder('#7a2e2a')
  if (itemId === 'blueprint') return blueprint()
  if (itemId === 'note_maja') return letter()
  if (itemId.startsWith('file') || itemId.startsWith('note')) return folder('#cbb892')
  const g = new THREE.Group()
  g.add(new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 0.12), paper))
  return g
}

function battery(): THREE.Group {
  const g = new THREE.Group()
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.15, 0.064),
    new THREE.MeshStandardMaterial({ color: '#1a3a28', roughness: 0.55 }),
  )
  body.position.y = 0.075
  const label = new THREE.Mesh(
    new THREE.BoxGeometry(0.102, 0.08, 0.066),
    new THREE.MeshStandardMaterial({ color: '#e4d3ae', roughness: 0.8 }),
  )
  label.position.y = 0.07
  const plus = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.018, 8), brass)
  plus.position.set(-0.022, 0.158, 0)
  const minus = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.016, 0.014), brass)
  minus.position.set(0.024, 0.156, 0)
  g.add(body, label, plus, minus)
  return g
}

function fuse(itemId: string): THREE.Group {
  const g = new THREE.Group()
  const color = itemId.includes('red') ? '#a3201c' : itemId.includes('blue') ? '#1d4e98' : '#b8962a'
  const ceramic = new THREE.Mesh(
    new THREE.CylinderGeometry(0.028, 0.028, 0.09, 10),
    new THREE.MeshStandardMaterial({ color: '#efe6d4', roughness: 0.42 }),
  )
  ceramic.rotation.z = Math.PI / 2
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.028, 10),
    new THREE.MeshStandardMaterial({ color, roughness: 0.45, emissive: color, emissiveIntensity: 0.18 }),
  )
  band.rotation.z = Math.PI / 2
  for (const side of [-1, 1]) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.018, 10), brass)
    cap.rotation.z = Math.PI / 2
    cap.position.x = side * 0.05
    g.add(cap)
  }
  g.add(ceramic, band)
  return g
}

function key(): THREE.Group {
  const g = new THREE.Group()
  const bow = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.007, 6, 12), brass)
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.012, 0.012), brass)
  shaft.position.x = 0.055
  const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.02, 0.01), brass)
  tooth.position.set(0.09, -0.012, 0)
  const tooth2 = tooth.clone()
  tooth2.position.x = 0.072
  g.add(bow, shaft, tooth, tooth2)
  g.rotation.x = -Math.PI / 2
  return g
}

function medkit(): THREE.Group {
  const g = new THREE.Group()
  const box = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.08, 0.14), cloth)
  box.position.y = 0.04
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.006, 6, 10), iron)
  handle.rotation.x = Math.PI / 2
  handle.position.y = 0.09
  const h = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.012, 0.018), red)
  h.position.y = 0.086
  const v = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.012, 0.07), red)
  v.position.y = 0.086
  g.add(box, handle, h, v)
  return g
}

function rosary(): THREE.Group {
  const g = new THREE.Group()
  const beads = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.008, 6, 14), darkIron)
  beads.rotation.x = Math.PI / 2
  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.006, 0.04), brass)
  crossV.position.set(0.055, 0.01, 0)
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.006, 0.01), brass)
  crossH.position.set(0.055, 0.01, 0.006)
  g.add(beads, crossV, crossH)
  return g
}

function crowbar(): THREE.Group {
  const g = new THREE.Group()
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.028, 0.028), darkIron)
  const hook = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.05, 0.026), darkIron)
  hook.position.set(0.2, 0.03, 0)
  hook.rotation.z = 0.5
  g.add(bar, hook)
  g.rotation.y = 0.4
  return g
}

function letter(): THREE.Group {
  const g = new THREE.Group()
  const envelope = new THREE.Mesh(
    new THREE.BoxGeometry(0.36, 0.02, 0.26),
    new THREE.MeshStandardMaterial({ color: '#efe2c4', roughness: 0.78, emissive: '#a87840', emissiveIntensity: 0.28 }),
  )
  envelope.position.y = 0.012
  const sheet = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 0.008, 0.2),
    new THREE.MeshStandardMaterial({ color: '#f7f1e4', roughness: 0.9, emissive: '#c4a06a', emissiveIntensity: 0.18 }),
  )
  sheet.position.set(0.03, 0.034, -0.02)
  sheet.rotation.y = 0.18
  const ink = new THREE.MeshStandardMaterial({ color: '#3a2c22', roughness: 1 })
  for (let i = 0; i < 4; i++) {
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.003, 0.008), ink)
    line.position.set(0.02, 0.04, 0.04 - i * 0.028)
    g.add(line)
  }
  const seal = new THREE.Mesh(
    new THREE.CylinderGeometry(0.028, 0.028, 0.012, 12),
    new THREE.MeshStandardMaterial({ color: '#8a2a24', roughness: 0.45 }),
  )
  seal.position.set(-0.1, 0.028, 0.06)
  g.add(envelope, sheet, seal)
  return g
}

function folder(tab: string): THREE.Group {
  const g = new THREE.Group()
  const cover = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.018, 0.15), leather)
  cover.position.y = 0.01
  const sheet = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.008, 0.12), paper)
  sheet.position.y = 0.02
  const mark = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.012, 0.02),
    new THREE.MeshStandardMaterial({ color: tab, roughness: 0.7 }),
  )
  mark.position.set(-0.05, 0.028, 0.07)
  g.add(cover, sheet, mark)
  return g
}

function blueprint(): THREE.Group {
  const g = new THREE.Group()
  const sheet = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.008, 0.16),
    new THREE.MeshStandardMaterial({ color: '#d5d8c8', roughness: 0.85 }),
  )
  sheet.position.y = 0.01
  const roll = new THREE.Mesh(
    new THREE.CylinderGeometry(0.012, 0.012, 0.16, 8),
    new THREE.MeshStandardMaterial({ color: '#c4c8b4', roughness: 0.7 }),
  )
  roll.position.set(0.1, 0.016, 0)
  g.add(sheet, roll)
  return g
}
