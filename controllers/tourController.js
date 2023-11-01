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
