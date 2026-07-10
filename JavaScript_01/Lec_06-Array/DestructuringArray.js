              // In Destructuring (Arrays)

const arr = [1,2,3,4,5,6,7];
 
const[first,second,...other] = arr;

console.log(first);    // 1
console.log(second);   // 3
console.log(other);  // collected into an array