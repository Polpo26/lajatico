// Creates a red marker with the coffee icon
// link => https://github.com/lvoogdt/Leaflet.awesome-markers

var redMarker =  L.AwesomeMarkers.icon({
  icon: 'coffee',
  markerColor: 'red',
  prefix: 'fa',
  iconColor: 'black'
});


L.marker([43.47310,10.72742], {icon: redMarker}).addTo(map);


// Font-Awesome markers
L.marker([43.46001,10.68510], {icon: L.AwesomeMarkers.icon({icon: 'spinner', markerColor: 'red', prefix: 'fa', spin:true}) }).addTo(map);
L.marker([43.44232,10.71620], {icon: L.AwesomeMarkers.icon({icon: 'coffee', markerColor: 'orange', prefix: 'fa', iconColor: 'black'}) }).addTo(map);
L.marker([43.43027,10.75985], {icon: L.AwesomeMarkers.icon({icon: 'cog',  prefix: 'fa', markerColor: 'purple', iconColor: '#6b1d5c' }) }).addTo(map);

// Glyphicons
L.marker([43.47268,10.76519], {icon: L.AwesomeMarkers.icon({icon: 'star',  prefix: 'glyphicon',markerColor: 'green'}) }).addTo(map);
L.marker([43.46678,10.78127], {icon: L.AwesomeMarkers.icon({icon: 'certificate', prefix: 'glyphicon', markerColor: 'blue'}) }).addTo(map);
L.marker([43.45692,10.77198], {icon: L.AwesomeMarkers.icon({icon: 'cog',  prefix: 'glyphicon', markerColor: 'cadetblue'}) }).addTo(map);
