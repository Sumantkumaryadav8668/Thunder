                     // DOM -> 
     // "The DOM (Document Object Model) is a tree-like representation of your HTML document that JavaScript can understand and manipulate.
     
let h1 =document.querySelector('h1');

h1.addEventListener('click',()=>{
    h1.textContent = 'Thanks all student'
})

let web = document.getElementById('Web');

web.addEventListener("click",()=>{
    web.textContent = 'Full stack';
})

let language = document.getElementById('Lan');

language.addEventListener("click",()=>{
    language.textContent = 'C, C++, java, JS, Python';
})

let front = document.getElementById('Front');

front.addEventListener("click",()=>{
    front.textContent = 'HTML, CSS, JS, React';
})

let back = document.getElementById('Back');

back.addEventListener("click",()=>{
    back.textContent = 'Node.js, Mango DB, React';
})