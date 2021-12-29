const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth.controllers");
const auth = require("../Middleware/auth.middleware");

router.post("/login_google", authController.loginGoogle);
router.post("/update_department", auth, authController.updateDepartment);

module.exports = router;