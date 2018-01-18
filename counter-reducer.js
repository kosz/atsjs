"use strict";
// every time you want to make any changes to your app's state
// you dispatch a action object
// which gets sent to all the reducers
// the reducers which have matching action type cases
// will modify the state based on the logic which their cases contain
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var INITIAL_STATE = {
    nr: 0
};
function counterReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case 'INCREMENT':
            return __assign({}, state, { nr: state.nr + 1 });
        case 'DECREMENT':
            // anti pattern example
            //state.nr = state.nr - 1;
            //return state;
            return __assign({}, state, { nr: state.nr - 1 });
        default:
            return state;
    }
}
exports.counterReducer = counterReducer;
// action + state = state
// action + curreState = newState
// currentState = newState;
// action + currentState = newState;
