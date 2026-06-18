                      // Why we use of Nested Loop
        // print star traingal pattern 
        
// for(let i=0; i<=5; i++){
//     let str = "";

//     for(let j=0; j<=i; j++){
//         str += "* ";
//     }
//     console.log(str)
// }   

        // print reverse star traingal pattern 
        
// for(let i=5; i>=0; i--){
//     let str = "";

//     for(let j=0; j<=i; j++){
//         str += "* ";
//     }
//     console.log(str)
// } 

//         // print number traingal pattern 
        
// for(let i=1; i<=5; i++){
//     let str = "";

//     for(let j=1; j<=i; j++){
//         str += i + " ";
//     }
//     console.log(str)
// } 

//         // print reverse number traingal pattern 
        
// for(let i=1; i<=5; i++){
//     let str = "";

//     for(let j=5; j>=i; j--){
//         str += i + " ";
//     }
//     console.log(str)
// } 

        // print number traingal pattern 
        
// for(let i=1; i<=5; i++){
//     let str = "";

//     for(let j=1; j<=i; j++){
//         str += j + " ";
//     }
//     console.log(str)
// }

        // print Alphabet traingal pattern 
        
// for(let i=1; i<=5; i++){
//     let str = "";

//     for(let j=1; j<=i; j++){
//         str += String.fromCharCode(i+64) + " ";
//     }
//     console.log(str)
// }

        // print row wise continuous number pattern 
        
// for(let i=1; i<=5; i++){
//     let str = "";

//     for(let j=1; j<=5; j++){
//         str += j+" ";
//     }
//     console.log(str)
// }

        // print row wise continuous reverse number pattern 
        
// for(let i=1; i<=5; i++){
//     let str = "";

//     for(let j=5; j>=1; j--){
//         str += j+" ";
//     }
//     console.log(str)
// }

        // print row wise continuous Alphabets pattern 
        
for(let i=1; i<=5; i++){
    let str = "";

    for(let j=1; j<=5; j++){
        str += String.fromCharCode(j+64)+" ";
    }
    console.log(str)
}
