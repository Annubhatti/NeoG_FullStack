import React from "react";
import useFetch from "../hooks/useFetch";

const Movies = () => {
  const { data, loading, error } = useFetch("http://localhost:4000/movies");

  return (
    <div>
      <ul>
        {data && data.map((movie) => <li key={movie._id}>{movie.title}</li>)}
      </ul>
    </div>
  );
};

export default Movies;
