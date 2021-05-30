const radius = 100;
const algorithms = {
  pp: "PuntoPendiente",
  dda: "DDA",
  bresenham: "Bresenham",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  pintarCirculo(algorithms.pp, algorithms.pp, 1);
  pintarCirculo(algorithms.dda, algorithms.dda, 2);
  pintarCirculo(algorithms.bresenham, algorithms.bresenham, 3);
  textSize(20);
  pmCirc(width / 3, 600, radius);
  text("Circulo", (width / 3) - (radius / 4), 600 + radius * 2);
  elipse((width / 3) * (2), 600, 300, radius);
  text("Elipse", ((width / 3) * (2)), 600 + radius * 2);
  noLoop();
}

function pintarCirculo( nombre, accion, pos){
    const x = (width / 4) * (pos);
    const y = 200;
    push();
    fill('white');
    circle(x, y, radius * 2);
    pop();
    textSize(20);
    text(nombre, x - radius / 2, y + radius * 2);

    this[accion]( x - radius, y, x + radius, y );
    this[accion]( x, y - radius, x, y + radius );

    let rad1 = radians(45);
    let rad2 = radians(225);

    this[accion](
      Math.floor(x + radius * cos(rad2)),
      Math.floor(y + radius * sin(rad2)),
      Math.floor(x + radius * cos(rad1)),
      Math.floor(y + radius * sin(rad1)),
    );

    rad1 = radians(135);
    rad2 = radians(315);

    this[accion](
      Math.floor(x + radius * cos(rad2)),
      Math.floor(y + radius * sin(rad2)),
      Math.floor(x + radius * cos(rad1)),
      Math.floor(y + radius * sin(rad1)),
    );
};