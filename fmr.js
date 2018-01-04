const items = [
  { type: 'electronics', price: 1000, name: 'iPhone' },
  { type: 'clothing', price: 8, name: 'socks' },
  { type: 'electronics', price: 500, name: 'iWatch' },
];

// as a user
// i want a function that gives me the total amount of all electronics
// so that i can ... 
// ( imperative implementation )

//function sumOfElectronics(arr) {
//  let sum = 0;
//
//}

// as a user
// i want a function that returns only the electronics in the array
// so that i can ... 
// ( imperative implementation ) 
//
function filterElectronics(arr) {
  let returnArr = [];
  for(let i = 0; i < arr.length; i+=1) { 
    if(arr[i].type === 'electronics') {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

// ( functional implementation ) // using a filter on the array

// js5 syntax
//function functionalFilterElectronics(arr) {
//  return arr.filter(function(item) {
//    return item.type === 'electronics';
//  });
//}

// es6 syntax
const functionalFilterElectronics = arr =>
  arr.filter(item => item.type === 'electronics');

console.log(functionalFilterElectronics(items));
