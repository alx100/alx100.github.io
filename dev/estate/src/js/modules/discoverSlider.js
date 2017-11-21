const DiscoverSlider = () => {

  if (matchMedia) {
    var screen = window.matchMedia("(max-width:860px)");
    screen.addListener(changes);
    changes(screen);
  }

  function changes(screen) {
    if (screen.matches) {
      $('.project-slider__list').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      });
    }
    else {
      try {
        $('.project-slider__list').slick('unslick');
      } catch (error) {
      }

      $('.item-content').matchHeight({
        byRow: false,
        property: 'min-height',
        target: null,
        remove: false
      });
    }
  }

};

export default DiscoverSlider;