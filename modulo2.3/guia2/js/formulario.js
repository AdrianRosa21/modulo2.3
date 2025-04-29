function init() {
    var form = document.getElementById("form");
    form.onsubmit = function(e) {
        e.preventDefault();
        var control = document.frmconf.selcontrol.value;
        var numero = document.frmconf.txtnum.value;
        
        if (!control || !numero) {
            alert("Por favor seleccione un control e ingrese un número válido");
            return;
        }
        
        createform(control, parseInt(numero));
    }
}

function createform(control, numero) {
    var htmlform = "";
    var formview = document.getElementById("view");
    
    htmlform = `<div class="container p-4 border rounded">
                <form class="generated-form">
                <fieldset class="form-group">
                <legend class="fw-bold"><span class="number">1</span> Formulario generado con JS</legend>`;
    
    switch(control) {
        case "text":
        case "password":
            for(let i = 0; i < numero; i++) {
                htmlform += `<div class="mb-3">
                            <label class="form-label">${control} ${i+1}</label>
                            <input type="${control}" name="${control}${i+1}" 
                                   class="form-control" placeholder="Ingrese ${control}" required>
                            </div>`;
            }
            break;
        
        case "textarea":
            for(let i = 0; i < numero; i++) {
                htmlform += `<div class="mb-3">
                            <label class="form-label">${control} ${i+1}</label>
                            <textarea name="${control}${i+1}" class="form-control" 
                                      placeholder="Ingrese texto" rows="3" required></textarea>
                            </div>`;
            }
            break;
            
        case "checkbox":
            for(let i = 0; i < numero; i++) {
                htmlform += `<div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" 
                                   name="${control}${i+1}" id="${control}${i+1}">
                            <label class="form-check-label" for="${control}${i+1}">
                                Opción ${i+1}
                            </label>
                            </div>`;
            }
            break;
            
        case "radio":
            for(let i = 0; i < numero; i++) {
                htmlform += `<div class="form-check mb-2">
                            <input class="form-check-input" type="radio" 
                                   name="radioGroup" id="${control}${i+1}" value="${control}${i+1}">
                            <label class="form-check-label" for="${control}${i+1}">
                                Opción ${i+1}
                            </label>
                            </div>`;
            }
            break;
            
        case "file":
            for(let i = 0; i < numero; i++) {
                htmlform += `<div class="mb-3">
                            <label class="form-label">Subir archivo ${i+1}</label>
                            <input type="file" name="${control}${i+1}" class="form-control">
                            </div>`;
            }
            break;
            
        default:
            alert("Control no reconocido");
            return;
    }
    
    htmlform += `</fieldset></form></div>`;
    formview.innerHTML = htmlform;
}

window.onload = init;
