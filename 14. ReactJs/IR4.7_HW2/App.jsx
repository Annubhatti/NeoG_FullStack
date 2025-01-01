import "./App.css";
import { useState } from "react";

const SubscriptionForm = () => {
  const [name, setName] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [toppings, setToppings] = useState([]);
  const [crustOption, setCrustOption] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [comments, setComments] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sizeHandler = (event) => {
    setPizzaSize(event.target.value);
  };

  const toppingSelectHandler = (event) => {
    const { checked, value } = event.target;
    setToppings((prevToppings) =>
      checked ? [...prevToppings, value] : prevToppings.filter((top) => top !== value)
    );
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (name && pizzaSize && crustOption && deliveryOption) {
      setFormSubmitted(true);
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div>
      <main>
        <h1>Pizza Order Form</h1>
        <br />
        <form onSubmit={formHandler}>
          <label htmlFor="userName">Customer Name: </label>
          <input id="userName" onChange={(event) => setName(event.target.value)} />
          <br /> <br />

          <label htmlFor="pizzaSize">Choose Pizza Size: </label>
          <select id="pizzaSize" onChange={sizeHandler}>
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <br /> <br />

          <label htmlFor="topping">Choose Toppings: </label>
          <br />
          <input
            type="checkbox"
            value="Pepperoni"
            onChange={toppingSelectHandler}
          />{" "}
          Pepperoni
          <br />
          <input
            type="checkbox"
            value="Mushrooms"
            onChange={toppingSelectHandler}
          />{" "}
          Mushrooms
          <br />
          <input
            type="checkbox"
            value="Olives"
            onChange={toppingSelectHandler}
          />{" "}
          Olives
          <br /> <br />

          <label>Choose Crust Type: </label>
          <br />
          <input
            type="radio"
            value="Thin"
            name="crust"
            onChange={(event) => setCrustOption(event.target.value)}
          />
          Thin
          <br />
          <input
            type="radio"
            value="Thick"
            name="crust"
            onChange={(event) => setCrustOption(event.target.value)}
          />
          Thick
          <br />
          <br />

          <label>Choose Delivery Option: </label>
          <br />
          <input
            type="radio"
            value="Pickup"
            name="delivery"
            onChange={(event) => setDeliveryOption(event.target.value)}
          />
          Pickup
          <br />
          <input
            type="radio"
            value="Delivery"
            name="delivery"
            onChange={(event) => setDeliveryOption(event.target.value)}
          />
          Delivery
          <br />
          <br />

          <label htmlFor="comments">Special Instructions (if any): </label>
          <br />
          <textarea
            id="comments"
            rows="3"
            cols="50"
            onChange={(event) => setComments(event.target.value)}
          ></textarea>
          <br /> <br />
          <button type="Submit">Place Order</button>
        </form>

        {formSubmitted && (
          <div>
            <h2>Submitted Details:</h2>
            <p>Customer Name: {name}</p>
            <p>Pizza Size: {pizzaSize}</p>
            <p>
              Toppings: {toppings.length > 0 ? toppings.join(", ") : "No toppings selected"}
            </p>
            <p>Crust Type: {crustOption}</p>
            <p>Delivery Option: {deliveryOption}</p>
            <p>Special Instructions: {comments || "No special instructions"}</p>
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
