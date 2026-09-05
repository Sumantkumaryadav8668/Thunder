
import mongoose, { Types } from "mongoose";

    // {name, age, city, accountNumber,accounttype,balance}
const UserSchema =new mongoose.Schema({
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
    city:{
        type : String,
        minlength : 3,
        maxlength : 20,
        trim : true
    },
    accountNumber:{
        type : Number,
        unique : true
    },
    accountType:{
        type: String,
        enum: ["current", "saving"],
        default: "saving"
    },
    balance :{
        type : Number,
        min : 0
    }
})

const Customer = mongoose.model("Customer",UserSchema);

export default Customer;