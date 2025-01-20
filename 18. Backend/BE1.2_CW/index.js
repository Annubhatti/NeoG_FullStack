const { initializeDatabase } = require("./db/db.connect");

const fs = require("fs");
const Movie = require("./models/movie.models");
initializeDatabase();

const jsonData = fs.readFileSync("movies.json", "utf-8");

const moviesData = JSON.parse(jsonData);

function seedData() {
    try {
      for (const movieData of moviesData) {   //looping to all the array 
        const newMovie = new Movie({   // every time i make new daata i took the instance of the movie object 
          title: movieData.title,
          releaseYear: movieData.releaseYear,
          genre: movieData.genre,
          director: movieData.director,
          actors: movieData.actors,
          language: movieData.language,
          country: movieData.country,
          rating: movieData.rating,
          plot: movieData.plot,
          awards: movieData.awards,
          posterUrl: movieData.posterUrl,
          trailerUrl: movieData.trailerUrl,
        });
      console.log(newMovie.title);
      newMovie.save(); // save to the db
      }
    } catch (error) {
      console.log("Error seeding the data", error);
    }
  }
  
  seedData();  //callng the funcon 