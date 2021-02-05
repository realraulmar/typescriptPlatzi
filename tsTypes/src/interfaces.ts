export {}

// Función para mostrar una Fotografía

enum PhotoOrientation {
  Landscape, 
  Portrait,
  Square,
  Panorama
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation
}

// Cambiamos este tipo
// picture: { 
//   title: string, 
//   date: string, 
//   orientation: PhotoOrientation 
// }
// por la interfaz

function showPicture(picture: Picture) {
  console.log(`
    [title]: ${picture.title}, 
    date: ${picture.date}, 
    orientation: ${picture.orientation}
  `)

  console.log({picture})
}

let myPic = {
  title: 'Test Title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
  title: 'Test Title',
  date: '2020-03',
  orientation: PhotoOrientation.Portrait,
  // extra: 'test' // error porque no está definido
})

interface PictureConfig {
  title?: string
  date?: string
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
  const pic = {title: 'Default', date: '2020-03'}
  if(config.title) {
    pic.title = config.title
  }
  if(config.date) {
    pic.date = config.date
  }

  return pic
}

let picture = generatePicture({})
console.log('picture: ', picture)
picture = generatePicture({ title: 'Travel Pic'})
console.log('picture: ', picture)

// Interfaz: Usuario
interface User {
  readonly id: number
  username: string
  isPro: boolean
}

let user: User
user = {
  id: 10,
  username: 'raulmar', 
  isPro: true
}
console.log('user: ', user)
// user.id = 20 // erro por readonly
console.log('user: ', user)
