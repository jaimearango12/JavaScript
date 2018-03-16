var Estructura = {
  "personas" : [
    {
      "Nombre" : "Jaime",
      "Edad" : 21,
      "Direccion" : "Calle 66 # 108",
      "Telefono" : "5555555",
      "Estudios" : [
          {
          "Primaria escolar" : {
            "fecha de estudio" : "2001 - 2006",
            "Lugar de estudio" : "Alba del castillo"
            }
          },
          {
          "Secundaria Escolar" : {
            "fecha de estudio" : "2006 - 20012",
            "Lugar de estudio" : "Colvipe"
           }
         }
        ]
      },
         {
          "Nombre" : "David",
          "Edad" : 21,
          "Direccion" : "Calle 65 # 108",
          "Telefono" : "5555555",
          "Estudios" : [
            {
              "Primaria escolar" : {
                "fecha de estudio" : "2001 - 2006",
                "Lugar de estudio" : "Colegio 1"
              }
              },
              {
              "Secundaria Escolar" : {
                "fecha de estudio" : "2006 - 20012",
                "Lugar de estudio" : "Colegio 2"
              }
            }
            ]
          }
        ]
      }


var persona1 = Estructura.personas[0];
var persona2 = Estructura.personas[1];

var telefono1 = persona1.Telefono;
var telefono2 = persona2.Telefono;

var estudiosPersona1 = persona1.Estudios[1];
var estudiosPersona2 = persona2.Estudios[1];
