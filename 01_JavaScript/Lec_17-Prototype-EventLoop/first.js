
let user1 = {
    name:'sumant',
    age:21,
    city:'palamu',
    greed:function(){
        console.log('hii everyone');
    }
}

let user2 = {
    name:'chhotu',
    age: 21,
    city:'jharkhand',
    greed: function(){
        console.log('hii ' + this.name);
    }
}

user1.greed();  // hii everyone
user2.greed();  // hii chhotu


const user = {    // not extand the data of object user1 
    greed : function () {
        console.log(`hii i am ${this.name}`)
    },
    increment : function(){
        this.age++;
    }
}

user.greed();
user.increment();