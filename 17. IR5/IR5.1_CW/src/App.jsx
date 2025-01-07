import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import { Link } from "react-router-dom";



const App = () => {
  return (
    <>
    <Header />
    <div className="container">

    <section className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://placehold.co/400x300/EFEFEFF/grey?text=Movies%20Cover"
            alt="Movies Cover Image"
            className="img-fluid"
          />
        </div>
      </div>
    </section>

    <section className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Our Movies</h2>
          <p>Explore our collection of movies spanning various genres and thems.</p>
          <Link to="/movies" className="btn btn-primary">
            View Movies
          </Link>
        </div>
      </div>
    </section>

    <section className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Movie Report</h2>
          <p>Check our curated report on movies.</p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </div>
      </div>
    </section>

    </div>
     <Footer />
    </>
  );
};

export default App;
