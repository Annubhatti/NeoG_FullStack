import { useState } from "react";
import "./App.css";

function ShowRecipe() {
  const [recipelist, setRecipelist] = useState([]);
  const [final, setFinallist] = useState([]);

  const listHandler = (event) => {
    const input = event.target.value;
    const stp = input.split(". ");
    setRecipelist(stp); // mistake was i was returning and not set  updating.
  }


  const btnHandler = () => {
    let ans = recipelist.map((word, index) => (
        <li key={index}>{word}</li>
      ) )
      setFinallist(ans)
  }

  return (
    <>
      <label htmlFor="uselist">Enter the recipe: </label>
      <textarea
        type="text"
        id="uselist"
        rows={"5"}
        cols={"50"}
        onChange={listHandler}
      />
      <button onClick={btnHandler}>Save Recipe</button>
      <br /> <br />
      {final.length > 0 && <ol>{final}</ol>}
    </>
  );
}

function Diary() {

  const [feed, setfeed] =  useState();
  const [newfeed, setnewfeed] = useState();

  return(
    <div>
      <label htmlFor="usefeed">Enter the recipe: </label>
      <textarea
        type="text"
        id="usefeed"
        rows={"5"}
        cols={"50"}
        onChange={(e) => setfeed(e.target.value)}
      />
      <button onClick={() => setnewfeed(feed)}>Submit</button>
      {newfeed && (
        <p>
          <i>Your Diary: {newfeed}</i>
        </p>
      )}
    </div>
  )

}


function Food() {

  const [food, setfood] =  useState([]);
  const [final, setfinal] = useState([]);

  const setHandle = (event) => {
    const fod = event.target.value; // get the input value
    const ans = fod.split(",  ");
    setfood(ans);
  }

  const foodHandler = () => {
    setfinal(food); // directly store the array in final statate
  }

  return(
    <div>
      <label htmlFor="usefood">Enter the list of food: </label>
      <textarea
        type="text"
        id="usefood"
        rows={"5"}
        cols={"50"}
        onChange={setHandle}
      />
      <button onClick={foodHandler}>Display Items</button>
      {
        final.length > 0 && (
          <ul>
            {final.map((item, index) => (
              <li key={index}>{item}</li> //dynamicaly rendre list items
            ))}
          </ul>
        )
      }
    </div>
  )

}



export default function App() {
  return (
    <>
    <br />
      <ShowRecipe />
      <br /> <br />
      <Diary />
      <br /> <br />
      <Food />
      
    </>
  );
}
