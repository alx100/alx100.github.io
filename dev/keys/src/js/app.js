// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.



(($) => {
    'use strict';

    // When DOM is ready
    $(() => {

        //navigation
        var navOpener = $('.nav-opener'),
            navHolder = $('.nav');
        navOpener.on('click', function(e) {
            navHolder.toggleClass("nav-opened");
            navOpener.toggleClass("nav-opened");
        });
        $('.owl-carousel').owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1

                },

                480: {
                    items: 2
                },

                768: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    });


})(jQuery);
