import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">GameComp</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/competitions">Compétitions</Link>
        </li>
        <li>
          <Link to="/games">Jeux</Link>
        </li>
        <li>
          <Link to="/users">Utilisateurs</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="auth-links">
        <Link to="/login" className="login">
          Se connecter
        </Link>
        <Link to="/register" className="register">
          S'inscrire
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
