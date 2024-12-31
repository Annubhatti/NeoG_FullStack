import "./App.css";
import { useState } from "react";

const UserProfilePage = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);
  const [color, setColor] = useState("");

  const [formData, setFormData] = useState(false);

  
  const interestsHandler = (event) => {
    let value = event.target.value;
    if(event.target.value){
      setInterests([...interests, value])
    }else{
      setInterests(interests.filter(interest => interest != value))
    }
  };

  const colorSelectHandler = (event) => {
    setColor(event.target.value);
  };

  const formHandler = (event) =>{
    event.preventDefault();
      if(name && address && gender && interests && color){
        setFormData(true)
      }

  };

  return (
    <div>
      <main>
        <h1>User Profile Form</h1>
        <br />
        <form onSubmit={formHandler}>
        <label htmlFor="">Name: </label>
        <input onChange={(event) => setName(event.target.value)} />
        <br /> <br />
        <label htmlFor="">Address: </label>
        <br /> 
        <textarea rows="4" cols="40" onChange={(event) => setAddress(event.target.value)}></textarea>
        <br /> <br />
        <label>Gender: </label>
        <br />
        <input type="radio" value="Female" name="gender" onChange={(event) => setGender(event.target.value)} />
        Female
        <br />
        <input type="radio" value="Male" name="gender" onChange={(event) => setGender(event.target.value)} />
        Male
        <br />
        <input type="radio" value="Other" name="gender" onChange={(event) => setGender(event.target.value)} />
        Other

        <br /> <br />
        <label htmlFor="">Interests:</label>
        <br />
        <input type="checkbox" value="Reading" onChange={interestsHandler} />Reading
        <br />
        <input type="checkbox" value="Singing" onChange={interestsHandler} />Singing
        <br />
        <input type="checkbox" value="Painting" onChange={interestsHandler} />Painting
        <br />

        <br />
        <label htmlFor="colorSelect">Favourite color: </label>
        <select id="colorSelect" onChange={colorSelectHandler}>
          <option value="Red">Red</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
        </select>
        <br />
        <br />
        <button type="Submit">Submit</button>
      </form>

      {formData && <div>
        <h2>Submitted Details: </h2>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Gender: {gender}</p>
        <p>Interests: {interests.join(", ")}</p>
        <p>Favourite Color: {color}</p>
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
        <UserProfilePage />
      </main>
    </div>
  );
}
