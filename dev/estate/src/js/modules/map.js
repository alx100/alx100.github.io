const Gmap = function () {

  let styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ],
    getMap = document.getElementById('map'),
    lat = getMap.dataset.lat,
    lng = getMap.dataset.lng,
    zoom = getMap.dataset.zoom,
    coordinates = { lat: +lat, lng: +lng },
    map = new google.maps.Map(getMap, {
      disableDefaultUI: true,
      styles: styles,
      center: coordinates,
      zoom: +zoom
    }),
    dot = {
      url: 'assets/images/dot.png'
    },
    image = {
      url: 'assets/images/icon-27.svg',
      scaledSize: new google.maps.Size(30, 40),
    },
    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      optimized: false,
      icon: image
    }),
    infowindow = new google.maps.InfoWindow(),
    service = new google.maps.places.PlacesService(map);

  service.nearbySearch({
    location: coordinates,
    radius: 5000,
    type: ['store']
  }, callback);


  let list = document.querySelector('.search-list');
  let listItems = document.querySelectorAll('.search-list__item');

  list.onclick = function (e) {
    let target = e.target.closest('li');
    let searchResult = target.dataset.search;


    if (target.classList.contains('active')) {
      return;
    } else {
      removeClass(listItems, 'active');
      target.classList.add('active');
    }

    map = new google.maps.Map(getMap, {
      disableDefaultUI: true,
      center: coordinates,
      styles: styles,
      zoom: +zoom
    });

    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      optimized: false,
      icon: image
    });

    service.nearbySearch({
      location: coordinates,
      radius: 5000,
      type: [searchResult]
    }, callback);
  };

  function removeClass(elements, className) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove(className);
    }
  }


  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      icon: dot
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
};

export default Gmap;