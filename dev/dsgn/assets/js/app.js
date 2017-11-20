(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _nav = require('./modules/nav');

var _nav2 = _interopRequireDefault(_nav);

var _grid = require('./modules/grid');

var _grid2 = _interopRequireDefault(_grid);

var _popup = require('./modules/popup');

var _popup2 = _interopRequireDefault(_popup);

var _map = require('./modules/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
    'use strict';

    // When DOM is ready

    $(function () {

        (0, _nav2.default)();
        (0, _grid2.default)();
        (0, _popup2.default)();
        (0, _map2.default)();
    });
})(jQuery);

},{"./modules/grid":2,"./modules/map":3,"./modules/nav":4,"./modules/popup":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Grid = function Grid() {

  var $grid = $('.grid').packery({
    itemSelector: '.grid-item'
  });

  $grid.imagesLoaded().progress(function () {
    $grid.packery();
  });
};

exports.default = Grid;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Gmap = function initMap() {

    var getMap = document.querySelector('#map');
    if (!getMap) return;
    var lat = getMap.dataset.lat;
    var lng = getMap.dataset.lng;
    var coordinates = { lat: +lat, lng: +lng };

    var map = new google.maps.Map(getMap, {
        disableDefaultUI: true,
        center: coordinates,
        zoom: 12,
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -100
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ff0000"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#d7d8d0"
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }, {
                "lightness": 10
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }, {
                "lightness": 60
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": -100
            }, {
                "lightness": 60
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "poi.government",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -100
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }, {
                "saturation": -100
            }, {
                "lightness": 60
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -10
            }, {
                "lightness": "41"
            }, {
                "color": "#c0c1bb"
            }]
        }]
    });

    var image = {
        url: 'assets/images/g-marker.svg',
        scaledSize: new google.maps.Size(45, 60)
    };

    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'DSGN',
        optimized: false,
        icon: image
    });

    var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">DSGN</h1>' + '<div id="bodyContent">' + '<p>90802 California</p>' + '<p>Long beach</p>' + '<p>PO Box 68789</p>' + '<p>300 East Ocean </p>' + '<p>Boulevard</p>' + '<p>+64 9 345 6758</p>' + '<p>nfo@dsgn-studio.com</p>' + '</div>' + '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 350
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
};

exports.default = Gmap;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Nav = function Nav() {
  var $hamburger = $(".hamburger");
  var $nav = $(".menu-nav");
  $hamburger.on("click", function () {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("nav-opened");
  });
};

exports.default = Nav;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Popup = function Popup() {

    $('.open-popup').magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        fixedContentPos: false,
        fixedBgPos: true,
        midClick: true,
        overflowY: 'auto',
        preloader: false,
        removalDelay: 300,
        mainClass: 'mfp-fade',
        callbacks: {
            open: function open() {
                $('.popup__slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    speed: 500,
                    asNavFor: '.popup__slider-nav',
                    responsive: [{
                        breakpoint: 650,
                        settings: {
                            arrows: false,
                            dots: true,
                            speed: 1000,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
                $('.popup__slider-nav').slick({
                    prevArrow: '<i class="slider-nav__arrow left icon-slide-left"></i>',
                    nextArrow: '<i class="slider-nav__arrow icon-slide-right"></i>',
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500,
                    arrows: true,
                    asNavFor: '.popup__slider',
                    dots: false,
                    centerMode: false,
                    focusOnSelect: true
                });
            }
        }
    });
};

exports.default = Popup;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxncmlkLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcbWFwLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcbmF2LmpzIiwic3JjXFxqc1xcbW9kdWxlc1xccG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxDQUFDLFVBQUMsQ0FBRCxFQUFPO0FBQ0o7O0FBRUE7O0FBQ0EsTUFBRSxZQUFNOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBRUgsS0FQRDtBQVNILENBYkQsRUFhRyxNQWJIOzs7Ozs7OztBQ1ZBLElBQU0sT0FBTyxTQUFQLElBQU8sR0FBTTs7QUFFakIsTUFBSSxRQUFRLEVBQUUsT0FBRixFQUFXLE9BQVgsQ0FBbUI7QUFDN0Isa0JBQWM7QUFEZSxHQUFuQixDQUFaOztBQUlBLFFBQU0sWUFBTixHQUFxQixRQUFyQixDQUErQixZQUFXO0FBQ3hDLFVBQU0sT0FBTjtBQUNELEdBRkQ7QUFJRCxDQVZEOztrQkFZZSxJOzs7Ozs7OztBQ1pmLElBQU0sT0FBTyxTQUFTLE9BQVQsR0FBbUI7O0FBRTVCLFFBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLFFBQUcsQ0FBQyxNQUFKLEVBQVk7QUFDWixRQUFJLE1BQU0sT0FBTyxPQUFQLENBQWUsR0FBekI7QUFDQSxRQUFJLE1BQU0sT0FBTyxPQUFQLENBQWUsR0FBekI7QUFDQSxRQUFJLGNBQWMsRUFBQyxLQUFLLENBQUMsR0FBUCxFQUFZLEtBQUssQ0FBQyxHQUFsQixFQUFsQjs7QUFFQSxRQUFJLE1BQU0sSUFBSSxPQUFPLElBQVAsQ0FBWSxHQUFoQixDQUFvQixNQUFwQixFQUE0QjtBQUNsQywwQkFBa0IsSUFEZ0I7QUFFbEMsZ0JBQVEsV0FGMEI7QUFHbEMsY0FBTSxFQUg0QjtBQUlsQyxnQkFBUSxDQUNKO0FBQ0ksMkJBQWUsS0FEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPO0FBSGYsU0FESSxFQVVKO0FBQ0ksMkJBQWUsZ0JBRG5CO0FBRUksMkJBQWUsS0FGbkI7QUFHSSx1QkFBVyxDQUNQO0FBQ0ksOEJBQWM7QUFEbEIsYUFETyxFQUlQO0FBQ0ksOEJBQWMsQ0FBQztBQURuQixhQUpPLEVBT1A7QUFDSSw2QkFBYTtBQURqQixhQVBPO0FBSGYsU0FWSSxFQXlCSjtBQUNJLDJCQUFlLGdCQURuQjtBQUVJLDJCQUFlLGVBRm5CO0FBR0ksdUJBQVcsQ0FDUDtBQUNJLDhCQUFjO0FBRGxCLGFBRE87QUFIZixTQXpCSSxFQWtDSjtBQUNJLDJCQUFlLHlCQURuQjtBQUVJLDJCQUFlLGVBRm5CO0FBR0ksdUJBQVcsQ0FDUDtBQUNJLHlCQUFTO0FBRGIsYUFETztBQUhmLFNBbENJLEVBMkNKO0FBQ0ksMkJBQWUsV0FEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPO0FBSGYsU0EzQ0ksRUFvREo7QUFDSSwyQkFBZSxXQURuQjtBQUVJLDJCQUFlLGVBRm5CO0FBR0ksdUJBQVcsQ0FDUDtBQUNJLHlCQUFTO0FBRGIsYUFETztBQUhmLFNBcERJLEVBNkRKO0FBQ0ksMkJBQWUsb0JBRG5CO0FBRUksMkJBQWUsS0FGbkI7QUFHSSx1QkFBVyxDQUNQO0FBQ0ksOEJBQWM7QUFEbEIsYUFETyxFQUlQO0FBQ0ksOEJBQWMsQ0FBQztBQURuQixhQUpPLEVBT1A7QUFDSSw2QkFBYTtBQURqQixhQVBPO0FBSGYsU0E3REksRUE0RUo7QUFDSSwyQkFBZSxtQkFEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPLEVBSVA7QUFDSSw4QkFBYyxDQUFDO0FBRG5CLGFBSk8sRUFPUDtBQUNJLDZCQUFhO0FBRGpCLGFBUE87QUFIZixTQTVFSSxFQTJGSjtBQUNJLDJCQUFlLEtBRG5CO0FBRUksMkJBQWUsS0FGbkI7QUFHSSx1QkFBVyxDQUNQO0FBQ0ksOEJBQWM7QUFEbEIsYUFETyxFQUlQO0FBQ0ksOEJBQWMsQ0FBQztBQURuQixhQUpPLEVBT1A7QUFDSSw2QkFBYTtBQURqQixhQVBPO0FBSGYsU0EzRkksRUEwR0o7QUFDSSwyQkFBZSxnQkFEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPO0FBSGYsU0ExR0ksRUFtSEo7QUFDSSwyQkFBZSxnQkFEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPO0FBSGYsU0FuSEksRUE0SEo7QUFDSSwyQkFBZSxNQURuQjtBQUVJLDJCQUFlLEtBRm5CO0FBR0ksdUJBQVcsQ0FDUDtBQUNJLDhCQUFjO0FBRGxCLGFBRE8sRUFJUDtBQUNJLDhCQUFjLENBQUM7QUFEbkIsYUFKTyxFQU9QO0FBQ0ksNkJBQWE7QUFEakIsYUFQTztBQUhmLFNBNUhJLEVBMklKO0FBQ0ksMkJBQWUsY0FEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPO0FBSGYsU0EzSUksRUFvSko7QUFDSSwyQkFBZSxnQ0FEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPO0FBSGYsU0FwSkksRUE2Sko7QUFDSSwyQkFBZSxlQURuQjtBQUVJLDJCQUFlLEtBRm5CO0FBR0ksdUJBQVcsQ0FDUDtBQUNJLDhCQUFjO0FBRGxCLGFBRE87QUFIZixTQTdKSSxFQXNLSjtBQUNJLDJCQUFlLFlBRG5CO0FBRUksMkJBQWUsS0FGbkI7QUFHSSx1QkFBVyxDQUNQO0FBQ0ksOEJBQWM7QUFEbEIsYUFETztBQUhmLFNBdEtJLEVBK0tKO0FBQ0ksMkJBQWUsU0FEbkI7QUFFSSwyQkFBZSxLQUZuQjtBQUdJLHVCQUFXLENBQ1A7QUFDSSw4QkFBYztBQURsQixhQURPLEVBSVA7QUFDSSw4QkFBYyxDQUFDO0FBRG5CLGFBSk8sRUFPUDtBQUNJLDZCQUFhO0FBRGpCLGFBUE87QUFIZixTQS9LSSxFQThMSjtBQUNJLDJCQUFlLE9BRG5CO0FBRUksMkJBQWUsS0FGbkI7QUFHSSx1QkFBVyxDQUNQO0FBQ0ksOEJBQWM7QUFEbEIsYUFETyxFQUlQO0FBQ0ksOEJBQWMsQ0FBQztBQURuQixhQUpPLEVBT1A7QUFDSSw2QkFBYTtBQURqQixhQVBPLEVBVVA7QUFDSSx5QkFBUztBQURiLGFBVk87QUFIZixTQTlMSTtBQUowQixLQUE1QixDQUFWOztBQXVOQSxRQUFJLFFBQVE7QUFDUixhQUFLLDRCQURHO0FBRVIsb0JBQVksSUFBSSxPQUFPLElBQVAsQ0FBWSxJQUFoQixDQUFxQixFQUFyQixFQUF5QixFQUF6QjtBQUZKLEtBQVo7O0FBS0EsUUFBSSxTQUFTLElBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUI7QUFDaEMsa0JBQVUsV0FEc0I7QUFFaEMsYUFBSyxHQUYyQjtBQUdoQyxlQUFPLE1BSHlCO0FBSWhDLG1CQUFXLEtBSnFCO0FBS2hDLGNBQU07QUFMMEIsS0FBdkIsQ0FBYjs7QUFRQSxRQUFJLGdCQUFnQix1QkFDaEIsdUJBRGdCLEdBRWhCLFFBRmdCLEdBR2hCLHNEQUhnQixHQUloQix3QkFKZ0IsR0FLaEIseUJBTGdCLEdBTWhCLG1CQU5nQixHQU9oQixxQkFQZ0IsR0FRaEIsd0JBUmdCLEdBU2hCLGtCQVRnQixHQVVoQix1QkFWZ0IsR0FXaEIsNEJBWGdCLEdBWWhCLFFBWmdCLEdBYWhCLFFBYko7O0FBZUEsUUFBSSxhQUFhLElBQUksT0FBTyxJQUFQLENBQVksVUFBaEIsQ0FBMkI7QUFDeEMsaUJBQVMsYUFEK0I7QUFFeEMsa0JBQVU7QUFGOEIsS0FBM0IsQ0FBakI7O0FBS0EsV0FBTyxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcEMsbUJBQVcsSUFBWCxDQUFnQixHQUFoQixFQUFxQixNQUFyQjtBQUNILEtBRkQ7QUFHSCxDQW5RRDs7a0JBcVFlLEk7Ozs7Ozs7O0FDclFmLElBQU0sTUFBTSxTQUFOLEdBQU0sR0FBTTtBQUNoQixNQUFJLGFBQWEsRUFBRSxZQUFGLENBQWpCO0FBQ0EsTUFBSSxPQUFPLEVBQUUsV0FBRixDQUFYO0FBQ0EsYUFBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFXO0FBQ2hDLGVBQVcsV0FBWCxDQUF1QixXQUF2QjtBQUNBLFNBQUssV0FBTCxDQUFpQixZQUFqQjtBQUNELEdBSEQ7QUFJRCxDQVBEOztrQkFTZSxHOzs7Ozs7OztBQ1RmLElBQU0sUUFBUSxTQUFSLEtBQVEsR0FBTTs7QUFFaEIsTUFBRSxhQUFGLEVBQWlCLGFBQWpCLENBQStCO0FBQzNCLGNBQU0sUUFEcUI7QUFFM0Isd0JBQWdCLElBRlc7QUFHM0IseUJBQWlCLEtBSFU7QUFJM0Isb0JBQVksSUFKZTtBQUszQixrQkFBVSxJQUxpQjtBQU0zQixtQkFBVyxNQU5nQjtBQU8zQixtQkFBVyxLQVBnQjtBQVEzQixzQkFBYyxHQVJhO0FBUzNCLG1CQUFXLFVBVGdCO0FBVTNCLG1CQUFXO0FBQ1Asa0JBQU0sZ0JBQVk7QUFDZCxrQkFBRSxnQkFBRixFQUFvQixLQUFwQixDQUEwQjtBQUN0QixrQ0FBYyxDQURRO0FBRXRCLG9DQUFnQixDQUZNO0FBR3RCLDRCQUFRLEtBSGM7QUFJdEIsMkJBQU8sR0FKZTtBQUt0Qiw4QkFBVSxvQkFMWTtBQU10QixnQ0FBWSxDQUFDO0FBQ1Qsb0NBQVksR0FESDtBQUVULGtDQUFVO0FBQ04sb0NBQVEsS0FERjtBQUVOLGtDQUFNLElBRkE7QUFHTixtQ0FBTyxJQUhEO0FBSU4sMENBQWMsQ0FKUjtBQUtOLDRDQUFnQjtBQUxWO0FBRkQscUJBQUQ7QUFOVSxpQkFBMUI7QUFpQkEsa0JBQUUsb0JBQUYsRUFBd0IsS0FBeEIsQ0FBOEI7QUFDMUIsK0JBQVcsd0RBRGU7QUFFMUIsK0JBQVcsb0RBRmU7QUFHMUIsa0NBQWMsQ0FIWTtBQUkxQixvQ0FBZ0IsQ0FKVTtBQUsxQiwyQkFBTyxHQUxtQjtBQU0xQiw0QkFBUSxJQU5rQjtBQU8xQiw4QkFBVSxnQkFQZ0I7QUFRMUIsMEJBQU0sS0FSb0I7QUFTMUIsZ0NBQVksS0FUYztBQVUxQixtQ0FBZTtBQVZXLGlCQUE5QjtBQVlIO0FBL0JNO0FBVmdCLEtBQS9CO0FBNkNILENBL0NEOztrQkFpRGUsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cclxuLy9cclxuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxyXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cclxuXHJcbmltcG9ydCBOYXYgZnJvbSAnLi9tb2R1bGVzL25hdic7XHJcbmltcG9ydCBHcmlkIGZyb20gJy4vbW9kdWxlcy9ncmlkJztcclxuaW1wb3J0IFBvcHVwIGZyb20gJy4vbW9kdWxlcy9wb3B1cCc7XHJcbmltcG9ydCBHbWFwIGZyb20gJy4vbW9kdWxlcy9tYXAnO1xyXG5cclxuKCgkKSA9PiB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLy8gV2hlbiBET00gaXMgcmVhZHlcclxuICAgICQoKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIE5hdigpO1xyXG4gICAgICAgIEdyaWQoKTtcclxuICAgICAgICBQb3B1cCgpO1xyXG4gICAgICAgIEdtYXAoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiY29uc3QgR3JpZCA9ICgpID0+IHtcclxuICBcclxuICB2YXIgJGdyaWQgPSAkKCcuZ3JpZCcpLnBhY2tlcnkoe1xyXG4gICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbSdcclxuICB9KTtcclxuXHJcbiAgJGdyaWQuaW1hZ2VzTG9hZGVkKCkucHJvZ3Jlc3MoIGZ1bmN0aW9uKCkge1xyXG4gICAgJGdyaWQucGFja2VyeSgpO1xyXG4gIH0pO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWQ7IiwiY29uc3QgR21hcCA9IGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcblxyXG4gICAgbGV0IGdldE1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKTtcclxuICAgIGlmKCFnZXRNYXApIHJldHVybjtcclxuICAgIGxldCBsYXQgPSBnZXRNYXAuZGF0YXNldC5sYXQ7XHJcbiAgICBsZXQgbG5nID0gZ2V0TWFwLmRhdGFzZXQubG5nO1xyXG4gICAgbGV0IGNvb3JkaW5hdGVzID0ge2xhdDogK2xhdCwgbG5nOiArbG5nfTtcclxuXHJcbiAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChnZXRNYXAsIHtcclxuICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgIGNlbnRlcjogY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgem9vbTogMTIsXHJcbiAgICAgICAgc3R5bGVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogMjBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5wcm92aW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmMDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNkN2Q4ZDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5tYW5fbWFkZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTYwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWxcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC02MFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA2MFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDYwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLmF0dHJhY3Rpb25cIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuZ292ZXJubWVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogNDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXkuY29udHJvbGxlZF9hY2Nlc3NcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXHJcbiAgICAgICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRuZXNzXCI6IDYwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiAtMTBcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogXCI0MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjYzBjMWJiXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgaW1hZ2UgPSB7XHJcbiAgICAgICAgdXJsOiAnYXNzZXRzL2ltYWdlcy9nLW1hcmtlci5zdmcnLFxyXG4gICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDQ1LCA2MCksXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICBwb3NpdGlvbjogY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgbWFwOiBtYXAsXHJcbiAgICAgICAgdGl0bGU6ICdEU0dOJyxcclxuICAgICAgICBvcHRpbWl6ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGljb246IGltYWdlXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgY29udGVudFN0cmluZyA9ICc8ZGl2IGlkPVwiY29udGVudFwiPicgK1xyXG4gICAgICAgICc8ZGl2IGlkPVwic2l0ZU5vdGljZVwiPicgK1xyXG4gICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAnPGgxIGlkPVwiZmlyc3RIZWFkaW5nXCIgY2xhc3M9XCJmaXJzdEhlYWRpbmdcIj5EU0dOPC9oMT4nICtcclxuICAgICAgICAnPGRpdiBpZD1cImJvZHlDb250ZW50XCI+JyArXHJcbiAgICAgICAgJzxwPjkwODAyIENhbGlmb3JuaWE8L3A+JyArXHJcbiAgICAgICAgJzxwPkxvbmcgYmVhY2g8L3A+JyArXHJcbiAgICAgICAgJzxwPlBPIEJveCA2ODc4OTwvcD4nICtcclxuICAgICAgICAnPHA+MzAwIEVhc3QgT2NlYW4gPC9wPicgK1xyXG4gICAgICAgICc8cD5Cb3VsZXZhcmQ8L3A+JyArXHJcbiAgICAgICAgJzxwPis2NCA5IDM0NSA2NzU4PC9wPicgK1xyXG4gICAgICAgICc8cD5uZm9AZHNnbi1zdHVkaW8uY29tPC9wPicgK1xyXG4gICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAnPC9kaXY+JztcclxuXHJcbiAgICBsZXQgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuICAgICAgICBjb250ZW50OiBjb250ZW50U3RyaW5nLFxyXG4gICAgICAgIG1heFdpZHRoOiAzNTBcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR21hcDsiLCJjb25zdCBOYXYgPSAoKSA9PiB7XHJcbiAgbGV0ICRoYW1idXJnZXIgPSAkKFwiLmhhbWJ1cmdlclwiKTtcclxuICBsZXQgJG5hdiA9ICQoXCIubWVudS1uYXZcIik7XHJcbiAgJGhhbWJ1cmdlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgJGhhbWJ1cmdlci50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcclxuICAgICRuYXYudG9nZ2xlQ2xhc3MoXCJuYXYtb3BlbmVkXCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsImNvbnN0IFBvcHVwID0gKCkgPT4ge1xyXG5cclxuICAgICQoJy5vcGVuLXBvcHVwJykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgdHlwZTogJ2lubGluZScsXHJcbiAgICAgICAgY2xvc2VCdG5JbnNpZGU6IHRydWUsXHJcbiAgICAgICAgZml4ZWRDb250ZW50UG9zOiBmYWxzZSxcclxuICAgICAgICBmaXhlZEJnUG9zOiB0cnVlLFxyXG4gICAgICAgIG1pZENsaWNrOiB0cnVlLFxyXG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgICAgIHByZWxvYWRlcjogZmFsc2UsXHJcbiAgICAgICAgcmVtb3ZhbERlbGF5OiAzMDAsXHJcbiAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnLFxyXG4gICAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucG9wdXBfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnBvcHVwX19zbGlkZXItbmF2JyxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJy5wb3B1cF9fc2xpZGVyLW5hdicpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cInNsaWRlci1uYXZfX2Fycm93IGxlZnQgaWNvbi1zbGlkZS1sZWZ0XCI+PC9pPicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGkgY2xhc3M9XCJzbGlkZXItbmF2X19hcnJvdyBpY29uLXNsaWRlLXJpZ2h0XCI+PC9pPicsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnBvcHVwX19zbGlkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7Il19
