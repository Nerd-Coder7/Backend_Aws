const express = require("express")
const router = express.Router()
const controller =require("../controller/industrial_page")
router.post("/create_industries",controller.create)
router.get("/get_industries",controller.getdata)
router.put("/update_industries",controller.update)
router.delete("/delete_industries",controller.delete)
module.exports=router;