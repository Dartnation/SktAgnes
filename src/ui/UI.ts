import type { Settings } from '../systems/Settings'
import type { SaveData } from '../systems/SaveSystem'
import type { ItemDef } from '../systems/catalog'
import type { EndingId } from '../systems/Story'
import { endingCopy } from '../systems/Story'

export interface UIHooks {
  newGame: () => void
  continue: () => void
  openLoad: () => void
  openSave: () => void
  pickSlot: (slot: number) => void
  closeSlots: () => void
  settings: () => void
  closeSettings: () => void
  resume: () => void
  restart: () => void
  menu: () => void
  exit: () => void
  exitBack: () => void
  credits: () => void
  creditsBack: () => void
  closeInventory: () => void
  openInventory: () => void
  selectItem: (index: number) => void
  useItem: () => void
  dropItem: () => void
  closeExamine: () => void
  digit: (d: string) => void
  keypadOk: () => void
  keypadClear: () => void
  closeKeypad: () => void
  patchSettings: (partial: Partial<Settings>) => void
  endingMenu: () => void
  endingRetry: () => void
  endingNew: () => void
}

export class UI {
  root: HTMLElement
  private hooks: UIHooks

  constructor(root: HTMLElement, hooks: UIHooks) {
    this.root = root
    this.hooks = hooks
    root.innerHTML = TEMPLATE
    this.bind()
  }

  private bind() {
    const h = this.hooks
    const on = (id: string, fn: () => void) => {
      this.root.querySelector(id)?.addEventListener('click', fn)
    }
    on('#btn-new', h.newGame)
    on('#btn-continue', h.continue)
    on('#btn-load', h.openLoad)
    on('#btn-settings', h.settings)
    on('#btn-credits', h.credits)
    on('#btn-exit', h.exit)
    on('#btn-resume', h.resume)
    on('#btn-save', h.openSave)
    on('#btn-pause-settings', h.settings)
    on('#btn-restart', h.restart)
    on('#btn-menu', h.menu)
    on('#btn-settings-back', h.closeSettings)
    on('#btn-slots-back', h.closeSlots)
    on('#btn-credits-back', h.creditsBack)
    on('#btn-exit-back', h.exitBack)
    on('#btn-inv-close', h.closeInventory)
    on('#btn-inv-hud', h.openInventory)
    on('#btn-use', h.useItem)
    on('#btn-drop', h.dropItem)
    on('#btn-examine-close', h.closeExamine)
    on('#btn-key-ok', h.keypadOk)
    on('#btn-key-clear', h.keypadClear)
    on('#btn-key-close', h.closeKeypad)
    on('#btn-end-menu', h.endingMenu)
    on('#btn-end-retry', h.endingRetry)
    on('#btn-end-new', h.endingNew)
    this.root.querySelectorAll('[data-digit]').forEach((btn) => {
      btn.addEventListener('click', () => h.digit((btn as HTMLElement).dataset.digit || ''))
    })
    const bindRange = (id: string, key: keyof Settings) => {
      const el = this.root.querySelector(id) as HTMLInputElement | null
      el?.addEventListener('input', () => h.patchSettings({ [key]: Number(el.value) } as Partial<Settings>))
    }
    bindRange('#set-res', 'resolutionScale')
    bindRange('#set-sens', 'mouseSensitivity')
    bindRange('#set-master', 'masterVolume')
    bindRange('#set-music', 'musicVolume')
    bindRange('#set-sfx', 'sfxVolume')
    bindRange('#set-bright', 'brightness')
    const quality = this.root.querySelector('#set-quality') as HTMLSelectElement
    quality?.addEventListener('change', () => h.patchSettings({ quality: quality.value as Settings['quality'] }))
    const fps = this.root.querySelector('#set-fps') as HTMLSelectElement
    fps?.addEventListener('change', () => h.patchSettings({ fpsCap: Number(fps.value) }))
    const bindCheck = (id: string, key: keyof Settings) => {
      const el = this.root.querySelector(id) as HTMLInputElement | null
      el?.addEventListener('change', () => h.patchSettings({ [key]: el.checked } as Partial<Settings>))
    }
    bindCheck('#set-blur', 'motionBlur')
    bindCheck('#set-shake', 'cameraShake')
    bindCheck('#set-subs', 'subtitles')
    bindCheck('#set-flicker', 'reduceFlicker')
    bindCheck('#set-full', 'fullscreen')
    bindCheck('#set-invert', 'invertY')
  }

  show(name: string): void {
    if (name === 'paused') name = 'pause'
    for (const el of this.root.querySelectorAll('.screen')) el.classList.add('hidden')
    this.q('#loading').classList.toggle('hidden', name !== 'loading')
    this.q('#fatal').classList.toggle('hidden', name !== 'fatal')
    if (name === 'none' || name === 'playing') {
      this.q('#hud').classList.toggle('hidden', name !== 'playing')
      return
    }
    this.q('#hud').classList.toggle('hidden', name !== 'playing')
    const map: Record<string, string> = {
      menu: '#menu',
      pause: '#pause',
      settings: '#settings',
      slots: '#slots',
      credits: '#credits',
      exit: '#exit',
      inventory: '#inventory',
      examine: '#examine',
      keypad: '#keypad',
      ending: '#ending',
      loading: '#loading',
      fatal: '#fatal',
    }
    const id = map[name]
    if (id) this.q(id).classList.remove('hidden')
    if (name === 'inventory' || name === 'examine' || name === 'keypad') this.q('#hud').classList.add('hidden')
  }

  status(text: string): void {
    this.q('#loading').textContent = text
  }

  fatal(text: string): void {
    this.q('#fatal').textContent = text
    this.show('fatal')
  }

  continueEnabled(on: boolean): void {
    ;(this.q('#btn-continue') as HTMLButtonElement).disabled = !on
  }

  hud(opts: { objective: string; files: string; prompt: string; stamina: number; battery: number; batteryText?: string; low: boolean; lockHint: boolean }): void {
    this.q('#obj-text').textContent = opts.objective
    this.q('#files').textContent = opts.files
    this.q('#prompt').innerHTML = opts.prompt ? `<b>E</b> ${escapeHtml(opts.prompt)}` : ''
    const stam = this.q('#stam')
    stam.classList.toggle('low', opts.stamina < 25)
    const fill = stam.querySelector('i')
    if (fill) fill.style.width = `${opts.stamina}%`
    const bat = this.q('#bat i') as HTMLElement
    if (bat) bat.style.width = `${opts.battery}%`
    this.q('#bat').classList.toggle('low', opts.battery < 25)
    const label = this.q('#bat-label')
    if (label) label.textContent = opts.batteryText ? `Batteri ${opts.batteryText}` : 'Batteri'
    this.q('#lock-hint').classList.toggle('hidden', !opts.lockHint)
  }

  hurt(amount: number): void {
    this.q('#hurt').style.opacity = String(Math.max(0, Math.min(1, amount)))
  }

  setIntro(title: string, body: string): void {
    const root = this.q('#intro')
    root.classList.remove('hidden')
    this.q('#intro-title').textContent = title
    this.q('#intro-body').textContent = body
  }

  hideIntro(): void {
    this.q('#intro').classList.add('hidden')
    this.cinematic(false)
  }

  cinematic(on: boolean): void {
    this.q('#hud').classList.toggle('hidden', on)
  }

  subtitle(text: string): void {
    this.q('#subtitle').textContent = text
  }

  toast(text: string): void {
    this.q('#toast').textContent = text
  }

  audioDebug(text: string, show: boolean): void {
    const el = this.q('#audio-debug')
    el.classList.toggle('hidden', !show)
    el.textContent = text
  }

  perf(text: string, show: boolean): void {
    const el = this.q('#perf')
    el.classList.toggle('hidden', !show)
    el.textContent = text
  }

  fillSettings(s: Settings): void {
    ;(this.q('#set-quality') as HTMLSelectElement).value = s.quality
    ;(this.q('#set-fps') as HTMLSelectElement).value = String(s.fpsCap)
    this.setRange('#set-res', s.resolutionScale)
    this.setRange('#set-sens', s.mouseSensitivity)
    this.setRange('#set-master', s.masterVolume)
    this.setRange('#set-music', s.musicVolume)
    this.setRange('#set-sfx', s.sfxVolume)
    this.setRange('#set-bright', s.brightness)
    ;(this.q('#set-blur') as HTMLInputElement).checked = s.motionBlur
    ;(this.q('#set-shake') as HTMLInputElement).checked = s.cameraShake
    ;(this.q('#set-subs') as HTMLInputElement).checked = s.subtitles
    ;(this.q('#set-flicker') as HTMLInputElement).checked = s.reduceFlicker
    ;(this.q('#set-invert') as HTMLInputElement).checked = s.invertY
    ;(this.q('#set-full') as HTMLInputElement).checked = s.fullscreen
  }

  slots(list: (SaveData | null)[], title: string): void {
    this.q('#slots h2').textContent = title
    const box = this.q('#slot-list')
    box.innerHTML = ''
    const names = ['Checkpoint', 'Plads 1', 'Plads 2', 'Plads 3']
    list.forEach((save, slot) => {
      const btn = document.createElement('button')
      btn.className = 'slot'
      const when = save ? new Date(save.savedAt).toLocaleString('da-DK') : 'Tom'
      const time = save ? `${Math.floor(save.snapshot.playTime / 60)} min` : ''
      btn.textContent = `${names[slot]} — ${when} ${time}`
      btn.addEventListener('click', () => this.hooks.pickSlot(slot))
      box.appendChild(btn)
    })
  }

  keysLine(text: string): void {
    const el = this.root.querySelector('#inv-keys')
    if (el) el.textContent = text
  }

  inventory(items: { name: string; count: number; desc: string }[], index: number): void {
    const list = this.q('#inv-list')
    list.innerHTML = ''
    if (!items.length) {
      const p = document.createElement('div')
      p.className = 'note'
      p.textContent = 'Du har kun lygten.'
      list.appendChild(p)
    }
    items.forEach((item, i) => {
      const btn = document.createElement('button')
      btn.className = 'inv-item' + (i === index ? ' on' : '')
      if (i === index) btn.setAttribute('aria-current', 'true')
      btn.textContent = item.count > 1 ? `${item.name} ×${item.count}` : item.name
      btn.addEventListener('click', () => this.hooks.selectItem(i))
      list.appendChild(btn)
    })
    const sel = items[index]
    this.q('#inv-desc').textContent = sel ? sel.desc : 'Vælg en genstand.'
  }

  examine(def: ItemDef | null, mapHtml: string): void {
    this.q('#ex-title').textContent = def?.name ?? ''
    this.q('#ex-body').textContent = def?.text || def?.description || ''
    this.q('#ex-map').innerHTML = mapHtml
  }

  keypad(code: string, hint: string): void {
    this.q('#key-code').textContent = code.padEnd(4, '·')
    this.q('#key-hint').textContent = hint
  }

  ending(id: EndingId, death: boolean): void {
    const copy = endingCopy(id)
    this.q('#end-kicker').textContent = copy.kicker
    this.q('#end-title').textContent = copy.title
    this.q('#end-body').textContent = copy.paragraphs.join('\n\n')
    this.q('#btn-end-retry').classList.toggle('hidden', !death)
    this.q('#btn-end-new').classList.toggle('hidden', !death)
  }

  private setRange(id: string, value: number) {
    const el = this.q(id) as HTMLInputElement
    el.value = String(value)
  }

  private q(sel: string): HTMLElement {
    const el = this.root.querySelector(sel)
    if (!el) throw new Error(`Mangler ${sel}`)
    return el as HTMLElement
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c] ?? c)
}

const TEMPLATE = `
<canvas id="view"></canvas>
<div id="hurt"></div>
<div id="intro" class="hidden">
  <div class="intro-card">
    <p id="intro-title"></p>
    <p id="intro-body"></p>
    <p class="intro-skip">Esc springer over</p>
  </div>
</div>
<div id="subtitle"></div>
<div id="toast"></div>
<div id="perf" class="hidden"></div>
<div id="audio-debug" class="hidden"></div>
<div id="hud" class="hidden">
  <canvas id="minimap" width="220" height="150"></canvas>
  <button id="btn-inv-hud" type="button">Inventar</button>
  <div class="obj"><span>Opgave</span><div id="obj-text"></div></div>
  <div class="files" id="files"></div>
  <div class="cross"></div>
  <div class="prompt" id="prompt"></div>
  <div class="lock-hint" id="lock-hint">Klik for at styre blikket</div>
  <div class="bars"><div class="bar-label">Udholdenhed</div><div class="bar" id="stam"><i></i></div></div>
  <div class="bars right"><div class="bar-label" id="bat-label">Batteri</div><div class="bar" id="bat"><i></i></div></div>
</div>
<section id="menu" class="screen">
  <div class="menu-panel">
    <div class="kicker">Vestjylland, 1987</div>
    <h1>SKT. AGNES</h1>
    <p class="tagline">Asylet lukkede. Det gjorde hun ikke.</p>
    <button class="menu-btn" id="btn-new">Ny kampagne</button>
    <button class="menu-btn" id="btn-continue">Fortsæt</button>
    <button class="menu-btn" id="btn-load">Indlæs spil</button>
    <button class="menu-btn" id="btn-settings">Indstillinger</button>
    <button class="menu-btn" id="btn-credits">Kreditter</button>
    <button class="menu-btn" id="btn-exit">Afslut</button>
    <p class="controls-hint">WASD gå · Shift løb · Ctrl krøb · Mellemrum hop<br>E brug · F lygte · R batteri · Q rosenkrans<br>G smid · I/Tab inventar · Esc pause · F3 ydelse · F4 lyd</p>
  </div>
</section>
<section id="pause" class="screen hidden">
  <div class="card">
    <h2>PAUSE</h2>
    <button class="text-btn" id="btn-resume">Fortsæt</button>
    <button class="text-btn" id="btn-save">Gem spil</button>
    <button class="text-btn" id="btn-pause-settings">Indstillinger</button>
    <button class="text-btn" id="btn-restart">Genstart</button>
    <button class="text-btn" id="btn-menu">Hovedmenu</button>
  </div>
</section>
<section id="settings" class="screen hidden">
  <div class="card wide">
    <h2>INDSTILLINGER</h2>
    <div class="row"><span>Grafik</span><select id="set-quality"><option value="low">Lav</option><option value="medium">Mellem</option><option value="high">Høj</option></select></div>
    <div class="row"><span>Opløsning</span><input id="set-res" type="range" min="0.5" max="1.25" step="0.05"></div>
    <div class="row"><span>Mus</span><input id="set-sens" type="range" min="0.0006" max="0.006" step="0.0001"></div>
    <div class="row"><span>Hovedlyd</span><input id="set-master" type="range" min="0" max="1" step="0.01"></div>
    <div class="row"><span>Musik</span><input id="set-music" type="range" min="0" max="1" step="0.01"></div>
    <div class="row"><span>Effekter</span><input id="set-sfx" type="range" min="0" max="1" step="0.01"></div>
    <div class="row"><span>Lysstyrke</span><input id="set-bright" type="range" min="0.55" max="1.6" step="0.01"></div>
    <div class="row"><span>Billedloft</span><select id="set-fps"><option value="30">30</option><option value="60">60</option><option value="120">120</option><option value="0">Ubegrænset</option></select></div>
    <p class="note">Browseren styrer VSync. Loftet her begrænser, hvor ofte billedet tegnes.</p>
    <div class="row"><label class="check"><input id="set-blur" type="checkbox"> Bevægelsesslør</label></div>
    <div class="row"><label class="check"><input id="set-shake" type="checkbox"> Kamerarystelser</label></div>
    <div class="row"><label class="check"><input id="set-subs" type="checkbox"> Undertekster</label></div>
    <div class="row"><label class="check"><input id="set-flicker" type="checkbox"> Reduceret lysflimmer</label></div>
    <div class="row"><label class="check"><input id="set-invert" type="checkbox"> Omvendt Y-akse</label></div>
    <div class="row"><label class="check"><input id="set-full" type="checkbox"> Fuldskærm</label></div>
    <button class="text-btn" id="btn-settings-back">Tilbage</button>
  </div>
</section>
<section id="slots" class="screen hidden">
  <div class="card">
    <h2>INDLÆS</h2>
    <div id="slot-list"></div>
    <button class="text-btn" id="btn-slots-back">Tilbage</button>
  </div>
</section>
<section id="credits" class="screen hidden">
  <div class="card">
    <h2>KREDITTER</h2>
    <p class="note">Skt. Agnes er et originalt gyserspil. Historie, rum, teksturer, lys og al lyd er lavet procedurelt i koden — ingen eksterne asset-filer.<br><br>Three.js · WebGL · Web Audio<br><br>Vogteren er ikke en metafor. Luk døren efter dig.</p>
    <button class="text-btn" id="btn-credits-back">Tilbage</button>
  </div>
</section>
<section id="exit" class="screen hidden">
  <div class="card">
    <h2>AFSLUT</h2>
    <p class="note">Luk fanen eller vinduet for at forlade spillet. Hvis det blev åbnet som et selvstændigt vindue, lukker det nu.</p>
    <button class="text-btn" id="btn-exit-back">Tilbage</button>
  </div>
</section>
<section id="inventory" class="screen hidden">
  <div class="card wide">
    <h2>INVENTAR</h2>
    <p id="inv-keys" class="note">Nøgler fundet: 0/3</p>
    <p class="note">Pil op og ned vælger. Enter undersøger.</p>
    <div class="inv-list" id="inv-list"></div>
    <p id="inv-desc" class="note"></p>
    <div class="actions">
      <button class="text-btn" id="btn-use">Undersøg / brug</button>
      <button class="text-btn" id="btn-drop">Smid</button>
      <button class="text-btn" id="btn-inv-close">Luk</button>
    </div>
  </div>
</section>
<section id="examine" class="screen hidden">
  <div class="card wide">
    <h2 id="ex-title">Note</h2>
    <div class="paper" id="ex-body"></div>
    <div class="map" id="ex-map"></div>
    <button class="text-btn" id="btn-examine-close">Luk</button>
  </div>
</section>
<section id="keypad" class="screen hidden">
  <div class="card">
    <h2>PENGESKAB</h2>
    <div class="code" id="key-code">····</div>
    <p class="note" id="key-hint">Stiftelsesåret.</p>
    <div class="keypad">
      ${['1','2','3','4','5','6','7','8','9','0'].map((d) => `<button type="button" data-digit="${d}">${d}</button>`).join('')}
    </div>
    <div class="actions">
      <button class="text-btn" id="btn-key-clear">Slet</button>
      <button class="text-btn" id="btn-key-ok">Bekræft</button>
      <button class="text-btn" id="btn-key-close">Luk</button>
    </div>
  </div>
</section>
<section id="ending" class="screen hidden">
  <div class="card wide">
    <div class="kicker" id="end-kicker"></div>
    <h2 id="end-title"></h2>
    <div class="paper" id="end-body"></div>
    <div class="actions">
      <button class="text-btn" id="btn-end-retry">Indlæs checkpoint</button>
      <button class="text-btn" id="btn-end-new">Ny kampagne</button>
      <button class="text-btn" id="btn-end-menu">Hovedmenu</button>
    </div>
  </div>
</section>
<div id="loading">TÆNDER LYGTERNE</div>
<div id="fatal" class="hidden"></div>
`
