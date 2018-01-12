import { 
  sumWithInternalPrivateVariable, 
  setA, 
  buildSumFunction 
} from './closures';

setA(100);
// code
//console.log(sumWithInternalPrivateVariable(100));

let b = 1000;
function cb () {
  return b + 1;
}

const sumFunction = buildSumFunction(200, cb);
const theSum = sumFunction(5);

console.log(theSum);


