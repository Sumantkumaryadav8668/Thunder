
let user = {
    name : 'sumant',
    age : 21,
    city : 'jharkhand'
}

let user1 = {
    name : 'chhotu',
    age : 22,
    city : 'palamu'
}

user.__proto__ = user1;   // Prototype (that means inharite the all properties of parents)

console.log(user.name);
