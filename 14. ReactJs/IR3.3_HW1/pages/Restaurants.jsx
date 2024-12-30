import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Restaurants() {
  return (
    <div>
      <Header />
      <div>
      <main className="container py-4">
        <h1>Restaurants</h1>
        <div>
          <div className="card mt-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://th.bing.com/th/id/OIP.PMqWalG0o9orq9s5HezHpQHaFR?rs=1&pid=ImgDetMain"
                  className="img-fluid rounded-start"
                  alt="restaurant 1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Golden Spoon</h5>
                  <p className="card-text">
                    Enjoy authentic Indian cuisine at The Golden Spoon. Explore a
                    variety of delicious dishes from different regions of India.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Rating: 4.7 | Open Now
                    </small>
                  </p>
                  <Link to="/restaurants/1" className="btn btn-primary">View More</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://th.bing.com/th/id/OIP.daz0e05KjkhljvefPzkV2wHaFj?rs=1&pid=ImgDetMain"
                  className="img-fluid rounded-start"
                  alt="restaurant 2"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Spice Junction</h5>
                  <p className="card-text">
                    Indulge in mouth-watering pizzas at Spice Junction. With a
                    variety of toppings and crusts, its a pizza lovers dream.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Rating: 4.5 | Open Now
                    </small>
                  </p>
                  <Link to="/restaurants/2" className="btn btn-primary">View More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      <Footer />
    </div>
  );
}
