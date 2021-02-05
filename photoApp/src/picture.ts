import { Item } from './item'
import { PhotoOrientation } from './photoOrientation'

export class Picture extends Item {
  constructor(
    id: number,
    title: string,
    private date: string,
    private orientation: PhotoOrientation
  ) {
    super(id, title)
  }

  toString() {
    return `[
      id: ${this.id},
      title: ${this.title},
      orientation: ${this.orientation}
    ]`
  }
}