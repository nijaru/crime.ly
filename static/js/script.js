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

    var markersData = [];

    var filterCategory = function(data) {
      if (data.category !== "DRIVING UNDER THE INFLUENCE" ||
          data.category !== "NON-CRIMINAL" ||
          data.category !== "OTHER OFFENSES") {
            latLngCat = {
              latLng: {lat: parseFloat(data.y), lng: parseFloat(data.x)},
              crime: data.category }
            markersData.push(latLngCat)
          }
    };

    $.ajax({
      url: url,
      dataType: 'json',
      async: false,
      success: function(data){
          data.forEach(function(data){
            filterCategory(data)
          });
      }
    });

    //adding markers to map
    markersData.forEach(function(data){
      var marker = new google.maps.Marker({
        position: data.latLng,
        map: map,
        title: data.crime
      });
    })
  }
})
