"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1,'user']
var user;
user = [1, 'raulmar'];
console.log('user', user);
console.log('username', user[1]);
console.log('username[1].length', user[1].length);
console.log('username', user[0]);
// Tuplas con varios valores
// id, username, isPro
var userInfo;
userInfo = [2, 'raulmar', true];
console.log('userInfo: ', userInfo);
//Arreglo de tuplas
var array = [];
array.push([1, 'raulmar']);
array.push([2, 'andradedaniela']);
array.push([3, 'lensQueen']);
console.log('array: ', array);
// Uso de funciones Array
// lensQueen -> lensQueen001
array[2][1] = array[2][1].concat('001'); // lensQueen001
console.log('array: ', array);
