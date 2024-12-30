import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Stays() {
  return (
    <>
    <Header />
    <main className="container py-4">
      <h1>Products</h1>
      <div>
        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://placehold.co/300x300"
                className="img-fluid rounded-start"
                alt="product 1"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">
                Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                  Price: $99.99
                  </small>
                </p>
                <Link to="/products/1" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://placehold.co/300x300"
                className="img-fluid rounded-start"
                alt="product 2"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">
                Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                  Price: $199.99
                  </small>
                </p>
                <Link to="/products/2" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://placehold.co/300x300"
                className="img-fluid rounded-start"
                alt="product 3"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">
                Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Price: $99.99
                  </small>
                </p>
                <Link to="/products/3" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
    
    <Footer />
    </>
  );
}
