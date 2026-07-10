
const grandparent = document.getElementById('grandparent');

grandparent.addEventListener('click',()=>{
    console.log('grandparent is clicked');
},true)     // by default false           // true case me capture phase

const parent = document.getElementById('parent');

parent.addEventListener('click',()=>{
    console.log('parent is clicked');
},false)         // false ya default case ne bubling phase

const child = document.getElementById('child');

child.addEventListener('click',()=>{
    console.log('child is clicked');
},true)           // on the click that is target