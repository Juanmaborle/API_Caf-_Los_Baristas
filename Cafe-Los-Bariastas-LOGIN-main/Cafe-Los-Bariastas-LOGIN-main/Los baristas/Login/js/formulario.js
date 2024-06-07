console.log("entro a formulario.js");

function validar() {
    console.log('********************validar()********************');

    var usuarioHardCodeado = 'admin@admin.com';
    var passwordHardCodeado = 'admin';

    var obtenerUsuarioForm = document.getElementById('usuario').value;
    var obtenerPasswordForm = document.getElementById('password').value;

    console.log("usuario Form: " + obtenerUsuarioForm);
    console.log("Password Form: " + obtenerPasswordForm);


    if(usuarioHardCodeado == obtenerUsuarioForm && passwordHardCodeado == obtenerPasswordForm) {
      alert ('El usuario y contraseña es correcto.');
      redireccionar();
    } else {
      alert ('Las credenciales son incorrectas.');
    }
}

function redireccionar() {
    window.location.replace("/Cafe-Los-Bariastas-LOGIN-main/Los baristas/API/index.html");
}
   