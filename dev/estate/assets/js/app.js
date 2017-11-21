(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _loader = require('./modules/loader');

var _loader2 = _interopRequireDefault(_loader);

var _tools = require('./modules/tools');

var _tools2 = _interopRequireDefault(_tools);

var _nav = require('./modules/nav');

var _nav2 = _interopRequireDefault(_nav);

var _homeScroll = require('./modules/homeScroll');

var _homeScroll2 = _interopRequireDefault(_homeScroll);

var _homeSlider = require('./modules/homeSlider');

var _homeSlider2 = _interopRequireDefault(_homeSlider);

var _map = require('./modules/map.js');

var _map2 = _interopRequireDefault(_map);

var _floorplan = require('./modules/floorplan.js');

var _floorplan2 = _interopRequireDefault(_floorplan);

var _unitSlider = require('./modules/unitSlider.js');

var _unitSlider2 = _interopRequireDefault(_unitSlider);

var _unitPopup = require('./modules/unitPopup.js');

var _unitPopup2 = _interopRequireDefault(_unitPopup);

var _discoverSlider = require('./modules/discoverSlider');

var _discoverSlider2 = _interopRequireDefault(_discoverSlider);

var _animations = require('./modules/animations');

var _animations2 = _interopRequireDefault(_animations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  window.initMap = _map2.default;

  // When DOM is ready
  $(function () {

    (0, _loader2.default)();
    (0, _nav2.default)();
    (0, _homeScroll2.default)();
    (0, _homeSlider2.default)();
    (0, _tools2.default)();
    (0, _floorplan2.default)();
    (0, _unitSlider2.default)();
    (0, _unitPopup2.default)();
    (0, _discoverSlider2.default)();
    (0, _animations2.default)();

    $(window).resize(function () {
      (0, _tools2.default)();
    });
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/animations":2,"./modules/discoverSlider":3,"./modules/floorplan.js":4,"./modules/homeScroll":5,"./modules/homeSlider":6,"./modules/loader":7,"./modules/map.js":8,"./modules/nav":9,"./modules/tools":10,"./modules/unitPopup.js":11,"./modules/unitSlider.js":12}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Animations = function Animations() {

  // new WOW().init();

  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    mobile: false,
    live: true,
    scrollContainer: null
  });
  wow.init();
};

exports.default = Animations;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DiscoverSlider = function DiscoverSlider() {

  if (matchMedia) {
    var screen = window.matchMedia("(max-width:860px)");
    screen.addListener(changes);
    changes(screen);
  }

  function changes(screen) {
    if (screen.matches) {
      $('.project-slider__list').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]

      });
    } else {
      try {
        $('.project-slider__list').slick('unslick');
      } catch (error) {}

      $('.item-content').matchHeight({
        byRow: false,
        property: 'min-height',
        target: null,
        remove: false
      });
    }
  }
};

exports.default = DiscoverSlider;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var FloorPlan = function FloorPlan() {

  $('.tabs').tabslet({
    active: 5,
    animation: true
  });

  var aptData = {
    fl0: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 101
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 102
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 103
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 104
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 105
      },
      5: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 106
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 107
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 108
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 109
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 110
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 111
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 112
      },
      12: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 113
      }
    },
    fl1: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 201
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 202
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 203
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 204
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 205
      },
      5: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 206
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 207
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 208
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 209
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 210
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 211
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 212
      },
      12: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 213
      }
    },
    fl2: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 301
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 302
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 303
      },
      3: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 304
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 305
      },
      5: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 306
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 307
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 308
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 309
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 310
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 311
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 312
      },
      12: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 313
      }
    },
    fl3: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 401
      },
      1: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 402
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 403
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 404
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 405
      },
      5: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 406
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 407
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 408
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 409
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 410
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 411
      },
      11: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 412
      },
      12: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 413
      }
    },
    fl4: {
      0: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 501
      },
      1: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 502
      },
      2: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 503
      },
      3: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 504
      },
      4: {
        anchor: 'unit.html',
        available: true,
        rooms: 4.5,
        number: 505
      },
      5: {
        anchor: 'unit.html',
        available: true,
        rooms: 5,
        number: 506
      },
      6: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 507
      },
      7: {
        anchor: 'unit.html',
        available: false,
        rooms: 4,
        number: 508
      },
      8: {
        anchor: 'unit.html',
        available: true,
        rooms: 4,
        number: 509
      },
      9: {
        anchor: 'unit.html',
        available: false,
        rooms: 5,
        number: 510
      },
      10: {
        anchor: 'unit.html',
        available: true,
        rooms: 3,
        number: 511
      },
      11: {
        anchor: 'unit.html',
        available: false,
        rooms: 4.5,
        number: 512
      },
      12: {
        anchor: 'unit.html',
        available: false,
        rooms: 3,
        number: 513
      }
    }
  };

  if (typeof aptData != 'undefined') {
    var searchProp = function searchProp(obj, prop, callback) {
      for (var key in obj) {
        if (key == prop) {
          callback(key, obj[key], obj);
        } else if (_typeof(obj[key]) == 'object') {
          searchProp(obj[key], prop, callback);
        }
      }
    };

    var floors = document.querySelectorAll('.floors');

    for (var j = 0; j < floors.length; j++) {
      var array = [],
          numbers = [],
          aviables = [],
          ancors = document.querySelectorAll('.floor' + j + ' .hover-areas a'),
          rooms = [];

      searchProp(aptData['fl' + j], 'anchor', function (key, val, obj) {
        array.push(val);
      });

      searchProp(aptData['fl' + j], 'number', function (key, val, obj) {
        numbers.push(val);
      });

      searchProp(aptData['fl' + j], 'available', function (key, val, obj) {
        aviables.push(val);
      });

      searchProp(aptData['fl' + j], 'rooms', function (key, val, obj) {
        rooms.push(val);
      });

      for (var i = 0; i < ancors.length; i++) {
        ancors[i].setAttribute('xlink:href', array[i]);
        $(ancors[i]).find('text').html(numbers[i]);
        if (aviables[i] === false) {
          $(ancors[i]).find('path').addClass('booked');
        } else if (aviables[i] === true) {
          $(ancors[i]).addClass('free-flat');
        }

        switch (rooms[i]) {
          case 3:
            $(ancors[i]).addClass('three');
            break;
          case 4:
            $(ancors[i]).addClass('four');
            break;
          case 4.5:
            $(ancors[i]).addClass('four-half');
            break;
          case 5:
            $(ancors[i]).addClass('five');
            break;
        }
      }
    }
  } else {
    return;
  }

  var filterItem = $('.filter .item'),
      filterClear = $('.filter .filter__all'),
      floorsWrap = $('.floors');

  filterItem.on('click', function () {
    var countRooms = $(this).data('rooms');

    filterItem.removeClass('filter__active');
    $(this).addClass('filter__active');

    floorsWrap.find('.free-flat').removeClass('show-free');
    floorsWrap.find('.free-flat.' + countRooms).addClass('show-free');
  });

  filterClear.on('click', function () {
    floorsWrap.find('.free-flat').removeClass('show-free');
    filterItem.removeClass('filter__active');
    $(this).addClass('filter__active');
  });

  $('.plan__list-item').on('click', function () {
    filterItem.removeClass('filter__active');
    floorsWrap.find('.free-flat').removeClass('show-free');
  });
};

exports.default = FloorPlan;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Scroll = function Scroll() {
  $(".scroll-btn").on("click", function () {
    $("html, body").animate({ scrollTop: $(".header").height() + 5 }, "slow");
  });
};

exports.default = Scroll;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HomeSlider = function HomeSlider() {
  $('.app-slider').slick({
    fade: true,
    dots: true,
    speed: 1000,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function customPaging(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class="slide-number">' + (i + 1) + '.</a>';
    }
  });
};

exports.default = HomeSlider;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Loader = function Loader() {
  var loader = $('#preloader');
  window.addEventListener('load', function () {
    $(loader).fadeOut('slow');
  });
};

exports.default = Loader;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Gmap = function Gmap() {

  var styles = [{
    "elementType": "geometry",
    "stylers": [{
      "color": "#f5f5f5"
    }]
  }, {
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#f5f5f5"
    }]
  }, {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#bdbdbd"
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
      "color": "#eeeeee"
    }]
  }, {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e5e5e5"
    }]
  }, {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#757575"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [{
      "color": "#dadada"
    }]
  }, {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#616161"
    }]
  }, {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }, {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{
      "color": "#e5e5e5"
    }]
  }, {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [{
      "color": "#eeeeee"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#c9c9c9"
    }]
  }, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#9e9e9e"
    }]
  }],
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
    scaledSize: new google.maps.Size(30, 40)
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

  var list = document.querySelector('.search-list');
  var listItems = document.querySelectorAll('.search-list__item');

  list.onclick = function (e) {
    var target = e.target.closest('li');
    var searchResult = target.dataset.search;

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
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove(className);
    }
  }

  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
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

exports.default = Gmap;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Nav = function Nav() {
  $('.nav-opener').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('nav-opened');
  });
};

exports.default = Nav;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Tools = function Tools() {

  $(function () {
    $('.app__links-title ').matchHeight();

    $('.item-content').matchHeight({
      byRow: false,
      property: 'min-height',
      target: null,
      remove: false
    });

    var hideChatOnScroll = {
      /**
      * Elements define
      */
      elementsInit: function elementsInit() {
        this.footer = document.querySelector(".footer");
        if (!this.footer) return;
        this.footerPosition = this.footer.offsetTop;
        this.body = document.body;
        this.windowHeight = window.innerHeight;
        this.documentHeight = document.documentElement.scrollHeight;
      },

      /**
       * Calculating sizes of window and page
       */
      calcSizes: function calcSizes() {
        var self = this;
        window.clearTimeout(timer);
        var timer = setTimeout(function () {
          self.footerPosition = self.footer.offsetTop;
          self.windowHeight = window.innerHeight;
          self.documentHeight = document.documentElement.scrollHeight;
        }, 400);
      },
      /**
      * Add or remove class on body
      */
      addRemoveClass: function addRemoveClass(flag) {
        if (flag) {
          this.body.classList.add("hide-btn");
        } else {
          this.body.classList.remove("hide-btn");
        }
      },
      /**
      * Check offset of page while scrolling
      */
      checkOffset: function checkOffset() {
        if (window.pageYOffset + this.windowHeight >= this.footerPosition) {
          this.addRemoveClass(true);
        } else {
          this.addRemoveClass(false);
        }
      },
      /**
      * Resize function
      */
      resize: function resize() {
        var self = this;

        window.addEventListener('resize', function () {
          self.calcSizes();
        });
      },

      /**
       * On scroll
       */
      scroll: function scroll() {
        var self = this;
        document.addEventListener("scroll", function () {
          self.checkOffset();
          self.calcSizes();
        });
      },

      /**
       * Init
       */
      init: function init() {
        this.elementsInit();
        this.scroll();
        this.resize();
      }
    };

    hideChatOnScroll.init();
  });
};

exports.default = Tools;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var UnitPopup = function UnitPopup() {
  $('.image-popup-link').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
};

exports.default = UnitPopup;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var UnitSlider = function UnitSlider() {
  $('.unit-slider').slick({
    fade: true,
    dots: true,
    arrows: false,
    accessibility: true
  });
  $('.unit-slider').show();
};

exports.default = UnitSlider;

},{}]},{},[1]);
