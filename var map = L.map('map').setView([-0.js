var map = L.map('map').setView([-0.7832, 37.0387], 10); // Centered on Murang'a County

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(map);
var landslideData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [37.0587, -0.7825]
        },
        "properties": {
          "name": "Landslide 1",
          "date": "2024-07-01",
          "description": "This area experienced a landslide due to heavy rainfall."
        }
      },
      // Add more features here
    ]
  };
  L.geoJSON(landslideData, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.name + "</h3><p>Date: " + feature.properties.date + "</p><p>" + feature.properties.description + "</p>");
    }
  }).addTo(map);
  function onFeatureClick(e) {
    var props = e.target.feature.properties;
    document.getElementById('story-content').innerHTML = "<h2>" + props.name + "</h2><p>" + props.description + "</p>";
  }
  
  L.geoJSON(landslideData, {
    onEachFeature: function(feature, layer) {
      layer.on('click', onFeatureClick);
    }
  }).addTo(map);
      