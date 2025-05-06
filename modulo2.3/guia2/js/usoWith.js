var area,pericir, perire, coorx, coory;
var radio = parseInt(prompt("Ingrese el radio del círculo: ", ""));

document.writeln("<header>");
document.writeln("<h1>Área y de un Círculo</h1>");
document.writeln("</header>");

document.writeln("<section>");
document.writeln("<article>");
document.writeln("<div id= 'circle'>");
document.writeln("</div>");
document.writeln("<p>");

// Calcular propiedades geométricas usando el objeto Math
const { PI, abs, cos, sin } = Math;

// Area de un círculo de radio "radio"
const area = PI * radio * radio;

// Valor del lado horizontal definido por el radio
const coorx = abs(radio * cos(PI / 4));

// Valor del lado vertical definido por el radio
const coory = abs(radio * sin(PI / 4));

const pericir = 2 * PI * radio;
const perirec = 2 * coorx + 2 * coory;

// Mostrar resultados en el documento
document.write(`
        El área es: ${area}<br>
        El lado x del rectángulo generado es: ${coorx}<br>
        El lado y del rectángulo generado es: ${coory}<br>
        El perímetro del círculo es: ${pericir}<br>
        El perímetro del rectángulo es: ${perirec}
      </p>
    </article>
  </section>
`);