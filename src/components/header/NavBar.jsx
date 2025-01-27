import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const location = useLocation();

  const scrollToFooter = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const About = document.getElementById("about");
    About?.scrollIntoView({ behavior: "smooth" });
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home"><img src="lg.png" alt="" /></Link>
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
        <a href="##" onClick={scrollToAbout} className="scroll-link">Company</a>
        </li>
        <li>
          <a href="#" onClick={scrollToFooter} className="scroll-link">Contact</a>
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
