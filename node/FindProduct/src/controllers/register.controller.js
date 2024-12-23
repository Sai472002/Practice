const reg = require("../models/register.model");
const passGen = require("../utils/passgen");
const bcrypt = require("bcrypt");
const { tokenGen } = require("../middlewares/authtoken");
const sendMail = require("../utils/mailsend");
const registerFunc = async (req, res) => {
  try {
    let { userName, email } = req.body;
    const checkmail = await reg.findOne({ email });
    if (checkmail) {
      return res.json({ message: "email is already registered" });
    }
    let pass = passGen(8);
    let encpass = await bcrypt.hash(pass, 10);
    let data = {
      ...req.body,
      password: encpass,
    };

    const userdata = await reg.create(data);
    await sendMail(userName, email, pass);
    await res.json({
      userdata,
      created: "success",
    });
  } catch (error) {
    res.json({
      Error: error,
    });
  }
};

const loginFunc = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await reg.findOne({email});
    if(!checkEmail)return res.status(404).json({message:"invalid email"})
    const checkpass = await bcrypt.compare(password,checkEmail.password);
    if(!checkpass)return res.status(404).json({message:"invalid password"})
      
    let token = tokenGen(checkEmail.userId)
    console.log(token);
    
    res.json({
        checkEmail,
        token,
        message:"Login successfull"
    })
    
  } catch (error) {
    res.json({
        Error:error
    })
  }
};

module.exports = {
  registerFunc,
  loginFunc
};
