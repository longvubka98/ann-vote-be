const express = require("express");
const router = express.Router();
const departmentController = require("../Controllers/department.controllers");
const auth = require("../Middleware/auth.middleware");

router.post("/get_list", auth, departmentController.getList);
router.post("/create", departmentController.create);
router.post("/update/:id", departmentController.update);
router.post("/delete/:id", departmentController.delete);

module.exports = router;