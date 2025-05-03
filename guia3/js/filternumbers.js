// Mostrar la tecla presionada solo si no es un número
function showChar(e) {
    var code;
    if (!e) var e = window.event;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    
    var character = String.fromCharCode(code);
    // Solo mostrar alerta si NO es un número
    if (!/^[0-9]$/.test(character)) {
        alert('Tecla no permitida: ' + character);
    }
}

// Dejar pasar únicamente números enteros y bloquear cualquier otro caracter
function numbersOnly(field, event) {
    var key, keychar;
    
    if (window.event)
        key = window.event.keyCode;
    else if (event)
        key = event.which;
    else
        return true;
        
    keychar = String.fromCharCode(key);
    
    // Caracteres especiales permitidos (backspace, tab, enter, escape)
    if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13) || (key == 27)) {
        return true;
    }
    // Números permitidos
    else if (("0123456789").indexOf(keychar) > -1) {
        window.status = "";
        return true;
    }
    // Cualquier otro caracter
    else {
        showChar(event); // Mostrar alerta solo para teclas no numéricas
        window.status = "Este campo solo acepta números";
        return false;
    }
}