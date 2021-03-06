var map, infoWindow, pos

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function (position){
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
   initMap()
  })
}else{
  alert("el navegador no soporta la Geolocalizacion")
}

function initMap(){
  var mapContainer = document.getElementById('map')
  var config = {
    center : {lat:-34.397, lng: 150.644},
    zoom : 5
  }
  map = new google.maps.Map(mapContainer, config)
  infoWindow = new google.maps.infoWindow({map:map})
}

var button = document.getElementById('btn-geo')

button.addEventListener('click',function(){
  alert("Se buscará tu ubicacion en el mapa")
  map.setCenter(pos)
  map.setZoom(15)
  infoWindow.setPosition(pos)
  infoWindow.setContent('ubicacion encontrado')
})
