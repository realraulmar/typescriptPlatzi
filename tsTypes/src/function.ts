// // Crear una fotografía
// function createPicture(title, date, size) {
//   // title
// }


// type SquareSize = '100x100' | '500x500' | '1000x1000'
// // Usamos TS, definimos tipos para los parámetros
// function createPicture(title: string, date: string, size: SquareSize) {
//   // Se crea la fotografía
//   console.log('create picture using', title, date, size)
// }

// createPicture('My birthday', '2020-03-10', '500x500')
// createPicture('Colombia trip', '2020-03')


// Parámetros opcionales
type SquareSize = '100x100' | '500x500' | '1000x1000'
function createPicture(title?: string, date?: string, size?: SquareSize) {
  // Se crea la fotografía
  console.log('create picture using', title, date, size)
}

createPicture('My birthday', '2020-03-10', '500x500')
createPicture('Colombia trip', '2020-03')


// Arrow Function
let createPic = (title: string, date: string, size: SquareSize): object => {
  // return {
  //   title: title,
  //   date: date, 
  //   size: size
  // }
  return {
    title,
    date,
    size
  }
}

const picture = createPic('Platzi session', '2020-03-10', '100x100')
console.log('picture', picture)


// Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
  // Procesamiento del código, mensaje
  if(message === 'error') {
    throw new Error(`${message}. Code error: ${code}`)
  } else {
    return 'An error has occurred'
  }
}

try {  
  let result = handleError(200, 'OK') // string
  console.log('result: ', result)
  result = handleError(404, 'error') // never (error y no valor válido)
  console.log('result', result)
} catch (error) {
  
}