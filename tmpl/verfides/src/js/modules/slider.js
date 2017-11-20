const Slider = () => {
  if(matchMedia) {
    var screen = window.matchMedia("(max-width:760px)");
    screen.addListener(changes);
    changes(screen);
  }
    function changes(screen) {
      if(screen.matches) {
        $('.service-list').removeClass('service-list__slider');
        $('.service-list').slick('destroy');
      }
      else {
        $('.service-list').slick({
          nextArrow: '<span class="icon-chevron-r slider-arrow slider-arrow__right"></span>',
          prevArrow: '<span class="icon-chevron-l slider-arrow slider-arrow__left"></span>',
          infinite: true,
          speed: 800,
          slidesToShow: 4,
          slidesToScroll: 4,
          adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 1080,
              settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]
          
        });
      }
    }
};

export default Slider;