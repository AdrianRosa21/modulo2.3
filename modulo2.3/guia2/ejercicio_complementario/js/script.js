const cantidadInput = document.getElementById('cantidad');
const iniciarBtn = document.getElementById('iniciarRegistro');
const formulario = document.getElementById('formulario');
const tablaBody = document.querySelector('#tabla tbody');
const resumen = document.getElementById('resumen');

let cantidad = 0;
let contador = 0;

const especialidadesContador = {
  "Desarrollo de Software": 0,
  "Electrónica": 0,
  "Contaduría": 0
};

iniciarBtn.addEventListener('click', () => {
  cantidad = parseInt(cantidadInput.value);
  if (cantidad > 0) {
    formulario.style.display = 'block';
    cantidadInput.disabled = true;
    iniciarBtn.disabled = true;
  }
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (contador >= cantidad) return;

  const nombre = document.getElementById('nombre').value.trim();
  const edad = parseInt(document.getElementById('edad').value);
  const especialidad = document.getElementById('especialidad').value;

  if (!nombre || !edad || !especialidad) return;

  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${edad}</td>
    <td>${especialidad}</td>
  `;
  tablaBody.appendChild(fila);

  especialidadesContador[especialidad]++;
  contador++;

  formulario.reset();

  if (contador === cantidad) {
    formulario.style.display = 'none';
    mostrarResumen();
  }
});

function mostrarResumen() {
  resumen.innerHTML = `
    <h3>Resumen por especialidad:</h3>
    <ul>
      <li>Desarrollo de Software: ${especialidadesContador["Desarrollo de Software"]}</li>
      <li>Electrónica: ${especialidadesContador["Electrónica"]}</li>
      <li>Contaduría: ${especialidadesContador["Contaduría"]}</li>
    </ul>
  `;
}
