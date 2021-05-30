let data;

function preload() {
  const url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
  data = loadJSON(url);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  console.log(data);

  text(data.State["Aguascalientes"].infected, 50, 50);
  noLoop();
}

