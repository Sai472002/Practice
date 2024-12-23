const mongoose = require("mongoose")
const { v4 } = require("uuid")
const signupForm = new mongoose.Schema({
    _id:{
        type: String,
        default: v4
    },
    name :{
        type : String
    },
    email:{
        type: String,
        trim : true,
        require: true,
        unique : true
        
    },
    mobno :{
        type : Number
    },
    
    password:{
        type:String,
        require: true

    },
    userId:{
        type: String,
        default: v4
    }
})

const signup = mongoose.model("comp",signupForm)

module.exports= signup;

// {
//     "firstName":"Sai",
//     "lastName":"Dhasun",
//     "mobileNo":976482634,
//     "email": "saidhasun0407@gmail.com",
//     "password":"TLV#@F!H"
    
// }