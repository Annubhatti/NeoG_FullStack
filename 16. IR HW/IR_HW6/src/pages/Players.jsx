import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Players = () => {
  const players = [
    {
      id: "1",
      player: "Player 1",
      role: "Batsman",
      country: "India",
    },
    {
      id: "2",
      player: "Player 2",
      role: "Bowler",
      country: "Australia",
    },
  ];

  const playerListing = players.map((player) => (
    <div className="card my-3" key={player.id}>
      <h3 className="card-header">{player.player}</h3>
      <div className="card-body">
        <p>
          <b>Country: </b>
          {player.country}
        </p>
        <p>
          <b>Role: </b>
          {player.role}
        </p>
        <Link to={`/players/${player.id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>List of Cricket Players</h2>
        <div className="col-md-5">{playerListing}</div>
      </main>
    </>
  );
};

export default Players;
