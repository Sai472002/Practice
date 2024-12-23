const express = require("express")

const router = express.Router()
const Controller = require("../Controllers/Register.controller")

router.post("/postreg",Controller.RegController)

module.exports = router