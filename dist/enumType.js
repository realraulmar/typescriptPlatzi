"use strict";
// Orientación para fotografías
// const landscape = 0
// const portrait = 1
// const square = 2
// const panorama = 3
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log('landscape: ', landscape); // 0
console.log('landscape: ', PhotoOrientation[0]); // Landscape
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait: ', PictureOrientation.Portrait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espa\u00F1a"] = "esp";
})(Country || (Country = {}));
var country = Country.Mexico;
console.log('country: ', country);
// Con objetos, el inconveniente es que no puedes dar un 
// tipado :Countries
var Countries = {
    Bolivia: 'bol',
    Colombia: 'col',
    Mexico: 'mex',
    EEUU: 'usa',
    España: 'esp'
};
var countries = Countries.Bolivia;
console.log('country: ', countries);
// extendiendo enums
var Days;
(function (Days) {
    Days["Monday"] = "1";
    Days["Tuesday"] = "2";
    Days["Wendnesday"] = "3";
    Days["Thursday"] = "4";
    Days["Friday"] = "5";
})(Days || (Days = {}));
(function (Days) {
    Days["Saturday"] = "6";
    Days["Sunday"] = "7";
})(Days || (Days = {}));
// o podemos usar el spread operator en un nuevo objeto
console.log('Days', Days);
// Days { Monday: '1',
//   Tuesday: '2',
//   Wendnesday: '3',
//   Thursday: '4',
//   Friday: '5',
//   Saturday: '6',
//   Sunday: '7' }
