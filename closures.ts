// framework
let a = 1;

export function sumWithInternalPrivateVariable(nr) {
  return nr + a;
}

export function setA(v) {
  a = v;
}

export function buildSumFunction(valueOfA, callback) {
  a = valueOfA;
  return function (otherVariable) {
    return a + otherVariable + callback()
  } 
}

