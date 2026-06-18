             // Function (Basic Syntax)

// function name(name){      // function declearation
//     // console.log('hello sumant');
//     const result =  `hii ${name}`;
//     return result;
// }             

// name();   // function call

// const name1 = name('yadav')
// console.log(name1)
// console.log(name('sumant'))


                   //  Function Declaration

function add(a,b){
    return a+b;
}              
// console.log(add(10,30));

                  // Function Expression

const subtract = function(a,b){
    return a-b;
} 
// console.log(subtract(20,5)); 

                 //  Arrow Functions (ES6 - The Modern Way)
        // Normal function
const mul = function(a,b){
    return a*b;
}        
// console.log(mul(12,5));

        // Arrow function
// const arrowmul = (a,b) => {     // Arrow function
//     return a*b;
// }    
            // or
const arrowmul = (a,b) => a*b;  // Arrow function

// console.log(arrowmul(10,5));


                    // Single Parameter
const sqrt = x => x*x;
// console.log("square is " + sqrt(10));   


                      // Default Parameters (ES6)

function greet(name = "Guest") {   // Guest is work for default value
  console.log(`Hello, ${name}!`);
}

// greet("Alice");  // parameter
// greet();   // default parameter


                    // Rest Parameters (...)

// function fun(...arr){
//     let sum = 0;
//     for(let num of arr){
//         sum += num;
//     }
//     return sum;
// }                   

// let result = fun(1,5,2,6,4,58,9,9,6,4,56,95,9,54,6,56,56,5,6)
// console.log(`sum is : ${result}`);

                      // Scope - Where Do Variables Live?

let globalvar = 'i am global';

function fun(){
    let localvar = 'i am local';
    console.log(globalvar);
    console.log(localvar);
}

fun();
console.log(localvar);  // Reference error