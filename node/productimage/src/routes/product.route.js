const express = require("express");
const { verifyToken } = require("../middlewares/authtoken");
const prodController = require("../controllers/product.contrtoller")
const singleupload = require("../middlewares/multer")
const router = express.Router();

router.use(verifyToken)
router
.route("/product")
.post(singleupload,prodController.postProduct)
.get(prodController.findData)
.put(singleupload,prodController.updatebyid)

router.get("/getproductbyquery",verifyToken,prodController.findDataByQuery)
router.get("/getfindbyid",verifyToken,prodController.getFindById)
router.put("/updateall",verifyToken,prodController.updateall)


router.delete("/delete",verifyToken,prodController.deleteid)
router.delete("/deleteone",verifyToken,prodController.deleteoneid)
router.delete("/deleteall",verifyToken,prodController.deleteall)

router.post("/postproductimage",verifyToken,prodController.postProductwithImage)
router.put("/postproductimage",verifyToken,prodController.editProductwithImage)


module.exports = router