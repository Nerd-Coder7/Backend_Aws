const express = require("express")
const router = express.Router()
const controller = require("../controller/case_studies")
router.post("/create_case_studies",controller.create)
router.get("/get_case_studies",controller.getdata)
router.delete("/delete_case_studies",controller.delete)
router.put("/update_case_studies",controller.update)
module.exports=router