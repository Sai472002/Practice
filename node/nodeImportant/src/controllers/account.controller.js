const accountModel = require("../models/account.model");


const createAccount = async(req,res) => {
    try {
        let userId = req.userId
        let data ={
            ...req.body,
            userId:userId
        }
        
        const accdata = await accountModel.create(data)
        res.json({accdata,message:"account created"})
        
    } catch (error) {
        res.json({Error:error})
    }
}

const findData = async(req,res)=>{
    try {
        const userId = req.userId
        const data = await accountModel.find().sort({_id: -1})
        res.json({
            data
        })
        
    } catch (error) {
        res.json({
            Error:error
        })
        
    }

}

module.exports = {createAccount,
    findData
}