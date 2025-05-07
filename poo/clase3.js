const comida = {
    id : 1,
    nombre: "Manzana",
    color: "Rojo"
};
console.log(comida); // { id: 1, nombre: 'Manzana', color: 'Rojo' }
console.log(comida.id); // 1
console.log(comida.nombre); // Manzana
console.log(comida.color); // Rojo

class Comida{
    constructor (id,nombre, color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }   
    
    nombrar ()
    {
        return `${this.nombre} de color ${this.color}`;
    }
}

const manzana = new Comida(1,"Manzana","Rojo");
const pera = new Comida(2,"Pera","Verde");

console.log(manzana.nombrar()); // Manzana de color Rojo
console.log(pera.nombrar()); // Pera de color Verde




class platos extends Comida{
    constructor(id,nombre,color,sabor){
        super(id,nombre,color);//super es para llamar al constructor de la clase padre
        this.sabor = sabor;//agregamos el nuevo atributo sabor
    }
    preparacion (){
        return `Plato de comida de ${this.nombre} con sabor: ${this.sabor}`;
    }
}

const contenedor = document.getElementsByClassName('resultado')[0];
let cantidad = prompt("¿Cuántos platos quieres crear?");

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Nombre del plato: ");
    const alimento = new platos(3, nombre, 'Roja con blanco', 'salado');
    console.log(alimento.preparacion());
    contenedor.innerHTML += alimento.preparacion() + "<br>";
}
