// Import the necessary modules and CSS
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSession } from './SessionContext';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { session } = useSession(); // Access the session from context

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="header-logo">
        <h1>Welcome to Yeah, Whatever.</h1>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <span className={`burger ${menuOpen ? 'open' : ''}`}>&#9776;</span>
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            {session.info.isLoggedIn ? (
              <Link to="/profile">Profile</Link>
            ) : (
              <Link to="/login">Log In</Link>
            )}
          </li> */}
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
