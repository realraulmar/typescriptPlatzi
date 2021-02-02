"use strict";
console.log('Hola mundo, estoy usando TypeScript!');
// Number
// Explícito
var phone;
phone = 8121938221;
// phone = 'hola' // Error
// Inferido
var phoneNumber = 8121938221;
//phoneNumber = true // Error
var hex = 0xffffff; //0x + number
var binary = 10; //0b + number
var octalb = 484; // 0o + number
// Boolean
// Explícito
var isPro;
isPro = true;
// isPro = 1 // Error
// Inferido
var isUserPro = false;
// isUserPro = 1 //Error
// String
// Explícito
var username = 'raulmar';
username = 'raul';
// username = true // Error
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n  User Info: \n  username: " + username + "\n  firstName: " + (username + ' hernandez') + "\n  phone: " + phone + "\n  isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
