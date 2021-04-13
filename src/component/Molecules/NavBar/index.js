import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Back-end Web</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/Register">Register</Link>
            <Link className="nav-link" to="/Login">Login</Link>
            <Link className="nav-link" to="/About">About</Link>
            <Link className="nav-link" to="/">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;