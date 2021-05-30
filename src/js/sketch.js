const key = 'pk.eyJ1IjoibmV0cm9pZCIsImEiOiJja3BhdmFjZmIwMjg3Mm9wZjU2eWw0dDVkIn0.q_xKw48VHygTcE4ME9tjgA';
var url;
let myMap;
let mappa = new Mappa('MapboxGL', key);
let data;

const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  pitch: 50, // starting position [lng, lat]
  zoom: 9,
  style: 'mapbox://styles/mapbox/traffic-night-v2', // starting zoom
};


function preload() {
  url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
  data = loadJSON(url);
  myMap = mappa.tileMap(options); // lat 0, lng 0, zoom 4
}


function setup() {
  //background('black');
  createCanvas(640,640);
  myMap.overlay(canvas);
}

function draw() {
  text(data.State["Aguascalientes"].infected, 50, 50);
  
  noLoop();
}
