const Popup = () => {

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
            open: function () {
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

export default Popup;