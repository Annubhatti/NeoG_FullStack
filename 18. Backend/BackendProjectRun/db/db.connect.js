const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = async () => {
 await mongoose
    .connect(mongoUri, {
      connectTimeoutMS: 10000, // Set timeout to 10 seconds
    })
    .then(() => {
      console.log("Connected to Database");
      process.exit(0);
    })
    .catch((error) => {
      console.log("Error connecting to Database", error);
      process.exit(1); // Exit on failure
    })
};

module.exports = {initializeDatabase};