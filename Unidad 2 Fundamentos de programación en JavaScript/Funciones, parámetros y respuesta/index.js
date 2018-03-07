
// Funciones

function nombreFuncion() {
  // Bloque de código
}

// Llamado a la funcion :

nombreFuncion()  // Recordar los parentesis para ejecutarla ;

// Parametros

function nombreFuncion(nombre, apellido, edad, peso, ... paramN) {
    // Bloque de código
}

// Llamado al a funcion con parametros

nombreFuncion('Edward', 'Monsalve', '24', '80', ...)


function alertarMensaje(nombre, edad, estatura) {
  alert('Mi nombre es : '+ nombre +' , tengo ' + edad + ' años y mi estatura es: ' + estatura + ' CM')
}

alertarMensaje('Edward', 24, '1.88')

function alertarMensaje2(nombre, edad, estatura) {
  var mensaje= 'Mi nombre es : '+ nombre +' , tengo ' + edad + ' años y mi estatura es: ' + estatura + ' CM'
  return mensaje
}

alertarMensaje2('Edward', 24, '1.88')

console.log((alertarMensaje2('Edward', 24, '1.88'))
// Respuestas

//tambien se puede NO especificar parametros dentro de la funcion y enviarle lo que queramos al moemto de la invvocacion

function sumar() {
  if(arguments.length > 0){
    alert(arguments[0] + arguments[1])
  }else{
    alert("no se enviaron parametros a la funcion")
  }
}

sumar(4,8)
