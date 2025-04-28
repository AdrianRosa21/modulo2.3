var voto;
var opcion = true;
var cont1 = cont2 = cont3 = 0;
var total;
var per1, per2, per3;

document.writeln("<h1 align='center'>Censo de estudiantes tecnicos</h1><hr>");
document.writeln("<b>Opcion : '1' Desarrollo de software</b><br>");
document.writeln("<b>Opcion : '2' Electronica</b><br>");
document.writeln("<b>Opcion : '3' Contador</b><br><hr>");

//Ciclo repetitivo donde se obtiene voto por voto mientras no se de por terminada
// el ingreso de la respuesta de la encuesta

while (opcion) {
    voto = parseInt(prompt("Ingrese su voto \n Escribe 1 si es Desarrollo de software \n Escribe 2 si es Electronica \n o Escribe 3 si es contador: ", ""));
    switch (voto) {
        case 1:
            alert("Gracias por votar por Desarrollo de software");
            cont1++;
            break;
        case 2:
            alert("Gracias por votar por Electronica");
            cont2++;
            break;
        case 3:
            alert("Gracias por votar por Contador");
            cont3++;
            break;
        default:
            alert("Opcion no valida, por favor ingrese una opcion valida");
            opcion = false;
    }
    opcion = confirm("¿Desea continuar votando?");
    
}
total = cont1 + cont2 + cont3;

// Obtener el porcentaje de cada respuesta (conteo de cada una, entre el total por 100%)
const per1 = Math.round((cont1 / total) * 100);
const per2 = Math.round((cont2 / total) * 100);
const per3 = Math.round((cont3 / total) * 100);

// Mostrar los resultados de la encuesta en una tabla HTML
document.write(`
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Resultado:</th>
        <th>Cantidad de estudiantes</th>
        <th>Porcentaje</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Desarrollo de Software</td>
        <td class="dato">${cont1}</td>
        <td class="dato">${per1}%</td>
      </tr>
      <tr>
        <td>Electrónica</td>
        <td class="dato">${cont2}</td>
        <td class="dato">${per2}%</td>
      </tr>
      <tr>
        <td>Contadores</td>
        <td class="dato">${cont3}</td>
        <td class="dato">${per3}%</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <td class="dato">${cont1 + cont2 + cont3}</td>
        <td class="dato">${per1 + per2 + per3}%</td>
      </tr>
    </tfoot>
  </table>
`);