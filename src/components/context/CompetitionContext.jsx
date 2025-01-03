import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CompetitionContext = createContext();

export const useCompetition = () => {
  return useContext(CompetitionContext);
};

export const CompetitionProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    axios.get('/api/competitions')
      .then(response => setCompetitions(response.data))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <CompetitionContext.Provider value={{ competitions }}>
      {children}
    </CompetitionContext.Provider>
  );
};
