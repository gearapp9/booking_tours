const ApiFeatures = require("../utils/ApiFeatures");
const AppError = require("../utils/AppError");
const Tour = require("./../models/tourModel");
const catchAsync = require("./../utils/catchAsync");
const handleFactory = require("./handleFactory");

//alias middleware to get top 5 cheap tours
exports.getTopCheapFive = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,summary,difficulty";
  next();
};

exports.getAllTours = handleFactory.getAll(Tour);
//also populating review in get tour using virtual property (view tourModel)
exports.getTour = handleFactory.getOne(Tour, { path: "reviews" });
exports.createTour = handleFactory.getOne(Tour);
exports.updateTour = handleFactory.updateOne(Tour);
exports.deleteTour = handleFactory.deleteOne(Tour);

//getting tours status that have ratingsAverage greater
exports.getTourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: "$difficulty" },
        numTours: { $sum: 1 },
        numRating: { $sum: "$ratingsQuantity" },
        avgRating: { $avg: "$ratingsAverage" },
        avgPrice: { $avg: "$price" },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    {
      $sort: { avgPrice: -1 },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      stats,
    },
  });
});

//getting how many tours are there for every (tourly) month of a giving year
exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = req.params.year * 1;

  const plan = await Tour.aggregate([
    //doconstructing the startdates array for the every doc
    //that way we can select (match) all the months for all tours
    {
      $unwind: "$startDates",
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: "$startDates" },
        numTours: { $sum: 1 },
        tours: { $push: "$name" },
      },
    },
    {
      $addFields: { month: "$_id" },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: { numTours: -1 },
    },
    {
      $limit: 5,
    },
  ]);

  res.status(200).json({
    status: "success",
    results: plan.length,
    data: {
      plan,
    },
  });
});

// tours-within/:distance/center/:latlng/unit/:unit

exports.getToursWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;

  const [lat, lng] = latlng.split(",");

  //distance in mile or in kilo
  const radius = unit === "mi" ? distance / 3963.2 : distance / 6378.1;

  if (!lat || !lng) {
    return next(
      new AppError(
        "Please provide latitutr and longitude in the format lat,lng.",
        400
      )
    );
  }

  const toursWithIn = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    status: "success",
    results: toursWithIn.length,
    data: {
      toursWithIn,
    },
  });
});

exports.getTourDistance = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;

  const [lat, lng] = latlng.split(",");

  //for converting the result data from meters to miles or to kilo
  const multiplier = unit === "mi" ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    return next(
      new AppError(
        "Please provide latitutr and longitude in the format lat,lng.",
        400
      )
    );
  }

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [lng * 1, lat * 1],
        },
        distanceField:"distance",
        distanceMultiplier:multiplier
      },
      
    },
    {
      $project:{
        distance:1,
        name:1
      }
    }
  ]);

  res.status(200).json({
    status: "success",
    results: distances.length,
    data: {
      distances,
    },
  });

});
