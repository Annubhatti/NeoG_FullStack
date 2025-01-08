const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    bodyStyle: {
        type: String,
        required: true,
    },
    fuelType: [
      {
        type: String,
        enum: ["Gasoline", "Diesel", "Electric", "Hybrid","Other"],
        required: true,
      },
    ],

    transmission: [
      {
        type: String,
        enum: ["Automatic", "Manual","Other"],
        required: true,
      },
    ],
    engine: {
        type: String,
        required: true,

    },
    mileage: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
      },
    bodyStyle: {
      type: String,
    },
    color: {
      type: String,
      required: true,
    },
    condition: {
        type: String,
        required: true,
        enum: ['New', 'Used'],
      },
      description: {
        type: String,
        trim: true,
      },
      photos: {
        type: [String],
        default: [],
      },
      inMarket: {
        type: Boolean,
        default: true,
      },
  },
  { timestamps: true }
);

const Cars = mongoose.model("Cars", carsSchema);

module.exports = Cars;
