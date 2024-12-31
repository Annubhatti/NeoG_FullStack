import "./App.css";
import { useState } from "react";

const SubscriptionForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("");
  const [interests, setInterests] = useState([]);
  const [update, setUpdates] = useState("");
  const [comments, setComments] = useState("");

  const [formData, setFormData] = useState(false);

  
  const interestsHandler = (event) => {
    let value = event.target.value;
    if(event.target.value){
      setInterests([...interests, value])
    }else{
      setInterests(interests.filter(interest => interest != value))
    }
  };

  const planSelectHandler = (event) => {
    setPlan(event.target.value);
  };

  const formHandler = (event) =>{
    event.preventDefault();
      if(name && email && plan && interests && update && comments){
        setFormData(true)
      }

  };

  return (
    <div>
      <main>
        <h1>Subscription Form</h1>
        <br />
        <form onSubmit={formHandler}>
        <label htmlFor="fullName">Full Name: </label>
        <input id="fullName" onChange={(event) => setName(event.target.value)} />
        <br /> <br />

        <label htmlFor="userEmail">Email: </label>
        <input id="userEmail" onChange={(event) => setEmail(event.target.value)} />
        <br /> <br />
        <label htmlFor="planSelect">Favourite color: </label>
        <select id="planSelect" onChange={planSelectHandler}>
          <option value="Select Plan">Select Plan</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Ultimate">Ultimate</option>
        </select>
        <br /> <br />

        <label htmlFor="">Interests:</label>
        <br />
        <input type="checkbox" value="Technology" onChange={interestsHandler} />Technology
        <br />
        <input type="checkbox" value="Fitness" onChange={interestsHandler} />Fitness
        <br />
        <input type="checkbox" value="Cooking" onChange={interestsHandler} />Cooking
        <br />
        <br />

        <label>Want to Receive Updates: </label>
        <br />
        <input type="radio" value="Yes" name="updates" onChange={(event) => setUpdates(event.target.value)} />
        Yes
        <br />
        <input type="radio" value="No" name="updates" onChange={(event) => setUpdates(event.target.value)} />
        No
        <br />
        <br />
        <label htmlFor="comments">Comments: </label>
        <br /> 
        <textarea id="comments" rows="4" cols="40" onChange={(event) => setComments(event.target.value)}></textarea>
        <br /> <br />
        <button type="Submit">Submit</button>
      </form>

      {formData && <div>
        <h2>Submitted Details: </h2>
        <p>Full Name: {name}</p>
        <p>Email: {email}</p>
        <p>Subscription Plan: {plan}</p>
        <p>Interests: {interests.join(", ")}</p>
        <p>Want to Receive Updates: {update}</p>
        <p>Comments: {comments}</p>
      </div>}
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
