import { EventEmitter } from 'events'

export default class Time extends EventEmitter {
  constructor() {
    super()

    this.start = Date.now()
    this.current = this.start
    this.elasped = 0
    this.delta = 16 // About the time in milliseconds for 60 frames

    this.update()
  }

  update() {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elasped = this.current - this.start

    this.emit('update')

    window.requestAnimationFrame(() => this.update())
  }
}
