export {}

enum PhotoOrientation {
  Landscape, 
  Portrait,
  Square,
  Panorama
}

// get y set

class Picture {
  //propiedades
  private _id: number // definiendo public de manera explícita
  private _title: string
  private _orientation: PhotoOrientation

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id
    this._title = title
    this._orientation = orientation
  }

  get id() {
    return this._id
  }
  set id(id: number) {
    this._id = id
  }
  get title() {
    return this._title
  }
  set title(title: string) {
    this._title = title
  }
  get orientation() {
    return this._orientation
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }

  // comportamiento
  public toString() {
    return `[
      id: ${this.id},
      title: ${this.title},
      orientation: ${this.orientation}
    ]`
  }
}

class Album {
  private _id: number
  private _title: string
  private _pictures: Picture[]

  public constructor(id: number, title: string) {
    this._id = id
    this._title = title
    this._pictures = []
  }
  
  get id() {
    return this._id
  }
  set id(id: number) {
    this._id = id
  }
  get title() {
    return this._title
  }
  set title(title: string) {
    this._title = title
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture)
  }

}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation.Square)
album.addPicture(picture)
console.log('album: ', album)

// Accediendo a los miembros públicos
console.log('picture.id: ', picture.id) //get id()

picture.id = 100 // set id(100), _id es la privada
picture.title = 'Another title'
album.title = 'Personal Activities'

console.log('album: ', album)
