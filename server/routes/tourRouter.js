const express = require("express");
const tourController = require("./../controllers/tourController");
const authController = require("./../controllers/authController");
const reviewRouter = require("./reviewRouter");
const bookingController = require("./../controllers/bookingController");

const router = express.Router();

router.use("/:tourId/reviews", reviewRouter);

router
  .route("/top-5-cheap")
  .get(tourController.getTopCheapFive, tourController.getAllTours);

router.route("/tours-status").get(tourController.getTourStats);
router
  .route("/monthly-plan/:year")
  .get(
    authController.protect,
    authController.restrictTo("admin", "lead-guide", "guide"),
    tourController.getMonthlyPlan
  );

router
  .route("/tours-within/:distance/center/:latlng/unit/:unit")
  .get(tourController.getToursWithin);
router
  .route("/distances/:latlng/unit/:unit")
  .get(tourController.getTourDistance);

router
  .route("/")
  // authController.protect,
  .get(bookingController.createBookingCheckout, tourController.getAllTours)
  .post(
    authController.protect,
    authController.restrictTo("admin", "lead-guide"),
    tourController.createTour
  );

router
  .route("/tour/:slug")
  .get(authController.protect, tourController.getTourBySLug);

router.use(authController.protect);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(
    authController.restrictTo("admin", "lead-guide"),
    tourController.updateTour
  )
  .delete(
    authController.restrictTo("admin", "lead-guide"),
    tourController.deleteTour
  );

module.exports = router;
