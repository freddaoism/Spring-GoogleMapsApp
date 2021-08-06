var map;
var contentString = '<h2>' + city + ', ' + state + '</h2>';

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 10,
    });

    let image = {url:'marker.png', scaledSize: new google.maps.Size(50, 50)};

    let marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.BOUNCE
    });

    const infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker,'click',()=> {
        infowindow.open(map,marker)
    });
}