import { useState } from "react";
import "./App.css";

function GetFeedback(){
  const [feedback, setFeedback] = useState("");
  //track when the feedback message should be displayed.
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChange = (event) => {
    setFeedback(event.target.value);
    console .log(setFeedback)
  };

  const clickHandel = () => {
    setShowFeedback(true);
  }

  return (
    <>
       <br />
      <label>Give your feedback: </label>
      <textarea
       type="text"
        rows="3"
        cols="40"
        onChange={handleChange}
        value={feedback}></ textarea>
      <button type = "submit" onClick={clickHandel}>Submit</button>
      {showFeedback && <p>Your feedback: {feedback}</p>}
     
    </>
  );

}

function GetMovieReview() {

  const [review, setReview] = useState("");
  const [displayReview, setDisplayReview] = useState(false);

  const reviewInputHandel = (event) => {
    setReview(event.target.value);
  }

  const clickReviewHandel = () => {
    setDisplayReview(true)
  }
  return(
    <> 
      
      <label>Write your movie review: </label>
      <textarea type="text"
       rows="3"
       cols="40"
       value={review}
       onChange={reviewInputHandel}></ textarea>
      <button type = "submit" onClick={clickReviewHandel}>Submit Review</button>
      {displayReview && <p>Yore review: {review}</p>}
    
    </>
  )
}

function GetMessage() {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value); 
  };

  const handleButtonClick = () => {
    alert(`Message: ${message.toUpperCase()}!`); 
  };

  return (
    <>
      <label>Enter your message: </label>
      <textarea
        type="text"
        rows="3"
        cols="40"
        onChange={handleInputChange}
        value={message}
      ></textarea>
      <br />
      <button type="submit" onClick={handleButtonClick}>
        Display Message
      </button>
    </>
  );
}


function GetNotes() {

  const [notes, setNotes] = useState(""); // State to store the input notes
  const [savedNotes, setSavedNotes] = useState(""); // State to store saved notes

  const handleInputChange = (event) => {
    setNotes(event.target.value); // Update the notes state with the user's input
  };

  const handleSaveNotes = () => {
    setSavedNotes(notes); // Save the notes to the savedNotes state
  };
  return(
    <> 
      
      <label>Take your notes: </label>
      <textarea type="text"
       rows="3"
        cols="40"
        onChange={handleInputChange}
        value={notes}></ textarea>
      <button type = "submit" onClick={handleSaveNotes}>Save Notes</button>
      {savedNotes && ( <p>Saved Notes: {savedNotes}</p>)}
    </>
  )
}

function GetQuestions() {

  const [question, setQuestion] = useState(""); 
  const [submittedQuestion, setSubmittedQuestion] = useState(false); 

  const handleInputChange = (event) => {
    setQuestion(event.target.value); 
  };

  const handleSubmit = () => {
    setSubmittedQuestion(true);
  }
  return(
    <> 
      <label>Ask your question: </label>
      <textarea
        type="text"
        rows="3"
        cols="40"
        onChange={handleInputChange}
        value={question}
      ></textarea>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit Question
      </button>
      <br />
      {submittedQuestion && (
          <p>Submitted Question: {question}?</p>
       
      )}
    </>
  )
}

function GetComments() {

  const [comment, setComment] = useState(""); 
  const [submittedComment, setSubmittedComment] = useState(false); 

  const handleInputChange = (event) => {
    setComment(event.target.value); 
  };

  const handleSubmit = () => {
   setSubmittedComment(true)
  };
  return(
    <> 
      <label>Leave your comment: </label>
      <textarea
        type="text"
        rows="3"
        cols="40"
        onChange={handleInputChange}
        value={comment}
      ></textarea>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit Comment
      </button>
      <br />
      {submittedComment && (<p>Submitted Comment: // {comment}</p> )}
      
     
    </>
  )
}

export default function App() {
  
  return (
    <>
      <GetFeedback />
      <br /> <br />
      <GetMovieReview />
      <br /> <br />
      <GetMessage />
      <br /> <br />
      <GetNotes />
      <br /> <br />
      <GetQuestions />
      <br /> <br />
      <GetComments />
    </>
  );
}
