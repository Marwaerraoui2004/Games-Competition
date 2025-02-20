import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CompetitionProvider } from './components/context/CompetitionContext';
import GameList from './components/Game/GameList';
import Navbar from './components/header/NavBar';
import Home from './components/HomePage/Home';
import Intro from './components/intro/Intro';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Participants from './components/participants/participants';
import GameDetails from './components/Game/GameDetails';
const App = () => {
  const [isIntroCompleted, setIsIntroCompleted] = useState(() => {
    return localStorage.getItem('introCompleted') === 'true';
  });
  const handleIntroComplete = () => {
    setIsIntroCompleted(true);
    localStorage.setItem('introCompleted', 'true');
  };

  return (
  <div className="app"> 
    <CompetitionProvider>
      <Router>
        {isIntroCompleted && <Navbar />} 

        <Routes>
        <Route path="/" element={<Intro onIntroComplete={handleIntroComplete} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/games" element={<GameList />}/>
          <Route path="/postuler" element={<Login />}/>
          <Route path="/game-details/:id" element={<GameDetails />}/>
        </Routes>
        {isIntroCompleted && <Footer/>} 
      </Router>
    </CompetitionProvider>
    </div>
  );
};

export default App;
