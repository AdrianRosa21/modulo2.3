function hola(x){
    return x*x;
}
//Con mas de 1 argumento
const suma = (a, b) =>{ return a + b} ;
//Con un argumentos
const saludo = nombre => {return nombre};
//Sin argumento
const alertar = () => {console.warn("No hagas esto")};


function init(){
    //mediante el uso del metodo prompt()
    //podemos obtener el valor numerico para realizar el calculo
    var presupuesto = prompt('Ingrese el presupuesto anual' , '');
    var info, rrhh, conta, i;
    var div = document.getElementById('distribucion');
    


    //calculamos la distribución del presupuesto
    info = presupuesto*0.40;
    rrhh = presupuesto*0.35;
    conta = presupuesto*0.25;

    //creando el codigo que se insertara dentro del elemento div id=distribucion
    //esto mediante una var llamada dibujar
    var dibujar = "<ul class = 'text-primary mt-4'>\n\t<li>\n";
    dibujar +=  "\t\t<a href ='#' class='move-right'>\n ";
    dibujar +=  "\t\t\tEl presupuesto asignado para informática es: $ " + info + "\n";
    dibujar +=  "\t\t</a>\n";
    dibujar +=  "\t</li>\n";
    dibujar +=  "\t<li>\n";
    dibujar +=  "\t\t<a href='#' class = 'move-right'>\n";
    dibujar +=  "\t\t\tEl presupuesto asignado para RRHH es : $"+ rrhh+"\n";
    dibujar +=  "\t\t</a>\n";
    dibujar +=  "\t</li>\n";
    dibujar +=  "\t<li>\n";
    dibujar +=  "\t\t<a href='#' class = 'move-right'>\n";
    dibujar +=  "\t\t\tEl presupuesto asignado para Contabilidad es : $"+ conta+"\n";
    dibujar +=  "\t\t</a>\n";
    dibujar +=  "\t</li>\n";
    dibujar +=  "</ul>\n";
        //El innerhtml es que se almacena en un contenedor(div o otro elemento)
        div.innerHTML = dibujar;
}
//En el html ya se pone el script
window.onload = init;