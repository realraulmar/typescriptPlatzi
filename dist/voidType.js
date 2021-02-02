"use strict";
// Void
// Explícito
function showInfo(user) {
    console.log('UserInfo:', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'raulmar', firstName: 'raul' });
//Inferido
function showFormattedInfo(user) {
    console.log('UserInfo', "\n    id: " + user.id + "\n    username: " + user.username + "\n    first name: " + user.firstName + "\n  ");
}
showFormattedInfo({ id: 1, username: 'raulmar', firstName: 'raul' });
// tipo void, como tipo de dato en variable
var unusable;
// unusable = null // da error en el modo estricto de tsc
unusable = undefined;
// Never
function handleError(code, message) {
    //Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum
}
sumNumbers(10);
// ciclo infinito
