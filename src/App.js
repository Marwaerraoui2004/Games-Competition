import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CompetitionProvider } from './components/context/CompetitionContext';
// import GameDetails from './components/Game/GameDetails';
// import CompetitionDetails from './components/Competition/CompetitionDetails';
import UserList from './components/User/UserList';
import UserRegistration from './components/User/UserRegistration';
import GameList from './components/Game/GameList';
// import Login from './components/login/Login';
import Navbar from './components/header/NavBar';
import CompetitionList from './components/Competition/CompetitionList';

const App = () => {
  return (
    <CompetitionProvider>

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/games" element={<GameList/>} />
          <Route path="/competitions" element={<CompetitionList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/registrations/:competitionId" element={<UserRegistration />} />
        </Routes>
      </Router>
    </CompetitionProvider>
  );
};

export default App;
