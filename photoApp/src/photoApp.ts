export enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

export class User {
  private album: Album[]
  
  constructor(
    private id: number,
    private username: string,
    private firstName: string,
    private isPro: boolean
  ) {
    this.album = []
  }

  addAlbum(album: Album) {
    this.album.push(album)
  }
}

export class Item {
  constructor(
    readonly id: number,
    protected title: string
  ) {
    
  }
}

export class Album extends Item {
  picture: Picture[]

  constructor(id: number, title: string) {
    super(id, title)
    this.picture = []
  }

  addPicture(picture: Picture) {
    this.picture.push(picture)
  }
}

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