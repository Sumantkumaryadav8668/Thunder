
import express from "express"
import fs from "fs"

const app = express()
app.use(express.json())

let Path = "./Database.txt"

function readDB(){     // read the data from the database
    let data = fs.readFileSync(Path,'utf-8')     // data read from the database
    return JSON.parse(data)    // convert string to JS object
}

function writeDB(data){    // write the data in the database
    fs.writeFileSync(Path,JSON.stringify(data,null,2))   // array me aaye huye data ko JSON me convert karta hai
}

app.get("/",(req,res)=>{      // get home page
    
    res.send('welcome to home page')
})

app.get("/user",(req,res)=>{      // show the all users in present the database
    let account = readDB()
    if(account.length == 0) res.send('database is empty')
    
    else res.json(account);
})

app.get("/user/:account",(req,res)=>{      // show the data id based 
    let accountNo = req.params.account;
    let account = readDB()

    if(account.length == 0) res.send('database is empty')
    else{
        let user = account.find((a)=> a.account == accountNo)
        res.json(user);
    }
})

app.delete("/user/:account",(req,res)=>{      // delete the user from the database
    let accountNo = req.params.account;
    let account = readDB()

    if(account.length == 0) res.send('database is empty')

    else{
        let user = account.filter((a)=> a.account != accountNo)
        writeDB(user);
        res.send('user data deleted successfully')
    }    

})

app.post("/user",(req,res)=>{      // create the new user 
    let newuser = req.body;
    let account = readDB()

    account.push(newuser)
    writeDB(account)
    res.json(newuser);
})

app.patch("/user",(req,res)=>{      // show the data id based 
    let accountNo = req.body.account;
    let newbalance = req.body.balance;
    let account = readDB()

    if(account.length == 0) res.send('database is empty')
    else{
        let user = account.find((a)=> a.account == accountNo)
        user.balance+= newbalance;
        writeDB(account)
        res.send('data create seccessfully')
    }
   
})




app.listen(5000,()=>{
    console.log("i am listen port number 5000")
})