import "./App.css";
import { useState } from "react";

const LanguageForm = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedLanguages((prevValue) => [...prevValue, value]);
    } else {
      setSelectedLanguages((prevValue) =>
        prevValue.filter((lang) => lang != value)
      );
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        value="JavaScript"
        onChange={handleLanguageCheckbox}
      />{" "}
      JavaScript
      <input
        type="checkbox"
        value="Python"
        onChange={handleLanguageCheckbox}
      />{" "}
      Python
      <input
        type="checkbox"
        value="Java"
        onChange={handleLanguageCheckbox}
      />{" "}
      Java
      <p>Selected Languages: {selectedLanguages.join(", ")}</p>
    </div>
  );
};

const MusicGenre = () =>{

  const [musicGenre, setMusicGenre] = useState([]);
  const handleMusicCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMusicGenre((prevMusic) => [...prevMusic, value]);
    } else {
      setMusicGenre((prevMusic) =>
        prevMusic.filter((music) => music != value)
      );
    } 
  }
  
  return(
    <div>
      <input type="checkbox" value="Rock" onClick={handleMusicCheckbox} /> Rock
      <input type="checkbox" value="Jazz" onClick={handleMusicCheckbox} /> Jazz
      <input type="checkbox" value="Pop" onClick={handleMusicCheckbox} /> Pop

      <p>Selected Music: {musicGenre.join(", ")}</p>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <main>
        <LanguageForm />
        <MusicGenre />
      </main>
    </div>
  );
}
