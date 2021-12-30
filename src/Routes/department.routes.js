const express = require("express");
const router = express.Router();
const departmentController = require("../Controllers/department.controllers");
const auth = require("../Middleware/auth.middleware");
const isAdmin = require("../Middleware/isAdmin.middleware");

router.get("/get_list", auth, departmentController.getList);
router.post("/create", auth, isAdmin, departmentController.create);
router.post("/update/:id", auth, isAdmin, departmentController.update);
router.delete("/delete/:id", auth, isAdmin, departmentController.delete);

module.exports = router;