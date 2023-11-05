const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Tour = require("./../../models/tourModel");
const User = require("./../../models/userModel");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB.replace("<password>", process.env.DB_PASS);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB successfully connected");
  })
  .catch((e) => {
    console.log(`DB connection failed\n${e}`);
  });

//reading json file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, "utf-8"));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));

//import data to db
const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    console.log("data successfully imported");
  } catch (error) {
    console.log(`import data failed\n${error}`);
  }
  process.exit();
};

//delete all documents from db
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    console.log("data successfully deleted");
  } catch (error) {
    console.log(`error while deleting data\n${error}`);
  }
  process.exit();
};

if (process.argv[2] === "--imp") {
  importData();
} else if (process.argv[2] === "--del") {
  deleteData();
}
