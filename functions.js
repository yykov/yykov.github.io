/**Declaración de funciones */
function enviar(){
    alert("!Enviado Correctamente!");
}

function checkEmail() {
    var email = document.getElementById('mail');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        alert('Por favor ingresa un correo electrónico valido!');
        email.focus;
        return false;
    }
}

function control(){
    if(document.getElementById('name') == null || document.getElementById('uname')==""){
        alert("El campo no puede estar vacío.");
        document.getElementById('name').focus();
        return false;
    }
    return true;
}
function perifericos(){
    alert("No disponible por el momento :(");
}
function celulares(){
    alert("No disponible por el momento :(");
}
