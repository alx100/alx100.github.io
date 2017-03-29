$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    };
    $('body').removeClass('loaded');
});
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */
$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() { $(this).attr('placeholder', ''); });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    $('.button-nav').click(function() {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });


});

var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    // $('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);

$(document).ready(function() {
    $('.slider').slick({
        nextArrow: '<span class="slider__button--next"><span class="icon-shevron-right shevron-right"></span></span>',
        prevArrow: '<span class="slider__button--prev"><span class="icon-shevron-left shevron-left"></span></span>',
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});