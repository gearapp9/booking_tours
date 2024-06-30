const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require("./../models/tourModel");
const User = require("./../models/userModel");
const Review = require("./../models/reviewModel");

dotenv.config({ path: "./config.env" });

const dbPassword = process.env.DB_PASSWORD;
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
const uri = process.env.DB.replace("<password>", dbPassword);

mongoose
  .connect(uri, clientOptions)
  .then(() => console.log("connection successful"));

const toursData = JSON.parse(
  fs.readFileSync(`${__dirname}/tours.json`, "utf-8")
);
const usersData = JSON.parse(
  fs.readFileSync(`${__dirname}/users.json`, "utf-8")
);
const reviewsData = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, "utf-8")
);

const importData = async () => {
  try {
    await Tour.create(toursData);
    await User.create(usersData, { validateBeforeSave: false });
    await Review.create(reviewsData);
    console.log("data successfully created");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deletaData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log("data successfully deleted");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "--imp") {
  importData();
} else if (process.argv[2] === "--del") {
  deletaData();
}
