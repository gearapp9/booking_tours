const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

const filteredFields = (obj, ...fields) => {
  let newObj = {};
  Object.keys(obj).forEach((el) => {
    if (fields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    staus: "seccess",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {

  //throwing an error if user wanted to updated his password on this handler
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    );
  }

  //filtering the body to only name an email
  const allowBodyValues = filteredFields(req, body, "name", "email");

  const updatedUSer = await User.findByIdAndUpdate(
    req.user.id,
    allowBodyValues,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUSer,
    },
  });
});


//setting the user to inactive
exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });


  res.status(204).json({
    status: 'success',
    data: null
  });
});


