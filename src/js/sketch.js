const key = 'pk.eyJ1IjoibmV0cm9pZCIsImEiOiJja3BjODN4aHUwdjlwMzBuMjNzcmhtN254In0.HOKPapKccxVThdGipPf7Jg';
let canvas;
let myMap;
let mappa;
let data;

// Options for map
const options = {
  lat: 23.4978,
  lng:  -102.1269,
  zoom: 4,
  style: 'mapbox://styles/mapbox/traffic-night-v2',
};

//url mexican states area: https://andrew.carto.com:443/api/v2/sql?q=select * from andrew.mexican_states
function preload() {
  const url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
  data = loadJSON(url);
}

function setup() {
  //background('black');
  //canvas = createCanvas(800,700);
  //mappa = new Mappa('MapboxGL', key);
  //myMap = mappa.tileMap(options); // lat 0, lng 0, zoom 4
  //myMap.overlay(canvas);
}

function draw() {
  console.log(data);
  //text(data.State["Aguascalientes"].infected, 50, 50);
  
  noLoop();
}
