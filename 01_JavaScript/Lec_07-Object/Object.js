              // Why do we use Object
       // Create Object

// const person = {
//     name:'sumant',
//     age : 21,
//     cgpa : 7.67
// }
// console.log(person);


                   // The Basics - Create, Read, Update, Delete (CRUD)
         // 1> Create Object 
         
// const name = {};  //this is empty object
// console.log(name) 

// const user = {
//     name : 'sumant kumar',
//     age : 21,
//     course : 'javascript',
//     amount : 5200.02
// }
// console.log(user);

         // 2> Accessing(Reading) Properties 

// const user = {
//     name : 'sumant kumar',
//     age : 21,
//     course : 'javascript',
//     amount : 5200.02
// }
// console.log(user.course);  //read data
// console.log(user["amount"]);

             // 3> Updating and Adding (Creating) Properties 
         
// const user = {
//     name : 'sumant kumar',
//     age : 21
// }
// console.log(user.name);    // sumant kumar

// user.name = 'yadav sumant';
// user.age = 25;

// console.log(user.name);     // yadav sumant

               // 4> Deleting Properties

let college = {
    name : 'IES college of technology',
    course : 'B.Tech',
    branch : 'CSE',
    fee : 8000000,
    teacher : 'all teacher'
}               

delete college.name;      // delete name element of object
delete college.teacher;    // delete teacher element of object

console.log(college);