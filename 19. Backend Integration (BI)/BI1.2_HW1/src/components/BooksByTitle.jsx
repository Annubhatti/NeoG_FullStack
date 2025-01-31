import React from "react";
import useFetch from "../hooks/useFetch";

const BooksByTitle = ({ title }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:4000/books/${title}`
  );

  return (
    <div>
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>
            <b>Author: </b>
            {data.author}
          </p>
          <p>
            <b>Release Year: </b>
            {data.releaseYear}
          </p>
          <p>
            <b>Genre: </b>
            {data.genre.join(", ")}
          </p>
        </>
      )}
    </div>
  );
};

export default BooksByTitle;
