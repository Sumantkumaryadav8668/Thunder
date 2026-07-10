
const button = document.querySelector('body');

button.addEventListener('click',(obj)=>{
    const value = obj.target.id;
    button.style.backgroundColor = value;
})