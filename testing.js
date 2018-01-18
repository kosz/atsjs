"use strict";
exports.__esModule = true;
function describe(subject, block) {
    console.log('the', subject);
    block();
}
exports.describe = describe;
function it(description, block) {
    var result = "" + description;
    try {
        block();
        result = result + ' passed';
    }
    catch (e) {
        result = result + ' failed';
    }
    console.log(result);
}
exports.it = it;
function expect(actualValue) {
    return {
        toEqual: function (expectedValue) {
            if (actualValue !== expectedValue) {
                throw new Error(actualValue + " does not match " + expectedValue);
            }
        }
    };
}
exports.expect = expect;
