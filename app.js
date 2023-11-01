const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRouter");

const app = express();

if (process.env.DEV_ENV === "development") {
  app.use(morgan("dev"));
}
//add body to req
app.use(express.json());

//load static files from public folder
app.use(express.static(`${__dirname}/public`));

app.use("/api/v1/tours", tourRouter);

module.exports = app;
