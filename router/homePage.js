const express = require("express")
const router = express.Router()
const homePage = require("../controller/homepage")

router.post("/createhomepage",homePage.createhomepage)
router.get("/gethomepage",homePage.gethomepage)
router.put("/update_homepage",homePage.update_homepage)
router.delete("/delete",homePage.delete)

router.post("/hireShopify",homePage.hireShopify)
router.post("/contactAs",homePage.contactAs)
module.exports = router