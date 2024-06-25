const AppError = require("./../utils/AppError");

const handleCastErrorEb = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDublicateFieldsDb = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    err: err,
    stack: err.stack,
  });
};

const sendProdError = (err, res) => {
  //operational error can't be displayed to user
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    //programming error musn't be displayed to user
    res.status(500).json({
      status: "error",
      message: "something went wrong",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;

  if (process.env.DEV_ENV === "development") {
    sendDevError(err, res);
  } else if (process.env.DEV_ENV === "production") {
    //creating object so we don't mutate the original one
    let error = Object.assign(err);

    if (error.name === "CastError") error = handleCastErrorEb(error);
    if (error.code === 11000) error = handleDublicateFieldsDb(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDB(error);

    sendProdError(error, res);
  }
};
