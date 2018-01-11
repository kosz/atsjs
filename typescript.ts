interface Person {
  fname: string;
  lname?: string;
}

class MyClass {
  
  // avoid : extend, super 
  //
  // avoid : class, new, this
  
  constructor(
    public prop1:number, 
    public prop2: number,
    public person: Person,
  ) {
  }

}

let instance = new MyClass(1, 2, { fname: 'asdf' });
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

const person: Person = {
  fname: 'asdf',
  lname: 'asdf',
}

console.log(person);

function asdf(prop1: string): number {
  return prop1;
}
console.log(asdf('asdf'));
