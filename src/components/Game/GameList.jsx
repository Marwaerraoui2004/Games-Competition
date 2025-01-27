import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './GameList.css'; // Importez le fichier CSS
import { Link } from "react-router-dom";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const gameListRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/games")
      .then((response) => {
        setGames(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the games!", error);
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return (
      <div className="loading">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="video-container">
        <h1 className="video-title">Explore Our Games Collection</h1>
        <video className="background-video" autoPlay muted loop>
          <source
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/1f5b2cf01a1cf2afa1ce61febee6e2e900808347.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="game-list-container">
        <div className="game-container">
          <div ref={gameListRef} className="game-list">
            {games.map((game) => (
              <div key={game.id} className="game-card">
                <video className="game-video" autoPlay muted loop>
                    <source src={game.video_url} type="video/mp4" />
                </video>
                <div className="game-info">
                  <h2 className="game-title">{game.name}</h2>
                  <p className="game-description">{game.description}</p>
                  <center><p className="game-rules">Rules</p></center>
                  <p className="game-rl">{game.rules}</p>
                  <button
                    className="apply-button"
                  >
                    <Link to="/postuler" style={{ textDecoration: 'none', color: 'white' }}>Postuler</Link>
                    
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameList;