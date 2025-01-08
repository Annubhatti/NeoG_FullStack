const express= require("express");
require("dotenv").config();
const app = express();

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.get("/about", (req, res) =>{
    res.send("This is the About page!");
});

app.get("/contact", (req, res) =>{
    res.send("Contact us at contact@example.com");
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
