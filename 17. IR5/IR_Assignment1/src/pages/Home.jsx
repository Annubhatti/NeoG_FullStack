import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Header />
      <div className="container py-4">
        <div>
          <img
            alt="player"
            src="https://placehold.co/400x300?text=Player+Smiling"
            className="img-fluid"
          />
        </div>
        <div className="mt-4">
          <h2>Our Players</h2>
          <p>
            Meet our talented team of player who work hard to achieve success on
            field.
          </p>
          <Link to="/players" className="btn  btn-primary">
            View Players
          </Link>
        </div>
        <div className="mt-4">
          <h2>Team Performance</h2>
          <p>
            Explore our team performance statistics to gain insights of our
            success on the field.
          </p>
          <Link to="/report" className="btn  btn-primary">
            View Performance
          </Link>
        </div>
      </div>
     <Footer />
    </>
  );
};

export default Home;