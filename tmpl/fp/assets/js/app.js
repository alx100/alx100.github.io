(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import DE from './modules/helpers';

(function ($) {
    'use strict';

    // Nav hamburger

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        $('.nav-list').toggleClass('hidden');
    });

    $('.nav-list__item').click(function () {
        $('.nav-list').addClass('hidden');
        $hamburger.removeClass("is-active");
    });

    // Clients slider
    $('.clients__slider').slick({
        nextArrow: '<i class="fa fa-chevron-right slider-arrow slider-arrow__right" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-chevron-left slider-arrow slider-arrow__left" ="true"></i>',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDSjs7QUFFQTs7QUFDQSxRQUFJLGFBQWEsRUFBRSxZQUFGLENBQWpCO0FBQ0EsZUFBVyxFQUFYLENBQWMsT0FBZCxFQUF1QixVQUFVLENBQVYsRUFBYTtBQUNoQyxtQkFBVyxXQUFYLENBQXVCLFdBQXZCO0FBQ0EsVUFBRSxXQUFGLEVBQWUsV0FBZixDQUEyQixRQUEzQjtBQUNILEtBSEQ7O0FBS0MsTUFBRSxpQkFBRixFQUFxQixLQUFyQixDQUEyQixZQUFVO0FBQ2xDLFVBQUUsV0FBRixFQUFlLFFBQWYsQ0FBd0IsUUFBeEI7QUFDQSxtQkFBVyxXQUFYLENBQXVCLFdBQXZCO0FBQ0gsS0FIQTs7QUFLRDtBQUNDLE1BQUUsa0JBQUYsRUFBc0IsS0FBdEIsQ0FBNEI7QUFDekIsbUJBQVcseUZBRGM7QUFFekIsbUJBQVcsNEVBRmM7QUFHekIsa0JBQVUsSUFIZTtBQUl6QixlQUFPLEdBSmtCO0FBS3pCLHNCQUFjLENBTFc7QUFNekIsd0JBQWdCLElBTlM7QUFPekIsa0JBQVUsSUFQZTtBQVF6Qix1QkFBZTtBQVJVLEtBQTVCO0FBYUosQ0E3QkQsRUE2QkcsTUE3QkgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXG4vL1xuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXG5cbi8vIGltcG9ydCBERSBmcm9tICcuL21vZHVsZXMvaGVscGVycyc7XG5cbigoJCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBcbiAgICAvLyBOYXYgaGFtYnVyZ2VyXG4gICAgbGV0ICRoYW1idXJnZXIgPSAkKFwiLmhhbWJ1cmdlclwiKTtcbiAgICAkaGFtYnVyZ2VyLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJGhhbWJ1cmdlci50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgICAgICAgJCgnLm5hdi1saXN0JykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH0pO1xuXG4gICAgICQoJy5uYXYtbGlzdF9faXRlbScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5uYXYtbGlzdCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgJGhhbWJ1cmdlci5yZW1vdmVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIENsaWVudHMgc2xpZGVyXG4gICAgICQoJy5jbGllbnRzX19zbGlkZXInKS5zbGljayh7XG4gICAgICAgIG5leHRBcnJvdzogJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodCBzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93X19yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4nLFxuICAgICAgICBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdCBzbGlkZXItYXJyb3cgc2xpZGVyLWFycm93X19sZWZ0XCIgPVwidHJ1ZVwiPjwvaT4nLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDBcbiAgICB9KTtcblxuICAgIFxuXG59KShqUXVlcnkpOyJdfQ==
