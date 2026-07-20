
//              // How to create promise
// const ans = new Promise((resolve,reject)=>{   /// ans inside the return the promise
//     let success = 1;

//     if(success) resolve("data fetching are successfuly ")

//     else reject('data fetch are not successfuly')    
 
// })

// ans.then((ele)=>{      // .then are use to print only value
//     console.log(ele)
// })

// .catch((Error)=>{        // .catch are get the error then print 
//     console.log(Error)
// })



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



      // call function using promise

// order(user)
// .then((user)=>{
//     return preperation(user)
// })
// .then((user)=>{
//     return pickup(user)
// })
// .then((user)=>{
//     return delivery(user)
// })     



              // formal call function using promise
order(user)
.then((user)=> preperation(user))
.then((user)=> pickup(user))
.then((user)=> delivery(user))               