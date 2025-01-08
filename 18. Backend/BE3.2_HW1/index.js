const express = require("express");

const app = express();

app.use(express.json());

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },

  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

app.get("/", (req, res) => {
  res.send("Hello, Express server.");
});

app.post("/books", (req, res) => {
  const newBook = req.body;

  if (!newBook.title || !newBook.author || !newBook.year) {
    res.status(400).json({ error: "title, author and year are required." });
  } else {
    res
      .status(201)
      .json({ message: "Book added successfully.", book: newBook });
  }
});

app.get("/books", (req, res) => {
  res.send(books);
});

const todos = [{ id: 1, title: "Water the plants", day: "Saturday" }];

app.post("/todos", (req, res) => {
  const newTodo = req.body;

  if (!newTodo.title || !newTodo.day) {
    res.status(400).json({ error: "title, day are required." });
  } else {
    res
      .status(201)
      .json({ message: "Todos added successfully.", todo: newTodo });
  }
});

app.get("/todos", (req, res) => {
  res.send(todos);
});


const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})