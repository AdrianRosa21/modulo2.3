//se definde una clase llamada paciente/mascota
class Paciente{
    constructor(nombre,especie,sintoma){
        this.nombre = nombre;
        this.especie = especie;
        this.sintoma = sintoma;
    }

    obtenerFicha(){
        return `${this.nombre} es un ${this.especie} que presenta el síntoma: ${this.sintoma}`;
    }
}
//aqui cuando haga click en el boton registrar se ejecuta la funcion

document.getElementById("registrar").onclick = () => {
    //obtenemos los valores ingresados en los campos de texto
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const sintoma = document.getElementById("sintomas").value;
    //validamos que todos los campos tengan información
    if(nombre && especie && sintomas){
        //creamos un nuevo objeto paciente con los datos ingresados
        const nuevoPaciente = new Paciente(nombre, especie, sintoma);
        //creamos un nuevo elemento de lista
        const li = document.createElement("li");

        li.textContent = nuevoPaciente.obtenerFicha(); //obtenemos la ficha del paciente
        document.getElementById("lista-pacientes").appendChild(li); //agregamos el nuevo elemento a la lista	

        document.getElementById("nombre").value = ""; //limpiamos el campo de nombre
        document.getElementById("especie").value = ""; //limpiamos el campo de especie
        document.getElementById("sintomas").value = ""; //limpiamos el campo de sintomas
    }
    else{
        alert("Por favor, completa todos los campos."); //si no se completan todos los campos, mostramos un mensaje de alerta
    }

};