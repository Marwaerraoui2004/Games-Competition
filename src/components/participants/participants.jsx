import React, { useState, useEffect } from "react";
import axios from "axios";
import "./participants.css";
export default function Participants() {
  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/participants");
        setParticipants(response.data); 
      } catch (error) {
        console.error(error);
        setMessage("Erreur lors du chargement des participants.");
      }
    };

    fetchParticipants();
  }, []);

  return (
    <div className="participants-container">
        <video className="bg-video" autoPlay muted loop>
        <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm" type="video/mp4" />
        </video>
      <h2>Liste des Participants</h2>
      {message && <p className="error-message">{message}</p>}
      <ul className="participants-list">
        {participants.length > 0 ? (
          participants.map((participant) => (
            <li key={participant.id} className="participant-item">
              <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDFhkhRnP9MfNicwQMlCd8HsSPo_yfFM3wQ&s" alt="" />{participant.name}</span> - <span>score : 0</span>
            </li>
          ))
        ) : (
          <li>Aucun participant trouvé.</li>
        )}
      </ul>
    </div>
  );
}
