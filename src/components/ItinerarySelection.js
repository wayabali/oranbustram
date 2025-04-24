import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ItinerarySelection() {
  const { transport } = useParams(); // Get 'bus' or 'tram'

  return (
    <div className="itinerary-selection">
      <h3>Select an Itinerary for {transport}</h3>
      <div>
        <Link to={`/itinerary-details/${transport}/A`} className="btn btn-secondary">
          Itinerary A
        </Link>
        <Link to={`/itinerary-details/${transport}/B`} className="btn btn-secondary">
          Itinerary B
        </Link>
        <Link to={`/itinerary-details/${transport}/C`} className="btn btn-secondary">
          Itinerary C
        </Link>
        <Link to={`/itinerary-details/${transport}/D`} className="btn btn-secondary">
          Itinerary D
        </Link>
      </div>
    </div>
  );
}

export default ItinerarySelection;
