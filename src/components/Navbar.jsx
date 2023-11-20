import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "./Navbar.css";
import UserMenu from './UserMenu';

function getLinkStyle({isActive}){
  return {
    textDecoration: isActive ? 'underline' : undefined,
    
  }
}

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    // body에 menu-open 클래스를 추가 또는 제거하여 스타일을 적용
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  return (
    <nav className={`navbar ${isTabletOrMobile ? 'mobile' : ''}`}>
      <NavLink to="/" className="logo-link">
        <img
          src='https://i.postimg.cc/L6GRwLWv/nimobig.png' // 로고 이미지의 경로
          alt=""
          className="logo"
        />
      </NavLink>
      {isTabletOrMobile ? (
        <div className="mobile-menu-align">
          <div className="mobile-menu-icon" onClick={handleMenuToggle}>
            ☰
          </div>
          <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={handleMenuToggle} style={getLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleMenuToggle} style={getLinkStyle}>About</NavLink></li>
            <li><NavLink to="/magazine" onClick={handleMenuToggle} style={getLinkStyle}>Magazine</NavLink></li>
            <li><NavLink to="/calender" onClick={handleMenuToggle} style={getLinkStyle}>Calender</NavLink></li>
          </ul>
        </div>
      ) : (
        <ul>
          <li><NavLink to="/" style={getLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" style={getLinkStyle}>About</NavLink></li>
          <li><NavLink to="/magazine" style={getLinkStyle}>Magazine</NavLink></li>
          <li><NavLink to="/calender" style={getLinkStyle}>Calender</NavLink></li>
        </ul>
        
      )}
            <UserMenu/>
    </nav>
  );
}

export default Navbar;
