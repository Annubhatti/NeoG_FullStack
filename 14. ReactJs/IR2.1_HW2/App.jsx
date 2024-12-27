// 1. Create the following React components and display their details on the DOM. Create the array of objects for them based on the shown output:

// Laptops
// Tourist Spots
// Podcast Episodes
// News Articles
// Games
// Expected Output:

// Laptops
// Dell
// Price: $25000

// HP
// Price: $30000

// Lenovo
// Price: $35000

// Tourist Spots
// Grand Canyon
// Location: Arizona, USA

// Eiffel Tower
// Location: Paris, France

// Great Wall of China
// Location: Beijing, China

// Podcast Episodes
// Episode 1
// Duration: 30 minutes

// Episode 2
// Duration: 45 minutes

// Episode 3
// Duration: 60 minutes

// News Articles
// News 1
// Description 1

// News 2
// Description 2

// News 3
// Description 3

// Games
// Game 1
// Genre: Action

// Game 2
// Genre: Adventure

// Game 3
// Genre: Strategy

import './App.css'

const Laptops = ({laptops}) => {
  const laptopListing = laptops.map(laptop => (
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

const TouristSpots = ({tourists}) =>{
  const touristListing = tourists.map(tourist => (
    <div key={tourist.id}>
      <h3>{tourist.name}</h3>
      <p>Location: {tourist.location}</p>
    </div>
  ))
  return(
    <div>
    <h2>Tourist Spots</h2>
    {touristListing}
  </div>
  )
}

const PodcastEpisodes = ({podcasts}) =>{
  const podcastListing = podcasts.map(podcast => (
    <div key={podcast.id}>
      <h3>{podcast.title}</h3>
      <p>Duration: {podcast.duration}</p>
    </div>
  ))
  return(
    <div>
    <h2>Podcast Episodes</h2>
    {podcastListing}
  </div>
  )
}

const NewsArticles = ({articles}) => {
  const articleListing = articles.map(article => (
    <div key={article.id}>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </div>
  ))
  return(
    <div>
      <h2>News Articles</h2>
      {articleListing}
    </div>
  )
}

const Games = ({games}) => {
  const gameListing = games.map(game => (
    <div key={game.id}>
      <h3>{game.title}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  ))
  return(
    <div>
      <h2>Games</h2>
      {gameListing}
    </div>
  )
}


export default function App(){

  const laptops = [
    {id: 1, brand: "Dell", price: "$25000"},
    {id: 2, brand: "HP", price: "$30000"},
    {id: 3, brand: "Lenovo", price: "$35000"},
    
  ];
 
  const tourists = [
    {id: 1, name: "Grand Canyon", location: "Arizona, USA"},
    {id: 2, name: "Eiffel Tower", location: "Paris, France"},
    {id: 3, name: "Great Wall of China", location: "Beijing, China"},
    
  ];

  const podcasts = [
    {id: 1, title: "Episode 1", duration: "30 minutes"},
    {id: 2, title: "Episode 2", duration: "45 minutes"},
    {id: 3, title: "Episode 3", duration: "60 minutes"},
    
  ];


  const articles = [
    {id: 1, title: "News 1", description: "Description 1"},
    {id: 2, title: "News 2", description: "Description 2"},
    {id: 3, title: "News 3", description: "Description 3"},
    
  ];

  const games = [
    {id: 1, title: "Game 1", genre: "Action"},
    {id: 2, title: "Game 2", genre: "Adventure"},
    {id: 3, title: "Game 3", genre: "Strategy"},
    
  ];

  
    return(
      <div>
        <main>
            <Laptops laptops={laptops} />
            <hr />
            <TouristSpots tourists={tourists} />
            <hr />
            <PodcastEpisodes podcasts={podcasts} />
            <hr />
            <NewsArticles articles={articles} />
            <hr />
            <Games games={games} />
        </main>
        </div>
    )
}

