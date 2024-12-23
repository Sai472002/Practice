const mongoose = require("mongoose");

const connection = () =>{
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb Connection successfull");
        
    } catch (error) {
        console.log("Connection Failure : ",error);
        
        
    }
}
module.exports= connection