"use strict";
exports.__esModule = true;
var closures_1 = require("./closures");
closures_1.setA(100);
// code
//console.log(sumWithInternalPrivateVariable(100));
var b = 1000;
function cb() {
    return b + 1;
}
var sumFunction = closures_1.buildSumFunction(200, cb);
var theSum = sumFunction(5);
console.log(theSum);
