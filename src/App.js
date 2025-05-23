import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ItinerarySelection from './components/ItinerarySelection';
import ItineraryDetails from './components/ItineraryDetails';
import StationDetails from './components/StationDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Import Footer component
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/itinerary-selection/:transport" element={<ItinerarySelection />} />
        <Route path="/itinerary-details/:transport/:itinerary" element={<ItineraryDetails />} />
        <Route path="/station-details/:transport/:itinerary/:stationId" element={<StationDetails />} />
      </Routes>
      <Footer />  {/* Add Footer to the bottom of the page */}
    </Router>
  );
}

export default App;
