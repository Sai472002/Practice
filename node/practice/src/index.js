require("dotenv").config()
const express = require("express");
const app = express();
const port = 2000;
const connection = require("./Config/Connection")
const router = require("./Routes/Register.route")
app.use(express.json())
connection();
app.use(router)
app.listen(port,() =>{
    console.log("Server Connected")
})



