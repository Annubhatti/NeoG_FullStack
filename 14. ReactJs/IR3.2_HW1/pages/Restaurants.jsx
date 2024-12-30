import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Restaurants() {
  return (
    <>
      <Header />
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
                  <h5 className="card-title">Taste of India</h5>
                  <p className="card-text">
                    Enjoy authentic Indian cuisine at Taste of India. Explore a
                    variety of delicious dishes from different regions of India.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Rating: 4.7 | Open Now
                    </small>
                  </p>
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
                  <h5 className="card-title">Pizza Paradise</h5>
                  <p className="card-text">
                    Indulge in mouth-watering pizzas at Pizza Paradise. With a
                    variety of toppings and crusts, its a pizza lovers dream.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Rating: 4.5 | Open Now
                    </small>
                  </p>
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
