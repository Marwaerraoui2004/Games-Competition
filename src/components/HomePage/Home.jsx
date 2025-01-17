import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='page'>
        <div className='bodyPage'>
            <div className='text'>
                <h1><span class="first-char">V</span>R GAMING BOOMS<span class="first-char">!</span></h1>
                <p>Welcome to M2Gaming, the home of intense gaming competitions! Whether you're a casual player or a seasoned pro, we host thrilling tournaments, epic showdowns, and the chance to prove your skills. Join our community, compete for glory, and claim your place at the top. Are you ready to take on the challenge?</p>
                <Link to="/detailscomp"><button className='btn'><span>See More </span></button></Link>
            </div>
            <div className="hero">
            <img src="image.png" alt="Hero" />
            </div>
        </div>
    </div>
  );
}

export default Home;
