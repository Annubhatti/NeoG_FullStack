import React from "react";
import { useState } from "react";

const TravelDestinationApp = () => {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const questions = {
    question: "Select Your Preferred Continent:",
    options: {
      Asia: ["Japan", "Thailand", "India"],
      Europe: ["France", "Italy", "Spain"],
      "North America": ["USA", "Canada", "Mexico"],
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedContinent && selectedDestination) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Travel Destination App</h1>

      {submitted ? (
        <div>
          <h2>Thank You for Sharing Your Preference!</h2>
          <p>Preferred Continent: {selectedContinent}</p>
          <br />
          <p>Preferred Destination: {selectedDestination}</p>
        </div>
      ) : (
        <div>
          <label htmlFor="selectContinent">
            Select your preferred Continent:{" "}
          </label>

          <select
            id="selectContinent"
            onChange={(e) => setSelectedContinent(e.target.value)}>
            <option value="">-- Select Continent --</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
          </select>

          {selectedContinent && (
            <form onSubmit={submitHandler}>
              <br />

              <label>Select Your Preferred Destination: </label>
              <br />
              {questions.options[selectedContinent].map((option) => (
                <p key={option}>
                  <input
                    type="radio"
                    name={selectedContinent}
                    value={option}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                  />
                  {option}
                </p>
              ))}
              <br />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default TravelDestinationApp;
