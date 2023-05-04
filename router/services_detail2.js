const express = require("express")
const router = express.Router()
const controller = require("../controller/services_detail2")
router.post("/create_services_detail2",controller.create)
router.get("/get_services_detail2",controller.getdata)
router.put("/update_services_detail2",controller.update)
router.delete("/delete_services_detail2",controller.delete)
module.exports = router