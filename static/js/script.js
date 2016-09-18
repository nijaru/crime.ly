$(document).ready(function(){
  console.log("READY")
  // base URI
  url = 'https://data.sfgov.org/resource/7a3q-s79u.json';

  //Map
  window.initMap = function() {
    //map center
    var myLatLng = {lat: 37.784691, lng:  -122.397804};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: myLatLng
    });

    //parsing data from JSON
    var locations = [];
    $.ajax({
      url: url,
      dataType: 'json',
      async: false,
      success: function(data){
          data.forEach(function(data){
            latLngCat = {
              latLng: {lat: parseFloat(data.y), lng: parseFloat(data.x)},
              crime: data.category }
            locations.push(latLngCat)
          });
      }
    });

    //adding markers to map
    locations.forEach(function(data){
      var marker = new google.maps.Marker({
        position: data.latLng,
        map: map,
        title: data.crime
      });
    })
  }
})
