import React from "react";
import useFetch from "../hooks/useFetch";

const Books = () => {
  const { data, loading, error } = useFetch("http://localhost:4000/books");
  return (
    <div>
      <h1>All Books</h1>
      {data ? (
        <div>
          <ul>
            {data.books.map((book) => (
              <li key={book._id}>{book.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        loading && <p>Loading...</p>
      )}
    </div>
  );
};

export default Books;
