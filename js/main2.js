var myLatLng = { lat: 7.951933, lng: 98.338088 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
var bounds = new google.maps.LatLngBounds();

bounds.extend({ lat: 8.539, lng: 98.534 }); // North
bounds.extend({ lat: 7.413, lng: 98.246 }); // South
bounds.extend({ lat: 8.093, lng: 99.197 }); // East
bounds.extend({ lat: 7.826, lng: 97.497 }); // West

map.fitBounds(bounds);

google.maps.event.addListener(map, 'bounds_changed', function () {
    if (map.getBounds().intersects(bounds)) return;
    map.panToBounds(bounds);
});

var directionsService = new google.maps.DirectionsService();

var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);


function LcalcRoute() {
    const urlParams = new URLSearchParams(window.location.search);
    const buttonValue = urlParams.get('buttonValue');
    console.log(buttonValue);

    var limu = 0
    var request = {
        origin: "Phuket International Airport (HKT), Mai Khao, Thalang District, Phuket, Thailand",
        destination: buttonValue,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }

 
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " 
            + "Phuket International Airport (HKT), Mai Khao, Thalang District, Phuket, Thailand" + ".<br />To: " 
            + buttonValue 
            output2.innerHTML = ".<br /> Driving distance <i class='fas fa-road'></i> : "
            + result.routes[0].legs[0].distance.text 
            + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " 
            + result.routes[0].legs[0].duration.text 
            + ".</div>";

            directionsDisplay.setDirections(result);
        } else {

            map.setCenter(myLatLng);
            output.innerHTML = 
            "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });


        //pass the request to the route method
        directionsService.route(request, function (result2, status) {
            if (status == google.maps.DirectionsStatus.OK) {
    
                //Get distance
                const output2 = document.querySelector('#output2');
                var distance = parseFloat(result2.routes[0].legs[0].distance.text.split(" ")[0])
                var Kilometer = distance / 0.62137
                console.log("distance = " + distance + " or " + Kilometer.toFixed(2) + " Kilometer")
    
    
                //output2.innerHTML = result2.routes[0].legs[0].distance.text
                if (buttonValue === "Patong Beach, ตำบลป่าตอง อำเภอกะทู้ ภูเก็ต ประเทศไทย") {
                   limu += 699
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                } else if (buttonValue === "Mai Khao Beach, ภูเก็ต ประเทศไทย") {
                    limu += 699
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                } else if (buttonValue === "Kalim Beach, ตำบล กะทู้ อำเภอกะทู้ ภูเก็ต ประเทศไทย") {
                    limu += 699
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Nai Thon Beach, ภูเก็ต ประเทศไทย") {
                    limu += 699
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Bangtao Beach, อำเภอถลาง ภูเก็ต ประเทศไทย") {
                    limu += 699
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Ao Por Viewpoint ตำบล ป่าคลอก อำเภอถลาง ภูเก็ต ประเทศไทย") {
                    limu += 699
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Tri Trang Beach, ตำบลป่าตอง อำเภอกะทู้ ภูเก็ต ประเทศไทย") {
                    limu += 799
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Surin Beach, ตำบลเชิงทะเล ภูเก็ต ประเทศไทย") {
                    limu += 799
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Kata Beach, ตำบล กะรน ภูเก็ต ประเทศไทย") {
                    limu += 799
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Kamala Beach, ตำบล กมลา ภูเก็ต ประเทศไทย") {
                    limu += 799
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Karon Beach, ตำบล กะรน ภูเก็ต ประเทศไทย") {
                    limu += 799
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Cape Panwa, ตำบล วิชิต อำเภอเมืองภูเก็ต ภูเก็ต ประเทศไทย") {
                    limu += 899
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Rawai Beach, ตำบล ราไวย์ อ เมืองภูเก็ต, ภูเก็ต ประเทศไทย") {
                    limu += 899
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Kata Noi Beach, ตำบล กะรน อำเภอเมืองภูเก็ต ภูเก็ต ประเทศไทย") {
                    limu += 899
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Chalong Bay Rum Distillery, Soi 2, ตำบล ฉลอง Amphur Muang, ภูเก็ต ประเทศไทย") {
                    limu += 899
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Nai Harn Beach, ตำบล ราไวย์ อำเภอเมืองภูเก็ต ภูเก็ต ประเทศไทย") {
                    limu += 899
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Laem Ka Beach, ตำบล ราไวย์ อำเภอเมืองภูเก็ต ภูเก็ต ประเทศไทย") {
                    limu += 899
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }else if (buttonValue === "Friendship Beach, ตำบล ราไวย์ อำเภอเมืองภูเก็ต ภูเก็ต ประเทศไทย") {
                    limu += 899
                    console.log("Trave price By limu = " + limu.toFixed(2) + " baht")
                    output2.innerHTML = "distance = " + distance + " mile"+ " or " + Kilometer.toFixed(2) + " Kilometer" + ".<br />Travel price By limusine = " + limu.toFixed(2) + " baht"
                }
    

                
                //display route
                directionsDisplay.setDirections(result2);
            } else {
                //delete route from map
                directionsDisplay.setDirections({ routes: [] });
                //center map in mylat
                map.setCenter(myLatLng);
    
                //show error message
                output2.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i>Please try again</div>";
            }
        });
}


function map2() {
    //create request
    const urlParams = new URLSearchParams(window.location.search);
    const buttonValue = urlParams.get('buttonValue');
    console.log(buttonValue);

    var request = {
        origin: "Phuket International Airport (HKT), Mai Khao, Thalang District, Phuket, Thailand",
        destination: buttonValue,
        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }


    //pass the request to the route method
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time
            // const output = document.querySelector('#output');
            // output.innerHTML = "<div class='alert-info'>From: " + request.origin + ".<br />To: " + request.destination + ".<br /> Driving distance <i class='fas fa-road'></i> : "
            //     + result.routes[0].legs[0].distance.text + ".<br />Duration <i class='fas fa-hourglass-start'></i> : " + result.routes[0].legs[0].duration.text + ".</div>";

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in mylat
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
        }
    });
}