const express = require("express");
const router = express.Router();
const singleupload = require("../middlewares/multer")
const fileController = require("../controllers/file.controller")
const {verifyToken} = require("../middlewares/authtoken")
// create storage dest and file name


router.use(verifyToken)

router
.route("/file")
.post(singleupload,fileController.createFile)
.get(fileController.getfile)
.put(singleupload,fileController.editfile)
.delete(fileController.deleteFile)

router.get("/getfileId",fileController.getFileId)

module.exports = router;