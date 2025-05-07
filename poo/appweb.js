class Tarea{
    constructor(fecha,descripcion,nombre,estado,id){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.estado = estado;
        this.id = id;
    }

}
let Id = 0; //variable para asignar un id a cada tarea
function generarId() {
    Id++;
    return Id;
}

document.getElementById("addTaskBtn").onclick = () => {
    //obtenemos los valores ingresados en los campos de texto
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const fecha = document.getElementById("fecha").value;
    let estado = "pendiente";
    let id = generarId(); //generamos un id para la tarea
    //validamos que todos los campos tengan información
    if(nombre && descripcion && fecha){
        //creamos un nuevo objeto paciente con los datos ingresados
        const nuevaTarea = new Tarea(fecha, descripcion, nombre, estado);
        

        //creo el div que añadire a la pagina 
        
        const tareaDiv = document.createElement("div");
        tareaDiv.className = "d-flex align-items-center gap-2";
        tareaDiv.id = id; //asigno el id al div
        // creo el li
        const tareaLi = document.createElement("li");
        tareaLi.className = "mb-0 letra";

        const color = document.createElement("span");
        color.className = "badge bg-danger estado";

        color.textContent = nuevaTarea.estado; //asigno el color al span

        tareaLi.textContent = nuevaTarea.nombre+" - " + nuevaTarea.descripcion + " - " + nuevaTarea.fecha + " - "  ;
        // creo el span que contiene el color
        
//AQUI SI NO CREO EL EVENTO DENTRO DEL DIV, NO SE PUEDE ELIMINAR LA TAREA
        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn btn-danger btn-sm";
        btnEliminar.textContent = "Eliminar tarea";
        btnEliminar.addEventListener("click", () => {
            tareaDiv.remove();
        });


        
        // Botón terminar
        const btnTerminar = document.createElement("button");
        btnTerminar.className = "btn btn-warning btn-sm";
        btnTerminar.textContent = "Marcar como terminada";
        btnTerminar.addEventListener("click", () => {
            color.className = "badge bg-success estado";
            color.textContent = "terminada";
        });

        // Agregamos elementos al div con appendChild
        //Y AQUI! agregamos al li el span que contiene el color
        tareaLi.appendChild(color);
        tareaDiv.appendChild(tareaLi);
        tareaDiv.appendChild(btnEliminar);
        tareaDiv.appendChild(btnTerminar);

        // Agregamos el div a taskList
        document.getElementById("taskList").appendChild(tareaDiv);

        document.getElementById("nombre").value = ""; //limpiamos el campo de nombre
        document.getElementById("descripcion").value = ""; //limpiamos el campo de especie
        document.getElementById("fecha").value = ""; //limpiamos el campo de sintomas
    }
    else{
        alert("Por favor, completa todos los campos."); //si no se completan todos los campos, mostramos un mensaje de alerta
    }
}

