function initMap() {
    var shop = {lat: 53.529618, lng: -114.005809};
    var map = new google.maps.Map(
        document.querySelector('.map'), {zoom: 14, center: shop});
    var marker = new google.maps.Marker({position: shop, map: map});
}  