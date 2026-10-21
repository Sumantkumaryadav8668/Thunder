import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";


const authUser = async(req,res,next)=>{

    try{
        const {tokenName } = req.cookies;

        if(!tokenName){
            return res.status(401).json({
                message: "You need to kindly login"
            })
        }

        const varifyToken = jwt.verify(tokenName ,process.env.JWT_SIGNATURE)

        const userfind = await User.findById(varifyToken.id)
        if(!userfind){
            return res.status(404).json({
                message: "User is not exist"
            })
        }

        req.user = userfind
        next();

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export default authUser