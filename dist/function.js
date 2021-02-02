"use strict";
// // Crear una fotografía
// function createPicture(title, date, size) {
//   // title
// }
function createPicture(title, date, size) {
    // Se crea la fotografía
    console.log('create picture using', title, date, size);
}
createPicture('My birthday', '2020-03-10', '500x500');
createPicture('Colombia trip', '2020-03');
// Arrow Function
var createPic = function (title, date, size) {
    // return {
    //   title: title,
    //   date: date, 
    //   size: size
    // }
    return {
        title: title,
        date: date,
        size: size
    };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
// Tipo de retorno con TypeScript
function handleError(code, message) {
    // Procesamiento del código, mensaje
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    var result = handleError(200, 'OK'); // string
    console.log('result: ', result);
    result = handleError(404, 'error'); // never (error y no valor válido)
    console.log('result', result);
}
catch (error) {
}
