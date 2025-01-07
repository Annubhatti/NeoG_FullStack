import React from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../utils/common";
import Header from "../components/Header";
import Footer from "../components/Footer"

const MovieDetails = () => {
  const movieId = useParams();
  const movie = moviesData.find((mov) => mov.id === parseInt(movieId.movieId));

  return (
    <>
      <Header />
      <section className="container mt-4">
        <div className="row">
          <div className="col">
            <div id="movie-details">
              {movie ? (
                <>
                  <h2>{movie.title}</h2>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <strong>Title: </strong> {movie.title}
                    </li>
                    <li className="list-group-item">
                      <strong>Genre: </strong> {movie.genre}
                    </li>
                    <li className="list-group-item">
                      <strong>director: </strong> {movie.director}
                    </li>
                  </ul>
                </>
              ) : (
                <p className="alert alert-danger">Movie not found.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MovieDetails;
