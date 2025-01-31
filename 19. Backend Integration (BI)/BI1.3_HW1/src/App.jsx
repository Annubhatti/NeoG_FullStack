import React from "react";
import Books from "./components/Books";
import BooksByTitle from "./components/BooksByTitle.jsx";
import BooksByAuthor from "./components/BooksByAuthor.jsx";
import AddBookForm from "./components/AddBookForm.jsx";

const App = () => {
  return (
    <div>
      <AddBookForm />
      <Books />
      <BooksByTitle title="Shoe Dog" />
      <BooksByAuthor author="Harper Lee" />
    </div>
  );
};

export default App;
