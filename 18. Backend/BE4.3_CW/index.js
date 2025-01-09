const express= require("express");
const app = express();

const { initializeDatabase } = require("./db/db.connect");
const Movie = require("./models/movies.models");

app.use(express.json());

initializeDatabase();

const createMovie = async (movie) => {
    try {
      const newMovie = new Movie(movie);
      const savedMovie = await newMovie.save();
      return savedMovie
    } catch (error) {
      throw error;
    }
  };

  app.post("/movies", async (req, res) =>{
    try {
        const savedMovie = await createMovie(req.body)
        res.status(201).json({message: "Movie added successfully.", movie: savedMovie})
    } catch (error) {
        res.status(500).json({error: "Failed to add movie"})
    }
  });

//find a movie with a particular title
async function  readMovieByTitle(movieTitle){
  try {
    const movie = await Movie.findOne({ title: movieTitle});
    return movie;
  } catch (error) {
    throw error;
  }
};
//readMovieByTitle("Lagaan")

app.get("/movies/:title", async (req, res) =>{
  try {
    const movie = await readMovieByTitle(req.params.title)
    if(movie){
      res.json(movie)
    }else{
      res.status(404).json({error: "Movie not Found."})
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch movie."})
  }
});


// to get all the movies in a database
async function readAllMovies() {
  try {
    const allMovies = await Movie.find()
    return allMovies
  } catch (error) {
    console.log(error)
  }
  
}
//readAllMovies();

app.get("/movies",async(req, res) =>{
  try {
    const movies = await readAllMovies()
    if(movies.length != 0){
      res.json(movies)
    }else{
      res.status(404).json({error: "No movies found."})
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch movies."})
  }
})

// get movie by director name
async function readMovieByDirector(directorName) {
  try {
    const movieByDirector = await Movie.find({director: directorName})
    return movieByDirector
  } catch (error) {
    console.log(error)
  }
  
}
//readMovieByDirector("Kabir Khan")

app.get("/movies/director/:directorName", async (req, res) => {
  try {
    const movie = await readMovieByDirector(req.params.directorName);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Movie By director not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie by director" });
  }
});

const readMoviesByGenre = async (genreName) => {
  try {
    const moviesByGenre = await Movie.find({ genre: genreName });
    return moviesByGenre;
  } catch (error) {
    throw error;
  }
};

app.get("/movies/genres/:genreName", async (req, res) => {
  try {
    const movies = await readMoviesByGenre(req.params.genreName);
    if (movies.length > 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "Movies not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

// delete 
async function deleteMovie(movieId) {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    return deletedMovie;
  } catch (error) {
    throw error;
  }
};

app.delete('/movies/:movieId', async (req, res) =>{
  try {
    const deletedMovie = await deleteMovie(req.params.movieId)
    if(deletedMovie){
      res.status(200).json({message: "Movies deleted Successfully"})
    }
} catch (error) {
  res.status(500).json({ error: "Failed to fetch movies" });
}
});




const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});