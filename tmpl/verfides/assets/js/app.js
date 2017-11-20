(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _hamburger = require('./modules/hamburger');

var _hamburger2 = _interopRequireDefault(_hamburger);

var _scroll = require('./modules/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _sectionScroll = require('./modules/sectionScroll');

var _sectionScroll2 = _interopRequireDefault(_sectionScroll);

var _slider = require('./modules/slider');

var _slider2 = _interopRequireDefault(_slider);

var _videoControls = require('./modules/videoControls');

var _videoControls2 = _interopRequireDefault(_videoControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    (0, _hamburger2.default)();
    (0, _scroll2.default)();
    (0, _sectionScroll2.default)();
    (0, _slider2.default)();
    (0, _videoControls2.default)();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import DE from './modules/dots';

},{"./modules/hamburger":2,"./modules/scroll":3,"./modules/sectionScroll":4,"./modules/slider":5,"./modules/videoControls":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Hamburger = function Hamburger() {
  var $hamburger = $(".hamburger");
  $hamburger.on("click", function () {
    $hamburger.toggleClass("is-active");
    $(".main-nav__list").toggleClass("nav-hidden");
  });
};

exports.default = Hamburger;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SectionScroll = function SectionScroll() {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
};

exports.default = SectionScroll;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Slider = function Slider() {
  if (matchMedia) {
    var screen = window.matchMedia("(max-width:760px)");
    screen.addListener(changes);
    changes(screen);
  }
  function changes(screen) {
    if (screen.matches) {
      $('.service-list').removeClass('service-list__slider');
      $('.service-list').slick('destroy');
    } else {
      $('.service-list').slick({
        nextArrow: '<span class="icon-chevron-r slider-arrow slider-arrow__right"></span>',
        prevArrow: '<span class="icon-chevron-l slider-arrow slider-arrow__left"></span>',
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
        responsive: [{
          breakpoint: 1080,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }]

      });
    }
  }
};

exports.default = Slider;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var VideoControls = function VideoControls() {
  var $video = $('#j-video').get(0);
  var $btnPlay = $('.btn-play');
  var $btnPause = $('.btn-pause');

  $btnPause.on('click', function () {
    $video.pause();
    $btnPause.addClass('btn-hidden');
    $btnPlay.removeClass('btn-hidden');
  });

  $btnPlay.on('click', function () {
    $video.play();
    $btnPlay.addClass('btn-hidden');
    $btnPause.removeClass('btn-hidden');
  });
};

exports.default = VideoControls;

},{}]},{},[1]);
