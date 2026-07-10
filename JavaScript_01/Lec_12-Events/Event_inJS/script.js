
               // apply event leasener in all box 
  
// const child1 = document.getElementById('red');
// child1.addEventListener('click',()=>{
//     child1.textContent = 'my color is red';
// })   

// const child2 = document.getElementById('green');
// child2.addEventListener('click',()=>{
//     child2.textContent = 'my color is green';
// }) 

// const child3 = document.getElementById('blue');
// child3.addEventListener('dblclick',()=>{
//     child3.textContent = 'my color is blue';
// }) 

// const child4 = document.getElementById('pink');
// child4.addEventListener('click',()=>{
//     child4.textContent = 'my color is pink';
// }) 

                  // apply event leasener in all box 

const  root = document.getElementById('root');

root.addEventListener('click',(obj)=>{
    obj.target.textContent = 'i am clicked'
})