import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

// Importing icons from react-icons
const Header = () => {
   const navigate = useNavigate();

  const root = () => navigate("/");
  const about = () => navigate("/about");
  const academics = () => navigate("/academics"); 
  const admissions = () => navigate("/admissions");
  const contact = () => navigate("/contact");
  return (
    <header className="header">
      <div className="header-container">

        {/* School Logo */}
        <a onClick={root} className="school-logo">
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
          <a onClick={root} className="nav-link">
            Home
          </a>

          <a onClick={about} className="nav-link">
            About Us
          </a>

          <a onClick={academics} className="nav-link">
            Academics
          </a>

          <a onClick={admissions} className="nav-link">
            Admissions
          </a>

          <a onClick={contact} className="nav-link">
            Contact Us
          </a>
        </nav>

        {/* Portal Login */}
        <a onClick={() => navigate("/login")} className="login-button">
          <span className="user-icon">♙</span>
          Portal Login
        </a>

      </div>
    </header>
  );
};

export default Header;