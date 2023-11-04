const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const app = require("./app");
const DB = process.env.DB.replace("<password>", process.env.DB_PASS);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB successfully connected");
  })
  .catch((e) => {
    console.log(`DB connection failed\n${e}`);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
