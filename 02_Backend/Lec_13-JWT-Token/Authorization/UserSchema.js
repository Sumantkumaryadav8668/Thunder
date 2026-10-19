
import mongoose, { Types } from "mongoose";

    // {name, age, city, accountNumber,accounttype,balance}
const UserSchema = new mongoose.Schema({
    name:{
        type : String,
        minlength : 3,
        maxlength : 20,
        trim : true,
        required : true
    },
    age:{
        type : Number,
        min : 18,
        max : 100
    },
    email:{
        type : String,
        unique : true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password:{
        type: String
    }
},{timestamps : true})

const User = mongoose.model("Customer",UserSchema);

export default User;