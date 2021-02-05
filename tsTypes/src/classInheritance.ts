export {}

enum PhotoOrientation {
  Landscape, 
  Portrait,
  Square,
  Panorama
}

// SUPER Clase
abstract class Item {
  // protected sirve para dar acceso a las subclases
  protected readonly _id: number 
  protected _title: string

  constructor(id: number, title: string) {
    this._id = id
    this._title = title
  }

  get id() {
    return this._id
  }
  // set id(id: number) {
  //   this._id = id
  // }
  get title() {
    return this._title
  }
  set title(title: string) {
    this._title = title
  }
}

// get y set

class Picture extends Item{
  public static photoOrientation = PhotoOrientation
  
  //propiedades
  private _orientation: PhotoOrientation

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title) // para invocar el constructor de Item
    this._orientation = orientation
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

class Album extends Item {
  private _pictures: Picture[]

  public constructor(id: number, title: string) {
    super(id, title) // constructor de SUPER clase
    this._pictures = []
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
console.log('*picture.id: ', picture.id) //get id()

// picture.id = 100 // set id(100), _id es la privada
picture.title = 'Another title'
album.title = 'Personal Activities'

console.log('album: ', album)


// const item = new Item(1, 'Test title') // error por el abstract

// Probar el miembro estático
console.log('PhotoOrientation: ', Picture.photoOrientation.Landscape)