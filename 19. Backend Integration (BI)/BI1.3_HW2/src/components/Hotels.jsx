import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Hotels = () => {
  const [message, setMessage] = useState("");

  const { data, loading, error } = useFetch("http://localhost:4000/hotels");

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/hotels/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw "Failed to delete";
      }

      const data = await response.json();
      if (data) {
        setMessage("Hotel Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Hotels</h1>
      {data && (
        <>
          <ul>
            {data.map((hotel) => (
              <li key={hotel._id}>
                {hotel.name}{" "}
                <button onClick={() => deleteHandler(hotel._id)}>Delete</button>
              </li>
            ))}
          </ul>
          <p>{message}</p>
        </>
      )}
    </div>
  );
};

export default Hotels;
