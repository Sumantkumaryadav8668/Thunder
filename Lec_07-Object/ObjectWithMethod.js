                     // Objects with Methods (Behavior)

// const person = {
//     name : 'sumant kumar',
//     age : 21,
//     cgpa : 7.67,
//     branch : 'CSE',
//     college : function(){
//         const price = 800000
//         console.log(`My name is ${this.name} and age is ${this.age}. our cgpa is ${this.cgpa} in ${this.branch} and my amount is ${price}`)
//     }
// }                     

// console.log(person);  // print all element of object
// person.college();   // function call 

                 //  The for...in Loop (The Old Way)

const car = {
    make: "Honda",
    model: "Civic",
    year: 2021
};

// for(const key in car){
//     console.log(`key : ${key} , value : ${car[key]}`)
// }

         // find pairs of object

console.log(Object.keys(car));  // print only key of object
console.log(Object.values(car));   // print only value of object

