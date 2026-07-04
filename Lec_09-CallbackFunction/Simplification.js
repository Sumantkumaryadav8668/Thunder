                         // Calculator using callback function

function add(num1,num2){
    return num1+num2;
}  

function sub(num1,num2){
    return num1-num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}

function calculator(num1,num2,callbakc){     // callback = mul
    console.log('this is calculator :')
    let result = callbakc(num1,num2);    // mul(10,30)
    console.log(`your result is this : ${result}`)
}

calculator(10,30,mul);