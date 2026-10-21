import dotenv from "dotenv/config";
import express from "express"
import Database from "./config/batabase.js";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter.js";
import chatRouter from "./routers/chatRouter.js";
import MessageRouter from "./routers/messageRouter.js";


const App = express();

App.use("/",(req,res)=>{
    res.json("hello sir")
})

App.use(express.json());
App.use(cookieParser());
        // Router access line
App.use("/user" ,userRouter);   // user based path call
App.use("/chat",chatRouter)    // used chat based path
App.use("/sms", MessageRouter);    // message based path call 







const server = async ()=>{
    try{
        await Database();
        App.listen(process.env.PORT_NO,()=>{
            console.log(`i'm listen port number ${process.env.PORT_NO}`)
        })
    }
    catch(error){
        console.log("database is not connected")
        console.log(error.message);
    }
}

server()