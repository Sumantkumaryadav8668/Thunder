             // import server

import express from "express";

let app = express();    // server create

let database = [            // create database
    {name:'sumant',age:21,email:'sumant@123'},
    {name:'rohit',age:25,email:'rohit@123'}
]

app.use(express.json()) // this is accept all CRUD opration and convert jSON to JS object

                     // write CRUD operation 

app.get('/user',(req,res)=>{   // get operation 
    res.send(database);
})

app.post('/user',(req,res)=>{
    database.push(req.body)        // body se aane vale data ko is formate se ham add kae sakte hai database me
    res.send('data created successfully')
})

app.delete('/user',(req,res)=>{         // delete operation
    const index = database.findIndex((user) => user.email == req.body.email);

    database.splice(index,1);
    res.send('data delete successfully')
})

app.patch('/user',(req,res)=>{        // pathch(update) operation

    console.log(req.body)
    
    const finduser = database.find((user) => user.email == req.body.email);

    Object.assign(finduser,req.body)
    res.send('data updated successfully')
})



app.listen(4000,()=>{    // listening server 
    console.log('i am listening port 4000')
})