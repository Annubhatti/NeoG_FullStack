import React from "react";
import Movies from "./components/Movies";
import MovieByTitle from "./components/MovieByTitle";
import AddMovieForm from "./components/AddMovieForm";

const App = () => {
  return (
    <div id="app">
      <AddMovieForm />
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </div>
  );
};

export default App;
