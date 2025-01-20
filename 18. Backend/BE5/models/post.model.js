const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    // which user is posting a particular post 
    // i m creating reffernce to the user model
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User" }, //ObjectId that automatic  created by the mongoose for a user 
    followers: {type: mongoose.Schema.Types.ObjectId, ref: "Follower"},
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;