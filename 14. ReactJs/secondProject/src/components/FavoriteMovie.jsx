import React from "react";
import { useState } from "react";

const FavoriteMovie = () => {
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Favorite Movie Genre?",
      options: ["Action", "Comedy", "Drama", "Sci-Fi"],
    },
    {
      id: 2,
      question: "Favorite Movie of All Time?",
      options: [
        "The Shawshank Redemption",
        "The Godfather",
        "Pulp Fiction",
        "The Dark Knight",
      ],
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if (answers) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Favorite Movie App</h1>
      {submitted ? (
        <div>
          <h2>Thank You for Sharing Your Favorites!</h2>
          <p>{answers.join(", ")}</p>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          {questions.map((que) => (
            <div key={que.id}>
              <h2>{que.question}</h2>
              <ul>
                {que.options.map((option) => (
                  <li key={option}>
                    <input
                      type="radio"
                      name={`question${que.id}`}
                      value={option}
                      onChange={(e) =>
                        setAnswers((prev) => [...prev, e.target.value])
                      }
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FavoriteMovie;