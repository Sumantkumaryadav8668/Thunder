                // The Set Object
      // Remove the duplicate values 
      
      
// let arr = [10,51,6,23,10,45,51,20];

// let result = new Set(arr);

// console.log(result);
// console.log(typeof result);


           // create the empty set then add the elements

let set = new Set();
               // add elements
set.add(10);
set.add(50);
set.add(60);
set.add(10);  // duplicate value so that is not consider

console.log(set);

            // ckeck the value inside the set ot not
console.log(set.has(20));    // false
console.log(set.has(10));   // true         

          // delete the element inside the set
set.delete(50);
console.log(set);  // {10,60}      

          // remove all element inside the set
set.clear();
console.log(set);  // {}          