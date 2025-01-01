import "./App.css";
import { useState } from "react";

const SubscriptionForm = () => {
  const [mode, setMode] = useState("");
  const [usage, setUsage] = useState("");
  const [comments, setComments] = useState("");
  const [experiences, setExperiences] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const termsHandler = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const modeSelectHandler = (event) => {
    setMode(event.target.value);
  };

  const usageSelectHandler = (event) => {
    setUsage(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (mode && usage && experiences && termsAccepted) {
      setFormSubmitted(true);
    } else {
      alert("Please fill out all fields and accept the terms.");
    }
  };

  return (
    <div>
      <main>
        <h1>Transportation Preference Form</h1>
        <br />
        <form onSubmit={formHandler}>
          <label htmlFor="preferredMode">Preferred Mode of Transportation: </label>
          <select id="preferredMode" onChange={modeSelectHandler}>
            <option value="">Select</option>
            <option value="Car">Car</option>
            <option value="Bus">Bus</option>
            <option value="Train">Train</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Walk">Walk</option>
          </select>
          <br /> <br />

          <label htmlFor="freqUsage">Frequency of Usage: </label>
          <select id="freqUsage" onChange={usageSelectHandler}>
            <option value="">Select</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Occasionally">Occasionally</option>
          </select>
          <br /> <br />

          <label htmlFor="comments">Comments (if any): </label>
          <br />
          <textarea
            id="comments"
            rows="3"
            cols="50"
            onChange={(event) => setComments(event.target.value)}
          ></textarea>
          <br /> <br />

          <label>Experience Level: </label>
          <br />
          <input
            type="radio"
            value="Beginner"
            name="experience"
            onChange={(event) => setExperiences(event.target.value)}
          />
          Beginner
          <br />
          <input
            type="radio"
            value="Intermediate"
            name="experience"
            onChange={(event) => setExperiences(event.target.value)}
          />
          Intermediate
          <br />
          <input
            type="radio"
            value="Advanced"
            name="experience"
            onChange={(event) => setExperiences(event.target.value)}
          />
          Advanced
          <br /> <br />

          <input type="checkbox" onChange={termsHandler} /> I agree to the terms
          and conditions.
          <br />
          <br />
          <button type="Submit">Submit</button>
        </form>

        {formSubmitted && (
          <div>
            <h2>Submitted Details:</h2>
            <p>Preferred Mode of Transportation: {mode}</p>
            <p>Frequency of Usage: {usage}</p>
            <p>Comments: {comments || "No comments provided"}</p>
            <p>Experience Level: {experiences}</p>
            <p>Terms Accepted: {termsAccepted ? "Yes" : "No"}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <main>
        <br />
        <SubscriptionForm />
      </main>
    </div>
  );
}
