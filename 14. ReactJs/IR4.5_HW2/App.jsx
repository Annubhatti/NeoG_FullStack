import "./App.css";
import { useState } from "react";

const SelectLanguage = () => {
  const [language, setLanguage] = useState("");

  const onChangeHandler = (event) => {
    setLanguage(event.target.value)
  };
  return (
    <div>
      <form onChange={onChangeHandler}>
      <label>Select your proficiency in a programming language: </label>
      <br />
      <input
        type="radio"
        value="Beginner"
        name="language"
      />Beginner
      <br />
      <input
        type="radio"
        value="Intermediate"
        name="language"
      />Intermediate
      <br />
      <input
        type="radio"
        value="Advanced"
        name="language"
      />Advanced
      </form>
      <p>Selected proficiency level: {language}</p>
    </div>
  );
};

const TravelDestination = () =>{
  const [destination, setDestination] = useState("");

  const destinationHandler =(event) => {
    setDestination(event.target.value);
  }

  return(
    <div>
      <form onChange={destinationHandler}>
        <label>Select your dream travel destination: </label>
        <br />
      <input
        type="radio"
        value="Beach"
        name="travel"
      />Beach
      <br />
      <input
        type="radio"
        value="Mountain"
        name="travel"
      />Mountain
      <br />
      <input
        type="radio"
        value="City"
        name="travel"
      />City
      </form>
      <p>Selected travel destination: {destination}</p>
    </div>
  )

}

const CoffeePreference = () =>{
  const [coffee, setCoffee] = useState("");

  const coffeePreferenceHandler = (event) => {
    setCoffee(event.target.value);
  }

  return (
    <div>
      <form onChange={coffeePreferenceHandler}>
      <label>Select your coffee preference: </label>
      <br />
      <input
        type="radio"
        value="Black Coffee"
        name="meal"
      />Black Coffee
      <br />
      <input
        type="radio"
        value="Latte"
        name="meal"
      />Latte
      <br />
      <input
        type="radio"
        value="Cappuccino"
        name="meal"
      />Cappuccino
      </form>
      <p>Selected coffee preference: {coffee}</p>
    </div>
  );
}

const SelectedPet = () =>{
  const [pets, setPets] = useState("");

  const PreferredPetHandler = (event) => {
    setPets(event.target.value);
  }

  return (
    <div>
      <form onChange={PreferredPetHandler}>
      <label>Select your preferred pet: </label>
      <br />
      <input
        type="radio"
        value="Dog"
        name="pet"
      />Dog
      <br />
      <input
        type="radio"
        value="Cat"
        name="pet"
      />Cat
      <br />
      <input
        type="radio"
        value="Fish"
        name="pet"
      />Fish
      </form>
      <p>Selected pet: {pets}</p>
    </div>
  );
}

const SportSelected = () =>{
  const [sports, setSports] = useState("");

  const sportPreferenceHandler = (event) => {
    setSports(event.target.value);
  }

  return (
    <div>
      <form onChange={sportPreferenceHandler}>
      <label>Select your favorite sport: </label>
      <br />
      <input
        type="radio"
        value="Basketball"
        name="sport"
      />Basketball
      <br />
      <input
        type="radio"
        value="Football"
        name="sport"
      />Football
      <br />
      <input
        type="radio"
        value="Tennis"
        name="sport"
      />Tennis
      </form>
      <p>Selected sport: {sports}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <main>
        <SelectLanguage />
        <TravelDestination />
        <CoffeePreference />
        <SelectedPet />
        <SportSelected />
      </main>
    </div>
  );
}
