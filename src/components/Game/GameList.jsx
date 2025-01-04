import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/games') 
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the games!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            {game.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
