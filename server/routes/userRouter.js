const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.route("/signin").post(authController.singIn);
router.route("/signout").get(authController.signOut);
router.route("/signup").post(authController.signUp);


router.route("/forgotpassword").post(authController.forgotPassword);
router.route("/resetpassword/:token").patch(authController.resetPassword);

router.use(authController.protect);

router.patch("/updatepass", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);

router.patch("/updateme", userController.updateMe);
router.delete("/deleteme", userController.deleteMe);

router.use(authController.restrictTo("admin"));

router.route("/").get(userController.getAll).post(userController.createUser);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
