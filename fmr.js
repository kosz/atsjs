const items = [
  { type: 'electronics', price: 1000, name: 'iPhone' },
  { type: 'clothing', price: 8, name: 'socks' },
  { type: 'electronics', price: 500, name: 'iWatch' },
];

// as a user
// i want a function that returns the total ammount of all electronics 
// so that i can ... 
// ( imperative implementation ) 
//
function sumOfAllElectronics(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i+=1) { 
    if(arr[i].type === 'electronics') {
      sum = sum+=arr[i].price;
    }
  }
  return sum;
}

// ( functional implementation ) // using a filter on the array

// js5 syntax
//function functionalFilterElectronics(arr) {
//  return arr.filter(function(item) {
//    return item.type === 'electronics';
//  });
//}

// es6 syntax
const functionSumOfAllElectronics = arr =>
  arr
    .filter(item => item.type === 'electronics') // [ { type: 'asdf', price: 1000 }, { type: 'asdf', price: 500 }]
    .map(item => item.price + 12) // [ 1000, 500 ] 
    .reduce((accumulator, price) => accumulator + price, 0); 

//console.log(functionSumOfAllElectronics(items));

// what is happening with the reduce
//

//const items = [
//  { type: 'electronics', price: 1000, name: 'iPhone' },
//  { type: 'clothing', price: 8, name: 'socks' },
//  { type: 'electronics', price: 500, name: 'iWatch' },
//];
console.log(items.reduce((acc, item) => acc + item.price, 0));

// run 1 : acc = initialValue ( 0 ), item = price: 1000
// run 1 returns -> 0 + 1000 = 1000
//
// run 2 : acc = return value of the previous run = 1000, item = price: 8
// run 2 return -> 1000 + 8 = 1008
//
// run 3 : acc = return value of the previous run = 1008, item = price: 500
// run 3 return -> 1008 + 500 = 1508

