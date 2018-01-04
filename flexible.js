//const person = {
//};
//
//person.a = 'Hello';
//
//let b;
//
//person[b] = 'asdf';
//person['undefined'] = 'erw';
//person.b = '1';
//
//function hello(param) {
//  return 'hello ' + param;
//}
//
//hello.someProperty = 'world';
//
//person[hello.someProperty] = hello(hello.someProperty);
//
//console.log(person);

const myRestfullThing = {
  create: function(obj) {
    console.log('creating new ', obj);
  },
  update: function(obj) {
    console.log('updating new ', obj);
  }
};

const save = (obj) => 
  myRestfullThing[obj.id === undefined ? 'create' : 'update'](obj);

save({
  asdf: 'asdf'
});

