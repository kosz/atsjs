var a = {
    one: 1,
    two: 2,
    haha: 'asdf'
};
var b = {
    haha: 'asdf',
    asdf: 'asdf'
};
//const one = a.one;
//const two = a.two;
var one = a.one, _a = a.haha, haha = _a === void 0 ? 'haha' : _a;
console.log(one, haha);
function runSomething(_a) {
    var _b = _a.one, one = _b === void 0 ? 100 : _b, _c = _a.two, two = _c === void 0 ? 200 : _c;
    return one + two;
}
console.log(runSomething(a));
