// import { User, Album, Picture, PhotoOrientation } from './photoApp'

import { Album } from "./album"
import { PhotoOrientation } from "./photoOrientation"
import { Picture } from "./picture"
import { User } from "./user"


const user = new User(1, 'raulmar', 'raul', true)
const album0 = new Album(10, 'Platzi Pictures')
const album1 = new Album(11, 'Platzi Moements')
const picture0 = new Picture(0, 'TypeScript Course', '2021-01', PhotoOrientation.Landscape)
const picture1 = new Picture(1, 'TypeScript Class', '2021-02', PhotoOrientation.Panorama)

// Creamos relaciones
user.addAlbum(album0)
user.addAlbum(album1)

album0.addPicture(picture0)
album1.addPicture(picture1)

user.removeAlbum(album1)

console.log({ user })