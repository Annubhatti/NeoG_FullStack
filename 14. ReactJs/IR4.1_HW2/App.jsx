import "./App.css"
import { useState } from 'react'

const ImageToggle = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    "https://placehold.co/100x100?text=Image+1",
    "https://placehold.co/100x100?text=Image+2",
    "https://placehold.co/100x100?text=Image+3",
  ];

  return (
    <div style={{ textAlign: "center" }}>
      {/* Display all images in the same row */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            style={{
              cursor: "pointer",
              border: selectedImage === img ? "3px solid blue" : "1px solid gray",
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Display the selected image below */}
      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Image:</h3>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", border: "2px solid black" }}
          />
        </div>
      )}
    </div>
  );
};

const AddItems = () => {
  const [items, setItems] = useState([]); // Initialize state as an empty array

  const handleClick = () => {
    setItems((prevItems) => [...prevItems, `Item ${prevItems.length + 1}`]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const ChangingBackground = () =>{
  const [selectedColor, setColor] = useState("lightblue");

  const changeColor =() =>{
    setColor((prevColor) => (prevColor === "lightblue" ? "lightgreen": "lightblue"));
  }

  return(
    <div style={{backgroundColor: selectedColor}}>
      <p>Background color is {selectedColor}</p>
      <button onClick={changeColor}>Change Color</button>

    </div>
  )
}




const App = () => {
  return (
    <div>
      <main>
          <ImageToggle />
          <hr />
          <AddItems />
          <hr />
          <ChangingBackground />
      </main>
    </div>
  )
}

export default App
