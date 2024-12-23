const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    userId:{
        type:String
    },
    originalname:{
        type:String
    },
    filename:{
        type:String
    },
    destination:{
        type:String
    },

},{timestamps:true})

const fileColl = mongoose.model("file",fileSchema)

module.exports = fileColl;