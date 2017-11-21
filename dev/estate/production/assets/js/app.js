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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxhbmltYXRpb25zLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcZGlzY292ZXJTbGlkZXIuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxmbG9vcnBsYW4uanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxob21lU2Nyb2xsLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcaG9tZVNsaWRlci5qcyIsInNyY1xcanNcXG1vZHVsZXNcXGxvYWRlci5qcyIsInNyY1xcanNcXG1vZHVsZXNcXG1hcC5qcyIsInNyY1xcanNcXG1vZHVsZXNcXG5hdi5qcyIsInNyY1xcanNcXG1vZHVsZXNcXHRvb2xzLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcdW5pdFBvcHVwLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcdW5pdFNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBS0EsQ0FBQyxVQUFDLENBQUQsRUFBTztBQUNOOztBQUNBLFNBQU8sT0FBUDs7QUFFQTtBQUNBLElBQUUsWUFBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVU7QUFDekI7QUFDSCxLQUZDO0FBS0QsR0FsQkQ7QUFvQkQsQ0F6QkQsRUF5QkcsTUF6QkgsRSxDQXBCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQSxJQUFNLGFBQWEsU0FBYixVQUFhLEdBQU07O0FBRXZCOztBQUVBLE1BQUksTUFBTSxJQUFJLEdBQUosQ0FDUjtBQUNFLGNBQWMsS0FEaEI7QUFFRSxrQkFBYyxVQUZoQjtBQUdFLFlB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QWIsVUFBYSxHQUFNO0FBQ3ZCLElBQUUsY0FBRixFQUFrQixLQUFsQixDQUF3QjtBQUN0QixVQUFNLElBRGdCO0FBRXRCLFVBQU0sSUFGZ0I7QUFHdEIsWUFBUSxLQUhjO0FBSXRCLG1CQUFlO0FBSk8sR0FBeEI7QUFNQSxJQUFFLGNBQUYsRUFBa0IsSUFBbEI7QUFDRCxDQVJEOztrQkFVZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxyXG4vL1xyXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXHJcbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxyXG5cclxuaW1wb3J0IExvYWRlciBmcm9tICcuL21vZHVsZXMvbG9hZGVyJztcclxuaW1wb3J0IFRvb2xzIGZyb20gJy4vbW9kdWxlcy90b29scyc7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi9tb2R1bGVzL25hdic7XHJcbmltcG9ydCBIb21lU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9ob21lU2Nyb2xsJztcclxuaW1wb3J0IEhvbWVTbGlkZXIgZnJvbSAnLi9tb2R1bGVzL2hvbWVTbGlkZXInO1xyXG5pbXBvcnQgR21hcCBmcm9tICcuL21vZHVsZXMvbWFwLmpzJztcclxuaW1wb3J0IEZsb29yUGxhbiBmcm9tICcuL21vZHVsZXMvZmxvb3JwbGFuLmpzJztcclxuaW1wb3J0IFVuaXRTbGlkZXIgZnJvbSAnLi9tb2R1bGVzL3VuaXRTbGlkZXIuanMnO1xyXG5pbXBvcnQgVW5pdFBvcHVwIGZyb20gJy4vbW9kdWxlcy91bml0UG9wdXAuanMnO1xyXG5pbXBvcnQgRGlzY292ZXJTbGlkZXIgZnJvbSAnLi9tb2R1bGVzL2Rpc2NvdmVyU2xpZGVyJztcclxuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSAnLi9tb2R1bGVzL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcblxyXG5cclxuKCgkKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHdpbmRvdy5pbml0TWFwID0gR21hcDtcclxuXHJcbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcclxuICAkKCgpID0+IHtcclxuICAgIFxyXG4gICAgTG9hZGVyKCk7XHJcbiAgICBOYXYoKTtcclxuICAgIEhvbWVTY3JvbGwoKTtcclxuICAgIEhvbWVTbGlkZXIoKTtcclxuICAgIFRvb2xzKCk7XHJcbiAgICBGbG9vclBsYW4oKTtcclxuICAgIFVuaXRTbGlkZXIoKTtcclxuICAgIFVuaXRQb3B1cCgpO1xyXG4gICAgRGlzY292ZXJTbGlkZXIoKTtcclxuICAgIEFuaW1hdGlvbnMoKTtcclxuICAgIFxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICBUb29scygpO1xyXG4gIH0pO1xyXG5cclxuICAgXHJcbiAgfSk7XHJcblxyXG59KShqUXVlcnkpOyIsImNvbnN0IEFuaW1hdGlvbnMgPSAoKSA9PiB7XHJcbiAgIFxyXG4gIC8vIG5ldyBXT1coKS5pbml0KCk7XHJcblxyXG4gIHZhciB3b3cgPSBuZXcgV09XKFxyXG4gICAge1xyXG4gICAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIFxyXG4gICAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIFxyXG4gICAgICBtb2JpbGU6ICAgICAgIGZhbHNlLCAgICAgIFxyXG4gICAgICBsaXZlOiAgICAgICAgIHRydWUsICAgICAgXHJcbiAgICAgIHNjcm9sbENvbnRhaW5lcjogbnVsbCBcclxuICAgIH1cclxuICApO1xyXG4gIHdvdy5pbml0KCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uczsiLCJjb25zdCBEaXNjb3ZlclNsaWRlciA9ICgpID0+IHtcclxuXHJcbiAgaWYgKG1hdGNoTWVkaWEpIHtcclxuICAgIHZhciBzY3JlZW4gPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6ODYwcHgpXCIpO1xyXG4gICAgc2NyZWVuLmFkZExpc3RlbmVyKGNoYW5nZXMpO1xyXG4gICAgY2hhbmdlcyhzY3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hhbmdlcyhzY3JlZW4pIHtcclxuICAgIGlmIChzY3JlZW4ubWF0Y2hlcykge1xyXG4gICAgICAkKCcucHJvamVjdC1zbGlkZXJfX2xpc3QnKS5zbGljayh7XHJcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgc3BlZWQ6IDgwMCxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgJCgnLnByb2plY3Qtc2xpZGVyX19saXN0Jykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgfVxyXG5cclxuICAgICAgJCgnLml0ZW0tY29udGVudCcpLm1hdGNoSGVpZ2h0KHtcclxuICAgICAgICBieVJvdzogZmFsc2UsXHJcbiAgICAgICAgcHJvcGVydHk6ICdtaW4taGVpZ2h0JyxcclxuICAgICAgICB0YXJnZXQ6IG51bGwsXHJcbiAgICAgICAgcmVtb3ZlOiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzY292ZXJTbGlkZXI7IiwiY29uc3QgRmxvb3JQbGFuID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgJCgnLnRhYnMnKS50YWJzbGV0KHtcclxuICAgIGFjdGl2ZTogNSxcclxuICAgIGFuaW1hdGlvbjogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuICBcclxuXHJcbiAgdmFyIGFwdERhdGEgPSB7XHJcbiAgICBmbDA6IHtcclxuICAgICAgMDoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogMTAxXHJcbiAgICAgIH0sXHJcbiAgICAgIDE6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiAxMDJcclxuICAgICAgfSxcclxuICAgICAgMjoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA0LFxyXG4gICAgICAgIG51bWJlcjogMTAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDM6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDUsXHJcbiAgICAgICAgbnVtYmVyOiAxMDRcclxuICAgICAgfSxcclxuICAgICAgNDoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA0LjUsXHJcbiAgICAgICAgbnVtYmVyOiAxMDVcclxuICAgICAgfSxcclxuICAgICAgNToge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogMyxcclxuICAgICAgICBudW1iZXI6IDEwNlxyXG4gICAgICB9LFxyXG4gICAgICA2OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDQsXHJcbiAgICAgICAgbnVtYmVyOiAxMDdcclxuICAgICAgfSxcclxuICAgICAgNzoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNCxcclxuICAgICAgICBudW1iZXI6IDEwOFxyXG4gICAgICB9LFxyXG4gICAgICA4OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDUsXHJcbiAgICAgICAgbnVtYmVyOiAxMDlcclxuICAgICAgfSxcclxuICAgICAgOToge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogMyxcclxuICAgICAgICBudW1iZXI6IDExMFxyXG4gICAgICB9LFxyXG4gICAgICAxMDoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA0LjUsXHJcbiAgICAgICAgbnVtYmVyOiAxMTFcclxuICAgICAgfSxcclxuICAgICAgMTE6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiAxMTJcclxuICAgICAgfSxcclxuICAgICAgMTI6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogNCxcclxuICAgICAgICBudW1iZXI6IDExM1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZmwxOiB7XHJcbiAgICAgIDA6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogNCxcclxuICAgICAgICBudW1iZXI6IDIwMVxyXG4gICAgICB9LFxyXG4gICAgICAxOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogMjAyXHJcbiAgICAgIH0sXHJcbiAgICAgIDI6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogNC41LFxyXG4gICAgICAgIG51bWJlcjogMjAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDM6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDUsXHJcbiAgICAgICAgbnVtYmVyOiAyMDRcclxuICAgICAgfSxcclxuICAgICAgNDoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogMjA1XHJcbiAgICAgIH0sXHJcbiAgICAgIDU6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiAyMDZcclxuICAgICAgfSxcclxuICAgICAgNjoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA1LFxyXG4gICAgICAgIG51bWJlcjogMjA3XHJcbiAgICAgIH0sXHJcbiAgICAgIDc6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDQsXHJcbiAgICAgICAgbnVtYmVyOiAyMDhcclxuICAgICAgfSxcclxuICAgICAgODoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogMjA5XHJcbiAgICAgIH0sXHJcbiAgICAgIDk6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDUsXHJcbiAgICAgICAgbnVtYmVyOiAyMTBcclxuICAgICAgfSxcclxuICAgICAgMTA6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogNC41LFxyXG4gICAgICAgIG51bWJlcjogMjExXHJcbiAgICAgIH0sXHJcbiAgICAgIDExOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJvb21zOiA0LFxyXG4gICAgICAgIG51bWJlcjogMjEyXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiAyMTNcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZsMjoge1xyXG4gICAgICAwOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiAzMDFcclxuICAgICAgfSxcclxuICAgICAgMToge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNSxcclxuICAgICAgICBudW1iZXI6IDMwMlxyXG4gICAgICB9LFxyXG4gICAgICAyOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDQsXHJcbiAgICAgICAgbnVtYmVyOiAzMDNcclxuICAgICAgfSxcclxuICAgICAgMzoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA0LjUsXHJcbiAgICAgICAgbnVtYmVyOiAzMDRcclxuICAgICAgfSxcclxuICAgICAgNDoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA1LFxyXG4gICAgICAgIG51bWJlcjogMzA1XHJcbiAgICAgIH0sXHJcbiAgICAgIDU6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogNSxcclxuICAgICAgICBudW1iZXI6IDMwNlxyXG4gICAgICB9LFxyXG4gICAgICA2OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiAzMDdcclxuICAgICAgfSxcclxuICAgICAgNzoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNCxcclxuICAgICAgICBudW1iZXI6IDMwOFxyXG4gICAgICB9LFxyXG4gICAgICA4OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDQsXHJcbiAgICAgICAgbnVtYmVyOiAzMDlcclxuICAgICAgfSxcclxuICAgICAgOToge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNSxcclxuICAgICAgICBudW1iZXI6IDMxMFxyXG4gICAgICB9LFxyXG4gICAgICAxMDoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogMzExXHJcbiAgICAgIH0sXHJcbiAgICAgIDExOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJvb21zOiA0LjUsXHJcbiAgICAgICAgbnVtYmVyOiAzMTJcclxuICAgICAgfSxcclxuICAgICAgMTI6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiAzMTNcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZsMzoge1xyXG4gICAgICAwOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiA0MDFcclxuICAgICAgfSxcclxuICAgICAgMToge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNSxcclxuICAgICAgICBudW1iZXI6IDQwMlxyXG4gICAgICB9LFxyXG4gICAgICAyOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDQsXHJcbiAgICAgICAgbnVtYmVyOiA0MDNcclxuICAgICAgfSxcclxuICAgICAgMzoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNC41LFxyXG4gICAgICAgIG51bWJlcjogNDA0XHJcbiAgICAgIH0sXHJcbiAgICAgIDQ6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogNC41LFxyXG4gICAgICAgIG51bWJlcjogNDA1XHJcbiAgICAgIH0sXHJcbiAgICAgIDU6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogNSxcclxuICAgICAgICBudW1iZXI6IDQwNlxyXG4gICAgICB9LFxyXG4gICAgICA2OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDMsXHJcbiAgICAgICAgbnVtYmVyOiA0MDdcclxuICAgICAgfSxcclxuICAgICAgNzoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNCxcclxuICAgICAgICBudW1iZXI6IDQwOFxyXG4gICAgICB9LFxyXG4gICAgICA4OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDQsXHJcbiAgICAgICAgbnVtYmVyOiA0MDlcclxuICAgICAgfSxcclxuICAgICAgOToge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNCxcclxuICAgICAgICBudW1iZXI6IDQxMFxyXG4gICAgICB9LFxyXG4gICAgICAxMDoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogNDExXHJcbiAgICAgIH0sXHJcbiAgICAgIDExOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDQuNSxcclxuICAgICAgICBudW1iZXI6IDQxMlxyXG4gICAgICB9LFxyXG4gICAgICAxMjoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogMyxcclxuICAgICAgICBudW1iZXI6IDQxM1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZmw0OiB7XHJcbiAgICAgIDA6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogMyxcclxuICAgICAgICBudW1iZXI6IDUwMVxyXG4gICAgICB9LFxyXG4gICAgICAxOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDUsXHJcbiAgICAgICAgbnVtYmVyOiA1MDJcclxuICAgICAgfSxcclxuICAgICAgMjoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA0LFxyXG4gICAgICAgIG51bWJlcjogNTAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDM6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDQuNSxcclxuICAgICAgICBudW1iZXI6IDUwNFxyXG4gICAgICB9LFxyXG4gICAgICA0OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDQuNSxcclxuICAgICAgICBudW1iZXI6IDUwNVxyXG4gICAgICB9LFxyXG4gICAgICA1OiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgcm9vbXM6IDUsXHJcbiAgICAgICAgbnVtYmVyOiA1MDZcclxuICAgICAgfSxcclxuICAgICAgNjoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogNTA3XHJcbiAgICAgIH0sXHJcbiAgICAgIDc6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDQsXHJcbiAgICAgICAgbnVtYmVyOiA1MDhcclxuICAgICAgfSxcclxuICAgICAgODoge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHJvb21zOiA0LFxyXG4gICAgICAgIG51bWJlcjogNTA5XHJcbiAgICAgIH0sXHJcbiAgICAgIDk6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgcm9vbXM6IDUsXHJcbiAgICAgICAgbnVtYmVyOiA1MTBcclxuICAgICAgfSxcclxuICAgICAgMTA6IHtcclxuICAgICAgICBhbmNob3I6ICd1bml0Lmh0bWwnLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICByb29tczogMyxcclxuICAgICAgICBudW1iZXI6IDUxMVxyXG4gICAgICB9LFxyXG4gICAgICAxMToge1xyXG4gICAgICAgIGFuY2hvcjogJ3VuaXQuaHRtbCcsXHJcbiAgICAgICAgYXZhaWxhYmxlOiBmYWxzZSxcclxuICAgICAgICByb29tczogNC41LFxyXG4gICAgICAgIG51bWJlcjogNTEyXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyOiB7XHJcbiAgICAgICAgYW5jaG9yOiAndW5pdC5odG1sJyxcclxuICAgICAgICBhdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHJvb21zOiAzLFxyXG4gICAgICAgIG51bWJlcjogNTEzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAodHlwZW9mIGFwdERhdGEgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICB2YXIgZmxvb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb29ycycpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlYXJjaFByb3Aob2JqLCBwcm9wLCBjYWxsYmFjaykge1xyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKGtleSA9PSBwcm9wKSB7XHJcbiAgICAgICAgICBjYWxsYmFjayhrZXksIG9ialtrZXldLCBvYmopO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrZXldID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICBzZWFyY2hQcm9wKG9ialtrZXldLCBwcm9wLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBmbG9vcnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgdmFyIGFycmF5ID0gW10sXHJcbiAgICAgICAgbnVtYmVycyA9IFtdLFxyXG4gICAgICAgIGF2aWFibGVzID0gW10sXHJcbiAgICAgICAgYW5jb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsb29yJyArIGogKyAnIC5ob3Zlci1hcmVhcyBhJyksXHJcbiAgICAgICAgcm9vbXMgPSBbXTtcclxuXHJcbiAgICAgIHNlYXJjaFByb3AoYXB0RGF0YVsnZmwnICsgal0sICdhbmNob3InLCBmdW5jdGlvbiAoa2V5LCB2YWwsIG9iaikge1xyXG4gICAgICAgIGFycmF5LnB1c2godmFsKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWFyY2hQcm9wKGFwdERhdGFbJ2ZsJyArIGpdLCAnbnVtYmVyJywgZnVuY3Rpb24gKGtleSwgdmFsLCBvYmopIHtcclxuICAgICAgICBudW1iZXJzLnB1c2godmFsKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBzZWFyY2hQcm9wKGFwdERhdGFbJ2ZsJyArIGpdLCAnYXZhaWxhYmxlJywgZnVuY3Rpb24gKGtleSwgdmFsLCBvYmopIHtcclxuICAgICAgICBhdmlhYmxlcy5wdXNoKHZhbCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2VhcmNoUHJvcChhcHREYXRhWydmbCcgKyBqXSwgJ3Jvb21zJywgZnVuY3Rpb24gKGtleSwgdmFsLCBvYmopIHtcclxuICAgICAgICByb29tcy5wdXNoKHZhbCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmNvcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhbmNvcnNbaV0uc2V0QXR0cmlidXRlKCd4bGluazpocmVmJywgYXJyYXlbaV0pO1xyXG4gICAgICAgICQoYW5jb3JzW2ldKS5maW5kKCd0ZXh0JykuaHRtbChudW1iZXJzW2ldKTtcclxuICAgICAgICBpZiAoYXZpYWJsZXNbaV0gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAkKGFuY29yc1tpXSkuZmluZCgncGF0aCcpLmFkZENsYXNzKCdib29rZWQnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGF2aWFibGVzW2ldID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAkKGFuY29yc1tpXSkuYWRkQ2xhc3MoJ2ZyZWUtZmxhdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChyb29tc1tpXSkge1xyXG4gICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAkKGFuY29yc1tpXSkuYWRkQ2xhc3MoJ3RocmVlJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAkKGFuY29yc1tpXSkuYWRkQ2xhc3MoJ2ZvdXInKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDQuNTpcclxuICAgICAgICAgICAgJChhbmNvcnNbaV0pLmFkZENsYXNzKCdmb3VyLWhhbGYnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICQoYW5jb3JzW2ldKS5hZGRDbGFzcygnZml2ZScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIGZpbHRlckl0ZW0gPSAkKCcuZmlsdGVyIC5pdGVtJyksXHJcbiAgICBmaWx0ZXJDbGVhciA9ICQoJy5maWx0ZXIgLmZpbHRlcl9fYWxsJyksXHJcbiAgICBmbG9vcnNXcmFwID0gJCgnLmZsb29ycycpO1xyXG5cclxuICBmaWx0ZXJJdGVtLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb3VudFJvb21zID0gJCh0aGlzKS5kYXRhKCdyb29tcycpO1xyXG5cclxuICAgIGZpbHRlckl0ZW0ucmVtb3ZlQ2xhc3MoJ2ZpbHRlcl9fYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLmFkZENsYXNzKCdmaWx0ZXJfX2FjdGl2ZScpO1xyXG5cclxuICAgIGZsb29yc1dyYXAuZmluZCgnLmZyZWUtZmxhdCcpLnJlbW92ZUNsYXNzKCdzaG93LWZyZWUnKTtcclxuICAgIGZsb29yc1dyYXAuZmluZCgnLmZyZWUtZmxhdC4nICsgY291bnRSb29tcykuYWRkQ2xhc3MoJ3Nob3ctZnJlZScpO1xyXG4gIH0pO1xyXG5cclxuICBmaWx0ZXJDbGVhci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmbG9vcnNXcmFwLmZpbmQoJy5mcmVlLWZsYXQnKS5yZW1vdmVDbGFzcygnc2hvdy1mcmVlJyk7XHJcbiAgICBmaWx0ZXJJdGVtLnJlbW92ZUNsYXNzKCdmaWx0ZXJfX2FjdGl2ZScpO1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnZmlsdGVyX19hY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wbGFuX19saXN0LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgZmlsdGVySXRlbS5yZW1vdmVDbGFzcygnZmlsdGVyX19hY3RpdmUnKTtcclxuICAgIGZsb29yc1dyYXAuZmluZCgnLmZyZWUtZmxhdCcpLnJlbW92ZUNsYXNzKCdzaG93LWZyZWUnKTtcclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGbG9vclBsYW47IiwiY29uc3QgU2Nyb2xsID0gKCkgPT4ge1xyXG4gICQoXCIuc2Nyb2xsLWJ0blwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoXCIuaGVhZGVyXCIpLmhlaWdodCgpICsgNSB9LCBcInNsb3dcIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGw7IiwiY29uc3QgSG9tZVNsaWRlciA9ICgpID0+IHtcclxuICAkKCcuYXBwLXNsaWRlcicpLnNsaWNrKHtcclxuICAgIGZhZGU6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDEwMDAsXHJcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICBjdXN0b21QYWdpbmcgOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcclxuICAgICAgbGV0IHRodW1iID0gJChzbGlkZXIuJHNsaWRlc1tpXSkuZGF0YSgpO1xyXG4gICAgICByZXR1cm4gJzxhIGNsYXNzPVwic2xpZGUtbnVtYmVyXCI+JysoaSsxKSsnLjwvYT4nO1xyXG4gICAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lU2xpZGVyOyIsImNvbnN0IExvYWRlciA9ICgpID0+IHtcclxuICBsZXQgbG9hZGVyID0gJCgnI3ByZWxvYWRlcicpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKGxvYWRlcikuZmFkZU91dCgnc2xvdycpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsImNvbnN0IEdtYXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGxldCBzdHlsZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjNjE2MTYxXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWxcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2JkYmRiZFwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjZWVlZWVlXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNlNWU1ZTVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM5ZTllOWVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjZGFkYWRhXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzYxNjE2MVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjOWU5ZTllXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNlNWU1ZTVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQuc3RhdGlvblwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2VlZWVlZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNjOWM5YzlcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM5ZTllOWVcIlxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgICBnZXRNYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXHJcbiAgICBsYXQgPSBnZXRNYXAuZGF0YXNldC5sYXQsXHJcbiAgICBsbmcgPSBnZXRNYXAuZGF0YXNldC5sbmcsXHJcbiAgICB6b29tID0gZ2V0TWFwLmRhdGFzZXQuem9vbSxcclxuICAgIGNvb3JkaW5hdGVzID0geyBsYXQ6ICtsYXQsIGxuZzogK2xuZyB9LFxyXG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChnZXRNYXAsIHtcclxuICAgICAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICAgICAgc3R5bGVzOiBzdHlsZXMsXHJcbiAgICAgIGNlbnRlcjogY29vcmRpbmF0ZXMsXHJcbiAgICAgIHpvb206ICt6b29tXHJcbiAgICB9KSxcclxuICAgIGRvdCA9IHtcclxuICAgICAgdXJsOiAnYXNzZXRzL2ltYWdlcy9kb3QucG5nJ1xyXG4gICAgfSxcclxuICAgIGltYWdlID0ge1xyXG4gICAgICB1cmw6ICdhc3NldHMvaW1hZ2VzL2ljb24tMjcuc3ZnJyxcclxuICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoMzAsIDQwKSxcclxuICAgIH0sXHJcbiAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IGNvb3JkaW5hdGVzLFxyXG4gICAgICBtYXA6IG1hcCxcclxuICAgICAgb3B0aW1pemVkOiBmYWxzZSxcclxuICAgICAgaWNvbjogaW1hZ2VcclxuICAgIH0pLFxyXG4gICAgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KCksXHJcbiAgICBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKG1hcCk7XHJcblxyXG4gIHNlcnZpY2UubmVhcmJ5U2VhcmNoKHtcclxuICAgIGxvY2F0aW9uOiBjb29yZGluYXRlcyxcclxuICAgIHJhZGl1czogNTAwMCxcclxuICAgIHR5cGU6IFsnc3RvcmUnXVxyXG4gIH0sIGNhbGxiYWNrKTtcclxuXHJcblxyXG4gIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1saXN0Jyk7XHJcbiAgbGV0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtbGlzdF9faXRlbScpO1xyXG5cclxuICBsaXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICBsZXQgc2VhcmNoUmVzdWx0ID0gdGFyZ2V0LmRhdGFzZXQuc2VhcmNoO1xyXG5cclxuXHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVtb3ZlQ2xhc3MobGlzdEl0ZW1zLCAnYWN0aXZlJyk7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGdldE1hcCwge1xyXG4gICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICBjZW50ZXI6IGNvb3JkaW5hdGVzLFxyXG4gICAgICBzdHlsZXM6IHN0eWxlcyxcclxuICAgICAgem9vbTogK3pvb21cclxuICAgIH0pO1xyXG5cclxuICAgIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXMsXHJcbiAgICAgIG1hcDogbWFwLFxyXG4gICAgICBvcHRpbWl6ZWQ6IGZhbHNlLFxyXG4gICAgICBpY29uOiBpbWFnZVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VydmljZS5uZWFyYnlTZWFyY2goe1xyXG4gICAgICBsb2NhdGlvbjogY29vcmRpbmF0ZXMsXHJcbiAgICAgIHJhZGl1czogNTAwMCxcclxuICAgICAgdHlwZTogW3NlYXJjaFJlc3VsdF1cclxuICAgIH0sIGNhbGxiYWNrKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtZW50cywgY2xhc3NOYW1lKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGVsZW1lbnRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBjYWxsYmFjayhyZXN1bHRzLCBzdGF0dXMpIHtcclxuICAgIGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNyZWF0ZU1hcmtlcihyZXN1bHRzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlTWFya2VyKHBsYWNlKSB7XHJcbiAgICBsZXQgcGxhY2VMb2MgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbjtcclxuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICAgIHBvc2l0aW9uOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbixcclxuICAgICAgaWNvbjogZG90XHJcbiAgICB9KTtcclxuXHJcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5mb3dpbmRvdy5zZXRDb250ZW50KHBsYWNlLm5hbWUpO1xyXG4gICAgICBpbmZvd2luZG93Lm9wZW4obWFwLCB0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdtYXA7IiwiY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gICQoJy5uYXYtb3BlbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbmF2LW9wZW5lZCcpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsImNvbnN0IFRvb2xzID0gKCkgPT4ge1xyXG5cclxuICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5hcHBfX2xpbmtzLXRpdGxlICcpLm1hdGNoSGVpZ2h0KCk7XHJcblxyXG4gICAgJCgnLml0ZW0tY29udGVudCcpLm1hdGNoSGVpZ2h0KHtcclxuICAgICAgYnlSb3c6IGZhbHNlLFxyXG4gICAgICBwcm9wZXJ0eTogJ21pbi1oZWlnaHQnLFxyXG4gICAgICB0YXJnZXQ6IG51bGwsXHJcbiAgICAgIHJlbW92ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBoaWRlQ2hhdE9uU2Nyb2xsID0ge1xyXG4gICAgICAvKipcclxuICAgICAgKiBFbGVtZW50cyBkZWZpbmVcclxuICAgICAgKi9cclxuICAgICAgZWxlbWVudHNJbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcclxuICAgICAgICBpZiAoIXRoaXMuZm9vdGVyKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5mb290ZXJQb3NpdGlvbiA9IHRoaXMuZm9vdGVyLm9mZnNldFRvcDtcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIENhbGN1bGF0aW5nIHNpemVzIG9mIHdpbmRvdyBhbmQgcGFnZVxyXG4gICAgICAgKi9cclxuICAgICAgY2FsY1NpemVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHZhciB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi5mb290ZXJQb3NpdGlvbiA9IHNlbGYuZm9vdGVyLm9mZnNldFRvcDtcclxuICAgICAgICAgIHNlbGYud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgc2VsZi5kb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgfSwgNDAwKTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIEFkZCBvciByZW1vdmUgY2xhc3Mgb24gYm9keVxyXG4gICAgICAqL1xyXG4gICAgICBhZGRSZW1vdmVDbGFzczogZnVuY3Rpb24gKGZsYWcpIHtcclxuICAgICAgICBpZiAoZmxhZykge1xyXG4gICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoaWRlLWJ0blwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtYnRuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICogQ2hlY2sgb2Zmc2V0IG9mIHBhZ2Ugd2hpbGUgc2Nyb2xsaW5nXHJcbiAgICAgICovXHJcbiAgICAgIGNoZWNrT2Zmc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIHRoaXMud2luZG93SGVpZ2h0ID49IHRoaXMuZm9vdGVyUG9zaXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuYWRkUmVtb3ZlQ2xhc3ModHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5hZGRSZW1vdmVDbGFzcyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvKipcclxuICAgICAgKiBSZXNpemUgZnVuY3Rpb25cclxuICAgICAgKi9cclxuICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2VsZi5jYWxjU2l6ZXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBPbiBzY3JvbGxcclxuICAgICAgICovXHJcbiAgICAgIHNjcm9sbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHNlbGYuY2hlY2tPZmZzZXQoKTtcclxuICAgICAgICAgIHNlbGYuY2FsY1NpemVzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogSW5pdFxyXG4gICAgICAgKi9cclxuICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHNJbml0KCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGhpZGVDaGF0T25TY3JvbGwuaW5pdCgpO1xyXG5cclxuICB9KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb29sczsiLCJjb25zdCBVbml0UG9wdXAgPSAoKSA9PiB7XHJcbiAgJCgnLmltYWdlLXBvcHVwLWxpbmsnKS5tYWduaWZpY1BvcHVwKHtcclxuICB0eXBlOiAnaW1hZ2UnLFxyXG4gIHJlbW92YWxEZWxheTogMzAwLFxyXG4gIG1haW5DbGFzczogJ21mcC1mYWRlJ1xyXG59KTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbml0UG9wdXA7IiwiY29uc3QgVW5pdFNsaWRlciA9ICgpID0+IHtcclxuICAkKCcudW5pdC1zbGlkZXInKS5zbGljayh7XHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlXHJcbiAgfSk7XHJcbiAgJCgnLnVuaXQtc2xpZGVyJykuc2hvdygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVW5pdFNsaWRlcjsiXX0=
