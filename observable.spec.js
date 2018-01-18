"use strict";
exports.__esModule = true;
var testing_1 = require("./testing");
var observable_1 = require("./observable");
testing_1.describe('Observable', function () {
    testing_1.it('can be instantiated', function () {
        var observable = new observable_1.Observable();
        testing_1.expect(observable).toBeDefined();
    });
    testing_1.it('can keep a list of observer functions', function () {
        var observable = new observable_1.Observable();
        function observer() { }
        observable.push(observer);
        testing_1.expect(observable.length).toEqual(1);
    });
    testing_1.it('will pass a new value to all it`s observers', function () {
        var obs1Value, obs2Value;
        function obs1(val) { obs1Value = val; }
        function obs2(val) { obs2Value = val; }
        var observable = new observable_1.Observable();
        observable.push(obs1);
        observable.push(obs2);
        var theValue = 'Hello World';
        observable.next(theValue);
        testing_1.expect(obs1Value).toEqual(theValue);
        testing_1.expect(obs2Value).toEqual(theValue);
    });
});
