import "./App.css";
import Header from './components/Header';
import Footer from "./components/Footer";
import { Link } from "react-router-dom";


export default function App() {
  return (
    <>
    <Header />
    <main className="container py-4">
      
        <h1>Featured Products</h1>
        <div className="row">

          <div className="col">
            <div className="card">
              <img src="https://placehold.co/400x300" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/products/1" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="https://placehold.co/400x300" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/products/2" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src="https://placehold.co/400x300" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Link to="/products/3" className="btn btn-primary">View Product</Link>
              </div>
            </div>
          </div>

        </div>
    </main>
    <Footer />
    </>
  );
}
