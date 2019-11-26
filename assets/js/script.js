let intervalID = window.setInterval(GetISS, 2000);


// the url of the API I'm using
const url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function GetISS(){
    const response = await fetch(url);
    const data = await response.json();
    const {latitude, longitude} = data;

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
}
GetISS();
