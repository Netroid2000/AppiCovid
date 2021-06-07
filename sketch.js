
const boardHeight = 1800;
const boardWidth = 1350;

const mapa_key = "pk.eyJ1IjoiYmljaG8xNyIsImEiOiJja3BjODM2dHUxNGg0MzFwbm9sc3pocXpvIn0.rbfsjTOV5yvBcBbmQFTuUg";

function setup(){
    let myCanvas = createCanvas(/*windowWidth*/boardWidth, boardHeight);
    myCanvas.parent('myCanvas');
    noStroke();

    noLoop(); // Corre una vez y luego para.
}

let angles = [135.432, 13.968, 159.948, 50.616]; //Pie graph
//infectados = 809751, fallecidos = 83507, negativos = 956251, sospechosos = 302645

function draw() {
    background(255);
    background(220,15,40,100);
    //Constultas de datos generales
    consultarInfectados();
    consultarFallecidos();
    consultarNegativos();
    consultarSospechosos();
    
    //Gráficas de barras
    barrasInfectados();
    barrasMuertos();
    
    //gráfica de pastel
    pieChart(500, angles);
    //140, 180, 100, 60
    boxDataColor(350,1300,30,30, 140,"Infectados: 37.62%", 180, 1325);
    boxDataColor(350,1600,30,30, 100,"Fallecidos: 13.968%", 165, 1625);
    boxDataColor(950,1300,30,30, 180,"Sospechosos: 14.06%", 1010, 1325);
    boxDataColor(950,1600,30,30, 60,"Negativos: 44.43%", 1010, 1625);
    
    mapaEstados();
}

function drawBarMessage(txt,x,y){
    fill(160,15,15);
    rect(x, y, 340, 80)
    fill(240);
    textSize(32);
    text(txt, x+20, y+55);
}

function pieChart(diameter, data) {
    let lastAngle = 0;
    for (let i = 0; i < data.length; i++) {
      let red = map(i, 0, data.length, 60, 220);
      fill(red,20,20);
      arc(
        width/2, 1500, diameter, diameter, lastAngle, lastAngle + radians(angles[i])
      );
      lastAngle += radians(angles[i]);
    }
}

//140, 180, 100, 60
function boxDataColor(x,y, w, h, color,texto,xt,yt) {
    fill(color, 20, 20);
    rect(x, y, w, h,7);
    fill(0);
    textSize(18);
    text(texto, xt, yt);
}

const dist = 75;
function barrasInfectados(){
    fetch(requestURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){

        //console.log(data.State[estados[5]].infected);

        for(var i = 0; i <= 15; i++){
            //console.log(`Infectados en ${estados[i]}: ` + data.State[estados[i]].infected);
            fill(110,0,0);
            rect((i *dist) + 80, 720, 25, (0.7* data.State[estados[i]].infected) / -250);
            textSize(14);
            fill(0);
            //text(values[i], i * 40 + 80, 1000 - values[i], 25, values[i]);
            text(data.State[estados[i]].infected, (i * dist) + 80, 730, 25, estados[i]);
            textSize(10);
            text(estados[i], (i * dist) + 80, 750, 25, estados[i]);
        }
        var cont = 0;

        for(var i = 16; i < estados.length; i++){
            //console.log(`Infectados en ${estados[i]}: ` + data.State[estados[i]].infected);
            fill(110,0,0);
            rect((cont *dist) + 80, 1000, 25, (0.7* data.State[estados[i]].infected) / -250);
            textSize(14);
            fill(0);
            //text(values[i], i * 40 + 80, 1000 - values[i], 25, values[i]);
            text(data.State[estados[i]].infected, (cont * dist) + 80, 1025, 25, estados[i]);
            textSize(10);
            text(estados[i], (cont * dist) + 80, 1050, 25, estados[i]);
            cont++;
        }

    });
}

function barrasMuertos(){
    fetch(requestURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){

        //console.log(data.State[estados[5]].deceased);

        for(var i = 0; i <= 15; i++){
            //console.log(`Infectados en ${estados[i]}: ` + data.State[estados[i]].infected);
            fill(80);
            rect((i *dist) + 80, 825, 25, (0.7* data.State[estados[i]].deceased) / 250);
            textSize(14);
            fill(0);
            //text(values[i], i * 40 + 80, 1000 - values[i], 25, values[i]);
            text(data.State[estados[i]].deceased, (i * dist) + 80, 800, 25, estados[i]);
            textSize(10);
        }
        var cont = 0;
        for(var i = 16; i < estados.length; i++){
            //console.log(`Infectados en ${estados[i]}: ` + data.State[estados[i]].infected);
            fill(80);
            rect((cont *dist) + 80, 1125, 25, (0.7* data.State[estados[i]].deceased) / 250);
            textSize(14);
            fill(0);
            //text(values[i], i * 40 + 80, 1000 - values[i], 25, values[i]);
            text(data.State[estados[i]].deceased, (cont * dist) + 80, 1100, 25, estados[i]);
            textSize(10);
            cont++;
        }

    });
}

function consultarInfectados(){ //deceased,infected,negative,suspected
    fetch(requestURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log("T. Infectados: " + data.infected);
        drawBarMessage("Infectados: " + data.infected, 325,160);
    });
}

function consultarFallecidos(){ //deceased,infected,negative,suspected
    fetch(requestURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log("T. Fallecidos: " + data.deceased);
        drawBarMessage("Fallecidos: " + data.deceased, 325,70);
    });
}

function consultarNegativos(){ //deceased,infected,negative,suspected
    fetch(requestURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log("T. Negativos: " + data.negative);
        drawBarMessage("Negativos: " + data.negative, 720,70);
    });
}

function consultarSospechosos(){ //deceased,infected,negative,suspected
    fetch(requestURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log("T. Sospechosos: " + data.suspected);
        drawBarMessage(`Sospechosos: ${data.suspected}`, 720,160);
    });
}

function mapaEstados(){
    google.charts.load('upcoming', {
        'packages': ['geochart']
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    
    function drawRegionsMap() {
        fetch(requestURL)
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            //console.log("T. Fallecidos: " + data.deceased);
            
            var data = google.visualization.arrayToDataTable([
                ['State', 'Infectados', 'Fallecidos'],
                ['Baja California', data.State['Baja California'].infected, data.State['Baja California'].deceased],
                ['Sonora', data.State['Sonora'].infected, data.State['Sonora'].deceased],
                ['Chihuahua', data.State['Chihuahua'].infected, data.State['Chihuahua'].deceased],
                ['Coahuila', data.State['Coahuila'].infected, data.State['Coahuila'].deceased],
                ['Nuevo León', data.State['Nuevo Leon'].infected, data.State['Nuevo Leon'].deceased],
                ['Tamaulipas', data.State['Tamaulipas'].infected, data.State['Tamaulipas'].deceased],
                ['Sinaloa', data.State['Sinaloa'].infected, data.State['Sinaloa'].deceased],
                ['Nayarit', data.State['Nayarit'].infected, data.State['Nayarit'].deceased],
                ['Durango', data.State['Durango'].infected, data.State['Durango'].deceased],
                ['Zacatecas', data.State['Zacatecas'].infected, data.State['Zacatecas'].deceased],
                ['Jalisco', data.State['Jalisco'].infected, data.State['Jalisco'].deceased],
                ['Colima', data.State['Colima'].infected, data.State['Colima'].deceased],
                ['Tlaxcala', data.State['Tlaxcala'].infected, data.State['Tlaxcala'].deceased],
                ['Aguascalientes', data.State['Aguascalientes'].infected, data.State['Aguascalientes'].deceased],
                ['San Luis Potosí', data.State['San Luis Potosi'].infected, data.State['San Luis Potosi'].deceased],
                ['Puebla', data.State['Puebla'].infected, data.State['Puebla'].deceased],
                ['Guanajuato', data.State['Guanajuato'].infected, data.State['Guanajuato'].deceased],
                ['Querétaro', data.State['Queretaro'].infected, data.State['Queretaro'].deceased],
                ['Hidalgo', data.State['Hidalgo'].infected, data.State['Hidalgo'].deceased],
                ['Morelos', data.State['Morelos'].infected, data.State['Morelos'].deceased],
                ['Estado de México', data.State['Estado de Mexico'].infected, data.State['Estado de Mexico'].deceased],
                ['Distrito Federal', data.State['Ciudad de Mexico'].infected, data.State['Ciudad de Mexico'].deceased],
                ['Baja California Sur', data.State['Baja California Sur'].infected, data.State['Baja California Sur'].deceased],
                ['Michoacán', data.State['Michoacan'].infected, data.State['Michoacan'].deceased],
                ['Guerrero', data.State['Guerrero'].infected, data.State['Guerrero'].deceased],
                ['Oaxaca', data.State['Oaxaca'].infected, data.State['Oaxaca'].deceased],
                ['Veracruz', data.State['Veracruz'].infected, data.State['Veracruz'].deceased],
                ['Tabasco', data.State['Tabasco'].infected, data.State['Tabasco'].deceased],
                ['Campeche', data.State['Campeche'].infected, data.State['Campeche'].deceased],
                ['Chiapas', data.State['Chiapas'].infected, data.State['Chiapas'].deceased],
                ['Quintana Roo', data.State['Quintana Roo'].infected, data.State['Quintana Roo'].deceased],
                ['Yucatán', data.State['Yucatan'].infected, data.State['Yucatan'].deceased]
            ]);
        
            var options = {
                region: 'MX', // Mexico
                resolution: 'provinces',
                colorAxis: {
                //     minValue=5000,
                //     maxValue=30000,
                values: [5000, 10000, 20000, 30000],
                colors: ['green', 'yellow', 'orange', 'red']
                },
                backgroundColor: '#81d4fa', //220,15,40,100->F1A1AB
                datalessRegionColor: '#eeeeee',
                defaultColor: '#f5f5f5',
            };
    
            var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
            chart.draw(data, options);
        });
        
    };
}