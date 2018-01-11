var MyClass = /** @class */ (function () {
    // avoid : extend, super 
    //
    // avoid : class, new, this
    function MyClass(prop1, prop2, person) {
        this.prop1 = prop1;
        this.prop2 = prop2;
        this.person = person;
    }
    return MyClass;
}());
var instance = new MyClass(1, 2, { fname: 'asdf' });
console.log(instance);
console.log(instance.prop1);
// don't do this anymore
//class PersonClass implements Person {
//  constructor(
//    public fname: string,
//    public lname: string,
//  ) { }
//}
//
//let personInstance = new PersonClass('asdf', 'asdf');
//console.log(personInstance);
// do this instead
var person = {
    fname: 'asdf',
    lname: 'asdf'
};
console.log(person);
function asdf(prop1) {
    return prop1;
}
console.log(asdf('asdf'));
