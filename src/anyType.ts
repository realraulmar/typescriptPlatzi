// Explícito
let idUser: any
idUser = 1 // number
idUser = '1' // string
console.log('iduser', idUser)

// Inferido
let otherId
otherId = 1
otherId = '1'
console.log('otherId', otherId)

let surprise: any = 'hello typescript'

const res = surprise.substring(6) 
console.log('res', res)