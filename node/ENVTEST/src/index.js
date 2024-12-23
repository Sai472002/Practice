const nan = require("express");
const app = nan();
const port = 2000;
require("dotenv").config();

const mongoose = require("mongoose");
const Connect = require("../src/config/connection")
const router = require("../src/routes/register.route")
const accrouter = require("../src/routes/account.route")
app.use(nan.json())
Connect()
app.use(router)
app.use(accrouter)
app.listen(port, () =>{
    console.log("server Coonected");
    
});
