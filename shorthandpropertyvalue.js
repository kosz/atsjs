let personObject = { 
  fname: 'asdf',
  lname: 'asdf',
  address: 'asdf',
};

const transformObject = ({ fname, lname }) => ({ middleName: 'asdf', fname, lname }); 

const p = transformObject(personObject);

console.log(p);
