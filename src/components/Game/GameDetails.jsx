import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './GameDetails.css'; 

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/games/${id}`)
      .then(response => {
        setGame(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  if (error) {
    return <div className="error">Une erreur est survenue lors du chargement du jeu.</div>;
  }

  return (
    <div className='cnten'>
    <div className="games-details-container">
      <div className="games-video-container">
        <video className="games-video" autoPlay muted loop>
          <source src={game.video_url} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
      <div className="games-content">
        <h1 className="games-title">{game.name}</h1>
        <p className="games-description">{game.description}</p>
        <h3 className="games-rules-title">Règles du jeu</h3>
        <p className="games-rules">{game.rules}</p>
      </div>
      <div className="buttonn-container">
        <button className="apply-button">
          <Link to="/postuler" style={{ textDecoration: 'none', color: 'white' }}>Postuler</Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default GameDetails;