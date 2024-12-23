const express = require("express");
const router = express.Router();
const controller = require("../controllers/account.controller");
const { verifyToken } = require("../middlewares/authtoken");

router.post("/account",verifyToken,controller.accController);

module.exports=router