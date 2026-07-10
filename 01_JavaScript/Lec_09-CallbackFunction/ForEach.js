              // .forEach() - The Simple Looper


const arr = [5,1,6,7,8,9,5,4,5,6,2,4,5,2];

// arr.forEach((ans) =>{    // foreach work with arrow function
//     console.log(ans);
// })


let person = {
    name:'sumant',
    age: 21,
    cgpa :7.67,
    roll : 182
}

let arr1 = [...Object.values(person)];
arr1.forEach((value) => {
    console.log(value)
})