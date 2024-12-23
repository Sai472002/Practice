const mongoose = require("mongoose");
const{ v4 } = require("uuid")
const productSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    productName:{
        type:String

    },
    productId:{
        type:String,
        default:v4

    },
    productPrice:{
        type:Number
    },
    Warranty:{
        type:String
    },
    userId:{
        type:String
    }

},{timestamps:true});

const product = mongoose.model("products",productSchema);

module.exports=product