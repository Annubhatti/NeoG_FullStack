const mongoose = require("mongoose");

const playerProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: [
      {
        type: String,
        enum: ["Male", "Female", "Other"],
      },
    ],
    country: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    gamesPlayed: {
      type: Number,
    },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
    },
    preferredGame: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const PlayerProfile = mongoose.model("PlayerProfile", playerProfileSchema);

module.exports = PlayerProfile;