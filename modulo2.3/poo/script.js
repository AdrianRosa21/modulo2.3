class Contador{
    constructor(){
        this.valor = 0;
    }
    incrementar(){
        this.valor++;
    }
    decrementar(){
        this.valor--;
    }
    obtenerContador(){
        return this.valor;
    }
}

const contador = new Contador();
const resultado = document.getElementById('resultado');

document.getElementById("sumar").onclick = () => {
    contador.incrementar();
    resultado.textContent = contador.obtenerContador();
}

document.getElementById("restar").onclick = () => {
    contador.decrementar();
    resultado.textContent = contador.obtenerContador();
}
