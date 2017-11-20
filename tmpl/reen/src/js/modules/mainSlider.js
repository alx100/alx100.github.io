const MainSlider = () => {
  $('.slider').slick({
    nextArrow: '<i class="icon-right-open slider-arrow slider-arrow__right"></i>',
    prevArrow: '<i class="icon-left-open slider-arrow slider-arrow__left"></i>',
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    dots: true,
    adaptiveHeight: false,
    accessibility: false,
    slidesToScroll: 1
  });
};

export default MainSlider;