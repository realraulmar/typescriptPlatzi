// Void
// Explícito
function showInfo(user: any): void {
  console.log('UserInfo:', user.id, user.username, user.firstName)
}

showInfo({id:1, username: 'raulmar', firstName: 'raul'})

//Inferido
function showFormattedInfo(user: any) {
  console.log('UserInfo', `
    id: ${user.id}
    username: ${user.username}
    first name: ${user.firstName}
  `)
}

showFormattedInfo({id:1, username: 'raulmar', firstName: 'raul'})

// tipo void, como tipo de dato en variable
let unusable: void
// unusable = null // da error en el modo estricto de tsc
unusable = undefined

// Never
function handleError(code: number, message: string): never {
  //Process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`)
}

try {
  handleError(404, 'Not Found')
} catch (error) {

}

function sumNumbers(limit: number): never {
  let sum = 0
  while(true) {
    sum++
  }
  // return sum
}

sumNumbers(10)
// ciclo infinito
