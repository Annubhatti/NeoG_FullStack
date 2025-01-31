import React from "react";
import useFetch from "../hooks/useFetch";

const HotelsByTitle = ({ name }) => {
  const { data, loading, error } = useFetch(
    `http://localhost:4000/hotels/${name}`
  );

  return (
    <div>
      {data && (
        <>
          <h1>{data.name}</h1>
          <p>
            <b>Location: </b>
            {data.location}
          </p>
          <p>
            <b>Rating: </b>
            {data.rating}
          </p>
          <p>
            <b>Price Range: </b>
            {data.priceRange}
          </p>
        </>
      )}
    </div>
  );
};

export default HotelsByTitle;
