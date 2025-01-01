import "./App.css";
import { useState } from "react";


const InstrumentsSelect = () =>{
  const [instruments, setInstruments] = useState("");

  const InstrumentSelectHandler = (event) => {
    setInstruments(event.target.value)
  };
  return (
    <div>
      
      <label htmlFor="music">Select a Musical instrument: </label>
      <br />
      <select id="music" onChange={InstrumentSelectHandler}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <p>Type: {instruments}</p>
    </div>
  );
}

const LanguageSelect = () => {
  const [language, setLanguage] = useState("");

  const languageSelectHandler = (event) => {
    setLanguage(event.target.value)
  };
  return (
    <div>
      
      <label htmlFor="languages">Select a language: </label>
      <br />
      <select id="languages" onChange={languageSelectHandler}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
      </select>
      <p>{language && `Origin: ${language}`}</p>
    </div>
  );
};

const CarSelect = () => {
  const [car, setCar] = useState("");

  const carSelectHandler = (event) => {
    setCar(event.target.value)
  };

  const getCarMessage = () => {
    switch (car) {
      case "Audi":
        return "Audi is known for its luxury and cutting-edge technology.";
      case "BMW":
        return "BMW offers ultimate driving pleasure and sporty designs.";
      case "Tesla":
        return "Tesla leads the way in electric vehicle innovation and sustainability.";
      default:
        return "";
    }
  };

  return (
    <div>
      
      <label htmlFor="brandSelect">Select a car brand: </label>
      <br />
      <select id="brandSelect" onChange={carSelectHandler}>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Tesla">Tesla</option>
      </select>
      <p>Details: {car && getCarMessage()}</p>
     
    </div>
  );
};


const ContinentSelect = () => {
  const [continent, setContinent] = useState("");

  const continentSelectHandler = (event) => {
    setContinent(event.target.value)
  };

  const getMessage = () => {
    switch (continent) {
      case "Africa":
        return "Africa: Known for its incredible wildlife and diverse cultures.";
      case "Asia":
        return "Asia: The largest continent with a rich history and vibrant traditions.";
      case "Europe":
        return "Europe: A continent of art, history, and architectural wonders.";
      default:
        return "";
    }
  };
  return (
    <div>
      
      <label htmlFor="country">Select a continent </label>
      <br />
      <select id="country" onChange={continentSelectHandler}>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
      </select>
      <p>Details: {continent && getMessage()}</p>
      
    </div>
  );
};

const MovieSelect = () => {
  const [genre, setGenre] = useState("");

  const genreSelectHandler = (event) => {
    setGenre(event.target.value)
  };

  const getMovieMessage = () => {
    switch (genre) {
      case "Action":
        return "Action movies are packed with intense scenes and thrilling moments!";
      case "Comedy":
        return "Comedy movies are great for a good laugh and light-hearted fun.";
      case "Drama":
        return "Drama movies delve deep into emotions and tell meaningful stories.";
      default:
        return "";
    }
  };

  return (
    <div>
      
      <label htmlFor="movie">Select a car movie genre: </label>
      <br />
      <select id="movie" onChange={genreSelectHandler}>
        <option value="Action">Action</option>
        <option value="Commedy">Commedy</option>
        <option value="Drama">Drama</option>
      </select>
      <p>Description: {genre && getMovieMessage()}</p>
      
    </div>
  );
};

export default function App() {
  return (
    <div>
      <main>
        <InstrumentsSelect />
        <LanguageSelect />
        <CarSelect />
        <ContinentSelect />
        <MovieSelect />
      </main>
    </div>
  );
}
