const key = 'pk.eyJ1IjoibmV0cm9pZCIsImEiOiJja3BjODN4aHUwdjlwMzBuMjNzcmhtN254In0.HOKPapKccxVThdGipPf7Jg';
let canvas;
let myMap;
let mappa;
let data;

// Options for map
const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'mapbox://styles/mapbox/traffic-night-v2',
  pitch: 0,
};


function preload() {
  const url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
  data = loadJSON(url);
}

function setup() {
  //background('black');
  canvas = createCanvas(800,700);
  mappa = new Mappa('MapboxGL', key);
  myMap = mappa.tileMap(options); // lat 0, lng 0, zoom 4
  myMap.overlay(canvas);
}

function draw() {
  console.log(data);
  //text(data.State["Aguascalientes"].infected, 50, 50);
  
  noLoop();
}
