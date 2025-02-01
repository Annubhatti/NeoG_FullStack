import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { playersData} from "../utils/common";
import { useParams } from 'react-router-dom';

function PlayerDetails() {
  const p = useParams();

  const selectedPlayer = playersData.find((player) => player.id == p.playerId);
  return (
    <div>
      <Header />
      <div className='container py-4'>
        <h2>
          {selectedPlayer.name}
        </h2>
        <ul className='list-group'>
          <li className='list-group-item'>
            <b>Name:</b> {selectedPlayer.name}
          </li>
          <li className='list-group-item'>
            <b>Position:</b> {selectedPlayer.position}
          </li>
          <li className='list-group-item'>
            <b>Team:</b> {selectedPlayer.team}{" "}
          </li>
        </ul>
      </div>
      <Footer />
      
    </div>
  )
}

export default PlayerDetails
