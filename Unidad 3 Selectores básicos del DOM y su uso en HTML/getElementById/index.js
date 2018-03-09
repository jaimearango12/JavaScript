//variables

var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;

//Asignacion

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var usuario = document.getElementById("usuario");
var password = document.getElementById("password");
var boton = document.getElementById("btn-guardar");

//Mostar el objeto seleccionado

console.log(password);

//Función que se ejecuta en el eventos

function mostrarMensaje(mensaje){
  alert("El usuario hizo click sobre el boton de guardar");
}

//Asignacion del evento al boton

boton.addEventListener('click', mostrarMensaje);
