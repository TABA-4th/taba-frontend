import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "./Navbar.css"

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <nav className="navbar">
      {isDesktopOrLaptop && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
