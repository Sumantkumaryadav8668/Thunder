
const boy = document.getElementById('boy');
const girl = document.getElementById('girl');
const button = document.querySelector('button');
const h2 =  document.querySelector('h2');

button.addEventListener('click',()=>{
    const value1 = boy.value.length;
    const value2 = girl.value.length;

    let result = (value1*value1*value1*value2*value2)%101;

    h2.textContent = `Result is: ${result}%`;
})