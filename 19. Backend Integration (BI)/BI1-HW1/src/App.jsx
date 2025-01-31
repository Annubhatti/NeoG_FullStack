import React from "react";
import Books from "./components/Books";
import BooksByTitle from "./components/BooksByTitle.jsx";
import BooksByAuthor from "./components/BooksByAuthor.jsx";

const App = () => {
  return (
    <div>
      <Books />
      <BooksByTitle title="Shoe Dog" />
      <BooksByAuthor author="Harper Lee" />
    </div>
  );
};

export default App;