var nums=[1,2,3,4,5]; // Arreglo para almacenar los mensajes de ayuda
for(num in nums){
  console.log(nums[num]); // Imprime cada número en el arreglo
  console.log("El indice del numero es:" + num + " Y el numero: " + nums[num]); // Imprime el índice de cada número en el arreglo
}

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
function registrarEscuchas(objeto, numeroMensaje){
  objeto.addEventListener("focus", function(){
    textoAyuda.style.visibility = "visible"; // Hacemos visible el mensaje de ayuda
    textoAyuda.innerHTML = arregloAyuda[numeroMensaje]; // Mostramos el mensaje de ayuda correspondiente
  },false);

  objeto.addEventListener("blur", function(){
    textoAyuda.style.visibility = "hidden"; // Ocultamos el mensaje de ayuda al perder el foco
    textoAyuda.innerHTML = arregloAyuda[9]; // Limpiamos el contenido del mensaje de ayuda
  },false);
}

window.addEventListener("load", inic, false); // Llamamos a la función inic() al cargar la página

