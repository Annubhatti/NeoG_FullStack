import React from "react";
import { useState } from "react";

const MusicPreferenceApp = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [subGenre, setSubGenre] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const questions = {
    question: "Which type of music do you prefer?",
    options: {
      Rock: ["Classic Rock", "Alternative Rock", "Indie Rock"],
      Pop: ["Pop Rock", "Synth-pop", "Electropop"],
      "Hip Hop": ["East Coast Hip Hop", "West Coast Hip Hop", "Trap Music"],
    },
  };

  const clickHandler = () => {
    if (selectedGenre && subGenre) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Music Preference App</h1>
      {submitted ? (
        <div>
          <h1>Thank You for Sharing Your Preferences!</h1>
          <p>Selected Genre: {selectedGenre}</p>
          <br />
          <p>Selected Sub Genre: {subGenre}</p>
        </div>
      ) : (
        <div>
          <label htmlFor="genreSelect">Select Your Preferred Genre: </label>
          <select
            id="genreSelect"
            onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">-- Select Genre --</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
            <option value="Hip Hop">Hip Hop</option>
          </select>

          {selectedGenre && (
            <div>
              <br />
              <label>Select Your Preferred Subgenre: </label>
              <br />
              {questions.options[selectedGenre].map((genre) => (
                <p key={genre}>
                  <input
                    type="radio"
                    name={selectedGenre}
                    value={genre}
                    onChange={(e) => setSubGenre(e.target.value)}
                  />
                  {genre}
                </p>
              ))}
            </div>
          )}

          <br />
          <br />
          <button onClick={clickHandler}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MusicPreferenceApp;
