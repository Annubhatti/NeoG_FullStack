// 1. Create the following React components and display their details on the DOM. Create the array of objects for them based on the shown output:

// Cars
// Hotels
// Podcasts
// Articles
// Movies
// Expected Output:
// Cars
// Name: Toyota
// Price: $25000

// Name: Honda
// Price: $30000

// Name: Ford
// Price: $35000

// Hotels
// Name: Marriott
// Location: New York

// Name: Hilton
// Location: Los Angeles

// Name: Sheraton
// Location: Chicago

// Podcasts
// Title: Podcast 1
// Host: Host 1

// Title: Podcast 2
// Host: Host 2

// Title: Podcast 3
// Host: Host 3

// Articles
// Title: Article 1
// Content: 1

// Title: Article 2
// Content: 2

// Title: Article 3
// Content: 3

// Movies
// Title: Movie 1
// Director: Director 1

// Title: Movie 2
// Director: Director 2

// Title: Movie 3
// Director: Director 3

import './App.css'

const Cars = ({cars}) => {
  const carListing = cars.map(car => (
    <div key={car.id}>
      <h3>Name: {car.brand}</h3>
      <p>Price: {car.price}</p>
    </div>
  ))
  return (
    <div>
      <h2>Cars</h2>
      {carListing}
    </div>
  )
    
}

const Hotels = ({hotels}) =>{
  const hotelListing = hotels.map(hotel => (
    <div key={hotel.id}>
      <h3>Name: {hotel.name}</h3>
      <p>Location: {hotel.location}</p>
    </div>
  ))
  return(
    <div>
    <h2>Hotels</h2>
    {hotelListing}
  </div>
  )
}

const Podcasts = ({podcasts}) =>{
  const podcastListing = podcasts.map(podcast => (
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Host: {podcast.host}</p>
    </div>
  ))
  return(
    <div>
    <h2>Podcasts</h2>
    {podcastListing}
  </div>
  )
}

const Articles = ({articles}) => {
  const articleListing = articles.map(article => (
    <div key={article.id}>
      <h3>Title: {article.title}</h3>
      <p>Content: {article.content}</p>
    </div>
  ))
  return(
    <div>
      <h2>Articles</h2>
      {articleListing}
    </div>
  )
}

const Movies = ({movies}) => {
  const movieListing = movies.map(movie => (
    <div key={movie.id}>
      <h3>Title: {movie.title}</h3>
      <p>Director: {movie.director}</p>
    </div>
  ))
  return(
    <div>
      <h2>Movies</h2>
      {movieListing}
    </div>
  )
}


export default function App(){

  const cars = [
    {id: 1, brand: "Toyota", price: "$25000"},
    {id: 2, brand: "Honda", price: "$30000"},
    {id: 3, brand: "Ford", price: "$35000"},
    
  ];
 
  const hotels = [
    {id: 1, name: "Marriott", location: "New York"},
    {id: 2, name: "Hilton", location: "Los Angeles"},
    {id: 3, name: "Sheraton", location: "Chicago"},
    
  ];

  const podcasts = [
    {id: 1, title: "Podcast 1", host: "Host 1"},
    {id: 2, title: "Podcast 2", host: "Host 2"},
    {id: 3, title: "Podcast 3", host: "Host 3"},
    
  ];

  const articles = [
    {id: 1, title: "Article 1", content: 1},
    {id: 2, title: "Article 2", content: 2},
    {id: 3, title: "Article 3", content: 3},
    
  ];

  const movies = [
    {id: 1, title: "Movie 1", director: "Director 1"},
    {id: 2, title: "Movie 2", director: "Director 2"},
    {id: 3, title: "Movie 3", director: "Director 3"},
    
  ];

  
    return(
      <div>
        <main>
            <Cars cars={cars} />
            <hr />
            <Hotels hotels={hotels} />
            <hr />
            <Podcasts podcasts={podcasts} />
            <hr />
            <Articles articles={articles} />
            <hr />
            <Movies movies={movies} />
        </main>
        </div>
    )
}