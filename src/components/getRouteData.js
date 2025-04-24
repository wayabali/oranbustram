export function getRouteData(transport, itinerary) {
    const data = {
      bus: {
        A: {
          direction: 'Centre-ville d\'Oran',
          terminus: 'Plage de Madagh',
          stations: [
            { name: 'Station 1 - Gare Routière', lat: 35.6895, lng: -0.6326 },
            { name: 'Station 2 - Place 1er Novembre', lat: 35.6925, lng: -0.6295 }, // Updated Coordinates
            { name: 'Station 3 - Boulevard du 19 Mars', lat: 35.6945, lng: -0.6275 }, // Updated Coordinates
            { name: 'Station 4 - Place d\'Armes', lat: 35.6985, lng: -0.6220 }, // Updated Coordinates
            { name: 'Station 5 - Plage de Madagh', lat: 35.7100, lng: -0.6130 }
          ],
          coordinates: [
            [35.6895, -0.6326], // Gare Routière
            [35.6925, -0.6295], // Place 1er Novembre
            [35.6945, -0.6275], // Boulevard du 19 Mars
            [35.6985, -0.6220], // Place d'Armes
            [35.7100, -0.6130]  // Plage de Madagh
          ]
        },
        B: {
          direction: 'Aéroport Ahmed Ben Bella',
          terminus: 'Khalouia',
          stations: [
            { name: 'Station 1 - Avenue de la République', lat: 35.6538, lng: -0.6170 },
            { name: 'Station 2 - Bab El Hassi', lat: 35.6600, lng: -0.6150 },
            { name: 'Station 3 - Aéroport Ahmed Ben Bella', lat: 35.6625, lng: -0.6100 },
            { name: 'Station 4 - Khalouia', lat: 35.6655, lng: -0.6050 }
          ],
          coordinates: [
            [35.6538, -0.6170], // Avenue de la République
            [35.6600, -0.6150], // Bab El Hassi
            [35.6625, -0.6100], // Aéroport Ahmed Ben Bella
            [35.6655, -0.6050]  // Khalouia
          ]
        }
      },
      tram: {
        A: {
          direction: 'Downtown',
          terminus: 'Sidi El Houari',
          stations: [
            { name: 'Station 1 - Gare d\'Oran', lat: 35.6895, lng: -0.6326 },
            { name: 'Station 2 - Place 1er Novembre', lat: 35.6925, lng: -0.6295 }, // Updated Coordinates
            { name: 'Station 3 - Boulevard de la Liberté', lat: 35.6950, lng: -0.6280 },
            { name: 'Station 4 - Sidi El Houari', lat: 35.7000, lng: -0.6250 },
            { name: 'Station 5 - La Medina', lat: 35.7100, lng: -0.6200 },
            { name: 'Station 6 - Mers El Kébir', lat: 35.7200, lng: -0.6150 }
          ],
          coordinates: [
            [35.6895, -0.6326], // Gare d'Oran
            [35.6925, -0.6295], // Place 1er Novembre
            [35.6950, -0.6280], // Boulevard de la Liberté
            [35.7000, -0.6250], // Sidi El Houari
            [35.7100, -0.6200], // La Medina
            [35.7200, -0.6150]  // Mers El Kébir
          ]
        },
        B: {
          direction: 'Sidi M\'Hidi',
          terminus: 'Aéroport Ahmed Ben Bella',
          stations: [
            { name: 'Station 1 - Plage de Madagh', lat: 35.7100, lng: -0.6130 },
            { name: 'Station 2 - Hôpital de Canastel', lat: 35.7150, lng: -0.6100 },
            { name: 'Station 3 - Université d\'Oran', lat: 35.7250, lng: -0.6070 },
            { name: 'Station 4 - Aéroport Ahmed Ben Bella', lat: 35.7300, lng: -0.6000 }
          ],
          coordinates: [
            [35.7100, -0.6130], // Plage de Madagh
            [35.7150, -0.6100], // Hôpital de Canastel
            [35.7250, -0.6070], // Université d'Oran
            [35.7300, -0.6000]  // Aéroport Ahmed Ben Bella
          ]
        }
      }
    };
  
    return data[transport]?.[itinerary] || {};  // Return valid data or empty object
  }
  