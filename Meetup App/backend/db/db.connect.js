const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.MONGODB;

const initializeDatabase = async () => {
    await mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => console.log("Failed to connect to MongoDB", error));
  };
  

module.exports = { initializeDatabase };