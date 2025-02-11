import React from 'react';
import logo from './Codezy_Logo.png'; // Ensure the logo is placed in the correct path

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand fs-1 fw-bold d-flex align-items-center" href="/">
          <img src={logo} alt="Codezy Logo" style={{ width: '55px', height: '55px', marginRight: '10px' }} />
          {/* Codezy */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-5"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item fs-5"><a className="nav-link" href="/projects">Projects</a></li>
            <li className="nav-item fs-5"><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
