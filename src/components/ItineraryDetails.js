import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';  // Import Link for navigation
import { getRouteData } from './getRouteData';  // Assuming getRouteData is exported from a separate file
import MapComponent from './MapComponent';

function ItineraryDetails() {
  const { transport, itinerary } = useParams(); // Get transport and itinerary from the URL

  // Get route data from getRouteData function
  const routeData = getRouteData(transport, itinerary);

  // Destructure stations and coordinates from routeData
  const stations = routeData?.stations || [];
  const routeCoordinates = routeData?.coordinates ? [routeData.coordinates] : [];

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter stations based on the search query
  const filteredStations = stations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle the change in the search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="itinerary-details">
      <div className="route-info">
        <h2>{itinerary} - {transport}</h2>
        <div className="directions">
          <p>Direction: {routeData?.direction || 'N/A'}</p>
          <p>Terminus: {routeData?.terminus || 'N/A'}</p>
        </div>
      </div>

      <div className="details-container">
        <div className="station-list">
          <h3>Stations</h3>

          {/* Search input for stations */}
          <input
            type="text"
            placeholder="Search stations..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="station-search"
          />

          {/* Display filtered stations */}
          {filteredStations.length > 0 ? (
            <ul>
              {filteredStations.map((station, index) => (
                <li key={index}>
                  {/* Link to the station details page with stationId */}
                  <Link to={`/station-details/${transport}/${itinerary}/${station.id}`}>
                    {station.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No stations available</p>
          )}
        </div>

        <div className="map-container">
          {/* Pass routeCoordinates and stations to the MapComponent */}
          <MapComponent routeCoordinates={routeCoordinates} stations={stations} transport={transport} itinerary={itinerary} />
        </div>
      </div>
    </div>
  );
}

export default ItineraryDetails;
