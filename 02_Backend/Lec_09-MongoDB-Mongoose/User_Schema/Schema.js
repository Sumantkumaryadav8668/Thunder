
import mongoose, { Types } from "mongoose";

    // {name, age, city, account}
const UserSchema = mongoose.Schema({
    name:{
        Types : String,
        MinLength : 3,
        MaxLength : 20,
        trim : true,
        required : true
    },
    age:{
        types : Number,
        min : 18,
        max : 100
    },
    city:{
        types : String,
        MinLength : 3,
        MaxLength : 20,
        trim : true
    },
    account:{
        types : Number,
        min : 0,
        required : true
    }
})

const Customer = mongoose.model("Customer",UserSchema);

export default Customer;