// 1. Given an array of objects, write a React component to display the details of laptops which have price above 4999 and  below 15000.

// const laptops = [

//     { id: 1, brand: "Dell", price: 8000 },

//     { id: 2, brand: "HP", price: 7000 },

//     { id: 3, brand: "Lenovo", price: 19000 },

//   ];



// 2. Given an array of objects, write a React component to display the details of "Fantasy" genre books.

// const books = [

//     { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },

//     { id: 2, title: "The Hobbit", genre: "Self-help" },

//     { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },

//   ];



// 3. Given an array of objects, write a React component to display the details of podcast where the duration is more than 30 mins.

//  const podcasts = [

//     { id: 1, title: "Tech Talk", duration: 45 },

//     { id: 2, title: "Business Insights", duration: 25 },

//     { id: 3, title: "Science Hour", duration: 60 },

//   ];



// 4. Given an array of objects, write a React component to display the details of "Action" genre movies.

// const movies = [

//     { id: 1, title: "Mission Impossible", genre: "Action" },

//     { id: 2, title: "Die Hard", genre: "Action" },

//     { id: 3, title: "The Avengers", genre: "Adventure" },

//   ];



// 5. Given an array of objects, write a React component to display the details of "Full-time" jobs.

// const jobs = [

//     { id: 1, title: "Software Engineer", type: "Full-time" },

//     { id: 2, title: "Marketing Manager", type: "Part-time" },

//     { id: 3, title: "Data Analyst", type: "Full-time" },

//   ];



// 6. Given an array of objects, write a React component to display the playlists which are of "Artist 1".

// const songs = [

//     { id: 1, title: "Song 1", artist: "Artist 1" },

//     { id: 2, title: "Song 2", artist: "Artist 2" },

//     { id: 3, title: "Song 3", artist: "Artist 1" },

//   ];

// Output  

// Laptops
// Dell
// Price: 8000

// HP
// Price: 7000

// Books
// Name:
// Genre: Fantasy

// Name:
// Genre: Fantasy

// Podcasts
// Title: Tech Talk
// Duration: 45

// Title: Science Hour
// Duration: 60

// Movies
// Title: Mission Impossible
// Genre: Action

// Title: Die Hard
// Genre: Action

// Jobs
// Title: Software Engineer
// Type: Full-time

// Title: Data Analyst
// Type: Full-time

// Songs
// Title: Song 1
// Artist: Artist 1

// Title: Song 3
// Artist: Artist 1

import './App.css'

const Laptops = ({laptops}) => {
  const filteredLaptops = laptops.filter(laptop =>
    laptop.price > 4999 && laptop.price < 15000
  )
  
  const laptopListing = filteredLaptops.map(laptop => (
    <div key={laptop.id}>
      <h3>{laptop.brand}</h3>
      <p>Price: {laptop.price}</p>
    </div>
  ))
  return (
    <div>
      <h2>Laptops</h2>
      {laptopListing}
    </div>
  )
    
}

const Books = ({books}) =>{
  const filteredBooks = books.filter(book =>
    book.genre === "Fantasy"
  )
  
  const bookListing = filteredBooks.map(book => (
    <div key={book.id}>
      <h3>Name: {book.name}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ))
  return(
    <div>
    <h2>Books</h2>
    {bookListing}
  </div>
  )
}

const Podcasts = ({podcasts}) =>{
  const filteredPodcast = podcasts.filter(podcast =>
    podcast.duration > 30
  )
  const podcastListing = filteredPodcast.map(podcast => (
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Duration: {podcast.duration}</p>
    </div>
  ))
  return(
    <div>
    <h2>Podcasts</h2>
    {podcastListing}
  </div>
  )
}

const Movies = ({movies}) => {
  const filteredMovies = movies.filter(movie =>
    movie.genre === "Action"
  )
  const movieListing = filteredMovies.map(movie => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Genre: {movie.genre}</p>
    </div>
  ))
  return(
    <div>
      <h2>Movies</h2>
      {movieListing}
    </div>
  )
}

const Jobs = ({jobs}) => {
  const filteredJobs = jobs.filter(job =>
    job.type === "Full-time"
  )
  const jobListing = filteredJobs.map(job => (
    <div key={job.id}>
      <h3>Title: {job.title}</h3>
      <p>Type: {job.type}</p>
    </div>
  ))
  return(
    <div>
      <h2>Jobs</h2>
      {jobListing}
    </div>
  )
}

const Songs = ({songs}) => {
  const filteredSongs = songs.filter(song =>
    song.artist === "Artist 1"
  )
  const songListing = filteredSongs.map(song => (
    <div key={song.id}>
      <h3>Title: {song.title}</h3>
      <p>Artist: {song.artist}</p>
    </div>
  ))
  return(
    <div>
      <h2>Songs</h2>
      {songListing}
    </div>
  )
}


export default function App(){

  const laptops = [

    { id: 1, brand: "Dell", price: 8000 },

    { id: 2, brand: "HP", price: 7000 },

    { id: 3, brand: "Lenovo", price: 19000 },

  ];
 
  const books = [

    { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },

    { id: 2, title: "The Hobbit", genre: "Self-help" },

    { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", duration: 45 },

    { id: 2, title: "Business Insights", duration: 25 },

    { id: 3, title: "Science Hour", duration: 60 },

  ];

  const movies = [

    { id: 1, title: "Mission Impossible", genre: "Action" },

    { id: 2, title: "Die Hard", genre: "Action" },

    { id: 3, title: "The Avengers", genre: "Adventure" },

  ];

  const jobs = [

    { id: 1, title: "Software Engineer", type: "Full-time" },

    { id: 2, title: "Marketing Manager", type: "Part-time" },

    { id: 3, title: "Data Analyst", type: "Full-time" },

  ];

  const songs = [

    { id: 1, title: "Song 1", artist: "Artist 1" },

    { id: 2, title: "Song 2", artist: "Artist 2" },

    { id: 3, title: "Song 3", artist: "Artist 1" },

  ];
  
    return(
      <div>
        <main>
            <Laptops laptops={laptops} />
            <hr />
            <Books books={books} />
            <hr />
            <Podcasts podcasts={podcasts} />
            <hr />
            <Movies movies={movies} />
            <hr />
            <Jobs jobs={jobs} />
            <hr />
            <Songs songs={songs} />
        </main>
        </div>
    )
}