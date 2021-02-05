// Explícita
let nullVariable: null
nullVariable = null
// nullVariable = 1 // error

let otherVariable = null
otherVariable = 1

console.log('nullVariable: ', nullVariable)
console.log('otherVariable: ', otherVariable)

//Undefined
let undefinedVariable: undefined = undefined
// undefinedVariable = 'test' // error

let otherUndefined = undefined
otherUndefined = 1

console.log('undefinedVariable: ', undefinedVariable)
console.log('otherUndefined: ', otherUndefined)

// Null y undefined: Como subtipos

// --strictNullChecks

let albumName: string
// albumName = null
// albumName = undefined
