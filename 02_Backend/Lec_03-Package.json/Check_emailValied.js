           // check the email and password is strong or not using inbuild library
// ham module and package_lock.json kodelete ke baad fir se la saket hai using help of package.json
// command ;- npm i


const email = 'sumant@123gmail.com';
const pass = 'Sumant@1';

        // using inbuild library Validator

const validator = require('validator');   
const ans = validator.isEmail(email);     
console.log(ans)       // true

const check1 = validator.isStrongPassword(pass)
console.log(check1)