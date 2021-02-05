"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var photoApp_1 = require("./photoApp");
var user = new photoApp_1.User(1, 'raulmar', 'raul', true);
var album = new photoApp_1.Album(10, 'Platzi Pictures');
var picture = new photoApp_1.Picture(1, 'TypeScript Course', '2021-02', photoApp_1.PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log({ user: user });
