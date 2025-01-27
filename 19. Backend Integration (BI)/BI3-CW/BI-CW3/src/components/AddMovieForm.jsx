import React, { useState } from "react";

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
        plot:"",
        awards: "",
        posterUrl: "",
        trailerUrl: "",

    });

    const handleChange = (e)=>{
        const{ name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]:
            name === "releaseYear" || name === "rating" ? parseInt(value) : value,
        }));
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await fetch("url",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            
            if(!response.ok){
              throw "Failed to add movie."
            }
            const data = await response.json()
            console.log("Added Movie", data)
        } catch(error){
            console.log(error);
        }
    }

    return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <label>Release Year: </label>
        <input
          type="number"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
        />
        <label>Genre: </label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <label>Director: </label>
        <input
          type="text"
          name="director"
          value={formData.director}
          onChange={handleChange}
        />
        <label>Actor: </label>
        <input
          type="text"
          name="actor"
          value={formData.actor}
          onChange={handleChange}
        />
        <label>Language: </label>
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <label>Country: </label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <label>Rating: </label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <label>Plot: </label>
        <input
          type="text"
          name="plot"
          value={formData.plot}
          onChange={handleChange}
        />
        <label>Awards: </label>
        <input
          type="text"
          name="awards"
          value={formData.awards}
          onChange={handleChange}
        />
        <label>Poster URL: </label>
        <input
          type="text"
          name="posterUrl"
          value={formData.posterUrl}
          onChange={handleChange}
        />
        <label>Trailer URL: </label>
        <input
          type="text"
          name="trailerUrl"
          value={formData.trailerUrl}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddMovieForm;
