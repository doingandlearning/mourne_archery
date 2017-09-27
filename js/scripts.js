function initMap() {
    var uluru = { lat: 54.2401296, lng: -5.9003798 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}