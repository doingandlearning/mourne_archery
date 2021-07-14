var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 54.2401296,
      lng: -5.9003798,
    },
    zoom: 15,
  });
}
