import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import './GameList.css'; 
import { Link } from "react-router-dom";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import StarRating from "./StareRating"; 

const GameList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ratings, setRatings] = useState({}); 
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

  const handleRatingChange = (gameId, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [gameId]: rating
    }));
  };

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
                <img src={game.image} alt="" className="game-img"/>
                <div className="game-info">
                  <h2 className="game-title">{game.name}</h2>
                  <StarRating
                    rating={ratings[game.id] || 0}
                    onRatingChange={(rating) => handleRatingChange(game.id, rating)}
                  />
                  <p>
                    <button className="game-button">
                      <Link 
                        to={`/game-details/${game.id}`} 
                        style={{ textDecoration: 'none', color: 'red' }}>
                        Voir les détails
                      </Link>
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
    <JoinCommunity />
</div>
    </div>
  );
};

export default GameList;