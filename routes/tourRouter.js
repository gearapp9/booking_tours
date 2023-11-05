const express = require("express");
const tourController = require("./../controllers/tourController");
const authController = require("./../controllers/authController");

const router = express.Router();
router
  .route("/top-5-cheap")
  .get(tourController.getTopCheapFive, tourController.getAllTours);

router.route("/tours-status").get(tourController.getTourStats);
router.route("/monthly-plan/:year").get(tourController.getMonthlyPlan);

router
  .route("/")
  .get(authController.protect,tourController.getAllTours)
  .post(tourController.createTour);


router
  .route("/:id")
  .get(tourController.getTour)
  .post(tourController.createTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
