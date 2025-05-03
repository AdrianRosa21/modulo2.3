//map() Crea un nuevo array aplicando una función a cada elemento.
        //const numeros = [1, 2, 3];
        //const dobles = numeros.map(n => n * 2);
 //       console.log(dobles); // [2, 4, 6]  // Cada número fue multiplicado por 2

        //filter() Crea un nuevo array con los elementos que cumplen una condición.
   //     const edades = [10, 18, 20];
     //   const mayores = edades.filter(e => e >= 18);
       // console.log(mayores); // [18, 20]  // Solo las edades mayores o iguales a 18

        //Foreach
  //      const frutas = ["🍎", "🍌", "🍇"];
//        frutas.forEach(f => console.log(f)); 
        // 🍎
        // 🍌
        // 🍇   // Solo muestra, no crea un nuevo array

        //find()
    //    const nums = [5, 12, 8];
      //  const encontrado = nums.find(n => n > 10);
        //console.log(encontrado); // 12  // Es el primero mayor a 10

function inicializar(){
    var numeros = new Array();
    var i, max, temp, contenido = "", tdelemnt;

    //validamos que el dato sea numerico
    do{
        max = prompt("¿Cuantos numeros desea ingresar?(Valor entero)","");
        if(isNaN(max)){
            alert("El dato ingresado no es un numero");
        }
        if(max<2){
            alert("El arreglo debe ser de dimensión 2 o superior");
        }
    }while(isNaN(max) || max<2);
    for(i=0;i<max;i++){
        numeros[i]=parseInt(prompt("Ingrese el número "+(parseInt(i+1)),""));	
    }
    var datos = document.getElementById("datos");
    with(document){
        contenido += "<h1>Números ingresados</h1>";
        contenido += "<table> <body> <tr>";
        for(i=0;i<max;i++){
            contenido += "<td class='Off'>" + numeros[i] + "</td>";
        }
        contenido
    }
    contenido += "</tr></tbody></table><br />";
//bucle que ordena el arreglo mediante el metodo de la burbuja
    for(i=0;i<max;i++){//primer bucle recorre desde el primer num hasta el penultimo del array
        for(var j=i+1;j<max;j++){//este siempre recorre el 2 array dps del primero
            if(numeros[i] > numeros[j]){//realiza la comparacion del recorrido del primer bucle con el segundo bulce
                //Este bloque pasa si:
                //si el elemento actual (numeros[i]) es mayor que el siguiente (numeros[j])
                //se intercambian los valores de los dos elementos
                temp = numeros[i];
                numeros[i] = numeros[j];
                numeros[j] = temp;
            }
        }
    }
    contenido += "<h1>Números ordenados</h1>";
    contenido += "<table> <body> <tr>";
    for(i=0;i<max;i++){
        contenido += "<td class='Off'>" + numeros[i] + "</td>";
    }
    datos.innerHTML = contenido;

    tdelemnt = document.getElementsByTagName("Off");
    for(var i=0;i<tdelemnt.length;i++){
        tdelemnt[i].onmouseover = function(){
            this.className = "On";
        }
        tdelemnt[i].onmouseout = function(){
            this.className = "Off";
        }
    }
}
window.onload = inicializar;

