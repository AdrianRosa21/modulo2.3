// Elemento donde se mostrará el mensaje
var textoAyuda;

// Arreglo con mensajes de ayuda para cada campo
var arregloAyuda = [
  "Ingrese su nombre en este campo de texto",                      // 0
  "Ingrese su apellido en este campo de texto",                   // 1
  "Ingrese su dirección de correo en el formato usuario@dominio.com", // 2
  "Ingrese su número de teléfono en el formato 9999-0000",        // 3
  "Ingrese una descripción breve en el campo área de texto",      // 4
  "Seleccione su tipo de bachillerato en este campo select",      // 5
  "Díganos cuál es su ciudad de residencia en este campo select", // 6
  "Restablezca el formulario con este botón",                     // 7
  "Envíe el formulario con este botón",                           // 8
  "" // Cuando el campo pierde el foco, se borra el mensaje       // 9 (opcional)
];

// Función que se ejecuta al cargar la página
function inic() {
  // Obtenemos el elemento <div> donde se mostrará la ayuda
  textoAyuda = document.getElementById("textoAyuda");

  // Asociamos cada campo con su mensaje (por índice)
  registrarEscuchas(document.getElementById("firstname"), 0);
  registrarEscuchas(document.getElementById("lastname"), 1);
  registrarEscuchas(document.getElementById("email"), 2);
  registrarEscuchas(document.getElementById("phone"), 3);
  registrarEscuchas(document.getElementById("describe"), 4);
  registrarEscuchas(document.getElementById("bto"), 5);
  registrarEscuchas(document.getElementById("ciudad"), 6);
  registrarEscuchas(document.getElementById("resetbtn"), 7);
  registrarEscuchas(document.getElementById("submitbtn"), 8);
}