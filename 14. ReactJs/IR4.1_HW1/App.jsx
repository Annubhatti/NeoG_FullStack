import "./App.css";
import { useState } from "react";

export default function App() {
  
  function ShowNumbers() {
    const [counter, setCounter] = useState(0);

    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    );
  }

  function BackgroundColorToggle() {
    const [color, setColor] = useState("lightblue");

    return (
      <div>
        <button
          style={{ backgroundColor: color }}
          onClick= {() => setColor((prevColor) => prevColor === "lightblue" ? "darkgrey" : "lightblue")}
        >
          Toggle Background
        </button>
      </div>
    );
  }

  function ToggleText() {
    const [text, setText] = useState("Hello, how are you?"); // Initial text state
  
    return (
      <>
        <p>{text}</p>
        <button
          onClick={() =>
            setText((prevText) =>
              prevText === "Hello, how are you?" ? "" : "Hello, how are you?"
            )
          }
        >
          {text === "Hello, how are you?" ? "Hide Message" : "Show Message"}
        </button>
      </>
    );
  }

  function ShowMessage() {
    const [visiblity, setVisiblity] = useState(true);
    const message = "This is a toggleable message!";
    return (
      <div>
        <button onClick={() => setVisiblity(!visiblity)}>
          {visiblity ? "Hide Message" : "Show Message"}
        </button>
        {visiblity && <p>{message}</p>}
      </div>
    );
  }

  function ToggleTextColor() {
    const [isGreen, setIsGreen] = useState(true);

    return (
      <div>
        <p style={{ color: isGreen ? "green" : "red" }}>
          This is Color toggleable text!
        </p>
        <button onClick={() => setIsGreen(!isGreen)}>
          Toggle Color
        </button>
      </div>
    );
  }

  function ToggleColor() {
    const [color, setBtnColor] = useState("green");

    return (
      <div>
        <p style={{ Color : color}}>
          This is Color toggleable text!
        </p>
        <button onClick={() =>setBtnColor((prevColor) => (prevColor === "red" ? "green" : "red" ))}>
          Toggle Color
        </button>
      </div>
    );
  }

  function DisplayFruits() {
    
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    const [selectedFruit, setSelectedFruit] = useState("");
    return(
      <div>
      <h1>Select a Fruit</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={() => setSelectedFruit(fruit)} style={{cursor: "pointer"}}>{fruit}</li>
        ))}
      </ul>
      {selectedFruit && (<p>You selected: <strong>{selectedFruit}</strong></p>)}
    </div>
    ) ;
  }

  return (
    <>
      <ShowNumbers />

      <hr />

      <BackgroundColorToggle />

      <hr />
      <ToggleText />
      <hr />

      <ShowMessage />

      <hr />

      <ToggleTextColor />
      <hr />
      <ToggleColor />

      <hr />

      <DisplayFruits />

      <hr />
    </>
  );
}
