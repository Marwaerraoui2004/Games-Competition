import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CompetitionDetails = () => {
  const { id } = useParams(); 
  const [competition, setCompetition] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/competitions/${id}`)
      .then(response => setCompetition(response.data))
      .catch(error => console.error('Erreur:', error));
  }, [id]);

  if (!competition) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{competition.title}</h1>
      <p>Début: {new Date(competition.start_date).toLocaleString()}</p>
      <p>Fin: {new Date(competition.end_date).toLocaleString()}</p>
    </div>
  );
};

export default CompetitionDetails;
