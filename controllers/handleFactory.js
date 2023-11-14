const catchAsync = require("./../utils/catchAsync");
const ApiFeatures = require("./../utils/ApiFeatures");

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new ApiFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .selectFields()
      .page();

    // const doc = await features.query.explain()
    const doc = await features.query;

    res.status(200).json({
      status: "success",
      resuls: doc.length,
      data: {
        doc,
      },
    });
  });

exports.getOne = (Model, options) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    //chaning quey for possible population
    if (options) query = query.populate(options);
    const doc = await query;

    if (!doc)
      return next(new AppError("can't find a document with that ID", 404));

    res.status(200).json({
      stauts: "success",
      data: {
        doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDoc = await Model.create(req.body);
    res.status(201).json({
      stauts: "success",
      data: {
        newDoc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc)
      return next(new AppError("can't find a document with that ID", 404));

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc)
      return next(new AppError("can't find a document with that ID", 404));

    res.status(204).json({
      stauts: "success",
    });
  });
