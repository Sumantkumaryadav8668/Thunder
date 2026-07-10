                 // How to create any element using javascript

// let element = document.createElement('h2');
// element.textContent = "i am sumant";
// element.style.backgroundColor = "green"
// element.classList.add('h2');
// element.id = 'second';

//     // select the h1 tag
// const h1 = document.getElementById('first');    

//          // show the h2 tag of element on the ui after h1 tag
// // h1.after(element);   

//           // show the h2 tag of element on the ui befor h1 tag
// h1.before(element);     



             // unorder list ke ander element ko kaise add kare
     // select the unorder list 
    
const ul = document.getElementById('ul');

    // create the list element
const li1 = document.createElement('li');
li1.textContent = 'Apple';

const li2 = document.createElement('li');
li2.textContent = 'Banana';

const li3 = document.createElement('li');
li3.textContent = 'Orange';

const li4 = document.createElement('li');
li4.textContent = 'Papaya';

const li5 = document.createElement('li');
li5.textContent = 'Blubarry';

     // add the li inside the unorder list
ul.append(li1); 
ul.append(li2);    
ul.append(li3);
ul.append(li4);
ul.append(li5);

           // Prepend 
const li6 = document.createElement('li');
li6.textContent = "Fruit";

ul.prepend(li6)