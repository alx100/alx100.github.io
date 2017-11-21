const UnitSlider = () => {
  $('.unit-slider').slick({
    fade: true,
    dots: true,
    arrows: false,
    accessibility: true
  });
  $('.unit-slider').show();
};

export default UnitSlider;