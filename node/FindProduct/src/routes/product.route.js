const express = require("express");
const { verifyToken } = require("../middlewares/authtoken");
const prodController = require("../controllers/product.contrtoller")
const router = express.Router();

router.use(verifyToken)
router
.route("/product")
.post(prodController.postProduct)
.get(prodController.findData)
.put(prodController.updatebyid)

router.get("/getproductbyquery",verifyToken,prodController.findDataByQuery)
router.get("/getfindbyid",verifyToken,prodController.getFindById)
router.put("/updateall",verifyToken,prodController.updateall)


router.delete("/delete",verifyToken,prodController.deleteid)
router.delete("/deleteone",verifyToken,prodController.deleteoneid)
router.delete("/deleteall",verifyToken,prodController.deleteall)



module.exports = router