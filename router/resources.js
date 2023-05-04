const express = require("express")
const router = express.Router()
const controller = require("../controller/resources")
router.post("/create_resources",controller.create)
router.get("/get_resources",controller.getdata)
router.delete("/delete_resources",controller.delete)
router.put("/update_resources",controller.update)
module.exports=router