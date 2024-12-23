const Register = require("../Models/Register.model");
const pwdgen = require("../Utils/pwdgen")
const RegController = async(req,res) =>{
    try {
        const{ email} = req.body
        let pass = pwdgen(8);
        let encpass = await bcrypt.hash(pass,10)
        console.log();
        
        let data = {
            ...req.body,
            encpass
        }
        let UserData = await Register.create(data)
        res.json({
            UserData
        })
        
    } catch (error) {
        res.json({
            Error:error
        })
        
    }

}
 module.exports ={
    RegController
 }