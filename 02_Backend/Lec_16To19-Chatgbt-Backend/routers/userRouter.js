// create some feature for user -> signup , login , profile , logout

import express from "express"
import { signup,login,logout,profile,deleteAccount } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";


const userRouter = express.Router();       // router create this line

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/logout", authUser, logout);
userRouter.get("/profile",authUser, profile)
userRouter.delete("/delete",authUser, deleteAccount)

export default userRouter;
