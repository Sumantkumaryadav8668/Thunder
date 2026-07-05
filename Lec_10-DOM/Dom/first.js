       // All operation using select html tag through the javascript

//            // select html tag id based

// let element = document.getElementById("header");

// element.textContent = 'i am header'  // text content chamge using js
// element.style.backgroundColor = "aqua"
// element.style.fontSize = "50px"
// element.className = 'first'

//            // select html tag class based

// let element = document.getElementsByClassName("sir");

// element[0].textContent = 'i am don';
// element[0].style.color = "red";
// element[0].style.fontSize = '30px'


           // select html tag querselector based

// let element = document.querySelectorAll("li");

// element[0].textContent = 'i am don';
// element[1].textContent = 'i am hero';
// element[2].textContent = 'i am jocker';
// element[3].textContent = 'i am man';


           // select html tag tagname based

// let element = document.getElementsByTagName("h2");    // it is work on collection of tages

// element[0].textContent = 'hello bhai'



                        // use of .textContent, .innerText and .innerHTML

let element = document.getElementById("header");    // it is work on collection of tages

// element.textContent = 'hello bhai';   // it is consider based on object form
// element.innerText = 'hello boss';    // it is consider based on object form
// element.innerHTML = "hello sir";     // it is consider based on HTML form

console.log(element.innerHTML)  // Welcome to first program <span style="background-color: pink;">this is code</span>

console.log(element.innerText) // Welcome to first program this is code

console.log(element.textContent) // Welcome to first program this is code