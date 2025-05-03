var salario, precioventa, prima, cuotamensual;
    var annios;
    var h1, totalh1;
    salario = parseFloat(prompt("Ingrese el sueldo del solicitante: ", ""));
    annios = 12*10;
    precioventa = parseFloat(prompt("Ingrese el precio de la vivienda: ", ""));
    if(salario <=400){
        if(precioventa >8000){
            alert("Lo siento, no puede solicitar la hipoteca.");
        }
        else{
            prima = 0.1*precioventa;
            cuotamensual = (precioventa - prima)/annios;
            document.write("<p>La prima que usted debe pagar por el inmueble es = $"
                + Math.round(prima*Math.pow(10,2))/Math.pow(10,2) + "</p><hr>");
            document.write("<p class='moneyOff'>La cuota mensual a pagar durante 20 años es de = $" + Math.round(cuotamensual * Math.pow(10,2)/Math.pow(10,2)) + "</p><hr>");
            
        }
    }
    else{
        prima = (precioventa*0.2);
        cuotamensual = (precioventa - prima)/annios;
        document.write("<p>La prima que usted debe pagar por el inmueble es = $"
            + Math.round(prima*Math.pow(10,2))/Math.pow(10,2) + "</p><hr>");
        document.write("<p> La cuota mensual a pagar durante 10 años es de = $" + Math.round(cuotamensual * Math.pow(10,2)/Math.pow(10,2)) + "</p><hr>");
    }