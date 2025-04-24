import React from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaTrain } from 'react-icons/fa'; // Importing bus and train icons from react-icons

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <strong>TBM</strong> Transport
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/itinerary-selection/bus">
                <FaBus /> Bus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/itinerary-selection/tram">
                <FaTrain /> Tram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
