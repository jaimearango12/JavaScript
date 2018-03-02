var lista_nombres = ['Camilo', 'Eduardo', 'Nathalia', 'Juan', 'Alberto', 'Milton', 'Guillermo', 'Mateo', 'Maria', 'Pedro'];

var resultado = "";

for(nombre_temp in lista_nombres){
  resultado = resultado + lista_nombres[nombre_temp] + "\n";
};

alert(resultado);
