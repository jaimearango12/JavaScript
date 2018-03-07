/*
function inicializa(){
  var prop = 42 // variable local creada por la funcion inicializa
  function mostrarProp() { // funcion interna de Closure
    alert(prop)
  }
  mostrarProp()
};

inicializa();
*/

var calculadora = (function (num1, num2){
  var resultado = 0;

  function actualizarelresultado(nuevoresultado){
    resultado = nuevoresultado
  }

  return{
    sumar: function(){
      var resultado = num1 + num2
      actualizarelresultado(resultado)
    },
    restar: function(){
      var resultado = num1 - num2
      actualizarelresultado(resultado)
    },
    multiplicar: function(){
      var resultado = num1 * num2
      actualizarelresultado(resultado)
    },
    dividir: function(){
      var resultado = num1 / num2
      actualizarelresultado(resultado)
    },
    resultado: function(){
      return resultado
    }
  }
})
