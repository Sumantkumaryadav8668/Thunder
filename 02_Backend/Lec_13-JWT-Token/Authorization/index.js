import express from "express"
import mongoose from "mongoose";
import User from "./UserSchema.js"
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bycrypt from "bcrypt"      // use for hashing password 

const App = express()

await mongoose.connect("mongodb+srv://ersumantkumaryadav8668_db_user:blxQFnEw20Chj5RL@cluster0.uhjkb71.mongodb.net/LearnAuth")
App.use(express.json())
App.use(cookieParser())

App.post("/signup",async(req,res)=>{

                // patch all info from body
    const {name,age,email,password} = req.body;

    const existingUser = await User.findOne({ email });
                  // check email existing or not
    if (existingUser) {
        return res.status(400).json(
            "Email already exists. Try a different email."
        );
    }

              // passwors hashing then store database
    const hashpassword = await bycrypt.hash(password,11)          
 
               // store info in database
    const user = await User.create({
        name , age , email , password:hashpassword  // key ans value ke pair
    })

                          // create token
            // present create token -- payload , secreat key(digital signature) , optinal field(expires token time)
    const token = jwt.sign(
                 // payload section (in this field not share the sencitive data)
        {        
            email : email,
            name : name
        },
        "sumant@526",        // digital signature on the our token  
                    // token exppire time section
        {
            expiresIn : "10m" 
        }
    )           

                  // communicate browser through cookies
             // present create cookie -- key , value , some info     
    res.cookie("pin", token, {   // key and value (key that means any name but value that means store the jwt.sing variable name)
        httpOnly: true,
        secure: false,
        maxAge: 10 * 60 * 1000
    });  
    
    res.json('User created successfuly')

})

App.get("/user" , async(req,res)=>{
    const { token } = req.cookies;      // in this phase all info are preasent using/through  res.cookie

    if (!token) {
        return res.status(401).json({
            message: "Token not found. Please login first."
        });
    }
       
              // verify token after user get the info
    const payload = jwt.verify(token,"sumant@526");   // all info present after verify

             // find user email based
    const user = await User.findOne({email : payload.email});
    if(user){
        res.json({
            name : user.name,
            email : user.email,
            age : user.age
        })
    }
    else{
        res.json("user is not found");
    }         
})

App.post("/login",async(req,res)=>{
    const {email,password} = req.body

    const user = await User.findOne({email:email});

    if(user){

        const matchpassword = await bycrypt.compare(password,user.password)
        if(matchpassword){
                        // create token
            const token = jwt.sign(
                    // payload section (in this field not share the sencitive data)
                {        
                    email : email,
                    name : user.name
                },
                "sumant@526",        // digital signature on the our token  
                        // token exppire time section
                {
                    expiresIn : "10m" 
                }
            )           

                    // communicate browser through cookies
            res.cookie("token" , token,{
                httpOnly : true,
                secure : false,
                maxAge : 10*60*1000
            });

            res.json("user login successfuly")
        }
        else{
            res.json("user not found try again")
        }

    }
    else{
        res.json("user not found try again")
    }
})


App.listen(4000,()=>{
    console.log('listen port no 4000')
})