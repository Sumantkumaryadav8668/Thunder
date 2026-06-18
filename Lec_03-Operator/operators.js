                   // Operators in JavaScript

        // 1> Assignment Operator (= and Compound Assignment Operator +=,-=,*=,/=,%=,**=)
// let num = 100;
// console.log(num);  // 100

//           // Compound Assignment
// num+=30;
// console.log(num)   // 130

// num-=30;
// console.log(num)   // 100

// num*=3;
// console.log(num)  // 300

// num/=100;
// console.log(num)   // 3

// num%=30;
// console.log(num)   // 3

// num**=3;
// console.log(num)   // 27 (this operator is sube of any number)


                  // Arithmetic Operator (+,-,*,/,%,**)
// const num = 10;
// console.log(num+200);
// console.log(num-20); 
// console.log(num*12);
// console.log(num/0);
// console.log(num%2);
// console.log(num**3);

                     // Increment and Decreament Operator
// let num = 20;
// console.log(++num)  // 21
// console.log(num++)  // 21

// console.log(--num)  // 21
// console.log(num--)  // 21
// console.log(num)    // 20

                      // Comparison Operator (>,<,>=,<=,!=,==(loose equality),===(strict equality))
// console.log(2>5)      // false 
// console.log(10<25)     // true                 
// console.log(12>=11)      // true
// console.log(100<=99)     // false
// console.log(10!='10')    // false
// console.log(2.56==2.560)    // true
// console.log('sumant'==='sumant')  // true

                         // Logical Operator (&&, ||, !)                         
// console.log(5 && "ram")  // if first statement is true then output will be return first statement otherwise output will be return second statement                       

// console.log('mohan' || 5)   // both statement is false then output will be return frist statement otherwise output will be return first statement

// console.log(!5)

                         // Bitwise Operator (&,',^,~,<<,>>)
// console.log(2 & 5)   // only one condition then output will be 1 both binaty number are 1 
 // 2 -> 010
 // 5 -> 101
 //ans-> 000
 
//  console.log(5 | 8)    // in this condition both binary number are add

//  console.log(3 ^ 6)    // in this condition both binary number are add

// console.log(5 >> 2)
  // 5 -> 00000101   in this case jitne number hai o left side shift ho jayega or utna hi right se hat jayega
 // ans-> 00000001 that means 1

//  console.log(5 << 2)      // binary number deail 8 byte 
  // 5 -> 00000101   in this case jitne number hai o right side shift ho jayega or utna hi left se hat jayega
 // ans-> 00010100 that means 20

                            // Ternary Operator(condition?true:false)
// console.log(5%2==0 ? "even number" : "odd number")

                            // Operator Precedence (^ > /|* > +|-) -> In same Presedence work left to right
// let result = 2^5/6*5
// console.log(result)  // 6

// console.log(2*5/10)  // 1
// console.log(12/6-20+6*2)

                           // 