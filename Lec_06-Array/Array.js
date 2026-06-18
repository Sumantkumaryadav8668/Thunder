                 // How do we use Array 
     // In javascript Array is a Object 
     // Suppouse you have 5 students then you store theire name markes 
    // you like this code -
    
// let student1 = 'sumant';
// let student1 = 'mohit ';    
// let student1 = 'rohit';
// let student1 = 'mohan';
// let student1 = 'sohan';   // like this but this is not fotmal way

// let student = ['sumant','mohit','rohit','mohan','sohan']   // this is a formal way
 // array are store multiple value in a single variable

//  console.log(student);

                  // Index based access elements
// console.log(student[0]);      // index starts from 0
// console.log(student[1]);                  
// console.log(student[2]);
// console.log(student[3]);

                         // Creating Arrays

// let arr = [1,5,6,8];       // method 1
// let arr1 = new Array(1,2,3)   // method 2
// let arr2 = [];             // method 4 

// console.log(arr);
// console.log(arr1)
// console.log(arr2)
// console.log(typeof arr)


                        // Store Mixed data type

// let arr = ['sumant', 182,7.67,true,null,undefined,526]
// console.log(arr);  

        // find the length of array

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);
// console.log(fruits.length);   // 3     

                 // Update the Elements
// fruits[1] = 'Blueberry';
// console.log(fruits);

                 // Getting the last element
// console.log(fruits[fruits.length-1]) 

                             // Adding/Removing from the END of the Array

// let arr = [20]
// console.log(arr);

// arr.push(56,89,35);     // insert the element in the last index
// console.log(arr);

// arr.pop();         // remove the element in the last index
// console.log(arr);

                             // Adding/Removing from the END of the Array

// let arr = [10]
// console.log(arr);

// arr.unshift(16,19,25);   // insert the element in the first index
// console.log(arr);

// arr.shift();           // update the element in the first index
// console.log(arr);

                             // Print the all elements in the array using loop
let arr = [56,52,156];
let sum = 0;

for(let i=0; i<arr.length; i++){
    sum += arr[i];
} 
console.log(`sum of all element is - ${sum}`);