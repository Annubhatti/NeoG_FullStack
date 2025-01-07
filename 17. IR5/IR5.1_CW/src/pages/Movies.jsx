import React, { useState } from "react";

import { moviesData } from "../utils/common";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Movies = () => {
  const [genreFilter, setGenreFilter] = useState("All");

  const filteredMovies =
    genreFilter === "All"
      ? moviesData
      : moviesData.filter((movie) => movie.genre === genreFilter);

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>List of movies</h2>
        <div className="form-group my-4">
          <label htmlFor="genreFilter">Filter by Genre: </label>
          <select
            id="genreFilter"
            onChange={(e) => setGenreFilter(e.target.value)}
            className="form-control"
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
            <option value="Crime">Crime</option>
          </select>
        </div>

        <ul className="list-group mt-3">
          {filteredMovies.map((movie) => (
            <li key={movie.id} className="list-group-item">
              <h5>{movie.title}</h5>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
