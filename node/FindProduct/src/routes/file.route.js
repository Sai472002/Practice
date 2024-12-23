const express = require("express");
const router = express.Router();
const fileController = require("../controllers/file.controller")
const {verifyToken} = require("../middlewares/authtoken")
const multer = require("multer");
// create storage dest and file name
const storage = multer.diskStorage({
    destination:"public/profile/",
    filename:(req,file,cb) => {
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({
    storage
})

// type of upload

const singleupload = upload.single("uploadfile")

router.use(verifyToken)

router
.route("/file")
.post(singleupload,fileController.createFile)
.get(fileController.getfile)
.put(singleupload,fileController.editfile)
.delete(fileController.deleteFile)

router.get("/getfileId",fileController.getFileId)

module.exports = router;