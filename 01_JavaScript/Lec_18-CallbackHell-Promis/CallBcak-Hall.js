
          // create zomato platfom overviwe how to work 

let user = {
    price : 200,
    food : ['piza','burger','mamos'],
    payment : false,
    preperation : false,
    parsel : false,
    restorant : 'piplani'
}          

function order(user,callback){
    console.log(`your payment ${user.price} is procesing`)

    setTimeout(()=>{
        console.log(`your payment ${user.price} is done`)
        callback(user)     /// // updated user detail
    },1000)
}  

function preperation(user,callback){
    console.log(`your order ${user.food} are prepering`)

    setTimeout(()=>{
        console.log(`order prepair done`)
        user.preperation = true;
        callback(user)   // // updated user detail
    },1000)
}          

function pickup(user,callback){
    console.log(`your order is peckup from ${user.restorant} restorent`)

    setTimeout(()=>{
        console.log(`your oder is going now`)
        callback(user);     // updated user detail
    },1000)
}   

function delivery(user){
    console.log(`delivery boy going on the your location`)

    setTimeout(()=>{
        console.log(`order deliver successfuly`)
        user.parsel = true
    },1000)
}          


                  // CallBack Hall 
order(user , (user)=>{
    preperation(user ,(user)=>{
        pickup(user ,(user)=>{
            delivery(user)
        })
    })
})
                 