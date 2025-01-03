
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';  

export const fetchGames = async () => {
  const response = await axios.get(`${API_URL}/games`);
  return response.data;
};

export const fetchCompetitions = async () => {
  const response = await axios.get(`${API_URL}/competitions`);
  return response.data;
};

export const registerUserToCompetition = async (userId, competitionId) => {
  const response = await axios.post(`${API_URL}/registrations`, {
    user_id: userId,
    competition_id: competitionId,
    status: 'en_attente',
  });
  return response.data;
};
