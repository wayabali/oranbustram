import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt,  FaBus } from 'react-icons/fa'; // Icons
import { getRouteData } from './getRouteData'; // Get route data function

function StationDetails() {
  const { transport, itinerary, stationId } = useParams(); // Get transport, itinerary, and stationId from URL params
  const [stationData, setStationData] = useState(null);

  useEffect(() => {
    // Fetch route data for transport and itinerary
    const routeData = getRouteData(transport, itinerary);

    // Check if routeData and stations are available
    if (routeData?.stations) {
      // Find the station by its ID
      const station = routeData.stations.find(station => station.id === stationId);
      
      // Log data for debugging
      console.log('Fetched Station:', station);

      if (station) {
        setStationData(station); // Set station data if found
      } else {
        setStationData(null); // Handle case where station is not found
        console.log('Station not found:', stationId); // Debugging log
      }
    }
  }, [transport, itinerary, stationId]); // Re-run when transport, itinerary, or stationId changes

  if (!stationData) return <div>No station data found or loading...</div>; // Display error message

  // Destructure the stationData to get lat, lng, etc.
  const { lat, lng } = stationData;

  // Check if lat and lng are available
  if (!lat || !lng) {
    return <div>Station location is unavailable</div>; // Gracefully handle missing coordinates
  }

  return (
    <div className="station-details-container">
      <div className="station-header">
        <h1>{stationData.name}</h1>
        <p><FaMapMarkerAlt /> Next: {stationData.next}</p>
        <p><FaClock /> Next Arrival: {stationData.nextArrival || 'N/A'}</p>
      </div>

      

      <div className="schedules">
        <h3>Upcoming Schedules:</h3>
        {/* Check if schedules exist */}
        {stationData.schedules && stationData.schedules.length > 0 ? (
          <ul>
            {stationData.schedules.map((schedule, index) => (
              <li key={index}>
                <FaBus /> {schedule.route} at {schedule.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No schedules available</p>
        )}
      </div>

      <div className="station-map">
        <h3>Station Location:</h3>
        <p>Lat: {lat}, Lng: {lng}</p>
        {/* You can embed a map using Leaflet or Google Maps here */}
      </div>
    </div>
  );
}

export default StationDetails;
