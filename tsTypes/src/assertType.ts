export {}

// < > syntax
let username: any
username = 'raul'
username = 'raulmar'

// tenemos una cadenas, TS confía en mí!
let message: string = (<string>username).length > 5 ? 
                      `Welcome ${username}` : 
                      `Username is too short`
console.log('message', message)

let usernameWithID: any = 'raulmar 1'
// como obtener solo el username
username = (<string>usernameWithID).substring(0, 7)
console.log('Username only', username)


// as syntax
message = (username as string).length > 5 ? 
                      `Welcome ${username}` : 
                      `Username is too short`

let helloUser: any
helloUser = 'hello user'
username = (helloUser as string).substring(6)
console.log('username: ', username)