import React from "react";
import { useState } from "react";

const FeedbackApp = () => {
  const [answer, setAnswer] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Rate the overall experience:",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    {
      id: 2,
      question: "How likely are you to recommend us to a friend or colleague?",
      options: ["Very Likely", "Likely", "Unlikely", "Very Unlikely"],
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if (answer) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h1>Feedback App</h1>
      {submitted ? (
        <div>
          <h2>Thank You for Your Feedback!</h2>
          <p>Your answers: {answer.join(", ")}</p>
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
                        setAnswer((prev) => [...prev, e.target.value])
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

export default FeedbackApp;