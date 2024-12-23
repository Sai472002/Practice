const mongoose = require("mongoose");
const { v4 } = require("uuid");


const RegisterSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    userName:{
        type:String,

    },
    email:{
        type:String,

    },
    number:{
        type:Number,

    },
    userId:{
        type:String,
        default:v4
    }


},{timestamps:true})

const Register = mongoose.model("practice",RegisterSchema)

module.exports = Register;