import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Players = () => {
  const players = [
    {
      id: 1,
      name: "Lionel Messi",
      position: "Forward",
      team: "Paris Saint-Germain",
    },

    {
      id: 2,
      name: "Cristiano Ronaldo",
      position: "Forward",
      team: "Manchester United",
    },
    {
      id: 3,
      name: "Neymar Jr",
      position: "Forward",
      team: "Paris Saint-Germain",
    },
  ];

  const playerListing = players.map((player) => (
    <li key={player.id} className="list-group-item">
      <h4>{player.name}</h4>
      <p>{player.position}</p>
      <Link to={`/players/${player.id}`} className="btn btn-primary">
        View Details
      </Link>
    </li>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>List of Players</h1>
        <ul className="list-group">{playerListing}</ul>
      </main>
      <Footer />
    </>
  );
};

export default Players;
