import "./App.css"
import { useState } from 'react'

const ToggleImg = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const images = [
    "https://placehold.co/100x100?text=Image+1",
    "https://placehold.co/100x100?text=Image+2",
    "https://placehold.co/100x100?text=Image+3",
  ];

  return (
    <> 
    <div>
       {selectedImage && (<img className="mb-2" src={selectedImage} width="200" alt="selected" />)}
    </div>

    {images.map((imge, index) => (
      <span key={index}> <img
          src={imge}
          onClick ={() => setSelectedImage(imge)}
          style ={{cursor: "pointer"}}
      /></span>
    ) )}
    </>
  )
};

const AddItems = () => {
  const [items, setItems] = useState([]); // State to store list items

  const addItem = () => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div>
      <button onClick={addItem}>Show Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const ChangingBackground = () =>{
  const [selectedColor, setColor] = useState("lightblue");
  const colors = ["lightblue", "lightgreen", "lightpink", "lightgray"];

  const colorHandler = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };


  return(
    <div style={{backgroundColor: selectedColor}}>
      <p>Background color is {selectedColor}</p>
      <button onClick={colorHandler}>Change Color</button>
    </div>
  )
}


const ToggleLodingText = () => {
  const[text , setText] = useState("Content has loded.");

  return(
    <div>
      <p>{text}</p>
        <button onClick={()=> setText((prevText) => prevText === "Content has loaded." ? "Loading..." : "Content has loded.")}>Toggle Loading</button>
    </div>
  )
}

function ToggleLast() {
  const arr= ["Item 1", "Item 2", "Item 3"];
  const [last, setLast] = useState("Item 1");

  return (
    <>
    <ul className="list-unstyled">
      {arr.map((itm, index) => (
        <li
          key={index}
          onClick={() => setLast(itm)}
            style = {{
              coursior: "pointer",
              color: last === itm ? "blue" : "black",
            }}
            >
            {itm}
        </li>
      ))}
    </ul>
    {last && <p>You Selected: <strong>{last}</strong></p>}
    </>
  )
}



const App = () => {
  return (
    <div>
      <main>
          <ToggleImg />
          <hr />
          <AddItems />
          <hr />
          <ChangingBackground />
          <hr />
          <ToggleLodingText />
          <hr />
          <ToggleLast />
      </main>
    </div>
  )
}

export default App
