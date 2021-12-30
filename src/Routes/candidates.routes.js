const express = require("express");
const router = express.Router();
const candidatesController = require("../Controllers/candidates.controllers");
const auth = require("../Middleware/auth.middleware");
const isAdmin = require("../Middleware/isAdmin.middleware");

router.get("/get_list", auth, candidatesController.getList);
router.post("/create", auth, isAdmin, candidatesController.create);
router.post("/update/:id", auth, isAdmin, candidatesController.update);
router.delete("/delete/:id", auth, isAdmin, candidatesController.delete);

module.exports = router;