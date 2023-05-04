const express = require("express")
const router = express.Router()
const controller =  require("../controller/aboutAs")
router.post("/create_aboutas",controller.createpage)
router.get("/get_aboutas",controller.getdata)
router.delete("/delete_aboutas",controller.delete)
router.put("/update_aboutas",controller.update)
module.exports = router