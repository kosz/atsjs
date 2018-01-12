"use strict";
exports.__esModule = true;
// framework
var a = 1;
function sumWithInternalPrivateVariable(nr) {
    return nr + a;
}
exports.sumWithInternalPrivateVariable = sumWithInternalPrivateVariable;
function setA(v) {
    a = v;
}
exports.setA = setA;
function buildSumFunction(valueOfA, callback) {
    a = valueOfA;
    return function (otherVariable) {
        return a + otherVariable + callback();
    };
}
exports.buildSumFunction = buildSumFunction;
