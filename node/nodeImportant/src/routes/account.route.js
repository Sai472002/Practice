const express = require("express");
const router = express.Router();
const controller = require("../controllers/account.controller")
const { verifyToken } = require("../middlewares/authToken")
router.post("/account",verifyToken,controller.createAccount);
router.get("/find",controller.findData)

module.exports = router;
