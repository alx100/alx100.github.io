(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _navbar = require('./modules/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _mainSlider = require('./modules/mainSlider');

var _mainSlider2 = _interopRequireDefault(_mainSlider);

var _worksSlider = require('./modules/worksSlider');

var _worksSlider2 = _interopRequireDefault(_worksSlider);

var _scrollTop = require('./modules/scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {

    (0, _navbar2.default)();
    (0, _mainSlider2.default)();
    (0, _worksSlider2.default)();
    (0, _scrollTop2.default)();
  });
})(jQuery);

},{"./modules/mainSlider":2,"./modules/navbar":3,"./modules/scrollTop":4,"./modules/worksSlider":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MainSlider = function MainSlider() {
  $('.slider').slick({
    nextArrow: '<i class="icon-right-open slider-arrow slider-arrow__right"></i>',
    prevArrow: '<i class="icon-left-open slider-arrow slider-arrow__left"></i>',
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    dots: true,
    adaptiveHeight: false,
    accessibility: false,
    slidesToScroll: 1
  });
};

exports.default = MainSlider;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Navbar = function Navbar() {

  $(window).scroll(function () {
    if ($(document).scrollTop() > 40) {
      $('nav').addClass('navbar-fixed-top nav-shrinked');
      $('.dropdown-menu ').addClass('menu-shrinked');
      $('.banner').addClass('banner-shrinked');
      $('.navbar-top').hide();
    } else {
      $('nav').removeClass('navbar-fixed-top nav-shrinked');
      $('.dropdown-menu ').removeClass('menu-shrinked');
      $('.banner').removeClass('banner-shrinked');
      $('.navbar-top').show();
    }
  });
};

exports.default = Navbar;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ScrollTop = function ScrollTop() {
  $(window).scroll(function () {
    if (jQuery(this).scrollTop() > 500) {
      jQuery('#back-top span').fadeIn();
    } else {
      jQuery('#back-top span').fadeOut();
    }
  });
  $('#back-top span').click(function () {
    $('body,html').stop(false, false).animate({
      scrollTop: 0
    }, 500);
    return false;
  });
};

exports.default = ScrollTop;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WorksSlider = function WorksSlider() {
  $('.works-slider').slick({
    nextArrow: '<span class="works-slider-arrow works-slider-arrow__1"><i class="icon-right-open works-slider__right"></i></span>',
    prevArrow: '<span class="works-slider-arrow works-slider-arrow__2"><i class="icon-left-open works-slider__left"></i></span>',
    infinite: true,
    slidesToShow: 4,
    speed: 800,
    dots: true,
    appendArrows: '.works-slider-nav',
    appendDots: '.works-slider-nav',
    adaptiveHeight: false,
    accessibility: false,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
      }
    }]
  });
};

exports.default = WorksSlider;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxtYWluU2xpZGVyLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcbmF2YmFyLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcc2Nyb2xsVG9wLmpzIiwic3JjXFxqc1xcbW9kdWxlc1xcd29ya3NTbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0tBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxDQUFDLFVBQUMsQ0FBRCxFQUFPO0FBQ047O0FBRUE7O0FBRUEsSUFBRSxZQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBRUQsR0FQRDtBQVNELENBZEQsRUFjRyxNQWRIOzs7Ozs7OztBQ1ZBLElBQU0sYUFBYSxTQUFiLFVBQWEsR0FBTTtBQUN2QixJQUFFLFNBQUYsRUFBYSxLQUFiLENBQW1CO0FBQ2pCLGVBQVcsa0VBRE07QUFFakIsZUFBVyxnRUFGTTtBQUdqQixjQUFVLElBSE87QUFJakIsa0JBQWMsQ0FKRztBQUtqQixXQUFPLEdBTFU7QUFNakIsVUFBTSxJQU5XO0FBT2pCLG9CQUFnQixLQVBDO0FBUWpCLG1CQUFlLEtBUkU7QUFTakIsb0JBQWdCO0FBVEMsR0FBbkI7QUFXRCxDQVpEOztrQkFjZSxVOzs7Ozs7OztBQ2RmLElBQU0sU0FBUyxTQUFULE1BQVMsR0FBTTs7QUFFbkIsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFXO0FBQzFCLFFBQUksRUFBRSxRQUFGLEVBQVksU0FBWixLQUEwQixFQUE5QixFQUFrQztBQUNoQyxRQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLCtCQUFsQjtBQUNBLFFBQUUsaUJBQUYsRUFBcUIsUUFBckIsQ0FBOEIsZUFBOUI7QUFDQSxRQUFFLFNBQUYsRUFBYSxRQUFiLENBQXNCLGlCQUF0QjtBQUNBLFFBQUUsYUFBRixFQUFpQixJQUFqQjtBQUVELEtBTkQsTUFNTztBQUNMLFFBQUUsS0FBRixFQUFTLFdBQVQsQ0FBcUIsK0JBQXJCO0FBQ0EsUUFBRSxpQkFBRixFQUFxQixXQUFyQixDQUFpQyxlQUFqQztBQUNBLFFBQUUsU0FBRixFQUFhLFdBQWIsQ0FBeUIsaUJBQXpCO0FBQ0EsUUFBRSxhQUFGLEVBQWlCLElBQWpCO0FBQ0Q7QUFDRixHQWJEO0FBY0QsQ0FoQkQ7O2tCQW1CZSxNOzs7Ozs7OztBQ25CZixJQUFNLFlBQVksU0FBWixTQUFZLEdBQU07QUFDdEIsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQzNCLFFBQUksT0FBTyxJQUFQLEVBQWEsU0FBYixLQUEyQixHQUEvQixFQUFvQztBQUNsQyxhQUFPLGdCQUFQLEVBQXlCLE1BQXpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxnQkFBUCxFQUF5QixPQUF6QjtBQUNEO0FBQ0YsR0FORDtBQU9BLElBQUUsZ0JBQUYsRUFBb0IsS0FBcEIsQ0FBMEIsWUFBWTtBQUNwQyxNQUFFLFdBQUYsRUFBZSxJQUFmLENBQW9CLEtBQXBCLEVBQTJCLEtBQTNCLEVBQWtDLE9BQWxDLENBQTBDO0FBQ3hDLGlCQUFXO0FBRDZCLEtBQTFDLEVBRUcsR0FGSDtBQUdBLFdBQU8sS0FBUDtBQUNELEdBTEQ7QUFNRCxDQWREOztrQkFnQmUsUzs7Ozs7Ozs7QUNoQmYsSUFBTSxjQUFjLFNBQWQsV0FBYyxHQUFNO0FBQ3hCLElBQUUsZUFBRixFQUFtQixLQUFuQixDQUF5QjtBQUN2QixlQUFXLG1IQURZO0FBRXZCLGVBQVcsaUhBRlk7QUFHdkIsY0FBVSxJQUhhO0FBSXZCLGtCQUFjLENBSlM7QUFLdkIsV0FBTyxHQUxnQjtBQU12QixVQUFNLElBTmlCO0FBT3ZCLGtCQUFjLG1CQVBTO0FBUXZCLGdCQUFZLG1CQVJXO0FBU3ZCLG9CQUFnQixLQVRPO0FBVXZCLG1CQUFlLEtBVlE7QUFXdkIsb0JBQWdCLENBWE87QUFZdkIsZ0JBQVksQ0FDVjtBQUNFLGtCQUFZLEdBRGQ7QUFFRSxnQkFBVTtBQUNSLHNCQUFjLENBRE47QUFFUix3QkFBZ0I7QUFGUjtBQUZaLEtBRFUsRUFRVjtBQUNFLGtCQUFZLEdBRGQ7QUFFRSxnQkFBVTtBQUNSLHNCQUFjLENBRE47QUFFUix3QkFBZ0IsQ0FGUjtBQUdSLGdCQUFRO0FBSEE7QUFGWixLQVJVO0FBWlcsR0FBekI7QUErQkQsQ0FoQ0Q7O2tCQWtDZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxyXG4vL1xyXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXHJcbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL21vZHVsZXMvbmF2YmFyJztcclxuaW1wb3J0IE1haW5TbGlkZXIgZnJvbSAnLi9tb2R1bGVzL21haW5TbGlkZXInO1xyXG5pbXBvcnQgV29ya3NTbGlkZXIgZnJvbSAnLi9tb2R1bGVzL3dvcmtzU2xpZGVyJztcclxuaW1wb3J0IFNjcm9sbFRvcCBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcclxuXHJcbigoJCkgPT4ge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcclxuXHJcbiAgJCgoKSA9PiB7XHJcblxyXG4gICAgTmF2YmFyKCk7XHJcbiAgICBNYWluU2xpZGVyKCk7XHJcbiAgICBXb3Jrc1NsaWRlcigpO1xyXG4gICAgU2Nyb2xsVG9wKCk7XHJcblxyXG4gIH0pO1xyXG5cclxufSkoalF1ZXJ5KTsiLCJjb25zdCBNYWluU2xpZGVyID0gKCkgPT4ge1xyXG4gICQoJy5zbGlkZXInKS5zbGljayh7XHJcbiAgICBuZXh0QXJyb3c6ICc8aSBjbGFzcz1cImljb24tcmlnaHQtb3BlbiBzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93X19yaWdodFwiPjwvaT4nLFxyXG4gICAgcHJldkFycm93OiAnPGkgY2xhc3M9XCJpY29uLWxlZnQtb3BlbiBzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93X19sZWZ0XCI+PC9pPicsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxyXG4gICAgYWNjZXNzaWJpbGl0eTogZmFsc2UsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpblNsaWRlcjsiLCJjb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgXHJcbiAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDQwKSB7XHJcbiAgICAgICQoJ25hdicpLmFkZENsYXNzKCduYXZiYXItZml4ZWQtdG9wIG5hdi1zaHJpbmtlZCcpO1xyXG4gICAgICAkKCcuZHJvcGRvd24tbWVudSAnKS5hZGRDbGFzcygnbWVudS1zaHJpbmtlZCcpO1xyXG4gICAgICAkKCcuYmFubmVyJykuYWRkQ2xhc3MoJ2Jhbm5lci1zaHJpbmtlZCcpO1xyXG4gICAgICAkKCcubmF2YmFyLXRvcCcpLmhpZGUoKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCduYXYnKS5yZW1vdmVDbGFzcygnbmF2YmFyLWZpeGVkLXRvcCBuYXYtc2hyaW5rZWQnKTtcclxuICAgICAgJCgnLmRyb3Bkb3duLW1lbnUgJykucmVtb3ZlQ2xhc3MoJ21lbnUtc2hyaW5rZWQnKTtcclxuICAgICAgJCgnLmJhbm5lcicpLnJlbW92ZUNsYXNzKCdiYW5uZXItc2hyaW5rZWQnKTtcclxuICAgICAgJCgnLm5hdmJhci10b3AnKS5zaG93KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuXHJcbiIsImNvbnN0IFNjcm9sbFRvcCA9ICgpID0+IHtcclxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChqUXVlcnkodGhpcykuc2Nyb2xsVG9wKCkgPiA1MDApIHtcclxuICAgICAgalF1ZXJ5KCcjYmFjay10b3Agc3BhbicpLmZhZGVJbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgalF1ZXJ5KCcjYmFjay10b3Agc3BhbicpLmZhZGVPdXQoKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKCcjYmFjay10b3Agc3BhbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2JvZHksaHRtbCcpLnN0b3AoZmFsc2UsIGZhbHNlKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICB9LCA1MDApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsVG9wOyIsImNvbnN0IFdvcmtzU2xpZGVyID0gKCkgPT4ge1xyXG4gICQoJy53b3Jrcy1zbGlkZXInKS5zbGljayh7XHJcbiAgICBuZXh0QXJyb3c6ICc8c3BhbiBjbGFzcz1cIndvcmtzLXNsaWRlci1hcnJvdyB3b3Jrcy1zbGlkZXItYXJyb3dfXzFcIj48aSBjbGFzcz1cImljb24tcmlnaHQtb3BlbiB3b3Jrcy1zbGlkZXJfX3JpZ2h0XCI+PC9pPjwvc3Bhbj4nLFxyXG4gICAgcHJldkFycm93OiAnPHNwYW4gY2xhc3M9XCJ3b3Jrcy1zbGlkZXItYXJyb3cgd29ya3Mtc2xpZGVyLWFycm93X18yXCI+PGkgY2xhc3M9XCJpY29uLWxlZnQtb3BlbiB3b3Jrcy1zbGlkZXJfX2xlZnRcIj48L2k+PC9zcGFuPicsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNwZWVkOiA4MDAsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgYXBwZW5kQXJyb3dzOiAnLndvcmtzLXNsaWRlci1uYXYnLCBcclxuICAgIGFwcGVuZERvdHM6ICcud29ya3Mtc2xpZGVyLW5hdicsXHJcbiAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXHJcbiAgICBhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV29ya3NTbGlkZXI7Il19
