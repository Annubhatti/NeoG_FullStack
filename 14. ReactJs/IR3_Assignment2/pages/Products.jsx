import Header from "../../secondProject/src/components/Header";
import Footer from "../../secondProject/src/components/Footer";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description:
        "Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 89.99,
      imageUrl: "https://placehold.co/300x300",
    },
    {
      id: 2,
      name: "Product 2",
      description:
        "Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 59.99,
      imageUrl: "https://placehold.co/300x300",
    },
    {
      id: 3,
      name: "Product 3",
      description:
        "Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      imageUrl: "https://placehold.co/300x300",
    },
    {
      id: 4,
      name: "Product 4",
      description:
        "Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 49.99,
      imageUrl: "https://placehold.co/300x300",
    },
  ];

  // Filter products with price < $80
  const affordableProducts = products.filter((product) => product.price < 80);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Products</h1>
        <div>
          {products.map((product) => (
            <div className="card mt-3" key={product.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.imageUrl}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Price: ${product.price.toFixed(2)}
                      </small>
                    </p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr />
          <h2 className="display-4">Affordable Products</h2>
          {affordableProducts.length > 0 ? (
            affordableProducts.map((product) => (
             
              <div key={product.id}>
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <p>
                <small className="text-body-secondary">
                  Price: ${product.price.toFixed(2)}
                </small>
              </p> 
             
              </div>
            ))
          ) : (
            <p>No affordable products available.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
