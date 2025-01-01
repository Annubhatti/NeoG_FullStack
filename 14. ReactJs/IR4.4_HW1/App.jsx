import "./App.css";
import { useState } from "react";

const SportForm = () => {
  const [selectedSport, setSelectedSport] = useState([]);

  const handleSportCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSport((prevValue) => [...prevValue, value]);
    } else {
      setSelectedSport((prevValue) =>
        prevValue.filter((sport) => sport != value)
      );
    }
  };
  return (
    <div>
      <label>Choose your favorite Sports: </label>
      <br />
      <input
        type="checkbox"
        value="Football"
        onChange={handleSportCheckbox}
      />{" "}
      Football
      <br />
      <input
        type="checkbox"
        value="Basketball"
        onChange={handleSportCheckbox}
      />{" "}
      Basketball
      <br />
      <input
        type="checkbox"
        value="Tennis"
        onChange={handleSportCheckbox}
      />{" "}
      Tennis
      <br />
      <p>Selected Sport: {selectedSport.join(", ")}</p>
    </div>
  );
};

const FavColor = () => {

  const [color, setColor] = useState([]);

  const handleColorCheckbox = (event) => {
    const {value, checked} = event.target;
    if(checked){
      setColor((prevValue) => [...prevValue, value]);
    }else{
      setColor((prevValue) => 
      prevValue.filter((clr) => clr != value)
    );
    }
  }

  return(
    <div>
      <label>Choose your favorite colors: </label>
      <br />
      <input type="checkbox" value="Red" onClick={handleColorCheckbox} /> Red
      <br />
      <input type="checkbox" value="Blue" onClick={handleColorCheckbox} /> Blue
      <br />
      <input type="checkbox" value="Green" onClick={handleColorCheckbox} /> Green

      <p>Selected Color : {color.join(", ")}</p>
    </div>
  )
}

const MusicInstrument = () =>{

  const [musicInstrument, setInstrument] = useState([]);
  const handleMusicCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setInstrument((prevMusic) => [...prevMusic, value]);
    } else {
      setInstrument((prevMusic) =>
        prevMusic.filter((music) => music != value)
      );
    } 
  }
  
  return(
    <div>
      <label>Choose your musical instruments: </label>
      <br />
      <input type="checkbox" value="Guitar" onClick={handleMusicCheckbox} /> Guitar
      <br />
      <input type="checkbox" value="Piano" onClick={handleMusicCheckbox} /> Piano
      <br />
      <input type="checkbox" value="Drums" onClick={handleMusicCheckbox} /> Drums

      <p>Selected Instruments : {musicInstrument.join(", ")}</p>
    </div>
  )
}


export default function App() {
  return (
    <div>
      <main>
        <SportForm />
        <FavColor />
        <MusicInstrument />
      </main>
    </div>
  );
}
