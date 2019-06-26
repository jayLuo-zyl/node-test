// Promise based HTTP client for the browser and node.js
const axios = require('axios');

const myObj = {
   add: (num1,num2) => num1 + num2,
   isNull: () => null,
   checkValue: (x) => x ,
   createUser: () => {
       const user = {firstName: 'Sonny'}
       user['lastName'] = 'Nguyen';
       return user;
   },
   fetchUser: () =>
   axios
       .get('https://jsonplaceholder.typicode.com/users/1')
       .then(res => res.data)
       .catch(err => 'err')
};

module.exports = myObj;