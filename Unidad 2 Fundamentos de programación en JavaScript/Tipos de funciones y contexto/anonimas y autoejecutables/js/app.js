//Funciones anonimas
/*
setinterval(function(){console.log("mensaje repetitivo");},2000);
setinterval(function(){console.log("mensaje luego de una espera");},2000);

function personalizada(numero1, numero2, funcion2){
  var = numero1 + numero2;
  funcion2(resultado);
}

personalizada(4, 8, function (resultado){alert(resultado);});
*/

//funciones autoejecutables
/*
(function(nombre, apellido){
  console.log(this); //aqui el comando this funciona como Window
}) ();

//Ejemplo de CONTEXTO 1
(function () {
  this.variable1 = 'hola mundo';
})

console.log(Window.variable1);
*/
/*
(function(nombre, apellido){
  console.log(nombre + ' ' + apellido);
})('Andres', "monsalve");
*/

//Otro EXAMPLE
 var myObject = {
   property='hola mundo';
   func: function(){
     return this.property;
   }
 };

console.log(myObject.func());

var myObject2 = {
  property = 'Hola mundo'
};

function retornarpropiedad(){
  alert(this.property);
};

myObject2.f = retornarpropiedad;
myObject2.f();
