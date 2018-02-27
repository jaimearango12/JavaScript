/*
var Suma = 4 + 6;
var Resta = 55 - 23;
var Multiplicacion = 2 * 66;
var Division = 49 / 7;

console.log("Suma: ",Suma, "Resta: ",Resta, "Multiplicacion: ",Multiplicacion, "Division:",Division)
*/

/*
var Modulo = 9 % 3;
console.log(Modulo)
*/

/*
var Num = 20;
var Incremento = ++Num;
var Decremento = --Num; //deberia dar 19
var Unario = -Num;


console.log(Num, Incremento, Decremento, Unario)
*/

/*
var x = true;
var Not= !x;

console.log(Not)
*/

/*
var x = true;
var y = false;

console.log((x && y));
*/

/*
//Ejemplo de && utilizando condicionales
function EvaluarPares(numero1, numero2){
  if((numero1 % 2)==0 && (numero2 % 2)==0){
    alert('los Numeros son pares')
  }
}
EvaluarPares (2,2)
*/

/*
var x = true;
var y = false;

console.log((x || y));
*/


//Ejemplo de || utilizando condicionales
function EvaluarPares2 (numero1,numero2){
  if((numero1 % 2)==0 || (numero2 % 2)==0){
    alert('Alguno de los Dos es Par')
  }else{
    alert('Ninguno de los dos es par')
  }
}

EvaluarPares2(1,101)
