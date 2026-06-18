                    // DataType in JavaScript 
       // Primitive datatype: number ,string .boolean.undefined, null,symbol,bigint

                       // Number
let number = 10;
// let num = 12.568;

// console.log(number,num);
// console.log(typeof number)     // Number
 
                       // String 
// let str1 = "hello sir";
// let str2 = 'hii sir';
// let str3 = `hey sir ${number}`;

// console.log(str3); 
// console.log(typeof str2)   // String

                     // Boolean
// let bool1 = true;
// let bool2 = false;
// let bool3 = 10;
// let bool4 = '10';

// console.log(bool3==bool4)
// console.log(typeof bool2)    // Boolean

                     // Undefined
// let num;
// console.log(num);

// num = 20;
// console.log(num)
// console.log(typeof num)  // withput declearation datatype is Undefined                   

                   // Null
// let a = null;
// console.log(a)
// console.log(typeof a)    // objecct                

                 // Symbol
// let valu1 = Symbol('10')
// let valu2 = Symbol('10')
// console.log(valu1==valu2)
// console.log(typeof valu1)    // Symbol

                // Bigint
// const num = 125478966544995548554;    // not actual value print outside the output
// console.log(num)
// console.log(typeof num)    // Number 

// const num1 = BigInt(125478966544995548554)    // actual value print outside the output
// console.log(num1)
// console.log(typeof num1)       // Bigint


                      // Nonprimitive datatype: array ,object ,function

              // Array
// const arr = [10,30,2.56,'sumant',true,null,obj={name:'sumant',age:21},BigInt(2548926547889665)]

// console.log(arr)
// console.log(typeof arr)    // Object

// arr[3] = 'yadav jiii'    // update (change to actual value inside the array)
// console.log(arr)

              // Object               
// const student = {
//        name : 'sumant kumar',
//        age : 21,
//        clg : 'IES',
//        cgpa : 7.67 
// }

// console.log(student)
// console.log(typeof student)    // Object

// console.log(student.name)

               // Function 
function name(){
       let a = 12;
       let b = 30;
       console.log(a+b);
}               

console.log(name())

const fun = function name(){   // function can be store inside the variable
       let a = 12;
       let b = 30;
       console.log(a+b);
} 

console.log(typeof fun)   // Function