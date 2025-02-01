import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container pt-5 pb-3">
        <div>
          <img
            className="img-fluid"
            alt="Player Playing"
            src="https://placehold.co/500x300?text=Player Playing"
          />
        </div>
        <div className="pt-4">
          <h2>Our Players</h2>
          <p>
            Meet our talented team of players who work hard to achieve success
            on field.
          </p>
          <Link to="/players" className="btn btn-primary">
            View Players
          </Link>
        </div>
        <div className="pt-4">
          <h2>Team Performance</h2>
          <p>
            Explore our team&apos;s performance statistics to gain insights into
            our success on field.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Performance
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
