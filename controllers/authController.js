const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/AppError");

const singJwt = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = singJwt(newUser._id);

  res.status(200).json({
    status: "success",
    token,
    data: {
      newUser,
    },
  });
});

exports.singIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //if emailor password not defined throw an error
  if (!email || !password) {
    return next(new AppError("please provide a valid email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  //if user not defined directly throw an error not need to run the other condition
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("incorrect email or password", 401));
  }

  //creating json web token
  const token = singJwt(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  //getting token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  //check if token exists
  if (!token) {
    return next(new AppError("You are not logged in ! please log in", 401));
  }

  //check if token is valid
  const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //check if user exists
  const currentUser =await User.findById(decode.id);

  if (!currentUser) {
    return next(
      new AppError(
        "the user belonging to this token does no longer exists",
        401
      )
    );
  }

  //check if user just checnged his password
  if (currentUser.passwodChangedAfter(decode.ait)) {
    return next(
      new AppError(
        "user recently changed his password ! please login again",
        401
      )
    );
  }

  req.user = currentUser;

  next();
});
