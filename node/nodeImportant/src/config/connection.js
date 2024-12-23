const mongoose = require("mongoose");
const Connection = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected");
    
  } catch (error) {
    console.log(`Connection error ${error.message}`);
    
  }
};

module.exports=Connection;
