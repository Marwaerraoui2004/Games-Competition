import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CompetitionProvider } from './components/context/CompetitionContext';
import UserList from './components/User/UserList';
import UserRegistration from './components/User/UserRegistration';
import GameList from './components/Game/GameList';
import Navbar from './components/header/NavBar';
import CompetitionList from './components/Competition/CompetitionList';
import Home from './components/HomePage/Home';
import Intro from './components/intro/Intro';
import DetailsComp from './components/HomePage/detailsComp';
import About from './components/company/About';
const App = () => {
  const [isIntroCompleted, setIsIntroCompleted] = useState(false);

  return (
    <CompetitionProvider>
      <Router>
        {isIntroCompleted && <Navbar />} 

        <Routes>
          <Route path="/" element={<Intro onIntroComplete={() => setIsIntroCompleted(true)} />}/>
          <Route path='/detailscomp' element={<DetailsComp/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/competitions" element={<CompetitionList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/games" element={<GameList />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/registrations/:competitionId" element={<UserRegistration />} />
        </Routes>
      </Router>
    </CompetitionProvider>
  );
};

export default App;
