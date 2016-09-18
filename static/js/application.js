$(document).ready(function(){
  console.log("READY")
  url = 'https://data.sfgov.org/resource/7a3q-s79u.json';
  console.log(url)

  $.getJSON(url, function(data, textstatus) {
         console.log(data);
       }
//
// var markers = [];
//
// function initMap() {
//   var myLatLng = {lat: 37.784691, lng:  -122.397804};
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: myLatLng
//   });
//
//
//   while(markers.length <= 100){
//     console.log('testing')
//
//     var latBase = myLatLng.lat.toString().slice(0,-4)
//     var lngBase = myLatLng.lng.toString().slice(0,-4)
//
//     var randomEnd1 = Math.random(2).toString().slice(2,6)
//     var randomEnd2 = Math.random(2).toString().slice(2,6)
//
//
//     myLatLng = {lat: parseFloat(latBase + randomEnd1.toString()), lng: parseFloat(lngBase + randomEnd2.toString())}
//     var marker = new google.maps.Marker({
//       position: myLatLng,
//       map: map,
//       title: 'Hello World!'
//     });
//     markers.push(marker)
//   }
//
//
//   console.log(myLatLng)
//
// }


})
