// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

// import DE from './modules/helpers';

(($) => {
    'use strict';
    
    // Nav hamburger
    let $hamburger = $(".hamburger");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        $('.nav-list').toggleClass('hidden');
    });

     $('.nav-list__item').click(function(){
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