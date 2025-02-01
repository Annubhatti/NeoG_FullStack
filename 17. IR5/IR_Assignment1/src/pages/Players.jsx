import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { playersData } from "../utils/common";
import { Link } from "react-router-dom";

const Players = () => {
  const [team, setTeam] = useState("All");

  const filteredPlayers =
    team === "All"
      ? playersData
      : playersData.filter((player) => player.team === team);

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2>List of Players</h2>
        <div className="my-4">
          <label>Filter By Team: </label>
          <select
            className="form-select"
            onChange={(e) => setTeam(e.target.value)}>
            <option value="All">All Teams</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Manchester United">Manchester United</option>
            <option value="Paris Saint-Germain">Paris Saint-Germain</option>
            <option value="Bayern Munich">Bayern Munich</option>
          </select>
        </div>
        <div>
          <ul className="list-group">
            {filteredPlayers.map((player) => (
              <li key={player.id} className="list-group-item">
                <h4>{player.name}</h4>
                <p>Position: {player.position}</p>
                <p>Team: {player.team}</p>
                <Link to={`/players/${player.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Players;