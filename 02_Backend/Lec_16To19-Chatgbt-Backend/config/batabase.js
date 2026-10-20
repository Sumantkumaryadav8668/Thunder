import mongoose from "mongoose";

const Database = async ()=> {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("databse is connected ")
}

export default Database;