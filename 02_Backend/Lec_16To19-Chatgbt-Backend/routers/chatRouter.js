import express from "express"
import authUser from "../middlewares/authUser.js"
import { chatCreate,getRecentChat,getSingleChat,deleteChat } from "../controllers/chatController.js"

const chatRouter = express.Router()

        // check user authentication or not
chatRouter.use(authUser)        

chatRouter.post("/chatCreate",chatCreate)
chatRouter.get("/getRecentChat",getRecentChat)
chatRouter.get("/:chatId",getSingleChat)
chatRouter.delete("/:chatId",deleteChat)

export default chatRouter