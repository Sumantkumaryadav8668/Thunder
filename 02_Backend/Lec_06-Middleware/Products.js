           // Middlewire 

import express from "express"
import { products } from "./data.js"

const app = express()
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('this is home page')
})

app.get('/product',(req,res)=>{       // get all products
    res.json(products)
})

app.get('/product/:id',(req,res)=>{      // get user data using id based in url
    let id = req.params.id;
    
    let data = products.find((p)=>p.id == id)
    if(data){
        res.json(data)
    }
    else{
        res.send('product are not found')
    }
})

// app.delete('/product',(req,res)=>{    // delete user data based product id passed in body
//     let idx = products.findIndex((user)=> user.id == req.body.id)
//     products.splice(idx,1)
//     res.send('data delete successfully')
// })

app.delete('/product/:id',(req,res)=>{   // delete user data using id based in url 
    let id = req.params.id;
    
    let index = products.findIndex((p)=>p.id == id)
    if(index > 0){
        let remove = products.splice(index,1)
        res.json(remove)
    }
})

app.post('/product',(req,res)=>{
    products.push(req.body);
    res.send('data created successfully')
})


app.patch('/product',(req,res)=>{
    let data = req.body

    let finduser = products.find((p)=> p.id == data.id)

   if(finduser){
    Object.assign(finduser,data)
    res.send('data are updated successfully')
   }
   else{
    res.send('products does not exist')
   }
})


app.listen(3000,()=>{
    console.log('i am listening 3000');
})