
import express from 'express'

let app = express()
app.use(express.json())

         // user middleware
let verified = true

app.use('/user',(req,res,next)=>{    // Middleware yahi hota hai check karta hai ki user verifies hai ya nahi
    if(!verified){
        res.send('loging first please')
    }
    next();
}) 

 

app.get('/',(req,res)=>{
    res.send('your are presint in home page')
})

app.get('/user',(req,res)=>{
    res.send('i am verified user')
})

app.get('/user/:id',(req,res)=>{
    res.send(`this is your id number ${req.params.id}`)
})


app.listen(4000,()=>{
    console.log('i am port number 4000')
})