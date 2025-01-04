import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GameDetails = () => {
  const { id } = useParams(); 
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/games/${id}`)
      .then(response => setGame(response.data))
      .catch(error => console.error('Erreur:', error));
  }, [id]);

  if (!game) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <h3>Règles</h3>
      <p>{game.rules}</p>
    </div>
  );
};

export default GameDetails;
