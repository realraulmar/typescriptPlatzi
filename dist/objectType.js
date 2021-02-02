"use strict";
// Object
var user;
user = {}; // Object
user = {
    id: 1,
    username: 'raulmar',
    firstName: 'raul',
    isPro: true,
};
console.log('user', user);
//Object vs object (clase de js vs tipo de ts)
var myObj = {
    id: 1,
    username: 'raulmar',
    firstName: 'raul',
    isPro: true,
};
var isInstance = myObj instanceof Object; // true, clase Object de JS
console.log('isInstance', isInstance);
console.log('user.username: ', myObj.username);
