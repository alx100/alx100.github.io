const Gmap = function initMap() {

    let getMap = document.querySelector('#map');
    if(!getMap) return;
    let lat = getMap.dataset.lat;
    let lng = getMap.dataset.lng;
    let coordinates = {lat: +lat, lng: +lng};

    let map = new google.maps.Map(getMap, {
        disableDefaultUI: true,
        center: coordinates,
        zoom: 12,
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d7d8d0"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    },
                    {
                        "lightness": 10
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    },
                    {
                        "lightness": 60
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 60
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 60
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -10
                    },
                    {
                        "lightness": "41"
                    },
                    {
                        "color": "#c0c1bb"
                    }
                ]
            }
        ]
    });

    let image = {
        url: 'assets/images/g-marker.svg',
        scaledSize: new google.maps.Size(45, 60),
    };

    let marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'DSGN',
        optimized: false,
        icon: image
    });

    let contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">DSGN</h1>' +
        '<div id="bodyContent">' +
        '<p>90802 California</p>' +
        '<p>Long beach</p>' +
        '<p>PO Box 68789</p>' +
        '<p>300 East Ocean </p>' +
        '<p>Boulevard</p>' +
        '<p>+64 9 345 6758</p>' +
        '<p>nfo@dsgn-studio.com</p>' +
        '</div>' +
        '</div>';

    let infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 350
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
};

export default Gmap;