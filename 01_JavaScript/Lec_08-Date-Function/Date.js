                 // How to find the actual date and time 
         // Creating Date Objects
         
// let date = new Date();    // this is constructor
// console.log(date);     // this is not your actual pc time 
     // this output is UTS time + 5:30 that is aactual time of your pc.
     
         //  Create a Date from a Timestamp
                 
// let   currenttime = Date.now();
// console.log(currenttime);   // output is in milisecond

// const date1 = new Date(1781785600069);  // output is UTS time
// console.log(date1)

         // print the actual time of your pc
// const date2 = new Date();
// console.log(date2.toString());  // with day output


                // Create a Specific Date (The Recommended Way)
        // find the according to your date 
        // formate (year,month,day,hours,minutes,seconds,milidecond)
        

        // moth starting from 0 in javascript
// const mydate = new Date(2026,5,19,6,7,16,256);
// console.log(mydate.toString());


             // Getting Information from a Date Object (Getters)

// const date =  new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// let date = new Date(2026,6,16)
// console.log(date)

// date.setMonth(5);
// console.log(date);

let date1 = new Date();
// console.log(date1.toString());
console.log(date1.toDateString());
console.log(date1.toISOString());
console.log(date1.toLocaleDateString());