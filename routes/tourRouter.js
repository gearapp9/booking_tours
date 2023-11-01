const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();
router
  .route("/top-5-cheap")
  .get(tourController.getTopCheapFive, tourController.getAllTours);

router.route("/").get(tourController.getAllTours);

module.exports = router;
