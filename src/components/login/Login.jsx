import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Importation du hook useNavigate
import './login.css';

export default function RegisterForCompetition() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();  // Initialisation du hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi des données de l'utilisateur à l'API Laravel
      const response = await axios.post("http://127.0.0.1:8000/api/competitions/register", {
        name,
        email,
      });

      // Affichage du message de succès
      setMessage(response.data.message);

      // Redirection vers /home après succès
      navigate('/home');
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'inscription. Vérifiez vos données.");
    }
  };

  // Fonction pour gérer l'appui sur la touche 'Entrée'
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e); // Appeler handleSubmit si 'Entrée' est pressée
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
            onKeyDown={handleKeyDown}  // Ajouter l'événement pour 'Entrée'
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onKeyDown={handleKeyDown}  // Ajouter l'événement pour 'Entrée'
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
