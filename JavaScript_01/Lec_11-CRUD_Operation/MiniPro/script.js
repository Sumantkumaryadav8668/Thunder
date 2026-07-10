             // fatch the data and display on the UI using javascript
             
const users = [
  {
    name: "Aarav Sharma",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Verma",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rahul Mehta",
    age: 26,
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sneha Kapoor",
    age: 23,
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Karan Malhotra",
    age: 28,
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ananya Singh",
    age: 21,
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Rohan Gupta",
    age: 25,
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Neha Joshi",
    age: 27,
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Aditya Raj",
    age: 24,
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Isha Agarwal",
    age: 22,
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  }
];  

// name: "Aarav Sharma",
//     age: 24,
//     photo: "https://randomuser.me/api/portraits/men/1.jpg"

            
     // select the root element
const root = document.getElementById('root');

const arr = [];

           // iterate the data using foreach loop

users.forEach((person) =>{

    const name = document.createElement('h3');
    name.textContent = person.name;

    const age = document.createElement('p');
    age.textContent = `age ${person.age}`;

    const photo = document.createElement('img');
    photo.src = person.photo;

    const div = document.createElement('div');
    div.append(photo,name,age);

    arr.push(div);
})           

root.append(...arr);