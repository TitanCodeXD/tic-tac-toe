import React from 'react';
import './styles.css';
import playerX from '../../img/Player-X.png';
import playerO from '../../img/Player-O.png';


const Player = ({player}) => {
    const players = [];
    players['x'] = playerX;
    players['X'] = playerX;
    players['o'] = playerO;
    players['O'] = playerO;

    return <button className = "player">
        <img src = {players[player]} alt = {`Jogador ${player.toUpperCase()}`}></img>
    </button>

};


export default Player