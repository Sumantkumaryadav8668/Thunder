
class person{    // Class

    constructor(name,age){     // Cunstructor
        this.name = name;  // this keyword are sstore the data in object form
        this.age = age;
    }

    print(){   // Method
        console.log(`Hello i am ${this.name}`)
    }

    increment(){
        this.age++
    }
}

const user = new person('sumant',21)  // Object
const user1 = new person('chhotu',20);

user.print()  // Hello i am sumant

console.log(user.age);
user.increment();
console.log(user.age);