
const value1 = document.getElementById('value1')
const value2 = document.getElementById('value2');

const form = document.querySelector('form');
const h3 = document.querySelector('h3');

form.addEventListener('submit',(e)=>{       // submit rahne par uske value e.target se nahi liya jata hai
    e.preventDefault();                    // yaha par value ke submitter ka use hoga    
    const value = e.submitter.id;

    const num1 = Number(value1.value);
    const num2 = Number(value2.value);

    if(value=='add') h3.textContent = `Result : ${num1+num2}`;

    else if(value=='sub') h3.textContent = `Result : ${num1-num2}`;

    else if(value=='mul') h3.textContent = `Result : ${num1*num2}`;

    else h3.textContent = `Result : ${num1/num2}`;
})