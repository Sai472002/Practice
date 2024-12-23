const jwt = require("jsonwebtoken");
const signup = require("../models/register.model")

const tokenGen = (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_KEY, {expiresIn: "1h"});
  return token;
};

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(404).json({Message : "You have to be logged in to create account"});
  }
  const pureToken = token.split(" ")[1];
  try {
    let payload = jwt.verify(pureToken,process.env.JWT_KEY);
    // console.log("data : ",payload.id)
    
    let checkUser = await signup.findOne({userId:payload.id})
    if(!checkUser){
        return res.status(404).json({message : "user not found"})
    }
    req.userId = checkUser.userId;
    
    next();
    
  } catch (error) {
    res.json({message : `error : ${error}`})
    
  }
};

module.exports = {
  tokenGen,
  verifyToken
};
