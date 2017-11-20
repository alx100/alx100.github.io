const WorksSlider = () => {
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      }
    ]
  });

};

export default WorksSlider;