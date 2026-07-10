//           // Print 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i)
// }

          // Print 10 to 1
// for(let i=10;i>=1;i--){
//     console.log(i)
// }

          // Print Even number
// for(let i=2;i<=10;i+=2){
//     console.log(i)
// }  

          // Print Odd number
// for(let i=1;i<=10;i+=2){
//     console.log(i)
// }

          // Print 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i)
// }

          // Sum of all numbers
// let sum = 0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(`sum is this ${sum}`);

          // Table of 7
// for(let i=7;i<=70;i+=7){
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
//     console.log(7*i)
// } 

          // print this (*****)
// let str = "";
// for(let i=1;i<=5;i++){
//     str += "* ";
// }
// console.log(str)

                                          // Working with String 
         // count number of vowel in given string
// let str = 'javascript';
// let count = 0;

// for(let i=0; i<str.length; i++){
//     let ch = str[i];
//     if("aeiou".includes(ch)) count++;
// }
// console.log(`number of vowel is ${count}`)

                                         // Working with Array 
         // print all number in given array using loop
let arr = [10,56,84,'sumant',2.2556,true]
let largest = arr[0]

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest) largest = arr[i];
    console.log(arr[i])
}
console.log(`largest number of element is ${largest}`);