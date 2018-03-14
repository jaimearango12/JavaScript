
function cambioFotoAstronauta(){
  document.getElementById("astronauta").style="width:50%;";
}

function cambioFotoExtraterrestre(){
  document.getElementById("extraterrestre").style="-webkit-filter:blur(5px);filter:blur(5px)";
}

function cambioFotoPlanetas(){
  document.getElementById('planetas').style="filter:hue-rotate(90deg);-webkit-filter:hue-rotate(90deg);";
}

function cambioFotoNave(){
  document.getElementById('nave_espacial').style ="filter:sepia(100%);-webkit-filter:sepia(100%);";
}


//Asociar la foto astronauta a onclick
document.getElementById('astronauta').onclick=cambioFotoAstronauta;

//Asociar  la foto extraterrestre a ondbleclick
document.getElementById("extraterrestre").ondblclick=cambioFotoExtraterrestre;

//Asociar la foto planetas a onmouseover
document.getElementById("planetas").onmouseover=cambioFotoPlanetas;

//Asociar la foto nave a on onmouseout
document.getElementById("nave_espacial").onmouseout=cambioFotoNave;
