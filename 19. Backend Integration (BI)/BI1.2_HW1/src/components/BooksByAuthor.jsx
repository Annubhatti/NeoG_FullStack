import React from "react";
import useFetch from "../hooks/useFetch";

const BooksByAuthor = ({ author }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:4000/books/authors/${author}`
  );

  return (
    <div>
      {data && (
        <>
          <h1>Books By {author}</h1>
          <ul>
            {data.map((book) => (
              <li key={book._id}>{book.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BooksByAuthor;
