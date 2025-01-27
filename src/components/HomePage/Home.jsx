import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import DetailsComp from '../Competition/CompetitionDetails';

function Home() {
  const scrollToDetails = (e) => {
    e.preventDefault(); 
    const DetailsC = document.getElementById("Details");
    DetailsC?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
    <div className="page">
      <video className="background-video" autoPlay muted loop>
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div className="bodyPage">
        <div className="text">
          <h1>
            <span className="first-char">V</span>R GAMING BOOMS
            <span className="first-char">!</span>
          </h1>
          <p>
            Welcome to M2Gaming, the home of intense gaming competitions! Whether you're a casual player or a seasoned pro, we host thrilling tournaments, epic showdowns, and the chance to prove your skills. Join our community, compete for glory, and claim your place at the top. Are you ready to take on the challenge?
          </p>
          <Link to="/detailscomp">
            <button className="btn" onClick={scrollToDetails}><span>See More</span></button>
          </Link>
        </div>
        <div className="hero">
          <img src="image.png" alt="Hero" />
        </div>
      </div>

      
    </div>
    
    <section className="about-section" id='about'>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At M2Gaming, we believe in bringing together the best gamers from around the world. Our platform offers the ultimate gaming experience with high-stakes tournaments and rewarding competitions. Whether you're here to compete or just enjoy the excitement, our mission is to create a fun and inclusive environment for everyone. Join us now, and let's level up together!
          </p>
        </div>
        <video className="about-video" autoPlay muted loop>
          <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4" type="video/mp4"/>
        </video>
      </section>
      <DetailsComp />

  </div> 
  );
}

export default Home;
