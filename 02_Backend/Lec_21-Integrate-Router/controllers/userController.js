import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../model/userSchema.js"
import { signupValidator,loginValidator } from "../validators/userValidators.js"
import Chat from "../model/chatSchema.js"
import Message from "../model/messageSchema.js"


const createToken = (id,email)=>{
    if(!process.env.JWT_SIGNATURE){
        throw new Error("jwt secret token is not present")
    }
    const token = jwt.sign({id,email},process.env.JWT_SIGNATURE,{expiresIn:"1h"})
    return token;
}

const optionalCookies = {  // use cookies
    httpOnly : true,
    secure : false,
    maxAge : 60*60*1000
}


export const signup = async (req,res)=>{
    try{
                 // check validator input data or not
        const valiedUser = signupValidator.safeParse(req.body)

        if (!valiedUser.success){
            return res.status(400).json({
                message: valiedUser.error.issues[0].message
            })
        }

        const {name,age,email,password} = valiedUser.data;

        const userexist = await User.findOne({email})
        if(userexist){  // user exist or not
            return res.status(409).json({
                message: "user already exist"
            })
        }

        const hashpassword = await bcrypt.hash(password,11)

        const user = await User.create({     // store info in database
            name,age,email,password:hashpassword
        })

        const token = createToken(user._id,email);

        res.cookie("tokenName",token,optionalCookies)

        res.status(201).json({
            message : "User create successfully",
            name,age,email
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
    }
    
}


export const login = async (req,res)=>{
    try{
        // check valied input data or not from user side
        const valiedUser = loginValidator.safeParse(req.body)

        if(!valiedUser.success){
            return res.status(400).json({
                message: valiedUser.error.issues[0].message
            })
        }

        const {email,password} = valiedUser.data
  
                // token varify
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }

               // password matching
        const varifyToken = await bcrypt.compare(password,user.password)

        if(!varifyToken){
            return res.status(404).json({
                message: "Invailed password"
            })
        }   
        
              // token create 
        const token = createToken(user._id,email);
        res.cookie("tokenName",token,optionalCookies)

        res.status(201).json({
            message : "User login successfully",
            name : user.name,
            email : user.email,

        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }

}


export const logout = async (req,res)=>{

    res.clearCookie("tokenName",{
        httpOnly : true,
        secure : false
    })

    res.status(200).json({
        message : "User logout successfully"
    })
}


// export const profile = async (req,res)=>{   // public profile show
//     try{
//         const {email} = req.body
//         if(!email){
//              return res.status(400).json({
//                 message: "Invalid email"
//             })
//         }

//         const user = User.findOne({email})
//         if(!user){
//             return res.status(404).json({
//                 message: "User not fount"
//             })
//         }

//         res.status(200).json({
//             name: user.name,
//             email : user.email,
//             age: user.age
//         })
//     }
//     catch(error){
//         console.log(error)
//         res.status(500).json({
//             message: "Internal server error"
//         })
//     }
// }


export const profile = async(req,res)=>{
           // user profile info send 
           // communicate the database
    try{
        
        res.status(200).json({
           name: req.user.name,    // jo auth me database se access kar ke jis variable me store kiya tha yahi hoga
           email : req.user.email,
           age: req.user.age 
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export const deleteAccount = async(req,res)=>{
    try{

        const userId = req.user._id;   // find the user based on userId

        const chats = await Chat.find({ userId }).select("_id");  // find all chat of user based on the userId

        // const chatIds = chats.map((chat) => chat._id);    // all chats are present of user in array

        await Message.deleteMany({        // all messages deleted (ham 3 tarike se isko find kar sakte hai delete ke liye)
            chatId: { $in: chats },          // delete message ham is se bhi kar sakte hai 

            // chatId: { $in: chatIds }       // delete message ham is se bhi kar sakte hai 
            // userId               // delete message ham direct userId se bhi kar sakte hai 
        });

        await Chat.deleteMany({         // all chats deleted
            userId
        });

        await User.deleteOne({      // user account deleted
            _id: userId
        });

        res.clearCookie("tokenName", {
            httpOnly: true,
            secure: false
        });

        res.status(200).json({
            message: "Account deleted successfully"
        });

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}