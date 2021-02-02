"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function birthday() {
    var date = 'February 1, 2021';
    var month = __spreadArrays(date).filter(function (element, index) { return index < 8; });
    // var month = [].filter.call(date, (element: string, index: number) => index < 8)
    console.log(month);
}
birthday();
