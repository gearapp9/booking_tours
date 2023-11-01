const ApiFeatures = require("../utils/ApiFeatures");
const Tour = require("./../models/tourModel");

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
