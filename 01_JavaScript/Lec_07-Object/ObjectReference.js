                 // Object is pass by Reference

// let obj1 = {
//     value : 10
// }  
// console.log(obj1.value)           

// let obj2 = obj1;
// obj2.value = 50;   // change the value through obj2 in obj1 
// console.log(obj1.value);  // passed by reference

               // How to Copy an Object (Shallow Copy)

let fruit = {name : 'apple',weight : '25'};

let copy = {...fruit};
copy.name = 'papaya';
copy.weight = 320;

console.log(fruit.weight);  // actual value
console.log(copy.weight);   // copy value then change the value

