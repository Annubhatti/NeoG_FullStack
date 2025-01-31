import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Movies = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const { data, loading, error } = useFetch("http://localhost:4000/movies");

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/movies/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete movie";
      }

      const data = response.json();
      if (data) {
        setSuccessMsg("Movie Deleted Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {data &&
          data.map((movie) => (
            <li key={movie._id}>
              {movie.title}{" "}
              <button onClick={() => deleteHandler(movie._id)}>Delete</button>
            </li>
          ))}
      </ul>
      <p>{successMsg}</p>
    </div>
  );
};

export default Movies;
