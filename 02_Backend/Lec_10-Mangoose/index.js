
import mongoose from "mongoose";
import express from "express"
import Users from "./data.js"
import Customer from "./UserSchema.js"

const app = express();

await mongoose.connect("mongodb+srv://ersumantkumaryadav8668_db_user:blxQFnEw20Chj5RL@cluster0.uhjkb71.mongodb.net/Thunder")
app.use(express.json())


app.post("/customer", async (req,res)=>{      // insert the single user
    const user = await Customer.create(req.body)
    res.json(user);
})

app.post("/customer/bulk", async (req,res)=>{      // insert the multiple users at a one time using bulk after url
    const user = await Customer.insertMany(Users)      // multiple users ko insert ke liye hame insertMany() ka user karna padega 
    res.json("Insert the multiple users in the database");
})

app.get("/customer", async (req,res)=>{      // gte all users
    const user = await Customer.find();
    res.json(user);
})

app.get("/customer/filter", async (req,res)=>{      // get all users according to filter based data
    const user = await Customer.find(req.query);
    res.json({
        message : 'find the user according the filter ',
        user : user
    })
})

// app.patch('/customer/deposite/:accountNumber', async(req,res)=>{

//     const {amount} = req.body
//     const user = await Customer.findOne({accountNumber:req.params.accountNumber})
//     user.balance+= amount
//     await user.save()

//     res.json(user)
// })

app.patch("/customer/deposite/:accountNumber", async (req, res) => {

    const { balance } = req.body;

    const user = await Customer.findOne({accountNumber: Number(req.params.accountNumber)});

    user.balance += balance;
    await user.save();
    res.json(user);
});

app.get("/customer/:accountNumber", async (req,res)=>{      // get particular user accountNumber based
    const value = req.params.accountNumber;
    const user = await Customer.findOne({accountNumber: value});
    if(user){
            res.json({
            message : 'get user this',
            user : user
        });
    }else{
        res.send('User not found')
    }
})

app.delete('/customer/:accountNumber' , async(req,res)=>{     // delete particular user accountNumber based
    const account = req.params.accountNumber;
    const user = Customer.findOneAndDelete({accountNumber:account})
    res.send("user deleted successfully")
})


app.patch('/customer/:accountNumber',async(req,res)=>{       // Update the user values 
    const {city , age} = req.body
    const user = await Customer.findOneAndUpdate({accountNumber:req.params.accountNumber},{city , age},{ new :true})

    res.json(user) 
})



app.listen(2000,()=>{
    console.log('i am listen port number 2000')
})