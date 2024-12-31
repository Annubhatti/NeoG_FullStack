import "./App.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  function ShowNumbers() {
    return (
      <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    );
  }

  function BackgroundColorToggle() {
    const [color, setColor] = useState(true);

    return (
      <div>
        <button
          style={{ backgroundColor: color ? "lightblue" : "darkgrey" }}
          onClick={() => setColor(!color)}
        >
          Toggle Background
        </button>
      </div>
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

  function DisplayFruits() {
    
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    return <div>
      <h1>Select a Fruit</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>;
  }

  return (
    <>
      <ShowNumbers />

      <hr />

      <BackgroundColorToggle />

      <hr />

      <ShowMessage />

      <hr />

      <ToggleTextColor />

      <hr />

      <DisplayFruits />

      <hr />
    </>
  );
}
