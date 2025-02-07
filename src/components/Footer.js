import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2025 Codezy. Follow me on:</p>
      <div style={styles.iconContainer}>
        <a
          href="https://github.com/RaoVrn"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={handleMouseLeave}
        >
          <FaGithub
            style={{
              ...styles.icon,
              color: hoveredIcon === 'github' ? '#d9e0ee' : '#1dbf73',
              transform: hoveredIcon === 'github' ? 'translateY(-2px)' : 'none',
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/varun--prakash/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
          onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedin
            style={{
              ...styles.icon,
              color: hoveredIcon === 'linkedin' ? '#d9e0ee' : '#1dbf73',
              transform: hoveredIcon === 'linkedin' ? 'translateY(-2px)' : 'none',
            }}
          />
        </a>
        <a
          href="mailto:prakash.varun.0305@gmail.com"
          style={styles.link}
          onMouseEnter={() => handleMouseEnter('email')}
          onMouseLeave={handleMouseLeave}
        >
          <FaEnvelope
            style={{
              ...styles.icon,
              color: hoveredIcon === 'email' ? '#d9e0ee' : '#1dbf73',
              transform: hoveredIcon === 'email' ? 'translateY(-2px)' : 'none',
            }}
          />
        </a>
      </div>
    </footer>
  );
};

// Styles for the footer
const styles = {
  footer: {
    backgroundColor: '#1e1e2e', // Dark contrast
    color: '#1dbf73', // Vibrant green
    textAlign: 'center',
    padding: '1rem',
    borderTop: '1px solid #252535', // Subtle border
  },
  text: {
    margin: '0 0 10px 0',
    fontSize: '14px',
    color: '#1dbf73', // Vibrant green
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px', // Adds space between icons
  },
  link: {
    color: '#1dbf73', // Vibrant green
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  icon: {
    fontSize: '24px',
    transition: 'transform 0.3s ease, color 0.3s ease',
  },
};

export default Footer;