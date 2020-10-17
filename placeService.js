let map;
const eilat_location = {lat: 29.6276518, lng: 34.8139806};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: eilat_location
    });

    map.addListener('click', showModal);

    saveInLocalStorage({
        title: "Eilat",
        lat: eilat_location.lat,
        lng: eilat_location.lng,
    });

    renderAlreadySavedLocations();
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            const lat = parseFloat(position.coords.latitude);
            const lng = parseFloat(position.coords.longitude);

            map.setCenter({lat: lat, lng: lng});
            map.panTo({lat: lat, lng: lng});

            new google.maps.Marker({
                position: {lat: lat, lng: lng},
                title: "My current location",
                map: map
            });
        });
    }
}

const showModal = e => {
    $('#txt-lat').val(e.latLng.lat());
    $('#txt-lng').val(e.latLng.lng());
    $('#modal-place').modal('show');
}

$('#modal-place').on('shown.bs.modal', function () {
    $('#txt-name').focus();
});

$('#modal-place').on('hidden.bs.modal', function () {
    $('#txt-name').val('');
    $('#txt-lat').val('');
    $('#txt-lng').val('');
});

const addMarker = e => {
    const title = $('#txt-name').val();
    const lat = parseFloat($('#txt-lat').val());
    const lng = parseFloat($('#txt-lng').val());
    if (lat && lng && title && title.length > 0) {
        const marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            title: title,
            map: map
        });

        saveInLocalStorage({
            title: title,
            lat: lat,
            lng: lng
        });

        $('#modal-place').modal('hide');
    }
}

const saveInLocalStorage = place => {
    const places = JSON.parse(localStorage.getItem('places')) || [];
    const alreadySaved = places.filter(x => x.lat === place.lat && x.lng === place.lng);
    if (alreadySaved.length > 0) {
        return;
    }

    places.push(place);
    localStorage.setItem('places', JSON.stringify(places));
}

const renderAlreadySavedLocations = () => {
    const places = JSON.parse(localStorage.getItem('places')) || [];
    if (places && places.length > 0) {
        places.forEach(place => {
            new google.maps.Marker({
                position: {
                    lat: parseFloat(place.lat),
                    lng: parseFloat(place.lng)
                },
                title: place.title,
                map: map
            });
        });
    }
}
