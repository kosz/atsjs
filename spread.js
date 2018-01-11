const person = {
  fname: 'asdf',
  lname: 'asdf',
};

const address = {
  addressLine1: 'asdf',
  city: 'asdf',
};

const fullInfo = {
  gender: 'M',
  //fname: person.fname,
  //lname: person.lname,
  ...address,
  ...person,
  lname: 'Ronnin',
};

const arr = [ 1, 2, 3 ];
const arr1 = [ 2, 3 ,4 ];

const arr10 = [ 100, 200, ...arr, 300, ...arr1 ];
console.log(arr10);

console.log(fullInfo);
