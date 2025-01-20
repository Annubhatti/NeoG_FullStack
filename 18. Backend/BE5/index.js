const {intilaizedb} = require("./db/db.connect");

const Post = require("./models/post.model");
const User = require("./models/user.model");

intilaizedb();


const useData = {
    name: "John",
    email: "jogn@gmail.com",
};

const addUser = async () =>{
    try {
        const newUser = new User(useData);
        await newUser.save();
    } catch (error) {
        console.log("Error", error);
    }
};

// added user to db
//addUser();

// create a post

const postData = {
    title: "Greeting",
    content: "Have a good day!",
    author: "fgfhgjhgk234hjhhkjhk"
}

const addPost = async () =>{
    try {
        const newPost = new Post(postData);
        await newPost.save();
        console.log("Post added successfully!.");
    } catch (error) {
        console.log("Error", error);
    }
}

addPost();

// get all the post  supose i'm making the frontend and i have to list the all the post
// and get the user who has posted that

// const getAllPosts = async () => {
//     try {
//         const allPosts = await Post.find();
//         console.log("All Posts: ", allPosts);
//     } catch (error) {
//         console.log("error", error);
//     }
// }
// getAllPosts();
