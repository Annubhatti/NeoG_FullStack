const express = require("express");
require("dotenv").config();

const app = express();

// Route: GET "/"
app.get('/', (req, res) => {
    res.send('Hello from express server.');
  });
  
  // Route: GET "/signin"
  app.get('/signin', (req, res) => {
    res.send('This is the Sign In page.');
  });
  
  // Route: GET "/booking"
  app.get('/booking', (req, res) => {
    res.send('Book your tickets here.');
  });
  
  // Route: GET "/clothing/kids"
  app.get('/clothing/kids', (req, res) => {
    res.send('This is the kids wear page.');
  });
  
  // Route: GET "/blog"
  app.get('/blog', (req, res) => {
    res.send('This is the blog page.');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});