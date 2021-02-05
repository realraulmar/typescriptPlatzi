// Orientación para fotografías
// const landscape = 0
// const portrait = 1
// const square = 2
// const panorama = 3

enum PhotoOrientation {
  Landscape = 0,
  Portrait = 1, 
  Square = 2,
  Panorama = 3,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log('landscape: ', landscape) // 0
console.log('landscape: ', PhotoOrientation[0]) // Landscape

enum PictureOrientation {
  Landscape = 10,
  Portrait, // 11
  Square, // 12
  Panorama, // 13
}

console.log('portrait: ', PictureOrientation.Portrait)

enum Country {
  Bolivia = 'bol',
  Colombia = 'col',
  Mexico = 'mex',
  EEUU = 'usa',
  España = 'esp'
}

const country: Country = Country.Mexico
console.log('country: ', country)

// Con objetos, el inconveniente es que no puedes dar un 
// tipado :Countries
const Countries = {
  Bolivia: 'bol',
  Colombia: 'col',
  Mexico: 'mex',
  EEUU: 'usa',
  España: 'esp'
}
const countries: string = Countries.Bolivia
console.log('country: ', countries)

// extendiendo enums
enum Days {
  Monday = '1',
  Tuesday = '2',
  Wendnesday = '3',
  Thursday = '4',
  Friday = '5',
}

enum Days {
  Saturday = '6',
  Sunday = '7'
}

// o podemos usar el spread operator en un nuevo objeto

console.log('Days', Days)
// Days { Monday: '1',
//   Tuesday: '2',
//   Wendnesday: '3',
//   Thursday: '4',
//   Friday: '5',
//   Saturday: '6',
//   Sunday: '7' }