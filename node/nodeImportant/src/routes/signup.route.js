const express = require("express")
const router = express.Router();
const signupf = require("../controllers/signup.controller")
router.post("/signup",signupf.SignupPost)
router.post("/login",signupf.login)

module.exports = router