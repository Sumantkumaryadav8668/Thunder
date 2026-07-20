
let user = {
    price : 200,
    food : ['piza','burger','mamos'],
    payment : false,
    preperation : false,
    parsel : false,
    restorant : 'piplani'
}          

function order(user){
    console.log(`your payment ${user.price} is procesing`)

    return new Promise((resolve,reject)=>{       // return promise
        setTimeout(()=>{
            console.log(`your payment ${user.price} is done`)
            resolve(user)     /// // updated user detail
        },1000)
    })
    
}  

function preperation(user){
    console.log(`your order ${user.food} are prepering`)

    return new Promise((resolve,reject)=>{      // return promise
        setTimeout(()=>{
            console.log(`order prepair done`)
            user.preperation = true;
            resolve(user)   // // updated user detail
        },1000)
    })

}          

function pickup(user){
    console.log(`your order is peckup from ${user.restorant} restorent`)

    return new Promise((resolve,reject)=>{       // return promise
        setTimeout(()=>{
            console.log(`your oder is going now`)
            resolve(user)    // updated user detail
        },1000)
    })

}   

function delivery(user){
    console.log(`delivery boy going on the your location`)

    return new Promise((resolve,reject)=>{    // return promise
        setTimeout(()=>{
            console.log(`order deliver successfuly`)
            user.parsel = true
        },1000)
    })

}   


async function Zemoto() {
    const p1 =await order(user)
    const p2 =await preperation(p1)
    const p3 =await pickup(p2)
    const p4 =await delivery(p3)
}

Zemoto();    // call async function