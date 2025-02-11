import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; 2025 Codezy. Follow me on:</p>
      <div className="footer-icons">
        <a
          href="https://github.com/RaoVrn"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/varun--prakash/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        <a
          href="mailto:prakash.varun.0305@gmail.com"
          className="footer-link"
        >
          <FaEnvelope className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;