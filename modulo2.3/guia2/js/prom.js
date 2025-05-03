var i, num, nota, notaactual, promedio;

num = parseInt(prompt("¿Cuántas evaluaciones desea promediar?"));

nota = 0;

header = "<header class='masked'>";
header += "<h1>Promedio de Notas</h1>";
header += "</header>";
document.write(header);

document.writeln("<section class ='container'>");
document.writeln("<article class ='container'>");


for (i = 1; i <= num; i++) {
    notaactual = parseFloat(prompt("Ingrese la nota " + i + ": ", ""));
    document.writeln("<h3>Nota " + i + ": " + notaactual + "</h3>");
    nota += notaactual;
}

promedio = nota / (i - 1);
document.writeln("<h3>El promedio de las notas es: " + promedio + "</h3>");
document.writeln("</article>");
document.writeln("</section>");