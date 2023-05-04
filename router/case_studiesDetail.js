const express = require("express")
const router = express.Router()
const controller = require("../controller/case_studiesDetail")
router.post("/create_case_studiesDetail",controller.create)
router.get("/get_case_studiesDetail",controller.getdata)
router.put("/update_case_studiesDetail",controller.update)
router.delete("/delete_case_studiesDetail",controller.delete)
module.exports=router