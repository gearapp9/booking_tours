const ApiFeatures = require("../utils/ApiFeatures");
const Tour = require("./../models/tourModel");

//alias middleware to get top 5 cheap tours
exports.getTopCheapFive = (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "name,price,ratingsAverage,summary,difficulty";
  next();
};

exports.getAllTours = async (req, res, next) => {
  const features = new ApiFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .selectFields()
    .page();

  try {
    const tours = await features.query;

    res.status(200).json({
      status: "success",
      resuls: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      stauts: "failed",
      message: error,
    });
  }
};

exports.getTour = async (req, res, next) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      stauts: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      stauts: "success",
      data: {
        newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.updateTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

exports.deleteTour = async (req, res, next) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      stauts: "success",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};

//getting tours status that have ratingsAverage greater
exports.getTourStats = async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};


//getting how many tours are there for every (tourly) month of a giving year
exports.getMonthlyPlan = async (req, res, next) => {
  const year = req.params.year * 1;
  try {
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
        $group:{
          _id:{$month:"$startDates"},
          numTours:{$sum:1},
          tours:{$push:"$name"}
        }
      },
      {
        $addFields:{month:"$_id"}
      },
      {
        $project:{
          _id:0
        }
      },
      {
        $sort:{numTours:-1}
      },
      {
        $limit:5
      }
    ]);

    res.status(200).json({
      status: "success",
      results:plan.length,
      data: {
        plan,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error,
    });
  }
};
