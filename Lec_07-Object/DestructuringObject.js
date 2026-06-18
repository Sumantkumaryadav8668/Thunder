                   // In Destructuring (Objects)

const person = {
    name: "Alice",
    age: 25,
    city: "NYC",
    country: "USA"
};

  // Rest: Collect remaining properties
const { name, ...otherInfo } = person;

console.log(name);       // "Alice"
console.log(otherInfo);  // { age: 25, city: "NYC", country: "USA" }
