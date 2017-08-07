(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
	'use strict';

	// Hamburger

	var $hamburger = $(".hamburger");
	$hamburger.on("click", function (e) {
		$hamburger.toggleClass("is-active");
		$(".header-nav__list").toggleClass("hidden");
	});

	$('.header-nav__item').click(function () {
		$('.header-nav__list').addClass('hidden');
		$hamburger.removeClass("is-active");
	});

	// Slide down
	$(".scroll-btn").on("click", function () {
		$("html, body").animate({ scrollTop: $(".header").height() + 70 }, "slow");
	});

	// Slider 
	$('.reviews__slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	new WOW().init();

	// Classie for custom inputs
	function classReg(className) {
		return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}

	var hasClass, addClass, removeClass;

	if ('classList' in document.documentElement) {
		hasClass = function hasClass(elem, c) {
			return elem.classList.contains(c);
		};
		addClass = function addClass(elem, c) {
			elem.classList.add(c);
		};
		removeClass = function removeClass(elem, c) {
			elem.classList.remove(c);
		};
	} else {
		hasClass = function hasClass(elem, c) {
			return classReg(c).test(elem.className);
		};
		addClass = function addClass(elem, c) {
			if (!hasClass(elem, c)) {
				elem.className = elem.className + ' ' + c;
			}
		};
		removeClass = function removeClass(elem, c) {
			elem.className = elem.className.replace(classReg(c), ' ');
		};
	}

	function toggleClass(elem, c) {
		var fn = hasClass(elem, c) ? removeClass : addClass;
		fn(elem, c);
	}

	var classie = {
		// full names
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		// short names
		has: hasClass,
		add: addClass,
		remove: removeClass,
		toggle: toggleClass
	};

	// INPUT CHANGER
	[].slice.call(document.querySelectorAll('input.input__field')).forEach(function (inputEl) {
		// in case the input is already filled..
		if (inputEl.value.trim() !== '') {
			classie.add(inputEl.parentNode, 'input--filled');
		}

		// events:
		inputEl.addEventListener('focus', onInputFocus);
		inputEl.addEventListener('blur', onInputBlur);
	});

	function onInputFocus(ev) {
		classie.add(ev.target.parentNode, 'input--filled');
	}

	function onInputBlur(ev) {
		if (ev.target.value.trim() === '') {
			classie.remove(ev.target.parentNode, 'input--filled');
		}
	}
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/dots":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var DE = {
  dotsEffect: function dotsEffect() {
    var $cnt = $('#home-canvas'),
        cells = createCells();

    $cnt.html(cells);

    function createCells() {
      var width = 10,
          height = 10,
          size = width * height,
          html = '<div class="entry-cells">';

      for (var i = 0; i < size; i++) {
        html += '<div class="cell cell-' + i + '"></div>';
      }

      html += '</div>';

      return html;
    }
  }
};

exports.default = DE;

},{}]},{},[1]);
