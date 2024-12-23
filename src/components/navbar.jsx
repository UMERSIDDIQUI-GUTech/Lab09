import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; 

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-item">Home</Link></li>
          <li><Link to="/about" className="navbar-item">About</Link></li>
          <li><Link to="/contact" className="navbar-item">Contact</Link></li>
          <li><Link to="/user/456" className="navbar-item">User Profile</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
