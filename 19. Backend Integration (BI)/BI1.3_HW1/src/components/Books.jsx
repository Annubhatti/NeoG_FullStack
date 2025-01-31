import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Books = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const { data, loading, error } = useFetch("http://localhost:4000/books");

  const clickHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/books/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "failed to delete book";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Book Deleted Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Books</h1>
      {data ? (
        <div>
          <ul>
            {data.books.map((book) => (
              <li key={book._id}>
                {book.title}{" "}
                <button onClick={() => clickHandler(book._id)}>Delete</button>{" "}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        loading && <p>Loading...</p>
      )}
      <p>{successMessage}</p>
    </div>
  );
};

export default Books;
