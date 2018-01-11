function a(one, two, ...restOfAllTheOtherParameters) {
  console.log(one, two);
  console.log(restOfAllTheOtherParameters); 
}

a(1, 2, 3, 4, 5, 6);

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,1,1));
console.log(sum(1,1,1,100,200));
