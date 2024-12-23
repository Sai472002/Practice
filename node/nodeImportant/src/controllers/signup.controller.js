const signup = require("../models/signup.model");
const PassGen = require("../utils/passgen");
const bcrypt = require("bcrypt");
const ssendMail = require("../utils/mailsend")
const { tokenGeneration } = require("../middlewares/authToken")

// user registration usingpost method
const SignupPost = async (req, res) => {

  try {

    let { name,email } = req.body;
    const check = await signup.findOne({ email });
    if (check) {
      return res.json({ Message: "email already exist" });
    }
    
    let pass = PassGen(8);
    let encPass = await bcrypt.hash(pass, 10);
    let data ={
      ...req.body,
      password : encPass,
      created:"success"
    }

    const userdata = await signup.create(data);
    await ssendMail(name,email,pass);
    await res.json({
      userdata,
      encPass,
      message: "created",
    });

  } catch (error) {
    res.json({
      Error: error,
    });
  }
};

// login validation using post method
const login = async(req,res) =>{
  try {
    const {email,password} = req.body;
    const checkmail = await signup.findOne({email})
    if(!checkmail){return res.status(404).json({message : "Invalid email"})}
    const checkpass = await bcrypt.compare(password,checkmail.password);
    if(!checkpass){return res.status(404).json({message : "Invalid password"})}
    let token = tokenGeneration(checkmail.userId);
    console.log("test",token);
    
    res.json({
      checkmail,
      token,
      message:"login successfull",

    })
    
  } catch (error) {
    res.json({
      message:`error occured ${error}`
    })
    
  }
}

module.exports = {
  SignupPost,
  login
};
