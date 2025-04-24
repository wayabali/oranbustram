import React from 'react';
import { Link } from 'react-router-dom';
import { FaBus, FaTrain } from 'react-icons/fa'; // Using icons for bus and tram

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Welcome to TBM Transport</h1>
        <p>Plan your journey with ease and convenience.</p>
        <div className="button-container">
          <Link to="/itinerary-selection/bus" className="btn btn-primary">
            <FaBus /> Choose Bus
          </Link>
          <Link to="/itinerary-selection/tram" className="btn btn-primary">
            <FaTrain /> Choose Tram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
