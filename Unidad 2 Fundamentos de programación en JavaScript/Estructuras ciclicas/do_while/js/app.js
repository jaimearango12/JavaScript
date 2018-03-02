var lista_nombres = ['Camilo', 'Eduardo', 'Nathalia', 'Juan', 'Alberto', 'Milton', 'Guillermo', 'Mateo', 'Maria', 'Pedro'];

var i=5;

var resultado = "";

//vamos a agregar los nombre a cada lista de iteracion
do{
  resultado = resultado + lista_nombres [i] + "\n";
  i=i+1;
}while (i<10) ;

alert(resultado);
