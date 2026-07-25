import React from "react";
import {   FaFacebookF,  FaInstagram,  FaYoutube,  FaTwitter,  FaMapMarkerAlt,  FaPhoneAlt,  FaEnvelope,  FaGraduationCap
} from "react-icons/fa";

import "./Footer.css";
// Footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();
// Footer JSX structure
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <FaGraduationCap />
            </div>

            <h2>Aksharaa School</h2>
          </div>

          <p className="footer-description">
            Nurturing future leaders through holistic education – a joyful,
            stress-free environment where every child is celebrated for who
            they are.
          </p>

          {/* Social Media */}
          <div className="social-links">
            <a
              href="https://facebook.com"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              className="social-link"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://twitter.com"
              className="social-link"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="footer-column">
          <h3>Explore</h3>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/academics">Academics</a>
            <a href="/admissions">Admissions</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h3>Contact</h3>

          <address className="contact-list">
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />

              <span>
                Aksharaa Campus, Ring Road,
                <br />
                Aligarh, UP 202001, India
              </span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />

              <a href="tel:+919876543210">
                +91 98765 43210
              </a>
            </div>

            <div className="contact-item">
              <FaEnvelope className="contact-icon" />

              <a href="mailto:hello@aksharaa.school">
                contact@aksharaa.school
              </a>
            </div>
          </address>
        </div>

        {/* Newsletter Section */}
        <div className="footer-column newsletter">
          <h3>Stay Updated</h3>

          <p>
            Get notices, events and admission updates in your inbox.
          </p>

          <form className="newsletter-form">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
            />

            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            © {currentYear} Aksharaa School. All rights reserved.
          </p>

          <nav
            className="legal-links"
            aria-label="Legal navigation"
          >
            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/terms">
              Terms of Use
            </a>

            <a href="/sitemap">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;