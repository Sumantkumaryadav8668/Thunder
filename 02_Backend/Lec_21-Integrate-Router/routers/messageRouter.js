import express from "express"
import { getMessage,sendMessage } from "../controllers/messageController.js"
import authUser from "../middlewares/authUser.js"

const MessageRouter = express.Router()
           // getMessage,sendMessage

MessageRouter.use(authUser)           

MessageRouter.post("/",sendMessage)
MessageRouter.get("/:chatId",getMessage)
MessageRouter.post("/:chatId",sendMessage)         


export default MessageRouter