console.log('Hola mundo, estoy usando TypeScript!')

// Number
// Explícito
let phone: number
phone = 8121938221
// phone = 'hola' // Error

// Inferido
let phoneNumber = 8121938221
//phoneNumber = true // Error

let hex: number = 0xffffff //0x + number
let binary: number = 0b1010 //0b + number
let octalb: number = 0o744 // 0o + number

// Boolean
// Explícito
let isPro: boolean
isPro = true
// isPro = 1 // Error

// Inferido
let isUserPro = false
// isUserPro = 1 //Error

// String
// Explícito
let username: string = 'raulmar'
username = 'raul'
// username = true // Error

// Template String
// Uso de back-tick `
let userInfo: string
userInfo = `
  User Info: 
  username: ${username}
  firstName: ${username + ' hernandez'}
  phone: ${phone}
  isPro: ${isPro}
`
console.log('userInfo', userInfo) 
