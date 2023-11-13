import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "./Navbar.css";

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
      <Link to="/" className="logo-link">
        <img
          src="/path/to/your/logo.png" // 로고 이미지의 경로로 수정
          alt="Logo"
          className="logo"
        />
      </Link>
      {isTabletOrMobile ? (
        <>
          <div className="mobile-menu-icon" onClick={handleMenuToggle}>
            ☰
          </div>
          <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={handleMenuToggle}>Home</Link></li>
            <li><Link to="/about" onClick={handleMenuToggle}>About</Link></li>
            <li><Link to="/contact" onClick={handleMenuToggle}>Contact</Link></li>
          </ul>
        </>
      ) : (
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
