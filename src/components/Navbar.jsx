import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import UserMenu from "./UserMenu";
import { AuthContext } from "../functions/AuthContext";
import { Nav } from "react-bootstrap";

function getLinkStyle({ isActive }) {
  return {
    borderBottom: isActive ? "3px solid #7EBFFF" : "none",
    color: isActive ? "#7EBFFF" : "black",
    fontWeight: isActive ? 700 : "normal",
    fontSize: "30px",
  };
}

function getResponsiveLinkStyle({ isActive }) {
  return {
    color: isActive ? "#7EBFFF" : "black",
    fontWeight: isActive ? 700 : "normal",
    fontSize: "26px",
    marginLeft: "50px",
  };
}

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1424px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1424px)" });

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open", !isMenuOpen);
  };

  return (
    <nav className={`navbar ${isTabletOrMobile ? "mobile" : ""}`}>
      <NavLink to="/" className="logo-link">
        <img
          src="https://i.postimg.cc/L6GRwLWv/nimobig.png"
          alt="로고"
          className="logo"
        />
      </NavLink>
      {isTabletOrMobile ? (
        <div className="mobile-menu-align">
          <div
            className={"mobile-menu-icon mobileMenuIcon"}
            onClick={handleMenuToggle}
          >
            ☰
          </div>
          <ul className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                onClick={handleMenuToggle}
                style={getResponsiveLinkStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleMenuToggle}
                style={getResponsiveLinkStyle}
              >
                About
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <NavLink
                    to="/magazine"
                    onClick={handleMenuToggle}
                    style={getResponsiveLinkStyle}
                  >
                    Magazine
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/calender"
                    onClick={handleMenuToggle}
                    style={getResponsiveLinkStyle}
                  >
                    Calender
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={logout} style={getResponsiveLinkStyle}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/register"
                    onClick={handleMenuToggle}
                    style={getResponsiveLinkStyle}
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    onClick={handleMenuToggle}
                    style={getResponsiveLinkStyle}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : (
        <ul className="navLinks">
          {isLoggedIn ? (
            <>
              <div className="login-menu">
                <li>
                  <NavLink to="/" style={getLinkStyle}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={getLinkStyle}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/magazine" style={getLinkStyle}>
                    Magazine
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calender" style={getLinkStyle}>
                    Calender
                  </NavLink>
                </li>
              </div>
              <div className="userMenu">
                <UserMenu />
              </div>
            </>
          ) : (
            <>
              <div className="logout-menu">
                <li>
                  <NavLink to="/" style={getLinkStyle}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" style={getLinkStyle}>
                    About
                  </NavLink>
                </li>
              </div>
              <div className="userMenu">
                <UserMenu />
              </div>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
