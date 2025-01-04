import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = ({ competitionId }) => {
  const [status, setStatus] = useState('en_attente');
  const [score, setScore] = useState(0);

  const handleRegister = () => {
    axios.post('http://127.0.0.1:8000/api/registrations', { competition_id: competitionId, status, score })
      .then(response => alert('Inscription réussie!'))
      .catch(error => console.error('Erreur:', error));
  };

  return (
    <div>
      <h3>Inscription à la compétition</h3>
      <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="en_attente">En attente</option>
          <option value="accepté">Accepté</option>
          <option value="rejeté">Rejeté</option>
        </select>
      </div>
      <div>
        <label>Score:</label>
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
      </div>
      <button onClick={handleRegister}>S'inscrire</button>
    </div>
  );
};

export default UserRegistration;
