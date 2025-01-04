import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CompetitionProvider } from './components/context/CompetitionContext';
// import GameDetails from './components/Game/GameDetails';
import CompetitionDetails from './components/Competition/CompetitionDetails';
import UserList from './components/User/UserList';
import UserRegistration from './components/User/UserRegistration';
import GameList from './components/Game/GameList';

const App = () => {
  return (
    <CompetitionProvider>

      <Router>
        <UserRegistration/>
        <Routes>
          <Route path="/games" element={<GameList/>} />
          <Route path="/competitions/:id" element={<CompetitionDetails />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/registrations/:competitionId" element={<UserRegistration />} />
        </Routes>
      </Router>
    </CompetitionProvider>
  );
};

export default App;
