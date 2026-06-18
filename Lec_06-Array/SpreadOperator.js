                // Why we use Spreat Operator 
    // Add two array in the single variable
    
let fruit = ['apple','banana','papaya','pineapple'];
let flower = ['lotus','rose','sunflower','lily'];

// let result = [...fruit,...flower];
// console.log(result);

                     // Add another element in side the add two array

let result = [...fruit,20,110,true,...flower];
console.log(result);                     