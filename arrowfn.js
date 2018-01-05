// these are not function functions
// these are javascript properties which contain functions
const shortHandMultiParamReturnObj = (param, param2) => ({ asdf: param, fdsa: param2 });
const noParam = () => console.log(''); 
const oneParamShortHand = param => console.log(param); 
const twoParam = (param, param2) => console.log(param, param2); 

const arrowFunctionWithBody = (asdf, fdas) => {
  console.log(asdf); 
  console.log(fdas);
  // think of the fact that trying to use only one expression per function
  // forces the function to be single concern
}

// js 5 traditional way; this is also a function
function spaghetti() {
  // does a transfrom
  // calls another fuction for some data
  // does another transform 
  // does some logic
}

//console.log(hello('Hello', ' world'));

