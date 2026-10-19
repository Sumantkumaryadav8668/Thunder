         // password hashing 
// not save only hash value of password -> solt is include in the password 
// password + solt ->  hashing (solt that means generated rendom string)         

// bcrypt library is help the create the passwors of hashing 

import bcrypt from "bcrypt";

const actualpass = "Sumant@123"

          // hashin password + solt
const hashpass = await bcrypt.hash(actualpass,10);

// console.log(hashpass);

// "Sumant@123"  = $2b$10$qqjAzaFlS7fkwd381QX8m.0rRsspM5THm2pUOl.63WOm1j8R5WN/2
// $2b$  -> this is show the version of bcrypt
// 10$  -> this is the number of hash count value pass with actualpass
// qqjAzaFlS7fkwd381QX8m.0rRsspM5THm2pUOl  -> this is show the hash value of solt (total 22 char is slot hashing)
// 0rRsspM5THm2pUOl.63WOm1j8R5WN/2  -> this is show the hash value of actual password

             // verify the password -> present the hash value and actual password
  
const verifypass = await bcrypt.compare(actualpass,"$2b$10$qqjAzaFlS7fkwd381QX8m.0rRsspM5THm2pUOl.63WOm1j8R5WN/2")
console.log(verifypass)             