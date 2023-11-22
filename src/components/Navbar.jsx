import React, { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import "./Navbar.css";
import UserMenu from './UserMenu';

// 웹 뷰에서의 css
function getLinkStyle({isActive}){
  return {
    borderBottom: isActive? '3px solid #7EBFFF' : 'none',
    color: isActive? '#7EBFFF' : 'black',
    fontWeight: isActive? 700 : 'normal',
    fontSize: '30px',
    marginLeft: '25px',
    marginRight: '25px',
  }
}

// 모바일 및 태블릿 뷰에서의 css
function getResponsiveLinkStyle({isActive}) {
  return {
    color: isActive ? '#7EBFFF' : 'black',
    fontWeight: isActive ? 700 : 'normal',
    fontSize: '26px',
    marginLeft: '50px',
  }
}

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1424px)', // 기존 1224였던 min-device-width를 1424로 바꿈.
  });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1424px)' }); // 기존 1224였던 max-width를 1424로 바꿈.

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
            <li><NavLink to="/" onClick={handleMenuToggle} style={getResponsiveLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleMenuToggle} style={getResponsiveLinkStyle}>About</NavLink></li>
            <li><NavLink to="/magazine" onClick={handleMenuToggle} style={getResponsiveLinkStyle}>Magazine</NavLink></li>
            <li><NavLink to="/calender" onClick={handleMenuToggle} style={getResponsiveLinkStyle}>Calender</NavLink></li>
          </ul>
        </div>
      ) : (
        <ul>
          <li><NavLink to="/" style={getLinkStyle}>Home</NavLink></li>
          <li><NavLink to="/about" style={getLinkStyle}>About</NavLink></li>
          <li><NavLink to="/magazine" style={getLinkStyle}>Magazine</NavLink></li>
          <li><NavLink to="/calender" style={getLinkStyle}>Calender</NavLink></li>
          <UserMenu isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
