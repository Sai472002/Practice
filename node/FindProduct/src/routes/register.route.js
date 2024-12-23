const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controllers/register.controller")
router.post("/register",controller.registerFunc)
router.post("/login",controller.loginFunc)

module.exports=router