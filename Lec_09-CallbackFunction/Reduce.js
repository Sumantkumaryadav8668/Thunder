                 // .reduce() - The Accumulator / The Snowball
         // Sum calculate karna,Product nikalna,Average nikalna
         // Array ko object me convert karna,Counting karna
         
         
const arr = [12,5];

let sum = arr.reduce((ans,current) => {
    return ans + current
},0)  // by default 0 hota hai (0 ans yale ka value hai)

console.log(`your sum is ${sum}`);


let product = arr.reduce((ans,current) => {
    return ans * current
},1)  // by default 0 hota hai (0 ans yale ka value hai)

console.log(`your product is ${product}`);