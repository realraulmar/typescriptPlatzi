"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// < > syntax
var username;
username = 'raul';
username = 'raulmar';
// tenemos una cadenas, TS confía en mí!
var message = username.length > 5 ?
    "Welcome " + username :
    "Username is too short";
console.log('message', message);
var usernameWithID = 'raulmar 1';
// como obtener solo el username
username = usernameWithID.substring(0, 7);
console.log('Username only', username);
// as syntax
message = username.length > 5 ?
    "Welcome " + username :
    "Username is too short";
var helloUser;
helloUser = 'hello user';
username = helloUser.substring(6);
console.log('username: ', username);
