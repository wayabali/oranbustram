import React from 'react';
import { useParams } from 'react-router-dom';
import MapComponent from './MapComponent';
import { getRouteData } from './getRouteData';  // Adjust path if needed

function ItineraryDetails() {
  const { transport, itinerary } = useParams(); // Get transport and itinerary from the URL

  // Get route data from getRouteData function
  const routeData = getRouteData(transport, itinerary);

  // Destructure stations and coordinates from routeData
  const stations = routeData?.stations || [];
  const routeCoordinates = routeData?.coordinates ? [routeData.coordinates] : [];

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
          {/* Only map if stations array is available */}
          {stations.length > 0 ? (
            <ul>
              {stations.map((station, index) => (
                <li key={index}>{station.name}</li> 
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
