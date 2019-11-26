// Using mapbox and open street map tiles
const mymap = L.map('mapid').setView([0,0], 3);
const tiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGFzY29uZW1hc3NpbW8iLCJhIjoiY2szZm5oaHIzMDY0dTNpbzRjdDRjbzdraSJ9.QiJTyrK98ZEAgoCx5L19LA'
})
.addTo(mymap);
// New Icon for Marker
const myIcon = L.icon({
    iconUrl: 'assets/img/iss.svg',
    iconSize: [50, 32],
});
// the url of the API ISS
const url = 'https://api.wheretheiss.at/v1/satellites/25544';
const marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap);

// Fetching long and lat of the ISS
const getISS = async()=>{
    const response = await fetch(url);
    const data = await response.json();
    const {latitude, longitude} = data;

    marker.setLatLng([latitude, longitude]);
    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
}

getISS();
// Setting an interval to reload the location of the ISS
let intervalID = window.setInterval(getISS, 2000);
