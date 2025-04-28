function init() {
    var form = document.getElementById("form");
    form.onsubmit = function(e) {
        e.preventDefault(); // Prevenir el envío del formulario
        createform(document.frmconf.selcontrol.value, document.frmconf.txtnum.value);
    }
}

function createform(control, numero) { // Cambiado _numero a numero para consistencia
    var htmlform, tag, i;
    var formview = document.getElementById("view");
    
    htmlform = "<div class='container'>";
    htmlform += "<form>";
    htmlform += "<fieldset class='form-group'>"; // Corregido "fieldeset" a "fieldset"
    htmlform += "<legend><span class='number'>1</span> Formulario generado con JS</legend>";
    
    switch(control) {
        case "text":
        case "password":
            for(i = 0; i < numero; i++) { // Corregido la coma por punto y coma en el for
                tag = "<input type='" + control + "' name='" + control + (i+1) + "' required placeholder='Ingrese los datos en el campo " 
                    + control + "' /><br>";
                htmlform += tag;
            }
            break;
        
        case "textarea":
            for (i = 0; i < numero; i++) {
                tag = "<textarea name='" + control + (i + 1) + "' required placeholder='Ingrese los datos en el campo "
                    + control + "'></textarea><br />";
                htmlform += tag;
            }   
            break;
            
        case "checkbox":
            for (i = 0; i < numero; i++) {
                tag = "<div><input type='" + control + "' name='" + control + (i + 1) +
                    "' id='" + control + (i + 1) + "' />";
                tag += "<label for='" + control + (i + 1) + "'>";
                tag += control + (i + 1) + "</label></div>";
                htmlform += tag;
            }
            break;
            
        case "radio":
            for (i = 0; i < numero; i++) {
                tag = "<div><label for='" + control + (i + 1) + "'>";
                tag += "<input type='" + control + "' name='" + control + "' id='" + 
                    control + (i + 1) + "' />";
                tag += "<span>" + control + (i + 1) + "</span></label></div>";
                htmlform += tag;
            }
            break;
            
        case "file":
            for (i = 0; i < numero; i++) {
                tag = "<label class='custom-file-input file-blue'>";
                tag += "<input type='file' name='" + control + (i + 1) + "' />";
                tag += "</label><br />";
                htmlform += tag;
            }
            break;
            
        default:
            alert("No se ha seleccionado ningún control");
            return;
    }
    
    htmlform += "</fieldset>";
    htmlform += "</form>";
    htmlform += "</div>";
    formview.innerHTML = htmlform;
}

window.onload = init;