const mongoose = require("mongoose");

const ProfilesSchema = new mongoose.Schema({
    fullName: String,
    userName: String,
    bio: String,
    profilePicUrl: String,
    followingCount: String,
    followerCount: String,
    companyName: String,
    location: String,
    portfolioUrl: String,
})

const Profiles = mongoose.model("Profiles", ProfilesSchema);

module.exports = Profiles;