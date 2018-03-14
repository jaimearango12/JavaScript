
function cambiarRadioButtons(){
  var estadoRB = document.getElementById('activar_rb').checked;
  if (estadoRB){
    var estado = "true"
    document.getElementById('animales').disabled=false
    document.getElementById('postres').disabled=false
    document.getElementById('musica').disabled=false
  }else{
    document.getElementById('animales').disabled=true
    document.getElementById('postres').disabled=true
    document.getElementById('musica').disabled=true
  }
}

//Asocia la funcion que se creo con la funcion que escucha el evento onchange
document.getElementById('activar_rb').onchange=cambiarRadioButtons;

/*----------Ejemplo onload----------- */

function cargarPagina(){
  alert("se ha cargado la pagina.")
}

//esto genera un mensaje de alerta cuando la pagina se cargue
document.getElementsByTagName('body')[0].onload=cargarPagina;


//onfocus y onblur
function eventoOnFocus(event){
  var seleccion = event.currentTarget.id
  switch (seleccion) {
    case "animales":
      document.getElementById("sel_animales").disabled=false
      $(document).ready(function(){$("select").material_select()})
      break
    case "postres":
      document.getElementById("sel_postres").disabled=false
      $(document).ready(function(){$("select").material_select()})
      break
    case "musica":
      document.getElementById("sel_musica").disabled=false
      $(document).ready(function(){$("select").material_select()})
      break
    default:

  }
}

function eventoOnBlur(event){
  var seleccion = event.currentTarget.id
  switch (seleccion) {
    case "animales":
      document.getElementById("sel_animales").disabled=true
      $(document).ready(function(){$("select").material_select()})
      break;
    case "postres":
      document.getElementById("sel_postres").disabled=true
      $(document).ready(function(){$("select").material_select()})
      break;
    case "musica":
      document.getElementById("sel_musica").disabled=true
      $(document).ready(function(){$("select").material_select()})
      break;
    default:
 }
}

//ver el cuaderno para entender este paso

function asignarEventoRB(){
  document.getElementById('animales').onfocus=eventoOnFocus
  document.getElementById('postres').onfocus=eventoOnFocus
  document.getElementById('musica').onfocus=eventoOnFocus

  document.getElementById('animales').onblur=eventoOnBlur
  document.getElementById('postres').onblur=eventoOnBlur
  document.getElementById('musica').onblur=eventoOnBlur

}

asignarEventoRB()
