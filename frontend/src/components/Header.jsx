import React from "react";
import "./Header.css";
// Importing icons from react-icons
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* School Logo */}
        <a href="/" className="school-logo">
          <div className="logo-icon">
            🎓
          </div>

          <div className="logo-text">
            <h2>Aksharaa</h2>
            <span>— SCHOOL —</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="navbar">
          <a href="/" className="nav-link active">
            Home
          </a>

          <a href="/about" className="nav-link">
            About Us
          </a>

          <a href="/academics" className="nav-link">
            Academics
          </a>

          <a href="/admissions" className="nav-link">
            Admissions
          </a>

          <a href="/contact" className="nav-link">
            Contact Us
          </a>
        </nav>

        {/* Portal Login */}
        <a href="/login" className="login-button">
          <span className="user-icon">♙</span>
          Portal Login
        </a>

      </div>
    </header>
  );
};

export default Header;