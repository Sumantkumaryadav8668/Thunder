            // internal work in zomato

function payment(amount,callback){    // callback = order (callback order ka address rakhta hai that means passed by reference)
    console.log(`your payment ${amount} is progress`)
    console.log(`payment ${amount} is done`);
    // jo pichhle function me parameter ke rup me aaya tha o ab yaha ek function ban jayega or uske under 
    // fir se parameter pass kar sakte hai
    callback(food);    // order(food) that means yah ho jayrga
}  

function order(callback){   // callback = food
    console.log('your order is conform');
    callback(delivery);   // food(delivery) 
}

function food(callback){   // callback = delivery
    console.log('food prepair start');
    callback(conform);    // delivery(conform)
}

function delivery(callback){  // callback = conform
    console.log('your order is going to way');
    callback();   // conform
}

function conform(){
    console.log('your order delivery successfuly')
}


payment(500,order);       // callback function