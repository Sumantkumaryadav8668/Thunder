import Chat from "../model/chatSchema.js";
import Message from "../model/messageSchema.js";
import mongoose from "mongoose";


export const getMessage = async(req,res)=>{
    try{

        const {chatId} = req.params 
                   // varify user chatId based this chat is your or not
        const chat = await Chat.findOne({_id:chatId , userId:req.user._id})
        if(!chat){
            return res.status(400).json({
                message: "chat is not found"
            })
        }
                    // find the all messages
        const message = await Message.findOne({
            chatId:chatId
        }).sort({updatedAt:1})
        
                  // send the all sms
        res.status(200).json({
            message:"your message is here",
            message
        })          

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const sendMessage = async(req,res)=>{
    try{

        const {chatId} = req.params
        const {content,model} = req.body

        if(!content || content.trim() === ""){
            return res.status(400).json({
                message:"you didn't send any message"
            })
        }

        let chat;
            // 2. Existing chat case
        if (chatId) {
            // Check valid MongoDB ObjectId
            if (!mongoose.Types.ObjectId.isValid(chatId)) {
                return res.status(400).json({
                message: "Invalid chat id"
                });
            }

            chat = await Chat.findOne({
                _id: chatId,
                userId: req.user._id
            });

            if (!chat) {
                return res.status(404).json({
                message: "Chat not found"
                });
            }
        }

        // 3. New chat case
        else {
            if (!model) {
                return res.status(400).json({
                message: "Model is required for new chat"
                });
            }

            chat = await Chat.create({
                userId: req.user._id,
                model,
                topic: content.trim().slice(0, 30)
            });
        }

                  // store the sms form user side in the database
        const userMessage = await Message.create({
            userId:req.user._id,
            chatId:chat._id,
            role:"user",
            content:content.trim()
        })

                   // contant send the AI and reply
        const dummyAI = "mai thik hu tum kaise ho"

                 // store the sms form assistant side in the database
        const assistantMessage = await Message.create({
            userId:req.user._id,
            chatId:chat._id,
            role:"assistant",
            content:dummyAI
        })

        // if (chat.topic === "New Chat") {
        //     chat.topic = content.trim().slice(0, 40);
        // }

        // await chat.save();
        
        res.status(201).json({
            message: "message send successfuly",
            chatId: chat._id,
            userMessage,
            assistantMessage
        })
        
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message: "Internal server error"
        })
    }
}