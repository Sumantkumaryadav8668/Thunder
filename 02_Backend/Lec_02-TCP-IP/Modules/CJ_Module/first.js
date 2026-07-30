          // how can use modules (CJ Mpsule this is use in odd verson)
          // basicaly accessing one file to another file 


const third = require("./third");     // in this stage collect the require file
const {second , add} = require("./second");

          
console.log('i am fisrt page')

         // this function is create another file but i can access on this page using modules
second()
add()
third()

console.log(10+30);