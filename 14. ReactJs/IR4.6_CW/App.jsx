import "./App.css";
import { useState } from "react";

const ColorSelect = () => {
  const [color, setColor] = useState("");

  const colorSelectHandler = (event) => {
    setColor(event.target.value)
  };
  return (
    <div>
      
      <label htmlFor="colorSelect">Select a color: </label>
      <br />
      <select id="colorSelect" onChange={colorSelectHandler}>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Green">Green</option>
      </select>
      <p>{color && `Color Selected: ${color}`}</p>
    </div>
  );
};

const DaySelect = () =>{
  const [day, setDay] = useState("");

  const daySelectHandler = (event) => {
    setDay(event.target.value)
  };
  return (
    <div>
      
      <label htmlFor="days">Select a Day: </label>
      <br />
      <select id="days" onChange={daySelectHandler}>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <p>{(day && (day === "Sunday" || day === "Saturday") ? `${day} is a weekend.` : `${day} is a weekday.`)}</p>
    </div>
  );

}

export default function App() {
  return (
    <div>
      <main>
        <ColorSelect />
        <DaySelect />
      </main>
    </div>
  );
}
