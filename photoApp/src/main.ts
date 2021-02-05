import { User, Album, Picture, PhotoOrientation } from './photoApp'

const user = new User(1, 'raulmar', 'raul', true)
const album = new Album(10, 'Platzi Pictures')
const picture = new Picture(1, 'TypeScript Course', '2021-02', PhotoOrientation.Landscape)

// Creamos relaciones
user.addAlbum(album)
album.addPicture(picture)

console.log({ user })