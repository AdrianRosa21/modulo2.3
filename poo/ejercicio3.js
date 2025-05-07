class Circulo{
    constructor(radio){
        this.radio = radio;
    }
    calcularArea(){
        return Math.PI * Math.pow(this.radio,2);
    }
}
class Rectangulo{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return this.base * this.altura;
    }
}

const figuraSelect = document.getElementById("figura");
const inputsDiv = document.getElementById("inputs");
const resultadoP = document.getElementById("resultado");

figuraSelect.onchange = () => {
    const tipo = figuraSelect.value;

    if(tipo === "circulo"){
        inputsDiv.innerHTML = `
            <input type="number" id="radio" placeholder="Radio" required>
        `;
    }
    else{
        inputsDiv.innerHTML = `
            <input type="number" id="base" placeholder="Base" required>
            <input type="number" id="altura" placeholder="Altura(igual al lado si es cuadrado)" required>
        `;
    }
    resultadoP.textContent = "Resultado"; // Limpiar el resultado al cambiar la figura
};
figuraSelect.onchange(); // Llamar al evento para inicializar los inputs

document.getElementById("calcular").onclick = () => {
    const tipo = figuraSelect.value;

    if(tipo==="circulo"){
        const radio = parseFloat(document.getElementById("radio").value);
        if(isNaN(radio) || radio <= 0){
            alert("Por favor, ingresa un radio válido.");
            return;
        }
        const figura = new Circulo(radio);
        resultadoP.textContent = `El área del círculo es: ${figura.calcularArea().toFixed(2)}`;

    }else{
        const base = parseFloat(document.getElementById("base").value);
        const altura = parseFloat(document.getElementById("altura").value);
        if(isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0){
            alert("Por favor, ingresa valores válidos para la base y la altura.");
            return;
        }
        const figura = new Rectangulo(base, altura);
        resultadoP.textContent = `El área del rectángulo es: ${figura.calcularArea().toFixed(2)}`;
    }
}
