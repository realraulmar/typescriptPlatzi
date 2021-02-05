// Corchetes []

// explíticto
let users: string[]
users = ['raulmar', 'andrade', 'mireles']
// users = [1, true] // error

// inferido
let otherUsers = ['raulmar', 'andrade', 'mireles']
// otheUsers = [1, true] // error

// Array<tipo>
let pictureTitles: Array<string>
pictureTitles = ['Lalaland', 'Baby Driver', 'War dogs']

// Accediendo a los valores en un Array
console.log('first user: ', users[0])
console.log('picture title: ', pictureTitles[0])

// Propiedades en Array
console.log('users.length: ', users.length)

// Uso de funciones en Arrays
users.push('platziUser')
users.sort()
console.log('users', users)


