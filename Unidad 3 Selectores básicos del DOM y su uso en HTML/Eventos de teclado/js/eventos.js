
function mostrar_tecla(event){
  var tecla = event.which || event.keyCode;
  document.querySelector("#tarjeta_muestra_tecla #texto_tarjeta")
   .innerHTML="presionlaste la tecla: "+String.fromCharCode(tecla);
}
/*
document.onkeypress= mostrar_tecla; // Añadir elemento que escucha los eventos
*/

/*--------------------------ejemplo 2------------------------------*/

function cambiarTituloVerde(){
  document.querySelector("#tarjeta_cambia_color .card-image span").className = "card-title green"
}

function cambiarTituloNegro(){
  document.querySelector("#tarjeta_cambia_color .card-image span").className = "card-title black"
};

/*
// Añadir un oyente para que detecte cuando una tecla se mantien presionada y cuando la tecla se deja de presionar
document.onkeydown=cambiarTituloVerde;
document.onkeyup=cambiarTituloNegro;
*/

/*---------------------------ejemplo 3-----------------------------*/

//Agregar funcion a on objeto en concreto

function teclaTextBox(event){
  var tecla = event.which || event.keyCode;
  document.querySelector("#tarjeta_presiona_input_text .card-action a").innerHTML="presionaste: "+String.fromCharCode(tecla)
}

/*
//ASOCIAR LA TECLA TEXTBOX A UN ATRIBUTO QUE ESUCHA AL TECLADO
document.querySelector("#tarjeta_presiona_input_text #tecla_texto").onkeypress = teclaTextBox;
*/
