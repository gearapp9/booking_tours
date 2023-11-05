const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

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
