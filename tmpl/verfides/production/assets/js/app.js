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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxoYW1idXJnZXIuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxzY3JvbGwuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxzZWN0aW9uU2Nyb2xsLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcc2xpZGVyLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcdmlkZW9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDTUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsQ0FBQyxVQUFDLENBQUQsRUFBTztBQUNOOztBQUVBOztBQUNBLElBQUUsWUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQU5EO0FBUUQsQ0FaRCxFQVlHLE1BWkgsRSxDQVpBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ0xBLElBQU0sWUFBWSxTQUFaLFNBQVksR0FBTTtBQUN0QixNQUFJLGFBQWEsRUFBRSxZQUFGLENBQWpCO0FBQ0EsYUFBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFZO0FBQ2pDLGVBQVcsV0FBWCxDQUF1QixXQUF2QjtBQUNBLE1BQUUsaUJBQUYsRUFBcUIsV0FBckIsQ0FBaUMsWUFBakM7QUFDRCxHQUhEO0FBSUQsQ0FORDs7a0JBUWUsUzs7Ozs7Ozs7QUNSZixJQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDbkIsSUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVk7QUFDdkMsTUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCLEVBQUUsV0FBVyxFQUFFLFNBQUYsRUFBYSxNQUFiLEtBQXdCLENBQXJDLEVBQXhCLEVBQWtFLE1BQWxFO0FBQ0QsR0FGRDtBQUdELENBSkQ7O2tCQU1lLE07Ozs7Ozs7O0FDTmYsSUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBTTtBQUMxQixJQUFFLEdBQUYsRUFBTyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFVLEtBQVYsRUFBaUI7QUFDbEMsUUFBSSxLQUFLLElBQUwsS0FBYyxFQUFsQixFQUFzQjtBQUNwQixZQUFNLGNBQU47QUFDQSxVQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLFFBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN0QixtQkFBVyxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCO0FBRE4sT0FBeEIsRUFFRyxHQUZILEVBRVEsWUFBWTtBQUNsQixlQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsSUFBdkI7QUFDRCxPQUpEO0FBS0Q7QUFDRixHQVZEO0FBWUQsQ0FiRDs7a0JBZWUsYTs7Ozs7Ozs7QUNmZixJQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDbkIsTUFBRyxVQUFILEVBQWU7QUFDYixRQUFJLFNBQVMsT0FBTyxVQUFQLENBQWtCLG1CQUFsQixDQUFiO0FBQ0EsV0FBTyxXQUFQLENBQW1CLE9BQW5CO0FBQ0EsWUFBUSxNQUFSO0FBQ0Q7QUFDQyxXQUFTLE9BQVQsQ0FBaUIsTUFBakIsRUFBeUI7QUFDdkIsUUFBRyxPQUFPLE9BQVYsRUFBbUI7QUFDakIsUUFBRSxlQUFGLEVBQW1CLFdBQW5CLENBQStCLHNCQUEvQjtBQUNBLFFBQUUsZUFBRixFQUFtQixLQUFuQixDQUF5QixTQUF6QjtBQUNELEtBSEQsTUFJSztBQUNILFFBQUUsZUFBRixFQUFtQixLQUFuQixDQUF5QjtBQUN2QixtQkFBVyx1RUFEWTtBQUV2QixtQkFBVyxzRUFGWTtBQUd2QixrQkFBVSxJQUhhO0FBSXZCLGVBQU8sR0FKZ0I7QUFLdkIsc0JBQWMsQ0FMUztBQU12Qix3QkFBZ0IsQ0FOTztBQU92Qix3QkFBZ0IsSUFQTztBQVF2QixvQkFBWSxDQUNWO0FBQ0Usc0JBQVksSUFEZDtBQUVFLG9CQUFVO0FBQ1Isb0JBQVEsS0FEQTtBQUVSLGtCQUFNLElBRkU7QUFHUiwwQkFBYyxDQUhOO0FBSVIsNEJBQWdCO0FBSlI7QUFGWixTQURVOztBQVJXLE9BQXpCO0FBcUJEO0FBQ0Y7QUFDSixDQW5DRDs7a0JBcUNlLE07Ozs7Ozs7O0FDckNmLElBQU0sZ0JBQWdCLFNBQWhCLGFBQWdCLEdBQU07QUFDMUIsTUFBSSxTQUFTLEVBQUUsVUFBRixFQUFjLEdBQWQsQ0FBa0IsQ0FBbEIsQ0FBYjtBQUNBLE1BQUksV0FBVyxFQUFFLFdBQUYsQ0FBZjtBQUNBLE1BQUksWUFBWSxFQUFFLFlBQUYsQ0FBaEI7O0FBRUEsWUFBVSxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFZO0FBQ2hDLFdBQU8sS0FBUDtBQUNBLGNBQVUsUUFBVixDQUFtQixZQUFuQjtBQUNBLGFBQVMsV0FBVCxDQUFxQixZQUFyQjtBQUNELEdBSkQ7O0FBTUEsV0FBUyxFQUFULENBQVksT0FBWixFQUFxQixZQUFZO0FBQy9CLFdBQU8sSUFBUDtBQUNBLGFBQVMsUUFBVCxDQUFrQixZQUFsQjtBQUNBLGNBQVUsV0FBVixDQUFzQixZQUF0QjtBQUNELEdBSkQ7QUFLRCxDQWhCRDs7a0JBa0JlLGEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXHJcbi8vXHJcbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cclxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXHJcblxyXG4vLyBpbXBvcnQgREUgZnJvbSAnLi9tb2R1bGVzL2RvdHMnO1xyXG5pbXBvcnQgSGFtYnVyZ2VyIGZyb20gJy4vbW9kdWxlcy9oYW1idXJnZXInO1xyXG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9zY3JvbGwnO1xyXG5pbXBvcnQgU2VjdGlvblNjcm9sbCBmcm9tICcuL21vZHVsZXMvc2VjdGlvblNjcm9sbCc7XHJcbmltcG9ydCBTbGRlciBmcm9tICcuL21vZHVsZXMvc2xpZGVyJztcclxuaW1wb3J0IFZpZGVvQ29udHJvbHMgZnJvbSAnLi9tb2R1bGVzL3ZpZGVvQ29udHJvbHMnO1xyXG5cclxuKCgkKSA9PiB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxyXG4gICQoKCkgPT4ge1xyXG4gICAgSGFtYnVyZ2VyKCk7XHJcbiAgICBTY3JvbGwoKTtcclxuICAgIFNlY3Rpb25TY3JvbGwoKTtcclxuICAgIFNsZGVyKCk7XHJcbiAgICBWaWRlb0NvbnRyb2xzKCk7XHJcbiAgfSk7XHJcblxyXG59KShqUXVlcnkpOyIsImNvbnN0IEhhbWJ1cmdlciA9ICgpID0+IHtcclxuICBsZXQgJGhhbWJ1cmdlciA9ICQoXCIuaGFtYnVyZ2VyXCIpO1xyXG4gICRoYW1idXJnZXIub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkaGFtYnVyZ2VyLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xyXG4gICAgJChcIi5tYWluLW5hdl9fbGlzdFwiKS50b2dnbGVDbGFzcyhcIm5hdi1oaWRkZW5cIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XHJcbiIsImNvbnN0IFNjcm9sbCA9ICgpID0+IHtcclxuICAkKFwiLnNjcm9sbC1idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKFwiLmhlYWRlclwiKS5oZWlnaHQoKSArIDUgfSwgXCJzbG93XCIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsOyIsImNvbnN0IFNlY3Rpb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgJChcImFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5oYXNoICE9PSBcIlwiKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xyXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcFxyXG4gICAgICB9LCA4MDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2g7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblNjcm9sbDsiLCJjb25zdCBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgaWYobWF0Y2hNZWRpYSkge1xyXG4gICAgdmFyIHNjcmVlbiA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDo3NjBweClcIik7XHJcbiAgICBzY3JlZW4uYWRkTGlzdGVuZXIoY2hhbmdlcyk7XHJcbiAgICBjaGFuZ2VzKHNjcmVlbik7XHJcbiAgfVxyXG4gICAgZnVuY3Rpb24gY2hhbmdlcyhzY3JlZW4pIHtcclxuICAgICAgaWYoc2NyZWVuLm1hdGNoZXMpIHtcclxuICAgICAgICAkKCcuc2VydmljZS1saXN0JykucmVtb3ZlQ2xhc3MoJ3NlcnZpY2UtbGlzdF9fc2xpZGVyJyk7XHJcbiAgICAgICAgJCgnLnNlcnZpY2UtbGlzdCcpLnNsaWNrKCdkZXN0cm95Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgJCgnLnNlcnZpY2UtbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgIG5leHRBcnJvdzogJzxzcGFuIGNsYXNzPVwiaWNvbi1jaGV2cm9uLXIgc2xpZGVyLWFycm93IHNsaWRlci1hcnJvd19fcmlnaHRcIj48L3NwYW4+JyxcclxuICAgICAgICAgIHByZXZBcnJvdzogJzxzcGFuIGNsYXNzPVwiaWNvbi1jaGV2cm9uLWwgc2xpZGVyLWFycm93IHNsaWRlci1hcnJvd19fbGVmdFwiPjwvc3Bhbj4nLFxyXG4gICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICBzcGVlZDogODAwLFxyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcclxuICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwODAsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7IiwiY29uc3QgVmlkZW9Db250cm9scyA9ICgpID0+IHtcclxuICBsZXQgJHZpZGVvID0gJCgnI2otdmlkZW8nKS5nZXQoMCk7XHJcbiAgbGV0ICRidG5QbGF5ID0gJCgnLmJ0bi1wbGF5Jyk7XHJcbiAgbGV0ICRidG5QYXVzZSA9ICQoJy5idG4tcGF1c2UnKTtcclxuXHJcbiAgJGJ0blBhdXNlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICR2aWRlby5wYXVzZSgpO1xyXG4gICAgJGJ0blBhdXNlLmFkZENsYXNzKCdidG4taGlkZGVuJyk7XHJcbiAgICAkYnRuUGxheS5yZW1vdmVDbGFzcygnYnRuLWhpZGRlbicpO1xyXG4gIH0pO1xyXG5cclxuICAkYnRuUGxheS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkdmlkZW8ucGxheSgpO1xyXG4gICAgJGJ0blBsYXkuYWRkQ2xhc3MoJ2J0bi1oaWRkZW4nKTtcclxuICAgICRidG5QYXVzZS5yZW1vdmVDbGFzcygnYnRuLWhpZGRlbicpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9Db250cm9sczsiXX0=
