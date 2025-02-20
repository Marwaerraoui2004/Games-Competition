import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const location = useLocation();

  const scrollToFooter = (e) => {
    e.preventDefault(); 
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e) => {
    e.preventDefault(); 
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Si vous souhaitez afficher la Navbar sur toutes les pages, commentez ou supprimez cette condition
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">
          <img src="lg.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/games">Games</Link>
        </li>
        <li>
          <Link to="/participants">Participants</Link>
        </li>
        <li>
          {/* Option : utiliser un lien sans imbriquer */}
          <a href="#about" onClick={scrollToAbout} className="scroll-link">
            Company
          </a>
        </li>
        <li>
          <a href="#footer" onClick={scrollToFooter} className="scroll-link">
            Contact
          </a>
        </li>
      </ul>
      <div className="auth-links">
        <Link to="/login" className="login">
          Log in
        </Link>
        <Link to="/register" className="register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
