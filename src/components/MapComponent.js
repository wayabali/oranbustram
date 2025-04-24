import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet for custom icons

function MapComponent({ routeCoordinates, stations }) {
  if (!Array.isArray(routeCoordinates) || routeCoordinates.length === 0) {
    return <div>No route data available</div>;  // Fallback for missing data
  }

  // Center the map to Oran's coordinates
  const oranCenter = [35.6895, -0.6326]; // Coordinates of Oran, Algeria

  // Color array for different tram lines
  const lineColors = ['#FF5733', '#000000', '#3357FF'];

  // Red flag icon for the markers (from Flaticon)
  const redFlagIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/5425/5425869.png', // URL for the red flag icon from Flaticon
    iconSize: [30, 40],  // Size of the flag icon
    iconAnchor: [15, 40], // Anchor point for positioning the icon
    popupAnchor: [0, -40], // Popup positioning
  });

  return (
    <MapContainer center={oranCenter} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Display the tram routes as polylines */}
      {routeCoordinates.map((route, index) => {
        const color = lineColors[index % lineColors.length];
        return (
          <Polyline
            key={index}
            positions={route}
            color={color}
            weight={5}
            opacity={0.7}
          />
        );
      })}

      {/* Add markers for each station */}
      {stations && stations.length > 0 ? (
        stations.map((station, index) => {
          const { lat, lng, name } = station; // Lat/Lng and name for each station
          return (
            <Marker
              key={index}
              position={[lat, lng]}
              icon={redFlagIcon} // Use the red flag icon for the marker
            >
              <Popup>{name}</Popup> {/* Add a popup with the station name */}
            </Marker>
          );
        })
      ) : (
        <div>No stations available</div> // Fallback message when stations data is empty
      )}
    </MapContainer>
  );
}

export default MapComponent;
