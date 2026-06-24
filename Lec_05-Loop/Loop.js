              // Why do we need to loop
    // suppose you print 'hello world' 5 time then write this ->          

// console.log('hello world');
// console.log('hello world');
// console.log('hello world');    
// console.log('hello world');
// console.log('hello world');    // like this we use to loop at same code less line of code

// like this ->
                         // 1> for loop
// for(let i=0 ;i<5 ;i++){     // (initialization,condition,update)   -> in this case initialization is only onr time execute and other is until condition false
//     console.log('hello world')
// }            

//                          // 2> While loop
// let i = 0;
// while(i<5){
//     console.log('hello sumant');
//     i++;
// } 

                         // 2> Do While loop
let i = 0;
do{
    console.log('hello sumant');
    i++;
}while(i<5);  