import Header from "../../secondProject/src/components/Header";
import Footer from "../../secondProject/src/components/Footer";

export default function Cart() {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

  const totalPrice = cart.reduce(
    (total, item) => total + item.price*item.quantity,
    0
  );
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-4">Shopping Cart</h1>
        <div className="list-group">
          {cart.map((item) => (
            <div
              key={item.id}
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.name}</h5>
                <small>Total: ${(item.price * item.quantity).toFixed(2)}</small>
              </div>
              <p className="mb-1">Price: ${item.price.toFixed(2)}</p>
              <small>Quantity: {item.quantity}</small>
            </div>
          ))}
        </div>

        <hr />
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </main>
      <Footer />
    </>
  );
}
