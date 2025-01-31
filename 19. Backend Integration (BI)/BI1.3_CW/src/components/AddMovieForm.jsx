import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    releaseYear: "",
    genre: "",
    director: "",
    actors: "",
    language: "",
    country: "",
    rating: "",
    plot: "",
    awards: "",
    posterUrl: "",
    trailerUrl: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "releaseYear" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to Fetch`);
      }

      const data = await response.json();
      console.log("Added Movie", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="releaseYear">Release Year:</label>
        <br />
        <input
          id="releaseYear"
          name="releaseYear"
          type="text"
          value={formData.releaseYear}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="genre">Genre:</label>
        <br />
        <input
          id="genre"
          name="genre"
          type="text"
          value={formData.genre}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="director">Director:</label>
        <br />
        <input
          id="director"
          type="text"
          name="director"
          value={formData.director}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="actors">Actors:</label>
        <br />
        <input
          id="actors"
          type="text"
          name="actors"
          value={formData.actors}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="language">Language:</label>
        <br />
        <input
          id="language"
          name="language"
          type="text"
          value={formData.language}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="country">Country:</label>
        <br />
        <input
          id="country"
          name="country"
          type="text"
          value={formData.country}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="rating">Rating:</label>
        <br />
        <input
          id="rating"
          name="rating"
          type="text"
          value={formData.rating}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="plot">Plot:</label>
        <br />
        <input
          id="plot"
          name="plot"
          type="text"
          value={formData.plot}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="awards">Awards:</label>
        <br />
        <input
          id="awards"
          type="text"
          name="awards"
          value={formData.awards}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="posterUrl">Poster URL:</label>
        <br />
        <input
          id="posterUrl"
          name="posterUrl"
          type="text"
          value={formData.posterUrl}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <label htmlFor="trailerUrl">Trailer URL:</label>
        <br />
        <input
          id="trailerUrl"
          name="trailerUrl"
          type="text"
          value={formData.trailerUrl}
          onChange={onChangeHandler}></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
