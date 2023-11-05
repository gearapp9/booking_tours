const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").get(userController.getAllUser);
router.route("/signin").post(authController.singIn);
router.route("/signup").post(authController.signUp);

module.exports = router;
