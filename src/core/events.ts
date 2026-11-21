export type GameSignal =
  | { type: 'doorOpened'; id: string }
  | { type: 'noiseEmitted'; kind: string; x: number; y: number; z: number }
  | { type: 'powerOn' }
  | { type: 'playerHidden'; id: string }
  | { type: 'playerRevealed' }
  | { type: 'itemFound'; id: string }
  | { type: 'objectiveCompleted'; id: string }
  | { type: 'saveLoaded'; slot: number }
  | { type: 'monsterAlert'; reason: string }

type Handler = (event: GameSignal) => void

/** One dispatch per emit. Listeners added during an emit wait for the next one. */
export function createBus(limit = 24) {
  const handlers = new Set<Handler>()
  const recent: GameSignal[] = []
  let emitting = false
  const waiting: Handler[] = []
  return {
    on(handler: Handler): () => void {
      if (emitting) waiting.push(handler)
      else handlers.add(handler)
      return () => {
        handlers.delete(handler)
        const at = waiting.indexOf(handler)
        if (at >= 0) waiting.splice(at, 1)
      }
    },
    emit(event: GameSignal): void {
      recent.push(event)
      if (recent.length > limit) recent.shift()
      emitting = true
      for (const handler of handlers) handler(event)
      emitting = false
      for (const handler of waiting.splice(0)) handlers.add(handler)
    },
    recent(): GameSignal[] {
      return recent.slice()
    },
    clear(): void {
      recent.length = 0
    },
  }
}

export type GameBus = ReturnType<typeof createBus>
