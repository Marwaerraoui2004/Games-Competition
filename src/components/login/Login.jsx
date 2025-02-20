import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  
import './login.css';

export default function RegisterForCompetition() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/competitions/register", {
        name,
        email,
      });

      setMessage(response.data.message);

      navigate('/participants');
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'inscription. Vérifiez vos données.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e); 
    }
  };

  return (
    <div className="form-container">
      <div className="register-form">
        <h2 className="form-heading">Inscription au Jeux</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            onKeyDown={handleKeyDown}  
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onKeyDown={handleKeyDown} 
          />
          <button type="submit" className="submit-button">
            Postuler
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}
