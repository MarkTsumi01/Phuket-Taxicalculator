var myLatLng = { lat: 7.951933, lng: 98.338088 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};
//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

var bounds = new google.maps.LatLngBounds();

// Add the coordinates of the north, south, east, and west edges of Phuket to the bounds
bounds.extend({ lat: 8.539, lng: 98.534 }); // North
bounds.extend({ lat: 7.413, lng: 98.246 }); // South
bounds.extend({ lat: 8.093, lng: 99.197 }); // East
bounds.extend({ lat: 7.826, lng: 97.497 }); // West

//Lock the map to show only the area within the bounds
map.fitBounds(bounds);

// Set a listener to check if the user tries to pan outside the bounds
google.maps.event.addListener(map, 'bounds_changed', function () {
    if (map.getBounds().intersects(bounds)) return;
    map.panToBounds(bounds);
});

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map);
        
function getDirections() {
          //create request
          var request = {
              origin: document.getElementById("from").value,
              destination: document.getElementById("to").value,
              travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
              unitSystem: google.maps.UnitSystem.IMPERIAL
          }
          //save request to Local Storage
          localStorage.setItem("request", JSON.stringify(request));
          //go to directions page
          if (request.origin === "Phuket International Airport (HKT), Mai Khao, Thalang District, Phuket, Thailand") {
            window.location.href = "taxi_limou.html";
          }else if (request.origin === "สนามบินภูเก็ต (HKT) Mai Khao, Thalang District, Phuket, Thailand"){
              window.location.href = "taxi_limou.html";
          }
          else {
            window.location.href = "taxi.html";
          }
        }


