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
    var gMarkers = [];

    var filterCategory = function(data) {
      // if (data.category !== "DRIVING UNDER THE INFLUENCE" ||
      //     data.category !== "NON-CRIMINAL" ||
      //     data.category !== "OTHER OFFENSES") {
            latLngCat = {
              latLng: {lat: parseFloat(data.y), lng: parseFloat(data.x)},
              crime: data.category}
            markersData.push(latLngCat)
          // }
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

      var icon = ['./static/img/Blue_Marker.png', './static/img/Green_Marker.png', './static/img/Yellow_Marker.png', './static/img/Red_Marker.png']
      //Red
      if(data.crime == 'ARSON' ||
        data.crime == 'ASSAULT' ||
        data.crime == 'BURGLARY' ||
        data.crime == 'KIDNAPPING' ||
        data.crime == 'LARCENY/THEFT' ||
        data.crime == 'MISSING PERSON' ||
        data.crime == 'PORNOGRAPHY/OBSCENE MAT' ||
        data.crime == 'ROBBERY' ||
        data.crime == 'SEX OFFENSES, FORCIBLE' ||
        data.crime == 'SEX OFFENSES, NON FORCIBLE' ||
        data.crime == 'STOLEN PROPERTY' ||
        data.crime == 'TREA' ||
        data.crime == 'VANDALISM' ||
        data.crime == 'WARRANTS' ||
        data.crime == 'VEHICLE THEFT' ||
        data.crime == 'WEAPON LAWS'){
        var marker = new google.maps.Marker({
          position: data.latLng,
          icon: icon[3],
          map: map,
          title: data.crime,
          category: data.crime
        });

      }else if (data.crime == 'DRUG/NARCOTIC'  ||
                data.crime == 'DRUNKENNESS' ||
                data.crime == 'FAMILY OFFENSES' ||
                data.crime == 'LIQUOR LAWS' ||
                data.crime == 'LOITERING' ||
                data.crime == 'PROSTITUTION' ||
                data.crime == 'SUSPICIOUS OCC' ||
                data.crime == 'TRESPASS') {
      var marker = new google.maps.Marker({
        position: data.latLng,
        icon: icon[2],
        map: map,
        title: data.crime,
        category: data.crime
      });

    }else if (data.crime == 'BAD CHECKS' ||
    data.crime == 'BRIBERY' ||
    data.crime == 'EMBEZZLEMENT' ||
    data.crime == 'EXTORTION' ||
    data.crime == 'FORGERY/COUNTERFEITING' ||
    data.crime == 'FRAUD' ||
    data.crime == 'GAMBLING' ||
    data.crime == 'RECOVERED VEHICLE' ||
    data.crime == 'SECONDARY CODES'){
      var marker = new google.maps.Marker({
        position: data.latLng,
        icon: icon[1],
        map: map,
        title: data.crime,
        category: data.crime
      });
    }else{
      var marker = new google.maps.Marker({
        position: data.latLng,
        icon: icon[0],
        map: map,
        title: data.crime,
        category: data.crime
      });

    }
      gMarkers.push(marker);
    })


    filterMarkers = function (category) {
      for (var i = 0; i < markersData.length; i++) {
        marker = gMarkers[i];
        if (marker.category == category || category.length === 0) {
          marker.setVisible(true);
        }
        else {
          marker.setVisible(false);
        }
      }
    }
  }
})
