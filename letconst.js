let a = 0;
a = 2;

const b = 0;
//b = 2; // this throws an error

const c = {
  a: 1,
  b: 2
};

//c = { asdf: 'asdf' }; // this throws an error because we are trying to reassing the refecence

c.a = 'hell world';

// use const most of the time
// use let when you must
// never ever use var again

console.log(c);
