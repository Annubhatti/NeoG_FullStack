import { useState } from "react";
import "./App.css";

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false); // To track if the form is submitted

  const submitBtnHandler = (event) => {
    event.preventDefault(); // Prevent page refresh
    setIsSubmitted(true); // Mark form as submitted
  };

  return (
    <>
      <h1 className="mt-3">Polling App</h1>
      <br />
      {isSubmitted ? (
        // Display only the thank-you message when submitted
          <h3>Thank You for Participating!</h3>
      ) : (
        // Show the form if not submitted
        <form onSubmit={submitBtnHandler}>
          <label><strong>Favorite Color?</strong></label>
          <br />
          <input type="radio" value="Red" name="color" /> Red
          <br />
          <input type="radio" value="Blue" name="color" /> Blue
          <br />
          <input type="radio" value="Green" name="color" /> Green
          <br />
          <input type="radio" value="Yellow" name="color" /> Yellow
          <br />
          <br />
          <label><strong>Favorite Animal?</strong></label>
          <br />
          <input type="radio" value="Dog" name="animal" /> Dog
          <br />
          <input type="radio" value="Cat" name="animal" /> Cat
          <br />
          <input type="radio" value="Bird" name="animal" /> Bird
          <br />
          <input type="radio" value="Fish" name="animal" /> Fish
          <br />
          <br />
          <label><strong>Favorite Food?</strong></label>
          <br />
          <input type="radio" value="Pizza" name="food" /> Pizza
          <br />
          <input type="radio" value="Burger" name="food" /> Burger
          <br />
          <input type="radio" value="Pasta" name="food" /> Pasta
          <br />
          <input type="radio" value="Salad" name="food" /> Salad
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}
