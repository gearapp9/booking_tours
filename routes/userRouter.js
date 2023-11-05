const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/").get(userController.getAllUser);
router.route("/signin").post(authController.singIn);
router.route("/signup").post(authController.signUp);
router.route("/forgotpassword").post(authController.forgotPassword);
router.route("/resetpassword/:token").post(authController.resetPassword);

module.exports = router;
