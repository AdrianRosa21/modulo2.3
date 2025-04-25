var mes = prompt("Introduce un mes del año:", "");
var year = prompt("Introduce un año:", "");
var diasdelmes ;
var bisiesto = false;
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    bisiesto = true;
}
switch (mes) {
    case "Enero":
    case "enero":
    case "Marzo":
    case "marzo":
    case "Mayo":
    case "mayo":
    case "Julio":
    case "julio":
    case "Agosto":
    case "agosto":
    case "Octubre":
    case "octubre":
    case "Diciembre":
    case "diciembre":
        diasdelmes = 31;
        break;
    case "Abril":
    case "abril":
    case "Junio":
    case "junio":
    case "Septiembre":
    case "septiembre":
    case "Noviembre":
    case "noviembre":
        diasdelmes = 30;
        break;
    case "Febrero":
    case "febrero":
        if (!bisiesto)
        diasdelmes = 28;
        else 
        diasdelmes = 29;
        break;
        default:
            alert("Mes no válido");
            mes = "No existe";
            diasdelmes = 0;
}

if(bisiesto){
    var msg = "El año " + year + " es bisiesto. <br /> El mes de " + mes + " tiene " + diasdelmes + " días.";
}
else{
    var msg = "El año " + year + " no es bisiesto. <br /> El mes de " + mes + " tiene " + diasdelmes + " días.";
}
var dias = document.getElementById("info");
dias.innerHTML = '<p class="fw-bold">' + msg + '</p>';