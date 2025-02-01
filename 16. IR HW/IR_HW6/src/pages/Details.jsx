import React from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Details = () => {
  const p = useParams();

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

  const player = players.find((player) => player.id == p.playerId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Player Details</h1>
        <div className="card">
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Details;
