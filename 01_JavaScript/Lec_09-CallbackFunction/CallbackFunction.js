                  // How do use Callback Function

function name(callback){
    console.log('i am sumant');
    callback(clg);    // kumar
}                  

function yadav(callback){
    console.log('mai huu yadav')
    callback(kumar);       // name
}

function kumar(callback){
    console.log('i am student')
    callback();    // clg
}

function clg(){
    console.log('i am clg')
}

// name();      // this is okd method
// yadav();     // in this case load the call execute time
// yadav(name);   // callback function  




                  // ordering output

function student(){
    console.log("i am a student")
}                  

function college(num,callback){
    console.log('this is a college')

    console.log(`i have ${num} branches`)
    callback();   // call student function
}


college(10,student)

console.log('hello sir kaise hai app');