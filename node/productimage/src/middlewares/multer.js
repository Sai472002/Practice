const multer = require("multer")
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

const singleupload = upload.single("uploadfile");

module.exports = singleupload