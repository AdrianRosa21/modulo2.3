function init(){
    var op1 = prompt('Introduzca el primero numero: ', '');
    var op2 = prompt('Introduzca el segundo numero: ', '');

    var operaciones = document.getElementById('operaciones');

    var resultado = document.getElementById('resultado');

    var contenido = "<header class='text-center mb-4'>\n";
    contenido += "\t<h1 class='fw-bold'>Calculadora básica en JavaScript</h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu container my-5'>\n";
    contenido += "<div class='row justify-content-center g-4'>\n";
    contenido += "<ul>\n";

    // Botón Suma
    contenido += "<li>\n";
    contenido += "<div class='circle bg-morado mx-auto'>\n";
    contenido += "<a class='options' href=\"javascript:void(0)\"><span>Suma</span></a>\n";
    contenido += "</div>\n";
    contenido += "</li>\n";

    // Botón Resta
    contenido += "<li>\n";
    contenido += "<div class='circle bg-morado mx-auto'>\n";
    contenido += "<a class='options' href=\"javascript:void(0)\"><span>Resta</span></a>\n";
    contenido += "</div>\n";
    contenido += "</li>\n";

    // Botón Multiplicación
    contenido += "<li>\n";
    contenido += "<div class='circle bg-morado mx-auto'>\n";
    contenido += "<a class='options' href=\"javascript:void(0)\"><span>Multiplicación</span></a>\n";
    contenido += "</div>\n";
    contenido += "</li>\n";

    // Botón División
    contenido += "<li>\n";
    contenido += "<div class='circle bg-morado mx-auto'>\n";
    contenido += "<a class='options' href=\"javascript:void(0)\"><span>División</span></a>\n";
    contenido += "</div>\n";
    contenido += "</li>\n";

    // Botón Residuo
    contenido += "<li>\n";
    contenido += "<div class='circle bg-morado mx-auto'>\n";
    contenido += "<a class='options' href=\"javascript:void(0)\"><span>Residuo</span></a>\n";
    contenido += "</div>\n";
    contenido += "</li>\n";

    contenido += "</ul>\n";
    contenido += "</div>\n";
    contenido += "</nav>\n";

    operaciones.innerHTML = contenido;
    var opciones = document.getElementsByTagName('a');

    for (var i = 0; i < opciones.length; i++) {
        switch (i) {
            case 0:
                // function sumar
                opciones[i].onclick = function() {
                    resultado.innerHTML = "<p class=\"letterpress fw-bold\">" + op1 + " + " + op2 + " = " + (parseFloat(op1) + parseFloat(op2)) + "</p>\n";
                }
                break;

            case 1:
                opciones[i].onclick = function() {
                    resultado.innerHTML = "<p class=\"letterpress fw-bold\">" + op1 + " - " + op2 + " = " + (parseFloat(op1) - parseFloat(op2)) + "</p>\n";
                    console.log("resta function : \\");
                }
                break;

            case 2:
                opciones[i].onclick = function() {
                    resultado.innerHTML = "<p class=\"letterpress fw-bold\">" + op1 + " * " + op2 + " = " + (parseFloat(op1) * parseFloat(op2)) + "</p>\n";
                }
                break;

            case 3:
                opciones[i].onclick = function() {
                    if(op2 == 0) {
                        resultado.innerHTML = "<p class=\"letterpress fw-bold\">No se puede dividir entre cero</p>";
                    }
                    else {
                        resultado.innerHTML = "<p class=\"letterpress fw-bold\">" + op1 + " / " + op2 + " = " + Math.round((parseFloat(op1) / parseFloat(op2)) * 100) / 100 + "</p>\n";
                    }
                }
                break;

            case 4:
                opciones[i].onclick = function() {
                    if(op2 == 0) {
                        resultado.innerHTML = "<p class=\"letterpress fw-bold\">No se ha podido obtener el residuo, por división entre cero.</p>\n";
                    }
                    else {
                        resultado.innerHTML = "<p class=\"letterpress fw-bold\">" + op1 + " % "+ op2 + " = " + (parseFloat(op1) % parseFloat(op2)) + "</p>\n";
                    }
                }
                break;
        }
    }
}
window.onload = init;