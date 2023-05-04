const express = require("express")
const router = express.Router()
const controller = require("../controller/services")
router.post("/createService",controller.createService)
router.get("/getService",controller.getdata)
router.delete("/delete_service",controller.delete)
router.put("/update_service",controller.update)
module.exports=router