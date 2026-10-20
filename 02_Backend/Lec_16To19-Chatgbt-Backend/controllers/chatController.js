import Chat from "../model/chatSchema.js"
import Message from "../model/messageSchema.js"

 // chatCreate,getRecentChar,getSingleChat,deleteChat
 // req.user ke andat sabhi info present hai

export const chatCreate = async (req, res)=>{
    try{

        const {model} = req.body
        if(!model){
            return res.status(400).json({
                message: "model name is missing"
            })
        }
        // chat created
        const chatCreate = await Chat.create({
            userId: req.user._id,
            model,
        })


                // response
        res.status(201).json({
            message: "your chat created",
            userId: req.user._id,
            chatId: chatCreate._id,
            model
        })        
        
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export const getRecentChat = async(req,res)=>{
    try{

        const chats = await Chat.find({userId:req.user_Id}).select("topic updatedAt").sort({updatedAt:-1}).limit(15)

        res.status(200).json({
            message:"your recentaly 15 chats",
            chats
        })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export const getSingleChat = async(req,res)=>{
    try{

        const {chatId} = req.params

        const chat = await Chat.findOne({_id:chatId, userId:req.user._id})
        console.log(chat)
        if(!chat){
            return res.status(403).json({
                message: "Sorry data is not found"
            })
        }

        res.status(200).json({
            chatId:chat._id,
            userId: chat.userId,
            topic: chat.topic,
            model: chat.model
        })


    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}


export const deleteChat = async(req,res)=>{
    try{

        const {chatId} = req.params

        const chat = Chat.findOne({_id:chatId, userId:req.user_Id})
        if(!chat){
            return res.status(403).json({
                message: "you are not allow this chat"
            })
        }

        await Message.deleteMany({    //message deleted perticular chat Id
            chatId: chat._id
        })

        await Chat.deleteOne({   // chat deleted
            _id:chatId
        })

        res.status(200).json({
            message: "your chat is delete"
        })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}