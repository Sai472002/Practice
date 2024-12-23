const mongoose = require("mongoose");
const { v4 } = require("uuid")

const registerSchema = new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    _id:{
        type:String,
        default:v4
    },
    userId:{
        type:String,
        default:v4
    }
});

const reg = mongoose.model("Auth",registerSchema);

module.exports= reg;

