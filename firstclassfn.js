function fn() {
  console.log('hello');
}

const fn1 = function() {
  console.log('hello');
} 

function runTheFunctions(fun1, fun2, fun3) {
  fun1();
  fun2();
  fun3('world');
}

function buildFunction(param1, param2) {
  return function() {
    console.log('we received ', param1, param2);
  }
}

const myFunc = buildFunction('hello', 'world');

runTheFunctions(myFunc, fn1, function(param) {
  console.log(param);  
});

