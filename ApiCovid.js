const requestURL = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST?disableRedirect=true"

const estados = ["Aguascalientes","Baja California","Baja California Sur", "Campeche","Coahuila","Colima","Chiapas","Chihuahua",
                 "Ciudad de Mexico","Durango","Estado de Mexico","Guanajuato","Guerrero","Hidalgo","Jalisco", "Michoacan",
                 "Morelos","Nayarit","Nuevo Leon","Oaxaca","Puebla", "Queretaro", "Quintana Roo","San Luis Potosi",
                 "Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz","Yucatan","Zacatecas"];

fetch(requestURL)
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        //console.log("Infectados " + data.State.Colima.infected);
        //console.log("Fallecidos " + data.State.Colima.deceased);
        //console.log(data.State["Colima"]);
        /*
        console.log(data.State);
        console.log("T. Fallecidos: " + data.deceased);
        console.log("T. Infectados: " + data.infected);
        console.log("T. Negativos: " + data.negative);
        console.log("T. Sospechosos: " + data.suspected);

        //console.log(data.State[estados[0]]);
        for(var i = 0; i < estados.length; i++){
            console.log(`Infectados en ${estados[i]}: ` + data.State[estados[i]].infected);
            console.log(`Fallecidos en ${estados[i]}: ` + data.State[estados[i]].deceased);
        }
        */
    });