                  // how to remove the event listener

const button = document.querySelector('button');

function print(){
    button.textContent = 'clicked';
    button.removeEventListener('click',print);   // remove event listener
}

button.addEventListener('click',print);  // add event listener