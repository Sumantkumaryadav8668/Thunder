              // In Destructuring (Arrays)

const arr = [1,2,3,4,5,6,7];
 
const[first,second,third,...other] = arr;

console.log(first);    // 1
console.log(third);   // 3
console.log(other);  // collected into an array