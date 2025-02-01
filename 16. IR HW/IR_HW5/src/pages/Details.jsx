import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Details = () => {
  const pId = useParams();

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

  const player = players.find((player) => player.id == pId.playerId);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>{player.name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Name: </b>
            {player.name}
          </li>
          <li className="list-group-item">
            <b>Position: </b>
            {player.position}
          </li>
          <li className="list-group-item">
            <b>Team: </b>
            {player.team}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Details;
