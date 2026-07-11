
const h2 = document.getElementById('root');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

let count = 0;
increase.addEventListener('click',()=>{
    count++;
    h2.textContent = `count is: ${count}`
    // console.log('hiii')
})

decrease.addEventListener('click',()=>{
    if(count===0) return

    count--;
    h2.textContent = `count is: ${count}`
})