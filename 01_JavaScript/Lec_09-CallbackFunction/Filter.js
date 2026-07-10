                 // .filter() - The Sieve / The Bouncer
      // filter condition ke based par array se element ko secect karta hai
      // if you print inside the filter function then output is true or false
      // if you return the values and store the anothe variable the output is real elements
      

const arr = [12,54,65,78,95,86,64,32,28,91,65]

// arr.filter((ans) => {     // ans ko (ans) bhi likh sakte khai keval ans bhi 
//     console.log(ans>50);
// })


let result = arr.filter((ans) => {
    return ans>50;
})

console.log(result);