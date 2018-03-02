var lista_nombres = ['Camilo', 'Eduardo', 'Nathalia', 'Juan', 'Alberto', 'Milton', 'Guillermo', 'Mateo', 'Maria', 'Pedro'];

var resultado = "Las personas aceptadas en la conferencia son: \n";

for(var i = 0; i < 10; i++){
  if (i == 6) {
    break;
  }
  resultado = resultado + lista_nombres[i] + "\n";
};

alert(resultado);
