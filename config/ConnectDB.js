const mongoose = require("mongoose");
require("dotenv").config();

const connectDataBase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      usenewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connection established");
    })
    .catch((error) => {
      console.log("Database Connection error");
      process.exit(1);
    });
};

module.exports = connectDataBase;
