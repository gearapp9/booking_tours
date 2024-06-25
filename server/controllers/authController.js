const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const AppError = require("./../utils/AppError");
const sendEmail = require("./../utils/sendEmail");

const singJwt = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const sendJwt = (user, statusCode, res) => {
  const token = singJwt(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.DEV_ENV === "productions") cookieOptions.secure = true;

  res.cookie("jwt", cookieOptions);

  //removing password from the output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
};

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  sendJwt(newUser, 200, res);
});

exports.singIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //if emailor password not defined throw an error
  if (!email || !password) {
    return next(new AppError("please provide a valid email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  //if user not defined directly throw an error,and no need to run the other condition

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("incorrect email or password", 401));
  }

  //creating json web token
  sendJwt(user, 200, res);
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
  const currentUser = await User.findById(decode.id);

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

//restrict access to routes for unwanted users
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("you do not have permission to perform this task", 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("this user doesn't exists", 404));
  }

  const resetToken = user.createUserPasswordResetToken();

  //persisting the createUserPasswordResetToken to the datatbase
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending the email. Try again later!"),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //getting token and hashing it
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  //getting user with the matched hashed token
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    //selecting the user with token that't it's not expired
    passwordResetExpires: { $gte: Date.now() },
  });

  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  sendJwt(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  //get user from collection
  const user = await User.findById(req.user.id).select("+password");

  //check if current pass matches the user pass
  if (!(await user.correctPassword(req.body.currentPassword, user.password))) {
    return next(new AppError("your current password is wrong", 401));
  }

  //we can't use findbyidandupdate because we can't run middleware and validators and we want that
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  sendJwt(user, 200, res);
});
