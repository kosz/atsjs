

const a = {
  one: 1,
  two: 2,
  haha: 'asdf'
};

const b = { 
  haha: 'asdf',
  asdf: 'asdf',
}


//const one = a.one;
//const two = a.two;

const { one, haha = 'haha' } = a;

console.log(one, haha);


function runSomething({ one = 100, two = 200 }) {
  return one + two;
}

//function oldSomething(obj) {
//  obj.haha = 'now i corrupted your data';
//  return obj.a + obj.b;
//}

console.log(runSomething(a));
