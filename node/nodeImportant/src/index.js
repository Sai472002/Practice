require('dotenv').config();
const express = require("express")
const app =  express()
const router = require("../src/routes/signup.route")
const accrouter = require("../src/routes/account.route")

const port = 4500;
app.use(express.json())
const connection =require("../src/config/connection")
connection();

app.use(router);
app.use(accrouter);
app.listen(port,()=>{
  console.log("connection successful");
  
});
