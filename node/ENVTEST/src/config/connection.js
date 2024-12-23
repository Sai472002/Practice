const mongoose = require("mongoose");

const Connect = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("MONGO CONECTED");
        
    } catch (error) {
        console.log("error:",error);
        
        
    }
}
module.exports = Connect