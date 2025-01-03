import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CompetitionProvider } from './components/context/CompetitionContext';
import GameDetails from './components/Game/GameDetails';
import CompetitionDetails from './components/Competition/CompetitionDetails';
import UserList from './components/User/UserList';
import UserRegistration from './components/User/UserRegistration';

const App = () => {
  return (
    <CompetitionProvider>
      <Router>
        <Routes>
          <Route path="/games/:id" element={<GameDetails/>} />
          <Route path="/competitions/:id" element={<CompetitionDetails />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/registrations/:competitionId" element={<UserRegistration />} />
        </Routes>
      </Router>
    </CompetitionProvider>
  );
};

export default App;
