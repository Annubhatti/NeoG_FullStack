import { createStore } from "redux";

import cartReducer from "./cartReducer";
import { addToCart, calculateTotal, removeFromCart } from "./action";

const store = createStore(
    cartReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const products = [  

    { id: 1, name: "Product A", price: 10 },  
    
    { id: 2, name: "Product B", price: 20 },  
    
    { id: 3, name: "Product C", price: 15 } 
    
];

const productList = document.querySelector("#productList");
const cartItemList = document.querySelector("#cartItemList");

const totalPrice = document.querySelector("#totalPrice");

window.addProductToCart = (product) => {
    store.dispatch(addToCart(product));
};

const calculateTotalPrice = () => {
    store.dispatch(calculateTotal());
  };
  
  const updateCart = () => {
    const state = store.getState();
    if (state) {
        cartItemList.innerHTML = state.cartItems
        .map(
          (item) =>
            `<li key="${item.id}">${item.name} - Rs.${item.price} - Quantity: ${item.quantity} <button onClick="removeItem(${item.id})">Remove</button></li>`
        )
        .join("");
      totalPrice.textContent = `Total: Rs. ${state.totalPrice}`;
    }
  };
  
  updateCart();
  store.subscribe(() => {
    updateCart();
    calculateTotalPrice();
  });