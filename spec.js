"use strict";
exports.__esModule = true;
var testing_1 = require("./testing");
testing_1.describe('a subject', function () {
    testing_1.it('will pass', function () {
        var a = true;
        var b = false;
        testing_1.expect(a).toEqual(b);
    });
});
