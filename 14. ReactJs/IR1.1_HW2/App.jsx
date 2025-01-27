/**
 * 1. Create a React component called WelcomeMessage, to display a heading as "Discover the World of JSX!".

2. Create a React component called GreetActor, to display a heading as "Welcome, Tom Hardy fans!" where Tom Hardy is a dynamic data. 

3. Create a React component called ExternalLink, to display the link text "Explore React Documentation". Link the text to https://www.reactjs.org and upon clicking the link it should open in a new tab.

4. Create a React component called VideoPlayer, to display a video https://www.example.com/video.mp4. Explore and make use of video tag.

5. Create a React component called MovieDetails to display the following movie details.

const movie = {

    title: "Forrest Gump",

    director: "Robert Zemeckis",

    year: 1994,

    rating: "PG-13",

    duration: "2h 22min"

  }



Expected Output:
Discover the World of JSX!
Welcome, Tom Hardy fans!

Explore React Documentation
Movie Details
Title: Forrest Gump
Director: Robert Zemeckis
Year: 1994
Rating: PG-13
Duration: 2h 22min
 */

import './App.css'

const WelcomeMessage = () =>{
    return <h1>Discover the World of JSX!</h1>
}

const GreetActor  = () => {
    const name = "Tom Hardy"
    return <h1>Welcome, {name} fans!</h1>
}

const ExternalLink  = () => {

    const url = "https://www.reactjs.org "
    return <a href={url} target='_blank'>Explore React Documentation</a>
}

const VideoPlayer = () => {
    return(

        <div>
            <video width= "540" height="260" controls>
                <source src='https://www.example.com/video.mp4.' type="video/mp4" />
                
            </video>
        </div>
        
    )
   
}

const MovieDetails = () => {
    const movie = {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        rating: "PG-13",
        duration: "2h 22min"
      };

      return(
        <div>
        <h2>Movie Details</h2>
        <p><strong>Title: </strong>{movie.title}</p>
        <p><strong>Director: </strong>{movie.director}</p>
        <p><strong>Year: </strong>{movie.year}</p>
        <p><strong>Rating: </strong>{movie.rating}</p>
        <p><strong>Duration: </strong>{movie.duration}</p>
    </div>
      )
}

export default function App(){
    return(
        <div>
            < WelcomeMessage />
            <GreetActor />
            <ExternalLink />
            <VideoPlayer />
            <MovieDetails />
        </div>
    )
}