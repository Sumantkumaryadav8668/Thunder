
import express from "express"
import { products } from "./data.js"

const app = express()
app.use(express.json());


app.get('/product',(req,res)=>{      // Using filter based data 
   let {price,rating,brand,catagory} = req.query;

   let filterdata = products;

   if(price){
        filterdata = filterdata.filter((data)=> data.price >= price)
   }

    if(rating){
        filterdata = filterdata.filter((data)=> data.rating >= rating)
    }

    if(brand){
        filterdata = filterdata.filter((data)=> data.brand == brand)
    }

    if(catagory){
        filterdata = filterdata.filter((data)=> data.category == catagory)
    }

    res.json(filterdata)    
})




app.listen(3000,()=>{
    console.log('i am listening 3000');
})