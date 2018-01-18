"use strict";
exports.__esModule = true;
var testing_1 = require("./testing");
var counter_reducer_1 = require("./counter-reducer");
testing_1.describe('counterReducer', function () {
    testing_1.it('will have nr equal 0 if no state is passed', function () {
        var newState = counter_reducer_1.counterReducer(undefined, { type: '' });
        testing_1.expect(newState.nr).toEqual(0);
    });
    testing_1.it('will add 1 if INCREMENT is received', function () {
        var newState = counter_reducer_1.counterReducer(undefined, { type: '' });
        newState = counter_reducer_1.counterReducer(newState, { type: 'INCREMENT' });
        testing_1.expect(newState.nr).toEqual(1);
    });
    testing_1.it('will subtract 1 if DECREMENT is received', function () {
        var newState = counter_reducer_1.counterReducer(undefined, { type: '' });
        newState = counter_reducer_1.counterReducer(newState, { type: 'DECREMENT' });
        testing_1.expect(newState.nr).toEqual(-1);
    });
});
