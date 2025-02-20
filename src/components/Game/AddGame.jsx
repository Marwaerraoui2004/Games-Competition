import React, { useState } from "react";
import axios from "axios";
import "./AddGame.css";

const AddGame = () => {
  // États pour stocker les données du formulaire
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rules, setRules] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Données à envoyer au backend
    const gameData = {
      name,
      description,
      rules,
      image,
    };

    try {
      // Envoi des données au backend
      const response = await axios.post("http://127.0.0.1:8000/api/games", gameData);
      setMessage("Jeu ajouté avec succès !");
      console.log("Réponse du serveur :", response.data);

      // Réinitialiser le formulaire après la soumission
      setName("");
      setDescription("");
      setRules("");
      setImage("");
    } catch (error) {
      setMessage("Erreur lors de l'ajout du jeu.");
      console.error("Erreur :", error);
    }
  };

  return (
    <div className="add-game-container">
      <h2>Ajouter un nouveau jeu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom du jeu :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rules">Règles (optionnel) :</label>
          <textarea
            id="rules"
            value={rules}
            onChange={(e) => setRules(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">URL de l'image :</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Ajouter le jeu
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddGame;
