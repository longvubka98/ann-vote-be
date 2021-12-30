const express = require("express");
const router = express.Router();
const awardController = require("../Controllers/award.controllers");
const auth = require("../Middleware/auth.middleware");
const isAdmin = require("../Middleware/isAdmin.middleware");

router.get("/get_list", auth, awardController.getList);
router.post("/create", auth, isAdmin, awardController.create);
router.post("/update/:id", auth, isAdmin, awardController.update);
router.delete("/delete/:id", auth, isAdmin, awardController.delete);

module.exports = router;