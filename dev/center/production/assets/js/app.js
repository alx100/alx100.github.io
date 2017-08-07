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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxtb2R1bGVzXFxkb3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7Ozs7O0FBRUEsQ0FBQyxVQUFDLENBQUQsRUFBTztBQUNQOztBQUVBOztBQUNBLEtBQUksYUFBYSxFQUFFLFlBQUYsQ0FBakI7QUFDQSxZQUFXLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFVBQVUsQ0FBVixFQUFhO0FBQ25DLGFBQVcsV0FBWCxDQUF1QixXQUF2QjtBQUNBLElBQUUsbUJBQUYsRUFBdUIsV0FBdkIsQ0FBbUMsUUFBbkM7QUFDQSxFQUhEOztBQUtBLEdBQUUsbUJBQUYsRUFBdUIsS0FBdkIsQ0FBNkIsWUFBWTtBQUN4QyxJQUFFLG1CQUFGLEVBQXVCLFFBQXZCLENBQWdDLFFBQWhDO0FBQ0EsYUFBVyxXQUFYLENBQXVCLFdBQXZCO0FBQ0EsRUFIRDs7QUFLQTtBQUNBLEdBQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFZO0FBQ3hDLElBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QixFQUFFLFdBQVcsRUFBRSxTQUFGLEVBQWEsTUFBYixLQUF3QixFQUFyQyxFQUF4QixFQUFtRSxNQUFuRTtBQUNBLEVBRkQ7O0FBSUE7QUFDQSxHQUFFLGtCQUFGLEVBQXNCLEtBQXRCLENBQTRCO0FBQzNCLFlBQVUsSUFEaUI7QUFFM0IsU0FBTyxHQUZvQjtBQUczQixnQkFBYyxDQUhhO0FBSTNCLGtCQUFnQixJQUpXO0FBSzNCLFFBQU0sSUFMcUI7QUFNM0IsWUFBVSxJQU5pQjtBQU8zQixpQkFBZTtBQVBZLEVBQTVCOztBQVVBLEtBQUksR0FBSixHQUFVLElBQVY7O0FBRUE7QUFDQSxVQUFTLFFBQVQsQ0FBa0IsU0FBbEIsRUFBNkI7QUFDNUIsU0FBTyxJQUFJLE1BQUosQ0FBVyxhQUFhLFNBQWIsR0FBeUIsVUFBcEMs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QUFDckIsVUFBSSxRQUFTLEVBQWI7QUFBQSxVQUNJLFNBQVMsRUFEYjtBQUFBLFVBRUksT0FBUyxRQUFRLE1BRnJCO0FBQUEsVUFHSSxPQUFTLDJCQUhiOztBQUtBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxJQUFwQixFQUEwQixHQUExQixFQUErQjtBQUM3QixnQkFBUSwyQkFBMkIsQ0FBM0IsR0FBK0IsVUFBdkM7QUFDRDs7QUFFRCxjQUFRLFFBQVI7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7QUFDRjtBQXJCTSxDQUFUOztrQkF3QmUsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cbi8vXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cblxuaW1wb3J0IERFIGZyb20gJy4vbW9kdWxlcy9kb3RzJztcblxuKCgkKSA9PiB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvLyBIYW1idXJnZXJcblx0dmFyICRoYW1idXJnZXIgPSAkKFwiLmhhbWJ1cmdlclwiKTtcblx0JGhhbWJ1cmdlci5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0JGhhbWJ1cmdlci50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcblx0XHQkKFwiLmhlYWRlci1uYXZfX2xpc3RcIikudG9nZ2xlQ2xhc3MoXCJoaWRkZW5cIik7XG5cdH0pO1xuXG5cdCQoJy5oZWFkZXItbmF2X19pdGVtJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXHRcdCQoJy5oZWFkZXItbmF2X19saXN0JykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuXHRcdCRoYW1idXJnZXIucmVtb3ZlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cdH0pO1xuXG5cdC8vIFNsaWRlIGRvd25cblx0JChcIi5zY3JvbGwtYnRuXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoXCIuaGVhZGVyXCIpLmhlaWdodCgpICsgNzAgfSwgXCJzbG93XCIpO1xuXHR9KTtcblxuXHQvLyBTbGlkZXIgXG5cdCQoJy5yZXZpZXdzX19zbGlkZXInKS5zbGljayh7XG5cdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0c3BlZWQ6IDMwMCxcblx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cdFx0ZG90czogdHJ1ZSxcblx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRhdXRvcGxheVNwZWVkOiAzMDAwXG5cdH0pO1xuXG5cdG5ldyBXT1coKS5pbml0KCk7XG5cblx0Ly8gQ2xhc3NpZSBmb3IgY3VzdG9tIGlucHV0c1xuXHRmdW5jdGlvbiBjbGFzc1JlZyhjbGFzc05hbWUpIHtcblx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcIihefFxcXFxzKylcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzK3wkKVwiKTtcblx0fVxuXG5cdHZhciBoYXNDbGFzcywgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzO1xuXG5cdGlmICgnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHRoYXNDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoYyk7XG5cdFx0fTtcblx0XHRhZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjKSB7XG5cdFx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoYyk7XG5cdFx0fTtcblx0XHRyZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjKSB7XG5cdFx0XHRlbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG5cdFx0fTtcblx0fVxuXHRlbHNlIHtcblx0XHRoYXNDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NSZWcoYykudGVzdChlbGVtLmNsYXNzTmFtZSk7XG5cdFx0fTtcblx0XHRhZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtLCBjKSB7XG5cdFx0XHRpZiAoIWhhc0NsYXNzKGVsZW0sIGMpKSB7XG5cdFx0XHRcdGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUgKyAnICcgKyBjO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbSwgYykge1xuXHRcdFx0ZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKGNsYXNzUmVnKGMpLCAnICcpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtLCBjKSB7XG5cdFx0dmFyIGZuID0gaGFzQ2xhc3MoZWxlbSwgYykgPyByZW1vdmVDbGFzcyA6IGFkZENsYXNzO1xuXHRcdGZuKGVsZW0sIGMpO1xuXHR9XG5cblx0dmFyIGNsYXNzaWUgPSB7XG5cdFx0Ly8gZnVsbCBuYW1lc1xuXHRcdGhhc0NsYXNzOiBoYXNDbGFzcyxcblx0XHRhZGRDbGFzczogYWRkQ2xhc3MsXG5cdFx0cmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuXHRcdHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcblx0XHQvLyBzaG9ydCBuYW1lc1xuXHRcdGhhczogaGFzQ2xhc3MsXG5cdFx0YWRkOiBhZGRDbGFzcyxcblx0XHRyZW1vdmU6IHJlbW92ZUNsYXNzLFxuXHRcdHRvZ2dsZTogdG9nZ2xlQ2xhc3Ncblx0fTtcblxuXHQvLyBJTlBVVCBDSEFOR0VSXG5cdFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQuaW5wdXRfX2ZpZWxkJykpLmZvckVhY2goZnVuY3Rpb24gKGlucHV0RWwpIHtcblx0XHQvLyBpbiBjYXNlIHRoZSBpbnB1dCBpcyBhbHJlYWR5IGZpbGxlZC4uXG5cdFx0aWYgKGlucHV0RWwudmFsdWUudHJpbSgpICE9PSAnJykge1xuXHRcdFx0Y2xhc3NpZS5hZGQoaW5wdXRFbC5wYXJlbnROb2RlLCAnaW5wdXQtLWZpbGxlZCcpO1xuXHRcdH1cblxuXHRcdC8vIGV2ZW50czpcblx0XHRpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25JbnB1dEZvY3VzKTtcblx0XHRpbnB1dEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbklucHV0Qmx1cik7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIG9uSW5wdXRGb2N1cyhldikge1xuXHRcdGNsYXNzaWUuYWRkKGV2LnRhcmdldC5wYXJlbnROb2RlLCAnaW5wdXQtLWZpbGxlZCcpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb25JbnB1dEJsdXIoZXYpIHtcblx0XHRpZiAoZXYudGFyZ2V0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdGNsYXNzaWUucmVtb3ZlKGV2LnRhcmdldC5wYXJlbnROb2RlLCAnaW5wdXQtLWZpbGxlZCcpO1xuXHRcdH1cblx0fVxuXG59KShqUXVlcnkpOyIsIi8vIFRoaXMgaXMgYW4gZXhhbXBsZXMgb2Ygc2ltcGxlIGV4cG9ydC5cbi8vXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxuXG52YXIgREUgPSB7XG4gIGRvdHNFZmZlY3Q6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkY250ICA9ICQoJyNob21lLWNhbnZhcycpLFxuICAgICAgICBjZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgICAkY250Lmh0bWwoY2VsbHMpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2VsbHMoKSB7XG4gICAgICB2YXIgd2lkdGggID0gMTAsXG4gICAgICAgICAgaGVpZ2h0ID0gMTAsXG4gICAgICAgICAgc2l6ZSAgID0gd2lkdGggKiBoZWlnaHQsXG4gICAgICAgICAgaHRtbCAgID0gJzxkaXYgY2xhc3M9XCJlbnRyeS1jZWxsc1wiPic7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJjZWxsIGNlbGwtJyArIGkgKyAnXCI+PC9kaXY+JztcbiAgICAgIH1cblxuICAgICAgaHRtbCArPSAnPC9kaXY+JztcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBERTsiXX0=
