import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
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
          <Link to="/users">Participants</Link>
        </li>
        <li>
          <Link to="/about">Company</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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
