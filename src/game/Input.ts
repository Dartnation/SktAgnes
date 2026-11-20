export interface Wish {
  forward: number
  strafe: number
  sprint: boolean
  crouch: boolean
  jump: boolean
}

export class Input {
  private keys = new Set<string>()
  private edges = new Set<string>()
  lookX = 0
  lookY = 0
  pointerLocked = false
  virtual: Partial<Wish> | null = null
  private sens = 0.00215

  constructor(private el: HTMLElement) {
    window.addEventListener('keydown', (e) => {
      if (isFormField(e.target) && e.code !== 'Escape') return
      if (e.ctrlKey || e.metaKey || e.code === 'ControlLeft' || e.code === 'ControlRight') e.preventDefault()
      if (e.repeat) return
      this.keys.add(e.code)
      this.edges.add(e.code)
      if (['KeyE', 'KeyF', 'KeyR', 'Tab', 'KeyI', 'Escape', 'KeyG', 'KeyQ', 'Space', 'F3', 'F4', 'ArrowUp', 'ArrowDown', 'Enter'].includes(e.code)) {
        e.preventDefault()
      }
    })
    window.addEventListener('keyup', (e) => this.keys.delete(e.code))
    window.addEventListener('mousemove', (e) => {
      if (this.pointerLocked || e.buttons === 1) {
        this.lookX += e.movementX
        this.lookY += e.movementY
      }
    })
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.el
    })
    window.addEventListener('blur', () => {
      this.keys.clear()
    })
  }

  setSensitivity(v: number): void {
    this.sens = v
  }

  consumeLook(): { x: number; y: number } {
    const x = this.lookX * this.sens
    const y = this.lookY * this.sens
    this.lookX = 0
    this.lookY = 0
    return { x, y }
  }

  wish(): Wish {
    const v = this.virtual
    const k = (code: string) => this.keys.has(code)
    const forward = v?.forward ?? (k('KeyW') || k('ArrowUp') ? 1 : 0) - (k('KeyS') || k('ArrowDown') ? 1 : 0)
    const strafe = v?.strafe ?? (k('KeyD') || k('ArrowRight') ? 1 : 0) - (k('KeyA') || k('ArrowLeft') ? 1 : 0)
    return {
      forward,
      strafe,
      sprint: v?.sprint ?? (k('ShiftLeft') || k('ShiftRight')),
      crouch: v?.crouch ?? (k('ControlLeft') || k('ControlRight') || k('KeyC')),
      jump: v?.jump ?? k('Space'),
    }
  }

  pressed(code: string): boolean {
    if (!this.edges.has(code)) return false
    this.edges.delete(code)
    return true
  }

  formFocused(): boolean {
    return isFormField(document.activeElement)
  }

  takeFirst(codes: readonly string[]): string | null {
    for (const code of codes) {
      if (!this.edges.has(code)) continue
      this.edges.delete(code)
      return code
    }
    return null
  }

  discard(codes: readonly string[]): void {
    for (const code of codes) this.edges.delete(code)
  }

  lock(): void {
    const c = this.el as HTMLElement & { requestPointerLock?: () => Promise<void> | void }
    const p = c.requestPointerLock?.()
    if (p && typeof (p as Promise<void>).catch === 'function') (p as Promise<void>).catch(() => undefined)
  }

  unlock(): void {
    if (document.pointerLockElement) document.exitPointerLock()
  }
}

function isFormField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  if (target.isContentEditable) return true
  const tag = target.tagName
  if (tag === 'TEXTAREA' || tag === 'SELECT') return true
  if (tag !== 'INPUT') return false
  const type = (target as HTMLInputElement).type
  return type !== 'button' && type !== 'submit' && type !== 'checkbox' && type !== 'radio'
}
